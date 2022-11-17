import{a as l,i as ae,p as L,b as y,h as g,c,m as R,d as F,s as O,e as Ce,f as Le,o as f,_ as u,g as ke,j as De,k as Ve,l as We,n as $e,q as Ne,r as He,t as Ue,u as Be,v as ze,w as Ke,x as Ge,y as Ye,z as Je,A as Me,B as Qe,C as Xe,D as qe,E as Ze,F as et,G as tt,H as nt,I as rt,J as st,K as ot,L as at,M as it,N as lt,O as ut,P as ct,Q as dt,R as gt,S as _t,T as pt,U as ft,V as mt,W as ht,X as xt,Y as vt,Z as bt,$ as yt,a0 as Pt,a1 as Et,a2 as Rt,a3 as Ot,a4 as At,a5 as Tt,a6 as wt,a7 as St,a8 as It,a9 as Ft,aa as P,ab as jt,ac as Ct,ad as U,ae as Lt,af as ie,ag as kt,ah as Dt,ai as le,aj as Vt,ak as ue,al as Wt,am as ce,an as $t,ao as Nt}from"./chunk-03492c72.js";function b(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Q(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function B(e){var t,n;"urlPathname"in e?(l(((t=Object.getOwnPropertyDescriptor(e,"urlPathname"))===null||t===void 0?void 0:t.get)===X),l(((n=Object.getOwnPropertyDescriptor(e,"urlParsed"))===null||n===void 0?void 0:n.get)===q)):(Object.defineProperty(e,"urlPathname",{get:X,enumerable:!0,configurable:!0}),Object.defineProperty(e,"urlParsed",{get:q,enumerable:!0,configurable:!0}))}function de(e){let{url:t,_baseUrl:n,_urlProcessor:a}=e;return l(n.startsWith("/")),l(a===null||ae(a)),a!==null&&(t=a(t)),L(t,n)}function X(){const{pathname:e}=de(this),t=e;return l(t.startsWith("/")),t}function q(){const e=de(this),{origin:t,pathname:n,pathnameOriginal:a,search:r,searchAll:o,searchOriginal:s,hash:i,hashOriginal:d}=e;return{origin:t,pathname:n,pathnameOriginal:a,search:r,searchAll:o,searchOriginal:s,hash:i,hashOriginal:d,get hashString(){return y(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0}),d},get searchString(){return y(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0}),s}}}function Ht(e,t){if(!b(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function Ut(e){return g(e,"then")&&ae(e.then)}const z="@",N=":";function K(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),a=t.split("/"),r={};Bt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,a.length);o++){const s=n[o],i=a[o];if(s==="*")return r["*"]=a.slice(Math.max(1,o)).join("/"),{routeParams:r};if(s&&j(s)){if(y(!s.startsWith(N),`Outdated route string \`${e}\`, use \`${e.split(N).join(z)}\` instead.`,{onlyOnce:!0}),!i)return null;r[s.slice(1)]=i}else if((s||"")!==(i||""))return null}return{routeParams:r}}function Bt(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function T(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(j(s))break;n++}const a=t.filter(s=>!j(s)).length,r=t.filter(s=>j(s)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:a,isCatchAll:o}}function j(e){return e.startsWith(z)||e.startsWith(N)}function Z(e){const n=K(e,e);return n!==null&&Object.keys(n.routeParams).length===0}function zt(e){e.sort(Kt).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(R(t=>t.routeType==="STRING"&&Z(t.routeString)===!1)).sort(R(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(R(t=>t.routeType==="STRING"&&Z(t.routeString)===!0)).sort(R(t=>t.routeType==="FILESYSTEM")).sort(R(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Kt(e,t){var n,a;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(a=t.precedence)!==null&&a!==void 0?a:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=F(s=>T(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(s=>T(s).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(s=>T(s).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(T(t.routeString).isCatchAll)return-1;if(T(e.routeString).isCatchAll)return 1}return 0}function Gt(e,t){return Qt(e)?K(e,t):Yt(e,t)}function Yt(e,t){return t=Jt(t),l(t.startsWith("/")),l(e.startsWith("/")),l(!t.endsWith("/")||t==="/"),l(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function Jt(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=O(e,0,-1);return e===""?"/":e}function Mt(e,t){const a=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(F(({filesystemRoot:o})=>o.length))[0];let r;if(a){const{filesystemRoot:o,routeRoot:s}=a,i={pageId:e,filesystemRoot:o,routeRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),i),l(e.startsWith(o),i),o!=="/"?(l(!o.endsWith("/"),i),r=O(e,o.length,0)):r=e,l(r.startsWith("/"),i),r=s+(s.endsWith("/")?"":"/")+O(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=O(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}function Qt(e){return e.includes(z)}async function Xt(e,t,n,a){const r=a,o="route()";let s;try{s=e.default({url:t,pageContext:n})}catch(_){return{hookError:_,hookName:o,hookFilePath:r}}c(!Ut(s)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${a} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);try{s=await s}catch(_){return{hookError:_,hookName:o,hookFilePath:r}}if(s===!1)return null;s===!0&&(s={}),c(b(s),`The Route Function ${a} should return a boolean or a plain JavaScript object, instead it returns \`${g(s,"constructor")?s.constructor:s}\`.`);let i=null;g(s,"precedence")&&(i=s.precedence,c(typeof i=="number",`The \`precedence\` value returned by the Route Function ${a} should be a number.`)),c(!("pageContext"in s),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),ge(s,`The \`routeParams\` object returned by the Route Function ${a} should`);const d=s.routeParams||{};return l(b(d)),Object.keys(s).forEach(_=>{c(_==="match"||_==="routeParams"||_==="precedence",`The Route Function ${a} returned an object with an unknown key \`{ ${_} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:i,routeParams:d}}function ge(e,t){l(t.endsWith(" should")),g(e,"routeParams")&&(c(b(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function _e(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:a,hookFilePath:r}=t;l(r.startsWith("/")),l(!a.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${a} }\` of ${r}`}c(Ce(e),`${n} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),y(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function qt(e,t){const n=e.filePath,a="onBeforeRoute";let r;try{r=await e.onBeforeRoute(t)}catch(i){return{hookError:i,hookName:a,hookFilePath:n}}const o=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(r==null||Ht(r,["pageContext"])&&g(r,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return{};if(c(g(r,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),g(r.pageContext,"_pageId")&&!g(r.pageContext,"_pageId","null")){const i=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(g(r.pageContext,"_pageId","string"),`${i} a string or \`null\``),c(t._allPageIds.includes(r.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(d=>`'${d}'`).join(", ")}]\`.`)}g(r.pageContext,"routeParams")&&ge(r.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const s=r.pageContext;return _e(s,{hook:{hookFilePath:n,hookName:a}}),{pageContextProvidedByUser:s}}async function Zt(e){let t=null;const n=[];await Promise.all(e._pageFilesAll.filter(s=>s.fileType===".page.route").map(s=>{var i;return(i=s.loadFile)===null||i===void 0?void 0:i.call(s)})),e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){c(g(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:d}=i;t={filePath:s,onBeforeRoute:d}}"filesystemRoutingRoot"in i&&(c(g(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),c(g(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:tn(s),routeRoot:i.filesystemRoutingRoot}))});const a=e._allPageIds,r=[];return a.filter(s=>!Le(s)).filter(s=>{const i=en(s,e._pageFilesAll);if(!i)return!0;const{filePath:d,fileExports:_}=i;l(_),c("default"in _,`${d} should have a default export.`),c(g(_,"default","string")||g(_,"default","function"),`The default export of ${d} should be a string or a function.`),c(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in _)||g(_,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${d} should be a boolean.`);const v=_.default;return r.push({pageId:s,filesystemRoute:null,pageRouteFile:{filePath:d,fileExports:_,routeValue:v}}),!1}).forEach(s=>{const i=Mt(s,n);l(i.startsWith("/")),l(!i.endsWith("/")||i==="/"),r.push({pageId:s,filesystemRoute:i,pageRouteFile:null})}),{pageRoutes:r,onBeforeRouteHook:t}}function en(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function tn(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=O(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}var I;function ee(...e){var t,n;I||(I=(n=(t=globalThis).__vite_plugin_ssr_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),I&&I(...e)}async function pe(e){B(e);const{pageRoutes:t,onBeforeRouteHook:n}=await Zt(e);ee("Pages routes:",t.map(m=>({pageId:m.pageId,filesystemRoute:m.filesystemRoute,pageRouteFile:m.pageRouteFile&&{filePath:m.pageRouteFile.filePath,routeValue:m.pageRouteFile.routeValue}})));const a={};if(n){const m=await qt(n,e);if("hookError"in m)return m;if("pageContextProvidedByUser"in m){if(f(a,m.pageContextProvidedByUser),g(a,"_pageId","string")||g(a,"_pageId","null"))return g(a,"routeParams")?l(g(a,"routeParams","object")):f(a,{routeParams:{}}),f(a,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:a};f(e,a)}}f(a,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),c(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;l(o.startsWith("/"));const s=[],i=[];if(await Promise.all(t.map(async m=>{const{pageId:p,filesystemRoute:w,pageRouteFile:A}=m;if(A){const x=A.fileExports,E=A.filePath;if(g(x,"default","string")){const h=x.default;c(h.startsWith("/"),`A Route String should start with a leading \`/\` but \`${E}\` has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`);const S=K(h,o);if(S){const{routeParams:D}=S;i.push({pageId:p,routeString:h,routeParams:D,routeType:"STRING"})}}else if(g(x,"default","function")){const h=await Xt(x,o,e,E);if(h&&"hookError"in h){s.push(h);return}if(h){const{routeParams:S,precedence:D}=h;i.push({pageId:p,precedence:D,routeParams:S,routeType:"FUNCTION"})}}else l(!1)}else{const x=Gt(w,o);if(x){const{routeParams:E}=x;i.push({pageId:p,routeParams:E,routeType:"FILESYSTEM"})}}})),s.length>0)return s[0];zt(i);const d=i[0];if(ee(`Route matches for URL \`${o}\` (in precedence order):`,i),f(a,{_routeMatches:i}),!d)return f(a,{_pageId:null,routeParams:{}}),{pageContextAddendum:a};const{pageId:_,routeParams:v}=d;return l(b(v)),f(a,{_pageId:_,routeParams:v}),{pageContextAddendum:a}}const G={},fe={},nn={},k={},me={},rn=!0,sn={"/junk/code-blocks.page.mdx":()=>u(()=>import("./junk/code-blocks.page.b385619c.js"),["assets/junk/code-blocks.page.b385619c.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/junk/cpp-guidelines.page.mdx":()=>u(()=>import("./junk/cpp-guidelines.page.9aba83fa.js"),["assets/junk/cpp-guidelines.page.9aba83fa.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/junk/dummy-page.page.mdx":()=>u(()=>import("./junk/dummy-page.page.4159a86b.js"),["assets/junk/dummy-page.page.4159a86b.js","assets/chunk-b0d73203.js"]),"/junk/inline-code.page.mdx":()=>u(()=>import("./junk/inline-code.page.f8b4d101.js"),["assets/junk/inline-code.page.f8b4d101.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/advanced-cpp-tutorial.page.mdx":()=>u(()=>import("./pages/docs/advanced-cpp-tutorial.page.b9aaa563.js"),["assets/pages/docs/advanced-cpp-tutorial.page.b9aaa563.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/code-readability-guidelines.page.mdx":()=>u(()=>import("./pages/docs/code-readability-guidelines.page.4971a247.js"),["assets/pages/docs/code-readability-guidelines.page.4971a247.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/collaboration-policy.page.mdx":()=>u(()=>import("./pages/docs/collaboration-policy.page.401118ec.js"),["assets/pages/docs/collaboration-policy.page.401118ec.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/course-missive.page.mdx":()=>u(()=>import("./pages/docs/course-missive.page.9c7d73ca.js"),["assets/pages/docs/course-missive.page.9c7d73ca.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/demos.page.mdx":()=>u(()=>import("./pages/docs/demos.page.721a8a62.js"),["assets/pages/docs/demos.page.721a8a62.js","assets/chunk-b0d73203.js"]),"/pages/docs/dockerment.page.mdx":()=>u(()=>import("./pages/docs/dockerment.page.d577a333.js"),["assets/pages/docs/dockerment.page.d577a333.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/github-gradescope-guide.page.mdx":()=>u(()=>import("./pages/docs/github-gradescope-guide.page.c83cd8d1.js"),["assets/pages/docs/github-gradescope-guide.page.c83cd8d1.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/docs/index.page.mdx":()=>u(()=>import("./pages/docs/index.page.fd700ef1.js"),["assets/pages/docs/index.page.fd700ef1.js","assets/chunk-b0d73203.js"]),"/pages/docs/preventing-memory-leaks.page.mdx":()=>u(()=>import("./pages/docs/preventing-memory-leaks.page.de8fa0ae.js"),["assets/pages/docs/preventing-memory-leaks.page.de8fa0ae.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/docs/scenefile-documentation.page.mdx":()=>u(()=>import("./pages/docs/scenefile-documentation.page.3b113b3a.js"),["assets/pages/docs/scenefile-documentation.page.3b113b3a.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/docs/xcode-CLT-installation-guide.page.mdx":()=>u(()=>import("./pages/docs/xcode-CLT-installation-guide.page.f0c0a0a0.js"),["assets/pages/docs/xcode-CLT-installation-guide.page.f0c0a0a0.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/index.page.mdx":()=>u(()=>import("./pages/index.page.0baf8f5d.js"),["assets/pages/index.page.0baf8f5d.js","assets/chunk-b0d73203.js"]),"/pages/labs/index.page.mdx":()=>u(()=>import("./pages/labs/index.page.876b8dae.js"),["assets/pages/labs/index.page.876b8dae.js","assets/chunk-b0d73203.js"]),"/pages/labs/lab1.page.mdx":()=>u(()=>import("./pages/labs/lab1.page.1c85bbd3.js"),["assets/pages/labs/lab1.page.1c85bbd3.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab10.page.mdx":()=>u(()=>import("./pages/labs/lab10.page.5ac2d666.js"),["assets/pages/labs/lab10.page.5ac2d666.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab11.page.mdx":()=>u(()=>import("./pages/labs/lab11.page.76b0b4e9.js"),["assets/pages/labs/lab11.page.76b0b4e9.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab2.page.mdx":()=>u(()=>import("./pages/labs/lab2.page.00aee963.js"),["assets/pages/labs/lab2.page.00aee963.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab3.page.mdx":()=>u(()=>import("./pages/labs/lab3.page.c9403b6e.js"),["assets/pages/labs/lab3.page.c9403b6e.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab4.page.mdx":()=>u(()=>import("./pages/labs/lab4.page.42e33734.js"),["assets/pages/labs/lab4.page.42e33734.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab5.page.mdx":()=>u(()=>import("./pages/labs/lab5.page.4fa1eacc.js"),["assets/pages/labs/lab5.page.4fa1eacc.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab6.page.mdx":()=>u(()=>import("./pages/labs/lab6.page.84309b9a.js"),["assets/pages/labs/lab6.page.84309b9a.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab7-get-normals.page.mdx":()=>u(()=>import("./pages/labs/lab7-get-normals.page.9242340a.js"),["assets/pages/labs/lab7-get-normals.page.9242340a.js","assets/chunk-b0d73203.js"]),"/pages/labs/lab7.page.mdx":()=>u(()=>import("./pages/labs/lab7.page.101b1fb1.js"),["assets/pages/labs/lab7.page.101b1fb1.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab8.page.mdx":()=>u(()=>import("./pages/labs/lab8.page.e756ab5b.js"),["assets/pages/labs/lab8.page.e756ab5b.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/labs/lab9.page.mdx":()=>u(()=>import("./pages/labs/lab9.page.37c1b280.js"),["assets/pages/labs/lab9.page.37c1b280.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/lectures.page.mdx":()=>u(()=>import("./pages/lectures.page.249ef757.js"),["assets/pages/lectures.page.249ef757.js","assets/chunk-b0d73203.js"]),"/pages/projects/2D/1-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/2D/1-algo-ans.page.724ae6b7.js"),["assets/pages/projects/2D/1-algo-ans.page.724ae6b7.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/projects/2D/1-algo.page.mdx":()=>u(()=>import("./pages/projects/2D/1-algo.page.db00db96.js"),["assets/pages/projects/2D/1-algo.page.db00db96.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/projects/2D/1.page.mdx":()=>u(()=>import("./pages/projects/2D/1.page.6feba91a.js"),["assets/pages/projects/2D/1.page.6feba91a.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/2D/2-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/2D/2-algo-ans.page.d371975b.js"),["assets/pages/projects/2D/2-algo-ans.page.d371975b.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/2D/2-algo.page.mdx":()=>u(()=>import("./pages/projects/2D/2-algo.page.a4b95289.js"),["assets/pages/projects/2D/2-algo.page.a4b95289.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/2D/2.page.mdx":()=>u(()=>import("./pages/projects/2D/2.page.2bdbe3e6.js"),["assets/pages/projects/2D/2.page.2bdbe3e6.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/final/index.page.mdx":()=>u(()=>import("./pages/projects/final/index.page.abfe55f6.js"),["assets/pages/projects/final/index.page.abfe55f6.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js"]),"/pages/projects/index.page.mdx":()=>u(()=>import("./pages/projects/index.page.e915a6b7.js"),["assets/pages/projects/index.page.e915a6b7.js","assets/chunk-b0d73203.js"]),"/pages/projects/ray/1-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/ray/1-algo-ans.page.d24320b7.js"),["assets/pages/projects/ray/1-algo-ans.page.d24320b7.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js","assets/chunk-e3efcf8b.js"]),"/pages/projects/ray/1-algo.page.mdx":()=>u(()=>import("./pages/projects/ray/1-algo.page.4afb00ac.js"),["assets/pages/projects/ray/1-algo.page.4afb00ac.js","assets/chunk-b0d73203.js","assets/chunk-82f9daf4.js","assets/chunk-e3efcf8b.js"]),"/pages/projects/ray/1.page.mdx":()=>u(()=>import("./pages/projects/ray/1.page.8bb9328c.js"),["assets/pages/projects/ray/1.page.8bb9328c.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/ray/2-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/ray/2-algo-ans.page.516f1c7b.js"),["assets/pages/projects/ray/2-algo-ans.page.516f1c7b.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/ray/2-algo.ans.page.mdx":()=>u(()=>import("./pages/projects/ray/2-algo.ans.page.c4a3b13f.js"),["assets/pages/projects/ray/2-algo.ans.page.c4a3b13f.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/ray/2-algo.page.mdx":()=>u(()=>import("./pages/projects/ray/2-algo.page.21c308cf.js"),["assets/pages/projects/ray/2-algo.page.21c308cf.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/ray/2.page.mdx":()=>u(()=>import("./pages/projects/ray/2.page.90e53d09.js"),["assets/pages/projects/ray/2.page.90e53d09.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/realtime/1-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/realtime/1-algo-ans.page.755056fb.js"),["assets/pages/projects/realtime/1-algo-ans.page.755056fb.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/realtime/1-algo.page.mdx":()=>u(()=>import("./pages/projects/realtime/1-algo.page.1cfe8c2a.js"),["assets/pages/projects/realtime/1-algo.page.1cfe8c2a.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"]),"/pages/projects/realtime/1.page.mdx":()=>u(()=>import("./pages/projects/realtime/1.page.ec24fca9.js"),["assets/pages/projects/realtime/1.page.ec24fca9.js","assets/chunk-b0d73203.js","assets/chunk-e3efcf8b.js","assets/chunk-82f9daf4.js"])},on={...sn};G[".page"]=on;const an={},ln={...an};fe[".page.route"]=ln;const un={"/renderer/_default.page.client.jsx":()=>u(()=>import("./renderer/_default.page.client.b5b9245b.js"),["assets/renderer/_default.page.client.b5b9245b.js","assets/index.5c15a221.css","assets/chunk-b0d73203.js"])},cn={...un};G[".page.client"]=cn;const dn={"/renderer/_default.page.client.jsx":ke},gn={...dn};k[".page.client"]=gn;const _n={"/renderer/_default.page.server.jsx":De},pn={..._n};k[".page.server"]=pn;const fn={"/junk/code-blocks.page.mdx":Ve,"/junk/cpp-guidelines.page.mdx":We,"/junk/dummy-page.page.mdx":$e,"/junk/inline-code.page.mdx":Ne,"/pages/docs/advanced-cpp-tutorial.page.mdx":He,"/pages/docs/code-readability-guidelines.page.mdx":Ue,"/pages/docs/collaboration-policy.page.mdx":Be,"/pages/docs/course-missive.page.mdx":ze,"/pages/docs/demos.page.mdx":Ke,"/pages/docs/dockerment.page.mdx":Ge,"/pages/docs/github-gradescope-guide.page.mdx":Ye,"/pages/docs/index.page.mdx":Je,"/pages/docs/preventing-memory-leaks.page.mdx":Me,"/pages/docs/scenefile-documentation.page.mdx":Qe,"/pages/docs/xcode-CLT-installation-guide.page.mdx":Xe,"/pages/index.page.mdx":qe,"/pages/labs/index.page.mdx":Ze,"/pages/labs/lab1.page.mdx":et,"/pages/labs/lab10.page.mdx":tt,"/pages/labs/lab11.page.mdx":nt,"/pages/labs/lab2.page.mdx":rt,"/pages/labs/lab3.page.mdx":st,"/pages/labs/lab4.page.mdx":ot,"/pages/labs/lab5.page.mdx":at,"/pages/labs/lab6.page.mdx":it,"/pages/labs/lab7-get-normals.page.mdx":lt,"/pages/labs/lab7.page.mdx":ut,"/pages/labs/lab8.page.mdx":ct,"/pages/labs/lab9.page.mdx":dt,"/pages/lectures.page.mdx":gt,"/pages/projects/2D/1-algo-ans.page.mdx":_t,"/pages/projects/2D/1-algo.page.mdx":pt,"/pages/projects/2D/1.page.mdx":ft,"/pages/projects/2D/2-algo-ans.page.mdx":mt,"/pages/projects/2D/2-algo.page.mdx":ht,"/pages/projects/2D/2.page.mdx":xt,"/pages/projects/final/index.page.mdx":vt,"/pages/projects/index.page.mdx":bt,"/pages/projects/ray/1-algo-ans.page.mdx":yt,"/pages/projects/ray/1-algo.page.mdx":Pt,"/pages/projects/ray/1.page.mdx":Et,"/pages/projects/ray/2-algo-ans.page.mdx":Rt,"/pages/projects/ray/2-algo.ans.page.mdx":Ot,"/pages/projects/ray/2-algo.page.mdx":At,"/pages/projects/ray/2.page.mdx":Tt,"/pages/projects/realtime/1-algo-ans.page.mdx":wt,"/pages/projects/realtime/1-algo.page.mdx":St,"/pages/projects/realtime/1.page.mdx":It},mn={...fn};k[".page"]=mn;const hn={"/renderer/_default.page.server.jsx":()=>u(()=>import("./chunk-c55c22c8.js"),["assets/chunk-c55c22c8.js","assets/index.5c15a221.css"])},xn={...hn};me[".page.server"]=xn;var vn=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:G,pageFilesEager:fe,pageFilesExportNamesLazy:nn,pageFilesExportNamesEager:k,neverLoaded:me,isGeneratedFile:rn},Symbol.toStringTag,{value:"Module"}));Ft(vn);function he(){const e="/";return bn(e)?"/":e}function bn(e){return!!e.startsWith("http")}function xe(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function yn(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function Pn(e){return L(e,"/").pathname}function Y(e){window.location.href=e}const En="/";function Rn(e,t,n){l(t!==".pageContext.json"||n===!0);const{pathnameOriginal:a,searchOriginal:r,hashOriginal:o}=L(e,En);e.startsWith("/")&&l(e===`${a}${r||""}${o||""}`,{url:e});let s=a;if(n)s.endsWith("/")&&(s=O(s,0,-1)),l(!s.endsWith("/")),s===""&&(s="/index");else{const d=a.endsWith("/")?"":"/";s=s+`${d}index`}return`${s}${t}${r||""}${o||""}`}function On(){return!!An()}function An(){return!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}const Tn=P();let te=!1;const ve={markNavigationChange(){te=!0},get noNavigationChangeYet(){return!te&&this.isOriginalUrl(P())},isOriginalUrl(e){return e===Tn}};function be(e,t){return jt(e,t)}async function wn(e,t){const a=be(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(a.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:a.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function Sn(e,t,n,a){l(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${a}`;c(e==null||b(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(In(e,n,r),"pageContext"in e&&_e(e.pageContext,{hook:{hookName:t,hookFilePath:a}}))}function In(e,t,n){const a=[],r=Object.keys(e);for(const o of r)t.includes(o)||a.push(o);c(a.length===0,[n,"returned an object with unknown keys",Q(a)+".","Only following keys are allowed:",Q(t)+"."].join(" "))}async function Fn(e){return e._isFirstRenderAttempt&&ve.isOriginalUrl(e.url)?jn(e):Cn(e)}async function jn(e){const t=Ct();ye(t),f(t,{isHydration:!0,_comesDirectlyFromServer:!0});{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)throw J(),n.err;const{exports:a,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;f(t,{exports:a,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return{pageContextAddendum:t}}async function Cn(e){const t={isHydration:!1};f(t,await kn(e));{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)return J(),Y(e.url),{errorFetchingStaticAssets:!0};const{exports:a,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;f(t,{exports:a,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return f(t,await Ln({...e,...t})),l([!0,!1].includes(t._comesDirectlyFromServer)),{pageContextAddendum:t}}async function Ln(e){const t=Lt(e,"onBeforeRender");if(t){const a=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=ie({...e,...r}),s=await a(o);Sn(s,"onBeforeRender",["pageContext"],t.filePath);const i=s==null?void 0:s.pageContext;return f(r,i),r}else if((await wn(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const a=await Vn(e),r={};return Object.assign(r,a),f(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:a}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function kn(e){const t=await pe(e);if("hookError"in t)throw t.hookError;const n=t.pageContextAddendum;return n._pageId===null?(setTimeout(()=>{Dn(e)},0),c(!1,`[404] Page ${e.url} does not exist. (\`vite-plugin-ssr\` will now server-side route to \`${e.url}\`.)`)):l(g(n,"_pageId","string")),n}function Dn(e){window.location.pathname=e.url}async function Vn(e){const t=Rn(e.url,".pageContext.json",!0),n=await fetch(t);l(n.status!==404);{const s=n.headers.get("content-type");c(s&&s.includes("application/json"),`Wrong HTTP Response Header \`content-type\` value for URL ${t} (it should be \`application/json\` but we got \`${s}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const a=await n.text(),r=kt(a);if(l(!("pageContext404PageDoesNotExist"in r)),"serverSideError"in r)throw Dt("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(g(r,"pageContext"));const o=r.pageContext;return l(b(o)),l(g(o,"_pageId","string")),ye(o),o}const ne=["urlPathname","urlParsed"],Wn=["Page","pageExports","exports"];function ye(e){[...Wn,...ne].forEach(n=>{n in e&&(ne.includes(n)?(l(n.startsWith("url")),y(!1,`\`pageContext.${n}\` is already available in the browser when using \`useClientRouter()\`; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):y(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}let V;async function Pe(){return V||(V=await $n()),V}async function $n(){const e=he();le(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:a}=Vt();return f(t,{_pageFilesAll:n,_allPageIds:a}),t}async function Ee(e){const t=await Pe(),n={url:e,...t},a=t._pageFilesAll;B(n);const r=await pe(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:a};const o=r.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:a}:{pageId:null,pageFilesAll:a}}function C(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function Nn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:a(),isClientRouting:o()};function a(){return t.some(d=>d.pageId===n&&d.fileType===".page")?(r(),!1):t.some(d=>d.pageId===n&&d.fileType===".page.server")}function r(){const s=e.some(i=>C(i).includes("render"));c(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((i,d)=>` (${d+1}): ${i.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(i=>C(i).includes("clientRouting"))}}function Hn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:a}){let r=[];const o=t.filter(i=>!e.includes(i)),s=[];if(s.push(...e.map(i=>({id:i.filePath,onlyAssets:!1}))),s.push(...o.map(i=>({id:i.filePath,onlyAssets:!0}))),n)r=e.map(i=>i.filePath);else{const i=a?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";s.push({id:i,onlyAssets:!1}),r=[i]}return{clientEntries:r,clientDependencies:s}}function Un(e,t){let n=ue(e,t);const a=be(e,t),{isHtmlOnly:r,isClientRouting:o}=Nn({pageFilesClientSide:n,pageFilesServerSide:a,pageId:t});r&&(n=n.filter(d=>d.fileType===".page.client"&&!C(d).includes("render")),n=zn(n));const{clientEntries:s,clientDependencies:i}=Hn({pageFilesClientSide:n,pageFilesServerSide:a,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:s,clientDependencies:i,pageFilesClientSide:n,pageFilesServerSide:a}}async function Bn(e,t,{sharedPageFilesAlreadyLoaded:n}){const a=ue(e,t);await Promise.all(a.map(async r=>{var o;l(r.fileType===".page"||r.fileType===".page.client"),!(n&&r.fileType===".page")&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function zn(e){const t=[];for(const n of e)if(t.push(n),C(n).includes("overrideDefaultPages"))break;return t}async function Re(e){const{pageId:t,pageFilesAll:n}=await Ee(e);if(!t)return!1;await Bn(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:a,isClientRouting:r}=Un(n,t);return!a&&r}function Oe(e){const t=e.getAttribute("href");return!!(t===null||t===""||xe(t)||Kn(e)||Gn(t)||!Yn(t)||!Wt(t))}function Kn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Gn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Yn(e){const t=he();le(t);const{hasBaseUrl:n}=L(e,t);return n}function Jn(e,t){const n=Mn(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function Mn(e,t){let n=Qn(t),a=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&c(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";c(b(r),o);const s=Object.keys(r);c(s.length===1&&s[0]==="when",o);const{when:i}=r;if(i==="HOVER"||i==="VIEWPORT")return{when:i};c(!1,o)}return{when:"HOVER"}})();return a&&a.when==="VIEWPORT"&&!e._isProduction&&(ce(!1,"Viewport prefetching is disabled in development, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),a={when:"HOVER"}),a}function Qn(e){let t=e.getAttribute("data-prefetch");if(y(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const Ae=new Map;function Te(e){const t=Se(e);return Ae.has(t)}function we(e){const t=Se(e);Ae.set(t,!0)}function Se(e){return Pn(e)}const re=new Map;async function W(e){if(c(!xe(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),Te(e))return;we(e);const{pageId:t,pageFilesAll:n}=await Ee(e);if(t){const a=await U(n,t);"errorFetchingStaticAssets"in a&&J()}}function Xn(e){we(e.url),[...document.getElementsByTagName("A")].forEach(async n=>{if(re.has(n))return;re.set(n,!0);const a=n.getAttribute("href");if(Oe(n)||(l(a),!await Re(a))||Te(a))return;const r=Jn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>W(a)),n.addEventListener("touchstart",()=>W(a),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(W(a),o.disconnect())})});o.observe(n)}}else return})}const qn="__vite_plugin_ssr__navigate";lr();let $,Ie=!1;function J(){Ie=!0,ce(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Zn(){ar(),er((r,{keepScrollPosition:o})=>{a(o?"preserve-scroll":"scroll-to-top-or-hash",r)}),tr(r=>{a(r)}),globalThis[qn]=async(r,{keepScrollPosition:o,overwriteLastHistoryEntry:s})=>{await a(o?"preserve-scroll":"scroll-to-top-or-hash",r,s)};let e=0,t,n=!1;a("preserve-scroll");return;async function a(r,o=P(),s=!1){var i,d;if(Ie){Y(o);return}const _=++e;l(_>=1),_>1&&n===!1&&($&&$(),n=!0);const v=()=>On()&&_===1?!1:_!==e,m=await Pe();if(v())return;const p={url:o,_isFirstRenderAttempt:_===1,...m};B(p);const w=await Fn(p);if("errorFetchingStaticAssets"in w)return;const{pageContextAddendum:A}=w;v()||(f(p,A),"onPageTransitionStart"in p.exports&&(c(g(p.exports,"onPageTransitionStart","function"),"The `export { onPageTransitionStart }` of "+p.exportsAll.onPageTransitionStart[0]._filePath+" should be a function."),$=p.exports.onPageTransitionStart),t&&await t,!v()&&(nr(o,s),ve.markNavigationChange(),l(t===void 0),t=(async()=>{const x=ie(p);$t(p);const E=await p.exports.render(x);c(E===void 0,"`export { render }` of "+p.exportsAll.render[0]._filePath+" should not return any value"),l(p.url===o),Xn(p)})(),await t,t=void 0,p._isFirstRenderAttempt?(Nt(p,"onHydrationEnd"),await((d=(i=p.exports).onHydrationEnd)===null||d===void 0?void 0:d.call(i,p))):_===e&&(p.exports.onPageTransitionEnd&&(c(g(p.exports,"onPageTransitionEnd","function"),"The `export { onPageTransitionEnd }` of "+p.exportsAll.onPageTransitionEnd[0]._filePath+" should be a function."),p.exports.onPageTransitionEnd()),n=!1),sr(r),M(),Fe=!0))}}function er(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=a(r.target);if(!o)return;const s=o.getAttribute("href");if(Oe(o))return;if(l(s),r.preventDefault(),!await Re(s)){Y(s);return}const i=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:i})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function a(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}let H=P({withoutHash:!0});function tr(e){window.addEventListener("popstate",t=>{const n=P({withoutHash:!0});if(n==H)return;H=n;const r=or(t.state)||"scroll-to-top-or-hash";e(r)})}function nr(e,t){P()!==e&&(M(),t?window.history.replaceState(void 0,"",e):window.history.pushState(void 0,"",e),H=P({withoutHash:!0}))}function rr(){return{x:window.scrollX,y:window.scrollY}}function sr(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=ir();if(r&&r!=="top"){const o=document.getElementById(r)||document.getElementsByName(r)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;const{x:n,y:a}=t;window.scrollTo(n,a)}function or(e=window.history.state){return g(e,"scrollPosition")?e.scrollPosition:null}function ar(){window.addEventListener("scroll",yn(se,Math.ceil(1e3/3)),{passive:!0}),je(se)}function se(){const e=rr();window.history.replaceState({scrollPosition:e},"")}function ir(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}let Fe=!1;function lr(){oe(),je(oe),ur(()=>Fe&&M())}function M(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function je(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function ur(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}Zn();