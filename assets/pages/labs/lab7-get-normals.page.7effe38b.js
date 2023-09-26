import{j as s}from"../../chunk-137b9351.js";const c={title:"Lab 7: Vertex Normals Solution"};function a(n){const e=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",pre:"pre",code:"code",span:"span"},n.components);return s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(e.nav,{className:"toc",children:s.exports.jsx(e.ol,{className:"toc-level toc-level-1",children:s.exports.jsx(e.li,{className:"toc-item toc-item-h1",children:s.exports.jsx(e.a,{className:"toc-link toc-link-h1",href:"#lab-7-terrain-vertex-normals-solution",children:"Lab 7: Terrain (Vertex Normals Solution)"})})})}),s.exports.jsxs(e.main,{children:[`
`,`
`,s.exports.jsx(e.h1,{id:"lab-7-terrain-vertex-normals-solution",children:s.exports.jsx(e.a,{href:"#lab-7-terrain-vertex-normals-solution",children:"Lab 7: Terrain (Vertex Normals Solution)"})}),`
`,s.exports.jsx(e.p,{children:"Here's the code for obtaining a given vertex's normals."}),`
`,s.exports.jsx(e.p,{children:"It's fine to copy-and-paste this code, but do try to understand it!"}),`
`,s.exports.jsx(e.p,{children:s.exports.jsx(e.a,{href:"/labs/lab7#getting-the-normal",children:"Back to that section"})}),`
`,s.exports.jsx(e.pre,{className:"language-cpp",children:s.exports.jsxs(e.code,{className:"language-cpp code-highlight",children:[s.exports.jsxs(e.span,{className:"code-line",children:[s.exports.jsx(e.span,{className:"pl-c",children:"// Computes the normal of a vertex by averaging neighbors"}),`
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["glm::vec3 ",s.exports.jsx(e.span,{className:"pl-en",children:"TerrainGenerator::getNormal"}),"(",s.exports.jsx(e.span,{className:"pl-k",children:"int"})," row, ",s.exports.jsx(e.span,{className:"pl-k",children:"int"}),` col) {
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["    ",s.exports.jsx(e.span,{className:"pl-c",children:"// Task 9: Compute the average normal for the given input indices"}),`
`]}),s.exports.jsx(e.span,{className:"code-line",children:`
`}),s.exports.jsxs(e.span,{className:"code-line",children:["    ",s.exports.jsx(e.span,{className:"pl-c",children:"// TA SOLUTION"}),`
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["    glm::vec3 normal = ",s.exports.jsx(e.span,{className:"pl-c1",children:"glm::vec3"}),"(",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),", ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),", ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),`);
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["    std::vector<std::vector<",s.exports.jsx(e.span,{className:"pl-k",children:"int"}),">> neighborOffsets = { ",s.exports.jsx(e.span,{className:"pl-c",children:"// Counter-clockwise around the vertex"}),`
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     {-",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),", -",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     { ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),", -",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     { ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),", -",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     { ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),",  ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     { ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),",  ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     { ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),",  ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     {-",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),",  ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`},
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     {-",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),",  ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),`}
`]}),s.exports.jsx(e.span,{className:"code-line",children:`    };
`}),s.exports.jsxs(e.span,{className:"code-line",children:["    glm::vec3 V = ",s.exports.jsx(e.span,{className:"pl-c1",children:"getPosition"}),`(row,col);
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["    ",s.exports.jsx(e.span,{className:"pl-k",children:"for"})," (",s.exports.jsx(e.span,{className:"pl-k",children:"int"})," i = ",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),"; i < ",s.exports.jsx(e.span,{className:"pl-c1",children:"8"}),`; ++i) {
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     ",s.exports.jsx(e.span,{className:"pl-k",children:"int"})," n1RowOffset = neighborOffsets[i][",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),`];
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     ",s.exports.jsx(e.span,{className:"pl-k",children:"int"})," n1ColOffset = neighborOffsets[i][",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`];
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     ",s.exports.jsx(e.span,{className:"pl-k",children:"int"})," n2RowOffset = neighborOffsets[(i + ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),") % ",s.exports.jsx(e.span,{className:"pl-c1",children:"8"}),"][",s.exports.jsx(e.span,{className:"pl-c1",children:"0"}),`];
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     ",s.exports.jsx(e.span,{className:"pl-k",children:"int"})," n2ColOffset = neighborOffsets[(i + ",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),") % ",s.exports.jsx(e.span,{className:"pl-c1",children:"8"}),"][",s.exports.jsx(e.span,{className:"pl-c1",children:"1"}),`];
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     glm::vec3 n1 = ",s.exports.jsx(e.span,{className:"pl-c1",children:"getPosition"}),`(row + n1RowOffset, col + n1ColOffset);
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     glm::vec3 n2 = ",s.exports.jsx(e.span,{className:"pl-c1",children:"getPosition"}),`(row + n2RowOffset, col + n2ColOffset);
`]}),s.exports.jsxs(e.span,{className:"code-line",children:["     normal = normal + ",s.exports.jsx(e.span,{className:"pl-c1",children:"glm::cross"}),`(n1 - V, n2 - V);
`]}),s.exports.jsx(e.span,{className:"code-line",children:`    }
`}),s.exports.jsxs(e.span,{className:"code-line",children:["    ",s.exports.jsx(e.span,{className:"pl-k",children:"return"})," ",s.exports.jsx(e.span,{className:"pl-c1",children:"glm::normalize"}),`(normal);
`]}),s.exports.jsx(e.span,{className:"code-line",children:`}
`})]})})]})]})}function r(n={}){const{wrapper:e}=n.components||{};return e?s.exports.jsx(e,Object.assign({},n,{children:s.exports.jsx(a,n)})):a(n)}export{r as default,c as documentProps};
