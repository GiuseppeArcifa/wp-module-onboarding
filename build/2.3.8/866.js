"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[866],{90:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(1609),i=t(6942),a=t.n(i),s=t(8468),r=t(8969),l=t(9269);const d=({title:e,subtitle:n})=>{const t=(0,s.useContext)(l.D),i=t?.theme||!1;return(0,o.createElement)("div",{className:"nfd-onboarding-step__heading"},(0,o.createElement)("h2",{className:"nfd-onboarding-step__heading__title"},e),n&&(0,o.createElement)("div",{className:"nfd-onboarding-step__heading__subtitle"},n,(0,o.createElement)("div",{className:a()("nfd-onboarding-step__heading__icon",i===r.Vw?"nfd-onboarding-step__heading__icon--light":null)})))}},3866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var o=t(1609),i=t(8468),a=t(7143),s=t(7723);var r=t(8559),l=t(148),d=t(2940),g=t(6478),_=t(3731),p=t(9034),c=t(1056),u=t(8744),b=t(7675),m=t(2202),w=t(7673);const f=(0,i.memo)((({questionnaire:e,oldFlow:n,largeOption:t,smallOptions:i})=>{const s=(0,l.Zp)(),{brandConfig:r,hireProUrl:f,currentData:h,migrationUrl:E,canMigrateSite:S,allSteps:v}=(0,a.useSelect)((e=>({brandConfig:e(b.M).getNewfoldBrandConfig(),hireProUrl:e(b.M).getfullServiceCreativeTeamUrl(),currentData:e(b.M).getCurrentOnboardingData(),allSteps:e(b.M).getAllSteps(),canMigrateSite:e(b.M).canMigrateSite(),migrationUrl:e(b.M).getMigrationUrl()}))),{updateAllSteps:M,updateTopSteps:O,updateRoutes:N,updateDesignRoutes:A,updateInitialize:C,setCurrentOnboardingData:I}=(0,a.useDispatch)(b.M),k=e=>{if(!(0,d.nC)(r,e))return!1;const n=window.nfdOnboarding.currentFlow,t=(0,g.Sg)(e)();M(t.steps),O(t?.topSteps),N(t.routes),A(t?.designRoutes),u.d0!==n&&(window.nfdOnboarding.oldFlow=n),window.nfdOnboarding.currentFlow=e,h.activeFlow=e,h.continueWithoutAi=!1,I(h),u.d0!==e&&C(!0),s(t.steps[1].path)},x=e=>{let t=!1;switch(e){case"sitebuild":t="DIY",k(n);break;case"sitegen":t="AI",k(u.d0);break;case"hirepro":t="PRO",window.open(f,"_blank");break;case"migration":t="MIGRATION",(()=>{if(S){const e=v.some((e=>e.path===_.O.path));if(!e){const e=(0,d.gK)(v,p.O);M(e.allSteps)}(0,c.v)(new c.iC(m.Qh,"MIGRATE")),s(_.O.path)}else window.open(E,"_blank")})()}t&&(0,c.v)(new c.iC(m.Qh,t))};return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("p",{className:"nfd-onboarding-sitegen-options__questionnaire"},e),(0,o.createElement)("div",{className:"nfd-onboarding-sitegen-options__option nfd-onboarding-sitegen-options__option--large",role:"button",tabIndex:0,onClick:()=>{x(t.flow)},onKeyDown:()=>{x(t.flow)},"data-flow":t.flow},(0,o.createElement)("h3",{className:"nfd-onboarding-sitegen-options__option__heading__title nfd-onboarding-sitegen-options__option__heading__title--large"},(0,o.createElement)(w.A,{height:"80px"}),t.span&&(0,o.createElement)("span",{className:"nfd-onboarding-sitegen-options__option__span"},t.span),t.title),(0,o.createElement)("p",{className:"nfd-onboarding-sitegen-options__option__heading__subtitle nfd-onboarding-sitegen-options__option__heading__subtitle--large"},t.text1),(0,o.createElement)("p",{className:"nfd-onboarding-sitegen-options__option__heading__subtitle nfd-onboarding-sitegen-options__option__heading__subtitle--large"},t.text2)),(0,o.createElement)("div",{className:"nfd-onboarding-sitegen-options__container"},i.map(((e,n)=>e.show?(0,o.createElement)("div",{className:"nfd-onboarding-sitegen-options__option",key:n,role:"button",tabIndex:0,onClick:()=>{x(e.flow)},onKeyDown:()=>{x(e.flow)},"data-flow":e.flow},(0,o.createElement)("h3",{className:"nfd-onboarding-sitegen-options__option__heading__title"},e.span&&(0,o.createElement)("span",{className:"nfd-onboarding-sitegen-options__option__span"},e.span),e.title),(0,o.createElement)("p",{className:"nfd-onboarding-sitegen-options__option__heading__subtitle"},e.subtitle)):(0,o.createElement)(o.Fragment,null)))))}));var h=t(3988),E=t(90),S=t(8969);const v=()=>{const{migrationUrl:e,canMigrateSite:n,pluginInstallHash:t}=(0,a.useSelect)((e=>({migrationUrl:e(b.M).getMigrationUrl(),canMigrateSite:e(b.M).canMigrateSite(),currentStep:e(b.M).getCurrentStep(),routes:e(b.M).getRoutes(),pluginInstallHash:e(b.M).getPluginInstallHash()}))),{setIsHeaderEnabled:l,setSidebarActiveView:d,setHeaderActiveView:g,setDrawerActiveView:_,setIsHeaderNavigationEnabled:p,setFooterActiveView:w,setHideFooterNav:v}=(0,a.useDispatch)(b.M);(0,i.useEffect)((()=>{v(!0),l(!1),d(!1),p(!1),g(S.Ix),_(!1),w(S.Sr),(0,r.Ts)(t)}));const M=window.nfdOnboarding?.oldFlow?window.nfdOnboarding.oldFlow:u.rA,O=()=>{(0,c.SV)(new c.iC(m.Qh,"TUTORIAL")),window.location.replace(S.R0)},N=((e,n)=>({heading:(0,s.__)("Welcome to WordPress","wp-module-onboarding"),subheading:(0,s.__)("powered by ","wp-module-onboarding"),questionnaire:(0,s.__)("Where would you like to start?","wp-module-onboarding"),largerOption:{title:(0,s.__)("Site Creator","wp-module-onboarding"),text1:(0,s.__)("Get a site created in seconds!","wp-module-onboarding"),text2:(0,s.__)("Content & design generated by AI, customizable by you.","wp-module-onboarding"),span:(0,s.__)("AI","wp-module-onboarding"),flow:"sitegen"},smallerOptions:[{title:(0,s.__)("Guided Website Setup","wp-module-onboarding"),subtitle:(0,s.__)("Follow a step-by-step guide.","wp-module-onboarding"),flow:"sitebuild",show:!0},{title:(0,s.__)("Import a WordPress Site","wp-module-onboarding"),subtitle:(0,s.__)("Use our free, automated import tool!","wp-module-onboarding"),flow:"migration",show:e||n}],importtext:(0,s.__)("Already have a WordPress site you want to import?","wp-module-onboarding"),importlink:(0,s.__)("https://my.bluehost.com/cgi/services/migration","wp-module-onboarding"),exitToWordPress:(0,s.__)("I’m following a tutorial, take me to the WP Admin Dashboard","wp-module-onboarding")}))(n,e);return(0,o.createElement)(h.A,{isCentered:!0,className:"nfd-onboarding-step--site-gen__fork"},(0,o.createElement)(E.A,{title:N.heading,subtitle:N.subheading}),(0,o.createElement)(f,{questionnaire:N.questionnaire,oldFlow:M,largeOption:N.largerOption,smallOptions:N.smallerOptions}),(0,o.createElement)("span",{role:"button",tabIndex:0,className:"nfd-onboarding-step--site-gen__fork__exit",onClick:()=>O(),onKeyDown:()=>O()},N.exitToWordPress))}}}]);