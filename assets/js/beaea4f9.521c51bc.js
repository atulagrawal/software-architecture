"use strict";(self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[]).push([[5296],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},i="Apache Lucene",c={unversionedId:"software-architecture/topics/apache-lucene",id:"software-architecture/topics/apache-lucene",title:"Apache Lucene",description:"Apache lucune provides the key capabilities for indexing and searching. It is used by ElasticSearch and Apache Solr",source:"@site/docs/software-architecture/topics/apache-lucene.md",sourceDirName:"software-architecture/topics",slug:"/software-architecture/topics/apache-lucene",permalink:"/software-architecture/docs/software-architecture/topics/apache-lucene",draft:!1,editUrl:"https://github.com/atulagrawal/software-architecture/tree/main/packages/create-docusaurus/templates/shared/docs/software-architecture/topics/apache-lucene.md",tags:[],version:"current",frontMatter:{},sidebar:"softwareArchitectureSidebar",previous:{title:"Topics",permalink:"/software-architecture/docs/category/topics"},next:{title:"Database Notes",permalink:"/software-architecture/docs/software-architecture/topics/database"}},l={},u=[{value:"Taxonomy",id:"taxonomy",level:2},{value:"High Level Overview",id:"high-level-overview",level:2},{value:"Low Level Overview",id:"low-level-overview",level:2},{value:"Other Features",id:"other-features",level:2},{value:"Distributed Index",id:"distributed-index",level:2},{value:"References:",id:"references",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apache-lucene"},"Apache Lucene"),(0,a.kt)("p",null,"Apache lucune provides the key capabilities for indexing and searching. It is used by ElasticSearch and ",(0,a.kt)("a",{parentName:"p",href:"https://solr.apache.org/"},"Apache Solr")),(0,a.kt)("h2",{id:"taxonomy"},"Taxonomy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Document")," - Document contains the info that is required be indexed and searched. E.g. A web page, a tweet etc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query")," - Query is the search phrase."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Term")," - A query consists of terms (tokens) that are used for search. ","[the unit of search]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inverted index")," - Inverted index is a data structure that maps terms to the documents."),(0,a.kt)("h2",{id:"high-level-overview"},"High Level Overview"),(0,a.kt)("p",null,"Lucene provides two core capabilities:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Indexing ")," - The documents that are required to be searched are ingested into the lucene for creating the inverted indexes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Searching ")," - The query provided by the client is tokenized into terms and then lucne uses these terms for the look up using the inverted indexes. Lucene can also keep track of the term frequency etc for giving relevant results."),(0,a.kt)("mermaid",{value:"graph TD\n    client[Client]\n    src[Source]\n    subgraph Lucene\n        lucene[Apache Lucene]\n        index[Index]\n    end\n    subgraph Source\n    src-- Documents - D1,D2,D3 --\x3e lucene\n    lucene -- Generate Indexes --\x3e index[Index \\n K1 : D1 \\n K2 : D2,D3 \\n K3:D3]\n    end\n    subgraph Search\n    client -- Query --\x3e lucene\n    lucene -- Lookup Terms --\x3e index\n    end\n"}),(0,a.kt)("h2",{id:"low-level-overview"},"Low Level Overview"),(0,a.kt)("p",null,"Lucene has multiple low level module that helps in performign the indexing and serach operations."),(0,a.kt)("mermaid",{value:"graph LR\n    subgraph Analyzer\n        Tokenizer[Tokenizer \\n Split text into tokens]\n        Filter[Filter \\n Remove words such as - a, an, the]\n        Converter[Converter \\n Convert tokens into lower case]\n        Stemmer[Stemmer \\n normalize different form of the same word \\n e.g. ran, running to run]\n        SynonymHanlder[Synonym Hanlder \\n Synonym handling \\n e.g. huge, gigantic to big]\n    end\n\n  \n    Source --Document--\x3e Analyzer -- Tokens --\x3e Index[Index Storage \\n Index to Document Map]\n    "}),(0,a.kt)("mermaid",{value:"graph LR\n    subgraph Analyzer\n        Tokenizer[Tokenizer \\n Split text into tokens]\n        Filter[Filter \\n Remove words such as - a, an, the]\n        Converter[Converter \\n Convert tokens into lower case]\n        Stemmer[Stemmer \\n normalize different form of the same word \\n e.g. ran, running to run]\n        SynonymHanlder[Synonym Hanlder \\n Synonym handling \\n e.g. huge, gigantic to big]\n    end\n\n    Client -- Phrase --\x3e Analyzer -- Terms--\x3e Index[Index Storage \\n Serach Results]\n    "}),(0,a.kt)("h2",{id:"other-features"},"Other Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for different Searching methods (Ranking, Sorting etc.)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Term frequency in document"),(0,a.kt)("li",{parentName:"ul"},"Number of terms in the query that were found in the document"),(0,a.kt)("li",{parentName:"ul"},"etc."))),(0,a.kt)("li",{parentName:"ul"},"Supports differnt Query types: phrase queries, wildcard queries etc."),(0,a.kt)("li",{parentName:"ul"},"Multiple-index searching with merged results"),(0,a.kt)("li",{parentName:"ul"},"Support for simultaneous update and searching")),(0,a.kt)("h2",{id:"distributed-index"},"Distributed Index"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Document Based Parition - In this model, documents will be distributed to the nodes as part paritioning logic. In indexing phase, this node will do the local indexing of the document and keep the result of the inverted indexes. In search phase, all the nodes will be sent query for the result that will be\nmerged later on.")),(0,a.kt)("mermaid",{value:"graph\n    subgraph Parition\n        direction TB\n        subgraph Node 1\n            direction TB\n            Doc1\n            Doc2\n        end\n        subgraph Node 2\n            direction TB\n            Doc3\n            Doc4\n            Doc5\n        end\n        subgraph Node 3\n            direction TB\n            Doc6\n            Doc7\n            Doc8\n        end\n    end"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Term Based Parition")),(0,a.kt)("mermaid",{value:"graph\n    subgraph Parition\n        direction TB\n        subgraph Node 1\n            direction TB\n            Term1\n            Term2\n        end\n        subgraph Node 2\n            direction TB\n            Term3\n            Term4\n            Term5\n        end\n        subgraph Node 3\n            direction TB\n            Term6\n            Term7\n            Term8\n        end\n    end"}),(0,a.kt)("p",null,"The parition could be based on hash values or key range (e.g. T1 to Tn goes to Node 1)"),(0,a.kt)("h2",{id:"references"},"References:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://lucene.apache.org/core/"},"Lucene")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://j.blaszyk.me/tech-blog/exploring-apache-lucene-index/"},"Blog")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/geekculture/elasticsearch-architecture-1f40b93da719"},"Elastic Search - Architecture")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://levelup.gitconnected.com/lucene-search-engine-in-action-32146d5dab09"},"Blog")))}d.isMDXComponent=!0}}]);