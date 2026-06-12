import{w as e,p as t,s as i,o,M as a,q as r,R as s,i as n,r as c,a as l,t as w,e as d,m as u,h as p,d as m,j as h,v,E as g,O as f,C as b,x as y,k as x,A as k,T as C,y as S,b as R,g as N}from"./DCitmtzV.js";import{x as O}from"./DIFfro1Y.js";import{c as T,n as A,r as W,o as $,U as E}from"./D3Z5hXQo.js";import"./DENK0YdQ.js";const P=t({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),I=e({state:P,subscribe:e=>o(P,()=>e(P)),subscribeKey:(e,t)=>i(P,e,t),showTooltip({message:e,triggerRect:t,variant:i}){P.open=!0,P.message=e,P.triggerRect=t,P.variant=i},hide(){P.open=!1,P.message="",P.triggerRect={width:0,height:0,top:0,left:0}}}),j={isUnsupportedChainView:()=>"UnsupportedChain"===s.state.view||"SwitchNetwork"===s.state.view&&s.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void a.shake();await r.isSIWXCloseDisabled()?a.shake():a.close()}},D=n`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;let B=class extends l{render(){return O`<slot></slot>`}};B.styles=[c,D],B=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s}([T("wui-card")],B);const L=n`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var z=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let U=class extends l{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,O`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){w.close()}};U.styles=[c,L],z([A()],U.prototype,"message",void 0),z([A()],U.prototype,"backgroundColor",void 0),z([A()],U.prototype,"iconColor",void 0),z([A()],U.prototype,"icon",void 0),U=z([T("wui-alertbar")],U);const H=n`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var K=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const V={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let X=class extends l{constructor(){super(),this.unsubscribe=[],this.open=w.state.open,this.onOpen(!0),this.unsubscribe.push(w.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=w.state,i=V[t];return O`
      <wui-alertbar
        message=${e}
        backgroundColor=${null==i?void 0:i.backgroundColor}
        iconColor=${null==i?void 0:i.iconColor}
        icon=${null==i?void 0:i.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};X.styles=H,K([W()],X.prototype,"open",void 0),X=K([T("w3m-alertbar")],X);const Y=n`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var M=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let _=class extends l{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,O`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};_.styles=[c,d,u,Y],M([A()],_.prototype,"size",void 0),M([A({type:Boolean})],_.prototype,"disabled",void 0),M([A()],_.prototype,"icon",void 0),M([A()],_.prototype,"iconColor",void 0),_=M([T("wui-icon-link")],_);const q=n`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var G=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let F=class extends l{constructor(){super(...arguments),this.imageSrc=""}render(){return O`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?O`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:O`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};F.styles=[c,d,u,q],G([A()],F.prototype,"imageSrc",void 0),F=G([T("wui-select")],F);const J=n`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var Q=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const Z=["SmartSessionList"];function ee(){var e,t,i,o,a,r,n;const c=null==(t=null==(e=s.state.data)?void 0:e.connector)?void 0:t.name,l=null==(o=null==(i=s.state.data)?void 0:i.wallet)?void 0:o.name,w=null==(r=null==(a=s.state.data)?void 0:a.network)?void 0:r.name,d=l??c,u=b.getConnectors();return{Connect:`Connect ${1===u.length&&"w3m-email"===(null==(n=u[0])?void 0:n.id)?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:d??"Connect Wallet",ConnectingWalletConnect:d??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:d?`Get ${d}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:w??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:y.state.socialProvider?y.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let te=class extends l{constructor(){super(),this.unsubscribe=[],this.heading=ee()[s.state.view],this.network=p.state.activeCaipNetwork,this.networkImage=m.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=s.state.view,this.viewDirection="",this.headerText=ee()[s.state.view],this.unsubscribe.push(h.subscribeNetworkImages(()=>{this.networkImage=m.getNetworkImage(this.network)}),s.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=ee()[e]},v.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),p.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=m.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return O`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){g.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),s.push("WhatIsAWallet")}async onClose(){await j.safeClose()}rightHeaderTemplate(){var e,t,i;const o=null==(i=null==(t=null==(e=f)?void 0:e.state)?void 0:t.features)?void 0:i.smartSessions;return"Account"===s.state.view&&o?O`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>s.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return O`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=Z.includes(this.view);return O`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?O`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var e;const{view:t}=s.state,i="Connect"===t,o=f.state.enableEmbedded,a="ApproveTransaction"===t,r="ConnectingSiwe"===t,n="Account"===t,c=f.state.enableNetworkSwitch,l=a||r||i&&o;return n&&c?O`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${$(null==(e=this.network)?void 0:e.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${$(this.networkImage)}
      ></wui-select>`:this.showBack&&!l?O`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:O`<wui-icon-link
      data-hidden=${!i}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(g.sendEvent({type:"track",event:"CLICK_NETWORKS"}),s.push("Networks"))}isAllowedNetworkSwitch(){const e=p.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=null==e?void 0:e.find(({id:e})=>{var t;return e===(null==(t=this.network)?void 0:t.id)});return t||!i}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=s.state;let t=v.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=v.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=s.state,i=null==(e=this.shadowRoot)?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){s.goBack()}};te.styles=J,Q([W()],te.prototype,"heading",void 0),Q([W()],te.prototype,"network",void 0),Q([W()],te.prototype,"networkImage",void 0),Q([W()],te.prototype,"showBack",void 0),Q([W()],te.prototype,"prevHistoryLength",void 0),Q([W()],te.prototype,"view",void 0),Q([W()],te.prototype,"viewDirection",void 0),Q([W()],te.prototype,"headerText",void 0),te=Q([T("w3m-header")],te);const ie=n`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var oe=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let ae=class extends l{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return O`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?O`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?O`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:O`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};ae.styles=[c,ie],oe([A()],ae.prototype,"backgroundColor",void 0),oe([A()],ae.prototype,"iconColor",void 0),oe([A()],ae.prototype,"icon",void 0),oe([A()],ae.prototype,"message",void 0),oe([A()],ae.prototype,"loading",void 0),oe([A()],ae.prototype,"iconType",void 0),ae=oe([T("wui-snackbar")],ae);const re=n`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var se=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const ne={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ce=class extends l{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=x.state.open,this.unsubscribe.push(x.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:i}=x.state,o=ne[t],{icon:a,iconColor:r}=i??o??{};return O`
      <wui-snackbar
        message=${e}
        backgroundColor=${null==o?void 0:o.backgroundColor}
        iconColor=${r}
        icon=${a}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),x.state.autoClose&&(this.timeout=setTimeout(()=>x.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ce.styles=re,se([W()],ce.prototype,"open",void 0),ce=se([T("w3m-snackbar")],ce);const le=n`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var we=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let de=class extends l{constructor(){super(),this.unsubscribe=[],this.open=I.state.open,this.message=I.state.message,this.triggerRect=I.state.triggerRect,this.variant=I.state.variant,this.unsubscribe.push(I.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,O`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};de.styles=[le],we([W()],de.prototype,"open",void 0),we([W()],de.prototype,"message",void 0),we([W()],de.prototype,"triggerRect",void 0),we([W()],de.prototype,"variant",void 0),de=we([T("w3m-tooltip"),T("w3m-tooltip")],de);const ue=n`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var pe=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};let me=class extends l{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=s.state.view,this.viewDirection="",this.unsubscribe.push(s.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver(([e])=>{const t=`${null==e?void 0:e.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=t,this.style.animation="unset"},v.ANIMATION_DURATIONS.ModalHeight)}),null==(e=this.resizeObserver)||e.observe(this.getWrapper())}disconnectedCallback(){var e;null==(e=this.resizeObserver)||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return O`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return O`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return O`<w3m-account-view></w3m-account-view>`;case"AllWallets":return O`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return O`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return O`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return O`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return O`<w3m-connect-view></w3m-connect-view>`;case"Create":return O`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return O`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return O`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return O`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return O`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return O`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return O`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return O`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return O`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return O`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return O`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return O`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return O`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return O`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return O`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return O`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return O`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return O`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return O`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return O`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return O`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return O`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return O`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return O`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return O`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return O`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return O`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return O`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return O`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return O`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return O`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return O`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return O`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return O`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return O`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return O`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return O`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return O`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return O`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return O`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return O`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return O`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return O`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return O`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return O`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return O`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return O`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return O`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(e){I.hide();let t=v.VIEW_DIRECTION.Next;const{history:i}=s.state;i.length<this.prevHistoryLength&&(t=v.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout(()=>{this.view=e},v.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("div")}};me.styles=ue,pe([W()],me.prototype,"view",void 0),pe([W()],me.prototype,"viewDirection",void 0),me=pe([T("w3m-router")],me);const he=n`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var ve=function(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s};const ge="scroll-lock";class fe extends l{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=f.state.enableEmbedded,this.open=a.state.open,this.caipAddress=p.state.activeCaipAddress,this.caipNetwork=p.state.activeCaipNetwork,this.shake=a.state.shake,this.filterByNamespace=b.state.filterByNamespace,this.initializeTheming(),k.prefetchAnalyticsConfig(),this.unsubscribe.push(a.subscribeKey("open",e=>e?this.onOpen():this.onClose()),a.subscribeKey("shake",e=>this.shake=e),p.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),p.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),f.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),b.subscribeKey("filterByNamespace",e=>{var t;this.filterByNamespace===e||(null==(t=p.getAccountData(e))?void 0:t.caipAddress)||(k.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return a.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?O`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?O`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return O` <wui-card
      shake="${this.shake}"
      data-embedded="${$(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await j.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=C.state,i=E.getColorTheme(t);S(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),x.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=ge,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${ge}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-card");null==t||t.focus(),window.addEventListener("keydown",e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:i}=e.target;!i||i.includes("W3M-")||i.includes("WUI-")||null==t||t.focus()}},this.abortController)}onRemoveKeyboardListener(){var e;null==(e=this.abortController)||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=p.state.isSwitchingNamespace,i=R.getPlainAddress(e),o=t&&i;!i&&!t?a.close():o&&s.goBack(),await r.initializeIfEnabled(),this.caipAddress=e,p.setIsSwitchingNamespace(!1)}onNewNetwork(e){var t,i,o;const r=this.caipNetwork,n=null==(t=null==r?void 0:r.caipNetworkId)?void 0:t.toString(),c=null==r?void 0:r.chainNamespace,l=null==(i=null==e?void 0:e.caipNetworkId)?void 0:i.toString(),w=null==e?void 0:e.chainNamespace,d=n!==l,u=d&&!(c!==w),m=(null==r?void 0:r.name)===N.UNSUPPORTED_NETWORK_NAME,h="ConnectingExternal"===s.state.view,v=!(null==(o=p.getAccountData(null==e?void 0:e.chainNamespace))?void 0:o.caipAddress),g="UnsupportedChain"===s.state.view;let f=!1;a.state.open&&!h&&(v?d&&(f=!0):(g||u&&!m)&&(f=!0)),f&&"SIWXSignMessage"!==s.state.view&&s.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(k.prefetch(),k.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}fe.styles=he,ve([A({type:Boolean})],fe.prototype,"enableEmbedded",void 0),ve([W()],fe.prototype,"open",void 0),ve([W()],fe.prototype,"caipAddress",void 0),ve([W()],fe.prototype,"caipNetwork",void 0),ve([W()],fe.prototype,"shake",void 0),ve([W()],fe.prototype,"filterByNamespace",void 0);let be=class extends fe{};be=ve([T("w3m-modal")],be);let ye=class extends fe{};ye=ve([T("appkit-modal")],ye);export{ye as AppKitModal,be as W3mModal,fe as W3mModalBase};
