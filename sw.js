/*
 * 让位用的 Service Worker —— 占住 /sw.js 这个路径，把历史上注册在这里的老 PWA SW
 * 顶掉，然后把决定权交还给页面。
 *
 * 背景：改造之前，所有域名（deploy.sh 的 TARGETS 里那十几个）都把 SW 注册在
 * /sw.js。现在 PWA 只保留白名单里的域名，而且那些域名要用的真 SW 已经改名到
 * /pwa-sw.js（nuxt.config.ts 的 pwa.filename），于是 /sw.js 这个路径就空出来
 * 专门放这份脚本。
 *
 * 为什么必须走「同路径覆盖」而不能只靠页面里 unregister：
 *   1. 老 SW 把首页 index.html 预缓存成清单里的 "/" 且是 cache-only，用户下次
 *      打开首页拿到的还是旧构建的 JS，跑不到页面侧那段代码 —— 光靠页面兜底
 *      要两次加载才干净。覆盖 /sw.js 则是一跳到位。
 *   2. GitHub Pages / S3 上的老 sw.js 不会因为构建产物里没有了就消失
 *      （deploy.js 只上传、从不删除远端多余文件），不主动覆盖它就会一直生效。
 *
 * 浏览器对 SW 主脚本默认绕过 HTTP 缓存（updateViaCache 默认 'imports'），
 * 而且每次同源导航都会去查一次，所以这份覆盖是可靠的。
 *
 * ★ 这里刻意不判断域名。早先的版本在这儿也放了一份白名单，跟
 *   plugins/pwa-register.client.ts 里的那份重复 —— public/ 下的文件不参与打包，
 *   没法 import 共享常量，两份迟早会漂。改成「本脚本只负责让位，销毁与否由页面决定」
 *   之后就不需要这个知识了：
 *     - 非白名单域名：让位 → 页面刷新 → 新构建的 teardown() 注销本脚本并清空缓存。
 *     - 白名单域名：  让位 → 页面刷新 → 新构建用同一个 scope('/') 注册 /pwa-sw.js，
 *                     按规范这会把本注册的脚本换成真 SW，缓存原封不动。
 *   两条路都只要一跳，而且策略只剩 plugins/pwa-register.client.ts 一处。
 *
 * 关键前提：本脚本始终没有 fetch 监听器。接管之后所有请求直接走网络，
 * 所以下一次加载一定拿得到新构建的 index.html —— 上面两条路都建立在这一点上。
 *
 * 等线上老注册基本清干净（比如放几个月）之后，这个文件可以删掉。
 * 删掉之前先确认 nuxt.config.ts 的 pwa.filename 仍然不是 'sw.js'，
 * 否则真 SW 会重新占回这个路径，把还没清理的老客户端又拉回 PWA。
 */

self.addEventListener('install', () => {
  // 必须跳过 waiting：不跳的话本脚本会一直挂在 waiting，老的 workbox SW 继续用
  // cache-only 喂旧首页，页面永远加载不到新构建、也就永远走不到上面说的那两条路
  // —— 要等用户把所有标签页关光才解得开。
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // 当前开着的页面此刻加载的仍是旧构建的产物（正是老 SW 从预缓存里喂出来的），
    // 得刷一次才能拿到新的。此时本脚本已经接管且不拦请求，这次导航直接走网络，
    // 不会来回循环。
    //
    // 即便这一步整体失败（个别浏览器不支持 client.navigate）也不会卡死：
    // 用户下一次自己跳转同样走网络，只是晚一点。
    try {
      const clients = await self.clients.matchAll({ type: 'window' })
      await Promise.all(clients.map(client => client.navigate(client.url).catch(() => {})))
    } catch {
      // 同上，交给用户的下一次导航
    }
  })())
})
