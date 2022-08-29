import{j as e}from"../../chunk-47a93a9e.js";import{I as t}from"../../chunk-e84bc917.js";import{M as i}from"../../chunk-9ad3b198.js";const c={title:"Lab 8"};function o(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",div:"div",strong:"strong",code:"code",h2:"h2",h3:"h3",h4:"h4",em:"em",blockquote:"blockquote",img:"img",ul:"ul"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#lab-8-trimeshes",children:"Lab 8: Trimeshes"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#intro",children:"Intro"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#objectives",children:"Objectives"})})})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#objects-as-trimeshes",children:"Objects as Trimeshes"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#level-of-detail-tessellation-level",children:"Level-of-Detail (Tessellation Level)"})})})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#trimesh-representation",children:"Trimesh Representation"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#a-single-triangle",children:"A Single Triangle"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#per-face-normals",children:"Per-Face Normals"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#per-vertex-normals",children:"Per-Vertex Normals"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#winding-order",children:"Winding Order"})})]})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#multiple-triangles",children:"Multiple Triangles"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#getting-started",children:"Getting Started"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#stencil-code",children:"Stencil Code"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#the-code",children:"The Code"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#the-gui",children:"The GUI"})})]})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#draw-a-triangle",children:"Draw a Triangle"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#cube",children:"Cube"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#tile",children:"Tile"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#cube-face",children:"Cube Face"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#full-cube",children:"Full Cube"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#sphere",children:"Sphere"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#spherical-coordinates",children:"Spherical Coordinates"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#wedge",children:"Wedge"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#full-sphere",children:"Full Sphere"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#end",children:"End"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#food-for-thought",children:"Food For Thought"})})})]})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,e.exports.jsx(s.h1,{id:"lab-8-trimeshes",children:e.exports.jsx(s.a,{href:"#lab-8-trimeshes",children:"Lab 8: Trimeshes"})}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.a,{href:"https://google.com",children:"GitHub Classroom assignment"})}),`
`,e.exports.jsxs(s.div,{className:"warning-callout callout",children:[e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"This is one of the more time-consuming labs."})," We intend each lab to be completed within 2 hours, so if you reach the 2 hour mark and have only completed ",e.exports.jsx(s.code,{children:"Cube"})," and part of ",e.exports.jsx(s.code,{children:"Sphere"}),", please let us know!"]}),e.exports.jsxs(s.p,{children:["We will get you checked off, but please keep in mind that for the Realtime 1 Project, you will have to have implemented the following shapes: ",e.exports.jsx(s.code,{children:"Cube"}),", ",e.exports.jsx(s.code,{children:"Sphere"}),", ",e.exports.jsx(s.code,{children:"Cylinder"}),", and ",e.exports.jsx(s.code,{children:"Cone"}),"."]})]}),`
`,e.exports.jsx(s.h2,{id:"intro",children:e.exports.jsx(s.a,{href:"#intro",children:"Intro"})}),`
`,e.exports.jsx(s.p,{children:"One of the fundamental applications of computer graphics is to display 3D scenes. The catch, however, is that screens can only display 2D images. Therefore, we need to convert 3D objects into to something that can be viewed in 2D. A common method, which we will use in this lab, is to compose objects using triangles, then project those triangles to the screen."}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Why use triangles?"}),e.exports.jsx(s.p,{children:"Triangles are the only polygon that both have area and are guaranteed to lie on a single plane. This avoids a lot of issues, including making it easy to project them onto a 2D screen."}),e.exports.jsx(s.p,{children:"For historical and practical reasons, triangles are optimized to be rendered really quickly on computer hardware. Graphics cards often have dedicated circuits optimized for this function."})]}),`
`,e.exports.jsx(s.p,{children:"In this lab, you will be breaking up 3D objects into a lot of triangles that, when put together, look as much like the desired 3D shape as possible. Curved surfaces can be better approximated using more triangles, but keep in mind that the more triangles we draw the more triangles we compute!"}),`
`,e.exports.jsx(s.h3,{id:"objectives",children:e.exports.jsx(s.a,{href:"#objectives",children:"Objectives"})}),`
`,e.exports.jsx(s.p,{children:"By the end of this lab, you will:"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Learn to use trimeshes as a way to approximately represent an object's surface."}),`
`,e.exports.jsx(s.li,{children:"Implement a Cube and a Sphere with changing tessellation."}),`
`]}),`
`,e.exports.jsx(s.div,{className:"warning-callout callout",children:e.exports.jsx(s.p,{children:"You will need the code you write in this lab for your Realtime Projects!"})}),`
`,e.exports.jsx(s.h2,{id:"objects-as-trimeshes",children:e.exports.jsx(s.a,{href:"#objects-as-trimeshes",children:"Objects as Trimeshes"})}),`
`,e.exports.jsxs(s.p,{children:["We can represent any ",e.exports.jsx(s.strong,{children:"surface"})," as a triangle mesh. Conveniently, most objects in the world are defined by a surface. These objects are usually a closed surface bounding a volume, like a Cube, Cone, Cylinder, or Sphere."]}),`
`,e.exports.jsxs(s.p,{children:["A collection of triangles that form a mesh is called a ",e.exports.jsx(s.strong,{children:"triangle mesh"}),", or ",e.exports.jsx(s.strong,{children:"trimesh"})," for short. The process of turning a shape or surface into a triangle mesh is called ",e.exports.jsx(s.strong,{children:"tessellation"}),"."]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/trimeshExamples.jpg",alt:"trimesh examples"}],figNumber:1,figCaption:"Trimesh Object Examples"}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Can everything be a mesh?"}),e.exports.jsxs(s.p,{children:["Actually, some things cannot be easily represented as a trimesh. For example, you don't typically think about fog as a surface, so it doesn't make sense to represent it as a trimesh. There are other ways to represent objects like fog, such as volumetric rendering. If you're interested, you can read more about volumetric rendering ",e.exports.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Volume_rendering",children:"here"}),"."]})]}),`
`,e.exports.jsx(s.h3,{id:"level-of-detail-tessellation-level",children:e.exports.jsx(s.a,{href:"#level-of-detail-tessellation-level",children:"Level-of-Detail (Tessellation Level)"})}),`
`,e.exports.jsxs(s.p,{children:["Recall from the Ray projects that you represented the 3D shapes as implicit equations. This technically allows for infinite resolution (up to floating point limits). On the other hand, trimeshes are approximations. The more triangles used to represent a surface, the more realistic the rendering, but the more computation is required. The number of triangles used, and thus the level-of-detail of the 3D shape, is called the ",e.exports.jsx(s.strong,{children:"tessellation level"}),"."]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/tesselationLevel.jpg",alt:"increasing tessellation on human head"}],figNumber:2,figCaption:"A Face with Increasing Tessellation Levels"}),`
`,e.exports.jsx(s.h2,{id:"trimesh-representation",children:e.exports.jsx(s.a,{href:"#trimesh-representation",children:"Trimesh Representation"})}),`
`,e.exports.jsx(s.p,{children:"Trimeshes are composed of triangles which are composed of vertex positions (for rendering the triangle) and normals (for lighting the triangle)."}),`
`,e.exports.jsx(s.h3,{id:"a-single-triangle",children:e.exports.jsx(s.a,{href:"#a-single-triangle",children:"A Single Triangle"})}),`
`,e.exports.jsxs(s.p,{children:["As you can probably guess, we render a triangle from a triplet of vertex positions in an ",e.exports.jsx(s.code,{children:"std::vector<float> vertexPositions"}),". It's important to note, in our case, the winding order of the vertices is ",e.exports.jsx(s.strong,{children:"counter-clockwise"}),"."]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/vertexPositions.jpg",alt:"Counter-clockwise Vertex Positions"}],figNumber:3,figCaption:"Counter-clockwise Vertex Positions"}),`
`,e.exports.jsx(s.h4,{id:"per-face-normals",children:e.exports.jsx(s.a,{href:"#per-face-normals",children:"Per-Face Normals"})}),`
`,e.exports.jsx(s.p,{children:"If we want every point on the triangle to have the same normal, we can use per-face normals. Since we have 3 vertices, we can form two vectors to calculate the normal by taking the cross product of those two vectors."}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/perFaceNormal.jpg",alt:"per face normal"}],figNumber:4,figCaption:"A Normal For A Triangle Face"}),`
`,e.exports.jsx(s.h4,{id:"per-vertex-normals",children:e.exports.jsx(s.a,{href:"#per-vertex-normals",children:"Per-Vertex Normals"})}),`
`,e.exports.jsx(s.p,{children:"What if we want every triangle vertex to have a different normal? Then we use per-vertex normals. An example of a situation where we would want per-vertex normals is for curved surfaces or the tip of a cone."}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/spherePerVertex.jpg",alt:"normals on a sphere"}],figNumber:5,figCaption:"Sphere Per-Vertex Normals, as Highlighted in Red"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/conePerVertex.jpg",alt:"normals on a cone"}],figNumber:6,figCaption:"Cone Per-Vertex Normals, as Highlighted in Red"}),`
`,e.exports.jsxs(s.p,{children:["For our purposes, we will be using per-vertex normals. As shown below, each triangle is represented by 6 numbers, including ",e.exports.jsx(s.em,{children:"x"}),", ",e.exports.jsx(s.em,{children:"y"}),", and ",e.exports.jsx(s.em,{children:"z"})," for vertex positions and ",e.exports.jsx(s.em,{children:"i"}),", ",e.exports.jsx(s.em,{children:"j"})," and ",e.exports.jsx(s.em,{children:"k"})," for normals in ",e.exports.jsx(s.code,{children:"std::vector<float> m_vertexData"}),". We use ",e.exports.jsx(s.code,{children:"m_vertexData"})," since it's shorter than ",e.exports.jsx(s.code,{children:"m_vertexPositionsAndNormals"}),", but also because we might want to add other information per vertex such as vertex color later in the course. Again, the winding order of vertices and normals is ",e.exports.jsx(s.strong,{children:"counter-clockwise"}),"."]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/m_vertexData.jpg",alt:"normals on a cone"}],figNumber:7,figCaption:"Visual representation of m_vertexData"}),`
`,e.exports.jsx(s.h4,{id:"winding-order",children:e.exports.jsx(s.a,{href:"#winding-order",children:"Winding Order"})}),`
`,e.exports.jsx(s.p,{children:"Why Do Normals And Winding Order Matter?"}),`
`,e.exports.jsx(s.p,{children:"In this lab and in the Realtime projects, you need the correct winding order of positions and normals to properly render the objects. This is because of backface culling. Backface culling is a rendering technique that determines which side of the triangle is visible."}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/backfaceCulling.gif",alt:"back face culling"}],figNumber:8,figCaption:"Backface Culling on a Triangle"}),`
`,e.exports.jsxs(s.p,{children:["You can read more about backface culling ",e.exports.jsx(s.a,{href:"https://www.easytechjunkie.com/what-is-back-face-culling.htm",children:"here"}),"."]}),`
`,e.exports.jsx(s.h3,{id:"multiple-triangles",children:e.exports.jsx(s.a,{href:"#multiple-triangles",children:"Multiple Triangles"})}),`
`,e.exports.jsxs(s.p,{children:["Recall that tessellation levels determines the number of triangles used in a trimesh. As shown below, to represent a collection of triangles, we just append the additional triangle information onto the back of the list. In our case, this list is still represented as ",e.exports.jsx(s.code,{children:"std::vector<float> m_vertexData"}),"."]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/m_vertexData2.jpg",alt:"visualization of m_vertexData"}],figNumber:9,figCaption:"Vertex Data of a Cube"}),`
`,e.exports.jsxs(s.div,{className:"success-callout callout",children:[e.exports.jsx(s.p,{children:e.exports.jsx(s.strong,{children:"Notice in Figure 7:"})}),e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"m_vertexData"})," interleaves vertex positions and normals for each point."]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"m_vertexData"})," can contain repeats since points of multiple triangles will be in the same place to form a mesh."]}),`
`]})]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:" Hold on... surely we don't need to have all those repeated vertices "}),e.exports.jsxs(s.p,{children:["If the repeated vertex data looks inefficient to you, you might be interested in ",e.exports.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Triangle_strip",children:"triangle strips"}),", ",e.exports.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Triangle_fan",children:"triangle fans"}),", etc."]})]}),`
`,e.exports.jsx(s.h2,{id:"getting-started",children:e.exports.jsx(s.a,{href:"#getting-started",children:"Getting Started"})}),`
`,e.exports.jsx(s.p,{children:"To summarize:"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"A shape can be represented as a variable number of triangles, depending on the level of detail"}),`
`,e.exports.jsx(s.li,{children:"A collection of triangles can be represented as a list of positions and normals"}),`
`]}),`
`,e.exports.jsx(s.p,{children:"Now, all that remains is to make our own implementation. At a high level, we are going to take in a shape, a level of detail, and spit out the list of points representing a trimesh!"}),`
`,e.exports.jsx(s.h3,{id:"stencil-code",children:e.exports.jsx(s.a,{href:"#stencil-code",children:"Stencil Code"})}),`
`,e.exports.jsx(s.h4,{id:"the-code",children:e.exports.jsx(s.a,{href:"#the-code",children:"The Code"})}),`
`,e.exports.jsxs(s.p,{children:["Take a look at our stencil code. The only files you need to concern yourself with in this lab are ",e.exports.jsx(s.code,{children:"Triangle.h/cpp"}),", ",e.exports.jsx(s.code,{children:"Cube.h/cpp"}),", and ",e.exports.jsx(s.code,{children:"Sphere.h/cpp"}),", which are all located in the ",e.exports.jsx(s.code,{children:"shapes/"})," directory."]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.em,{children:"There are two additional classes,"})," ",e.exports.jsx(s.code,{children:"Cylinder"})," ",e.exports.jsx(s.em,{children:"and"})," ",e.exports.jsx(s.code,{children:"Cone"}),". ",e.exports.jsx(s.em,{children:"You will implement those in the first Realtime project."})]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["Each shape has a member variable, ",e.exports.jsx(s.code,{children:"std::vector<GLfloat> m_vertexData"}),". You will be editing this list with the positions and normals for each shape. ",e.exports.jsxs(s.strong,{children:["Note that ",e.exports.jsx(s.code,{children:"m_vertexData"})," alternates between vertex positions and normals!"]})]}),`
`,e.exports.jsxs(s.p,{children:["Each shape will also have an ",e.exports.jsx(s.code,{children:"int m_param1"})," and/or ",e.exports.jsx(s.code,{children:"int m_param2"}),". These correspond to the parameter slider values you saw earlier."]}),`
`,e.exports.jsxs(s.div,{className:"success-callout callout",children:[e.exports.jsxs(s.p,{children:["For our purposes, ",e.exports.jsx(s.strong,{children:"each shape is centered at the origin and has a radius of 0.5. In other words, they lie in the range [-0.5, 0.5] on all axes."})]}),e.exports.jsxs(s.p,{children:["We use the following coordinate system: ",e.exports.jsx(s.em,{children:"x"})," points to the right, ",e.exports.jsx(s.em,{children:"y"})," points upwards, and ",e.exports.jsx(s.em,{children:"z"}),` points out of the screen towards the viewer.\r
`,e.exports.jsx(s.img,{src:"/labs/lab8/openglCoordSys.png",alt:"3D coordinate system"})]})]}),`
`,e.exports.jsx(s.h4,{id:"the-gui",children:e.exports.jsx(s.a,{href:"#the-gui",children:"The GUI"})}),`
`,e.exports.jsx(s.p,{children:"When you first run the code, you'll see a GUI pop up that looks like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/gui.png",alt:"trimesh GUI"}],figNumber:10,figCaption:"Trimeshes GUI"}),`
`,e.exports.jsx(s.p,{children:"On the left side of the GUI, there are toggles to change the shape and sliders to change parameter 1 and parameter 2. The parameters control the level of detail of each shape. We'll go into detail about what specifically the parameters do later in the handout."}),`
`,e.exports.jsxs(s.p,{children:["On the right side of the GUI, you will eventually see the shapes generated from ",e.exports.jsx(s.code,{children:"m_vertexData"}),". You won't see anything right now because ",e.exports.jsx(s.code,{children:"m_vertexData"})," is empty."]}),`
`,e.exports.jsx(s.h3,{id:"draw-a-triangle",children:e.exports.jsx(s.a,{href:"#draw-a-triangle",children:"Draw a Triangle"})}),`
`,e.exports.jsx(s.p,{children:"You will first draw a triangle."}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.p,{children:["In ",e.exports.jsx(s.code,{children:"Triangle.cpp"}),", fill out the ",e.exports.jsx(s.code,{children:"setVertexData()"})," function. This function should update ",e.exports.jsx(s.code,{children:"m_vertexData"})," with positions and normals. Remember that the normals are unit vectors!"]}),e.exports.jsx(s.p,{children:"Use the following coordinate points:"}),e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"(-0.5, 0.5, 0.0)"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"(-0.5, -0.5, 0.0)"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"(0.5, -0.5, 0.0)"})}),`
`]})]}),`
`,e.exports.jsx(s.p,{children:"Your triangle should look like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/triangle.png",alt:"triangle"}],figNumber:11,figCaption:"Triangle Expected Output"}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"Notice that if you spin the triangle around, it'll disappear. This is backface culling!"}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"cube",children:e.exports.jsx(s.a,{href:"#cube",children:"Cube"})}),`
`,e.exports.jsx(s.p,{children:"Now that you know how to create a triangle, it's time to render a Cube :)"}),`
`,e.exports.jsx(s.div,{className:"warning-callout callout",children:e.exports.jsx(s.p,{children:"There are multiple ways you can implement a Cube. If you find a way that's better than how we outlined it below, feel free to implement it your way!"})}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"The Cube is centered at the origin and has a radius of 0.5. This means that it lies in the range [-0.5, 0.5] on all axes."}),`
`,e.exports.jsx(s.li,{children:"The Cube is also axis-aligned, meaning each face will be perpendicular to the axes!"}),`
`]})}),`
`,e.exports.jsx(s.h3,{id:"tile",children:e.exports.jsx(s.a,{href:"#tile",children:"Tile"})}),`
`,e.exports.jsx(s.p,{children:"To create our Cube, you'll first create a plane comprised of two triangles as shown below."}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.p,{children:["In ",e.exports.jsx(s.code,{children:"Cube.cpp"}),":"]}),e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Uncomment the ",e.exports.jsx(s.code,{children:"makeTile()"})," function call in ",e.exports.jsx(s.code,{children:"setVertexData()"})]}),`
`,e.exports.jsxs(s.li,{children:["Implement the ",e.exports.jsx(s.code,{children:"makeTile()"})," function. This function should update ",e.exports.jsx(s.code,{children:"m_vertexData"})," with a plane made of two triangles created from the input points. Use what you learned from making a Triangle to do this! You will use this function for the next task.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsxs(s.em,{children:[e.exports.jsx(s.code,{children:"makeTile()"})," takes in four input points, but you may not need to use all four points!"]})}),`
`]}),`
`]}),`
`]}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"You may find the following glm functions helpful:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"glm::vec3 glm::normalize(glm::vec3 v);"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"glm::vec3 glm::cross(glm::vec3 v1, glm::vec3 v2);"})}),`
`]}),`
`]})]}),`
`,e.exports.jsx(s.p,{children:"Your tile should look like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/tile.png",alt:"tile"}],figNumber:12,figCaption:"Tile Expected Output"}),`
`,e.exports.jsx(s.h3,{id:"cube-face",children:e.exports.jsx(s.a,{href:"#cube-face",children:"Cube Face"})}),`
`,e.exports.jsx(s.p,{children:"Now, that you have your tile, you can create one face of the Cube with tessellation!"}),`
`,e.exports.jsx(s.p,{children:"Notice how parameter 1 controls the number of tiles in each row and column:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/tileParams.png",alt:"tile parameters"}],figNumber:13,figCaption:"Cube Face Levels of Detail"}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.p,{children:["In ",e.exports.jsx(s.code,{children:"Cube.cpp"})]}),e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Comment out the ",e.exports.jsx(s.code,{children:"makeTile()"})," function call in ",e.exports.jsx(s.code,{children:"setVertexData()"})," and uncomment the ",e.exports.jsx(s.code,{children:"makeFace()"})," function call."]}),`
`,e.exports.jsxs(s.li,{children:["Complete the ",e.exports.jsx(s.code,{children:"makeFace()"})," function using the ",e.exports.jsx(s.code,{children:"makeTile()"})," function you wrote in the previous task. ",e.exports.jsx(s.code,{children:"m_param1"})," contains the parameter 1 value.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.em,{children:"Note that when we generate a face of the Cube, it will be perpendicular to each axis."})}),`
`]}),`
`]}),`
`]})]}),`
`,e.exports.jsx(s.p,{children:"Your face should look like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/faceTessellation.gif",alt:"cube face tessellation"}],figNumber:14,figCaption:"Cube Face Expected Output"}),`
`,e.exports.jsx(s.h3,{id:"full-cube",children:e.exports.jsx(s.a,{href:"#full-cube",children:"Full Cube"})}),`
`,e.exports.jsx(s.p,{children:"We now have one side of our Cube!"}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.p,{children:["Implement all 6 sides of your Cube using the ",e.exports.jsx(s.code,{children:"makeFace()"})," function you implemented in the previous task."]}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[`Remember that the Cube has a radius of 0.5 and lies in the bounds [-0.5, 0.5] on all axes.\r
`,e.exports.jsx(s.em,{children:"It may be helpful to draw a diagram of the Cube to figure out the positions of all its corners!"})]}),`
`]})]}),`
`,e.exports.jsx(s.p,{children:"Your Cube should now look like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/cube.gif",alt:"A Cube Tessellating"}],figNumber:15,figCaption:"Full Cube Expected Output"}),`
`,e.exports.jsx(s.h2,{id:"sphere",children:e.exports.jsx(s.a,{href:"#sphere",children:"Sphere"})}),`
`,e.exports.jsx(s.p,{children:"Yay! Congratulations on making your Cube! Now it's time to make a Sphere."}),`
`,e.exports.jsx(s.p,{children:"As shown below, we can think of the Sphere like an orange. Oranges are made up of wedges and each wedge is made up segments. We can build an orange (aka a sphere) by procedurally generating a collection of orange wedges."}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/orange.jpg",alt:"orange anatomy"}],figNumber:16,figCaption:"Orange Segments create Orange Wedges that creates an Orange"}),`
`,e.exports.jsx(s.p,{children:"The orange analogy will be helpful in understanding the Sphere parameters. As shown below, the shape parameters for Sphere are slightly different than Cube. Parameter 1 controls the number of 'orange segments' (like latitude), and parameter 2 controls the number of 'orange wedges' (like longitude)."}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Longitude and Latitude"}),e.exports.jsx(s.p,{children:e.exports.jsx(s.img,{src:"/labs/lab8/latitude-longitude.gif",alt:"lat_long"})})]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/sphereParams.jpg",alt:"sphere parameters"}],figNumber:17,figCaption:"Sphere Levels of Detail"}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsx(s.p,{children:"Like Cube, the Sphere is centered at the origin and has a radius of 0.5, so it lies in the bounds [-0.5, 0.5] on all axes."})}),`
`,e.exports.jsx(s.h3,{id:"spherical-coordinates",children:e.exports.jsx(s.a,{href:"#spherical-coordinates",children:"Spherical Coordinates"})}),`
`,e.exports.jsx(s.p,{children:"We can represent this 'orange wedge and segment' idea using spherical coordinates. In terms of spherical coordinates, parameter 1 controls \u{1D719} and parameter 2 controls \u{1D703}."}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Refresher: The Spherical Coordinate System"}),e.exports.jsxs(s.p,{children:["Remember polar coordinates (",e.exports.jsx(s.em,{children:"r"}),", \u{1D703}) from high school geometry? Spherical coordinates (",e.exports.jsx(s.em,{children:"r"}),", \u{1D703}, \u{1D719}) are like polar coordinates but in 3D! The spherical coordinate system specifies a 3D point in space using (",e.exports.jsx(s.em,{children:"r"}),", \u{1D703}, \u{1D719}). for more details, read this ",e.exports.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Spherical_coordinate_system",children:"Wikipedia article on the Spherical Coordinate System"})," :)"]})]}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/sphericalCoordSys.jpg",alt:"spherical coordinate system"}],figNumber:18,figCaption:"The Spherical Coordinate System"}),`
`,e.exports.jsx(s.h3,{id:"wedge",children:e.exports.jsx(s.a,{href:"#wedge",children:"Wedge"})}),`
`,e.exports.jsx(s.p,{children:"Similar to making a Cube, the first step in creating a sphere is to create a tile that can be replicated across the sphere depending on the level of detail."}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.p,{children:["In ",e.exports.jsx(s.code,{children:"Sphere.cpp"}),", implement the ",e.exports.jsx(s.code,{children:"makeTile()"})," function. This function should update ",e.exports.jsx(s.code,{children:"m_vertexData"}),"."]}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"You may find the following functions helpful:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"glm::vec3 glm::normalize(glm::vec3 v);"})}),`
`]}),`
`]}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note:"})," The normals are calculated differently from those in Cube. Refer to the diagram below for what your normals should look like. ",e.exports.jsx(t,{images:[{src:"/labs/lab8/sphereNormals.jpg",alt:"sphere normals"}],figNumber:19,figCaption:"Sphere Normals Emanating From the Origin"})]}),`
`]})]}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Uncomment the ",e.exports.jsx(s.code,{children:"makeWedge()"})," function call in ",e.exports.jsx(s.code,{children:"setVertexData()"})]}),`
`,e.exports.jsxs(s.li,{children:["Implement the ",e.exports.jsx(s.code,{children:"makeWedge()"})," function using the ",e.exports.jsx(s.code,{children:"makeTile()"})," function you wrote."]}),`
`]}),e.exports.jsxs(s.p,{children:["Remember that we are making a wedge, so you need to pay attention to ",e.exports.jsx(s.code,{children:"m_param1"})," and \u{1D719}. Refer to the top half of ",e.exports.jsx(s.a,{href:"#figure-17",children:"Figure 17"})," for how ",e.exports.jsx(s.code,{children:"m_param1"})," affects the level of detail. Also note that everything is in radians!"]}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"Hint: You may find the following functions helpful:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"float glm::radians(float x)"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"float glm::sin(float x)"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"float glm::cos(float x)"})}),`
`]}),`
`]}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"Hint: You may also find these equations useful:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"x = r * sin(\u{1D719}) * cos(\u{1D703})"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"y = r * cos(\u{1D719})"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"z = r * sin(\u{1D719}) * sin(\u{1D703})"})}),`
`]}),`
`]})]}),`
`,e.exports.jsx(s.p,{children:"Your wedge should look like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/wedge.gif",alt:"wedge tessellating"}],figNumber:20,figCaption:"A Wedge of a Sphere Tessellating"}),`
`,e.exports.jsx(s.h3,{id:"full-sphere",children:e.exports.jsx(s.a,{href:"#full-sphere",children:"Full Sphere"})}),`
`,e.exports.jsxs(s.p,{children:["We can now use our ",e.exports.jsx(s.code,{children:"makeWedge()"})," function to generate a full sphere!"]}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Comment out the ",e.exports.jsx(s.code,{children:"makeWedge()"})," function call in ",e.exports.jsx(s.code,{children:"setVertexData()"})," and uncomment the ",e.exports.jsx(s.code,{children:"makeOrange()"})," function call."]}),`
`,e.exports.jsxs(s.li,{children:["Implement the ",e.exports.jsx(s.code,{children:"makeOrange()"})," function using ",e.exports.jsx(s.code,{children:"makeWedge()"}),"."]}),`
`]}),e.exports.jsxs(s.p,{children:["Remember that we are making multiple wedges (aka a Sphere), so you need to pay attention to ",e.exports.jsx(s.code,{children:"m_param2"})," and \u{1D703}. Refer to the bottom half of ",e.exports.jsx(s.a,{href:"#figure-17",children:"Figure 17"})," for how ",e.exports.jsx(s.code,{children:"m_param2"})," affects the level of detail."]})]}),`
`,e.exports.jsx(s.p,{children:"Your sphere should look like this:"}),`
`,e.exports.jsx(t,{images:[{src:"/labs/lab8/sphere.gif",alt:"Completed Sphere"}],figNumber:21,figCaption:"A Completed Sphere"}),`
`,e.exports.jsx(s.h2,{id:"end",children:e.exports.jsx(s.a,{href:"#end",children:"End"})}),`
`,e.exports.jsx(s.p,{children:"Now you're ready to show your work to a TA and get checked off! Congrats on finishing the Trimeshes lab :)"}),`
`,e.exports.jsx(s.h3,{id:"food-for-thought",children:e.exports.jsx(s.a,{href:"#food-for-thought",children:"Food For Thought"})}),`
`,e.exports.jsxs(s.p,{children:["Next lab, you'll delve into the graphics pipeline by using OpenGL to render triangle meshes. OpenGL uses VBOs (vertex buffer objects) which store a list of vertices similar to ",e.exports.jsx(s.code,{children:"m_vertexData"})," in this lab. You'll learn more about this next week, but this is notably why ",e.exports.jsx(s.code,{children:"m_vertexData"})," interleaves position and normal data for each vertex. Good luck!"]}),`
`,e.exports.jsx(i,{})]})]})}function h(r={}){const{wrapper:s}=r.components||{};return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(o,r)})):o(r)}export{h as default,c as documentProps};
