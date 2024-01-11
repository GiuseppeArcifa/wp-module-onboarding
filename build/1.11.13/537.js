"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[537],{1211:(e,a,t)=>{t.d(a,{Z:()=>b});var s=t(9307),n=t(9250),r=t(9818),l=t(2503);const i=e=>{let{text:a,handleClick:t,disabled:n,className:r}=e;return(0,s.createElement)("button",{type:"button",className:`${r} nfd-card-button`,onClick:()=>{t()},disabled:n},a)};var u=t(7533),o=t(2200),d=t(8297),c=t(6342),p=t(3421),m=t(4184),y=t.n(m),g=t(1984);const b=e=>{let{text:a,disabled:t,className:m,icon:b}=e;const v=(0,n.s0)(),{nextStep:T,currentData:f}=(0,r.useSelect)((e=>({nextStep:e(l.h).getNextStep(),currentData:e(l.h).getCurrentOnboardingData()})),[]),h=null===T||!1===T;return(0,s.createElement)(i,{className:y()("nfd-nav-card-button",m),text:(0,s.createElement)(s.Fragment,null,(0,s.createElement)("span",{className:`${m}__text`},a),b&&(0,s.createElement)(g.Z,{className:`${m}__icon`,icon:b})),handleClick:()=>h?async function(){f&&(f.isComplete=(new Date).getTime(),(0,u.kB)(f)),(0,p.jd)(),(0,d.uW)(new d.Z_(c.pd)),window.location.replace(o.br)}():v(T.path),disabled:t})}},8537:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var s=t(9307),n=t(5634),r=t(349),l=t(2200),i=t(7560),u=t(2503),o=t(9818),d=t(9519),c=t(1211),p=t(950),m=t(682),y=t(6557),g=t(8297),b=t(6342);const v=()=>{const{setDrawerActiveView:e,setIsDrawerSuppressed:a,setIsHeaderNavigationEnabled:t,setSidebarActiveView:v,setCurrentOnboardingData:T}=(0,o.useDispatch)(u.h),{currentData:f}=(0,o.useSelect)((e=>({currentData:e(u.h).getCurrentOnboardingData()})),[]);(0,s.useEffect)((()=>{v(l.Jq),a(!0),e(l.mz),t(!0),I()}),[]);const[h,_]=(0,s.useState)(!1),[w,E]=(0,s.useState)(),[C,N]=(0,s.useState)(""),[x,S]=(0,s.useState)(),k=(0,i.Z)(),I=async()=>{var e,a,t,s,n,r,l,i,u,o,d;const c=await(0,y.P)();if(E(null==c?void 0:c.body),"string"==typeof(null==f||null===(e=f.data)||void 0===e||null===(a=e.siteType)||void 0===a?void 0:a.primary)||"string"==typeof(null==f||null===(t=f.data)||void 0===t||null===(s=t.siteType)||void 0===s?void 0:s.secondary)){var p,m,g,b;const e=null==f||null===(p=f.data)||void 0===p||null===(m=p.siteType)||void 0===m?void 0:m.primary,a=null==f||null===(g=f.data)||void 0===g||null===(b=g.siteType)||void 0===b?void 0:b.secondary;f.data.siteType.primary={refers:"custom",value:e},f.data.siteType.secondary={refers:"custom",value:a},T(f)}var v,h,_;N(null!==(n=null==f||null===(r=f.data)||void 0===r||null===(l=r.siteType)||void 0===l||null===(i=l.primary)||void 0===i?void 0:i.value)&&void 0!==n?n:""),"custom"===(null==f||null===(u=f.data)||void 0===u||null===(o=u.siteType)||void 0===o||null===(d=o.primary)||void 0===d?void 0:d.refers)&&D(null==f||null===(v=f.data)||void 0===v||null===(h=v.siteType)||void 0===h||null===(_=h.primary)||void 0===_?void 0:_.value)},Z=e=>{_(!1),N(e),f.data.siteType.primary.refers="slug",f.data.siteType.primary.value=e,T(f),(0,g.tH)(new g.Z_(b.xp,e))},D=e=>{_(!0),f.data.siteType.primary.refers="custom",f.data.siteType.primary.value=e,T(f),""!==C&&C!==e&&(clearTimeout(x),S(setTimeout((()=>{(0,g.tH)(new g.Z_(b.xp,e))}),1e3))),N(e)};return(0,s.createElement)(n.Z,{isBgPrimary:!0,isCentered:!0},(0,s.createElement)(r.Z,null,(0,s.createElement)("div",{className:"nfd-card-heading center"},(0,s.createElement)(d.Z,{heading:k.heading,subHeading:k.subheading,question:k.question})),(0,s.createElement)(m.Z,{type:"fade-in-disabled",after:w},(0,s.createElement)("div",{className:"nfd-setup-primary-categories"},w&&(()=>{const e=null==w?void 0:w.types;return Object.keys(e).map(((a,t)=>{var n,r,l,i;return(0,s.createElement)("div",{key:null===(n=e[a])||void 0===n?void 0:n.slug,"data-slug":null===(r=e[a])||void 0===r?void 0:r.slug,tabIndex:t+1,role:"button",className:(e[a].slug!==C||h?"":"chosenPrimaryCategory ")+"nfd-card-pri-category",onClick:()=>Z(e[a].slug),onKeyDown:()=>Z(e[a].slug)},(0,s.createElement)("div",{className:"nfd-card-pri-category-wrapper"},(0,s.createElement)("span",{className:"nfd-card-pri-category-wrapper__icon "+(e[a].slug===C?"nfd-card-pri-category-wrapper__icon-selected ":""),style:{backgroundImage:`url(${null===(l=e[a])||void 0===l?void 0:l.icon})`}}),(0,s.createElement)("span",{className:"categName"},null===(i=e[a])||void 0===i?void 0:i.label)))}))})()),(0,s.createElement)("div",{className:"nfd-setup-primary-custom"},(0,s.createElement)("p",{className:"nfd-setup-primary-custom__tellus-text"},k.customInputLabel),(0,s.createElement)("input",{type:"search",onChange:e=>{var a;return D(null==e||null===(a=e.target)||void 0===a?void 0:a.value)},className:"nfd-setup-primary-custom__tellus-input",placeholder:k.customInputPlaceholderText,value:h?C:""}))),(0,s.createElement)(c.Z,{text:k.buttonText}),(0,s.createElement)(p.Z,null)))}},7560:(e,a,t)=>{t.d(a,{Z:()=>r});var s=t(5736),n=t(1392);const r=()=>({heading:(0,s.sprintf)(
/* translators: %s: website or store */
(0,s.__)("Help us tailor this setup to your %s","wp-module-onboarding"),(0,n.I)("site")),subheading:(0,s.sprintf)(
/* translators: %s: SITE or STORE */
(0,s.__)("ABOUT YOUR %s","wp-module-onboarding"),(0,n.I)("SITE")),question:(0,s.sprintf)(
/* translators: %s: site or store */
(0,s.__)("What type of %s is it?","wp-module-onboarding"),(0,n.I)("site")),buttonText:(0,s.__)("Continue Setup","wp-module-onboarding"),customInputPlaceholderText:(0,s.sprintf)(
/* translators: %s: site or store */
(0,s.__)("Enter to search your %s type","wp-module-onboarding"),(0,n.I)("site")),customInputLabel:(0,s.__)("or tell us here:","wp-module-onboarding")})},6557:(e,a,t)=>{t.d(a,{P:()=>u});var s=t(6329),n=t(4704);const r=JSON.parse('{"body":{"types":{"business":{"slug":"business","label":"Business","icon":"https://cdn.hiive.space/site-classification/business.svg","emoji":"💼","schema":"Corporation","secondaryTypes":{"agency-consulting":{"primaryType":"business","slug":"agency-consulting","label":"Agency & Consulting"},"arts-crafts":{"primaryType":"business","slug":"arts-crafts","label":"Arts & Crafts"},"autos-repair":{"primaryType":"business","slug":"autos-repair","label":"Autos & Repair"},"child-care":{"primaryType":"business","slug":"child-care","label":"Child Care"},"events":{"primaryType":"business","slug":"events","label":"Events"},"finance":{"primaryType":"business","slug":"finance","label":"Finance"},"garden-florist":{"primaryType":"business","slug":"garden-florist","label":"Florist & Garden Center"},"hr-recruiting":{"primaryType":"business","slug":"hr-recruiting","label":"HR & Recruiting"},"insurance":{"primaryType":"business","slug":"insurance","label":"Insurance"},"legal":{"primaryType":"business","slug":"legal","label":"Legal"},"marketing":{"primaryType":"business","slug":"marketing","label":"Marketing"},"outdoors":{"primaryType":"business","slug":"outdoors","label":"Outdoors"},"pr-communications":{"primaryType":"business","slug":"pr-communications","label":"PR & Communications"},"real-estate-management":{"primaryType":"business","slug":"real-estate-management","label":"Real Estate & Management"},"shopping-retail":{"primaryType":"business","slug":"shopping-retail","label":"Shopping & Retail"},"trades-repair-services":{"primaryType":"business","slug":"trades-repair-services","label":"Trades & Repair Services"},"weddings":{"primaryType":"business","slug":"weddings","label":"Weddings"}}}}}}');var l=t(6989),i=t.n(l);async function u(){const e=await(0,s.D)(i()({url:(0,n.FZ)("site-classification")}));return 0===e.body.length?r:e}}}]);