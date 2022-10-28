import{a as l,i as ie,p as L,b as y,h as g,c,m as E,d as F,s as O,e as je,f as Le,o as f,_ as u,g as ke,j as De,k as Ve,l as We,n as $e,q as Ne,r as He,t as Ue,u as Be,v as ze,w as Ke,x as Ge,y as Ye,z as Je,A as Me,B as Qe,C as Xe,D as qe,E as Ze,F as et,G as tt,H as nt,I as rt,J as st,K as ot,L as it,M as at,N as lt,O as ut,P as ct,Q as dt,R as gt,S as pt,T as _t,U as ft,V as ht,W as mt,X as xt,Y as vt,Z as bt,$ as yt,a0 as Pt,a1 as Rt,a2 as P,a3 as Et,a4 as Ot,a5 as U,a6 as wt,a7 as ae,a8 as At,a9 as St,aa as le,ab as Tt,ac as ue,ad as It,ae as ce,af as Ft,ag as Ct}from"./chunk-6dbc2049.js";function b(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Q(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function B(e){var t,n;"urlPathname"in e?(l(((t=Object.getOwnPropertyDescriptor(e,"urlPathname"))===null||t===void 0?void 0:t.get)===X),l(((n=Object.getOwnPropertyDescriptor(e,"urlParsed"))===null||n===void 0?void 0:n.get)===q)):(Object.defineProperty(e,"urlPathname",{get:X,enumerable:!0,configurable:!0}),Object.defineProperty(e,"urlParsed",{get:q,enumerable:!0,configurable:!0}))}function de(e){let{url:t,_baseUrl:n,_urlProcessor:i}=e;return l(n.startsWith("/")),l(i===null||ie(i)),i!==null&&(t=i(t)),L(t,n)}function X(){const{pathname:e}=de(this),t=e;return l(t.startsWith("/")),t}function q(){const e=de(this),{origin:t,pathname:n,pathnameOriginal:i,search:r,searchAll:o,searchOriginal:s,hash:a,hashOriginal:d}=e;return{origin:t,pathname:n,pathnameOriginal:i,search:r,searchAll:o,searchOriginal:s,hash:a,hashOriginal:d,get hashString(){return y(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0}),d},get searchString(){return y(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0}),s}}}function jt(e,t){if(!b(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function Lt(e){return g(e,"then")&&ie(e.then)}const z="@",N=":";function K(e,t){c(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),i=t.split("/"),r={};kt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,i.length);o++){const s=n[o],a=i[o];if(s==="*")return r["*"]=i.slice(Math.max(1,o)).join("/"),{routeParams:r};if(s&&C(s)){if(y(!s.startsWith(N),`Outdated route string \`${e}\`, use \`${e.split(N).join(z)}\` instead.`,{onlyOnce:!0}),!a)return null;r[s.slice(1)]=a}else if((s||"")!==(a||""))return null}return{routeParams:r}}function kt(e){const t=e.split("*").length-1;c(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),c(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function A(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(C(s))break;n++}const i=t.filter(s=>!C(s)).length,r=t.filter(s=>C(s)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:i,isCatchAll:o}}function C(e){return e.startsWith(z)||e.startsWith(N)}function Z(e){const n=K(e,e);return n!==null&&Object.keys(n.routeParams).length===0}function Dt(e){e.sort(Vt).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(E(t=>t.routeType==="STRING"&&Z(t.routeString)===!1)).sort(E(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(E(t=>t.routeType==="STRING"&&Z(t.routeString)===!0)).sort(E(t=>t.routeType==="FILESYSTEM")).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Vt(e,t){var n,i;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(i=t.precedence)!==null&&i!==void 0?i:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=F(s=>A(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(s=>A(s).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=F(s=>A(s).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(A(t.routeString).isCatchAll)return-1;if(A(e.routeString).isCatchAll)return 1}return 0}function Wt(e,t){return Ut(e)?K(e,t):$t(e,t)}function $t(e,t){return t=Nt(t),l(t.startsWith("/")),l(e.startsWith("/")),l(!t.endsWith("/")||t==="/"),l(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function Nt(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=O(e,0,-1);return e===""?"/":e}function Ht(e,t){const i=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(F(({filesystemRoot:o})=>o.length))[0];let r;if(i){const{filesystemRoot:o,routeRoot:s}=i,a={pageId:e,filesystemRoot:o,routeRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),a),l(e.startsWith(o),a),o!=="/"?(l(!o.endsWith("/"),a),r=O(e,o.length,0)):r=e,l(r.startsWith("/"),a),r=s+(s.endsWith("/")?"":"/")+O(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=O(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}function Ut(e){return e.includes(z)}async function Bt(e,t,n,i){const r=i,o="route()";let s;try{s=e.default({url:t,pageContext:n})}catch(p){return{hookError:p,hookName:o,hookFilePath:r}}c(!Lt(s)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${i} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);try{s=await s}catch(p){return{hookError:p,hookName:o,hookFilePath:r}}if(s===!1)return null;s===!0&&(s={}),c(b(s),`The Route Function ${i} should return a boolean or a plain JavaScript object, instead it returns \`${g(s,"constructor")?s.constructor:s}\`.`);let a=null;g(s,"precedence")&&(a=s.precedence,c(typeof a=="number",`The \`precedence\` value returned by the Route Function ${i} should be a number.`)),c(!("pageContext"in s),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),ge(s,`The \`routeParams\` object returned by the Route Function ${i} should`);const d=s.routeParams||{};return l(b(d)),Object.keys(s).forEach(p=>{c(p==="match"||p==="routeParams"||p==="precedence",`The Route Function ${i} returned an object with an unknown key \`{ ${p} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:a,routeParams:d}}function ge(e,t){l(t.endsWith(" should")),g(e,"routeParams")&&(c(b(e.routeParams),`${t} be a plain JavaScript object.`),c(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function pe(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:i,hookFilePath:r}=t;l(r.startsWith("/")),l(!i.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${i} }\` of ${r}`}c(je(e),`${n} should be an object.`),c(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),y(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function zt(e,t){const n=e.filePath,i="onBeforeRoute";let r;try{r=await e.onBeforeRoute(t)}catch(a){return{hookError:a,hookName:i,hookFilePath:n}}const o=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(c(r==null||jt(r,["pageContext"])&&g(r,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return{};if(c(g(r,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),g(r.pageContext,"_pageId")&&!g(r.pageContext,"_pageId","null")){const a=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;c(g(r.pageContext,"_pageId","string"),`${a} a string or \`null\``),c(t._allPageIds.includes(r.pageContext._pageId),`${a} one of following values: \`[${t._allPageIds.map(d=>`'${d}'`).join(", ")}]\`.`)}g(r.pageContext,"routeParams")&&ge(r.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const s=r.pageContext;return pe(s,{hook:{hookFilePath:n,hookName:i}}),{pageContextProvidedByUser:s}}async function Kt(e){let t=null;const n=[];await Promise.all(e._pageFilesAll.filter(s=>s.fileType===".page.route").map(s=>{var a;return(a=s.loadFile)===null||a===void 0?void 0:a.call(s)})),e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:a})=>{if(l(a),"onBeforeRoute"in a){c(g(a,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:d}=a;t={filePath:s,onBeforeRoute:d}}"filesystemRoutingRoot"in a&&(c(g(a,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),c(g(a,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${a.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:Yt(s),routeRoot:a.filesystemRoutingRoot}))});const i=e._allPageIds,r=[];return i.filter(s=>!Le(s)).filter(s=>{const a=Gt(s,e._pageFilesAll);if(!a)return!0;const{filePath:d,fileExports:p}=a;l(p),c("default"in p,`${d} should have a default export.`),c(g(p,"default","string")||g(p,"default","function"),`The default export of ${d} should be a string or a function.`),c(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in p)||g(p,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${d} should be a boolean.`);const v=p.default;return r.push({pageId:s,filesystemRoute:null,pageRouteFile:{filePath:d,fileExports:p,routeValue:v}}),!1}).forEach(s=>{const a=Ht(s,n);l(a.startsWith("/")),l(!a.endsWith("/")||a==="/"),r.push({pageId:s,filesystemRoute:a,pageRouteFile:null})}),{pageRoutes:r,onBeforeRouteHook:t}}function Gt(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function Yt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=O(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}var I;function ee(...e){var t,n;I||(I=(n=(t=globalThis).__vite_plugin_ssr_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),I&&I(...e)}async function _e(e){B(e);const{pageRoutes:t,onBeforeRouteHook:n}=await Kt(e);ee("Pages routes:",t.map(h=>({pageId:h.pageId,filesystemRoute:h.filesystemRoute,pageRouteFile:h.pageRouteFile&&{filePath:h.pageRouteFile.filePath,routeValue:h.pageRouteFile.routeValue}})));const i={};if(n){const h=await zt(n,e);if("hookError"in h)return h;if("pageContextProvidedByUser"in h){if(f(i,h.pageContextProvidedByUser),g(i,"_pageId","string")||g(i,"_pageId","null"))return g(i,"routeParams")?l(g(i,"routeParams","object")):f(i,{routeParams:{}}),f(i,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:i};f(e,i)}}f(i,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),c(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;l(o.startsWith("/"));const s=[],a=[];if(await Promise.all(t.map(async h=>{const{pageId:_,filesystemRoute:S,pageRouteFile:w}=h;if(w){const x=w.fileExports,R=w.filePath;if(g(x,"default","string")){const m=x.default;c(m.startsWith("/"),`A Route String should start with a leading \`/\` but \`${R}\` has \`export default '${m}'\`. Make sure to \`export default '/${m}'\` instead.`);const T=K(m,o);if(T){const{routeParams:D}=T;a.push({pageId:_,routeString:m,routeParams:D,routeType:"STRING"})}}else if(g(x,"default","function")){const m=await Bt(x,o,e,R);if(m&&"hookError"in m){s.push(m);return}if(m){const{routeParams:T,precedence:D}=m;a.push({pageId:_,precedence:D,routeParams:T,routeType:"FUNCTION"})}}else l(!1)}else{const x=Wt(S,o);if(x){const{routeParams:R}=x;a.push({pageId:_,routeParams:R,routeType:"FILESYSTEM"})}}})),s.length>0)return s[0];Dt(a);const d=a[0];if(ee(`Route matches for URL \`${o}\` (in precedence order):`,a),f(i,{_routeMatches:a}),!d)return f(i,{_pageId:null,routeParams:{}}),{pageContextAddendum:i};const{pageId:p,routeParams:v}=d;return l(b(v)),f(i,{_pageId:p,routeParams:v}),{pageContextAddendum:i}}const G={},fe={},Jt={},k={},he={},Mt=!0,Qt={"/junk/code-blocks.page.mdx":()=>u(()=>import("./junk/code-blocks.page.a88c773a.js"),["assets/junk/code-blocks.page.a88c773a.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/junk/cpp-guidelines.page.mdx":()=>u(()=>import("./junk/cpp-guidelines.page.5b992f54.js"),["assets/junk/cpp-guidelines.page.5b992f54.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/junk/dummy-page.page.mdx":()=>u(()=>import("./junk/dummy-page.page.56156449.js"),["assets/junk/dummy-page.page.56156449.js","assets/chunk-37395b21.js"]),"/junk/inline-code.page.mdx":()=>u(()=>import("./junk/inline-code.page.08fafe06.js"),["assets/junk/inline-code.page.08fafe06.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/advanced-cpp-tutorial.page.mdx":()=>u(()=>import("./pages/docs/advanced-cpp-tutorial.page.86db7dfd.js"),["assets/pages/docs/advanced-cpp-tutorial.page.86db7dfd.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/code-readability-guidelines.page.mdx":()=>u(()=>import("./pages/docs/code-readability-guidelines.page.372243c0.js"),["assets/pages/docs/code-readability-guidelines.page.372243c0.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/collaboration-policy.page.mdx":()=>u(()=>import("./pages/docs/collaboration-policy.page.f30440ff.js"),["assets/pages/docs/collaboration-policy.page.f30440ff.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/course-missive.page.mdx":()=>u(()=>import("./pages/docs/course-missive.page.cecc795f.js"),["assets/pages/docs/course-missive.page.cecc795f.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/demos.page.mdx":()=>u(()=>import("./pages/docs/demos.page.190ecc96.js"),["assets/pages/docs/demos.page.190ecc96.js","assets/chunk-37395b21.js"]),"/pages/docs/dockerment.page.mdx":()=>u(()=>import("./pages/docs/dockerment.page.6a4bf746.js"),["assets/pages/docs/dockerment.page.6a4bf746.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/github-gradescope-guide.page.mdx":()=>u(()=>import("./pages/docs/github-gradescope-guide.page.6acb02b9.js"),["assets/pages/docs/github-gradescope-guide.page.6acb02b9.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/docs/index.page.mdx":()=>u(()=>import("./pages/docs/index.page.b9f5e601.js"),["assets/pages/docs/index.page.b9f5e601.js","assets/chunk-37395b21.js"]),"/pages/docs/preventing-memory-leaks.page.mdx":()=>u(()=>import("./pages/docs/preventing-memory-leaks.page.7c299489.js"),["assets/pages/docs/preventing-memory-leaks.page.7c299489.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/docs/scenefile-documentation.page.mdx":()=>u(()=>import("./pages/docs/scenefile-documentation.page.8e1103ca.js"),["assets/pages/docs/scenefile-documentation.page.8e1103ca.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/xcode-CLT-installation-guide.page.mdx":()=>u(()=>import("./pages/docs/xcode-CLT-installation-guide.page.e480017d.js"),["assets/pages/docs/xcode-CLT-installation-guide.page.e480017d.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/index.page.mdx":()=>u(()=>import("./pages/index.page.420d4827.js"),["assets/pages/index.page.420d4827.js","assets/chunk-37395b21.js"]),"/pages/labs/index.page.mdx":()=>u(()=>import("./pages/labs/index.page.a2141b30.js"),["assets/pages/labs/index.page.a2141b30.js","assets/chunk-37395b21.js"]),"/pages/labs/lab1.page.mdx":()=>u(()=>import("./pages/labs/lab1.page.79667474.js"),["assets/pages/labs/lab1.page.79667474.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab2.page.mdx":()=>u(()=>import("./pages/labs/lab2.page.037ffd2a.js"),["assets/pages/labs/lab2.page.037ffd2a.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab3.page.mdx":()=>u(()=>import("./pages/labs/lab3.page.d207734b.js"),["assets/pages/labs/lab3.page.d207734b.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab4.page.mdx":()=>u(()=>import("./pages/labs/lab4.page.e1d05df7.js"),["assets/pages/labs/lab4.page.e1d05df7.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab5.page.mdx":()=>u(()=>import("./pages/labs/lab5.page.71cf95a0.js"),["assets/pages/labs/lab5.page.71cf95a0.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab6.page.mdx":()=>u(()=>import("./pages/labs/lab6.page.3b6daa17.js"),["assets/pages/labs/lab6.page.3b6daa17.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab7-get-normals.page.mdx":()=>u(()=>import("./pages/labs/lab7-get-normals.page.e41f010b.js"),["assets/pages/labs/lab7-get-normals.page.e41f010b.js","assets/chunk-37395b21.js"]),"/pages/labs/lab7.page.mdx":()=>u(()=>import("./pages/labs/lab7.page.ae19afa8.js"),["assets/pages/labs/lab7.page.ae19afa8.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab8.page.mdx":()=>u(()=>import("./pages/labs/lab8.page.4493723c.js"),["assets/pages/labs/lab8.page.4493723c.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/lectures.page.mdx":()=>u(()=>import("./pages/lectures.page.03d34ba7.js"),["assets/pages/lectures.page.03d34ba7.js","assets/chunk-37395b21.js"]),"/pages/projects/2D/1-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/2D/1-algo-ans.page.50622030.js"),["assets/pages/projects/2D/1-algo-ans.page.50622030.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/1-algo.page.mdx":()=>u(()=>import("./pages/projects/2D/1-algo.page.c30b9c61.js"),["assets/pages/projects/2D/1-algo.page.c30b9c61.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/1.page.mdx":()=>u(()=>import("./pages/projects/2D/1.page.bfac84b0.js"),["assets/pages/projects/2D/1.page.bfac84b0.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/2-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/2D/2-algo-ans.page.bbb9fef1.js"),["assets/pages/projects/2D/2-algo-ans.page.bbb9fef1.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/2-algo.page.mdx":()=>u(()=>import("./pages/projects/2D/2-algo.page.2216188a.js"),["assets/pages/projects/2D/2-algo.page.2216188a.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/2.page.mdx":()=>u(()=>import("./pages/projects/2D/2.page.c8ea764a.js"),["assets/pages/projects/2D/2.page.c8ea764a.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/index.page.mdx":()=>u(()=>import("./pages/projects/index.page.92920fd6.js"),["assets/pages/projects/index.page.92920fd6.js","assets/chunk-37395b21.js"]),"/pages/projects/ray/1-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/ray/1-algo-ans.page.d78e6777.js"),["assets/pages/projects/ray/1-algo-ans.page.d78e6777.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js","assets/chunk-3e1e0f24.js"]),"/pages/projects/ray/1-algo.page.mdx":()=>u(()=>import("./pages/projects/ray/1-algo.page.8fe9a1b6.js"),["assets/pages/projects/ray/1-algo.page.8fe9a1b6.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js","assets/chunk-3e1e0f24.js"]),"/pages/projects/ray/1.page.mdx":()=>u(()=>import("./pages/projects/ray/1.page.593cd2f7.js"),["assets/pages/projects/ray/1.page.593cd2f7.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/ray/2-algo-ans.page.mdx":()=>u(()=>import("./pages/projects/ray/2-algo-ans.page.6e64ef29.js"),["assets/pages/projects/ray/2-algo-ans.page.6e64ef29.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/ray/2-algo.page.mdx":()=>u(()=>import("./pages/projects/ray/2-algo.page.32af0425.js"),["assets/pages/projects/ray/2-algo.page.32af0425.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/ray/2.page.mdx":()=>u(()=>import("./pages/projects/ray/2.page.16541472.js"),["assets/pages/projects/ray/2.page.16541472.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"])},Xt={...Qt};G[".page"]=Xt;const qt={},Zt={...qt};fe[".page.route"]=Zt;const en={"/renderer/_default.page.client.jsx":()=>u(()=>import("./renderer/_default.page.client.05a9d992.js"),["assets/renderer/_default.page.client.05a9d992.js","assets/index.5c15a221.css","assets/chunk-37395b21.js"])},tn={...en};G[".page.client"]=tn;const nn={"/renderer/_default.page.client.jsx":ke},rn={...nn};k[".page.client"]=rn;const sn={"/renderer/_default.page.server.jsx":De},on={...sn};k[".page.server"]=on;const an={"/junk/code-blocks.page.mdx":Ve,"/junk/cpp-guidelines.page.mdx":We,"/junk/dummy-page.page.mdx":$e,"/junk/inline-code.page.mdx":Ne,"/pages/docs/advanced-cpp-tutorial.page.mdx":He,"/pages/docs/code-readability-guidelines.page.mdx":Ue,"/pages/docs/collaboration-policy.page.mdx":Be,"/pages/docs/course-missive.page.mdx":ze,"/pages/docs/demos.page.mdx":Ke,"/pages/docs/dockerment.page.mdx":Ge,"/pages/docs/github-gradescope-guide.page.mdx":Ye,"/pages/docs/index.page.mdx":Je,"/pages/docs/preventing-memory-leaks.page.mdx":Me,"/pages/docs/scenefile-documentation.page.mdx":Qe,"/pages/docs/xcode-CLT-installation-guide.page.mdx":Xe,"/pages/index.page.mdx":qe,"/pages/labs/index.page.mdx":Ze,"/pages/labs/lab1.page.mdx":et,"/pages/labs/lab2.page.mdx":tt,"/pages/labs/lab3.page.mdx":nt,"/pages/labs/lab4.page.mdx":rt,"/pages/labs/lab5.page.mdx":st,"/pages/labs/lab6.page.mdx":ot,"/pages/labs/lab7-get-normals.page.mdx":it,"/pages/labs/lab7.page.mdx":at,"/pages/labs/lab8.page.mdx":lt,"/pages/lectures.page.mdx":ut,"/pages/projects/2D/1-algo-ans.page.mdx":ct,"/pages/projects/2D/1-algo.page.mdx":dt,"/pages/projects/2D/1.page.mdx":gt,"/pages/projects/2D/2-algo-ans.page.mdx":pt,"/pages/projects/2D/2-algo.page.mdx":_t,"/pages/projects/2D/2.page.mdx":ft,"/pages/projects/index.page.mdx":ht,"/pages/projects/ray/1-algo-ans.page.mdx":mt,"/pages/projects/ray/1-algo.page.mdx":xt,"/pages/projects/ray/1.page.mdx":vt,"/pages/projects/ray/2-algo-ans.page.mdx":bt,"/pages/projects/ray/2-algo.page.mdx":yt,"/pages/projects/ray/2.page.mdx":Pt},ln={...an};k[".page"]=ln;const un={"/renderer/_default.page.server.jsx":()=>u(()=>import("./chunk-c55c22c8.js"),["assets/chunk-c55c22c8.js","assets/index.5c15a221.css"])},cn={...un};he[".page.server"]=cn;var dn=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:G,pageFilesEager:fe,pageFilesExportNamesLazy:Jt,pageFilesExportNamesEager:k,neverLoaded:he,isGeneratedFile:Mt},Symbol.toStringTag,{value:"Module"}));Rt(dn);function me(){const e="/";return gn(e)?"/":e}function gn(e){return!!e.startsWith("http")}function xe(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function pn(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function _n(e){return L(e,"/").pathname}function Y(e){window.location.href=e}const fn="/";function hn(e,t,n){l(t!==".pageContext.json"||n===!0);const{pathnameOriginal:i,searchOriginal:r,hashOriginal:o}=L(e,fn);e.startsWith("/")&&l(e===`${i}${r||""}${o||""}`,{url:e});let s=i;if(n)s.endsWith("/")&&(s=O(s,0,-1)),l(!s.endsWith("/")),s===""&&(s="/index");else{const d=i.endsWith("/")?"":"/";s=s+`${d}index`}return`${s}${t}${r||""}${o||""}`}function mn(){return!!xn()}function xn(){return!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}const vn=P();let te=!1;const ve={markNavigationChange(){te=!0},get noNavigationChangeYet(){return!te&&this.isOriginalUrl(P())},isOriginalUrl(e){return e===vn}};function be(e,t){return Et(e,t)}async function bn(e,t){const i=be(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(i.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:i.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function yn(e,t,n,i){l(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${i}`;c(e==null||b(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(Pn(e,n,r),"pageContext"in e&&pe(e.pageContext,{hook:{hookName:t,hookFilePath:i}}))}function Pn(e,t,n){const i=[],r=Object.keys(e);for(const o of r)t.includes(o)||i.push(o);c(i.length===0,[n,"returned an object with unknown keys",Q(i)+".","Only following keys are allowed:",Q(t)+"."].join(" "))}async function Rn(e){return e._isFirstRenderAttempt&&ve.isOriginalUrl(e.url)?En(e):On(e)}async function En(e){const t=Ot();ye(t),f(t,{isHydration:!0,_comesDirectlyFromServer:!0});{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)throw J(),n.err;const{exports:i,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;f(t,{exports:i,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return{pageContextAddendum:t}}async function On(e){const t={isHydration:!1};f(t,await An(e));{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)return J(),Y(e.url),{errorFetchingStaticAssets:!0};const{exports:i,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;f(t,{exports:i,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return f(t,await wn({...e,...t})),l([!0,!1].includes(t._comesDirectlyFromServer)),{pageContextAddendum:t}}async function wn(e){const t=wt(e,"onBeforeRender");if(t){const i=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=ae({...e,...r}),s=await i(o);yn(s,"onBeforeRender",["pageContext"],t.filePath);const a=s==null?void 0:s.pageContext;return f(r,a),r}else if((await bn(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const i=await Tn(e),r={};return Object.assign(r,i),f(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:i}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function An(e){const t=await _e(e);if("hookError"in t)throw t.hookError;const n=t.pageContextAddendum;return n._pageId===null?(setTimeout(()=>{Sn(e)},0),c(!1,`[404] Page ${e.url} does not exist. (\`vite-plugin-ssr\` will now server-side route to \`${e.url}\`.)`)):l(g(n,"_pageId","string")),n}function Sn(e){window.location.pathname=e.url}async function Tn(e){const t=hn(e.url,".pageContext.json",!0),n=await fetch(t);l(n.status!==404);{const s=n.headers.get("content-type");c(s&&s.includes("application/json"),`Wrong HTTP Response Header \`content-type\` value for URL ${t} (it should be \`application/json\` but we got \`${s}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const i=await n.text(),r=At(i);if(l(!("pageContext404PageDoesNotExist"in r)),"serverSideError"in r)throw St("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(g(r,"pageContext"));const o=r.pageContext;return l(b(o)),l(g(o,"_pageId","string")),ye(o),o}const ne=["urlPathname","urlParsed"],In=["Page","pageExports","exports"];function ye(e){[...In,...ne].forEach(n=>{n in e&&(ne.includes(n)?(l(n.startsWith("url")),y(!1,`\`pageContext.${n}\` is already available in the browser when using \`useClientRouter()\`; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):y(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}let V;async function Pe(){return V||(V=await Fn()),V}async function Fn(){const e=me();le(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:i}=Tt();return f(t,{_pageFilesAll:n,_allPageIds:i}),t}async function Re(e){const t=await Pe(),n={url:e,...t},i=t._pageFilesAll;B(n);const r=await _e(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:i};const o=r.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:i}:{pageId:null,pageFilesAll:i}}function j(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function Cn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:i(),isClientRouting:o()};function i(){return t.some(d=>d.pageId===n&&d.fileType===".page")?(r(),!1):t.some(d=>d.pageId===n&&d.fileType===".page.server")}function r(){const s=e.some(a=>j(a).includes("render"));c(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,d)=>` (${d+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>j(a).includes("clientRouting"))}}function jn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:i}){let r=[];const o=t.filter(a=>!e.includes(a)),s=[];if(s.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),s.push(...o.map(a=>({id:a.filePath,onlyAssets:!0}))),n)r=e.map(a=>a.filePath);else{const a=i?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";s.push({id:a,onlyAssets:!1}),r=[a]}return{clientEntries:r,clientDependencies:s}}function Ln(e,t){let n=ue(e,t);const i=be(e,t),{isHtmlOnly:r,isClientRouting:o}=Cn({pageFilesClientSide:n,pageFilesServerSide:i,pageId:t});r&&(n=n.filter(d=>d.fileType===".page.client"&&!j(d).includes("render")),n=Dn(n));const{clientEntries:s,clientDependencies:a}=jn({pageFilesClientSide:n,pageFilesServerSide:i,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:s,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:i}}async function kn(e,t,{sharedPageFilesAlreadyLoaded:n}){const i=ue(e,t);await Promise.all(i.map(async r=>{var o;l(r.fileType===".page"||r.fileType===".page.client"),!(n&&r.fileType===".page")&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function Dn(e){const t=[];for(const n of e)if(t.push(n),j(n).includes("overrideDefaultPages"))break;return t}async function Ee(e){const{pageId:t,pageFilesAll:n}=await Re(e);if(!t)return!1;await kn(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:i,isClientRouting:r}=Ln(n,t);return!i&&r}function Oe(e){const t=e.getAttribute("href");return!!(t===null||t===""||xe(t)||Vn(e)||Wn(t)||!$n(t)||!It(t))}function Vn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Wn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function $n(e){const t=me();le(t);const{hasBaseUrl:n}=L(e,t);return n}function Nn(e,t){const n=Hn(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function Hn(e,t){let n=Un(t),i=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&c(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";c(b(r),o);const s=Object.keys(r);c(s.length===1&&s[0]==="when",o);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};c(!1,o)}return{when:"HOVER"}})();return i&&i.when==="VIEWPORT"&&!e._isProduction&&(ce(!1,"Viewport prefetching is disabled in development, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),i={when:"HOVER"}),i}function Un(e){let t=e.getAttribute("data-prefetch");if(y(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;c(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const we=new Map;function Ae(e){const t=Te(e);return we.has(t)}function Se(e){const t=Te(e);we.set(t,!0)}function Te(e){return _n(e)}const re=new Map;async function W(e){if(c(!xe(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),Ae(e))return;Se(e);const{pageId:t,pageFilesAll:n}=await Re(e);if(t){const i=await U(n,t);"errorFetchingStaticAssets"in i&&J()}}function Bn(e){Se(e.url),[...document.getElementsByTagName("A")].forEach(async n=>{if(re.has(n))return;re.set(n,!0);const i=n.getAttribute("href");if(Oe(n)||(l(i),!await Ee(i))||Ae(i))return;const r=Nn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>W(i)),n.addEventListener("touchstart",()=>W(i),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(W(i),o.disconnect())})});o.observe(n)}}else return})}const zn="__vite_plugin_ssr__navigate";er();let $,Ie=!1;function J(){Ie=!0,ce(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Kn(){qn(),Gn((r,{keepScrollPosition:o})=>{i(o?"preserve-scroll":"scroll-to-top-or-hash",r)}),Yn(r=>{i(r)}),globalThis[zn]=async(r,{keepScrollPosition:o,overwriteLastHistoryEntry:s})=>{await i(o?"preserve-scroll":"scroll-to-top-or-hash",r,s)};let e=0,t,n=!1;i("preserve-scroll");return;async function i(r,o=P(),s=!1){var a,d;if(Ie){Y(o);return}const p=++e;l(p>=1),p>1&&n===!1&&($&&$(),n=!0);const v=()=>mn()&&p===1?!1:p!==e,h=await Pe();if(v())return;const _={url:o,_isFirstRenderAttempt:p===1,...h};B(_);const S=await Rn(_);if("errorFetchingStaticAssets"in S)return;const{pageContextAddendum:w}=S;v()||(f(_,w),"onPageTransitionStart"in _.exports&&(c(g(_.exports,"onPageTransitionStart","function"),"The `export { onPageTransitionStart }` of "+_.exportsAll.onPageTransitionStart[0]._filePath+" should be a function."),$=_.exports.onPageTransitionStart),t&&await t,!v()&&(Jn(o,s),ve.markNavigationChange(),l(t===void 0),t=(async()=>{const x=ae(_);Ft(_);const R=await _.exports.render(x);c(R===void 0,"`export { render }` of "+_.exportsAll.render[0]._filePath+" should not return any value"),l(_.url===o),Bn(_)})(),await t,t=void 0,_._isFirstRenderAttempt?(Ct(_,"onHydrationEnd"),await((d=(a=_.exports).onHydrationEnd)===null||d===void 0?void 0:d.call(a,_))):p===e&&(_.exports.onPageTransitionEnd&&(c(g(_.exports,"onPageTransitionEnd","function"),"The `export { onPageTransitionEnd }` of "+_.exportsAll.onPageTransitionEnd[0]._filePath+" should be a function."),_.exports.onPageTransitionEnd()),n=!1),Qn(r),M(),Fe=!0))}}function Gn(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=i(r.target);if(!o)return;const s=o.getAttribute("href");if(Oe(o))return;if(l(s),r.preventDefault(),!await Ee(s)){Y(s);return}const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function i(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}let H=P({withoutHash:!0});function Yn(e){window.addEventListener("popstate",t=>{const n=P({withoutHash:!0});if(n==H)return;H=n;const r=Xn(t.state)||"scroll-to-top-or-hash";e(r)})}function Jn(e,t){P()!==e&&(M(),t?window.history.replaceState(void 0,"",e):window.history.pushState(void 0,"",e),H=P({withoutHash:!0}))}function Mn(){return{x:window.scrollX,y:window.scrollY}}function Qn(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=Zn();if(r&&r!=="top"){const o=document.getElementById(r)||document.getElementsByName(r)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;const{x:n,y:i}=t;window.scrollTo(n,i)}function Xn(e=window.history.state){return g(e,"scrollPosition")?e.scrollPosition:null}function qn(){window.addEventListener("scroll",pn(se,Math.ceil(1e3/3)),{passive:!0}),Ce(se)}function se(){const e=Mn();window.history.replaceState({scrollPosition:e},"")}function Zn(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}let Fe=!1;function er(){oe(),Ce(oe),tr(()=>Fe&&M())}function M(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ce(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function tr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}Kn();
