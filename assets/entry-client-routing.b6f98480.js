import{a as l,i as ae,p as j,b as y,h as g,c,m as E,d as F,s as O,e as Le,f as je,o as f,_ as u,g as ke,j as Ve,k as We,l as $e,n as De,q as Ne,r as He,t as Ue,u as Be,v as ze,w as Ke,x as Ge,y as Ye,z as Je,A as Me,B as Qe,C as Xe,D as qe,E as Ze,F as et,G as tt,H as nt,I as rt,J as st,K as ot,L as at,M as it,N as lt,O as ut,P as ct,Q as dt,R as gt,S as pt,T as _t,U as ft,V as mt,W as ht,X as xt,Y as bt,Z as vt,$ as yt,a0 as Pt,a1 as Rt,a2 as Et,a3 as Ot,a4 as P,a5 as wt,a6 as At,a7 as U,a8 as Tt,a9 as ie,aa as St,ab as It,ac as le,ad as Ft,ae as ue,af as Ct,ag as ce,ah as Lt,ai as jt}from"./chunk-5a4b3448.js";function v(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Q(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function B(e){var t,n;"urlPathname"in e?(l(((t=Object.getOwnPropertyDescriptor(e,"urlPathname"))===null||t===void 0?void 0:t.get)===X),l(((n=Object.getOwnPropertyDescriptor(e,"urlParsed"))===null||n===void 0?void 0:n.get)===q)):(Object.defineProperty(e,"urlPathname",{get:X,enumerable:!0,configurable:!0}),Object.defineProperty(e,"urlParsed",{get:q,enumerable:!0,configurable:!0}))}function de(e){let{url:t,_baseUrl:n,_urlProcessor:a}=e;return l(n.startsWith("/")),l(a===null||ae(a)),a!==null&&(t=a(t)),j(t,n)}function X(){const{pathname:e}=de(this),t=e;return l(t.startsWith("/")),t}function q(){const e=de(this),{origin:t,pathname:n,pathnameOriginal:a,search:r,searchAll:o,searchOriginal:s,hash:i,hashOriginal:d}=e;return{origin:t,pathname:n,pathnameOriginal:a,search:r,searchAll:o,searchOriginal:s,hash:i,hashOriginal:d,get hashString(){return y(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0}),d},get searchString(){return y(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0}),s}}}function kt(e,t){if(!v(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function Vt(e){return g(e,"then")&&ae(e.then)}const z="@",N=":";function K(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),a=t.split("/"),r={};Wt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,a.length);o++){const s=n[o],i=a[o];if(s==="*")return r["*"]=a.slice(Math.max(1,o)).join("/"),{routeParams:r};if(s&&C(s)){if(y(!s.startsWith(N),`Outdated route string \`${e}\`, use \`${e.split(N).join(z)}\` instead.`,{onlyOnce:!0}),!i)return null;r[s.slice(1)]=i}else if((s||"")!==(i||""))return null}return{routeParams:r}}function Wt(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function A(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(C(s))break;n++}const a=t.filter(s=>!C(s)).length,r=t.filter(s=>C(s)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:a,isCatchAll:o}}function C(e){return e.startsWith(z)||e.startsWith(N)}function Z(e){const n=K(e,e);return n!==null&&Object.keys(n.routeParams).length===0}function $t(e){e.sort(Dt).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(E(t=>t.routeType==="STRING"&&Z(t.routeString)===!1)).sort(E(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(E(t=>t.routeType==="STRING"&&Z(t.routeString)===!0)).sort(E(t=>t.routeType==="FILESYSTEM")).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Dt(e,t){var n,a;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(a=t.precedence)!==null&&a!==void 0?a:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=F(s=>A(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(s=>A(s).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(s=>A(s).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(A(t.routeString).isCatchAll)return-1;if(A(e.routeString).isCatchAll)return 1}return 0}function Nt(e,t){return zt(e)?K(e,t):Ht(e,t)}function Ht(e,t){return t=Ut(t),l(t.startsWith("/")),l(e.startsWith("/")),l(!t.endsWith("/")||t==="/"),l(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function Ut(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=O(e,0,-1);return e===""?"/":e}function Bt(e,t){const a=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(F(({filesystemRoot:o})=>o.length))[0];let r;if(a){const{filesystemRoot:o,routeRoot:s}=a,i={pageId:e,filesystemRoot:o,routeRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),i),l(e.startsWith(o),i),o!=="/"?(l(!o.endsWith("/"),i),r=O(e,o.length,0)):r=e,l(r.startsWith("/"),i),r=s+(s.endsWith("/")?"":"/")+O(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=O(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}function zt(e){return e.includes(z)}async function Kt(e,t,n,a){const r=a,o="route()";let s;try{s=e.default({url:t,pageContext:n})}catch(p){return{hookError:p,hookName:o,hookFilePath:r}}c(!Vt(s)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${a} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);try{s=await s}catch(p){return{hookError:p,hookName:o,hookFilePath:r}}if(s===!1)return null;s===!0&&(s={}),c(v(s),`The Route Function ${a} should return a boolean or a plain JavaScript object, instead it returns \`${g(s,"constructor")?s.constructor:s}\`.`);let i=null;g(s,"precedence")&&(i=s.precedence,c(typeof i=="number",`The \`precedence\` value returned by the Route Function ${a} should be a number.`)),c(!("pageContext"in s),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),ge(s,`The \`routeParams\` object returned by the Route Function ${a} should`);const d=s.routeParams||{};return l(v(d)),Object.keys(s).forEach(p=>{c(p==="match"||p==="routeParams"||p==="precedence",`The Route Function ${a} returned an object with an unknown key \`{ ${p} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:i,routeParams:d}}function ge(e,t){l(t.endsWith(" should")),g(e,"routeParams")&&(c(v(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function pe(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:a,hookFilePath:r}=t;l(r.startsWith("/")),l(!a.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${a} }\` of ${r}`}c(Le(e),`${n} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),y(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function Gt(e,t){const n=e.filePath,a="onBeforeRoute";let r;try{r=await e.onBeforeRoute(t)}catch(i){return{hookError:i,hookName:a,hookFilePath:n}}const o=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(r==null||kt(r,["pageContext"])&&g(r,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return{};if(c(g(r,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),g(r.pageContext,"_pageId")&&!g(r.pageContext,"_pageId","null")){const i=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(g(r.pageContext,"_pageId","string"),`${i} a string or \`null\``),c(t._allPageIds.includes(r.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(d=>`'${d}'`).join(", ")}]\`.`)}g(r.pageContext,"routeParams")&&ge(r.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const s=r.pageContext;return pe(s,{hook:{hookFilePath:n,hookName:a}}),{pageContextProvidedByUser:s}}async function Yt(e){let t=null;const n=[];await Promise.all(e._pageFilesAll.filter(s=>s.fileType===".page.route").map(s=>{var i;return(i=s.loadFile)===null||i===void 0?void 0:i.call(s)})),e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){c(g(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:d}=i;t={filePath:s,onBeforeRoute:d}}"filesystemRoutingRoot"in i&&(c(g(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),c(g(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:Mt(s),routeRoot:i.filesystemRoutingRoot}))});const a=e._allPageIds,r=[];return a.filter(s=>!je(s)).filter(s=>{const i=Jt(s,e._pageFilesAll);if(!i)return!0;const{filePath:d,fileExports:p}=i;l(p),c("default"in p,`${d} should have a default export.`),c(g(p,"default","string")||g(p,"default","function"),`The default export of ${d} should be a string or a function.`),c(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in p)||g(p,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${d} should be a boolean.`);const b=p.default;return r.push({pageId:s,filesystemRoute:null,pageRouteFile:{filePath:d,fileExports:p,routeValue:b}}),!1}).forEach(s=>{const i=Bt(s,n);l(i.startsWith("/")),l(!i.endsWith("/")||i==="/"),r.push({pageId:s,filesystemRoute:i,pageRouteFile:null})}),{pageRoutes:r,onBeforeRouteHook:t}}function Jt(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function Mt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=O(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}var I;function ee(...e){var t,n;I||(I=(n=(t=globalThis).__vite_plugin_ssr_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),I&&I(...e)}async function _e(e){B(e);const{pageRoutes:t,onBeforeRouteHook:n}=await Yt(e);ee("Pages routes:",t.map(m=>({pageId:m.pageId,filesystemRoute:m.filesystemRoute,pageRouteFile:m.pageRouteFile&&{filePath:m.pageRouteFile.filePath,routeValue:m.pageRouteFile.routeValue}})));const a={};if(n){const m=await Gt(n,e);if("hookError"in m)return m;if("pageContextProvidedByUser"in m){if(f(a,m.pageContextProvidedByUser),g(a,"_pageId","string")||g(a,"_pageId","null"))return g(a,"routeParams")?l(g(a,"routeParams","object")):f(a,{routeParams:{}}),f(a,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:a};f(e,a)}}f(a,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),c(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;l(o.startsWith("/"));const s=[],i=[];if(await Promise.all(t.map(async m=>{const{pageId:_,filesystemRoute:T,pageRouteFile:w}=m;if(w){const x=w.fileExports,R=w.filePath;if(g(x,"default","string")){const h=x.default;c(h.startsWith("/"),`A Route String should start with a leading \`/\` but \`${R}\` has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`);const S=K(h,o);if(S){const{routeParams:V}=S;i.push({pageId:_,routeString:h,routeParams:V,routeType:"STRING"})}}else if(g(x,"default","function")){const h=await Kt(x,o,e,R);if(h&&"hookError"in h){s.push(h);return}if(h){const{routeParams:S,precedence:V}=h;i.push({pageId:_,precedence:V,routeParams:S,routeType:"FUNCTION"})}}else l(!1)}else{const x=Nt(T,o);if(x){const{routeParams:R}=x;i.push({pageId:_,routeParams:R,routeType:"FILESYSTEM"})}}})),s.length>0)return s[0];$t(i);const d=i[0];if(ee(`Route matches for URL \`${o}\` (in precedence order):`,i),f(a,{_routeMatches:i}),!d)return f(a,{_pageId:null,routeParams:{}}),{pageContextAddendum:a};const{pageId:p,routeParams:b}=d;return l(v(b)),f(a,{_pageId:p,routeParams:b}),{pageContextAddendum:a}}const G={},fe={},Qt={},k={},me={},Xt=!0,qt={"/pages/docs/code-blocks.page.mdx":()=>u(()=>import("./pages/docs/code-blocks.page.b5322ac7.js"),["assets/pages/docs/code-blocks.page.b5322ac7.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/code-readability-guidelines.page.mdx":()=>u(()=>import("./pages/docs/code-readability-guidelines.page.4c02cb3e.js"),["assets/pages/docs/code-readability-guidelines.page.4c02cb3e.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/collaboration-policy.page.mdx":()=>u(()=>import("./pages/docs/collaboration-policy.page.e854c0db.js"),["assets/pages/docs/collaboration-policy.page.e854c0db.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/course-missive.page.mdx":()=>u(()=>import("./pages/docs/course-missive.page.85469d42.js"),["assets/pages/docs/course-missive.page.85469d42.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/cpp-guidelines.page.mdx":()=>u(()=>import("./pages/docs/cpp-guidelines.page.719e0b9a.js"),["assets/pages/docs/cpp-guidelines.page.719e0b9a.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/dummy-page.page.mdx":()=>u(()=>import("./pages/docs/dummy-page.page.92cc14bf.js"),["assets/pages/docs/dummy-page.page.92cc14bf.js","assets/chunk-47a93a9e.js"]),"/pages/docs/github-gradescope-guide.page.mdx":()=>u(()=>import("./pages/docs/github-gradescope-guide.page.ba4fecd2.js"),["assets/pages/docs/github-gradescope-guide.page.ba4fecd2.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/docs/index.page.mdx":()=>u(()=>import("./pages/docs/index.page.61a26530.js"),["assets/pages/docs/index.page.61a26530.js","assets/chunk-47a93a9e.js"]),"/pages/docs/inline-code.page.mdx":()=>u(()=>import("./pages/docs/inline-code.page.14d65c77.js"),["assets/pages/docs/inline-code.page.14d65c77.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/preventing-memory-leaks.page.mdx":()=>u(()=>import("./pages/docs/preventing-memory-leaks.page.ad14af8f.js"),["assets/pages/docs/preventing-memory-leaks.page.ad14af8f.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/docs/scenefile-documentation.page.mdx":()=>u(()=>import("./pages/docs/scenefile-documentation.page.903322d1.js"),["assets/pages/docs/scenefile-documentation.page.903322d1.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/docs/xcode-CLT-install-guide.page.mdx":()=>u(()=>import("./pages/docs/xcode-CLT-install-guide.page.d2368a73.js"),["assets/pages/docs/xcode-CLT-install-guide.page.d2368a73.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/hours.page.mdx":()=>u(()=>import("./pages/hours.page.a9386041.js"),["assets/pages/hours.page.a9386041.js","assets/chunk-47a93a9e.js"]),"/pages/index.page.mdx":()=>u(()=>import("./pages/index.page.9b21a009.js"),["assets/pages/index.page.9b21a009.js","assets/chunk-47a93a9e.js"]),"/pages/labs/index.page.mdx":()=>u(()=>import("./pages/labs/index.page.c313724a.js"),["assets/pages/labs/index.page.c313724a.js","assets/chunk-47a93a9e.js"]),"/pages/labs/lab1.page.mdx":()=>u(()=>import("./pages/labs/lab1.page.5c265010.js"),["assets/pages/labs/lab1.page.5c265010.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab10.page.mdx":()=>u(()=>import("./pages/labs/lab10.page.b79d58b3.js"),["assets/pages/labs/lab10.page.b79d58b3.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab11.page.mdx":()=>u(()=>import("./pages/labs/lab11.page.c0dc8455.js"),["assets/pages/labs/lab11.page.c0dc8455.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab2.page.mdx":()=>u(()=>import("./pages/labs/lab2.page.28f8346a.js"),["assets/pages/labs/lab2.page.28f8346a.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab3.page.mdx":()=>u(()=>import("./pages/labs/lab3.page.7ef30ed9.js"),["assets/pages/labs/lab3.page.7ef30ed9.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab4.page.mdx":()=>u(()=>import("./pages/labs/lab4.page.e4992cc9.js"),["assets/pages/labs/lab4.page.e4992cc9.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab5.page.mdx":()=>u(()=>import("./pages/labs/lab5.page.b243ea10.js"),["assets/pages/labs/lab5.page.b243ea10.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab6.page.mdx":()=>u(()=>import("./pages/labs/lab6.page.7e431507.js"),["assets/pages/labs/lab6.page.7e431507.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab7.page.mdx":()=>u(()=>import("./pages/labs/lab7.page.8a77591d.js"),["assets/pages/labs/lab7.page.8a77591d.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab8.page.mdx":()=>u(()=>import("./pages/labs/lab8.page.0bd8d7eb.js"),["assets/pages/labs/lab8.page.0bd8d7eb.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/labs/lab9.page.mdx":()=>u(()=>import("./pages/labs/lab9.page.7778e71a.js"),["assets/pages/labs/lab9.page.7778e71a.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/lectures.page.mdx":()=>u(()=>import("./pages/lectures.page.a0a55554.js"),["assets/pages/lectures.page.a0a55554.js","assets/chunk-47a93a9e.js"]),"/pages/projects/final/index.page.mdx":()=>u(()=>import("./pages/projects/final/index.page.c0f7a178.js"),["assets/pages/projects/final/index.page.c0f7a178.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/projects/index.page.mdx":()=>u(()=>import("./pages/projects/index.page.13199dc8.js"),["assets/pages/projects/index.page.13199dc8.js","assets/chunk-47a93a9e.js"]),"/pages/projects/raster/1-algo.page.mdx":()=>u(()=>import("./pages/projects/raster/1-algo.page.ab4fa7b9.js"),["assets/pages/projects/raster/1-algo.page.ab4fa7b9.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/projects/raster/1.page.mdx":()=>u(()=>import("./pages/projects/raster/1.page.cd8a032a.js"),["assets/pages/projects/raster/1.page.cd8a032a.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"]),"/pages/projects/raster/2-algo.page.mdx":()=>u(()=>import("./pages/projects/raster/2-algo.page.77d68877.js"),["assets/pages/projects/raster/2-algo.page.77d68877.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"]),"/pages/projects/raster/2.page.mdx":()=>u(()=>import("./pages/projects/raster/2.page.0efff343.js"),["assets/pages/projects/raster/2.page.0efff343.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"]),"/pages/projects/ray/1-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/ray/1-algo-ans.page.c6c066f7.js"),["assets/pages/projects/ray/1-algo-ans.page.c6c066f7.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"]),"/pages/projects/ray/1-algo.page.mdx":()=>u(()=>import("./pages/projects/ray/1-algo.page.ea68af50.js"),["assets/pages/projects/ray/1-algo.page.ea68af50.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"]),"/pages/projects/ray/1.page.mdx":()=>u(()=>import("./pages/projects/ray/1.page.7f0f61ab.js"),["assets/pages/projects/ray/1.page.7f0f61ab.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"]),"/pages/projects/ray/2-algo.page.mdx":()=>u(()=>import("./pages/projects/ray/2-algo.page.302efdc0.js"),["assets/pages/projects/ray/2-algo.page.302efdc0.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/projects/ray/2.page.mdx":()=>u(()=>import("./pages/projects/ray/2.page.d37492af.js"),["assets/pages/projects/ray/2.page.d37492af.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/projects/realtime/1-algo.page.mdx":()=>u(()=>import("./pages/projects/realtime/1-algo.page.63565266.js"),["assets/pages/projects/realtime/1-algo.page.63565266.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/projects/realtime/1.page.mdx":()=>u(()=>import("./pages/projects/realtime/1.page.d18f80c6.js"),["assets/pages/projects/realtime/1.page.d18f80c6.js","assets/chunk-47a93a9e.js","assets/chunk-e84bc917.js","assets/chunk-9ad3b198.js"]),"/pages/projects/realtime/2-algo.page.mdx":()=>u(()=>import("./pages/projects/realtime/2-algo.page.e09c2f85.js"),["assets/pages/projects/realtime/2-algo.page.e09c2f85.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js"]),"/pages/projects/realtime/2.page.mdx":()=>u(()=>import("./pages/projects/realtime/2.page.e534f06f.js"),["assets/pages/projects/realtime/2.page.e534f06f.js","assets/chunk-47a93a9e.js","assets/chunk-9ad3b198.js","assets/chunk-e84bc917.js"])},Zt={...qt};G[".page"]=Zt;const en={},tn={...en};fe[".page.route"]=tn;const nn={"/renderer/_default.page.client.jsx":()=>u(()=>import("./renderer/_default.page.client.bf9d5346.js"),["assets/renderer/_default.page.client.bf9d5346.js","assets/index.9059ccae.css","assets/chunk-47a93a9e.js"])},rn={...nn};G[".page.client"]=rn;const sn={"/renderer/_default.page.client.jsx":ke},on={...sn};k[".page.client"]=on;const an={"/renderer/_default.page.server.jsx":Ve},ln={...an};k[".page.server"]=ln;const un={"/pages/docs/code-blocks.page.mdx":We,"/pages/docs/code-readability-guidelines.page.mdx":$e,"/pages/docs/collaboration-policy.page.mdx":De,"/pages/docs/course-missive.page.mdx":Ne,"/pages/docs/cpp-guidelines.page.mdx":He,"/pages/docs/dummy-page.page.mdx":Ue,"/pages/docs/github-gradescope-guide.page.mdx":Be,"/pages/docs/index.page.mdx":ze,"/pages/docs/inline-code.page.mdx":Ke,"/pages/docs/preventing-memory-leaks.page.mdx":Ge,"/pages/docs/scenefile-documentation.page.mdx":Ye,"/pages/docs/xcode-CLT-install-guide.page.mdx":Je,"/pages/hours.page.mdx":Me,"/pages/index.page.mdx":Qe,"/pages/labs/index.page.mdx":Xe,"/pages/labs/lab1.page.mdx":qe,"/pages/labs/lab10.page.mdx":Ze,"/pages/labs/lab11.page.mdx":et,"/pages/labs/lab2.page.mdx":tt,"/pages/labs/lab3.page.mdx":nt,"/pages/labs/lab4.page.mdx":rt,"/pages/labs/lab5.page.mdx":st,"/pages/labs/lab6.page.mdx":ot,"/pages/labs/lab7.page.mdx":at,"/pages/labs/lab8.page.mdx":it,"/pages/labs/lab9.page.mdx":lt,"/pages/lectures.page.mdx":ut,"/pages/projects/final/index.page.mdx":ct,"/pages/projects/index.page.mdx":dt,"/pages/projects/raster/1-algo.page.mdx":gt,"/pages/projects/raster/1.page.mdx":pt,"/pages/projects/raster/2-algo.page.mdx":_t,"/pages/projects/raster/2.page.mdx":ft,"/pages/projects/ray/1-algo-ans.page.mdx":mt,"/pages/projects/ray/1-algo.page.mdx":ht,"/pages/projects/ray/1.page.mdx":xt,"/pages/projects/ray/2-algo.page.mdx":bt,"/pages/projects/ray/2.page.mdx":vt,"/pages/projects/realtime/1-algo.page.mdx":yt,"/pages/projects/realtime/1.page.mdx":Pt,"/pages/projects/realtime/2-algo.page.mdx":Rt,"/pages/projects/realtime/2.page.mdx":Et},cn={...un};k[".page"]=cn;const dn={"/renderer/_default.page.server.jsx":()=>u(()=>import("./chunk-c55c22c8.js"),["assets/chunk-c55c22c8.js","assets/index.9059ccae.css"])},gn={...dn};me[".page.server"]=gn;var pn=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:G,pageFilesEager:fe,pageFilesExportNamesLazy:Qt,pageFilesExportNamesEager:k,neverLoaded:me,isGeneratedFile:Xt},Symbol.toStringTag,{value:"Module"}));Ot(pn);function he(){const e="/";return _n(e)?"/":e}function _n(e){return!!e.startsWith("http")}function xe(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function fn(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function mn(e){return j(e,"/").pathname}function Y(e){window.location.href=e}const hn="/";function xn(e,t,n){l(t!==".pageContext.json"||n===!0);const{pathnameOriginal:a,searchOriginal:r,hashOriginal:o}=j(e,hn);e.startsWith("/")&&l(e===`${a}${r||""}${o||""}`,{url:e});let s=a;if(n)s.endsWith("/")&&(s=O(s,0,-1)),l(!s.endsWith("/")),s===""&&(s="/index");else{const d=a.endsWith("/")?"":"/";s=s+`${d}index`}return`${s}${t}${r||""}${o||""}`}function bn(){return!!vn()}function vn(){return!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}const yn=P();let te=!1;const be={markNavigationChange(){te=!0},get noNavigationChangeYet(){return!te&&this.isOriginalUrl(P())},isOriginalUrl(e){return e===yn}};function ve(e,t){return wt(e,t)}async function Pn(e,t){const a=ve(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(a.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:a.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function Rn(e,t,n,a){l(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${a}`;c(e==null||v(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(En(e,n,r),"pageContext"in e&&pe(e.pageContext,{hook:{hookName:t,hookFilePath:a}}))}function En(e,t,n){const a=[],r=Object.keys(e);for(const o of r)t.includes(o)||a.push(o);c(a.length===0,[n,"returned an object with unknown keys",Q(a)+".","Only following keys are allowed:",Q(t)+"."].join(" "))}async function On(e){return e._isFirstRenderAttempt&&be.isOriginalUrl(e.url)?wn(e):An(e)}async function wn(e){const t=At();ye(t),f(t,{isHydration:!0,_comesDirectlyFromServer:!0});{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)throw J(),n.err;const{exports:a,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;f(t,{exports:a,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return{pageContextAddendum:t}}async function An(e){const t={isHydration:!1};f(t,await Sn(e));{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)return J(),Y(e.url),{errorFetchingStaticAssets:!0};const{exports:a,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;f(t,{exports:a,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return f(t,await Tn({...e,...t})),l([!0,!1].includes(t._comesDirectlyFromServer)),{pageContextAddendum:t}}async function Tn(e){const t=Tt(e,"onBeforeRender");if(t){const a=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=ie({...e,...r}),s=await a(o);Rn(s,"onBeforeRender",["pageContext"],t.filePath);const i=s==null?void 0:s.pageContext;return f(r,i),r}else if((await Pn(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const a=await Fn(e),r={};return Object.assign(r,a),f(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:a}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function Sn(e){const t=await _e(e);if("hookError"in t)throw t.hookError;const n=t.pageContextAddendum;return n._pageId===null?(setTimeout(()=>{In(e)},0),c(!1,`[404] Page ${e.url} does not exist. (\`vite-plugin-ssr\` will now server-side route to \`${e.url}\`.)`)):l(g(n,"_pageId","string")),n}function In(e){window.location.pathname=e.url}async function Fn(e){const t=xn(e.url,".pageContext.json",!0),n=await fetch(t);l(n.status!==404);{const s=n.headers.get("content-type");c(s&&s.includes("application/json"),`Wrong HTTP Response Header \`content-type\` value for URL ${t} (it should be \`application/json\` but we got \`${s}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const a=await n.text(),r=St(a);if(l(!("pageContext404PageDoesNotExist"in r)),"serverSideError"in r)throw It("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(g(r,"pageContext"));const o=r.pageContext;return l(v(o)),l(g(o,"_pageId","string")),ye(o),o}const ne=["urlPathname","urlParsed"],Cn=["Page","pageExports","exports"];function ye(e){[...Cn,...ne].forEach(n=>{n in e&&(ne.includes(n)?(l(n.startsWith("url")),y(!1,`\`pageContext.${n}\` is already available in the browser when using \`useClientRouter()\`; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):y(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}let W;async function Pe(){return W||(W=await Ln()),W}async function Ln(){const e=he();le(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:a}=Ft();return f(t,{_pageFilesAll:n,_allPageIds:a}),t}async function Re(e){const t=await Pe(),n={url:e,...t},a=t._pageFilesAll;B(n);const r=await _e(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:a};const o=r.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:a}:{pageId:null,pageFilesAll:a}}function L(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function jn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:a(),isClientRouting:o()};function a(){return t.some(d=>d.pageId===n&&d.fileType===".page")?(r(),!1):t.some(d=>d.pageId===n&&d.fileType===".page.server")}function r(){const s=e.some(i=>L(i).includes("render"));c(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((i,d)=>` (${d+1}): ${i.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(i=>L(i).includes("clientRouting"))}}function kn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:a}){let r=[];const o=t.filter(i=>!e.includes(i)),s=[];if(s.push(...e.map(i=>({id:i.filePath,onlyAssets:!1}))),s.push(...o.map(i=>({id:i.filePath,onlyAssets:!0}))),n)r=e.map(i=>i.filePath);else{const i=a?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";s.push({id:i,onlyAssets:!1}),r=[i]}return{clientEntries:r,clientDependencies:s}}function Vn(e,t){let n=ue(e,t);const a=ve(e,t),{isHtmlOnly:r,isClientRouting:o}=jn({pageFilesClientSide:n,pageFilesServerSide:a,pageId:t});r&&(n=n.filter(d=>d.fileType===".page.client"&&!L(d).includes("render")),n=$n(n));const{clientEntries:s,clientDependencies:i}=kn({pageFilesClientSide:n,pageFilesServerSide:a,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:s,clientDependencies:i,pageFilesClientSide:n,pageFilesServerSide:a}}async function Wn(e,t,{sharedPageFilesAlreadyLoaded:n}){const a=ue(e,t);await Promise.all(a.map(async r=>{var o;l(r.fileType===".page"||r.fileType===".page.client"),!(n&&r.fileType===".page")&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function $n(e){const t=[];for(const n of e)if(t.push(n),L(n).includes("overrideDefaultPages"))break;return t}async function Ee(e){const{pageId:t,pageFilesAll:n}=await Re(e);if(!t)return!1;await Wn(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:a,isClientRouting:r}=Vn(n,t);return!a&&r}function Oe(e){const t=e.getAttribute("href");return!!(t===null||t===""||xe(t)||Dn(e)||Nn(t)||!Hn(t)||!Ct(t))}function Dn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Nn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Hn(e){const t=he();le(t);const{hasBaseUrl:n}=j(e,t);return n}function Un(e,t){const n=Bn(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function Bn(e,t){let n=zn(t),a=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&c(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";c(v(r),o);const s=Object.keys(r);c(s.length===1&&s[0]==="when",o);const{when:i}=r;if(i==="HOVER"||i==="VIEWPORT")return{when:i};c(!1,o)}return{when:"HOVER"}})();return a&&a.when==="VIEWPORT"&&!e._isProduction&&(ce(!1,"Viewport prefetching is disabled in development, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),a={when:"HOVER"}),a}function zn(e){let t=e.getAttribute("data-prefetch");if(y(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const we=new Map;function Ae(e){const t=Se(e);return we.has(t)}function Te(e){const t=Se(e);we.set(t,!0)}function Se(e){return mn(e)}const re=new Map;async function $(e){if(c(!xe(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),Ae(e))return;Te(e);const{pageId:t,pageFilesAll:n}=await Re(e);if(t){const a=await U(n,t);"errorFetchingStaticAssets"in a&&J()}}function Kn(e){Te(e.url),[...document.getElementsByTagName("A")].forEach(async n=>{if(re.has(n))return;re.set(n,!0);const a=n.getAttribute("href");if(Oe(n)||(l(a),!await Ee(a))||Ae(a))return;const r=Un(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>$(a)),n.addEventListener("touchstart",()=>$(a),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&($(a),o.disconnect())})});o.observe(n)}}else return})}const Gn="__vite_plugin_ssr__navigate";nr();let D,Ie=!1;function J(){Ie=!0,ce(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Yn(){er(),Jn((r,{keepScrollPosition:o})=>{a(o?"preserve-scroll":"scroll-to-top-or-hash",r)}),Mn(r=>{a(r)}),globalThis[Gn]=async(r,{keepScrollPosition:o,overwriteLastHistoryEntry:s})=>{await a(o?"preserve-scroll":"scroll-to-top-or-hash",r,s)};let e=0,t,n=!1;a("preserve-scroll");return;async function a(r,o=P(),s=!1){var i,d;if(Ie){Y(o);return}const p=++e;l(p>=1),p>1&&n===!1&&(D&&D(),n=!0);const b=()=>bn()&&p===1?!1:p!==e,m=await Pe();if(b())return;const _={url:o,_isFirstRenderAttempt:p===1,...m};B(_);const T=await On(_);if("errorFetchingStaticAssets"in T)return;const{pageContextAddendum:w}=T;b()||(f(_,w),"onPageTransitionStart"in _.exports&&(c(g(_.exports,"onPageTransitionStart","function"),"The `export { onPageTransitionStart }` of "+_.exportsAll.onPageTransitionStart[0]._filePath+" should be a function."),D=_.exports.onPageTransitionStart),t&&await t,!b()&&(Qn(o,s),be.markNavigationChange(),l(t===void 0),t=(async()=>{const x=ie(_);Lt(_);const R=await _.exports.render(x);c(R===void 0,"`export { render }` of "+_.exportsAll.render[0]._filePath+" should not return any value"),l(_.url===o),Kn(_)})(),await t,t=void 0,_._isFirstRenderAttempt?(jt(_,"onHydrationEnd"),await((d=(i=_.exports).onHydrationEnd)===null||d===void 0?void 0:d.call(i,_))):p===e&&(_.exports.onPageTransitionEnd&&(c(g(_.exports,"onPageTransitionEnd","function"),"The `export { onPageTransitionEnd }` of "+_.exportsAll.onPageTransitionEnd[0]._filePath+" should be a function."),_.exports.onPageTransitionEnd()),n=!1),qn(r),M(),Fe=!0))}}function Jn(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=a(r.target);if(!o)return;const s=o.getAttribute("href");if(Oe(o))return;if(l(s),r.preventDefault(),!await Ee(s)){Y(s);return}const i=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:i})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function a(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}let H=P({withoutHash:!0});function Mn(e){window.addEventListener("popstate",t=>{const n=P({withoutHash:!0});if(n==H)return;H=n;const r=Zn(t.state)||"scroll-to-top-or-hash";e(r)})}function Qn(e,t){P()!==e&&(M(),t?window.history.replaceState(void 0,"",e):window.history.pushState(void 0,"",e),H=P({withoutHash:!0}))}function Xn(){return{x:window.scrollX,y:window.scrollY}}function qn(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=tr();if(r&&r!=="top"){const o=document.getElementById(r)||document.getElementsByName(r)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;const{x:n,y:a}=t;window.scrollTo(n,a)}function Zn(e=window.history.state){return g(e,"scrollPosition")?e.scrollPosition:null}function er(){window.addEventListener("scroll",fn(se,Math.ceil(1e3/3)),{passive:!0}),Ce(se)}function se(){const e=Xn();window.history.replaceState({scrollPosition:e},"")}function tr(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}let Fe=!1;function nr(){oe(),Ce(oe),rr(()=>Fe&&M())}function M(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ce(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function rr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}Yn();
