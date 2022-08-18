import{j as e}from"../../../chunk-83577a7c.js";import{I as n}from"../../../chunk-858807b0.js";import{M as o}from"../../../chunk-da990835.js";const x={title:"Project 5 (Algo)"};function r(t){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",strong:"strong",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",code:"code",tbody:"tbody",td:"td",pre:"pre",style:"style"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#project-5-logan-give-us-a-name-algo",children:"Project 5: Logan Give Us A Name (Algo)"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#projection-matrices",children:"Projection Matrices"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#visuals-question-wip",children:"Visuals (QUESTION WIP)"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#scaling",children:"Scaling"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#unhinging",children:"Unhinging"})})]})]})})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#vertex-attributes",children:"Vertex Attributes"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#vertex-buffer-format",children:"Vertex Buffer Format"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#vertex-arrays",children:"Vertex Arrays"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#realtime-pipeline",children:"Realtime Pipeline"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#31",children:"3.1"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#32",children:"3.2"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#program-analysis",children:"Program Analysis"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#erroneous-code",children:"Erroneous Code"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#predict-the-render",children:"Predict the Render"})})]})]})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"project-5-logan-give-us-a-name-algo",children:e.exports.jsx(s.a,{href:"#project-5-logan-give-us-a-name-algo",children:"Project 5: Logan Give Us A Name (Algo)"})}),`
`,e.exports.jsxs(s.p,{children:["You can find the handout for this project ",e.exports.jsx(s.a,{href:"/projects/realtime/1",children:"here"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"projection-matrices",children:e.exports.jsx(s.a,{href:"#projection-matrices",children:"Projection Matrices"})}),`
`,e.exports.jsx(s.p,{children:"In lecture, we learned the two matrices that describe the camera: view and projection. In ray, you learned how to generate a view matrix from a position, look, and up vector. In realtime, you will explore the concept of a projection matrix which covers the geometry of a view frustum!"}),`
`,e.exports.jsx(s.h3,{id:"visuals-question-wip",children:e.exports.jsx(s.a,{href:"#visuals-question-wip",children:"Visuals (QUESTION WIP)"})}),`
`,e.exports.jsx(s.p,{children:"What does it (the scene) look like when we shape frustum into a cube?"}),`
`,e.exports.jsx(s.p,{children:"[initial frustum scene here]"}),`
`,e.exports.jsx(s.p,{children:"[3-4 cube shaped scenes here]"}),`
`,e.exports.jsx(s.h4,{id:"scaling",children:e.exports.jsx(s.a,{href:"#scaling",children:"Scaling"})}),`
`,e.exports.jsxs(s.p,{children:["Given a far plane of 100, height angle of 30 degrees, and a width angle of 45 degrees, what would the scaling matrix look like? Refer to ",e.exports.jsx(s.a,{href:"https://docs.google.com/presentation/d/1X8VHq-21yZbckzthbTDW_kKiRRlq3gWV/edit#slide=id.p60",children:"this lecture"})," for a reminder."]}),`
`,e.exports.jsx(s.h4,{id:"unhinging",children:e.exports.jsx(s.a,{href:"#unhinging",children:"Unhinging"})}),`
`,e.exports.jsxs(s.p,{children:["Given a near plane distance of 0.1 and a far plane distance of 100, what would the parallelization matrix look like? Refer to ",e.exports.jsx(s.a,{href:"https://docs.google.com/presentation/d/1X8VHq-21yZbckzthbTDW_kKiRRlq3gWV/edit#slide=id.p67",children:"this lecture"})," for a reminder."]}),`
`,e.exports.jsx(s.h2,{id:"vertex-attributes",children:e.exports.jsx(s.a,{href:"#vertex-attributes",children:"Vertex Attributes"})}),`
`,e.exports.jsx(s.h3,{id:"vertex-buffer-format",children:e.exports.jsx(s.a,{href:"#vertex-buffer-format",children:"Vertex Buffer Format"})}),`
`,e.exports.jsxs(s.p,{children:["Using x_1, y_1, z_1 to represent a single vertex's position, r_1, g_1, b_1 for color and u_1, v_1 for texture coordinates, fill in the following array for ",e.exports.jsx(s.strong,{children:"2 vertices"})," which have ",e.exports.jsx(s.strong,{children:"position"}),", color, and ",e.exports.jsx(s.strong,{children:"texture coordinate"})," attributes"]}),`
`,e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsx(s.table,{children:e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{})]})})})}),`
`,e.exports.jsx(s.h3,{id:"vertex-arrays",children:e.exports.jsx(s.a,{href:"#vertex-arrays",children:"Vertex Arrays"})}),`
`,e.exports.jsxs(s.p,{children:["For each attribute (position, color, and texture coordinate), please provide the stride and offset in bytes using ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(s.defs,{children:e.exports.jsx(s.path,{id:"MJX-1-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"})}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D465",xlinkHref:"#MJX-1-TEX-I-1D465"})})})})]})})})," to reference ",e.exports.jsx(s.code,{children:"size_of(GL_float)"}),"."]}),`
`,e.exports.jsx(s.p,{children:"TODO TAble"}),`
`,e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{align:"left"}),e.exports.jsx(s.th,{align:"left",children:"Stride"}),e.exports.jsx(s.th,{align:"left",children:"Offset"}),e.exports.jsx(s.th,{align:"left",children:"Position"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Position"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Color"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Texture Coordinates"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"})]})]})]})}),`
`,e.exports.jsx(s.h2,{id:"realtime-pipeline",children:e.exports.jsx(s.a,{href:"#realtime-pipeline",children:"Realtime Pipeline"})}),`
`,e.exports.jsx(n,{images:[{src:"/algos/realtime1/pipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(s.h3,{id:"31",children:e.exports.jsx(s.a,{href:"#31",children:"3.1"})}),`
`,e.exports.jsx(s.p,{children:"What does rasterization do? How does rasterization fit into the realtime pipeline in terms of inputs and outputs?"}),`
`,e.exports.jsx(s.h3,{id:"32",children:e.exports.jsx(s.a,{href:"#32",children:"3.2"})}),`
`,e.exports.jsx(s.p,{children:"We can perform the same types of computation in both fragment and vertex shader. Compare the performance considerations associated with applying coordinate transforms in the vertex shader vs the in fragment shader. Is this a good idea? why or why not?"}),`
`,e.exports.jsx(s.h2,{id:"program-analysis",children:e.exports.jsx(s.a,{href:"#program-analysis",children:"Program Analysis"})}),`
`,e.exports.jsx(s.h3,{id:"erroneous-code",children:e.exports.jsx(s.a,{href:"#erroneous-code",children:"Erroneous Code"})}),`
`,e.exports.jsx(s.p,{children:"Consider the following initializeGL pseudo-code:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`	create vbo
`}),e.exports.jsx(s.span,{className:"code-line",children:`	bind vbo
`}),e.exports.jsx(s.span,{className:"code-line",children:`	fill vbo with data
`}),e.exports.jsx(s.span,{className:"code-line",children:`	unbind vbo
`}),e.exports.jsx(s.span,{className:"code-line",children:`	create vao
`}),e.exports.jsx(s.span,{className:"code-line",children:`	bind vao
`}),e.exports.jsx(s.span,{className:"code-line",children:`	set vao attributes
`}),e.exports.jsx(s.span,{className:"code-line",children:`	unbind vao
`})]})}),`
`,e.exports.jsx(s.p,{children:`What would be the issue if a student tries to draw their vao in paintGL?
How could you change this pseudo-code to remove the error?`}),`
`,e.exports.jsx(s.h3,{id:"predict-the-render",children:e.exports.jsx(s.a,{href:"#predict-the-render",children:"Predict the Render"})}),`
`,e.exports.jsx(s.p,{children:"Given a VBO of:"}),`
`,e.exports.jsx(s.p,{children:"TODO table"}),`
`,e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsx(s.table,{children:e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{children:"1"}),e.exports.jsx(s.th,{children:"2"}),e.exports.jsx(s.th,{children:"3"}),e.exports.jsx(s.th,{children:"4"}),e.exports.jsx(s.th,{children:"5"}),e.exports.jsx(s.th,{children:"6"}),e.exports.jsx(s.th,{children:"..."}),e.exports.jsx(s.th,{children:"11"}),e.exports.jsx(s.th,{children:"12"}),e.exports.jsx(s.th,{children:"13"}),e.exports.jsx(s.th,{children:"14"}),e.exports.jsx(s.th,{children:"15"}),e.exports.jsx(s.th,{children:"16"})]})})})}),`
`,e.exports.jsx(s.p,{children:"And VAO attribute code of:"}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glEnableVertexAttribArray"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`);
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glEnableVertexAttribArray"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`);
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glVertexAttribPointer"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"3"}),", GL_FLOAT, GL_FALSE, ",e.exports.jsx(s.span,{className:"pl-c1",children:"6"})," * ",e.exports.jsx(s.span,{className:"pl-k",children:"sizeof"}),`(GLfloat), nullptr);
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glVertexAttribPointer"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"3"}),", GL_FLOAT, GL_FALSE, ",e.exports.jsx(s.span,{className:"pl-c1",children:"6"})," * ",e.exports.jsx(s.span,{className:"pl-k",children:"sizeof"}),"(GLfloat), reinterpret_cast<void *>(",e.exports.jsx(s.span,{className:"pl-c1",children:"3"})," * ",e.exports.jsx(s.span,{className:"pl-k",children:"sizeof"}),`(GLfloat)));
`]})]})}),`
`,e.exports.jsx(s.p,{children:"How many vertices and how many triangles are described in the VBO?"}),`
`,e.exports.jsx(s.p,{children:"If the VAO attribute code was changed to:"}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glEnableVertexAttribArray"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`);
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glVertexAttribPointer"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"3"}),", GL_FLOAT, GL_FALSE, ",e.exports.jsx(s.span,{className:"pl-c1",children:"3"})," * ",e.exports.jsx(s.span,{className:"pl-k",children:"sizeof"}),`(GLfloat), nullptr);
`]})]})}),`
`,e.exports.jsx(s.p,{children:"How many vertices and how many triangles are now described in the VBO?"}),`
`,e.exports.jsx(o,{}),e.exports.jsx(s.style,{children:`
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
`})]})]})}function c(t={}){const{wrapper:s}=t.components||{};return s?e.exports.jsx(s,Object.assign({},t,{children:e.exports.jsx(r,t)})):r(t)}export{c as default,x as documentProps};
