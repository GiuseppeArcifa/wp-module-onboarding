"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[181],{4401:function(e,t,r){r.d(t,{V:function(){return s}});var n=r(9307),a=r(5791),o=r(4316),l=r(950),s=e=>{let{title:t,subtitle:r,error:s}=e;return(0,n.createElement)(a.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,n.createElement)(o.Z,{title:t,subtitle:r}),(0,n.createElement)("div",{className:"step-error-state__logo"}),(0,n.createElement)("h3",{className:"step-error-state__error"},s),(0,n.createElement)(l.Z,null))}},4316:function(e,t,r){var n=r(9307),a=r(5736);t.Z=e=>{let{title:t,subtitle:r}=e;return(0,n.createElement)("div",{className:"nfd-main-heading"},(0,n.createElement)("h2",{className:"nfd-main-heading__title"},(0,a.__)(t,"wp-module-onboarding")),(0,n.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,a.__)(r,"wp-module-onboarding")))}},5791:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(9307),a=(r(5609),r(4184)),o=r.n(a),l=r(5158),s=r(6974),i=r(2200),u=r(6989),d=r.n(u),c=r(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:r}=e;const a=(0,s.TH)(),u=document.querySelector(".nfd-onboard-content");return(0,n.useEffect)((()=>{null==u||u.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,l.speak)(t,"assertive")}(a,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,c.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:a.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=a.pathname}),[a.pathname]),(0,n.createElement)("div",{className:o()("nfd-onboarding-layout",t)},r)};const g=e=>{let{children:t}=e;return(0,n.createElement)("section",{className:"is-contained"},t)};var h=e=>{let{className:t="",children:r,isBgPrimary:a=!1,isCentered:l=!1,isVerticallyCentered:s=!1,isContained:i=!1,isPadded:u=!1,isFadeIn:d=!0}=e;const c=i?g:n.Fragment;return(0,n.createElement)(m,{className:o()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":d},{"is-bg-primary":a},{"is-centered":l},{"is-vertically-centered":s},{"is-padded":u})},(0,n.createElement)(c,null,r))}},7004:function(e,t,r){r.d(t,{L:function(){return i},Y:function(){return s}});var n=r(9307),a=r(5791),o=r(4316),l=r(950),s=e=>{let{title:t,subtitle:r}=e;return(0,n.createElement)(a.Z,{className:"step-loader",isVerticallyCentered:!0},(0,n.createElement)(o.Z,{title:t,subtitle:r}),(0,n.createElement)("div",{className:"step-loader__logo-container"},(0,n.createElement)("div",{className:"step-loader__logo"})),(0,n.createElement)(l.Z,null))},i=()=>(0,n.createElement)("div",{className:"image-upload-loader--loading-box"},(0,n.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,r){var n=r(9307),a=r(9685),o=r(9818),l=r(5736);t.Z=e=>{let{question:t=(0,l.__)("Need Help?","wp-module-onboarding"),urlLabel:r=(0,l.__)("Hire our Experts","wp-module-onboarding")}=e;const s=(0,o.select)(a.h).getHireExpertsUrl();return(0,n.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,n.createElement)("a",{href:s,target:"_blank"},r))}},1340:function(e,t,r){r.d(t,{U:function(){return c},g:function(){return h}});var n=r(9307),a=r(9818),o=r(7004),l=r(9685),s=r(7625),i=r(2200),u=r(4401),d=r(5736),c=e=>{let{children:t}=e;const{storedThemeStatus:r,brandName:c}=(0,a.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),m=(e=>({loader:{title:(0,d.sprintf)(
/* translators: %s: Brand */
(0,d.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,d.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,d.sprintf)(
/* translators: %s: Brand */
(0,d.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,d.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,d.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(c),{updateThemeStatus:g}=(0,a.useDispatch)(l.h),h=async()=>{const e=await(0,s.YL)(i.DY);return null!=e&&e.error?i.vv:e.body.status};return(0,n.useEffect)((async()=>{if(r===i.a0){const e=await h();switch(e){case i.Zh:setTimeout((async()=>{if(await h()!==i.GV)return g(i.vv);window.location.reload()}),i.YU);break;case i.GV:window.location.reload();break;default:g(e)}}}),[r]),(0,n.createElement)(n.Fragment,null,(()=>{switch(r){case i.vv:return(0,n.createElement)(u.V,{title:m.errorState.title,subtitle:m.errorState.subtitle,error:m.errorState.error});case i.GV:return t;default:return(0,n.createElement)(o.Y,{title:m.loader.title,subtitle:m.loader.subtitle})}})())},m=r(3421),g=r(1392),h=e=>{let{children:t}=e;const[r,s]=(0,n.useState)(i.Sr),{storedPluginsStatus:c,brandName:h}=(0,a.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),b=(e=>({loader:{title:(0,d.sprintf)(
/* translators: 1: Brand 2: Site */
(0,d.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,d.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,d.sprintf)(
/* translators: 1: Brand 2: Site */
(0,d.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,d.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,d.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(h),{updatePluginsStatus:p}=(0,a.useDispatch)(l.h),f=async()=>{const e=await(0,m.qC)(i.Gv);return null!=e&&e.error?i.sG:e.body.status};return(0,n.useEffect)((async()=>{if(s(c[i.Gv]),c[i.Gv]===i.Ck){const e=await f();switch(e){case i.Sr:setTimeout((async()=>{if(await f()!==i.ye)return s(i.sG);window.location.reload()}),i.sr);break;case i.ye:window.location.reload();break;default:c[i.Gv]=e,s(e),p(c)}}}),[c]),(0,n.createElement)(n.Fragment,null,(()=>{switch(r){case i.sG:return(0,n.createElement)(u.V,{title:b.errorState.title,subtitle:b.errorState.subtitle,error:b.errorState.error});case i.ye:return t;default:return(0,n.createElement)(o.Y,{title:b.loader.title,subtitle:b.loader.subtitle})}})())}},4181:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(9307),a=r(9685),o=r(9818),l=r(6974),s=r(5736),i=r(1392),u=r(7533),d=r(7004),c=r(3421),m=r(4401),g=r(1340),h=()=>{const{setIsDrawerSuppressed:e,setIsHeaderNavigationEnabled:t,setSidebarActiveView:r}=(0,o.useDispatch)(a.h),h=(0,l.s0)(),[b,p]=(0,n.useState)(!1),{nextStep:f,brandName:w,currentData:_,pluginInstallHash:v}=(0,o.useSelect)((e=>({nextStep:e(a.h).getNextStep(),brandName:e(a.h).getNewfoldBrandName(),currentData:e(a.h).getCurrentOnboardingData(),pluginInstallHash:e(a.h).getPluginInstallHash()})),[]),y=(e=>({loader:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: site */
(0,s.__)("Hang tight, we’re building your %s %s","wp-module-onboarding"),e,(0,i.I)("site")),subtitle:(0,s.__)("We’re assembling your unique design and installing useful tools","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: site */
(0,s.__)("Hang tight, we’re building your %s %s","wp-module-onboarding"),e,(0,i.I)("site")),subtitle:(0,s.__)("We’re assembling your unique design and installing useful tools","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(w);async function S(){const e=await(0,u.BN)();return null==e||!e.error}async function E(){var e,t;if(Array.isArray(null==_||null===(e=_.data)||void 0===e?void 0:e.siteFeatures))return!0;const r=await(0,c.uc)(v,{plugins:null==_||null===(t=_.data)||void 0===t?void 0:t.siteFeatures});return null==r||!r.error}return(0,n.useEffect)((()=>{t(!1),e(!0),r(!1),(async()=>{await Promise.all([S(),E()]).then((e=>e.forEach((e=>{if(!e)return t(!0),p(!0)})))),h(f.path)})()}),[]),(0,n.createElement)(g.U,null,b?(0,n.createElement)(m.V,{title:y.errorState.title,subtitle:y.errorState.subtitle,error:y.errorState.error}):(0,n.createElement)(d.Y,{title:y.loader.title,subtitle:y.loader.subtitle}))}}}]);