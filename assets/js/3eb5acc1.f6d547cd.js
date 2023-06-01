"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[6092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Domain Driven Design",c={unversionedId:"software-architecture/architecture-patterns/domain-driven-design",id:"software-architecture/architecture-patterns/domain-driven-design",title:"Domain Driven Design",description:"Taxonomies",source:"@site/docs/software-architecture/architecture-patterns/domain-driven-design.md",sourceDirName:"software-architecture/architecture-patterns",slug:"/software-architecture/architecture-patterns/domain-driven-design",permalink:"/software-architecture/docs/software-architecture/architecture-patterns/domain-driven-design",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/architecture-patterns/domain-driven-design.md",tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Architecture Patterns",permalink:"/software-architecture/docs/category/architecture-patterns"},next:{title:"Event Driven Architecture",permalink:"/software-architecture/docs/software-architecture/architecture-patterns/event-driven-architecture"}},s={},l=[{value:"Taxonomies",id:"taxonomies",level:2},{value:"Aggregate",id:"aggregate",level:3},{value:"Bounded Context",id:"bounded-context",level:3},{value:"Domain Events",id:"domain-events",level:3},{value:"Webinars",id:"webinars",level:2},{value:"Articles!",id:"articles",level:2},{value:"Books!",id:"books",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"domain-driven-design"},"Domain Driven Design"),(0,a.kt)("h2",{id:"taxonomies"},"Taxonomies"),(0,a.kt)("h3",{id:"aggregate"},"Aggregate"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An aggregate is a domain object that encapsulates the business rules (invariants) and provide the appropriate interfaces to the outside world\nfor interacting with it for performing business operation. As an example, Order aggregates would have the required logic for accepting and rejecting the orders. ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An aggregate in one domain can be a simple object in another domain. The customer aggregate in onboarding domain is just an entity in Order booking system for which order is going to be placed.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As a general principle, a microservice should be no smaller than an aggregate, and no larger than a bounded context. ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Domain objects should contain the business logic that are intrinsic to them, but they should not contain any other infrastructure logic and shouldn\u2019t violate Single Responsibility Principle. ",(0,a.kt)("strong",{parentName:"p"},"Source")," - ",(0,a.kt)("a",{parentName:"p",href:"https://dzone.com/articles/anaemic-vs-rich-domain-objects-finding-the-balance"},"Anemic vs Rich Domain Model"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The change in aggregate state usually leads to a Domain Event that other domains can consume for performing the meaningful action.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As a rule of thumb, a business transactions should not cross aggregate boundaries.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An aggregate is different from value objects. The aggregate has thir own life cycle and states while value objects doesn't. A order might have the contact number and this content number could be differnet for different order and will not impact the order status.")),(0,a.kt)("h3",{id:"bounded-context"},"Bounded Context"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A business domain has well definied boundry and this boundry defines the business functions of the domain. This boundry is what is known as Bounded Context. All the domain specific langauge (taxonomy), rules, behaviour etc. are always consistent and well-known without any ambiguity inside the bounded context."),(0,a.kt)("p",{parentName:"blockquote"},"Useful Refrences : ",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/BoundedContext.html"},"Bounded Context"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.infoq.com/articles/ddd-contextmapping/"},"Context Mapping")),(0,a.kt)("h3",{id:"domain-events"},"Domain Events"),(0,a.kt)("h2",{id:"webinars"},"Webinars"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/z8qhToMtYRc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"articles"},"Articles!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis"},"Microsoft - Domain Analysis")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/microservices/model/tactical-ddd"},"Microsfot - Tactical TDD")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/nick-tune-tech-strategy-blog/modelling-bounded-contexts-with-the-bounded-context-design-canvas-a-workshop-recipe-1f123e592ab"},"Nick Tune - Mddelling the bounded context..")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/raa-labs/part-1-domain-driven-design-like-a-pro-f9e78d081f10"},"Domain Driven Design like a pro")),(0,a.kt)("h2",{id:"books"},"Books!"),(0,a.kt)("iframe",{type:"text/html",sandbox:"allow-scripts allow-same-origin allow-popups",width:"250",height:"350",frameborder:"5",allowfullscreen:!0,src:"https://read.amazon.com/kp/card?asin=B00794TAUG&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_18WQ5301C7RWM1XZW6FQ"}),(0,a.kt)("iframe",{type:"text/html",sandbox:"allow-scripts allow-same-origin allow-popups",width:"250",height:"350",frameborder:"5",allowfullscreen:!0,src:"https://read.amazon.com/kp/card?asin=B00BCLEBN8&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_NZ8JM12CYJA25JEPTCMG"}))}p.isMDXComponent=!0}}]);