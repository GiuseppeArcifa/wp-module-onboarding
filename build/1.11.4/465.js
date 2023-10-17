"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[465],{1211:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(9307),o=n(9250),i=n(9818),s=n(2503);const r=e=>{let{text:t,handleClick:n,disabled:o,className:i}=e;return(0,a.createElement)("button",{type:"button",className:`${i} nfd-card-button`,onClick:()=>{n()},disabled:o},t)};var l=n(7533),d=n(2200),c=n(8297),u=n(6342),m=n(3421),b=n(4184),p=n.n(b),g=n(1984);const h=e=>{let{text:t,disabled:n,className:b,icon:h}=e;const f=(0,o.s0)(),{nextStep:v,currentData:w}=(0,i.useSelect)((e=>({nextStep:e(s.h).getNextStep(),currentData:e(s.h).getCurrentOnboardingData()})),[]),E=null===v||!1===v;return(0,a.createElement)(r,{className:p()("nfd-nav-card-button",b),text:(0,a.createElement)(a.Fragment,null,(0,a.createElement)("span",{className:`${b}__text`},t),h&&(0,a.createElement)(g.Z,{className:`${b}__icon`,icon:h})),handleClick:()=>E?async function(){w&&(w.isComplete=(new Date).getTime(),(0,l.kB)(w)),(0,m.jd)(),(0,c.uW)(new c.Z_(u.pd)),window.location.replace(d.br)}():f(v.path),disabled:n})}},2452:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9307),o=n(682);const i=e=>{let{title:t,text:n,imgType:i,className:s,animationName:r}=e;return(0,a.createElement)("div",{className:s},(0,a.createElement)("div",{className:"tab-text"},(0,a.createElement)("h4",null,t),n),(0,a.createElement)("div",{className:"tab-image"},(0,a.createElement)("div",{className:"tab-img"},(0,a.createElement)(o.Z,{type:r},(0,a.createElement)("div",{className:i})))))}},1056:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),o=n(9307),i=(n(4184),n(2819)),s=n(4333),r=n(9630),l=n(5904);const d=()=>{},c=["menuitem","menuitemradio","menuitemcheckbox"];class u extends o.Component{constructor(){super(...arguments),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container.addEventListener("keydown",this.onKeyDown),this.container.addEventListener("focus",this.onFocus)}componentWillUnmount(){this.container.removeEventListener("keydown",this.onKeyDown),this.container.removeEventListener("focus",this.onFocus)}bindContainer(e){const{forwardedRef:t}=this.props;this.container=e,"function"==typeof t?t(e):t&&"current"in t&&(t.current=e)}getFocusableContext(e){const{onlyBrowserTabstops:t}=this.props,n=(t?l.focus.tabbable:l.focus.focusable).find(this.container),a=this.getFocusableIndex(n,e);return a>-1&&e?{index:a,target:e,focusables:n}:null}getFocusableIndex(e,t){const n=e.indexOf(t);if(-1!==n)return n}onKeyDown(e){this.props.onKeyDown&&this.props.onKeyDown(e);const{getFocusableContext:t}=this,{cycle:n=!0,eventToOffset:a,onNavigate:o=d,stopNavigationEvents:i}=this.props,s=a(e);if(void 0!==s&&i){e.stopImmediatePropagation();const t=e.target.getAttribute("role");c.includes(t)&&e.preventDefault()}if(!s)return;const r=t(e.target.ownerDocument.activeElement);if(!r)return;const{index:l,focusables:u}=r,m=n?function(e,t,n){const a=e+n;return a<0?t+a:a>=t?a-t:a}(l,u.length,s):l+s;m>=0&&m<u.length&&(u[m].focus(),o(m,u[m]))}render(){const{children:e,...t}=this.props;return(0,o.createElement)("div",(0,a.Z)({ref:this.bindContainer},(0,i.omit)(t,["stopNavigationEvents","eventToOffset","onNavigate","onKeyDown","cycle","onlyBrowserTabstops","forwardedRef"])),e)}}const m=(e,t)=>(0,o.createElement)(u,(0,a.Z)({},e,{forwardedRef:t}));m.displayName="NavigableContainer";const b=(0,o.forwardRef)(m),p=(0,o.forwardRef)((function(e,t){let{role:n="menu",orientation:s="vertical",...l}=e;return(0,o.createElement)(b,(0,a.Z)({ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:n,"aria-orientation":"presentation"===n?null:s,eventToOffset:e=>{const{keyCode:t}=e;let n=[r.DOWN],a=[r.UP];return"horizontal"===s&&(n=[r.RIGHT],a=[r.LEFT]),"both"===s&&(n=[r.RIGHT,r.DOWN],a=[r.LEFT,r.UP]),(0,i.includes)(n,t)?1:(0,i.includes)(a,t)?-1:(0,i.includes)([r.DOWN,r.UP,r.LEFT,r.RIGHT],t)?0:void 0}},l))}));(0,o.forwardRef)((function(e,t){let{eventToOffset:n,...i}=e;return(0,o.createElement)(b,(0,a.Z)({ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!0,eventToOffset:e=>{const{keyCode:t,shiftKey:a}=e;return r.TAB===t?a?-1:1:n?n(e):void 0}},i))}));var g=n(5609);const h=()=>{},f=e=>{let{tabId:t,onClick:n,children:i,selected:s,...r}=e;return(0,o.createElement)(g.Button,(0,a.Z)({role:"tab",tabIndex:s?null:-1,"aria-selected":s,id:t,onClick:n},r),i)};function v(e){var t;let{className:n,children:a,tabs:r,initialTabName:l,orientation:d="horizontal",activeClass:c="is-active",notActiveClass:u="is-not-active",onSelect:m=h}=e;const b=(0,s.useInstanceId)(v,"tab-panel"),[g,w]=(0,o.useState)(null),E=e=>{w(e),m(e)},y=(0,i.find)(r,{name:g}),N=`${b}-${null!==(t=null==y?void 0:y.name)&&void 0!==t?t:"none"}`;return(0,o.useEffect)((()=>{(0,i.find)(r,{name:g})||w(l||(r.length>0?r[0].name:null))}),[r]),(0,o.createElement)("div",{className:n},(0,o.createElement)(p,{role:"tablist",orientation:d,onNavigate:(e,t)=>{t.click()},className:"components-tab-panel__tabs"},r.map((e=>(0,o.createElement)(f,{className:`components-tab-panel__tabs-item ${e.name===g&&c} ${e.name!==g&&u}`,tabId:`${b}-${e.name}`,"aria-controls":`${b}-${e.name}-view`,selected:e.name===g,key:e.name,onMouseOver:(0,i.partial)(E,e.name)},e.title)))),y&&(0,o.createElement)("div",{key:N,"aria-labelledby":N,role:"tabpanel",id:`${N}-view`,className:"components-tab-panel__tab-content"},a(y)))}},4465:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(9307),o=n(9818),i=n(5634),s=n(349),r=n(9519),l=n(1211),d=n(2452),c=n(1056),u=n(2503),m=n(2200),b=n(1392),p=n(5736);const g=()=>{const{setIsDrawerOpened:e,setSidebarActiveView:t,setIsHeaderNavigationEnabled:n}=(0,o.useDispatch)(u.h);(0,a.useEffect)((()=>{e(!1),t(m.Jq),n(!0)}),[]);const{brandName:g,brandSlug:h}=(0,o.useSelect)((e=>({brandName:e(u.h).getNewfoldBrandName(),brandSlug:e(u.h).getNewfoldBrand()}))),f=((e,t)=>{const n={heading:(0,p.__)("Nice work: Your site is ready 🎉","wp-module-onboarding"),subheading:(0,p.__)("Move-in day begins! Let us know if you'd like a hand.","wp-module-onboarding"),buttonText:(0,p.__)("Complete Setup","wp-module-onboarding"),tabs:[{name:"tab1",title:(0,p.__)("WHATS NEXT","wp-module-onboarding"),subtitle:(0,p.__)("Add content, organize your menu and launch.","wp-module-onboarding"),text:(0,p.sprintf)(
/* translators: %s: Brand */
(0,p.__)("✅ Theme created, features added and Coming Soon mode activated. Thank you for building your site with %s, we're always here to help!","wp-module-onboarding"),e),imgType:"img-1",animationName:"fade-in-right"},{name:"tab2",title:(0,p.__)("HELP & RESOURCES","wp-module-onboarding"),subtitle:(0,p.__)("Next step or next level, we're your partner.","wp-module-onboarding"),text:(0,p.sprintf)(
/* translators: %s: Site */
(0,p.__)("WordPress make it easy to grow your %s. Send a newsletter, broadcast a podcast, create courses and trainings. Dream it, build it.","wp-module-onboarding"),(0,b.I)("site")),imgType:"img-2",animationName:"fade-in-up"},{name:"tab3",title:(0,p.__)("HIRE OUR EXPERTS","wp-module-onboarding"),subtitle:(0,p.__)("Make our great people your people.","wp-module-onboarding"),text:(0,p.__)("Looking for personalized WordPress assistance, or someone to take-over from here? Go beyond support with our professional services.","wp-module-onboarding"),imgType:"img-3",animationName:"fade-in-left"}]};return"hostgator-br"===t&&(n.tabs[2].title=(0,p.__)("ALWAYS COUNT ON OUR TEAM","wp-module-onboarding"),n.tabs[2].subtitle=(0,p.__)("24 hours a day / 7 days a week","wp-module-onboarding"),n.tabs[2].text=(0,p.__)("From beginner to advanced, you have a partner to trust. Our support works when you work. Also count on various help materials on YouTube, blog and Knowledge Base.","wp-module-onboarding"),n.tabs[2].imgType=""),n})(g,h);return(0,a.createElement)(i.Z,{isCentered:!0,isBgPrimary:!0},(0,a.createElement)(s.Z,null,(0,a.createElement)("div",{className:"whatnext-card"},(0,a.createElement)(r.Z,{heading:f.heading,subHeading:f.subheading}),(0,a.createElement)(c.Z,{className:"nfd-onboarding-overview__tab-panel",tabs:f.tabs.map((e=>({name:e.name,title:e.title,content:(0,a.createElement)(d.Z,{title:e.subtitle,text:e.text,imgType:e.imgType,animationName:e.animationName,className:"tab-data"})})))},(e=>(0,a.createElement)("div",null,e.content))),(0,a.createElement)(l.Z,{text:f.buttonText}))))}}}]);