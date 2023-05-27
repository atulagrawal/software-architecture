"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[2560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=l(r),p=n,m=u["".concat(c,".").concat(p)]||u[p]||g[p]||o;return r?a.createElement(m,i(i({ref:t},f),{},{components:r})):a.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={slug:"choosing-the-best-database-in-a-system-design-interview",title:"Choosing the Best Database in a System Design Interview",authors:{name:"Code Karle",title:"Choosing the Best Database in a System Design Interview",image_url:"https://yt3.ggpht.com/ytc/AGIKgqNru7fGDrA2jvj5KHU_ue-u0D90RVifRZ7P6UUR=s88-c-k-c0x00ffffff-no-rj"},tags:["Database","SQL","NoSQL"]},i=void 0,s={permalink:"/software-architecture/blog/choosing-the-best-database-in-a-system-design-interview",editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/blog/choosing-the-best-database-in-a-system-design-interview.md",source:"@site/blog/choosing-the-best-database-in-a-system-design-interview.md",title:"Choosing the Best Database in a System Design Interview",description:"",date:"2023-05-27T03:16:00.000Z",formattedDate:"May 27, 2023",tags:[{label:"Database",permalink:"/software-architecture/blog/tags/database"},{label:"SQL",permalink:"/software-architecture/blog/tags/sql"},{label:"NoSQL",permalink:"/software-architecture/blog/tags/no-sql"}],readingTime:.08,hasTruncateMarker:!1,authors:[{name:"Code Karle",title:"Choosing the Best Database in a System Design Interview",image_url:"https://yt3.ggpht.com/ytc/AGIKgqNru7fGDrA2jvj5KHU_ue-u0D90RVifRZ7P6UUR=s88-c-k-c0x00ffffff-no-rj",imageURL:"https://yt3.ggpht.com/ytc/AGIKgqNru7fGDrA2jvj5KHU_ue-u0D90RVifRZ7P6UUR=s88-c-k-c0x00ffffff-no-rj"}],frontMatter:{slug:"choosing-the-best-database-in-a-system-design-interview",title:"Choosing the Best Database in a System Design Interview",authors:{name:"Code Karle",title:"Choosing the Best Database in a System Design Interview",image_url:"https://yt3.ggpht.com/ytc/AGIKgqNru7fGDrA2jvj5KHU_ue-u0D90RVifRZ7P6UUR=s88-c-k-c0x00ffffff-no-rj",imageURL:"https://yt3.ggpht.com/ytc/AGIKgqNru7fGDrA2jvj5KHU_ue-u0D90RVifRZ7P6UUR=s88-c-k-c0x00ffffff-no-rj"},tags:["Database","SQL","NoSQL"]},nextItem:{title:"When to use microservices",permalink:"/software-architecture/blog/when-to-use-microservices"}},c={authorsImageUrls:[void 0]},l=[],f={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("iframe",{width:"800",height:"400",src:"https://www.youtube.com/embed/cODCpXtPHbQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}g.isMDXComponent=!0}}]);