const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CIzBep1V2.js","./D_V5vJ1p2.js","./De2cniRw2.js","./D4UN8PwO2.js","./Dhh-3bRk2.js","./D-tZ3xZ12.js","./ClPfa_YR2.js","./CqDUf9P52.js","./CwbQfhjE.js","./CC8J6EOm.js","./CileNsNf.js","./DqXVN_13.js","./rBc6yGzf.js","./DanOFsdE.js","./6v8rsjPl.js","./CdTmSIIv.js","./CM80llBn.js","./CwINo6Si.js","./DytEYUWx.js","./Bmav9iIo.js","./DEXxaLkj.js","./CHrglJfw.js","./D1EPlc7z.js","./Di3441se.js","./C20KsuxJ.js","./c3d1lfra.js","./ZVcoE7hM.js","./DfVBGCpD.js","./CVFU5Vyb.js","./DrDyrUFj.js","./CP0jAhR2.js","./B80RdKGf.js","./BmRrtDuE.js","./BnbgeTDP.js","./U_35_Ciy.js","./CWVb4xh3.js","./F1gSqz83.js","./C0R819dR.js","./DMkI6ZeX.js","./CeS43T4e.js","./BN5diBBM.js","./FcOim997.js","./B4L6R2cR.js","./85YaU-Ve.js","./DaCFJwwd2.js","./DUTPaVJl2.js","./RG6Q0Xx_2.js","./CvejV0SN2.js","./bmRnkJVk2.js","./l51pc40l2.js","./JAd4VfMy2.js","./D1n6XJlP2.js","./Bm_g4N2f2.js","./gNV-8Sms2.js","./simZEv8Q2.js","./CgUGSNM82.js","./CZrWFihY2.js","./CyIhl0hA2.js","./C28nb3XU2.js","./54xgNNck2.js","./D1XmNh0j2.js","./z5toELrh2.js","./CY0zjI2i2.js","./AkGJIgTR2.js","./BgZV12Ds2.js","./emCrmoKJ.js","./maPVz-p72.js","./BEm7lZQ62.js","./D2ikVUCI2.js","./EGdTu9I_.js","./D7w83pkd.js","./BvR62Yfx2.js","./ybD6Y-Z5.js","./Ckze4ZUK.js","./IMQvmwp9.js","./B5fobsH22.js"])))=>i.map(i=>d[i]);
import{t}from"./DbYNonRq.js";import{i as r,n as e,r as a,t as i}from"./D_V5vJ1p2.js";import{i as o,n,o as s,r as c}from"./De2cniRw2.js";import{a as l,n as g,r as p}from"./CNF0GL9S2.js";var u={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:e},h=(t=u,r,e)=>{const{kind:a,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),"accessor"===a){const{name:a}=e;return{set(e){const i=r.get.call(this);r.set.call(this,e),this.requestUpdate(a,i,t)},init(r){return void 0!==r&&this.C(a,void 0,t,r),r}}}if("setter"===a){const{name:a}=e;return function(e){const i=this[a];r.call(this,e),this.requestUpdate(a,i,t)}}throw Error("Unsupported decorator location: "+a)};function m(t){return(r,e)=>"object"==typeof e?h(t,r,e):((t,r,e)=>{const a=r.hasOwnProperty(e);return r.constructor.createProperty(e,t),a?Object.getOwnPropertyDescriptor(r,e):void 0})(t,r,e)}function v(t){return m({...t,state:!0,attribute:!1})}var w={getSpacingStyles:(t,r)=>Array.isArray(t)?t[r]?`var(--wui-spacing-${t[r]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch(r){return""}},getTruncateString:({string:t,charsStart:r,charsEnd:e,truncate:a})=>t.length<=r+e?t:"end"===a?`${t.substring(0,r)}...`:"start"===a?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(r))}...${t.substring(t.length-Math.floor(e))}`,generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),e=this.hexToRgb(r),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),i=100-3*Number(a?.replace("px","")),o=`${i}% ${i}% at 65% 40%`,n=[];for(let s=0;s<5;s+=1){const t=this.tintColor(e,.15*s);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(t){const r=parseInt(t,16);return[r>>16&255,r>>8&255,255&r]},tintColor(t,r){const[e,a,i]=t;return[Math.round(e+(255-e)*r),Math.round(a+(255-a)*r),Math.round(i+(255-i)*r)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme:t=>t||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark"),splitBalance(t){const r=t.split(".");return 2===r.length?[r[0],r[1]]:["0","00"]},roundNumber:(t,r,e)=>t.toString().length>=r?Number(t).toFixed(e):t,formatNumberToLocalString:(t,r=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r})};function d(t){return function(r){return"function"==typeof r?function(t,r){return customElements.get(t)||customElements.define(t,r),r}(t,r):function(t,r){const{kind:e,elements:a}=r;return{kind:e,elements:a,finisher(r){customElements.get(t)||customElements.define(t,r)}}}(t,r)}}var _=r`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,f=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},y=class extends i{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};\n    `,s`<slot></slot>`}};y.styles=[l,_],f([m()],y.prototype,"flexDirection",void 0),f([m()],y.prototype,"flexWrap",void 0),f([m()],y.prototype,"flexBasis",void 0),f([m()],y.prototype,"flexGrow",void 0),f([m()],y.prototype,"flexShrink",void 0),f([m()],y.prototype,"alignItems",void 0),f([m()],y.prototype,"justifyContent",void 0),f([m()],y.prototype,"columnGap",void 0),f([m()],y.prototype,"rowGap",void 0),f([m()],y.prototype,"gap",void 0),f([m()],y.prototype,"padding",void 0),f([m()],y.prototype,"margin",void 0),y=f([d("wui-flex")],y);var S=t=>t??n,{I:b}=o,E=1,$=2,j=t=>(...r)=>({_$litDirective$:t,values:r}),x=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,e){this._$Ct=t,this._$AM=r,this._$Ci=e}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}},P=(t,r)=>{const e=t._$AN;if(void 0===e)return!1;for(const a of e)a._$AO?.(r,!1),P(a,r);return!0},R=t=>{let r,e;do{if(void 0===(r=t._$AM))break;e=r._$AN,e.delete(t),t=r}while(0===e?.size)},A=t=>{for(let r;r=t._$AM;t=r){let e=r._$AN;if(void 0===e)r._$AN=e=new Set;else if(e.has(t))break;e.add(t),k(r)}};function T(t){void 0!==this._$AN?(R(this),this._$AM=t,A(this)):this._$AM=t}function O(t,r=!1,e=0){const a=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(r)if(Array.isArray(a))for(let o=e;o<a.length;o++)P(a[o],!1),R(a[o]);else null!=a&&(P(a,!1),R(a));else P(this,t)}var k=t=>{t.type==$&&(t._$AP??=O,t._$AQ??=T)},L=class extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,e){super._$AT(t,r,e),A(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(P(this,t),R(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}},D=class{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}},I=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}},C=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,z=1073741823,V=j(class extends L{constructor(){super(...arguments),this._$Cwt=z,this._$Cbt=[],this._$CK=new D(this),this._$CX=new I}render(...t){return t.find(t=>!C(t))??c}update(t,r){const e=this._$Cbt;let a=e.length;this._$Cbt=r;const i=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let n=0;n<r.length&&!(n>this._$Cwt);n++){const t=r[n];if(!C(t))return this._$Cwt=n,t;n<a&&t===e[n]||(this._$Cwt=z,a=0,Promise.resolve(t).then(async r=>{for(;o.get();)await o.get();const e=i.deref();if(void 0!==e){const a=e._$Cbt.indexOf(t);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(r))}}))}return c}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}),B=new class{constructor(){this.cache=new Map}set(t,r){this.cache.set(t,r)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}},H=r`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,M=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},F={add:async()=>(await t(async()=>{const{addSvg:t}=await import("./CIzBep1V2.js");return{addSvg:t}},__vite__mapDeps([0,1,2]),import.meta.url)).addSvg,allWallets:async()=>(await t(async()=>{const{allWalletsSvg:t}=await import("./D4UN8PwO2.js");return{allWalletsSvg:t}},__vite__mapDeps([3,1,2]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await t(async()=>{const{arrowBottomCircleSvg:t}=await import("./Dhh-3bRk2.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([4,1,2]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await t(async()=>{const{appStoreSvg:t}=await import("./D-tZ3xZ12.js");return{appStoreSvg:t}},__vite__mapDeps([5,1,2]),import.meta.url)).appStoreSvg,apple:async()=>(await t(async()=>{const{appleSvg:t}=await import("./ClPfa_YR2.js");return{appleSvg:t}},__vite__mapDeps([6,1,2]),import.meta.url)).appleSvg,arrowBottom:async()=>(await t(async()=>{const{arrowBottomSvg:t}=await import("./CqDUf9P52.js");return{arrowBottomSvg:t}},__vite__mapDeps([7,1,2]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await t(async()=>{const{arrowLeftSvg:t}=await import("./CwbQfhjE.js");return{arrowLeftSvg:t}},__vite__mapDeps([8,1,2]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await t(async()=>{const{arrowRightSvg:t}=await import("./CC8J6EOm.js");return{arrowRightSvg:t}},__vite__mapDeps([9,1,2]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await t(async()=>{const{arrowTopSvg:t}=await import("./CileNsNf.js");return{arrowTopSvg:t}},__vite__mapDeps([10,1,2]),import.meta.url)).arrowTopSvg,bank:async()=>(await t(async()=>{const{bankSvg:t}=await import("./DqXVN_13.js");return{bankSvg:t}},__vite__mapDeps([11,1,2]),import.meta.url)).bankSvg,browser:async()=>(await t(async()=>{const{browserSvg:t}=await import("./rBc6yGzf.js");return{browserSvg:t}},__vite__mapDeps([12,1,2]),import.meta.url)).browserSvg,card:async()=>(await t(async()=>{const{cardSvg:t}=await import("./DanOFsdE.js");return{cardSvg:t}},__vite__mapDeps([13,1,2]),import.meta.url)).cardSvg,checkmark:async()=>(await t(async()=>{const{checkmarkSvg:t}=await import("./6v8rsjPl.js");return{checkmarkSvg:t}},__vite__mapDeps([14,1,2]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await t(async()=>{const{checkmarkBoldSvg:t}=await import("./CdTmSIIv.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([15,1,2]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await t(async()=>{const{chevronBottomSvg:t}=await import("./CM80llBn.js");return{chevronBottomSvg:t}},__vite__mapDeps([16,1,2]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await t(async()=>{const{chevronLeftSvg:t}=await import("./CwINo6Si.js");return{chevronLeftSvg:t}},__vite__mapDeps([17,1,2]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await t(async()=>{const{chevronRightSvg:t}=await import("./DytEYUWx.js");return{chevronRightSvg:t}},__vite__mapDeps([18,1,2]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await t(async()=>{const{chevronTopSvg:t}=await import("./Bmav9iIo.js");return{chevronTopSvg:t}},__vite__mapDeps([19,1,2]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await t(async()=>{const{chromeStoreSvg:t}=await import("./DEXxaLkj.js");return{chromeStoreSvg:t}},__vite__mapDeps([20,1,2]),import.meta.url)).chromeStoreSvg,clock:async()=>(await t(async()=>{const{clockSvg:t}=await import("./CHrglJfw.js");return{clockSvg:t}},__vite__mapDeps([21,1,2]),import.meta.url)).clockSvg,close:async()=>(await t(async()=>{const{closeSvg:t}=await import("./D1EPlc7z.js");return{closeSvg:t}},__vite__mapDeps([22,1,2]),import.meta.url)).closeSvg,compass:async()=>(await t(async()=>{const{compassSvg:t}=await import("./Di3441se.js");return{compassSvg:t}},__vite__mapDeps([23,1,2]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await t(async()=>{const{coinPlaceholderSvg:t}=await import("./C20KsuxJ.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([24,1,2]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await t(async()=>{const{copySvg:t}=await import("./c3d1lfra.js");return{copySvg:t}},__vite__mapDeps([25,1,2]),import.meta.url)).copySvg,cursor:async()=>(await t(async()=>{const{cursorSvg:t}=await import("./ZVcoE7hM.js");return{cursorSvg:t}},__vite__mapDeps([26,1,2]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await t(async()=>{const{cursorTransparentSvg:t}=await import("./DfVBGCpD.js");return{cursorTransparentSvg:t}},__vite__mapDeps([27,1,2]),import.meta.url)).cursorTransparentSvg,desktop:async()=>(await t(async()=>{const{desktopSvg:t}=await import("./CVFU5Vyb.js");return{desktopSvg:t}},__vite__mapDeps([28,1,2]),import.meta.url)).desktopSvg,disconnect:async()=>(await t(async()=>{const{disconnectSvg:t}=await import("./DrDyrUFj.js");return{disconnectSvg:t}},__vite__mapDeps([29,1,2]),import.meta.url)).disconnectSvg,discord:async()=>(await t(async()=>{const{discordSvg:t}=await import("./CP0jAhR2.js");return{discordSvg:t}},__vite__mapDeps([30,1,2]),import.meta.url)).discordSvg,etherscan:async()=>(await t(async()=>{const{etherscanSvg:t}=await import("./B80RdKGf.js");return{etherscanSvg:t}},__vite__mapDeps([31,1,2]),import.meta.url)).etherscanSvg,extension:async()=>(await t(async()=>{const{extensionSvg:t}=await import("./BmRrtDuE.js");return{extensionSvg:t}},__vite__mapDeps([32,1,2]),import.meta.url)).extensionSvg,externalLink:async()=>(await t(async()=>{const{externalLinkSvg:t}=await import("./BnbgeTDP.js");return{externalLinkSvg:t}},__vite__mapDeps([33,1,2]),import.meta.url)).externalLinkSvg,facebook:async()=>(await t(async()=>{const{facebookSvg:t}=await import("./U_35_Ciy.js");return{facebookSvg:t}},__vite__mapDeps([34,1,2]),import.meta.url)).facebookSvg,farcaster:async()=>(await t(async()=>{const{farcasterSvg:t}=await import("./CWVb4xh3.js");return{farcasterSvg:t}},__vite__mapDeps([35,1,2]),import.meta.url)).farcasterSvg,filters:async()=>(await t(async()=>{const{filtersSvg:t}=await import("./F1gSqz83.js");return{filtersSvg:t}},__vite__mapDeps([36,1,2]),import.meta.url)).filtersSvg,github:async()=>(await t(async()=>{const{githubSvg:t}=await import("./C0R819dR.js");return{githubSvg:t}},__vite__mapDeps([37,1,2]),import.meta.url)).githubSvg,google:async()=>(await t(async()=>{const{googleSvg:t}=await import("./DMkI6ZeX.js");return{googleSvg:t}},__vite__mapDeps([38,1,2]),import.meta.url)).googleSvg,helpCircle:async()=>(await t(async()=>{const{helpCircleSvg:t}=await import("./CeS43T4e.js");return{helpCircleSvg:t}},__vite__mapDeps([39,1,2]),import.meta.url)).helpCircleSvg,image:async()=>(await t(async()=>{const{imageSvg:t}=await import("./BN5diBBM.js");return{imageSvg:t}},__vite__mapDeps([40,1,2]),import.meta.url)).imageSvg,id:async()=>(await t(async()=>{const{idSvg:t}=await import("./FcOim997.js");return{idSvg:t}},__vite__mapDeps([41,1,2]),import.meta.url)).idSvg,infoCircle:async()=>(await t(async()=>{const{infoCircleSvg:t}=await import("./B4L6R2cR.js");return{infoCircleSvg:t}},__vite__mapDeps([42,1,2]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await t(async()=>{const{lightbulbSvg:t}=await import("./85YaU-Ve.js");return{lightbulbSvg:t}},__vite__mapDeps([43,1,2]),import.meta.url)).lightbulbSvg,mail:async()=>(await t(async()=>{const{mailSvg:t}=await import("./DaCFJwwd2.js");return{mailSvg:t}},__vite__mapDeps([44,1,2]),import.meta.url)).mailSvg,mobile:async()=>(await t(async()=>{const{mobileSvg:t}=await import("./DUTPaVJl2.js");return{mobileSvg:t}},__vite__mapDeps([45,1,2]),import.meta.url)).mobileSvg,more:async()=>(await t(async()=>{const{moreSvg:t}=await import("./RG6Q0Xx_2.js");return{moreSvg:t}},__vite__mapDeps([46,1,2]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await t(async()=>{const{networkPlaceholderSvg:t}=await import("./CvejV0SN2.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([47,1,2]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await t(async()=>{const{nftPlaceholderSvg:t}=await import("./bmRnkJVk2.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([48,1,2]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await t(async()=>{const{offSvg:t}=await import("./l51pc40l2.js");return{offSvg:t}},__vite__mapDeps([49,1,2]),import.meta.url)).offSvg,playStore:async()=>(await t(async()=>{const{playStoreSvg:t}=await import("./JAd4VfMy2.js");return{playStoreSvg:t}},__vite__mapDeps([50,1,2]),import.meta.url)).playStoreSvg,plus:async()=>(await t(async()=>{const{plusSvg:t}=await import("./D1n6XJlP2.js");return{plusSvg:t}},__vite__mapDeps([51,1,2]),import.meta.url)).plusSvg,qrCode:async()=>(await t(async()=>{const{qrCodeIcon:t}=await import("./Bm_g4N2f2.js");return{qrCodeIcon:t}},__vite__mapDeps([52,1,2]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await t(async()=>{const{recycleHorizontalSvg:t}=await import("./gNV-8Sms2.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([53,1,2]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await t(async()=>{const{refreshSvg:t}=await import("./simZEv8Q2.js");return{refreshSvg:t}},__vite__mapDeps([54,1,2]),import.meta.url)).refreshSvg,search:async()=>(await t(async()=>{const{searchSvg:t}=await import("./CgUGSNM82.js");return{searchSvg:t}},__vite__mapDeps([55,1,2]),import.meta.url)).searchSvg,send:async()=>(await t(async()=>{const{sendSvg:t}=await import("./CZrWFihY2.js");return{sendSvg:t}},__vite__mapDeps([56,1,2]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await t(async()=>{const{swapHorizontalSvg:t}=await import("./CyIhl0hA2.js");return{swapHorizontalSvg:t}},__vite__mapDeps([57,1,2]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await t(async()=>{const{swapHorizontalMediumSvg:t}=await import("./C28nb3XU2.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([58,1,2]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await t(async()=>{const{swapHorizontalBoldSvg:t}=await import("./54xgNNck2.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([59,1,2]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await t(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./D1XmNh0j2.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([60,1,2]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await t(async()=>{const{swapVerticalSvg:t}=await import("./z5toELrh2.js");return{swapVerticalSvg:t}},__vite__mapDeps([61,1,2]),import.meta.url)).swapVerticalSvg,telegram:async()=>(await t(async()=>{const{telegramSvg:t}=await import("./CY0zjI2i2.js");return{telegramSvg:t}},__vite__mapDeps([62,1,2]),import.meta.url)).telegramSvg,threeDots:async()=>(await t(async()=>{const{threeDotsSvg:t}=await import("./AkGJIgTR2.js");return{threeDotsSvg:t}},__vite__mapDeps([63,1,2]),import.meta.url)).threeDotsSvg,twitch:async()=>(await t(async()=>{const{twitchSvg:t}=await import("./BgZV12Ds2.js");return{twitchSvg:t}},__vite__mapDeps([64,1,2]),import.meta.url)).twitchSvg,twitter:async()=>(await t(async()=>{const{xSvg:t}=await import("./emCrmoKJ.js");return{xSvg:t}},__vite__mapDeps([65,1,2]),import.meta.url)).xSvg,twitterIcon:async()=>(await t(async()=>{const{twitterIconSvg:t}=await import("./maPVz-p72.js");return{twitterIconSvg:t}},__vite__mapDeps([66,1,2]),import.meta.url)).twitterIconSvg,verify:async()=>(await t(async()=>{const{verifySvg:t}=await import("./BEm7lZQ62.js");return{verifySvg:t}},__vite__mapDeps([67,1,2]),import.meta.url)).verifySvg,verifyFilled:async()=>(await t(async()=>{const{verifyFilledSvg:t}=await import("./D2ikVUCI2.js");return{verifyFilledSvg:t}},__vite__mapDeps([68,1,2]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await t(async()=>{const{walletSvg:t}=await import("./EGdTu9I_.js");return{walletSvg:t}},__vite__mapDeps([69,1,2]),import.meta.url)).walletSvg,walletConnect:async()=>(await t(async()=>{const{walletConnectSvg:t}=await import("./D7w83pkd.js");return{walletConnectSvg:t}},__vite__mapDeps([70,1,2]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await t(async()=>{const{walletConnectLightBrownSvg:t}=await import("./D7w83pkd.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([70,1,2]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await t(async()=>{const{walletConnectBrownSvg:t}=await import("./D7w83pkd.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([70,1,2]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await t(async()=>{const{walletPlaceholderSvg:t}=await import("./BvR62Yfx2.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([71,1,2]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await t(async()=>{const{warningCircleSvg:t}=await import("./ybD6Y-Z5.js");return{warningCircleSvg:t}},__vite__mapDeps([72,1,2]),import.meta.url)).warningCircleSvg,x:async()=>(await t(async()=>{const{xSvg:t}=await import("./emCrmoKJ.js");return{xSvg:t}},__vite__mapDeps([65,1,2]),import.meta.url)).xSvg,info:async()=>(await t(async()=>{const{infoSvg:t}=await import("./Ckze4ZUK.js");return{infoSvg:t}},__vite__mapDeps([73,1,2]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await t(async()=>{const{exclamationTriangleSvg:t}=await import("./IMQvmwp9.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([74,1,2]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await t(async()=>{const{reownSvg:t}=await import("./B5fobsH22.js");return{reownSvg:t}},__vite__mapDeps([75,1,2]),import.meta.url)).reownSvg};var G=class extends i{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,s`${V(async function(t){if(B.has(t))return B.get(t);const r=(F[t]??F.copy)();return B.set(t,r),r}(this.name),s`<div class="fallback"></div>`)}`}};G.styles=[l,g,H],M([m()],G.prototype,"size",void 0),M([m()],G.prototype,"name",void 0),M([m()],G.prototype,"color",void 0),M([m()],G.prototype,"aspectRatio",void 0),G=M([d("wui-icon")],G);var N=j(class extends x{constructor(t){if(super(t),t.type!==E||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(r=>t[r]).join(" ")+" "}update(t,[r]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in r)r[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(r)}const e=t.element.classList;for(const a of this.st)a in r||(e.remove(a),this.st.delete(a));for(const a in r){const t=!!r[a];t===this.st.has(a)||this.nt?.has(a)||(t?(e.add(a),this.st.add(a)):(e.remove(a),this.st.delete(a)))}return c}}),U=r`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,q=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},W=class extends i{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,s`<slot class=${N(t)}></slot>`}};W.styles=[l,U],q([m()],W.prototype,"variant",void 0),q([m()],W.prototype,"color",void 0),q([m()],W.prototype,"align",void 0),q([m()],W.prototype,"lineClamp",void 0),W=q([d("wui-text")],W);var Y=r`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,X=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},Z=class extends i{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,r="lg"===this.size,e="xl"===this.size,a=r?"12%":"16%",i=r?"xxs":e?"s":"3xl",o="gray"===this.background,n="opaque"===this.background,c="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||o?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${i});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,s` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Z.styles=[l,p,Y],X([m()],Z.prototype,"size",void 0),X([m()],Z.prototype,"backgroundColor",void 0),X([m()],Z.prototype,"iconColor",void 0),X([m()],Z.prototype,"iconSize",void 0),X([m()],Z.prototype,"background",void 0),X([m({type:Boolean})],Z.prototype,"border",void 0),X([m()],Z.prototype,"borderColor",void 0),X([m()],Z.prototype,"icon",void 0),Z=X([d("wui-icon-box")],Z);var K=r`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,Q=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},J=class extends i{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,s`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};J.styles=[l,g,K],Q([m()],J.prototype,"src",void 0),Q([m()],J.prototype,"alt",void 0),Q([m()],J.prototype,"size",void 0),J=Q([d("wui-image")],J);var tt=r`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,rt=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},et=class extends i{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return s`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};et.styles=[l,tt],rt([m()],et.prototype,"variant",void 0),rt([m()],et.prototype,"size",void 0),et=rt([d("wui-tag")],et);var at=r`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,it=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n},ot=class extends i{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,s`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ot.styles=[l,at],it([m()],ot.prototype,"color",void 0),it([m()],ot.prototype,"size",void 0),ot=it([d("wui-loading-spinner")],ot);export{d as a,m as c,S as i,L as n,w as o,j as r,v as s,N as t};