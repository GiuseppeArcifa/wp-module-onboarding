"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[552],{5791:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(9307),r=(t(5609),t(4184)),s=t.n(r),i=t(5158),o=t(6974),d=t(2200),l=t(6989),c=t.n(l),u=t(4704),m=e=>{let{className:n="nfd-onboarding-layout__base",children:t}=e;const r=(0,o.TH)(),l=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==l||l.focus({preventScroll:!0}),function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,i.speak)(n,"assertive")}(r,"Override"),new class{constructor(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=n}send(){c()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${d.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",n)},t)};const f=e=>{let{children:n}=e;return(0,a.createElement)("section",{className:"is-contained"},n)};var g=e=>{let{className:n="",children:t,isBgPrimary:r=!1,isCentered:i=!1,isVerticallyCentered:o=!1,isContained:d=!1,isPadded:l=!1,isFadeIn:c=!0}=e;const u=d?f:a.Fragment;return(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",n,{"is-layout-fade-in":c},{"is-bg-primary":r},{"is-centered":i},{"is-vertically-centered":o},{"is-padded":l})},(0,a.createElement)(u,null,t))}},2552:function(e,n,t){t.r(n);var a=t(9307),r=t(5791);n.default=()=>(0,a.createElement)(r.Z,{isCentered:!0},"StepBase")}}]);