import{a as l,i as ie,p as j,b,h as g,c as u,m as E,d as I,s as w,e as ke,f as je,o as _,_ as d,g as Le,j as We,k as $e,l as De,n as Ne,q as Ve,r as He,t as Ue,u as Be,v as ze,w as Ke,x as Ge,y as Ye,z as Je,A as Me,B as Qe,C as Xe,D as qe,E as Ze,F as et,G as tt,H as nt,I as rt,J as st,K as ot,L as it,M as at,N as lt,O as ut,P as ct,Q as P,R as dt,S as gt,T as U,U as pt,V as ae,W as ft,X as _t,Y as le,Z as ht,$ as ue,a0 as mt,a1 as ce,a2 as vt,a3 as xt}from"./chunk-b65cdb52.js";function y(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function Q(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function B(e){var t,n;"urlPathname"in e?(l(((t=Object.getOwnPropertyDescriptor(e,"urlPathname"))===null||t===void 0?void 0:t.get)===X),l(((n=Object.getOwnPropertyDescriptor(e,"urlParsed"))===null||n===void 0?void 0:n.get)===q)):(Object.defineProperty(e,"urlPathname",{get:X,enumerable:!0,configurable:!0}),Object.defineProperty(e,"urlParsed",{get:q,enumerable:!0,configurable:!0}))}function de(e){let{url:t,_baseUrl:n,_urlProcessor:i}=e;return l(n.startsWith("/")),l(i===null||ie(i)),i!==null&&(t=i(t)),j(t,n)}function X(){const{pathname:e}=de(this),t=e;return l(t.startsWith("/")),t}function q(){const e=de(this),{origin:t,pathname:n,pathnameOriginal:i,search:r,searchAll:o,searchOriginal:s,hash:a,hashOriginal:c}=e;return{origin:t,pathname:n,pathnameOriginal:i,search:r,searchAll:o,searchOriginal:s,hash:a,hashOriginal:c,get hashString(){return b(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0}),c},get searchString(){return b(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0}),s}}}function yt(e,t){if(!y(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function bt(e){return g(e,"then")&&ie(e.then)}const z="@",V=":";function K(e,t){u(e==="*"||e.startsWith("/"),`Invalid route string \`${e}\`${e===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`),l(t.startsWith("/"));const n=e.split("/"),i=t.split("/"),r={};Pt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,i.length);o++){const s=n[o],a=i[o];if(s==="*")return r["*"]=i.slice(Math.max(1,o)).join("/"),{routeParams:r};if(s&&C(s)){if(b(!s.startsWith(V),`Outdated route string \`${e}\`, use \`${e.split(V).join(z)}\` instead.`,{onlyOnce:!0}),!a)return null;r[s.slice(1)]=a}else if((s||"")!==(a||""))return null}return{routeParams:r}}function Pt(e){const t=e.split("*").length-1;u(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function O(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(C(s))break;n++}const i=t.filter(s=>!C(s)).length,r=t.filter(s=>C(s)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:i,isCatchAll:o}}function C(e){return e.startsWith(z)||e.startsWith(V)}function Z(e){const n=K(e,e);return n!==null&&Object.keys(n.routeParams).length===0}function Rt(e){e.sort(Et).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(E(t=>t.routeType==="STRING"&&Z(t.routeString)===!1)).sort(E(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(E(t=>t.routeType==="STRING"&&Z(t.routeString)===!0)).sort(E(t=>t.routeType==="FILESYSTEM")).sort(E(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Et(e,t){var n,i;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(i=t.precedence)!==null&&i!==void 0?i:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=I(s=>O(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=I(s=>O(s).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=I(s=>O(s).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(O(t.routeString).isCatchAll)return-1;if(O(e.routeString).isCatchAll)return 1}return 0}function wt(e,t){return Tt(e)?K(e,t):St(e,t)}function St(e,t){return t=Ot(t),l(t.startsWith("/")),l(e.startsWith("/")),l(!t.endsWith("/")||t==="/"),l(!e.endsWith("/")||e==="/"),t!==e?null:{routeParams:{}}}function Ot(e){if(!e.endsWith("/"))return e;for(;e.endsWith("/");)e=w(e,0,-1);return e===""?"/":e}function At(e,t){const i=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(I(({filesystemRoot:o})=>o.length))[0];let r;if(i){const{filesystemRoot:o,routeRoot:s}=i,a={pageId:e,filesystemRoot:o,routeRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),a),l(e.startsWith(o),a),o!=="/"?(l(!o.endsWith("/"),a),r=w(e,o.length,0)):r=e,l(r.startsWith("/"),a),r=s+(s.endsWith("/")?"":"/")+w(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=w(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}function Tt(e){return e.includes(z)}async function Ft(e,t,n,i){const r=i,o="route()";let s;try{s=e.default({url:t,pageContext:n})}catch(p){return{hookError:p,hookName:o,hookFilePath:r}}u(!bt(s)||e.iKnowThePerformanceRisksOfAsyncRouteFunctions,`The Route Function ${i} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`);try{s=await s}catch(p){return{hookError:p,hookName:o,hookFilePath:r}}if(s===!1)return null;s===!0&&(s={}),u(y(s),`The Route Function ${i} should return a boolean or a plain JavaScript object, instead it returns \`${g(s,"constructor")?s.constructor:s}\`.`);let a=null;g(s,"precedence")&&(a=s.precedence,u(typeof a=="number",`The \`precedence\` value returned by the Route Function ${i} should be a number.`)),u(!("pageContext"in s),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"),ge(s,`The \`routeParams\` object returned by the Route Function ${i} should`);const c=s.routeParams||{};return l(y(c)),Object.keys(s).forEach(p=>{u(p==="match"||p==="routeParams"||p==="precedence",`The Route Function ${i} returned an object with an unknown key \`{ ${p} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:a,routeParams:c}}function ge(e,t){l(t.endsWith(" should")),g(e,"routeParams")&&(u(y(e.routeParams),`${t} be a plain JavaScript object.`),u(Object.values(e.routeParams).every(n=>typeof n=="string"),`${t} only hold string values.`))}function pe(e,{hook:t,errorMessagePrefix:n}){if(!n){l(t);const{hookName:i,hookFilePath:r}=t;l(r.startsWith("/")),l(!i.endsWith(")")),n=`The \`pageContext\` provided by the \`export { ${i} }\` of ${r}`}u(ke(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),b(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{onlyOnce:!0})}async function It(e,t){const n=e.filePath,i="onBeforeRoute";let r;try{r=await e.onBeforeRoute(t)}catch(a){return{hookError:a,hookName:i,hookFilePath:n}}const o=`The \`onBeforeRoute()\` hook exported by ${e.filePath}`;if(u(r==null||yt(r,["pageContext"])&&g(r,"pageContext"),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),r==null)return{};if(u(g(r,"pageContext","object"),`${o} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),g(r.pageContext,"_pageId")&&!g(r.pageContext,"_pageId","null")){const a=`${o} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(g(r.pageContext,"_pageId","string"),`${a} a string or \`null\``),u(t._allPageIds.includes(r.pageContext._pageId),`${a} one of following values: \`[${t._allPageIds.map(c=>`'${c}'`).join(", ")}]\`.`)}g(r.pageContext,"routeParams")&&ge(r.pageContext,`${o} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const s=r.pageContext;return pe(s,{hook:{hookFilePath:n,hookName:i}}),{pageContextProvidedByUser:s}}async function Ct(e){let t=null;const n=[];await Promise.all(e._pageFilesAll.filter(s=>s.fileType===".page.route").map(s=>{var a;return(a=s.loadFile)===null||a===void 0?void 0:a.call(s)})),e._pageFilesAll.filter(s=>s.fileType===".page.route"&&s.isDefaultPageFile).forEach(({filePath:s,fileExports:a})=>{if(l(a),"onBeforeRoute"in a){u(g(a,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${s} should be a function.`);const{onBeforeRoute:c}=a;t={filePath:s,onBeforeRoute:c}}"filesystemRoutingRoot"in a&&(u(g(a,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} should be a string.`),u(g(a,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${s} is \`'${a.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),n.push({filesystemRoot:jt(s),routeRoot:a.filesystemRoutingRoot}))});const i=e._allPageIds,r=[];return i.filter(s=>!je(s)).filter(s=>{const a=kt(s,e._pageFilesAll);if(!a)return!0;const{filePath:c,fileExports:p}=a;l(p),u("default"in p,`${c} should have a default export.`),u(g(p,"default","string")||g(p,"default","function"),`The default export of ${c} should be a string or a function.`),u(!("iKnowThePerformanceRisksOfAsyncRouteFunctions"in p)||g(p,"iKnowThePerformanceRisksOfAsyncRouteFunctions","boolean"),`The export \`iKnowThePerformanceRisksOfAsyncRouteFunctions\` of ${c} should be a boolean.`);const x=p.default;return r.push({pageId:s,filesystemRoute:null,pageRouteFile:{filePath:c,fileExports:p,routeValue:x}}),!1}).forEach(s=>{const a=At(s,n);l(a.startsWith("/")),l(!a.endsWith("/")||a==="/"),r.push({pageId:s,filesystemRoute:a,pageRouteFile:null})}),{pageRoutes:r,onBeforeRouteHook:t}}function kt(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function jt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=w(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}var F;function ee(...e){var t,n;F||(F=(n=(t=globalThis).__vite_plugin_ssr_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),F&&F(...e)}async function fe(e){B(e);const{pageRoutes:t,onBeforeRouteHook:n}=await Ct(e);ee("Pages routes:",t.map(h=>({pageId:h.pageId,filesystemRoute:h.filesystemRoute,pageRouteFile:h.pageRouteFile&&{filePath:h.pageRouteFile.filePath,routeValue:h.pageRouteFile.routeValue}})));const i={};if(n){const h=await It(n,e);if("hookError"in h)return h;if("pageContextProvidedByUser"in h){if(_(i,h.pageContextProvidedByUser),g(i,"_pageId","string")||g(i,"_pageId","null"))return g(i,"routeParams")?l(g(i,"routeParams","object")):_(i,{routeParams:{}}),_(i,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:i};_(e,i)}}_(i,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),u(r.length>0,"No `*.page.js` file found. You must create a `*.page.js` file, e.g. `pages/index.page.js` (or `pages/index.page.{jsx, tsx, vue, ...}`).");const{urlPathname:o}=e;l(o.startsWith("/"));const s=[],a=[];if(await Promise.all(t.map(async h=>{const{pageId:f,filesystemRoute:A,pageRouteFile:S}=h;if(S){const v=S.fileExports,R=S.filePath;if(g(v,"default","string")){const m=v.default;u(m.startsWith("/"),`A Route String should start with a leading \`/\` but \`${R}\` has \`export default '${m}'\`. Make sure to \`export default '/${m}'\` instead.`);const T=K(m,o);if(T){const{routeParams:W}=T;a.push({pageId:f,routeString:m,routeParams:W,routeType:"STRING"})}}else if(g(v,"default","function")){const m=await Ft(v,o,e,R);if(m&&"hookError"in m){s.push(m);return}if(m){const{routeParams:T,precedence:W}=m;a.push({pageId:f,precedence:W,routeParams:T,routeType:"FUNCTION"})}}else l(!1)}else{const v=wt(A,o);if(v){const{routeParams:R}=v;a.push({pageId:f,routeParams:R,routeType:"FILESYSTEM"})}}})),s.length>0)return s[0];Rt(a);const c=a[0];if(ee(`Route matches for URL \`${o}\` (in precedence order):`,a),_(i,{_routeMatches:a}),!c)return _(i,{_pageId:null,routeParams:{}}),{pageContextAddendum:i};const{pageId:p,routeParams:x}=c;return l(y(x)),_(i,{_pageId:p,routeParams:x}),{pageContextAddendum:i}}const G={},_e={},Lt={},L={},he={},Wt=!0,$t={"/junk/code-blocks.page.mdx":()=>d(()=>import("./junk/code-blocks.page.a88c773a.js"),["assets/junk/code-blocks.page.a88c773a.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/junk/cpp-guidelines.page.mdx":()=>d(()=>import("./junk/cpp-guidelines.page.5b992f54.js"),["assets/junk/cpp-guidelines.page.5b992f54.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/junk/dummy-page.page.mdx":()=>d(()=>import("./junk/dummy-page.page.56156449.js"),["assets/junk/dummy-page.page.56156449.js","assets/chunk-37395b21.js"]),"/junk/inline-code.page.mdx":()=>d(()=>import("./junk/inline-code.page.08fafe06.js"),["assets/junk/inline-code.page.08fafe06.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/advanced-cpp-tutorial.page.mdx":()=>d(()=>import("./pages/docs/advanced-cpp-tutorial.page.05577a28.js"),["assets/pages/docs/advanced-cpp-tutorial.page.05577a28.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/code-readability-guidelines.page.mdx":()=>d(()=>import("./pages/docs/code-readability-guidelines.page.372243c0.js"),["assets/pages/docs/code-readability-guidelines.page.372243c0.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/collaboration-policy.page.mdx":()=>d(()=>import("./pages/docs/collaboration-policy.page.f30440ff.js"),["assets/pages/docs/collaboration-policy.page.f30440ff.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/course-missive.page.mdx":()=>d(()=>import("./pages/docs/course-missive.page.b672c613.js"),["assets/pages/docs/course-missive.page.b672c613.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/demos.page.mdx":()=>d(()=>import("./pages/docs/demos.page.190ecc96.js"),["assets/pages/docs/demos.page.190ecc96.js","assets/chunk-37395b21.js"]),"/pages/docs/dockerment.page.mdx":()=>d(()=>import("./pages/docs/dockerment.page.6a4bf746.js"),["assets/pages/docs/dockerment.page.6a4bf746.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/github-gradescope-guide.page.mdx":()=>d(()=>import("./pages/docs/github-gradescope-guide.page.6acb02b9.js"),["assets/pages/docs/github-gradescope-guide.page.6acb02b9.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/docs/index.page.mdx":()=>d(()=>import("./pages/docs/index.page.a4f35030.js"),["assets/pages/docs/index.page.a4f35030.js","assets/chunk-37395b21.js"]),"/pages/docs/preventing-memory-leaks.page.mdx":()=>d(()=>import("./pages/docs/preventing-memory-leaks.page.7c299489.js"),["assets/pages/docs/preventing-memory-leaks.page.7c299489.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/docs/scenefile-documentation.page.mdx":()=>d(()=>import("./pages/docs/scenefile-documentation.page.36a64a0e.js"),["assets/pages/docs/scenefile-documentation.page.36a64a0e.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/docs/xcode-CLT-installation-guide.page.mdx":()=>d(()=>import("./pages/docs/xcode-CLT-installation-guide.page.e480017d.js"),["assets/pages/docs/xcode-CLT-installation-guide.page.e480017d.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/index.page.mdx":()=>d(()=>import("./pages/index.page.420d4827.js"),["assets/pages/index.page.420d4827.js","assets/chunk-37395b21.js"]),"/pages/labs/index.page.mdx":()=>d(()=>import("./pages/labs/index.page.ccf73cee.js"),["assets/pages/labs/index.page.ccf73cee.js","assets/chunk-37395b21.js"]),"/pages/labs/lab1.page.mdx":()=>d(()=>import("./pages/labs/lab1.page.5a37cc61.js"),["assets/pages/labs/lab1.page.5a37cc61.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab2.page.mdx":()=>d(()=>import("./pages/labs/lab2.page.3a6c259f.js"),["assets/pages/labs/lab2.page.3a6c259f.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/labs/lab3.page.mdx":()=>d(()=>import("./pages/labs/lab3.page.1a74b60a.js"),["assets/pages/labs/lab3.page.1a74b60a.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/lectures.page.mdx":()=>d(()=>import("./pages/lectures.page.9bd8e87c.js"),["assets/pages/lectures.page.9bd8e87c.js","assets/chunk-37395b21.js"]),"/pages/projects/2D/1-algo-ans.page.mdx":()=>d(()=>import("./pages/projects/2D/1-algo-ans.page.15ce7f97.js"),["assets/pages/projects/2D/1-algo-ans.page.15ce7f97.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/1-algo.page.mdx":()=>d(()=>import("./pages/projects/2D/1-algo.page.c137c766.js"),["assets/pages/projects/2D/1-algo.page.c137c766.js","assets/chunk-37395b21.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/1.page.mdx":()=>d(()=>import("./pages/projects/2D/1.page.ad4fa7b0.js"),["assets/pages/projects/2D/1.page.ad4fa7b0.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/2.algo.page.mdx":()=>d(()=>import("./pages/projects/2D/2.algo.page.caf9eb45.js"),["assets/pages/projects/2D/2.algo.page.caf9eb45.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/2D/2.page.mdx":()=>d(()=>import("./pages/projects/2D/2.page.deb82f38.js"),["assets/pages/projects/2D/2.page.deb82f38.js","assets/chunk-37395b21.js","assets/chunk-3e1e0f24.js","assets/chunk-a40e06f3.js"]),"/pages/projects/index.page.mdx":()=>d(()=>import("./pages/projects/index.page.c4b98a6f.js"),["assets/pages/projects/index.page.c4b98a6f.js","assets/chunk-37395b21.js"])},Dt={...$t};G[".page"]=Dt;const Nt={},Vt={...Nt};_e[".page.route"]=Vt;const Ht={"/renderer/_default.page.client.jsx":()=>d(()=>import("./renderer/_default.page.client.05a9d992.js"),["assets/renderer/_default.page.client.05a9d992.js","assets/index.3614b4cd.css","assets/chunk-37395b21.js"])},Ut={...Ht};G[".page.client"]=Ut;const Bt={"/renderer/_default.page.client.jsx":Le},zt={...Bt};L[".page.client"]=zt;const Kt={"/renderer/_default.page.server.jsx":We},Gt={...Kt};L[".page.server"]=Gt;const Yt={"/junk/code-blocks.page.mdx":$e,"/junk/cpp-guidelines.page.mdx":De,"/junk/dummy-page.page.mdx":Ne,"/junk/inline-code.page.mdx":Ve,"/pages/docs/advanced-cpp-tutorial.page.mdx":He,"/pages/docs/code-readability-guidelines.page.mdx":Ue,"/pages/docs/collaboration-policy.page.mdx":Be,"/pages/docs/course-missive.page.mdx":ze,"/pages/docs/demos.page.mdx":Ke,"/pages/docs/dockerment.page.mdx":Ge,"/pages/docs/github-gradescope-guide.page.mdx":Ye,"/pages/docs/index.page.mdx":Je,"/pages/docs/preventing-memory-leaks.page.mdx":Me,"/pages/docs/scenefile-documentation.page.mdx":Qe,"/pages/docs/xcode-CLT-installation-guide.page.mdx":Xe,"/pages/index.page.mdx":qe,"/pages/labs/index.page.mdx":Ze,"/pages/labs/lab1.page.mdx":et,"/pages/labs/lab2.page.mdx":tt,"/pages/labs/lab3.page.mdx":nt,"/pages/lectures.page.mdx":rt,"/pages/projects/2D/1-algo-ans.page.mdx":st,"/pages/projects/2D/1-algo.page.mdx":ot,"/pages/projects/2D/1.page.mdx":it,"/pages/projects/2D/2.algo.page.mdx":at,"/pages/projects/2D/2.page.mdx":lt,"/pages/projects/index.page.mdx":ut},Jt={...Yt};L[".page"]=Jt;const Mt={"/renderer/_default.page.server.jsx":()=>d(()=>import("./chunk-c55c22c8.js"),["assets/chunk-c55c22c8.js","assets/index.3614b4cd.css"])},Qt={...Mt};he[".page.server"]=Qt;var Xt=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:G,pageFilesEager:_e,pageFilesExportNamesLazy:Lt,pageFilesExportNamesEager:L,neverLoaded:he,isGeneratedFile:Wt},Symbol.toStringTag,{value:"Module"}));ct(Xt);function me(){const e="/";return qt(e)?"/":e}function qt(e){return!!e.startsWith("http")}function ve(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Zt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function en(e){return j(e,"/").pathname}function Y(e){window.location.href=e}const tn="/";function nn(e,t,n){l(t!==".pageContext.json"||n===!0);const{pathnameOriginal:i,searchOriginal:r,hashOriginal:o}=j(e,tn);e.startsWith("/")&&l(e===`${i}${r||""}${o||""}`,{url:e});let s=i;if(n)s.endsWith("/")&&(s=w(s,0,-1)),l(!s.endsWith("/")),s===""&&(s="/index");else{const c=i.endsWith("/")?"":"/";s=s+`${c}index`}return`${s}${t}${r||""}${o||""}`}function rn(){return!!sn()}function sn(){return!!window.__REACT_DEVTOOLS_GLOBAL_HOOK__}const on=P();let te=!1;const xe={markNavigationChange(){te=!0},get noNavigationChangeYet(){return!te&&this.isOriginalUrl(P())},isOriginalUrl(e){return e===on}};function ye(e,t){return dt(e,t)}async function an(e,t){const i=ye(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(i.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:i.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function ln(e,t,n,i){l(!t.endsWith(")"));const r=`The \`export { ${t} }\` of ${i}`;u(e==null||y(e),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(un(e,n,r),"pageContext"in e&&pe(e.pageContext,{hook:{hookName:t,hookFilePath:i}}))}function un(e,t,n){const i=[],r=Object.keys(e);for(const o of r)t.includes(o)||i.push(o);u(i.length===0,[n,"returned an object with unknown keys",Q(i)+".","Only following keys are allowed:",Q(t)+"."].join(" "))}async function cn(e){return e._isFirstRenderAttempt&&xe.isOriginalUrl(e.url)?dn(e):gn(e)}async function dn(e){const t=gt();be(t),_(t,{isHydration:!0,_comesDirectlyFromServer:!0});{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)throw J(),n.err;const{exports:i,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;_(t,{exports:i,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return{pageContextAddendum:t}}async function gn(e){const t={isHydration:!1};_(t,await fn(e));{const n=await U(e._pageFilesAll,t._pageId);if("errorFetchingStaticAssets"in n)return J(),Y(e.url),{errorFetchingStaticAssets:!0};const{exports:i,exportsAll:r,pageExports:o,pageFilesLoaded:s}=n.pageContextAddendum;_(t,{exports:i,exportsAll:r,pageExports:o,_pageFilesLoaded:s})}return _(t,await pn({...e,...t})),l([!0,!1].includes(t._comesDirectlyFromServer)),{pageContextAddendum:t}}async function pn(e){const t=pt(e,"onBeforeRender");if(t){const i=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=ae({...e,...r}),s=await i(o);ln(s,"onBeforeRender",["pageContext"],t.filePath);const a=s==null?void 0:s.pageContext;return _(r,a),r}else if((await an(e._pageFilesAll,e._pageId)).hasOnBeforeRenderServerSideOnlyHook){const i=await hn(e),r={};return Object.assign(r,i),_(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:i}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function fn(e){const t=await fe(e);if("hookError"in t)throw t.hookError;const n=t.pageContextAddendum;return n._pageId===null?(setTimeout(()=>{_n(e)},0),u(!1,`[404] Page ${e.url} does not exist. (\`vite-plugin-ssr\` will now server-side route to \`${e.url}\`.)`)):l(g(n,"_pageId","string")),n}function _n(e){window.location.pathname=e.url}async function hn(e){const t=nn(e.url,".pageContext.json",!0),n=await fetch(t);l(n.status!==404);{const s=n.headers.get("content-type");u(s&&s.includes("application/json"),`Wrong HTTP Response Header \`content-type\` value for URL ${t} (it should be \`application/json\` but we got \`${s}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const i=await n.text(),r=ft(i);if(l(!("pageContext404PageDoesNotExist"in r)),"serverSideError"in r)throw _t("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(g(r,"pageContext"));const o=r.pageContext;return l(y(o)),l(g(o,"_pageId","string")),be(o),o}const ne=["urlPathname","urlParsed"],mn=["Page","pageExports","exports"];function be(e){[...mn,...ne].forEach(n=>{n in e&&(ne.includes(n)?(l(n.startsWith("url")),b(!1,`\`pageContext.${n}\` is already available in the browser when using \`useClientRouter()\`; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):b(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}let $;async function Pe(){return $||($=await vn()),$}async function vn(){const e=me();le(e);const t={_urlProcessor:null,_baseUrl:e,_objectCreatedByVitePluginSsr:!0,_isProduction:!0},{pageFilesAll:n,allPageIds:i}=ht();return _(t,{_pageFilesAll:n,_allPageIds:i}),t}async function Re(e){const t=await Pe(),n={url:e,...t},i=t._pageFilesAll;B(n);const r=await fe(n);if(!("pageContextAddendum"in r))return{pageId:null,pageFilesAll:i};const o=r.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:i}:{pageId:null,pageFilesAll:i}}function k(e){return e.exportNames?e.exportNames:(l(e.fileExports,e.pageId),Object.keys(e.fileExports))}function xn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:i(),isClientRouting:o()};function i(){return t.some(c=>c.pageId===n&&c.fileType===".page")?(r(),!1):t.some(c=>c.pageId===n&&c.fileType===".page.server")}function r(){const s=e.some(a=>k(a).includes("render"));u(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>k(a).includes("clientRouting"))}}function yn({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:i}){let r=[];const o=t.filter(a=>!e.includes(a)),s=[];if(s.push(...e.map(a=>({id:a.filePath,onlyAssets:!1}))),s.push(...o.map(a=>({id:a.filePath,onlyAssets:!0}))),n)r=e.map(a=>a.filePath);else{const a=i?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js";s.push({id:a,onlyAssets:!1}),r=[a]}return{clientEntries:r,clientDependencies:s}}function bn(e,t){let n=ue(e,t);const i=ye(e,t),{isHtmlOnly:r,isClientRouting:o}=xn({pageFilesClientSide:n,pageFilesServerSide:i,pageId:t});r&&(n=n.filter(c=>c.fileType===".page.client"&&!k(c).includes("render")),n=Rn(n));const{clientEntries:s,clientDependencies:a}=yn({pageFilesClientSide:n,pageFilesServerSide:i,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:s,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:i}}async function Pn(e,t,{sharedPageFilesAlreadyLoaded:n}){const i=ue(e,t);await Promise.all(i.map(async r=>{var o;l(r.fileType===".page"||r.fileType===".page.client"),!(n&&r.fileType===".page")&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function Rn(e){const t=[];for(const n of e)if(t.push(n),k(n).includes("overrideDefaultPages"))break;return t}async function Ee(e){const{pageId:t,pageFilesAll:n}=await Re(e);if(!t)return!1;await Pn(n,t,{sharedPageFilesAlreadyLoaded:!1});const{isHtmlOnly:i,isClientRouting:r}=bn(n,t);return!i&&r}function we(e){const t=e.getAttribute("href");return!!(t===null||t===""||ve(t)||En(e)||wn(t)||!Sn(t)||!mt(t))}function En(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function wn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Sn(e){const t=me();le(t);const{hasBaseUrl:n}=j(e,t);return n}function On(e,t){const n=An(e,t);return{prefetchPageContext:!1,prefetchStaticAssets:n}}function An(e,t){let n=Tn(t),i=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(y(r),o);const s=Object.keys(r);u(s.length===1&&s[0]==="when",o);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,o)}return{when:"HOVER"}})();return i&&i.when==="VIEWPORT"&&!e._isProduction&&(ce(!1,"Viewport prefetching is disabled in development, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),i={when:"HOVER"}),i}function Tn(e){let t=e.getAttribute("data-prefetch");if(b(t===null,"The `data-prefetch` attribute is outdated.",{onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const Se=new Map;function Oe(e){const t=Te(e);return Se.has(t)}function Ae(e){const t=Te(e);Se.set(t,!0)}function Te(e){return en(e)}const re=new Map;async function D(e){if(u(!ve(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),Oe(e))return;Ae(e);const{pageId:t,pageFilesAll:n}=await Re(e);if(t){const i=await U(n,t);"errorFetchingStaticAssets"in i&&J()}}function Fn(e){Ae(e.url),[...document.getElementsByTagName("A")].forEach(async n=>{if(re.has(n))return;re.set(n,!0);const i=n.getAttribute("href");if(we(n)||(l(i),!await Ee(i))||Oe(i))return;const r=On(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>D(i)),n.addEventListener("touchstart",()=>D(i),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(D(i),o.disconnect())})});o.observe(n)}}else return})}const In="__vite_plugin_ssr__navigate";Hn();let N,Fe=!1;function J(){Fe=!0,ce(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Cn(){Nn(),kn((r,{keepScrollPosition:o})=>{i(o?"preserve-scroll":"scroll-to-top-or-hash",r)}),jn(r=>{i(r)}),globalThis[In]=async(r,{keepScrollPosition:o,overwriteLastHistoryEntry:s})=>{await i(o?"preserve-scroll":"scroll-to-top-or-hash",r,s)};let e=0,t,n=!1;i("preserve-scroll");return;async function i(r,o=P(),s=!1){var a,c;if(Fe){Y(o);return}const p=++e;l(p>=1),p>1&&n===!1&&(N&&N(),n=!0);const x=()=>rn()&&p===1?!1:p!==e,h=await Pe();if(x())return;const f={url:o,_isFirstRenderAttempt:p===1,...h};B(f);const A=await cn(f);if("errorFetchingStaticAssets"in A)return;const{pageContextAddendum:S}=A;x()||(_(f,S),"onPageTransitionStart"in f.exports&&(u(g(f.exports,"onPageTransitionStart","function"),"The `export { onPageTransitionStart }` of "+f.exportsAll.onPageTransitionStart[0]._filePath+" should be a function."),N=f.exports.onPageTransitionStart),t&&await t,!x()&&(Ln(o,s),xe.markNavigationChange(),l(t===void 0),t=(async()=>{const v=ae(f);vt(f);const R=await f.exports.render(v);u(R===void 0,"`export { render }` of "+f.exportsAll.render[0]._filePath+" should not return any value"),l(f.url===o),Fn(f)})(),await t,t=void 0,f._isFirstRenderAttempt?(xt(f,"onHydrationEnd"),await((c=(a=f.exports).onHydrationEnd)===null||c===void 0?void 0:c.call(a,f))):p===e&&(f.exports.onPageTransitionEnd&&(u(g(f.exports,"onPageTransitionEnd","function"),"The `export { onPageTransitionEnd }` of "+f.exportsAll.onPageTransitionEnd[0]._filePath+" should be a function."),f.exports.onPageTransitionEnd()),n=!1),$n(r),M(),Ie=!0))}}function kn(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=i(r.target);if(!o)return;const s=o.getAttribute("href");if(we(o))return;if(l(s),r.preventDefault(),!await Ee(s)){Y(s);return}const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function i(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}let H=P({withoutHash:!0});function jn(e){window.addEventListener("popstate",t=>{const n=P({withoutHash:!0});if(n==H)return;H=n;const r=Dn(t.state)||"scroll-to-top-or-hash";e(r)})}function Ln(e,t){P()!==e&&(M(),t?window.history.replaceState(void 0,"",e):window.history.pushState(void 0,"",e),H=P({withoutHash:!0}))}function Wn(){return{x:window.scrollX,y:window.scrollY}}function $n(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const r=Vn();if(r&&r!=="top"){const o=document.getElementById(r)||document.getElementsByName(r)[0];if(o){o.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;const{x:n,y:i}=t;window.scrollTo(n,i)}function Dn(e=window.history.state){return g(e,"scrollPosition")?e.scrollPosition:null}function Nn(){window.addEventListener("scroll",Zt(se,Math.ceil(1e3/3)),{passive:!0}),Ce(se)}function se(){const e=Wn();window.history.replaceState({scrollPosition:e},"")}function Vn(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}let Ie=!1;function Hn(){oe(),Ce(oe),Un(()=>Ie&&M())}function M(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ce(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Un(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}Cn();
