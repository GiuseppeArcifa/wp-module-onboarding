"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[705],{6999:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(1609),o=n(6942),i=n.n(o),r=n(148),s=n(7143),l=n(6427),d=n(7677),c=n(6655),u=n(7675);const g=({text:e,className:t,callback:n=null,disabled:o=!1,showChevronRight:g=!0})=>{const _=(0,r.Zp)(),{nextStep:m}=(0,s.useSelect)((e=>({nextStep:e(u.M).getNextStep()})));return(0,a.createElement)(l.Button,{className:i()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":o},t),onClick:()=>{o||(n&&"function"==typeof n&&n(),m&&_(m.path))}},(0,a.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},e),g&&(0,a.createElement)(d.A,{className:"nfd-onboarding-button--site-gen-next--icon",icon:c.A}))}},513:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(1609),o=n(8468),i=n(7673);const r=(0,o.memo)((({title:e})=>(0,a.createElement)("div",{className:"ai-heading"},(0,a.createElement)(i.A,{height:"40px"}),(0,a.createElement)("div",{className:"ai-heading--title"},e))))},7673:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(1609),o=n(8468);const i=({height:e="80px"})=>{const t={"--wnd-ai-logo-size":e,height:`var(--wnd-ai-logo-size, ${e})`};return(0,o.useEffect)((()=>{document.querySelectorAll("[data-wnd-ai-logo]").forEach((function(e){let t=!1,n=null;const a=()=>{t?document.body.classList.add("wnd-ai-logo-keydown"):document.body.classList.remove("wnd-ai-logo-keydown"),n=null};e.addEventListener("keydown",(function(){t||(t=!0,n||(n=window.requestAnimationFrame(a)))})),e.addEventListener("keyup",(function(){t=!1,n||(n=window.requestAnimationFrame(a))}))}))}),[]),(0,a.createElement)("span",{className:"wnd-ai-logo",style:t},(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--bg"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--1"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--2"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--3"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--4"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--5"}),(0,a.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--6"}),(0,a.createElement)("span",{className:"wnd-ai-logo__spinner"}))}},8844:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(1609),o=n(8468),i=n(7143),r=n(7675),s=n(1056),l=n(2202),d=n(8744),c=n(9491),u=n(7723);var g=n(6427),_=n(3988),m=n(7673),p=n(2940),b=n(7835),h=n(148),w=n(8969);const f=()=>{const e=(0,h.Zp)(),{setIsHeaderEnabled:t,setSidebarActiveView:n,setHeaderActiveView:s,setDrawerActiveView:l,setHideFooterNav:f,setIsHeaderNavigationEnabled:E,updateAllSteps:N,updateTopSteps:v,updateRoutes:x,updateDesignRoutes:S,updateInitialize:A,setCurrentOnboardingData:y,updateSiteGenErrorStatus:C}=(0,i.useDispatch)(r.M);(0,o.useEffect)((()=>{f(!0),t(!0),n(!1),s(w.Ix),E(!0),l(!1)}));const{brandConfig:k,currentData:I}=(0,i.useSelect)((e=>({brandConfig:e(r.M).getNewfoldBrandConfig(),currentData:e(r.M).getCurrentOnboardingData()}))),D=(0,c.useViewportMatch)("small"),H={heading:(0,u.__)("Sorry, we're having trouble communicating with our AI service.","wp-module-onboarding"),subHeading:(0,u.__)("Do you keep getting this error?","wp-module-onboarding"),message:(0,u.__)("If you continue to get this error, you may either continue creating your site without using our AI assistant, or you can ","wp-module-onboarding"),buttonText:(0,u.__)("Try again","wp-module-onboarding"),buttonSkip:(0,u.__)("Continue without AI","wp-module-onboarding"),buttonExit:(0,u.__)("exit to WordPress","wp-module-onboarding")},F=window.nfdOnboarding?.oldFlow?window.nfdOnboarding.oldFlow:d.rA,T=()=>{C(!1)};return(0,a.createElement)(_.A,{className:"nfd-onboarding-step--site-gen__error"},(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container"},(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__orb"},(0,a.createElement)(m.A,{height:"100px"})),(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__heading"},(0,a.createElement)("p",{className:"nfd-onboarding-step--site-gen__error__container__heading__text"},H.heading)),(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading"},(0,a.createElement)("p",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading__text"},H.subHeading),(0,a.createElement)("p",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading__message"},H.message,(0,a.createElement)("a",{className:"nfd-onboarding-step--site-gen__error__container__sub-heading__exit",href:w.R0},H.buttonExit))),(0,a.createElement)("div",{className:"nfd-onboarding-step--site-gen__error__container__buttons"},(0,a.createElement)(g.Button,{className:"nfd-onboarding-step--site-gen__error__container__buttons__skip",onClick:()=>{(t=>{if(!(0,p.nC)(k,t))return!1;const n=window.nfdOnboarding.currentFlow,a=(0,b.Sg)(t)();N(a.steps),v(a?.topSteps),x(a.routes),S(a?.designRoutes),d.d0!==n&&(window.nfdOnboarding.oldFlow=n),window.nfdOnboarding.currentFlow=t,I.activeFlow=t,I.continueWithoutAi=!0,y(I),C(!1),d.d0!==t&&A(!0),e(a.steps[1].path)})(F)}},H.buttonSkip),D?(0,a.createElement)(g.Button,{className:"nfd-onboarding-step--site-gen__error__container__buttons__retry",onClick:()=>{T()}},(0,a.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},H.buttonText)):(0,a.createElement)(g.Fill,{name:`${w.Sr}/${w.gb}`},(0,a.createElement)(g.Button,{className:"nfd-onboarding-step--site-gen__error__container__buttons__retry",onClick:()=>{T()}},(0,a.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},H.buttonText))))))},E=({children:e})=>{const{siteGenErrorStatus:t}=(0,i.useSelect)((e=>({siteGenErrorStatus:e(r.M).getSiteGenErrorStatus()})));return(0,o.useEffect)((()=>{!0===t&&(0,s.v)(new s.iC(l.cW,void 0,{source:d.d0}))}),[t]),(0,a.createElement)(o.Fragment,null,t?(0,a.createElement)(f,null):e)}},8705:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(1609),o=n(9491),i=n(7143),r=n(8468),s=n(7723);var l=n(431),d=n(8969),c=n(7675),u=n(513),g=n(3988),_=n(6942),m=n.n(_);const p=(0,r.memo)((({hint:e,height:t,children:n,placeholder:o,customerInput:i,setIsValidInput:l,setCustomerInput:d,setCustomerInputStrength:c,customChildren:u=!1})=>{const g=(0,r.useRef)(null),[_,p]=(0,r.useState)(0),[b,h]=(0,r.useState)("nfd-sg-input-box__field");(0,r.useEffect)((()=>{g.current.style.height=t;const e=g.current.scrollHeight;g.current.style.height=e+"px";const n=w(i?.trim());p(n),c(n),l(n>=2)}),[i]);const w=e=>{const t=e?.length;let n=0;return t>200?n=3:t>150?n=2:t>100&&(n=1),n},f=e=>{if(e<=_)return"nfd-sg-input-box__info-icon--selected"};return(0,a.createElement)("div",{className:"nfd-sg-input"},(0,a.createElement)("label",{htmlFor:b},(0,a.createElement)("div",{className:"nfd-sg-input-box"},(0,a.createElement)("textarea",{"data-wnd-ai-logo":!0,type:"text",className:b,ref:g,style:{height:"47px"},placeholder:o,value:i,onChange:e=>(e=>{e.preventDefault(),d(e.target.value),h("nfd-sg-input-box__field")})(e)})),(0,a.createElement)("div",{className:"nfd-sg-input-box_bottom"},i?(0,a.createElement)("div",{className:"nfd-sg-input-box__info"},(0,a.createElement)("div",{className:"nfd-sg-input-box__info-text"},(0,s.__)("Detail","wp-module-onboarding")),(()=>{const e=[];for(let t=1;t<=3;t++)e.push((0,a.createElement)("div",{className:m()("nfd-sg-input-box__info-icon",f(t))}));return e})()):(0,a.createElement)("p",{className:"nfd-sg-input-box__hint"},e),u&&n)))}));var b=n(6999),h=n(8844),w=n(1056),f=n(2202),E=n(8744);const N=()=>{const e={heading:(0,s.__)("Tell me some details about the site you want created?","wp-module-onboarding"),inputPlaceholder:(0,s.__)("I want a site for my company that sells…","wp-module-onboarding"),inputHint:(0,s.__)("The more detail the better","wp-module-onboarding"),buttonText:(0,s.__)("Next","wp-module-onboarding"),walkThroughText:(0,s.__)("Not sure what to say? We can walk you through it.","wp-module-onboarding"),walkThroughlink:(0,s.__)("click here","wp-module-onboarding")},t=(0,o.useViewportMatch)("small"),[n,_]=(0,r.useState)(),[m,N]=(0,r.useState)(0),[v,x]=(0,r.useState)(!1),{currentData:S}=(0,i.useSelect)((e=>({currentData:e(c.M).getCurrentOnboardingData()}))),{setIsFooterNavAllowed:A,setIsHeaderEnabled:y,setSidebarActiveView:C,setHeaderActiveView:k,setDrawerActiveView:I,setHideFooterNav:D,setCurrentOnboardingData:H,setIsHeaderNavigationEnabled:F}=(0,i.useDispatch)(c.M);return(0,r.useEffect)((()=>{if(D(!1),y(!0),C(!1),k(d.Ix),F(!0),I(!1),""!==S.sitegen.siteDetails?.prompt)return x(!0),A(!0),_(S.sitegen.siteDetails.prompt);A(!1)}),[]),(0,r.useEffect)((()=>{void 0!==n&&""!==n&&n!==S.sitegen.siteDetails.prompt&&(S.sitegen.siteDetails.prompt=n?.trim(),S.sitegen.siteDetails.mode="simple",S.sitegen.skipCache=!0,S.sitegen.sitemapPagesGenerated=!1,S.sitegen.homepages.active={},S.sitegen.homepages.data={},H(S)),A(v)}),[n]),(0,a.createElement)(h.A,null,(0,a.createElement)(g.A,{isCentered:!0},(0,a.createElement)(l.A,{type:"fade-in"},(0,a.createElement)("div",{className:"nfd-sg-site-details"},(0,a.createElement)(u.A,{title:e.heading}),(0,a.createElement)(p,{placeholder:e.inputPlaceholder,hint:e.inputHint,height:"40px",customerInput:n,setIsValidInput:x,setCustomerInput:_,setCustomerInputStrength:N,customChildren:!0},t&&(0,a.createElement)("div",{className:"nfd-sg-site-details-endrow"},(0,a.createElement)(b.A,{className:"nfd-sg-site-details--next-btn",callback:()=>{(()=>{let e=!1;switch(m){case 2:e="MEDIUM";break;case 3:e="HIGH"}e&&(0,w.v)(new w.iC(f.WN,n,{strength:e,source:E.d0}))})()},text:e.buttonText,disabled:!v})))))))}}}]);