const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dl98d0st.js","./DsRMQJ18.js","./BISXUWHv.js","./entry.8V63caCa.css","./DIFfro1Y.js","./B3o57c0c.js","./BMosW9r1.js","./BO6KCxHk.js","./BGI2N2d0.js","./DcjHToMC.js","./6rPWuI2a.js","./DJ-51W8P.js","./jiNBpyPN.js","./C9WHS2GH.js","./Ci1BDUA2.js","./CUE0yGMt.js","./CH7RatR6.js","./C5M1IwzM.js","./UphwY2uU.js","./ByeDLaNy.js","./lcZLzwx-.js","./C3anHsYr.js","./-xGoe8HO.js","./D3J7eh8h.js","./BWajTw3-.js","./B6TQM15-.js","./C6UYPAf0.js","./mMsIWpz3.js","./CjMuy4lm.js","./yuV_YvC1.js","./EIxMo548.js","./TZUNUBBa.js","./BimdqkEB.js","./62VEQ7xP.js","./DsjGLvYU.js","./BHGWMEa9.js","./Ch6Qu0tJ.js","./DclwYyqP.js","./DlRP2G4w.js","./BQgza6OA.js","./ZSwEduap.js","./DoAnFknU.js","./BzgPrurK.js","./DwiZTZP0.js","./Kb1JYxBe.js","./W4COT_Ts.js","./Pv5Gmaks.js","./BMbF490N.js","./eao20Pr7.js","./CbVqQ5Qi.js","./Ut0GRjWx.js","./DG7t1ykK.js","./pyaEfpJ_.js","./CuE4sG8r.js","./C6dXJVYY.js","./Bl8qSByl.js","./D0ekk6CN.js","./C45AJ20j.js","./B7uNSlUC.js","./eW2NbkNL.js","./DIGYjRGZ.js","./DHr6xsOR.js","./DuIgD3wX.js","./B7isI1qX.js","./xy9ArRI8.js","./BACRCrn3.js","./BSx8AS3t.js","./CA72grFC.js","./Cadutkl3.js","./DCtEQW7E.js","./DwsUjCY5.js","./BUsiJIyx.js","./-rvdj2HZ.js","./BQ9fZPUX.js","./C61anCeu.js","./DQ3sTa4Q.js","./BslrvXTd.js","./BzW7dfPU.js"])))=>i.map(i=>d[i]);
import{n as t,u as r,i as e,r as a,a as i,m as o,e as n}from"./DsRMQJ18.js";import{x as s,E as c,T as l}from"./DIFfro1Y.js";import{du as g}from"./BISXUWHv.js";const p={getSpacingStyles:(t,r)=>Array.isArray(t)?t[r]?`var(--wui-spacing-${t[r]})`:void 0:"string"==typeof t?`var(--wui-spacing-${t})`:void 0,getFormattedDate:t=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t),getHostName(t){try{return new URL(t).hostname}catch(r){return""}},getTruncateString:({string:t,charsStart:r,charsEnd:e,truncate:a})=>t.length<=r+e?t:"end"===a?`${t.substring(0,r)}...`:"start"===a?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(r))}...${t.substring(t.length-Math.floor(e))}`,generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),e=this.hexToRgb(r),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),i=100-3*Number(null==a?void 0:a.replace("px","")),o=`${i}% ${i}% at 65% 40%`,n=[];for(let s=0;s<5;s+=1){const t=this.tintColor(e,.15*s);n.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${n[0]};\n    --local-color-2: ${n[1]};\n    --local-color-3: ${n[2]};\n    --local-color-4: ${n[3]};\n    --local-color-5: ${n[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(t){const r=parseInt(t,16);return[r>>16&255,r>>8&255,255&r]},tintColor(t,r){const[e,a,i]=t;return[Math.round(e+(255-e)*r),Math.round(a+(255-a)*r),Math.round(i+(255-i)*r)]},isNumber:t=>/^[0-9]+$/u.test(t),getColorTheme(t){var r;return t||("undefined"!=typeof window&&window.matchMedia?(null==(r=window.matchMedia("(prefers-color-scheme: dark)"))?void 0:r.matches)?"dark":"light":"dark")},splitBalance(t){const r=t.split(".");return 2===r.length?[r[0],r[1]]:["0","00"]},roundNumber:(t,r,e)=>t.toString().length>=r?Number(t).toFixed(e):t,formatNumberToLocalString:(t,r=2)=>void 0===t?"0.00":"number"==typeof t?t.toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r})};function u(t){return function(r){return"function"==typeof r?function(t,r){return customElements.get(t)||customElements.define(t,r),r}(t,r):function(t,r){const{kind:e,elements:a}=r;return{kind:e,elements:a,finisher(r){customElements.get(t)||customElements.define(t,r)}}}(t,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h={attribute:!0,type:String,converter:r,reflect:!1,hasChanged:t},m=(t=h,r,e)=>{const{kind:a,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),"accessor"===a){const{name:a}=e;return{set(e){const i=r.get.call(this);r.set.call(this,e),this.requestUpdate(a,i,t)},init(r){return void 0!==r&&this.C(a,void 0,t,r),r}}}if("setter"===a){const{name:a}=e;return function(e){const i=this[a];r.call(this,e),this.requestUpdate(a,i,t)}}throw Error("Unsupported decorator location: "+a)};function v(t){return(r,e)=>"object"==typeof e?m(t,r,e):((t,r,e)=>{const a=r.hasOwnProperty(e);return r.constructor.createProperty(e,t),a?Object.getOwnPropertyDescriptor(r,e):void 0})(t,r,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(t){return v({...t,state:!0,attribute:!1})}const d=e`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};let y=class extends i{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&p.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&p.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&p.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&p.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&p.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&p.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&p.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&p.getSpacingStyles(this.margin,3)};\n    `,s`<slot></slot>`}};y.styles=[a,d],_([v()],y.prototype,"flexDirection",void 0),_([v()],y.prototype,"flexWrap",void 0),_([v()],y.prototype,"flexBasis",void 0),_([v()],y.prototype,"flexGrow",void 0),_([v()],y.prototype,"flexShrink",void 0),_([v()],y.prototype,"alignItems",void 0),_([v()],y.prototype,"justifyContent",void 0),_([v()],y.prototype,"columnGap",void 0),_([v()],y.prototype,"rowGap",void 0),_([v()],y.prototype,"gap",void 0),_([v()],y.prototype,"padding",void 0),_([v()],y.prototype,"margin",void 0),y=_([u("wui-flex")],y);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f=t=>t??c,S=1,b=2,E=t=>(...r)=>({_$litDirective$:t,values:r});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,e){this._$Ct=t,this._$AM=r,this._$Ci=e}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=(t,r)=>{var e;const a=t._$AN;if(void 0===a)return!1;for(const i of a)null==(e=i._$AO)||e.call(i,r,!1),x(i,r);return!0},j=t=>{let r,e;do{if(void 0===(r=t._$AM))break;e=r._$AN,e.delete(t),t=r}while(0===(null==e?void 0:e.size))},P=t=>{for(let r;r=t._$AM;t=r){let e=r._$AN;if(void 0===e)r._$AN=e=new Set;else if(e.has(t))break;e.add(t),T(r)}};function R(t){void 0!==this._$AN?(j(this),this._$AM=t,P(this)):this._$AM=t}function A(t,r=!1,e=0){const a=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(r)if(Array.isArray(a))for(let o=e;o<a.length;o++)x(a[o],!1),j(a[o]);else null!=a&&(x(a,!1),j(a));else x(this,t)}const T=t=>{t.type==b&&(t._$AP??(t._$AP=A),t._$AQ??(t._$AQ=R))};class O extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,e){super._$AT(t,r,e),P(this),this.isConnected=t._$AU}_$AO(t,r=!0){var e,a;t!==this.isConnected&&(this.isConnected=t,t?null==(e=this.reconnected)||e.call(this):null==(a=this.disconnected)||a.call(this)),r&&(x(this,t),j(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class k{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class L{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){var t;null==(t=this.Z)||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>{return!(r=t,null===r||"object"!=typeof r&&"function"!=typeof r||"function"!=typeof t.then);var r},C=1073741823;const I=E(class extends O{constructor(){super(...arguments),this._$Cwt=C,this._$Cbt=[],this._$CK=new k(this),this._$CX=new L}render(...t){return t.find(t=>!D(t))??l}update(t,r){const e=this._$Cbt;let a=e.length;this._$Cbt=r;const i=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let n=0;n<r.length&&!(n>this._$Cwt);n++){const t=r[n];if(!D(t))return this._$Cwt=n,t;n<a&&t===e[n]||(this._$Cwt=C,a=0,Promise.resolve(t).then(async r=>{for(;o.get();)await o.get();const e=i.deref();if(void 0!==e){const a=e._$Cbt.indexOf(t);a>-1&&a<e._$Cwt&&(e._$Cwt=a,e.setValue(r))}}))}return l}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});const z=new class{constructor(){this.cache=new Map}set(t,r){this.cache.set(t,r)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}},V=e`
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
`;var B=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};const H={add:async()=>(await g(async()=>{const{addSvg:t}=await import("./Dl98d0st.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3,4]),import.meta.url)).addSvg,allWallets:async()=>(await g(async()=>{const{allWalletsSvg:t}=await import("./B3o57c0c.js");return{allWalletsSvg:t}},__vite__mapDeps([5,1,2,3,4]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await g(async()=>{const{arrowBottomCircleSvg:t}=await import("./BMosW9r1.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([6,1,2,3,4]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await g(async()=>{const{appStoreSvg:t}=await import("./BO6KCxHk.js");return{appStoreSvg:t}},__vite__mapDeps([7,1,2,3,4]),import.meta.url)).appStoreSvg,apple:async()=>(await g(async()=>{const{appleSvg:t}=await import("./BGI2N2d0.js");return{appleSvg:t}},__vite__mapDeps([8,1,2,3,4]),import.meta.url)).appleSvg,arrowBottom:async()=>(await g(async()=>{const{arrowBottomSvg:t}=await import("./DcjHToMC.js");return{arrowBottomSvg:t}},__vite__mapDeps([9,1,2,3,4]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await g(async()=>{const{arrowLeftSvg:t}=await import("./6rPWuI2a.js");return{arrowLeftSvg:t}},__vite__mapDeps([10,1,2,3,4]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await g(async()=>{const{arrowRightSvg:t}=await import("./DJ-51W8P.js");return{arrowRightSvg:t}},__vite__mapDeps([11,1,2,3,4]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await g(async()=>{const{arrowTopSvg:t}=await import("./jiNBpyPN.js");return{arrowTopSvg:t}},__vite__mapDeps([12,1,2,3,4]),import.meta.url)).arrowTopSvg,bank:async()=>(await g(async()=>{const{bankSvg:t}=await import("./C9WHS2GH.js");return{bankSvg:t}},__vite__mapDeps([13,1,2,3,4]),import.meta.url)).bankSvg,browser:async()=>(await g(async()=>{const{browserSvg:t}=await import("./Ci1BDUA2.js");return{browserSvg:t}},__vite__mapDeps([14,1,2,3,4]),import.meta.url)).browserSvg,card:async()=>(await g(async()=>{const{cardSvg:t}=await import("./CUE0yGMt.js");return{cardSvg:t}},__vite__mapDeps([15,1,2,3,4]),import.meta.url)).cardSvg,checkmark:async()=>(await g(async()=>{const{checkmarkSvg:t}=await import("./CH7RatR6.js");return{checkmarkSvg:t}},__vite__mapDeps([16,1,2,3,4]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await g(async()=>{const{checkmarkBoldSvg:t}=await import("./C5M1IwzM.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([17,1,2,3,4]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await g(async()=>{const{chevronBottomSvg:t}=await import("./UphwY2uU.js");return{chevronBottomSvg:t}},__vite__mapDeps([18,1,2,3,4]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await g(async()=>{const{chevronLeftSvg:t}=await import("./ByeDLaNy.js");return{chevronLeftSvg:t}},__vite__mapDeps([19,1,2,3,4]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await g(async()=>{const{chevronRightSvg:t}=await import("./lcZLzwx-.js");return{chevronRightSvg:t}},__vite__mapDeps([20,1,2,3,4]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await g(async()=>{const{chevronTopSvg:t}=await import("./C3anHsYr.js");return{chevronTopSvg:t}},__vite__mapDeps([21,1,2,3,4]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await g(async()=>{const{chromeStoreSvg:t}=await import("./-xGoe8HO.js");return{chromeStoreSvg:t}},__vite__mapDeps([22,1,2,3,4]),import.meta.url)).chromeStoreSvg,clock:async()=>(await g(async()=>{const{clockSvg:t}=await import("./D3J7eh8h.js");return{clockSvg:t}},__vite__mapDeps([23,1,2,3,4]),import.meta.url)).clockSvg,close:async()=>(await g(async()=>{const{closeSvg:t}=await import("./BWajTw3-.js");return{closeSvg:t}},__vite__mapDeps([24,1,2,3,4]),import.meta.url)).closeSvg,compass:async()=>(await g(async()=>{const{compassSvg:t}=await import("./B6TQM15-.js");return{compassSvg:t}},__vite__mapDeps([25,1,2,3,4]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await g(async()=>{const{coinPlaceholderSvg:t}=await import("./C6UYPAf0.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([26,1,2,3,4]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await g(async()=>{const{copySvg:t}=await import("./mMsIWpz3.js");return{copySvg:t}},__vite__mapDeps([27,1,2,3,4]),import.meta.url)).copySvg,cursor:async()=>(await g(async()=>{const{cursorSvg:t}=await import("./CjMuy4lm.js");return{cursorSvg:t}},__vite__mapDeps([28,1,2,3,4]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await g(async()=>{const{cursorTransparentSvg:t}=await import("./yuV_YvC1.js");return{cursorTransparentSvg:t}},__vite__mapDeps([29,1,2,3,4]),import.meta.url)).cursorTransparentSvg,desktop:async()=>(await g(async()=>{const{desktopSvg:t}=await import("./EIxMo548.js");return{desktopSvg:t}},__vite__mapDeps([30,1,2,3,4]),import.meta.url)).desktopSvg,disconnect:async()=>(await g(async()=>{const{disconnectSvg:t}=await import("./TZUNUBBa.js");return{disconnectSvg:t}},__vite__mapDeps([31,1,2,3,4]),import.meta.url)).disconnectSvg,discord:async()=>(await g(async()=>{const{discordSvg:t}=await import("./BimdqkEB.js");return{discordSvg:t}},__vite__mapDeps([32,1,2,3,4]),import.meta.url)).discordSvg,etherscan:async()=>(await g(async()=>{const{etherscanSvg:t}=await import("./62VEQ7xP.js");return{etherscanSvg:t}},__vite__mapDeps([33,1,2,3,4]),import.meta.url)).etherscanSvg,extension:async()=>(await g(async()=>{const{extensionSvg:t}=await import("./DsjGLvYU.js");return{extensionSvg:t}},__vite__mapDeps([34,1,2,3,4]),import.meta.url)).extensionSvg,externalLink:async()=>(await g(async()=>{const{externalLinkSvg:t}=await import("./BHGWMEa9.js");return{externalLinkSvg:t}},__vite__mapDeps([35,1,2,3,4]),import.meta.url)).externalLinkSvg,facebook:async()=>(await g(async()=>{const{facebookSvg:t}=await import("./Ch6Qu0tJ.js");return{facebookSvg:t}},__vite__mapDeps([36,1,2,3,4]),import.meta.url)).facebookSvg,farcaster:async()=>(await g(async()=>{const{farcasterSvg:t}=await import("./DclwYyqP.js");return{farcasterSvg:t}},__vite__mapDeps([37,1,2,3,4]),import.meta.url)).farcasterSvg,filters:async()=>(await g(async()=>{const{filtersSvg:t}=await import("./DlRP2G4w.js");return{filtersSvg:t}},__vite__mapDeps([38,1,2,3,4]),import.meta.url)).filtersSvg,github:async()=>(await g(async()=>{const{githubSvg:t}=await import("./BQgza6OA.js");return{githubSvg:t}},__vite__mapDeps([39,1,2,3,4]),import.meta.url)).githubSvg,google:async()=>(await g(async()=>{const{googleSvg:t}=await import("./ZSwEduap.js");return{googleSvg:t}},__vite__mapDeps([40,1,2,3,4]),import.meta.url)).googleSvg,helpCircle:async()=>(await g(async()=>{const{helpCircleSvg:t}=await import("./DoAnFknU.js");return{helpCircleSvg:t}},__vite__mapDeps([41,1,2,3,4]),import.meta.url)).helpCircleSvg,image:async()=>(await g(async()=>{const{imageSvg:t}=await import("./BzgPrurK.js");return{imageSvg:t}},__vite__mapDeps([42,1,2,3,4]),import.meta.url)).imageSvg,id:async()=>(await g(async()=>{const{idSvg:t}=await import("./DwiZTZP0.js");return{idSvg:t}},__vite__mapDeps([43,1,2,3,4]),import.meta.url)).idSvg,infoCircle:async()=>(await g(async()=>{const{infoCircleSvg:t}=await import("./Kb1JYxBe.js");return{infoCircleSvg:t}},__vite__mapDeps([44,1,2,3,4]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await g(async()=>{const{lightbulbSvg:t}=await import("./W4COT_Ts.js");return{lightbulbSvg:t}},__vite__mapDeps([45,1,2,3,4]),import.meta.url)).lightbulbSvg,mail:async()=>(await g(async()=>{const{mailSvg:t}=await import("./Pv5Gmaks.js");return{mailSvg:t}},__vite__mapDeps([46,1,2,3,4]),import.meta.url)).mailSvg,mobile:async()=>(await g(async()=>{const{mobileSvg:t}=await import("./BMbF490N.js");return{mobileSvg:t}},__vite__mapDeps([47,1,2,3,4]),import.meta.url)).mobileSvg,more:async()=>(await g(async()=>{const{moreSvg:t}=await import("./eao20Pr7.js");return{moreSvg:t}},__vite__mapDeps([48,1,2,3,4]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await g(async()=>{const{networkPlaceholderSvg:t}=await import("./CbVqQ5Qi.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([49,1,2,3,4]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await g(async()=>{const{nftPlaceholderSvg:t}=await import("./Ut0GRjWx.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([50,1,2,3,4]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await g(async()=>{const{offSvg:t}=await import("./DG7t1ykK.js");return{offSvg:t}},__vite__mapDeps([51,1,2,3,4]),import.meta.url)).offSvg,playStore:async()=>(await g(async()=>{const{playStoreSvg:t}=await import("./pyaEfpJ_.js");return{playStoreSvg:t}},__vite__mapDeps([52,1,2,3,4]),import.meta.url)).playStoreSvg,plus:async()=>(await g(async()=>{const{plusSvg:t}=await import("./CuE4sG8r.js");return{plusSvg:t}},__vite__mapDeps([53,1,2,3,4]),import.meta.url)).plusSvg,qrCode:async()=>(await g(async()=>{const{qrCodeIcon:t}=await import("./C6dXJVYY.js");return{qrCodeIcon:t}},__vite__mapDeps([54,1,2,3,4]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await g(async()=>{const{recycleHorizontalSvg:t}=await import("./Bl8qSByl.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([55,1,2,3,4]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await g(async()=>{const{refreshSvg:t}=await import("./D0ekk6CN.js");return{refreshSvg:t}},__vite__mapDeps([56,1,2,3,4]),import.meta.url)).refreshSvg,search:async()=>(await g(async()=>{const{searchSvg:t}=await import("./C45AJ20j.js");return{searchSvg:t}},__vite__mapDeps([57,1,2,3,4]),import.meta.url)).searchSvg,send:async()=>(await g(async()=>{const{sendSvg:t}=await import("./B7uNSlUC.js");return{sendSvg:t}},__vite__mapDeps([58,1,2,3,4]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await g(async()=>{const{swapHorizontalSvg:t}=await import("./eW2NbkNL.js");return{swapHorizontalSvg:t}},__vite__mapDeps([59,1,2,3,4]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await g(async()=>{const{swapHorizontalMediumSvg:t}=await import("./DIGYjRGZ.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([60,1,2,3,4]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await g(async()=>{const{swapHorizontalBoldSvg:t}=await import("./DHr6xsOR.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([61,1,2,3,4]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await g(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./DuIgD3wX.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([62,1,2,3,4]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await g(async()=>{const{swapVerticalSvg:t}=await import("./B7isI1qX.js");return{swapVerticalSvg:t}},__vite__mapDeps([63,1,2,3,4]),import.meta.url)).swapVerticalSvg,telegram:async()=>(await g(async()=>{const{telegramSvg:t}=await import("./xy9ArRI8.js");return{telegramSvg:t}},__vite__mapDeps([64,1,2,3,4]),import.meta.url)).telegramSvg,threeDots:async()=>(await g(async()=>{const{threeDotsSvg:t}=await import("./BACRCrn3.js");return{threeDotsSvg:t}},__vite__mapDeps([65,1,2,3,4]),import.meta.url)).threeDotsSvg,twitch:async()=>(await g(async()=>{const{twitchSvg:t}=await import("./BSx8AS3t.js");return{twitchSvg:t}},__vite__mapDeps([66,1,2,3,4]),import.meta.url)).twitchSvg,twitter:async()=>(await g(async()=>{const{xSvg:t}=await import("./CA72grFC.js");return{xSvg:t}},__vite__mapDeps([67,1,2,3,4]),import.meta.url)).xSvg,twitterIcon:async()=>(await g(async()=>{const{twitterIconSvg:t}=await import("./Cadutkl3.js");return{twitterIconSvg:t}},__vite__mapDeps([68,1,2,3,4]),import.meta.url)).twitterIconSvg,verify:async()=>(await g(async()=>{const{verifySvg:t}=await import("./DCtEQW7E.js");return{verifySvg:t}},__vite__mapDeps([69,1,2,3,4]),import.meta.url)).verifySvg,verifyFilled:async()=>(await g(async()=>{const{verifyFilledSvg:t}=await import("./DwsUjCY5.js");return{verifyFilledSvg:t}},__vite__mapDeps([70,1,2,3,4]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await g(async()=>{const{walletSvg:t}=await import("./BUsiJIyx.js");return{walletSvg:t}},__vite__mapDeps([71,1,2,3,4]),import.meta.url)).walletSvg,walletConnect:async()=>(await g(async()=>{const{walletConnectSvg:t}=await import("./-rvdj2HZ.js");return{walletConnectSvg:t}},__vite__mapDeps([72,1,2,3,4]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await g(async()=>{const{walletConnectLightBrownSvg:t}=await import("./-rvdj2HZ.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([72,1,2,3,4]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await g(async()=>{const{walletConnectBrownSvg:t}=await import("./-rvdj2HZ.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([72,1,2,3,4]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await g(async()=>{const{walletPlaceholderSvg:t}=await import("./BQ9fZPUX.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([73,1,2,3,4]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await g(async()=>{const{warningCircleSvg:t}=await import("./C61anCeu.js");return{warningCircleSvg:t}},__vite__mapDeps([74,1,2,3,4]),import.meta.url)).warningCircleSvg,x:async()=>(await g(async()=>{const{xSvg:t}=await import("./CA72grFC.js");return{xSvg:t}},__vite__mapDeps([67,1,2,3,4]),import.meta.url)).xSvg,info:async()=>(await g(async()=>{const{infoSvg:t}=await import("./DQ3sTa4Q.js");return{infoSvg:t}},__vite__mapDeps([75,1,2,3,4]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await g(async()=>{const{exclamationTriangleSvg:t}=await import("./BslrvXTd.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([76,1,2,3,4]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await g(async()=>{const{reownSvg:t}=await import("./BzW7dfPU.js");return{reownSvg:t}},__vite__mapDeps([77,1,2,3,4]),import.meta.url)).reownSvg};let M=class extends i{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,s`${I(async function(t){if(z.has(t))return z.get(t);const r=(H[t]??H.copy)();return z.set(t,r),r}(this.name),s`<div class="fallback"></div>`)}`}};M.styles=[a,o,V],B([v()],M.prototype,"size",void 0),B([v()],M.prototype,"name",void 0),B([v()],M.prototype,"color",void 0),B([v()],M.prototype,"aspectRatio",void 0),M=B([u("wui-icon")],M);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F=E(class extends ${constructor(t){var r;if(super(t),t.type!==S||"class"!==t.name||(null==(r=t.strings)?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(r=>t[r]).join(" ")+" "}update(t,[r]){var e,a;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in r)r[t]&&!(null==(e=this.nt)?void 0:e.has(t))&&this.st.add(t);return this.render(r)}const i=t.element.classList;for(const o of this.st)o in r||(i.remove(o),this.st.delete(o));for(const o in r){const t=!!r[o];t===this.st.has(o)||(null==(a=this.nt)?void 0:a.has(o))||(t?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return l}}),G=e`
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
`;var N=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};let U=class extends i{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,s`<slot class=${F(t)}></slot>`}};U.styles=[a,G],N([v()],U.prototype,"variant",void 0),N([v()],U.prototype,"color",void 0),N([v()],U.prototype,"align",void 0),N([v()],U.prototype,"lineClamp",void 0),U=N([u("wui-text")],U);const q=e`
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
`;var Y=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};let W=class extends i{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,r="lg"===this.size,e="xl"===this.size,a=r?"12%":"16%",i=r?"xxs":e?"s":"3xl",o="gray"===this.background,n="opaque"===this.background,c="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:o&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||o?"100%":a};\n       --local-border-radius: var(--wui-border-radius-${i});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,s` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};W.styles=[a,n,q],Y([v()],W.prototype,"size",void 0),Y([v()],W.prototype,"backgroundColor",void 0),Y([v()],W.prototype,"iconColor",void 0),Y([v()],W.prototype,"iconSize",void 0),Y([v()],W.prototype,"background",void 0),Y([v({type:Boolean})],W.prototype,"border",void 0),Y([v()],W.prototype,"borderColor",void 0),Y([v()],W.prototype,"icon",void 0),W=Y([u("wui-icon-box")],W);const K=e`
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
`;var X=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};let Z=class extends i{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,s`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Z.styles=[a,o,K],X([v()],Z.prototype,"src",void 0),X([v()],Z.prototype,"alt",void 0),X([v()],Z.prototype,"size",void 0),Z=X([u("wui-image")],Z);const Q=e`
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
`;var J=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};let tt=class extends i{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return s`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};tt.styles=[a,Q],J([v()],tt.prototype,"variant",void 0),J([v()],tt.prototype,"size",void 0),tt=J([u("wui-tag")],tt);const rt=e`
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
`;var et=function(t,r,e,a){var i,o=arguments.length,n=o<3?r:null===a?a=Object.getOwnPropertyDescriptor(r,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,r,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(o<3?i(n):o>3?i(r,e,n):i(r,e))||n);return o>3&&n&&Object.defineProperty(r,e,n),n};let at=class extends i{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,s`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};at.styles=[a,rt],et([v()],at.prototype,"color",void 0),et([v()],at.prototype,"size",void 0),at=et([u("wui-loading-spinner")],at);export{p as U,F as a,u as c,E as e,O as f,v as n,f as o,w as r};
