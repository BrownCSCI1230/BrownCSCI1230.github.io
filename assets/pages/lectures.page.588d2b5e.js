import{j as e,r as o}from"../chunk-b0d73203.js";const n=[{date:"9/5",topic:"Introduction; raster graphics"},{date:"9/10",topic:"Graphics debugging tips; image processing I"},{date:"9/12",topic:"Image processing II"},{date:"9/17",topic:"Image processing III"},{date:"9/19",topic:"Vector graphics; linear algebra; triangle meshes"},{date:"9/24",topic:"Transformations & scene graphs"},{date:"9/26",topic:"Camera models & viewing transforms"},{date:"10/1",topic:"Raytracing I"},{date:"10/3",topic:"Material & illumination models"},{date:"10/8",topic:"Raytracing II"},{date:"10/10",topic:"Spatial acceleration data structures"},{date:"10/15",topic:"Surface parameterization & texture mapping"},{date:"10/17",topic:"Geometric modeling"},{date:"10/22",topic:"Real-time graphics pipeline I"},{date:"10/24",topic:"Real-time graphics pipeline II"},{date:"10/29",topic:"Real-time graphics pipeline III"},{date:"11/31",topic:"Real-time graphics pipeline IV"},{date:"11/5",topic:"No class (election day)",no_class:!0},{date:"11/7",topic:"The final project"},{date:"11/12",topic:"Advanced real-time graphics I"},{date:"11/14",topic:"Advanced real-time graphics II"},{date:"11/19",topic:"Creating (non) photorealistic graphics"},{date:"11/21",topic:"Perception & color"},{date:"11/26",topic:"Thanksgiving week (no class)",slides_link:void 0,video_link:void 0,no_class:!0},{date:"11/28",topic:"Thanksgiving week (no class)",slides_link:void 0,video_link:void 0,no_class:!0},{date:"12/3",topic:"Implicit surface modeling & rendering"},{date:"12/5",topic:"Inverse graphics & differentiable rendering"},{date:"12/10",topic:"Graphics research at Brown"},{date:"12/12",topic:"Final project demo day!",slides_link:void 0}];function l(){return e.exports.jsxs("table",{id:"lectures",children:[e.exports.jsx("thead",{children:e.exports.jsxs("tr",{children:[e.exports.jsx("th",{align:"left",children:"Date"}),e.exports.jsx("th",{align:"left",children:"Topic"}),e.exports.jsx("th",{align:"left",children:"Slides"}),e.exports.jsx("th",{align:"left",children:"Recording"})]})}),e.exports.jsx("tbody",{children:n.map((i,t)=>o.exports.createElement(p,{...i,key:t}))})]})}function p({date:i,topic:t,slides_link:r,video_link:a,no_class:c}){return e.exports.jsxs("tr",{style:c?{color:"#c4c4c4"}:{},children:[e.exports.jsx("td",{children:i}),e.exports.jsx("td",{children:t}),e.exports.jsx("td",{children:r?e.exports.jsx("a",{target:"_blank",href:r,children:"PPTX"}):""}),e.exports.jsx("td",{children:a?e.exports.jsx("a",{target:"_blank",href:a,children:"Panopto"}):""})]})}const h={title:"Lectures",hideTOC:!0};function s(i){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1"},i.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsx(t.li,{className:"toc-item toc-item-h1",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#lectures",children:"Lectures"})})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"lectures",children:e.exports.jsx(t.a,{href:"#lectures",children:"Lectures"})}),`
`,e.exports.jsx(l,{})]})]})}function x(i={}){const{wrapper:t}=i.components||{};return t?e.exports.jsx(t,Object.assign({},i,{children:e.exports.jsx(s,i)})):s(i)}export{x as default,h as documentProps};
