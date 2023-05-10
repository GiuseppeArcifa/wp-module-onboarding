"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[888],{1211:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(9307),r=t(6974),s=t(9818),l=t(4106);const i=e=>{let{text:a,handleClick:t,disabled:r,className:s}=e;return(0,n.createElement)("button",{type:"button",className:`${s} nfd-card-button`,onClick:()=>{t()},disabled:r},a)};var o=t(7533),d=t(2200);const u=e=>{let{text:a,disabled:t}=e;const u=(0,r.s0)(),c=(0,r.TH)(),{nextStep:p,currentData:m}=(0,s.useSelect)((e=>({nextStep:e(l.h).getNextStep(),currentData:e(l.h).getCurrentOnboardingData()})),[c.path]),g=null===p||!1===p;return(0,n.createElement)(i,{className:"nfd-nav-card-button",text:a,handleClick:()=>g?async function(){m&&(m.isComplete=(new Date).getTime(),(0,o.kB)(m));const e="ecommerce"===window.nfdOnboarding.currentFlow?d.br:d.hF;window.location.replace(e)}():u(p.path),disabled:t})}},9519:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(9307);const r=(0,n.memo)((e=>{let{heading:a,subHeading:t,question:r}=e;return(0,n.createElement)("div",null,a&&(0,n.createElement)("h2",{className:"nfd-step-card-heading"},a),t&&(0,n.createElement)("h3",{className:r?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},t),r&&(0,n.createElement)("h3",{className:"nfd-step-card-question"},r))}))},5791:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(9307),r=t(4184),s=t.n(r),l=t(5158),i=t(6974),o=t(2200),d=t(6989),u=t.n(d),c=t(4704);const p=e=>{let{className:a="nfd-onboarding-layout__base",children:t}=e;const r=(0,i.TH)(),d=document.querySelector(".nfd-onboard-content");return(0,n.useEffect)((()=>{null==d||d.focus({preventScroll:!0}),function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,l.speak)(a,"assertive")}(r,"Override"),new class{constructor(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=a}send(){u()({url:(0,c.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${o.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,n.createElement)("div",{className:s()("nfd-onboarding-layout",a)},t)};var m=t(682);const g=e=>{let{children:a}=e;return(0,n.createElement)("section",{className:"is-contained"},a)},y=e=>{let{className:a="",children:t,isBgPrimary:r=!1,isCentered:l=!1,isVerticallyCentered:i=!1,isContained:o=!1,isPadded:d=!1,isFadeIn:u=!0}=e;const c=o?g:n.Fragment;return(0,n.createElement)(m.Z,{type:u&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,n.createElement)(p,{className:s()("nfd-onboarding-layout__common",a,{"is-bg-primary":r},{"is-centered":l},{"is-vertically-centered":i},{"is-padded":d})},(0,n.createElement)(c,null,t)))}},950:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(9307),r=t(4106),s=t(9818),l=t(5736);const i=e=>{let{question:a=(0,l.__)("Need Help?","wp-module-onboarding"),urlLabel:t=(0,l.__)("Hire our Experts","wp-module-onboarding")}=e;const i=(0,s.select)(r.h).getHireExpertsUrl();return i&&(0,n.createElement)("div",{className:"nfd-card-need-help-tag"},a,(0,n.createElement)("a",{href:i,target:"_blank",rel:"noreferrer"},t))}},349:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(9307),r=(t(5736),t(4184)),s=t.n(r);const l=e=>{let{className:a="",children:t}=e;return(0,n.createElement)("div",{className:s()("nfd-onboarding-large-card",a)},t)}},5888:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var n=t(9307),r=t(5791),s=t(349),l=t(2200),i=t(5521),o=t(4106),d=t(9818),u=t(9519),c=t(1211),p=t(950),m=t(682),g=t(6557);const y=()=>{const{setDrawerActiveView:e,setIsDrawerSuppressed:a,setIsHeaderNavigationEnabled:t,setSidebarActiveView:y,setCurrentOnboardingData:b}=(0,d.useDispatch)(o.h),v=(0,i.Z)(),{currentData:h}=(0,d.useSelect)((e=>({currentData:e(o.h).getCurrentOnboardingData()})),[]);(0,n.useEffect)((()=>{y(l.Jq),a(!0),e(l.mz),t(!0),S()}),[]);const[f,T]=(0,n.useState)(!1),[w,E]=(0,n.useState)(),[_,N]=(0,n.useState)(""),S=async()=>{var e,a,t,n,r,s,l,i,o,d,u;const c=await(0,g.P)();if(E(null==c?void 0:c.body),"string"==typeof(null==h||null===(e=h.data)||void 0===e||null===(a=e.siteType)||void 0===a?void 0:a.primary)||"string"==typeof(null==h||null===(t=h.data)||void 0===t||null===(n=t.siteType)||void 0===n?void 0:n.secondary)){var p,m,y,v;const e=null==h||null===(p=h.data)||void 0===p||null===(m=p.siteType)||void 0===m?void 0:m.primary,a=null==h||null===(y=h.data)||void 0===y||null===(v=y.siteType)||void 0===v?void 0:v.secondary;h.data.siteType.primary={refers:"custom",value:e},h.data.siteType.secondary={refers:"custom",value:a},b(h)}var f,T,w;N(null!==(r=null==h||null===(s=h.data)||void 0===s||null===(l=s.siteType)||void 0===l||null===(i=l.primary)||void 0===i?void 0:i.value)&&void 0!==r?r:""),"custom"===(null==h||null===(o=h.data)||void 0===o||null===(d=o.siteType)||void 0===d||null===(u=d.primary)||void 0===u?void 0:u.refers)&&D(null==h||null===(f=h.data)||void 0===f||null===(T=f.siteType)||void 0===T||null===(w=T.primary)||void 0===w?void 0:w.value)},C=e=>{T(!1),N(e),h.data.siteType.primary.refers="slug",h.data.siteType.primary.value=e,b(h)},D=e=>{T(!0),N(e),h.data.siteType.primary.refers="custom",h.data.siteType.primary.value=e,b(h)};return(0,n.createElement)(r.Z,{isBgPrimary:!0,isCentered:!0},(0,n.createElement)(s.Z,null,(0,n.createElement)("div",{className:"nfd-card-heading center"},(0,n.createElement)(u.Z,{heading:v.cardHeading,subHeading:v.subHeading,question:v.question})),(0,n.createElement)(m.Z,{type:"fade-in-disabled",after:w},(0,n.createElement)("div",{className:"nfd-setup-primary-categories"},w&&(()=>{const e=null==w?void 0:w.types;return Object.keys(e).map(((a,t)=>{var r,s,l;return(0,n.createElement)("div",{key:null===(r=e[a])||void 0===r?void 0:r.slug,tabIndex:t+1,role:"button",className:(e[a].slug!==_||f?"":"chosenPrimaryCategory ")+"nfd-card-pri-category",onClick:()=>C(e[a].slug),onKeyDown:()=>C(e[a].slug)},(0,n.createElement)("div",{className:"nfd-card-pri-category-wrapper"},(0,n.createElement)("span",{className:"nfd-card-pri-category-wrapper__icon "+(e[a].slug===_?"nfd-card-pri-category-wrapper__icon-selected ":""),style:{backgroundImage:`url(${null===(s=e[a])||void 0===s?void 0:s.icon})`}}),(0,n.createElement)("span",{className:"categName"},null===(l=e[a])||void 0===l?void 0:l.label)))}))})()),(0,n.createElement)("div",{className:"nfd-setup-primary-custom"},(0,n.createElement)("p",{className:"nfd-setup-primary-custom__tellus-text"},"or tell us here:"),(0,n.createElement)("input",{type:"search",onChange:e=>{var a;return D(null==e||null===(a=e.target)||void 0===a?void 0:a.value)},className:"nfd-setup-primary-custom__tellus-input",placeholder:v.placeholderSiteTypeInput,value:f?_:""}))),(0,n.createElement)(c.Z,{text:v.buttonText}),(0,n.createElement)(p.Z,null)))}},5521:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(5736),r=t(1392);const s=()=>({cardHeading:(0,n.__)("Help us tailor this setup to your site","wp-module-onboarding"),subHeading:(0,n.sprintf)(
/* translators: 1: site */
(0,n.__)("ABOUT YOUR %s","wp-module-onboarding"),(0,r.I)("SITE")),question:(0,n.sprintf)(
/* translators: 1: site */
(0,n.__)("What type of %s is it?","wp-module-onboarding"),(0,r.I)("site")),buttonText:(0,n.__)("Continue Setup","wp-module-onboarding"),placeholderSiteTypeInput:(0,n.sprintf)(
/* translators: 1: site */
(0,n.__)("Enter to search your %s type","wp-module-onboarding"),(0,r.I)("site")),tellusHereText:(0,n.__)("or tell us here:","wp-module-onboarding")})},6557:(e,a,t)=>{t.d(a,{P:()=>o});var n=t(6329),r=t(4704);const s=JSON.parse('{"body":{"types":{"business":{"slug":"business","label":"Business","icon":"https://cdn.hiive.space/site-classification/business.svg","emoji":"💼","schema":"Corporation","secondaryTypes":{"agency-consulting":{"primaryType":"business","slug":"agency-consulting","label":"Agency & Consulting"},"arts-crafts":{"primaryType":"business","slug":"arts-crafts","label":"Arts & Crafts"},"autos-repair":{"primaryType":"business","slug":"autos-repair","label":"Autos & Repair"},"child-care":{"primaryType":"business","slug":"child-care","label":"Child Care"},"events":{"primaryType":"business","slug":"events","label":"Events"},"finance":{"primaryType":"business","slug":"finance","label":"Finance"},"garden-florist":{"primaryType":"business","slug":"garden-florist","label":"Florist & Garden Center"},"hr-recruiting":{"primaryType":"business","slug":"hr-recruiting","label":"HR & Recruiting"},"insurance":{"primaryType":"business","slug":"insurance","label":"Insurance"},"legal":{"primaryType":"business","slug":"legal","label":"Legal"},"marketing":{"primaryType":"business","slug":"marketing","label":"Marketing"},"outdoors":{"primaryType":"business","slug":"outdoors","label":"Outdoors"},"pr-communications":{"primaryType":"business","slug":"pr-communications","label":"PR & Communications"},"real-estate-management":{"primaryType":"business","slug":"real-estate-management","label":"Real Estate & Management"},"shopping-retail":{"primaryType":"business","slug":"shopping-retail","label":"Shopping & Retail"},"trades-repair-services":{"primaryType":"business","slug":"trades-repair-services","label":"Trades & Repair Services"},"weddings":{"primaryType":"business","slug":"weddings","label":"Weddings"}}}}}}');var l=t(6989),i=t.n(l);async function o(){const e=await(0,n.D)(i()({url:(0,r.F)("site-classification")}));return 0===e.body.length?s:e}}}]);