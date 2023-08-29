"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[360],{4401:function(e,t,a){a.d(t,{V:function(){return i}});var n=a(9307),r=a(5634),o=a(4316),s=a(950),i=({title:e,subtitle:t,error:a})=>(0,n.createElement)(r.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,n.createElement)(o.Z,{title:e,subtitle:t}),(0,n.createElement)("div",{className:"step-error-state__logo"}),(0,n.createElement)("h3",{className:"step-error-state__error"},a),(0,n.createElement)(s.Z,null))},9291:function(e,t,a){a.d(t,{L:function(){return s},Y:function(){return n.Z}});var n=a(35),r=a(9307),o=a(682),s=()=>(0,r.createElement)("div",{className:"image-upload-loader--loading-box"},(0,r.createElement)(o.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},3124:function(e,t,a){a.d(t,{U:function(){return N}});var n=a(9307),r=a(9818),o=a(4333),s=a(5736),i=a(9291),l=a(6831),u=a(7625),c=a(2200),d=a(4401),m=a(9250),g=a(4310),h=a(5609),p=a(4184),w=a.n(p),b=a(7533),f=a(8395),_=a(7207),E=a(8297),y=a(6342),v=a(3421);var S=({buttonText:e=(0,s.__)("Exit to WordPress","wp-module-onboarding"),showButtonIcon:t=!0,showButton:a=!0,buttonVariant:o="secondary",buttonClassName:i=!1,isModalOpen:u=!1,modalTitle:d=(0,s.__)("Exit without finishing?","wp-module-onboarding"),modalText:p=!1,modalPrimaryCloseButtonText:S=(0,s.__)("Continue","wp-module-onboarding"),modalOnClose:N=!1,modalExitButtonText:C=(0,s.__)("Exit","wp-module-onboarding")})=>{const[D,k]=(0,n.useState)(u),T=()=>{"function"==typeof N&&N(),k(!1)},x=(0,m.TH)(),{currentData:P,brandName:B,socialData:V,currentStep:O}=(0,r.useSelect)((e=>({currentData:e(l.h).getCurrentOnboardingData(),brandName:e(l.h).getNewfoldBrandName(),socialData:e(l.h).getOnboardingSocialData(),currentStep:e(l.h).getCurrentStep()})),[x.pathname]),{setOnboardingSocialData:Z}=(0,r.useDispatch)(l.h);async function Y(e){if(P){if(P.hasExited=(new Date).getTime(),e?.includes("basic-info")){const e=await async function(){const e=await(0,f.Gw)(),t=await(0,f.I2)(V);return null!==t?.error?e?.body:t?.body}();e&&Z(e)}(0,b.kB)(P)}(0,v.jd)(),(0,E.tH)(new E.Z_(y._C,O.title)),await _.v.dispatchEvents(y.En);const t="ecommerce"===window.nfdOnboarding.currentFlow?c.br:c.hF;window.location.replace(t)}return p||(p=(0,s.sprintf)(/* translators: %s: Brand */
(0,s.__)("You can restart onboarding from your %s Settings page.","wp-module-onboarding"),B)),(0,n.createElement)(n.Fragment,null,a&&(0,n.createElement)(h.Button,{icon:!!t&&g.Z,variant:o,onClick:()=>k(!0),className:w()("nfd-onboarding-etw__trigger",i)},e),D&&(0,n.createElement)(h.Modal,{title:d,onRequestClose:()=>T()},(0,n.createElement)("p",null,p),(0,n.createElement)(h.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,n.createElement)(h.Button,{variant:"secondary",onClick:()=>T()},S),(0,n.createElement)(h.Button,{variant:"primary",onClick:()=>Y(x.pathname)},C))))},N=({children:e,navigationStateCallback:t=!1})=>{const a=(0,o.useViewportMatch)("medium"),{storedThemeStatus:m,brandName:g}=(0,r.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),h=(e=>({loader:{title:(0,s.sprintf)(/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(g),{updateThemeStatus:p,setIsDrawerOpened:w,setIsDrawerSuppressed:b,setIsHeaderNavigationEnabled:f}=(0,r.useDispatch)(l.h),_=()=>{switch(m){case c.Rq:case c.GV:return(()=>{if("function"==typeof t)return t();a&&w(!0),b(!1),f(!0)})();default:w(!1),b(!0),f(!1)}};(0,n.useEffect)((()=>{_(),m===c.a0&&(async()=>{const e=await(async()=>{const e=await(0,u.YL)(c.DY);return e?.error?c.vv:e.body.status})();switch(e){case c.Zh:(async()=>{(await(0,u.sN)(c.DY)).error?E():window.location.reload()})();break;case c.GV:window.location.reload();break;default:p(e)}})()}),[m]);const E=async()=>(p(c.Zh),(await(0,u.N9)(c.DY,!0,!1)).error?p(c.Rq):window.location.reload());return(0,n.createElement)(n.Fragment,null,(()=>{switch(m){case c.vv:return(0,n.createElement)(S,{showButton:!1,isModalOpen:!0,modalTitle:(0,s.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,s.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:E,modalExitButtonText:(0,s.__)("Exit to WordPress","wp-module-onboarding")});case c.Rq:return(0,n.createElement)(d.V,{title:h.errorState.title,subtitle:h.errorState.subtitle,error:h.errorState.error});case c.GV:return e;default:return(0,n.createElement)(i.Y,{title:h.loader.title,subtitle:h.loader.subtitle})}})())}},6361:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(9307),r=a(9818),o=a(9250),s=a(6831),i=a(5634),l=a(4316),u=a(6138),c=a(2200),d=a(3124),m=a(6332),g=a(1054),h=a(5736),p=()=>{const e=(0,o.TH)(),[t,a]=(0,n.useState)(),[p,w]=(0,n.useState)([]),{currentStep:b,currentData:f,themeStatus:_,themeVariations:E}=(0,r.useSelect)((t=>({currentStep:t(s.h).getStepFromPath(e.pathname),currentData:t(s.h).getCurrentOnboardingData(),themeStatus:t(s.h).getThemeStatus(),themeVariations:t(s.h).getStepPreviewData()})),[]),{setDrawerActiveView:y,setSidebarActiveView:v,updateThemeStatus:S,setCurrentOnboardingData:N}=(0,r.useDispatch)(s.h);(0,n.useEffect)((()=>{v(c.Jq),y(c.Yl)}),[]);const C=(e,t=!1)=>{w(e),f.data.sitePages.other=0!==e.length&&((e,t)=>!1!==t?t?.reduce(((t,a)=>e.includes(a.slug)?t.concat({slug:a.slug,title:a.title}):t),[]):void 0)(e,t),N(f)},D=(e,a)=>{!0!==e||p.includes(a)?!1===e&&C(p.filter((e=>e!==a)),t):C(p.concat(a),t)};(0,n.useEffect)((()=>{_===c.GV&&(async()=>{const e=await(0,u.C)(b.patternId);if(e?.error)return S(c.a0);if(e?.body){if(f.data.sitePages?.other)if(!1===f.data.sitePages.other)w([]);else if(0!==f.data.sitePages.other.length)w(f.data.sitePages.other.map((e=>e.slug)));else{const t=e.body.reduce(((e,t)=>t?.selected?e.concat(t.slug):e),[]);C(t,e.body)}a(e.body)}})()}),[_]);const k={heading:(0,h.__)("You have ideas, we have page templates","wp-module-onboarding"),subheading:(0,h.__)("Begin closer to the finish line than a blank canvas.","wp-module-onboarding")};return(0,n.createElement)(d.U,null,(0,n.createElement)(m.V3,null,(0,n.createElement)(i.Z,null,(0,n.createElement)("div",{className:"site-pages"},(0,n.createElement)(l.Z,{title:k.heading,subtitle:k.subheading}),(0,n.createElement)("div",{className:"site-pages__list"},(0,n.createElement)(g.Z,{className:"site-pages__list__item",count:E[b?.patternId]?.previewCount,watch:t,isWithCard:!0,callback:()=>p&&t?.map(((e,t)=>(0,n.createElement)(m.T9,{key:t,className:"site-pages__list__item",blockGrammer:e.content,viewportWidth:1200,styling:"custom",overlay:!0,title:e?.title,slug:e.slug,selected:p.includes(e.slug),onClick:D,description:e?.description}))),viewportWidth:1200}))))))}}}]);