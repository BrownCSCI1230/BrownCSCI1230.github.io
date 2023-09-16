function Y(e,t){e.stack=K(e.stack,t)}function K(e,t){if(!e)return e;const o=X(e);let n=0;return o.filter(i=>i.includes(" (internal/")||i.includes(" (node:internal")?!1:n<t&&Q(i)?(n++,!1):!0).join(`
`)}function Q(e){return e.startsWith("    at ")}function X(e){return e.split(/\r?\n/)}function W(e,t){let o;{var n=Error.stackTraceLimit;Error.stackTraceLimit=1/0,o=new Error(e),Error.stackTraceLimit=n}return Y(o,t),o}const Z="0.4.9",m={projectName:"vite-plugin-ssr",projectVersion:Z,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"},P=`[${m.npmPackageName}@${m.projectVersion}]`,ee=`${P}[Bug]`,te=`${P}[Wrong Usage]`,re=`${P}[Warning]`,oe=`${P}[Info]`,F=2;function s(e,t){if(e)return;const o=(()=>{if(!t)return"";const r=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${m.projectName} maintainers; you can ignore this): ${r}.`})();throw W([`${ee} You stumbled upon a bug in ${m.projectName}'s source code.`,`Reach out at ${m.githubRepository}/issues/new or ${m.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${m.projectName} more robust.`,o].join(" "),F)}function v(e,t){if(e)return;const o=t.startsWith("[")?"":" ";throw W(`${te}${o}${t}`,F)}function ne(e){return W(`${P} ${e}`,F)}let N=new Set;function se(e,t,{onlyOnce:o,showStackTrace:n}){if(e)return;const r=`${re} ${t}`;if(o){const i=o===!0?r:o;if(N.has(i))return;N.add(i)}console.warn(n?new Error(r):r)}function or(e,t,{onlyOnce:o}){if(e)return;const n=`${oe} ${t}`,r=n;N.has(r)||(N.add(r),console.log(n))}function $(e,t,o){return typeof e=="string"?I(e.split(""),t,o).join(""):I(e,t,o)}function I(e,t,o){const n=[];let r=t>=0?t:e.length+t;s(r>=0&&r<=e.length);let i=o>=0?o:e.length+o;for(s(i>=0&&i<=e.length);!(r===i||(r===e.length&&(r=0),r===i));){const a=e[r];s(a!==void 0),n.push(a),r++}return n}function ae(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ie(e,t){s(ae(e),{url:e}),s(t.startsWith("/"),{url:e,baseUrl:t});const[o,...n]=e.split("#");s(o!==void 0);const r=["",...n].join("#")||null;s(r===null||r.startsWith("#"));const i=r===null?"":z(r.slice(1)),[a,...l]=o.split("?");s(a!==void 0);const u=["",...l].join("?")||null;s(u===null||u.startsWith("?"),{url:e,searchOriginal:u});const f={},x={};Array.from(new URLSearchParams(u||"")).forEach(([p,h])=>{f[p]=h,x[p]=[...x[p]||[],h]});const{origin:d,pathnameResolved:y}=ue(e,t);s(d===null||d===z(d),{origin:d}),s(y.startsWith("/"),{url:e,pathnameResolved:y}),s(d===null||e.startsWith(d),{url:e,origin:d});const T=a.slice((d||"").length);{const p=`${d||""}${T}${u||""}${r||""}`;s(e===p,{url:e,urlRecreated:p})}let{pathname:c,hasBaseUrl:g}=fe(y,t);return c=le(c),s(c.startsWith("/")),{origin:d,pathname:c,pathnameOriginal:T,hasBaseUrl:g,search:f,searchAll:x,searchOriginal:u,hash:i,hashOriginal:r}}function z(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function le(e){return e.split("/").map(t=>z(t).split("/").join("%2F")).join("/")}function ue(e,t){var o;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let n,r;try{const i=new URL(e);n=i.origin,r=i.pathname}catch{n=null;let a=typeof window!="undefined"&&((o=window==null?void 0:window.document)===null||o===void 0?void 0:o.baseURI);a=a||"http://fake.example.org"+t,r=new URL(e,a).pathname}return s(r.startsWith("/"),{url:e,pathnameResolved:r}),s(r===r.split("?")[0].split("#")[0]),{origin:n,pathnameResolved:r}}function ce(e){s(e.startsWith("/"))}function _e(e){s(e.startsWith("/")),s(!e.includes("?")),s(!e.includes("#"))}function fe(e,t){_e(e),ce(t);let o=e;if(s(o.startsWith("/")),s(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let n=t;return t.endsWith("/")&&o===$(t,0,-1)&&(n=$(t,0,-1),s(o===n)),o.startsWith(n)?(s(o.startsWith("/")||o.startsWith("http")),s(o.startsWith(n)),o=o.slice(n.length),o.startsWith("/")||(o="/"+o),s(o.startsWith("/")),{pathname:o,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function U(e,t){Object.assign(e,t)}function R(e){return e instanceof Function||typeof e=="function"}function S(e){return typeof e=="object"&&e!==null}function de(e){return Array.from(new Set(e))}function nr(e){return(t,o)=>{const n=e(t),r=e(o);return n===r?0:n>r?-1:1}}function pe(e){return(t,o)=>{const n=e(t),r=e(o);if(s([!0,!1,null].includes(n)),s([!0,!1,null].includes(r)),n===r)return 0;if(n===!0||r===!1)return-1;if(r===!0||n===!1)return 1;s(!1)}}function ge(e){return pe(t=>{const o=e(t);return o===null?null:!o})}function B(){return typeof window!="undefined"&&typeof window.scrollY=="number"}function _(e,t,o="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return o==="undefined";if(o==="unknown")return!0;const r=e[t];return o==="array"?Array.isArray(r):o==="string[]"?Array.isArray(r)&&r.every(i=>typeof i=="string"):o==="function"?R(r):Array.isArray(o)?typeof r=="string"&&o.includes(r):o==="null"?r===null:o==="undefined"?r===void 0:typeof r===o}function me(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const be=e=>e!=null,ve="\\";function b(e){s(e&&!e.includes(ve),`Wrongly formatted path: ${e}`)}function xe(e){const t={};e.forEach(r=>{ye(r).forEach(({exportName:a,exportValue:l,isFromDefaultExport:u})=>{var f;s(a!=="default"),t[a]=(f=t[a])!==null&&f!==void 0?f:[],t[a].push({exportValue:l,_filePath:r.filePath,_fileType:r.fileType,_isFromDefaultExport:u})})});const o=Se(),n={};return Object.entries(t).forEach(([r,i])=>{i.forEach(({exportValue:a,_fileType:l,_isFromDefaultExport:u})=>{var f;n[r]=(f=n[r])!==null&&f!==void 0?f:a,l===".page"&&!u&&(r in o||(o[r]=a))})}),s(!("default"in n)),s(!("default"in t)),{exports:n,exportsAll:t,pageExports:o}}function ye(e){const{filePath:t,fileExports:o}=e;s(o);const n=[];return Object.entries(o).sort(ge(([r])=>r==="default")).forEach(([r,i])=>{let a=r==="default";if(a)if(!he(t))r="Page";else{v(S(i),`The \`export default\` of ${t} should be an object.`),Object.entries(i).forEach(([l,u])=>{Pe(l,t),n.push({exportName:l,exportValue:u,isFromDefaultExport:a})});return}n.push({exportName:r,exportValue:i,isFromDefaultExport:a})}),n.forEach(({exportName:r,isFromDefaultExport:i})=>{s(!(i&&G.includes(r)))}),n}function he(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function Se(){return new Proxy({},{get(...e){return B()||se(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}const G=["render","clientRouting"];function Pe(e,t){v(!G.includes(e),`${t}\` has export default { ${e} }\` which is forbidden, do \`export { ${e} }\` instead.`)}function H(e){const t=".page.",o=$(e.split(t),0,-1).join(t);return s(!o.includes("\\")),o}function je(e){return s(!e.includes("\\")),e.includes("/_error")}function Oe(e){const t=r=>n.pageId===r||n.isDefaultPageFile&&(n.isRendererPageFile||Te(r,n.filePath)),o=Ne(e),n={filePath:e,fileType:o,isRelevant:t,isDefaultPageFile:M(e),isRendererPageFile:M(e)&&$e(e),isErrorPageFile:je(e),pageId:H(e)};return n}function Ne(e){b(e);const o=e.split("/").slice(-1)[0].split("."),n=o.slice(-3)[0],r=o.slice(-2)[0];if(r==="page")return".page";if(s(n==="page",{filePath:e}),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";s(!1,{filePath:e})}function M(e){return b(e),s(e.startsWith("/")),e.includes("/_default")}function $e(e){return b(e),s(e.startsWith("/")),e.includes("/renderer/")}function Te(e,t){b(e),b(t),s(e.startsWith("/")),s(t.startsWith("/")),s(!e.endsWith("/")),s(!t.endsWith("/")),s(M(t));const o=$(t.split("/"),0,-1).join("/");return e.startsWith(o)}const ze=[".page",".page.server",".page.route",".page.client"];function Me(e){s(_(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),s(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),s(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),s(_(e,"pageFilesLazy","object")),s(_(e,"pageFilesEager","object")),s(_(e,"pageFilesExportNamesLazy","object")),s(_(e,"pageFilesExportNamesEager","object")),s(_(e.pageFilesLazy,".page")),s(_(e.pageFilesLazy,".page.client")||_(e.pageFilesLazy,".page.server"));const t={};j(e.pageFilesLazy).forEach(({filePath:n,pageFile:r,globValue:i})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const l=i;L(l),r.loadFile=async()=>{"fileExports"in r||(r.fileExports=await l())}}),j(e.pageFilesExportNamesLazy).forEach(({filePath:n,pageFile:r,globValue:i})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const l=i;L(l),r.loadExportNames=async()=>{if(!("exportNames"in r)){const u=await l();s(_(u,"exportNames","string[]"),r.filePath),r.exportNames=u.exportNames}}}),j(e.pageFilesEager).forEach(({filePath:n,pageFile:r,globValue:i})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const l=i;s(S(l)),r.fileExports=l}),j(e.pageFilesExportNamesEager).forEach(({filePath:n,pageFile:r,globValue:i})=>{var a;r=t[n]=(a=t[n])!==null&&a!==void 0?a:r;const l=i;s(S(l)),s(_(l,"exportNames","string[]"),r.filePath),r.exportNames=l.exportNames});const o=Object.values(t);return o.forEach(({filePath:n})=>{s(!n.includes("\\"))}),o}function j(e){const t=[];return Object.entries(e).forEach(([o,n])=>{s(ze.includes(o)),s(S(n)),Object.entries(n).forEach(([r,i])=>{const a=Oe(r);s(a.fileType===o),t.push({filePath:r,pageFile:a,globValue:i})})}),t}function L(e){s(R(e))}Ee();let w,we;function sr(e){w=Me(e)}function ar(){s(!we),s(w);const e=w,t=We(e);return{pageFilesAll:e,allPageIds:t}}function Ee(){const e=Symbol(),t=B()?window:global;s(!t[e]),t[e]=!0}function We(e){const t=e.filter(({isDefaultPageFile:n})=>!n).map(({filePath:n})=>n).map(H);return de(t)}function Fe(e,t){return J(e,t,!0)}function ir(e,t){return J(e,t,!1)}function J(e,t,o){const n=o?".page.client":".page.server",r=Re(n,t),i=e.filter(c=>c.isRelevant(t)),a=c=>i.filter(g=>g.isRendererPageFile&&g.fileType===c).sort(r)[0],l=c=>{const g=i.filter(h=>h.pageId===t&&h.fileType===c);s(g.length<=1);const p=g[0];return s(p===void 0||!p.isDefaultPageFile),g[0]},u=i.filter(c=>c.isDefaultPageFile&&!c.isRendererPageFile&&(c.fileType===n||c.fileType===".page"));u.sort(r);const f=a(n),x=a(".page"),d=l(n),y=l(".page");return[d,y,...u,f,x].filter(be)}function Re(e,t){return(i,a)=>{s(i.isDefaultPageFile&&a.isDefaultPageFile);{const l=i.isRendererPageFile,u=a.isRendererPageFile;if(!l&&u)return-1;if(!u&&l)return 1;s(l===u)}{const l=k(t,i.filePath),u=k(t,a.filePath);if(l<u)return-1;if(u<l)return 1;s(l===u)}{if(i.fileType===e&&a.fileType!==e)return-1;if(a.fileType===e&&i.fileType!==e)return 1}{if(i.fileType===".page"&&a.fileType!==".page")return 1;if(a.fileType===".page"&&i.fileType!==".page")return-1}return 0}}function k(e,t){b(e),b(t),s(e.startsWith("/")),s(t.startsWith("/"));let o=0;for(;o<e.length&&o<t.length&&e[o]===t[o];o++);const n=e.slice(o),r=t.slice(o),i=n.split("/").length,a=r.split("/").length;return i+a}function Ie(e,t){return Fe(e,t)}const Le="modulepreload",A={},ke="/",lr=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${ke}${n}`,n in A)return;A[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Le,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Ae=["clientRouting","render","onHydrationEnd","onPageTransitionStart","onPageTransitionEnd","prefetchStaticAssets"];var ur=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ae},Symbol.toStringTag,{value:"Module"}));const De=["render"];var cr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:De},Symbol.toStringTag,{value:"Module"}));const Ce=["documentProps","default"];var _r=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ce},Symbol.toStringTag,{value:"Module"}));const Ue=["documentProps","default"];var fr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ue},Symbol.toStringTag,{value:"Module"}));const Be=["documentProps","default"];var dr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Be},Symbol.toStringTag,{value:"Module"}));const Ge=["documentProps","default"];var pr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ge},Symbol.toStringTag,{value:"Module"}));const He=["documentProps","default"];var gr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:He},Symbol.toStringTag,{value:"Module"}));const Je=["documentProps","default"];var mr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Je},Symbol.toStringTag,{value:"Module"}));const Ve=["documentProps","default"];var br=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ve},Symbol.toStringTag,{value:"Module"}));const qe=["documentProps","default"];var vr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"}));const Ye=["documentProps","default"];var xr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"}));const Ke=["documentProps","default"];var yr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"}));const Qe=["documentProps","default"];var hr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"}));const Xe=["documentProps","default"];var Sr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"}));const Ze=["documentProps","default"];var Pr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"}));const et=["documentProps","default"];var jr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"}));const tt=["documentProps","default"];var Or=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"}));const rt=["documentProps","default"];var Nr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"}));const ot=["documentProps","default"];var $r=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"}));const nt=["documentProps","default"];var Tr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"}));const st=["documentProps","default"];var zr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"}));const at=["documentProps","default"];var Mr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"}));const it=["documentProps","default"];var wr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"}));const lt=["documentProps","default"];var Er=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"}));const ut=["documentProps","default"];var Wr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"}));const ct=["documentProps","default"];var Fr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"}));const _t=["documentProps","default"];var Rr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"}));const ft=["documentProps","default"];var Ir=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"}));const dt=["documentProps","default"];var Lr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"}));const pt=["documentProps","default"];var kr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"}));const gt=["documentProps","default"];var Ar=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"}));const mt=["documentProps","default"];var Dr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"}));const bt=["documentProps","default"];var Cr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bt},Symbol.toStringTag,{value:"Module"}));const vt=["documentProps","default"];var Ur=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"}));const xt=["documentProps","default"];var Br=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xt},Symbol.toStringTag,{value:"Module"}));const yt=["documentProps","default"];var Gr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yt},Symbol.toStringTag,{value:"Module"}));const ht=["documentProps","default"];var Hr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"}));const St=["documentProps","default"];var Jr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:St},Symbol.toStringTag,{value:"Module"}));const Pt=["documentProps","default"];var Vr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"}));const jt=["documentProps","default"];var qr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"}));const Ot=["documentProps","default"];var Yr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"}));const Nt=["documentProps","default"];var Kr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"}));const $t=["documentProps","default"];var Qr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$t},Symbol.toStringTag,{value:"Module"}));const Tt=["documentProps","default"];var Xr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"}));const zt=["documentProps","default"];var Zr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zt},Symbol.toStringTag,{value:"Module"}));const Mt=["documentProps","default"];var eo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mt},Symbol.toStringTag,{value:"Module"}));const wt=["documentProps","default"];var to=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wt},Symbol.toStringTag,{value:"Module"}));const Et=["documentProps","default"];var ro=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"}));const Wt=["documentProps","default"];var oo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wt},Symbol.toStringTag,{value:"Module"}));const Ft=["documentProps","default"];var no=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"}));const Rt=["documentProps","default"];var so=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"}));const It=["documentProps","default"];var ao=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"}));const Lt=["documentProps","default"];var io=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"}));const kt=["documentProps","default"];var lo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"}));const At=["documentProps","default"];var uo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"}));const Dt=["documentProps","default"];var co=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dt},Symbol.toStringTag,{value:"Module"}));const Ct=["documentProps","default"];var _o=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ct},Symbol.toStringTag,{value:"Module"}));const Ut=["documentProps","default"];var fo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ut},Symbol.toStringTag,{value:"Module"}));const Bt=["documentProps","default"];var po=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bt},Symbol.toStringTag,{value:"Module"}));const Gt=["documentProps","default"];var go=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gt},Symbol.toStringTag,{value:"Module"}));const Ht=["documentProps","default"];var mo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"}));const Jt=["documentProps","default"];var bo=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jt},Symbol.toStringTag,{value:"Module"}));const{projectVersion:E}=m,D="__vite_plugin_ssr_version",C=globalThis[D]=globalThis[D]=E;v(C===E,`Multiple versions \`vite-pluging-ssr@${C}\` and \`vite-pluging-ssr@${E}\` loaded. Make sure to load the same version.`);function vo(e){const t=window.location.href,{origin:o,searchOriginal:n,hashOriginal:r,pathnameOriginal:i}=ie(t,"/");let a;if(e!=null&&e.withoutHash){a=`${i}${n||""}`;const l=`${o||""}${a}${r||""}`;s(t===l,{url:t,urlRecreated:l})}else{a=`${i}${n||""}${r||""}`;const l=`${o||""}${a}`;s(t===l,{url:t,urlRecreated:l})}return a}const Vt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt=="undefined")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),o=t[1],n=t[2];return new RegExp(o,n)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function V(e){const t=JSON.parse(e);return q(t)}function q(e){return typeof e=="string"?qt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,o])=>{e[t]=q(o)}),e)}function qt(e){for(const{match:t,deserialize:o}of Vt)if(t(e))return o(e,V);return e}function xo(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;s(t);const o=V(t);s(_(o,"pageContext","object"));const{pageContext:n}=o;if(s(_(n,"_pageId","string")),"_serverSideErrorWhileStreaming"in n)throw ne("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return U(n,{_pageContextRetrievedFromServer:{...n},_comesDirectlyFromServer:!0}),n}function Yt(e,t){if(!(t in e.exports))return null;const o=e.exports[t],n=e.exportsAll[t][0];s(n.exportValue===o);const r=n._filePath;return s(r),s(!t.endsWith(")")),v(R(o),`\`export { ${t} }\` of ${r} should be a function`),{hook:o,filePath:r}}function Kt(e,t){Yt(e,t)}function Qt(e){const t=Object.entries(e);for(const o in e)delete e[o];t.sort(([o],[n])=>me(o,n)).forEach(([o,n])=>{e[o]=n})}function yo(e){s("exports"in e),s("pageExports"in e),s(S(e.pageExports)),s([!0,!1].includes(e.isHydration));const t=e.exports.Page;return U(e,{Page:t}),rr(e),Qt(e),s([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?er(e):e}const Xt=["then","toJSON"],Zt=["_pageId","_serverSideErrorWhileStreaming"];let O=!1;function er(e){return new Proxy(e,{get:o});function t(n){return!(n in e||Xt.includes(n)||typeof n=="symbol"||typeof n!="string"||n.startsWith("__v_"))}function o(n,r){return O!==!1&&O!==r&&tr(e._pageContextRetrievedFromServer,r,t(r)),O=r,window.setTimeout(()=>{O=!1},0),e[r]}}function tr(e,t,o){if(!o||e===null)return;const n=Object.keys(e).filter(r=>!Zt.includes(r));v(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${n.map(r=>`'${r}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function rr(e){Object.entries(e).forEach(([t,o])=>{delete e[t],e[t]=o})}async function ho(e,t){const o=Ie(e,t);try{await Promise.all(o.map(a=>{var l;return(l=a.loadFile)===null||l===void 0?void 0:l.call(a)}))}catch(a){return{errorFetchingStaticAssets:!0,err:a}}const{exports:n,exportsAll:r,pageExports:i}=xe(o);return{pageContextAddendum:{exports:n,exportsAll:r,pageExports:i,pageFilesLoaded:o}}}function So(e){var t;if(_(e.exports,"render"))Kt(e,"render");else{const o=e._pageFilesLoaded.filter(r=>r.fileType===".page.client");let n;if(o.length===0){const r=(t=e.url)!==null&&t!==void 0?t:window.location.href;n="No file `*.page.client.*` found for URL "+r}else n="One of the following files should export a `render()` hook: "+o.map(r=>r.filePath).join(" ");v(!1,n)}}export{Yr as $,Pr as A,jr as B,Or as C,Nr as D,$r as E,Tr as F,zr as G,Mr as H,wr as I,Er as J,Wr as K,Fr as L,Rr as M,Ir as N,Lr as O,kr as P,Ar as Q,Dr as R,Cr as S,Ur as T,Br as U,Gr as V,Hr as W,Jr as X,Vr as Y,qr as Z,lr as _,s as a,Kr as a0,Qr as a1,Xr as a2,Zr as a3,eo as a4,to as a5,ro as a6,oo as a7,no as a8,so as a9,Kt as aA,ao as aa,io as ab,lo as ac,uo as ad,co as ae,_o as af,fo as ag,po as ah,go as ai,mo as aj,bo as ak,sr as al,vo as am,ir as an,xo as ao,ho as ap,Yt as aq,yo as ar,V as as,ne as at,ce as au,ar as av,Ie as aw,ae as ax,or as ay,So as az,se as b,v as c,nr as d,S as e,je as f,ur as g,_ as h,R as i,cr as j,_r as k,fr as l,pe as m,dr as n,U as o,ie as p,pr as q,gr as r,$ as s,mr as t,br as u,vr as v,xr as w,yr as x,hr as y,Sr as z};