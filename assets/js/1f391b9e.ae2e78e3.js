"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[3085],{2503:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),l=t(7294),i=t(6010),r=t(5999),o=t(6668),c=t(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===n||!t)return l.createElement(n,(0,a.Z)({},m,{id:void 0}));const u=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:t});return l.createElement(n,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:t}),m.children,l.createElement(c.Z,{className:"hash-link",to:`#${t}`,"aria-label":u,title:u},"\u200b"))}},2752:(e,n,t)=>{t.d(n,{Z:()=>z});var a=t(7462),l=t(7294),i=t(5742);var r=t(814);var o=t(9960);var c=t(6010),s=t(2389),m=t(6043);const d={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function f(e,n){return!!e&&(e===n||f(e.parentElement,n))}function h(e){let{summary:n,children:t,...i}=e;const r=(0,s.Z)(),o=(0,l.useRef)(null),{collapsed:h,setCollapsed:p}=(0,m.u)({initialState:!i.open}),[v,g]=(0,l.useState)(i.open),E=l.isValidElement(n)?n:l.createElement("summary",null,n??"Details");return l.createElement("details",(0,a.Z)({},i,{ref:o,open:v,"data-collapsed":h,className:(0,c.Z)(d.details,r&&d.isBrowser,i.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;u(n)&&f(n,o.current)&&(e.preventDefault(),h?(p(!1),g(!0)):p(!0))}}),E,l.createElement(m.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),g(!e)}},l.createElement("div",{className:d.collapsibleContent},t)))}const p={details:"details_b_Ee"},v="alert alert--info";function g(e){let{...n}=e;return l.createElement(h,(0,a.Z)({},n,{className:(0,c.Z)(v,p.details,n.className)}))}var E=t(2503);function b(e){return l.createElement(E.Z,e)}const C={containsTaskList:"containsTaskList_mC6p"};const N={img:"img_ev3q"};var Z=t(5281),L=t(5999);const y="admonition_LlT9",k="admonitionHeading_tbUL",H="admonitionIcon_kALy",x="admonitionContent_S0QG";const _={note:{infimaClassName:"secondary",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:l.createElement(L.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:l.createElement(L.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 12 16"},l.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:l.createElement(L.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:l.createElement(L.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return l.createElement("svg",{viewBox:"0 0 16 16"},l.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:l.createElement(L.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},T={secondary:"note",important:"info",success:"tip",warning:"danger"};function w(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=l.Children.toArray(e),t=n.find((e=>l.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=l.createElement(l.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:a}}(e.children);return{...e,title:e.title??n,children:t}}const z={head:function(e){const n=l.Children.map(e.children,(e=>l.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return l.createElement(e.props.originalType,a)}return e}(e):e));return l.createElement(i.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return l.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,l.isValidElement)(e)&&n.includes(e.props?.mdxType)))?l.createElement("code",e):l.createElement(r.Z,e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){return l.createElement(r.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=l.Children.toArray(e.children),t=n.find((e=>l.isValidElement(e)&&"summary"===e.props?.mdxType)),i=l.createElement(l.Fragment,null,n.filter((e=>e!==t)));return l.createElement(g,(0,a.Z)({},e,{summary:t}),i)},ul:function(e){return l.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,c.Z)(n,n?.includes("contains-task-list")&&C.containsTaskList))}));var n},img:function(e){return l.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,c.Z)(n,N.img))}));var n},h1:e=>l.createElement(b,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(b,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(b,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(b,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(b,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(b,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:a,icon:i}=w(e),r=function(e){const n=T[e]??e,t=_[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),_.info)}(t),o=a??r.label,{iconComponent:s}=r,m=i??l.createElement(s,null);return l.createElement("div",{className:(0,c.Z)(Z.k.common.admonition,Z.k.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,y)},l.createElement("div",{className:k},l.createElement("span",{className:H},m),o),l.createElement("div",{className:x},n))},mermaid:t(1875).Z}},5042:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),l=t(3905),i=t(1769);function r(e){let{children:n}=e;return a.createElement(l.Zo,{components:i.Z},n)}},4247:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(7294),l=t(6010),i=t(1944),r=t(5281),o=t(7961),c=t(5042),s=t(9407);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:h}=u;return a.createElement(i.FG,{className:(0,l.Z)(f??r.k.wrapper.mdxPages,r.k.page.mdxPage)},a.createElement(i.d,{title:t,description:d}),a.createElement(o.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.Z)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,l.Z)("col",!h&&"col--8")},a.createElement("article",null,a.createElement(c.Z,null,a.createElement(n,null)))),!h&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},9407:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),l=t(7294),i=t(6010),r=t(3743);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,i.Z)(o.tableOfContents,"thin-scrollbar",n)},l.createElement(r.Z,(0,a.Z)({},t,{linkClassName:c,linkActiveClassName:s})))}},3743:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(7462),l=t(7294),i=t(6668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,l.useRef)(void 0),t=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=s(o,{anchorTopOffset:t.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function u(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?l.createElement("ul",{className:i?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const f=l.memo(u);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...h}=e;const p=(0,i.L)(),v=m??p.tableOfContents.minHeadingLevel,g=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:g});return d((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:g}}),[c,s,v,g])),l.createElement(f,(0,a.Z)({toc:E,className:t,linkClassName:c},h))}},2969:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294);function l(e){let{children:n,color:t}=e;return a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)}},1769:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var a=t(2752),l=t(2969);const i={...a.Z,Highlight:l.Z}}}]);