"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[9743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),f=i,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||n;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={},l="Availability",o={unversionedId:"software-architecture/quality-attributes/availability",id:"software-architecture/quality-attributes/availability",title:"Availability",description:"A system is said to be available if it continues to serve its customer as expected.",source:"@site/docs/software-architecture/quality-attributes/availability.md",sourceDirName:"software-architecture/quality-attributes",slug:"/software-architecture/quality-attributes/availability",permalink:"/software-architecture/docs/software-architecture/quality-attributes/availability",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/quality-attributes/availability.md",tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Quality Attributes",permalink:"/software-architecture/docs/category/quality-attributes"},next:{title:"Configurability",permalink:"/software-architecture/docs/software-architecture/quality-attributes/configurability"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"availability"},"Availability"),(0,i.kt)("p",null,"A system is said to be available if it continues to serve its customer as expected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No Single point of failures"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Murphy's law : If anything can go wrong, it will go wrong so plan for failures and have proper fallback plan."),(0,i.kt)("li",{parentName:"ul"},"Plan for Multiple Instances, Multiple Availability Zones, Multiple Data Centers"),(0,i.kt)("li",{parentName:"ul"},"Active-Active vs Active-Passive Architecture"),(0,i.kt)("li",{parentName:"ul"},"Disaster Recovery Plan"),(0,i.kt)("li",{parentName:"ul"},"Capacity Planning of the critial resources",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In case of high traffic, system can become unresponsive leading to failures and availability issues."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stateless Systems"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Move the traffic from Instance A to Instance B in case of failures without any customer friction."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CAP Theorem"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In case of distributed systems (partitoons), pick between availability vs consistency"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fail Open vs Fail Close"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In case of failure, allow the customer to continue the business operations (e.g. allow customer to book order if inventory check fails instead of failing the order placement)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Event Driven Architecture"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The system will process the events as and when they are available as long as there is no message loss."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deployment Strategies - Avoid the bugs in new release that could impact the overall availability of the system."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Canary Release (one box testing)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Release is available to only few customers."))),(0,i.kt)("li",{parentName:"ul"},"Blue / Black deployment",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Traffic switchover between pool of services with new release artifact.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Traffic is redirected back to old in case of issues."))),(0,i.kt)("li",{parentName:"ul"},"Ramp strategy"),(0,i.kt)("li",{parentName:"ul"},"Feature toggling")))))))}m.isMDXComponent=!0}}]);