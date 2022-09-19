function Y(e,t){e.stack=K(e.stack,t)}function K(e,t){if(!e)return e;const n=X(e);let o=0;return n.filter(a=>a.includes(" (internal/")||a.includes(" (node:internal")?!1:o<t&&Q(a)?(o++,!1):!0).join(`
`)}function Q(e){return e.startsWith("    at ")}function X(e){return e.split(/\r?\n/)}function F(e,t){let n;{var o=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=o}return Y(n,t),n}const Z="0.4.9",m={projectName:"vite-plugin-ssr",projectVersion:Z,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"},P=`[${m.npmPackageName}@${m.projectVersion}]`,ee=`${P}[Bug]`,te=`${P}[Wrong Usage]`,re=`${P}[Warning]`,ne=`${P}[Info]`,R=2;function s(e,t){if(e)return;const n=(()=>{if(!t)return"";const r=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${m.projectName} maintainers; you can ignore this): ${r}.`})();throw F([`${ee} You stumbled upon a bug in ${m.projectName}'s source code.`,`Reach out at ${m.githubRepository}/issues/new or ${m.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${m.projectName} more robust.`,n].join(" "),R)}function b(e,t){if(e)return;const n=t.startsWith("[")?"":" ";throw F(`${te}${n}${t}`,R)}function oe(e){return F(`${P} ${e}`,R)}let N=new Set;function se(e,t,{onlyOnce:n,showStackTrace:o}){if(e)return;const r=`${re} ${t}`;if(n){const a=n===!0?r:n;if(N.has(a))return;N.add(a)}console.warn(o?new Error(r):r)}function Pt(e,t,{onlyOnce:n}){if(e)return;const o=`${ne} ${t}`,r=o;N.has(r)||(N.add(r),console.log(o))}function $(e,t,n){return typeof e=="string"?M(e.split(""),t,n).join(""):M(e,t,n)}function M(e,t,n){const o=[];let r=t>=0?t:e.length+t;s(r>=0&&r<=e.length);let a=n>=0?n:e.length+n;for(s(a>=0&&a<=e.length);!(r===a||(r===e.length&&(r=0),r===a));){const i=e[r];s(i!==void 0),o.push(i),r++}return o}function ie(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ae(e,t){s(ie(e),{url:e}),s(t.startsWith("/"),{url:e,baseUrl:t});const[n,...o]=e.split("#");s(n!==void 0);const r=["",...o].join("#")||null;s(r===null||r.startsWith("#"));const a=r===null?"":w(r.slice(1)),[i,...l]=n.split("?");s(i!==void 0);const c=["",...l].join("?")||null;s(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const d={},v={};Array.from(new URLSearchParams(c||"")).forEach(([p,x])=>{d[p]=x,v[p]=[...v[p]||[],x]});const{origin:_,pathnameResolved:y}=ce(e,t);s(_===null||_===w(_),{origin:_}),s(y.startsWith("/"),{url:e,pathnameResolved:y}),s(_===null||e.startsWith(_),{url:e,origin:_});const T=i.slice((_||"").length);{const p=`${_||""}${T}${c||""}${r||""}`;s(e===p,{url:e,urlRecreated:p})}let{pathname:u,hasBaseUrl:g}=de(y,t);return u=le(u),s(u.startsWith("/")),{origin:_,pathname:u,pathnameOriginal:T,hasBaseUrl:g,search:d,searchAll:v,searchOriginal:c,hash:a,hashOriginal:r}}function w(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function le(e){return e.split("/").map(t=>w(t).split("/").join("%2F")).join("/")}function ce(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let o,r;try{const a=new URL(e);o=a.origin,r=a.pathname}catch{o=null;let i=typeof window!="undefined"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);i=i||"http://fake.example.org"+t,r=new URL(e,i).pathname}return s(r.startsWith("/"),{url:e,pathnameResolved:r}),s(r===r.split("?")[0].split("#")[0]),{origin:o,pathnameResolved:r}}function ue(e){s(e.startsWith("/"))}function fe(e){s(e.startsWith("/")),s(!e.includes("?")),s(!e.includes("#"))}function de(e,t){fe(e),ue(t);let n=e;if(s(n.startsWith("/")),s(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let o=t;return t.endsWith("/")&&n===$(t,0,-1)&&(o=$(t,0,-1),s(n===o)),n.startsWith(o)?(s(n.startsWith("/")||n.startsWith("http")),s(n.startsWith(o)),n=n.slice(o.length),n.startsWith("/")||(n="/"+n),s(n.startsWith("/")),{pathname:n,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function U(e,t){Object.assign(e,t)}function I(e){return e instanceof Function||typeof e=="function"}function S(e){return typeof e=="object"&&e!==null}function _e(e){return Array.from(new Set(e))}function jt(e){return(t,n)=>{const o=e(t),r=e(n);return o===r?0:o>r?-1:1}}function pe(e){return(t,n)=>{const o=e(t),r=e(n);if(s([!0,!1,null].includes(o)),s([!0,!1,null].includes(r)),o===r)return 0;if(o===!0||r===!1)return-1;if(r===!0||o===!1)return 1;s(!1)}}function ge(e){return pe(t=>{const n=e(t);return n===null?null:!n})}function B(){return typeof window!="undefined"&&typeof window.scrollY=="number"}function f(e,t,n="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return n==="undefined";if(n==="unknown")return!0;const r=e[t];return n==="array"?Array.isArray(r):n==="string[]"?Array.isArray(r)&&r.every(a=>typeof a=="string"):n==="function"?I(r):Array.isArray(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="undefined"?r===void 0:typeof r===n}function me(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const he=e=>e!=null,be="\\";function h(e){s(e&&!e.includes(be),`Wrongly formatted path: ${e}`)}function ve(e){const t={};e.forEach(r=>{ye(r).forEach(({exportName:i,exportValue:l,isFromDefaultExport:c})=>{var d;s(i!=="default"),t[i]=(d=t[i])!==null&&d!==void 0?d:[],t[i].push({exportValue:l,_filePath:r.filePath,_fileType:r.fileType,_isFromDefaultExport:c})})});const n=Se(),o={};return Object.entries(t).forEach(([r,a])=>{a.forEach(({exportValue:i,_fileType:l,_isFromDefaultExport:c})=>{var d;o[r]=(d=o[r])!==null&&d!==void 0?d:i,l===".page"&&!c&&(r in n||(n[r]=i))})}),s(!("default"in o)),s(!("default"in t)),{exports:o,exportsAll:t,pageExports:n}}function ye(e){const{filePath:t,fileExports:n}=e;s(n);const o=[];return Object.entries(n).sort(ge(([r])=>r==="default")).forEach(([r,a])=>{let i=r==="default";if(i)if(!xe(t))r="Page";else{b(S(a),`The \`export default\` of ${t} should be an object.`),Object.entries(a).forEach(([l,c])=>{Pe(l,t),o.push({exportName:l,exportValue:c,isFromDefaultExport:i})});return}o.push({exportName:r,exportValue:a,isFromDefaultExport:i})}),o.forEach(({exportName:r,isFromDefaultExport:a})=>{s(!(a&&G.includes(r)))}),o}function xe(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Se(){return new Proxy({},{get(...e){return B()||se(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const G=["render","clientRouting"];function Pe(e,t){b(!G.includes(e),`${t}\` has export default { ${e} }\` which is forbidden, do \`export { ${e} }\` instead.`)}function H(e){const t=".page.",n=$(e.split(t),0,-1).join(t);return s(!n.includes("\\")),n}function je(e){return s(!e.includes("\\")),e.includes("/_error")}function Oe(e){const t=r=>o.pageId===r||o.isDefaultPageFile&&(o.isRendererPageFile||Te(r,o.filePath)),n=Ne(e),o={filePath:e,fileType:n,isRelevant:t,isDefaultPageFile:E(e),isRendererPageFile:E(e)&&$e(e),isErrorPageFile:je(e),pageId:H(e)};return o}function Ne(e){h(e);const n=e.split("/").slice(-1)[0].split("."),o=n.slice(-3)[0],r=n.slice(-2)[0];if(r==="page")return".page";if(s(o==="page",{filePath:e}),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";s(!1,{filePath:e})}function E(e){return h(e),s(e.startsWith("/")),e.includes("/_default")}function $e(e){return h(e),s(e.startsWith("/")),e.includes("/renderer/")}function Te(e,t){h(e),h(t),s(e.startsWith("/")),s(t.startsWith("/")),s(!e.endsWith("/")),s(!t.endsWith("/")),s(E(t));const n=$(t.split("/"),0,-1).join("/");return e.startsWith(n)}const we=[".page",".page.server",".page.route",".page.client"];function Ee(e){s(f(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),s(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),s(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),s(f(e,"pageFilesLazy","object")),s(f(e,"pageFilesEager","object")),s(f(e,"pageFilesExportNamesLazy","object")),s(f(e,"pageFilesExportNamesEager","object")),s(f(e.pageFilesLazy,".page")),s(f(e.pageFilesLazy,".page.client")||f(e.pageFilesLazy,".page.server"));const t={};j(e.pageFilesLazy).forEach(({filePath:o,pageFile:r,globValue:a})=>{var i;r=t[o]=(i=t[o])!==null&&i!==void 0?i:r;const l=a;L(l),r.loadFile=async()=>{"fileExports"in r||(r.fileExports=await l())}}),j(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:r,globValue:a})=>{var i;r=t[o]=(i=t[o])!==null&&i!==void 0?i:r;const l=a;L(l),r.loadExportNames=async()=>{if(!("exportNames"in r)){const c=await l();s(f(c,"exportNames","string[]"),r.filePath),r.exportNames=c.exportNames}}}),j(e.pageFilesEager).forEach(({filePath:o,pageFile:r,globValue:a})=>{var i;r=t[o]=(i=t[o])!==null&&i!==void 0?i:r;const l=a;s(S(l)),r.fileExports=l}),j(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:r,globValue:a})=>{var i;r=t[o]=(i=t[o])!==null&&i!==void 0?i:r;const l=a;s(S(l)),s(f(l,"exportNames","string[]"),r.filePath),r.exportNames=l.exportNames});const n=Object.values(t);return n.forEach(({filePath:o})=>{s(!o.includes("\\"))}),n}function j(e){const t=[];return Object.entries(e).forEach(([n,o])=>{s(we.includes(n)),s(S(o)),Object.entries(o).forEach(([r,a])=>{const i=Oe(r);s(i.fileType===n),t.push({filePath:r,pageFile:i,globValue:a})})}),t}function L(e){s(I(e))}We();let z,ze;function Ot(e){z=Ee(e)}function Nt(){s(!ze),s(z);const e=z,t=Fe(e);return{pageFilesAll:e,allPageIds:t}}function We(){const e=Symbol(),t=B()?window:global;s(!t[e]),t[e]=!0}function Fe(e){const t=e.filter(({isDefaultPageFile:o})=>!o).map(({filePath:o})=>o).map(H);return _e(t)}function Re(e,t){return J(e,t,!0)}function $t(e,t){return J(e,t,!1)}function J(e,t,n){const o=n?".page.client":".page.server",r=Ie(o,t),a=e.filter(u=>u.isRelevant(t)),i=u=>a.filter(g=>g.isRendererPageFile&&g.fileType===u).sort(r)[0],l=u=>{const g=a.filter(x=>x.pageId===t&&x.fileType===u);s(g.length<=1);const p=g[0];return s(p===void 0||!p.isDefaultPageFile),g[0]},c=a.filter(u=>u.isDefaultPageFile&&!u.isRendererPageFile&&(u.fileType===o||u.fileType===".page"));c.sort(r);const d=i(o),v=i(".page"),_=l(o),y=l(".page");return[_,y,...c,d,v].filter(he)}function Ie(e,t){return(a,i)=>{s(a.isDefaultPageFile&&i.isDefaultPageFile);{const l=a.isRendererPageFile,c=i.isRendererPageFile;if(!l&&c)return-1;if(!c&&l)return 1;s(l===c)}{const l=k(t,a.filePath),c=k(t,i.filePath);if(l<c)return-1;if(c<l)return 1;s(l===c)}{if(a.fileType===e&&i.fileType!==e)return-1;if(i.fileType===e&&a.fileType!==e)return 1}{if(a.fileType===".page"&&i.fileType!==".page")return 1;if(i.fileType===".page"&&a.fileType!==".page")return-1}return 0}}function k(e,t){h(e),h(t),s(e.startsWith("/")),s(t.startsWith("/"));let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const o=e.slice(n),r=t.slice(n),a=o.split("/").length,i=r.split("/").length;return a+i}function Me(e,t){return Re(e,t)}const Le="modulepreload",A={},ke="/",Tt=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${ke}${o}`,o in A)return;A[o]=!0;const r=o.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":Le,r||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),r)return new Promise((l,c)=>{i.addEventListener("load",l),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Ae=["clientRouting","render","onHydrationEnd","onPageTransitionStart","onPageTransitionEnd","prefetchStaticAssets"];var wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ae},Symbol.toStringTag,{value:"Module"}));const De=["render"];var Et=Object.freeze(Object.defineProperty({__proto__:null,exportNames:De},Symbol.toStringTag,{value:"Module"}));const Ce=["documentProps","default"];var zt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ce},Symbol.toStringTag,{value:"Module"}));const Ue=["documentProps","default"];var Wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ue},Symbol.toStringTag,{value:"Module"}));const Be=["documentProps","default"];var Ft=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Be},Symbol.toStringTag,{value:"Module"}));const Ge=["documentProps","default"];var Rt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ge},Symbol.toStringTag,{value:"Module"}));const He=["documentProps","default"];var It=Object.freeze(Object.defineProperty({__proto__:null,exportNames:He},Symbol.toStringTag,{value:"Module"}));const Je=["documentProps","default"];var Mt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Je},Symbol.toStringTag,{value:"Module"}));const Ve=["documentProps","default"];var Lt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ve},Symbol.toStringTag,{value:"Module"}));const qe=["documentProps","default"];var kt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"}));const Ye=["documentProps","default"];var At=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"}));const Ke=["documentProps","default"];var Dt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"}));const Qe=["documentProps","default"];var Ct=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"}));const Xe=["documentProps","default"];var Ut=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"}));const Ze=["documentProps","default"];var Bt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"}));const et=["documentProps","default"];var Gt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"}));const tt=["documentProps","default"];var Ht=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"}));const rt=["documentProps","default"];var Jt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"}));const nt=["documentProps","default"];var Vt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"}));const ot=["documentProps","default"];var qt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"}));const st=["documentProps","default"];var Yt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"}));const it=["documentProps","default"];var Kt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"}));const at=["documentProps","default"];var Qt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"}));const lt=["documentProps","default"];var Xt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"}));const ct=["documentProps","default"];var Zt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"}));const ut=["documentProps","default"];var er=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"}));const ft=["documentProps","default"];var tr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"}));const dt=["documentProps","default"];var rr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"}));const{projectVersion:W}=m,D="__vite_plugin_ssr_version",C=globalThis[D]=globalThis[D]=W;b(C===W,`Multiple versions \`vite-pluging-ssr@${C}\` and \`vite-pluging-ssr@${W}\` loaded. Make sure to load the same version.`);function nr(e){const t=window.location.href,{origin:n,searchOriginal:o,hashOriginal:r,pathnameOriginal:a}=ae(t,"/");let i;if(e!=null&&e.withoutHash){i=`${a}${o||""}`;const l=`${n||""}${i}${r||""}`;s(t===l,{url:t,urlRecreated:l})}else{i=`${a}${o||""}${r||""}`;const l=`${n||""}${i}`;s(t===l,{url:t,urlRecreated:l})}return i}const _t=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt=="undefined")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],o=t[2];return new RegExp(n,o)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function V(e){const t=JSON.parse(e);return q(t)}function q(e){return typeof e=="string"?pt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=q(n)}),e)}function pt(e){for(const{match:t,deserialize:n}of _t)if(t(e))return n(e,V);return e}function or(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;s(t);const n=V(t);s(f(n,"pageContext","object"));const{pageContext:o}=n;if(s(f(o,"_pageId","string")),"_serverSideErrorWhileStreaming"in o)throw oe("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return U(o,{_pageContextRetrievedFromServer:{...o},_comesDirectlyFromServer:!0}),o}function gt(e,t){if(!(t in e.exports))return null;const n=e.exports[t],o=e.exportsAll[t][0];s(o.exportValue===n);const r=o._filePath;return s(r),s(!t.endsWith(")")),b(I(n),`\`export { ${t} }\` of ${r} should be a function`),{hook:n,filePath:r}}function mt(e,t){gt(e,t)}function ht(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[o])=>me(n,o)).forEach(([n,o])=>{e[n]=o})}function sr(e){s("exports"in e),s("pageExports"in e),s(S(e.pageExports)),s([!0,!1].includes(e.isHydration));const t=e.exports.Page;return U(e,{Page:t}),St(e),ht(e),s([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?yt(e):e}const bt=["then","toJSON"],vt=["_pageId","_serverSideErrorWhileStreaming"];let O=!1;function yt(e){return new Proxy(e,{get:n});function t(o){return!(o in e||bt.includes(o)||typeof o=="symbol"||typeof o!="string"||o.startsWith("__v_"))}function n(o,r){return O!==!1&&O!==r&&xt(e._pageContextRetrievedFromServer,r,t(r)),O=r,window.setTimeout(()=>{O=!1},0),e[r]}}function xt(e,t,n){if(!n||e===null)return;const o=Object.keys(e).filter(r=>!vt.includes(r));b(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${o.map(r=>`'${r}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function St(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function ir(e,t){const n=Me(e,t);try{await Promise.all(n.map(i=>{var l;return(l=i.loadFile)===null||l===void 0?void 0:l.call(i)}))}catch(i){return{errorFetchingStaticAssets:!0,err:i}}const{exports:o,exportsAll:r,pageExports:a}=ve(n);return{pageContextAddendum:{exports:o,exportsAll:r,pageExports:a,pageFilesLoaded:n}}}function ar(e){var t;if(f(e.exports,"render"))mt(e,"render");else{const n=e._pageFilesLoaded.filter(r=>r.fileType===".page.client");let o;if(n.length===0){const r=(t=e.url)!==null&&t!==void 0?t:window.location.href;o="No file `*.page.client.*` found for URL "+r}else o="One of the following files should export a `render()` hook: "+n.map(r=>r.filePath).join(" ");b(!1,o)}}export{ie as $,Bt as A,Gt as B,Ht as C,Jt as D,Vt as E,qt as F,Yt as G,Kt as H,Qt as I,Xt as J,Zt as K,er as L,tr as M,rr as N,Ot as O,nr as P,$t as Q,or as R,ir as S,gt as T,sr as U,V,oe as W,ue as X,Nt as Y,Me as Z,Tt as _,s as a,Pt as a0,ar as a1,mt as a2,se as b,b as c,jt as d,S as e,je as f,wt as g,f as h,I as i,Et as j,zt as k,Wt as l,pe as m,Ft as n,U as o,ae as p,Rt as q,It as r,$ as s,Mt as t,Lt as u,kt as v,At as w,Dt as x,Ct as y,Ut as z};