"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[608],{4401:(e,t,r)=>{r.d(t,{V:()=>l});var a=r(9307),n=r(5791),o=r(4316),s=r(950);const l=e=>{let{title:t,subtitle:r,error:l}=e;return(0,a.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},l),(0,a.createElement)(s.Z,null))}},4316:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(9307),n=r(5736);const o=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,n.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,n.__)(r,"wp-module-onboarding")))}},5791:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(9307),n=r(4184),o=r.n(n),s=r(5158),l=r(6974),i=r(2200),d=r(6989),c=r.n(d),u=r(4704);const m=e=>{let{className:t="nfd-onboarding-layout__base",children:r}=e;const n=(0,l.TH)(),d=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==d||d.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,s.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){c()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,a.createElement)("div",{className:o()("nfd-onboarding-layout",t)},r)};var h=r(682);const g=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)},p=e=>{let{className:t="",children:r,isBgPrimary:n=!1,isCentered:s=!1,isVerticallyCentered:l=!1,isContained:i=!1,isPadded:d=!1,isFadeIn:c=!0}=e;const u=i?g:a.Fragment;return(0,a.createElement)(h.Z,{type:c&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(m,{className:o()("nfd-onboarding-layout__common",t,{"is-bg-primary":n},{"is-centered":s},{"is-vertically-centered":l},{"is-padded":d})},(0,a.createElement)(u,null,r)))}},7004:(e,t,r)=>{r.d(t,{L:()=>d,Y:()=>l});var a=r(9307),n=r(5791),o=r(4316),s=r(950);const l=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(s.Z,null))};var i=r(682);const d=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)(i.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},950:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(9307),n=r(9685),o=r(9818),s=r(5736);const l=e=>{let{question:t=(0,s.__)("Need Help?","wp-module-onboarding"),urlLabel:r=(0,s.__)("Hire our Experts","wp-module-onboarding")}=e;const l=(0,o.select)(n.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:l,target:"_blank"},r))}},1340:(e,t,r)=>{r.d(t,{U:()=>h,g:()=>w});var a=r(9307),n=r(9818),o=r(4333),s=r(5736),l=r(7004),i=r(9685),d=r(7625),c=r(2200),u=r(4401);var m=r(1589);const h=e=>{let{children:t,navigationStateCallback:r=!1}=e;const h=(0,o.useViewportMatch)("medium"),{storedThemeStatus:g,brandName:p}=(0,n.useSelect)((e=>({storedThemeStatus:e(i.h).getThemeStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:b,setIsDrawerOpened:_,setIsDrawerSuppressed:v,setIsHeaderNavigationEnabled:f}=(0,n.useDispatch)(i.h),E=async()=>{const e=await(0,d.YL)(c.DY);return null!=e&&e.error?c.vv:e.body.status},y=()=>{switch(g){case c.Rq:case c.GV:return(()=>{if("function"==typeof r)return r();h&&_(!0),v(!1),f(!0)})();default:_(!1),v(!0),f(!1)}};(0,a.useEffect)((()=>{y(),g===c.a0&&(async()=>{const e=await E();switch(e){case c.Zh:setTimeout((async()=>{if(await E()!==c.GV)return b(c.vv);window.location.reload()}),c.YU);break;case c.GV:window.location.reload();break;default:b(e)}})()}),[g]);const S=async()=>(b(c.Zh),(await(0,d.N9)(c.DY,!0,!1)).error?b(c.Rq):window.location.reload());return(0,a.createElement)(a.Fragment,null,(()=>{switch(g){case c.vv:return(0,a.createElement)(m.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,s.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,s.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:S,modalExitButtonText:(0,s.__)("Exit to WordPress","wp-module-onboarding")});case c.Rq:return(0,a.createElement)(u.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case c.GV:return t;default:return(0,a.createElement)(l.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())};var g=r(3421),p=r(1392);const w=e=>{let{children:t,navigationStateCallback:r=!1}=e;const d=(0,o.useViewportMatch)("medium"),[m,h]=(0,a.useState)(c.Sr),{storedPluginsStatus:w,brandName:b}=(0,n.useSelect)((e=>({storedPluginsStatus:e(i.h).getPluginsStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),_=(e=>({loader:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updatePluginsStatus:v,setIsDrawerOpened:f,setIsDrawerSuppressed:E,setIsHeaderNavigationEnabled:y}=(0,n.useDispatch)(i.h),S=async()=>{const e=await(0,g.qC)(c.Gv);return null!=e&&e.error?c.sG:e.body.status},N=e=>{switch(e){case c.sG:case c.ye:return(()=>{if("function"==typeof r)return r();d&&f(!0),E(!1),y(!0)})();default:f(!1),E(!0),y(!1)}};(0,a.useEffect)((()=>{N(m)}),[m]);return(0,a.useEffect)((()=>{h(w[c.Gv]),w[c.Gv]===c.Ck&&(async e=>{const t=await S();switch(t){case c.Sr:setTimeout((async()=>{if(await S()!==c.ye)return w[c.Gv]=c.sG,v(w),h(c.sG);window.location.reload()}),c.sr);break;case c.ye:window.location.reload();break;default:e[c.Gv]=t,h(t),v(e)}})(w)}),[w]),(0,a.createElement)(a.Fragment,null,(()=>{switch(m){case c.sG:return(0,a.createElement)(u.V,{title:_.errorState.title,subtitle:_.errorState.subtitle,error:_.errorState.error});case c.ye:return t;default:return(0,a.createElement)(l.Y,{title:_.loader.title,subtitle:_.loader.subtitle})}})())}},9608:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(9307),n=r(6974),o=r(9818),s=r(6138),l=r(9685),i=r(5791),d=r(1340),c=r(6332),u=r(2200);const m=()=>{const e=(0,n.TH)(),[t,r]=(0,a.useState)(),{currentData:m,currentStep:h,themeStatus:g}=(0,o.useSelect)((t=>({currentData:t(l.h).getCurrentOnboardingData(),currentStep:t(l.h).getStepFromPath(e.pathname),themeStatus:t(l.h).getThemeStatus()})),[]),{setDrawerActiveView:p,setSidebarActiveView:w,updateThemeStatus:b}=(0,o.useDispatch)(l.h);return(0,a.useEffect)((()=>{w(u.Jq),p(u.qR)}),[]),(0,a.useEffect)((()=>{u.GV===g&&(async()=>{const e=await(0,s.C)(h.patternId,!0);if(null!=e&&e.error)return b(u.a0);r(null==e?void 0:e.body)})()}),[g]),(0,a.createElement)(d.U,null,(0,a.createElement)(c.V3,null,(0,a.createElement)(i.Z,{className:"theme-colors-preview"},(0,a.createElement)("div",{className:"theme-colors-preview__title-bar"},(0,a.createElement)("div",{className:"theme-colors-preview__title-bar__browser"},(0,a.createElement)("span",{className:"theme-colors-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-colors-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-colors-preview__title-bar__browser__dot"}))),!t&&(0,a.createElement)(c.i5,{blockGrammer:"",styling:"large",viewportWidth:1300}),t&&(0,a.createElement)(c.i5,{blockGrammer:t,styling:"large",viewportWidth:1300}))))}}}]);