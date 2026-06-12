import{i as t,e,r as i,a as o,C as r,A as a,O as n,b as s,E as l,R as c,c as d,d as u,f as p,S as h,g as w,W as g,h as b,j as v,T as f,k as m,M as y,l as x,m as $}from"./DCitmtzV.js";import{x as k,b as C,E as R}from"./DIFfro1Y.js";import{n as j,c as O,o as I,r as S,U as T,e as z,f as P,a as W}from"./D3Z5hXQo.js";import{Q as E}from"./B6W6I9Wl.js";import"./DENK0YdQ.js";const L=t`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var D=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let B=class extends o{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),k`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?k`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:k`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};B.styles=[e,i,L],D([j()],B.prototype,"size",void 0),D([j()],B.prototype,"name",void 0),D([j()],B.prototype,"imageSrc",void 0),D([j()],B.prototype,"walletIcon",void 0),D([j({type:Boolean})],B.prototype,"installed",void 0),D([j()],B.prototype,"badgeSize",void 0),B=D([O("wui-wallet-image")],B);const A=t`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var _=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let U=class extends o{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<4;return k`${this.walletImages.slice(0,4).map(({src:t,walletName:e})=>k`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${I(e)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(4-this.walletImages.length)].map(()=>k` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};U.styles=[i,A],_([j({type:Array})],U.prototype,"walletImages",void 0),U=_([O("wui-all-wallets-image")],U);const q=t`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var N=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let M=class extends o{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return k`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?k` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?k` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?k`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:k`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?k`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?k`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?k`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};M.styles=[i,e,q],N([j({type:Array})],M.prototype,"walletImages",void 0),N([j()],M.prototype,"imageSrc",void 0),N([j()],M.prototype,"name",void 0),N([j()],M.prototype,"tagLabel",void 0),N([j()],M.prototype,"tagVariant",void 0),N([j()],M.prototype,"icon",void 0),N([j()],M.prototype,"walletIcon",void 0),N([j()],M.prototype,"tabIdx",void 0),N([j({type:Boolean})],M.prototype,"installed",void 0),N([j({type:Boolean})],M.prototype,"disabled",void 0),N([j({type:Boolean})],M.prototype,"showAllWallets",void 0),N([j({type:Boolean})],M.prototype,"loading",void 0),N([j({type:String})],M.prototype,"loadingSpinnerColor",void 0),M=N([O("wui-list-wallet")],M);var V=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let K=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.count=a.state.count,this.filteredCount=a.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.state.isFetchingRecommendedWallets,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t),a.subscribeKey("count",t=>this.count=t),a.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),a.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(t=>"walletConnect"===t.id),{allWallets:e}=n.state;if(!t||"HIDE"===e)return null;if("ONLY_MOBILE"===e&&!s.isMobile())return null;const i=a.state.featured.length,o=this.count+i,r=o<10?o:10*Math.floor(o/10),l=this.filteredCount>0?this.filteredCount:r;let c=`${l}`;return this.filteredCount>0?c=`${this.filteredCount}`:l<o&&(c=`${l}+`),k`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${I(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){l.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),c.push("AllWallets")}};V([j()],K.prototype,"tabIdx",void 0),V([S()],K.prototype,"connectors",void 0),V([S()],K.prototype,"count",void 0),V([S()],K.prototype,"filteredCount",void 0),V([S()],K.prototype,"isFetchingRecommendedWallets",void 0),K=V([O("w3m-all-wallets-widget")],K);var G=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let H=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(t=>"ANNOUNCED"===t.type);return(null==t?void 0:t.length)?k`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(d.showConnector).map(t=>k`
              <wui-list-wallet
                imageSrc=${I(u.getConnectorImage(t))}
                name=${t.name??"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${I(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){"walletConnect"===t.id?s.isMobile()?c.push("AllWallets"):c.push("ConnectingWalletConnect"):c.push("ConnectingExternal",{connector:t})}};G([j()],H.prototype,"tabIdx",void 0),G([S()],H.prototype,"connectors",void 0),H=G([O("w3m-connect-announced-widget")],H);var F=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let X=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.loading=!1,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t)),s.isTelegram()&&s.isIos()&&(this.loading=!p.state.wcUri,this.unsubscribe.push(p.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=n.state;if(!(null==t?void 0:t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return k`<wui-flex flexDirection="column" gap="xs">
      ${e.map(t=>k`
          <wui-list-wallet
            imageSrc=${I(u.getWalletImage(t))}
            name=${t.name??"Unknown"}
            @click=${()=>this.onConnectWallet(t)}
            data-testid=${`wallet-selector-${t.id}`}
            tabIdx=${I(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=h.getRecentWallets(),i=this.connectors.map(t=>{var e;return null==(e=t.info)?void 0:e.rdns}).filter(Boolean),o=e.map(t=>t.rdns).filter(Boolean),r=i.concat(o);if(r.includes("io.metamask.mobile")&&s.isMobile()){const t=r.indexOf("io.metamask.mobile");r[t]="io.metamask"}return t.filter(t=>!r.includes(String(null==t?void 0:t.rdns)))}onConnectWallet(t){this.loading||c.push("ConnectingWalletConnect",{wallet:t})}};F([j()],X.prototype,"tabIdx",void 0),F([S()],X.prototype,"connectors",void 0),F([S()],X.prototype,"loading",void 0),X=F([O("w3m-connect-custom-widget")],X);var Q=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Y=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(t=>"EXTERNAL"===t.type).filter(d.showConnector).filter(t=>t.id!==w.CONNECTOR_ID.COINBASE_SDK);return(null==t?void 0:t.length)?k`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>k`
            <wui-list-wallet
              imageSrc=${I(u.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){c.push("ConnectingExternal",{connector:t})}};Q([j()],Y.prototype,"tabIdx",void 0),Q([S()],Y.prototype,"connectors",void 0),Y=Q([O("w3m-connect-external-widget")],Y);var J=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Z=class extends o{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?k`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>k`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${I(u.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){r.selectWalletConnector(t)}};J([j()],Z.prototype,"tabIdx",void 0),J([j()],Z.prototype,"wallets",void 0),Z=J([O("w3m-connect-featured-widget")],Z);var tt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let et=class extends o{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(d.showConnector);return 0===t.length?(this.style.cssText="display: none",null):k`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>k`
            <wui-list-wallet
              imageSrc=${I(u.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(t){r.setActiveConnector(t),c.push("ConnectingExternal",{connector:t})}};tt([j()],et.prototype,"tabIdx",void 0),tt([j()],et.prototype,"connectors",void 0),et=tt([O("w3m-connect-injected-widget")],et);var it=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ot=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(t=>"MULTI_CHAIN"===t.type&&"WalletConnect"!==t.name);return(null==t?void 0:t.length)?k`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>k`
            <wui-list-wallet
              imageSrc=${I(u.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${I(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){r.setActiveConnector(t),c.push("ConnectingMultiChain")}};it([j()],ot.prototype,"tabIdx",void 0),it([S()],ot.prototype,"connectors",void 0),ot=it([O("w3m-connect-multi-chain-widget")],ot);var rt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let at=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.loading=!1,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t)),s.isTelegram()&&s.isIos()&&(this.loading=!p.state.wcUri,this.unsubscribe.push(p.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=h.getRecentWallets().filter(t=>!g.isExcluded(t)).filter(t=>!this.hasWalletConnector(t)).filter(t=>this.isWalletCompatibleWithCurrentChain(t));return t.length?k`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(t=>k`
            <wui-list-wallet
              imageSrc=${I(u.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||r.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){const e=b.state.activeChain;return!e||!t.chains||t.chains.some(t=>{const i=t.split(":")[0];return e===i})}};rt([j()],at.prototype,"tabIdx",void 0),rt([S()],at.prototype,"connectors",void 0),rt([S()],at.prototype,"loading",void 0),at=rt([O("w3m-connect-recent-widget")],at);var nt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let st=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,s.isTelegram()&&s.isIos()&&(this.loading=!p.state.wcUri,this.unsubscribe.push(p.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=r.state,{customWallets:e,featuredWalletIds:i}=n.state,o=h.getRecentWallets(),a=t.find(t=>"walletConnect"===t.id),s=t.filter(t=>"INJECTED"===t.type||"ANNOUNCED"===t.type||"MULTI_CHAIN"===t.type).filter(t=>"Browser Wallet"!==t.name);if(!a)return null;if(i||e||!this.wallets.length)return this.style.cssText="display: none",null;const l=s.length+o.length,c=Math.max(0,2-l),d=g.filterOutDuplicateWallets(this.wallets).slice(0,c);return d.length?k`
      <wui-flex flexDirection="column" gap="xs">
        ${d.map(t=>k`
            <wui-list-wallet
              imageSrc=${I(u.getWalletImage(t))}
              name=${(null==t?void 0:t.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${I(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=r.getConnector(t.id,t.rdns);e?c.push("ConnectingExternal",{connector:e}):c.push("ConnectingWalletConnect",{wallet:t})}};nt([j()],st.prototype,"tabIdx",void 0),nt([j()],st.prototype,"wallets",void 0),nt([S()],st.prototype,"loading",void 0),st=nt([O("w3m-connect-recommended-widget")],st);var lt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ct=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.connectorImages=v.state.connectorImages,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t),v.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(s.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(t=>"walletConnect"===t.id);if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(null==t?void 0:t.imageId)??""];return k`
      <wui-list-wallet
        imageSrc=${I(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${I(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){r.setActiveConnector(t),c.push("ConnectingWalletConnect")}};lt([j()],ct.prototype,"tabIdx",void 0),lt([S()],ct.prototype,"connectors",void 0),lt([S()],ct.prototype,"connectorImages",void 0),ct=lt([O("w3m-connect-walletconnect-widget")],ct);const dt=t`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ut=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let pt=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=r.state.connectors,this.recommended=a.state.recommended,this.featured=a.state.featured,this.unsubscribe.push(r.subscribeKey("connectors",t=>this.connectors=t),a.subscribeKey("recommended",t=>this.recommended=t),a.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return k`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:i,injected:o,multiChain:r,recommended:a,featured:n,external:s}=d.getConnectorsByType(this.connectors,this.recommended,this.featured);return d.getConnectorTypeOrder({custom:t,recent:e,announced:i,injected:o,multiChain:r,recommended:a,featured:n,external:s}).map(t=>{switch(t){case"injected":return k`
            ${r.length?k`<w3m-connect-multi-chain-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?k`<w3m-connect-announced-widget
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${o.length?k`<w3m-connect-injected-widget
                  .connectors=${o}
                  tabIdx=${I(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return k`<w3m-connect-walletconnect-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return k`<w3m-connect-recent-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return k`<w3m-connect-featured-widget
            .wallets=${n}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return k`<w3m-connect-custom-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return k`<w3m-connect-external-widget
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return k`<w3m-connect-recommended-widget
            .wallets=${a}
            tabIdx=${I(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return null}})}};pt.styles=dt,ut([j()],pt.prototype,"tabIdx",void 0),ut([S()],pt.prototype,"connectors",void 0),ut([S()],pt.prototype,"recommended",void 0),ut([S()],pt.prototype,"featured",void 0),pt=ut([O("w3m-connector-list")],pt);const ht=t`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var wt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let gt=class extends o{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var i;const o=e===this.activeTab;return k`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${o}
          data-testid="tab-${null==(i=t.label)?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?k`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const i=this.buttons[this.activeTab],o=this.buttons[t],r=null==i?void 0:i.querySelector("wui-text"),a=null==o?void 0:o.querySelector("wui-text"),n=null==o?void 0:o.getBoundingClientRect(),s=null==a?void 0:a.getBoundingClientRect();i&&r&&!e&&t!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&n&&s&&a&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,o.animate([{width:`${n.width+s.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};gt.styles=[i,e,ht],wt([j({type:Array})],gt.prototype,"tabs",void 0),wt([j()],gt.prototype,"onTabChange",void 0),wt([j({type:Array})],gt.prototype,"buttons",void 0),wt([j({type:Boolean})],gt.prototype,"disabled",void 0),wt([j()],gt.prototype,"localTabWidth",void 0),wt([S()],gt.prototype,"activeTab",void 0),wt([S()],gt.prototype,"isDense",void 0),gt=wt([O("wui-tabs")],gt);var bt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let vt=class extends o{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return k`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:t})=>t),t}onTabChange(t){var e;const i=this.platformTabs[t];i&&(null==(e=this.onSelectPlatfrom)||e.call(this,i))}};bt([j({type:Array})],vt.prototype,"platforms",void 0),bt([j()],vt.prototype,"onSelectPlatfrom",void 0),vt=bt([O("w3m-connecting-header")],vt);const ft=t`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var mt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const yt={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},xt={lg:"paragraph-600",md:"small-600"},$t={lg:"md",md:"md"};let kt=class extends o{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??xt[this.size];return k`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=$t[this.size],e=this.disabled?yt.disabled:yt[this.variant];return k`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return k``}};kt.styles=[i,e,ft],mt([j()],kt.prototype,"size",void 0),mt([j({type:Boolean})],kt.prototype,"disabled",void 0),mt([j({type:Boolean})],kt.prototype,"fullWidth",void 0),mt([j({type:Boolean})],kt.prototype,"loading",void 0),mt([j()],kt.prototype,"variant",void 0),mt([j({type:Boolean})],kt.prototype,"hasIconLeft",void 0),mt([j({type:Boolean})],kt.prototype,"hasIconRight",void 0),mt([j()],kt.prototype,"borderRadius",void 0),mt([j()],kt.prototype,"textVariant",void 0),kt=mt([O("wui-button")],kt);const Ct=t`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Rt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let jt=class extends o{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return k`
      <button ?disabled=${this.disabled} tabindex=${I(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};jt.styles=[i,e,Ct],Rt([j()],jt.prototype,"tabIdx",void 0),Rt([j({type:Boolean})],jt.prototype,"disabled",void 0),Rt([j()],jt.prototype,"color",void 0),jt=Rt([O("wui-link")],jt);const Ot=t`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var It=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let St=class extends o{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t;return k`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${116+e} ${245+e}"
          stroke-dashoffset=${360+1.75*e}
        />
      </svg>
    `}};St.styles=[i,Ot],It([j({type:Number})],St.prototype,"radius",void 0),St=It([O("wui-loading-thumbnail")],St);const Tt=t`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var zt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Pt=class extends o{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return k`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Pt.styles=[i,e,Tt],zt([j()],Pt.prototype,"variant",void 0),zt([j()],Pt.prototype,"imageSrc",void 0),zt([j({type:Boolean})],Pt.prototype,"disabled",void 0),zt([j()],Pt.prototype,"icon",void 0),zt([j()],Pt.prototype,"size",void 0),zt([j()],Pt.prototype,"text",void 0),Pt=zt([O("wui-chip-button")],Pt);const Wt=t`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Et=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Lt=class extends o{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return k`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Lt.styles=[i,e,Wt],Et([j({type:Boolean})],Lt.prototype,"disabled",void 0),Et([j()],Lt.prototype,"label",void 0),Et([j()],Lt.prototype,"buttonLabel",void 0),Lt=Et([O("wui-cta-button")],Lt);const Dt=t`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Bt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let At=class extends o{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:i,chrome_store:o,homepage:r}=this.wallet,a=s.isMobile(),n=s.isIos(),l=s.isAndroid(),d=[e,i,r,o].filter(Boolean).length>1,u=T.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return d&&!a?k`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>c.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&r?k`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&n?k`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?k`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(null==(t=this.wallet)?void 0:t.app_store)&&s.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(null==(t=this.wallet)?void 0:t.play_store)&&s.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(null==(t=this.wallet)?void 0:t.homepage)&&s.openHref(this.wallet.homepage,"_blank")}};At.styles=[Dt],Bt([j({type:Object})],At.prototype,"wallet",void 0),At=Bt([O("w3m-mobile-download-links")],At);const _t=t`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Ut=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class qt extends o{constructor(){var t,e,i,o,r;super(),this.wallet=null==(t=c.state.data)?void 0:t.wallet,this.connector=null==(e=c.state.data)?void 0:e.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=u.getWalletImage(this.wallet)??u.getConnectorImage(this.connector),this.name=(null==(i=this.wallet)?void 0:i.name)??(null==(o=this.connector)?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=p.state.wcUri,this.error=p.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.subscribeKey("wcUri",t=>{var e;this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,null==(e=this.onConnect)||e.call(this))}),p.subscribeKey("wcError",t=>this.error=t)),(s.isTelegram()||s.isSafari())&&s.isIos()&&p.state.wcUri&&(null==(r=this.onConnect)||r.call(this))}firstUpdated(){var t;null==(t=this.onAutoConnect)||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),p.setWcError(!1),clearTimeout(this.timeout)}render(){var t;null==(t=this.onRender)||t.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i=`Continue in ${this.name}`;return this.error&&(i="Connection declined"),k`
      <wui-flex
        data-error=${I(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${I(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?k`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?k`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const e=null==(t=this.shadowRoot)?void 0:t.querySelector("wui-button");null==e||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,e;p.setWcError(!1),this.onRetry?(this.isRetrying=!0,null==(t=this.onRetry)||t.call(this)):null==(e=this.onConnect)||e.call(this)}loaderTemplate(){const t=f.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return k`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(s.copyToClopboard(this.uri),m.showSuccess("Link copied"))}catch{m.showError("Failed to copy")}}}qt.styles=_t,Ut([S()],qt.prototype,"isRetrying",void 0),Ut([S()],qt.prototype,"uri",void 0),Ut([S()],qt.prototype,"error",void 0),Ut([S()],qt.prototype,"ready",void 0),Ut([S()],qt.prototype,"showRetry",void 0),Ut([S()],qt.prototype,"secondaryBtnLabel",void 0),Ut([S()],qt.prototype,"secondaryLabel",void 0),Ut([S()],qt.prototype,"isLoading",void 0),Ut([j({type:Boolean})],qt.prototype,"isMobile",void 0),Ut([j()],qt.prototype,"onRetry",void 0);let Nt=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),l.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=r.state,i=e.find(t=>{var e,i,o;return"ANNOUNCED"===t.type&&(null==(e=t.info)?void 0:e.rdns)===(null==(i=this.wallet)?void 0:i.rdns)||"INJECTED"===t.type||t.name===(null==(o=this.wallet)?void 0:o.name)});if(!i)throw new Error("w3m-connecting-wc-browser: No connector found");await p.connectExternal(i,i.chain),y.close(),l.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:(null==(t=this.wallet)?void 0:t.name)||"Unknown"}})}catch(e){l.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}};Nt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("w3m-connecting-wc-browser")],Nt);let Mt=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),l.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,null==(t=this.onConnect)||t.call(this))}onConnectProxy(){var t;if((null==(t=this.wallet)?void 0:t.desktop_link)&&this.uri)try{this.error=!1;const{desktop_link:t,name:e}=this.wallet,{redirect:i,href:o}=s.formatNativeUrl(t,this.uri);p.setWcLinking({name:e,href:o}),p.setRecentWallet(this.wallet),s.openHref(i,"_blank")}catch{this.error=!0}}};Mt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("w3m-connecting-wc-desktop")],Mt);var Vt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Kt=class extends qt{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=n.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var t;if((null==(t=this.wallet)?void 0:t.mobile_link)&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:e,name:i}=this.wallet,{redirect:o,redirectUniversalLink:r,href:a}=s.formatNativeUrl(t,this.uri,e);this.redirectDeeplink=o,this.redirectUniversalLink=r,this.target=s.isIframe()?"_top":"_self",p.setWcLinking({name:i,href:a}),p.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?s.openHref(this.redirectUniversalLink,this.target):s.openHref(this.redirectDeeplink,this.target)}catch(e){l.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=x.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.subscribeKey("wcUri",()=>{this.onHandleURI()})),l.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,null==(t=this.onConnect)||t.call(this))}onTryAgain(){var t;p.setWcError(!1),null==(t=this.onConnect)||t.call(this)}};Vt([S()],Kt.prototype,"redirectDeeplink",void 0),Vt([S()],Kt.prototype,"redirectUniversalLink",void 0),Vt([S()],Kt.prototype,"target",void 0),Vt([S()],Kt.prototype,"preferUniversalLinks",void 0),Vt([S()],Kt.prototype,"isLoading",void 0),Kt=Vt([O("w3m-connecting-wc-mobile")],Kt);function Gt(t,e,i){if(t===e)return!1;return(t-e<0?e-t:t-e)<=i+.1}const Ht={generate({uri:t,size:e,logoSize:i,dotColor:o="#141414"}){const r=[],a=function(t,e){const i=Array.prototype.slice.call(E.create(t,{errorCorrectionLevel:e}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((t,e,i)=>(i%o===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t,"Q"),n=e/a.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach(({x:t,y:e})=>{const i=(a.length-7)*n*t,l=(a.length-7)*n*e,c=.45;for(let a=0;a<s.length;a+=1){const t=n*(7-2*a);r.push(C`
            <rect
              fill=${2===a?o:"transparent"}
              width=${0===a?t-5:t}
              rx= ${0===a?(t-5)*c:t*c}
              ry= ${0===a?(t-5)*c:t*c}
              stroke=${o}
              stroke-width=${0===a?5:0}
              height=${0===a?t-5:t}
              x= ${0===a?l+n*a+2.5:l+n*a}
              y= ${0===a?i+n*a+2.5:i+n*a}
            />
          `)}});const l=Math.floor((i+25)/n),c=a.length/2-l/2,d=a.length/2+l/2-1,u=[];a.forEach((t,e)=>{t.forEach((t,i)=>{if(a[e][i]&&!(e<7&&i<7||e>a.length-8&&i<7||e<7&&i>a.length-8||e>c&&e<d&&i>c&&i<d)){const t=e*n+n/2,o=i*n+n/2;u.push([t,o])}})});const p={};return u.forEach(([t,e])=>{var i;p[t]?null==(i=p[t])||i.push(e):p[t]=[e]}),Object.entries(p).map(([t,e])=>{const i=e.filter(t=>e.every(e=>!Gt(t,e,n)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{r.push(C`<circle cx=${t} cy=${e} fill=${o} r=${n/2.5} />`)})}),Object.entries(p).filter(([t,e])=>e.length>1).map(([t,e])=>{const i=e.filter(t=>e.some(e=>Gt(t,e,n)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const i=[];for(const o of e){const t=i.find(t=>t.some(t=>Gt(o,t,n)));t?t.push(o):i.push([o])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{r.push(C`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${o}
                stroke-width=${n/1.25}
                stroke-linecap="round"
              />
            `)})}),r}},Ft=t`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Xt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Qt=class extends o{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,k`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return C`
      <svg height=${t} width=${t}>
        ${Ht.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?k`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:k`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Qt.styles=[i,Ft],Xt([j()],Qt.prototype,"uri",void 0),Xt([j({type:Number})],Qt.prototype,"size",void 0),Xt([j()],Qt.prototype,"theme",void 0),Xt([j()],Qt.prototype,"imageSrc",void 0),Xt([j()],Qt.prototype,"alt",void 0),Xt([j()],Qt.prototype,"color",void 0),Xt([j({type:Boolean})],Qt.prototype,"arenaClear",void 0),Xt([j({type:Boolean})],Qt.prototype,"farcaster",void 0),Qt=Xt([O("wui-qr-code")],Qt);const Yt=t`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Jt=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Zt=class extends o{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,k`<slot></slot>`}};Zt.styles=[Yt],Jt([j()],Zt.prototype,"width",void 0),Jt([j()],Zt.prototype,"height",void 0),Jt([j()],Zt.prototype,"borderRadius",void 0),Jt([j()],Zt.prototype,"variant",void 0),Zt=Jt([O("wui-shimmer")],Zt);const te=t`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;let ee=class extends o{render(){return k`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};ee.styles=[i,e,te],ee=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("wui-ux-by-reown")],ee);const ie=t`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let oe=class extends qt{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),l.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:(null==(t=this.wallet)?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.unsubscribe)||t.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return p.setWcLinking(void 0),p.setRecentWallet(this.wallet),k` <wui-qr-code
      size=${t}
      theme=${f.state.themeMode}
      uri=${this.uri}
      imageSrc=${I(u.getWalletImage(this.wallet))}
      color=${I(f.state.themeVariables["--w3m-qr-color"])}
      alt=${I(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return k`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};oe.styles=ie,oe=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("w3m-connecting-wc-qrcode")],oe);let re=class extends o{constructor(){var t;if(super(),this.wallet=null==(t=c.state.data)?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");l.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${I(u.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};re=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("w3m-connecting-wc-unsupported")],re);var ae=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ne=class extends qt{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=x.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.subscribeKey("wcUri",()=>{this.updateLoadingState()})),l.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((null==(t=this.wallet)?void 0:t.webapp_link)&&this.uri)try{this.error=!1;const{webapp_link:t,name:e}=this.wallet,{redirect:i,href:o}=s.formatUniversalUrl(t,this.uri);p.setWcLinking({name:e,href:o}),p.setRecentWallet(this.wallet),s.openHref(i,"_blank")}catch{this.error=!0}}};ae([S()],ne.prototype,"isLoading",void 0),ne=ae([O("w3m-connecting-wc-web")],ne);var se=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let le=class extends o{constructor(){var t;super(),this.wallet=null==(t=c.state.data)?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(n.state.siwx),this.remoteFeatures=n.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(n.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return k`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return(null==(t=this.remoteFeatures)?void 0:t.reownBranding)?k`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if("browser"!==this.platform&&(!n.state.manualWCControl||t))try{const{wcPairingExpiry:e,status:i}=p.state;(t||n.state.enableEmbedded||s.isPairingExpired(e)||"connecting"===i)&&(await p.connectWalletConnect(),this.isSiwxEnabled||y.close())}catch(e){l.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),p.setWcError(!0),m.showError(e.message??"Connection error"),p.resetWcConnection(),c.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:i,injected:o,rdns:r}=this.wallet,a=null==o?void 0:o.map(({injected_id:t})=>t).filter(Boolean),l=[...r?[r]:a??[]],c=!n.state.isUniversalProvider&&l.length,d=t,u=i,h=p.checkInstalled(l),w=c&&h,g=e&&!s.isMobile();w&&!b.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(s.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||b.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return k`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return k`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return k`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return k`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return k`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?k`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var e;const i=null==(e=this.shadowRoot)?void 0:e.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};se([S()],le.prototype,"platform",void 0),se([S()],le.prototype,"platforms",void 0),se([S()],le.prototype,"isSiwxEnabled",void 0),se([S()],le.prototype,"remoteFeatures",void 0),le=se([O("w3m-connecting-wc-view")],le);var ce=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let de=class extends o{constructor(){super(...arguments),this.isMobile=s.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=a.state,{customWallets:i}=n.state,o=h.getRecentWallets(),r=t.length||e.length||(null==i?void 0:i.length)||o.length;return k`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?k`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return k`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};ce([S()],de.prototype,"isMobile",void 0),de=ce([O("w3m-connecting-wc-basic-view")],de);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue=()=>new pe;class pe{}const he=new WeakMap,we=z(class extends P{render(t){return R}update(t,[e]){var i;const o=e!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),R}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=he.get(e);void 0===i&&(i=new WeakMap,he.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return"function"==typeof this.G?null==(t=he.get(this.ht??globalThis))?void 0:t.get(this.G):null==(e=this.G)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ge=t`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var be=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ve=class extends o{constructor(){super(...arguments),this.inputElementRef=ue(),this.checked=void 0}render(){return k`
      <label>
        <input
          ${we(this.inputElementRef)}
          type="checkbox"
          ?checked=${I(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:null==(t=this.inputElementRef.value)?void 0:t.checked,bubbles:!0,composed:!0}))}};ve.styles=[i,e,$,ge],be([j({type:Boolean})],ve.prototype,"checked",void 0),ve=be([O("wui-switch")],ve);const fe=t`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var me=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ye=class extends o{constructor(){super(...arguments),this.checked=void 0}render(){return k`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${I(this.checked)}></wui-switch>
      </button>
    `}};ye.styles=[i,e,fe],me([j({type:Boolean})],ye.prototype,"checked",void 0),ye=me([O("wui-certified-switch")],ye);const xe=t`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var $e=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let ke=class extends o{constructor(){super(...arguments),this.icon="copy"}render(){return k`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ke.styles=[i,e,xe],$e([j()],ke.prototype,"icon",void 0),ke=$e([O("wui-input-element")],ke);const Ce=t`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Re=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let je=class extends o{constructor(){super(...arguments),this.inputElementRef=ue(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e=`wui-size-${this.size}`,i={[e]:!0,[t]:Boolean(this.inputRightPadding)};return k`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${we(this.inputElementRef)}
        class=${W(i)}
        type=${this.type}
        enterkeyhint=${I(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${I(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?k`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:null==(t=this.inputElementRef.value)?void 0:t.value,bubbles:!0,composed:!0}))}};je.styles=[i,e,Ce],Re([j()],je.prototype,"size",void 0),Re([j()],je.prototype,"icon",void 0),Re([j({type:Boolean})],je.prototype,"disabled",void 0),Re([j()],je.prototype,"placeholder",void 0),Re([j()],je.prototype,"type",void 0),Re([j()],je.prototype,"keyHint",void 0),Re([j()],je.prototype,"value",void 0),Re([j()],je.prototype,"inputRightPadding",void 0),Re([j()],je.prototype,"tabIdx",void 0),je=Re([O("wui-input-text")],je);const Oe=t`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let Ie=class extends o{constructor(){super(...arguments),this.inputComponentRef=ue()}render(){return k`
      <wui-input-text
        ${we(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,e=null==t?void 0:t.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};Ie.styles=[i,Oe],Ie=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("wui-search-bar")],Ie);const Se=C`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Te=t`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var ze=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Pe=class extends o{constructor(){super(...arguments),this.type="wallet"}render(){return k`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?k` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Se}`:k`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Pe.styles=[i,e,Te],ze([j()],Pe.prototype,"type",void 0),Pe=ze([O("wui-card-select-loader")],Pe);const We=t`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Ee=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Le=class extends o{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&T.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&T.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&T.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&T.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&T.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&T.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&T.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&T.getSpacingStyles(this.margin,3)};\n    `,k`<slot></slot>`}};Le.styles=[i,We],Ee([j()],Le.prototype,"gridTemplateRows",void 0),Ee([j()],Le.prototype,"gridTemplateColumns",void 0),Ee([j()],Le.prototype,"justifyItems",void 0),Ee([j()],Le.prototype,"alignItems",void 0),Ee([j()],Le.prototype,"justifyContent",void 0),Ee([j()],Le.prototype,"alignContent",void 0),Ee([j()],Le.prototype,"columnGap",void 0),Ee([j()],Le.prototype,"rowGap",void 0),Ee([j()],Le.prototype,"gap",void 0),Ee([j()],Le.prototype,"padding",void 0),Ee([j()],Le.prototype,"margin",void 0),Le=Ee([O("wui-grid")],Le);const De=t`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Be=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ae=class extends o{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,e;const i="certified"===(null==(t=this.wallet)?void 0:t.badge_type);return k`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${I(i?"certified":void 0)}
            >${null==(e=this.wallet)?void 0:e.name}</wui-text
          >
          ${i?k`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():k`
      <wui-wallet-image
        size="md"
        imageSrc=${I(this.imageSrc)}
        name=${null==(t=this.wallet)?void 0:t.name}
        .installed=${null==(e=this.wallet)?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return k`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=u.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await u.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Ae.styles=De,Be([S()],Ae.prototype,"visible",void 0),Be([S()],Ae.prototype,"imageSrc",void 0),Be([S()],Ae.prototype,"imageLoading",void 0),Be([j()],Ae.prototype,"wallet",void 0),Ae=Be([O("w3m-all-wallets-list-item")],Ae);const _e=t`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ue=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};const qe="local-paginator";let Ne=class extends o{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.state.wallets.length,this.wallets=a.state.wallets,this.recommended=a.state.recommended,this.featured=a.state.featured,this.filteredWallets=a.state.filteredWallets,this.unsubscribe.push(a.subscribeKey("wallets",t=>this.wallets=t),a.subscribeKey("recommended",t=>this.recommended=t),a.subscribeKey("featured",t=>this.featured=t),a.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(t=>t()),null==(t=this.paginationObserver)||t.disconnect()}render(){return k`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var t;this.loading=!0;const e=null==(t=this.shadowRoot)?void 0:t.querySelector("wui-grid");e&&(await a.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>k`
        <wui-card-select-loader type="wallet" id=${I(e)}></wui-card-select-loader>
      `)}walletsTemplate(){var t;const e=(null==(t=this.filteredWallets)?void 0:t.length)>0?s.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):s.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return g.markWalletsAsInstalled(e).map(t=>k`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:i,count:o}=a.state,r=window.innerWidth<352?3:4,n=t.length+e.length;let s=Math.ceil(n/r)*r-n+r;return s-=t.length?i.length%r:0,0===o&&i.length>0?null:0===o||[...i,...t,...e].length<o?this.shimmerTemplate(s,qe):null}createPaginationObserver(){var t;const e=null==(t=this.shadowRoot)?void 0:t.querySelector(`#${qe}`);e&&(this.paginationObserver=new IntersectionObserver(([t])=>{if((null==t?void 0:t.isIntersecting)&&!this.loading){const{page:t,count:e,wallets:i}=a.state;i.length<e&&a.fetchWalletsByPage({page:t+1})}}),this.paginationObserver.observe(e))}onConnectWallet(t){r.selectWalletConnector(t)}};Ne.styles=_e,Ue([S()],Ne.prototype,"loading",void 0),Ue([S()],Ne.prototype,"wallets",void 0),Ue([S()],Ne.prototype,"recommended",void 0),Ue([S()],Ne.prototype,"featured",void 0),Ue([S()],Ne.prototype,"filteredWallets",void 0),Ne=Ue([O("w3m-all-wallets-list")],Ne);const Me=t`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ve=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Ke=class extends o{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?k`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=a.state,e=g.markWalletsAsInstalled(t);return t.length?k`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(t=>k`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(t)}
              .wallet=${t}
              data-testid="wallet-search-item-${t.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:k`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){r.selectWalletConnector(t)}};Ke.styles=Me,Ve([S()],Ke.prototype,"loading",void 0),Ve([j()],Ke.prototype,"query",void 0),Ve([j()],Ke.prototype,"badge",void 0),Ke=Ve([O("w3m-all-wallets-search")],Ke);var Ge=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let He=class extends o{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=s.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return k`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?k`<w3m-all-wallets-search
            query=${this.search}
            badge=${I(this.badge)}
          ></w3m-all-wallets-search>`:k`<w3m-all-wallets-list badge=${I(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",m.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return s.isMobile()?k`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){c.push("ConnectingWalletConnect")}};Ge([S()],He.prototype,"search",void 0),Ge([S()],He.prototype,"badge",void 0),He=Ge([O("w3m-all-wallets-view")],He);const Fe=t`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Xe=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};let Qe=class extends o{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return k`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${I(this.iconVariant)}
        tabindex=${I(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return k`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return k`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e="square-blue"===this.iconVariant?"mdl":"md",i=this.iconSize?this.iconSize:e;return k`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?k`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:k``}chevronTemplate(){return this.chevron?k`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Qe.styles=[i,e,Fe],Xe([j()],Qe.prototype,"icon",void 0),Xe([j()],Qe.prototype,"iconSize",void 0),Xe([j()],Qe.prototype,"tabIdx",void 0),Xe([j()],Qe.prototype,"variant",void 0),Xe([j()],Qe.prototype,"iconVariant",void 0),Xe([j({type:Boolean})],Qe.prototype,"disabled",void 0),Xe([j()],Qe.prototype,"imageSrc",void 0),Xe([j()],Qe.prototype,"alt",void 0),Xe([j({type:Boolean})],Qe.prototype,"chevron",void 0),Xe([j({type:Boolean})],Qe.prototype,"loading",void 0),Qe=Xe([O("wui-list-item")],Qe);let Ye=class extends o{constructor(){var t;super(...arguments),this.wallet=null==(t=c.state.data)?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return k`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(null==(t=this.wallet)?void 0:t.chrome_store)?k`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(null==(t=this.wallet)?void 0:t.app_store)?k`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(null==(t=this.wallet)?void 0:t.play_store)?k`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(null==(t=this.wallet)?void 0:t.homepage)?k`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(null==(t=this.wallet)?void 0:t.chrome_store)&&s.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(null==(t=this.wallet)?void 0:t.app_store)&&s.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(null==(t=this.wallet)?void 0:t.play_store)&&s.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(null==(t=this.wallet)?void 0:t.homepage)&&s.openHref(this.wallet.homepage,"_blank")}};Ye=function(t,e,i,o){var r,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(a<3?r(n):a>3?r(e,i,n):r(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}([O("w3m-downloads-view")],Ye);export{He as W3mAllWalletsView,de as W3mConnectingWcBasicView,Ye as W3mDownloadsView};
