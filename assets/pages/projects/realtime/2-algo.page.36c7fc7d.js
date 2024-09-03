import{j as e}from"../../../chunk-9f704a88.js";import{M as s}from"../../../chunk-c61fc691.js";const i={title:"Project 6 (Algo)"};function r(n){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",div:"div",strong:"strong",h2:"h2",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",code:"code",h3:"h3",h4:"h4",style:"style"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#project-6-action-algo",children:"Project 6: Action! (Algo)"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#camera-rotation",children:"Camera Rotation"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#shader-uniforms",children:"Shader Uniforms"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#textures-renderbuffers-framebuffers-oh-my",children:"Textures, Renderbuffers, Framebuffers Oh My!"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#concept",children:"Concept"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#functional-understanding",children:"Functional Understanding"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#glteximage2d",children:"glTexImage2D"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#gltexparameteri",children:"glTexParameteri"})})]})]})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#realtime-vs-ray",children:"Realtime vs. Ray"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#recursive-reflections",children:"Recursive Reflections"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#differences",children:"Differences"})})]})]})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"project-6-action-algo",children:e.exports.jsx(t.a,{href:"#project-6-action-algo",children:"Project 6: Action! (Algo)"})}),`
`,e.exports.jsxs(t.p,{children:["You can find the handout for this project ",e.exports.jsx(t.a,{href:"/projects/realtime/2",children:"here"}),"."]}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsxs(t.p,{children:["Please read the project handout ",e.exports.jsx(t.strong,{children:"before"})," going to algo section and working on these questions!"]})}),`
`,e.exports.jsx(t.h2,{id:"camera-rotation",children:e.exports.jsx(t.a,{href:"#camera-rotation",children:"Camera Rotation"})}),`
`,e.exports.jsxs(t.p,{children:["How would you compute the matrix for a rotation of 90 degrees about the axis ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.166ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3167.3 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-1-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1833.7,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-1-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(2278.3,0)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2778.3,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29"})})]})})]})})}),`?
Hint: look at `,e.exports.jsx(t.a,{href:"https://docs.google.com/file/d/1WqbpmPNVkuR03OGYc_nEs78VSHf6vLGK",target:"_blank",rel:"noopener noreferrer",children:"this lecture"})," for a reminder on how to rotate about arbitrary axes."]}),`
`,e.exports.jsx(t.h2,{id:"shader-uniforms",children:e.exports.jsx(t.a,{href:"#shader-uniforms",children:"Shader Uniforms"})}),`
`,e.exports.jsxs(t.p,{children:["Given a texture object of ",e.exports.jsx(t.code,{children:"m_tex1"})," and a shader object ",e.exports.jsx(t.code,{children:"m_shader"}),", please write pseudocode to set ",e.exports.jsx(t.code,{children:"m_tex1"})," to be set to a uniform variable declared as ",e.exports.jsx(t.code,{children:"uniform sampler2D texture1"})," contained in ",e.exports.jsx(t.code,{children:"m_shader"}),"'s source code. Assume nothing about the current state!"]}),`
`,e.exports.jsx(t.h2,{id:"textures-renderbuffers-framebuffers-oh-my",children:e.exports.jsx(t.a,{href:"#textures-renderbuffers-framebuffers-oh-my",children:"Textures, Renderbuffers, Framebuffers Oh My!"})}),`
`,e.exports.jsx(t.h3,{id:"concept",children:e.exports.jsx(t.a,{href:"#concept",children:"Concept"})}),`
`,e.exports.jsx(t.p,{children:"For a framebuffer with color and depth attachments, please draw a schematic/diagram of the framebuffer indicating which attachments are textures and which are renderbuffers and why. Assume the usage of the framebuffer will be to draw a scene with a grayscale filter applied."}),`
`,e.exports.jsx(t.h3,{id:"functional-understanding",children:e.exports.jsx(t.a,{href:"#functional-understanding",children:"Functional Understanding"})}),`
`,e.exports.jsx(t.h4,{id:"glteximage2d",children:e.exports.jsx(t.a,{href:"#glteximage2d",children:"glTexImage2D"})}),`
`,e.exports.jsxs(t.p,{children:["What is the difference between ",e.exports.jsx(t.code,{children:"internal format"})," and ",e.exports.jsx(t.code,{children:"format"})," in the call ",e.exports.jsx(t.code,{children:"glTexImage2D"}),"?"]}),`
`,e.exports.jsx(t.h4,{id:"gltexparameteri",children:e.exports.jsx(t.a,{href:"#gltexparameteri",children:"glTexParameteri"})}),`
`,e.exports.jsxs(t.p,{children:["What is the difference between using ",e.exports.jsx(t.code,{children:"GL_NEAREST"})," and ",e.exports.jsx(t.code,{children:"GL_LINEAR"})," when setting magnification and minification filters in ",e.exports.jsx(t.code,{children:"glTexParameteri"}),"?"]}),`
`,e.exports.jsx(t.h2,{id:"realtime-vs-ray",children:e.exports.jsx(t.a,{href:"#realtime-vs-ray",children:"Realtime vs. Ray"})}),`
`,e.exports.jsx(t.h3,{id:"recursive-reflections",children:e.exports.jsx(t.a,{href:"#recursive-reflections",children:"Recursive Reflections"})}),`
`,e.exports.jsx(t.p,{children:"Why do you think we are not implementing recursive reflections in this assignment? This question is open-ended; any well-thought-out answer will suffice."}),`
`,e.exports.jsx(t.h3,{id:"differences",children:e.exports.jsx(t.a,{href:"#differences",children:"Differences"})}),`
`,e.exports.jsx(t.p,{children:"Apart from recursive reflections, what are the advantages to using offline rendering as opposed to realtime rendering? What are the advantages to using realtime rendering as opposed to offline? This question is open-ended; any well-thought-out answer will suffice."}),`
`,`
`,e.exports.jsx(s,{}),e.exports.jsx(t.style,{children:`
mjx-container[jax="SVG"] {
  direction: ltr;
}

mjx-container[jax="SVG"] > svg {
  overflow: visible;
  min-height: 1px;
  min-width: 1px;
}

mjx-container[jax="SVG"] > svg a {
  fill: blue;
  stroke: blue;
}

mjx-container[jax="SVG"][display="true"] {
  display: block;
  text-align: center;
  margin: 1em 0;
}

mjx-container[jax="SVG"][display="true"][width="full"] {
  display: flex;
}

mjx-container[jax="SVG"][justify="left"] {
  text-align: left;
}

mjx-container[jax="SVG"][justify="right"] {
  text-align: right;
}

g[data-mml-node="merror"] > g {
  fill: red;
  stroke: red;
}

g[data-mml-node="merror"] > rect[data-background] {
  fill: yellow;
  stroke: none;
}

g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {
  stroke-dasharray: 140;
}

g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {
  stroke-linecap: round;
  stroke-dasharray: 0,140;
}

g[data-mml-node="mtable"] > g > svg {
  overflow: visible;
}

[jax="SVG"] mjx-tool {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

[jax="SVG"] mjx-tool > mjx-tip {
  position: absolute;
  top: 0;
  left: 0;
}

mjx-tool > mjx-tip {
  display: inline-block;
  padding: .2em;
  border: 1px solid #888;
  font-size: 70%;
  background-color: #F8F8F8;
  color: black;
  box-shadow: 2px 2px 5px #AAAAAA;
}

g[data-mml-node="maction"][data-toggle] {
  cursor: pointer;
}

mjx-status {
  display: block;
  position: fixed;
  left: 1em;
  bottom: 1em;
  min-width: 25%;
  padding: .2em .4em;
  border: 1px solid #888;
  font-size: 90%;
  background-color: #F8F8F8;
  color: black;
}

foreignObject[data-mjx-xml] {
  font-family: initial;
  line-height: normal;
  overflow: visible;
}

mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {
  stroke-width: 3;
}
`})]})]})}function l(n={}){const{wrapper:t}=n.components||{};return t?e.exports.jsx(t,Object.assign({},n,{children:e.exports.jsx(r,n)})):r(n)}export{l as default,i as documentProps};
