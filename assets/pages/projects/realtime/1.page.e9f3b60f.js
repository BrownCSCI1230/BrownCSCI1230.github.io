import{j as e}from"../../../chunk-903e764a.js";import{I as t}from"../../../chunk-30f40460.js";import{M as i}from"../../../chunk-b2e2a089.js";const c={title:"Project 5"};function r(n){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",code:"code",ul:"ul",div:"div"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#project-5-lights-camera",children:"Project 5: Lights, Camera"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#introduction",children:"Introduction"})}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#requirements",children:"Requirements"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#parsing-the-scene",children:"Parsing the scene"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#shape-tessellation",children:"Shape tessellation"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#camera",children:"Camera"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#realtime-pipeline",children:"Realtime Pipeline"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#lights",children:"Lights"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#results",children:"Results"})})]})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#stencil-code",children:"Stencil Code"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#readme",children:"README"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#grading",children:"Grading"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#extra-credit",children:"Extra Credit"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#faq--hints",children:"FAQ & Hints"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#reference-images",children:"Reference Images"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#submission",children:"Submission"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"project-5-lights-camera",children:e.exports.jsx(s.a,{href:"#project-5-lights-camera",children:"Project 5: Lights, Camera"})}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.a,{href:"https://classroom.github.com/a/1Fjza6bx",target:"_blank",rel:"noopener noreferrer",children:"Github Classroom assignment"})}),`
`,e.exports.jsxs(s.p,{children:["You can find the algo for this project ",e.exports.jsx(s.a,{href:"/projects/realtime/1-algo",children:"here"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["Example scene files to render can be found in ",e.exports.jsx(s.a,{href:"https://github.com/BrownCSCI1230/scenefiles",target:"_blank",rel:"noopener noreferrer",children:"this Github repo"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"introduction",children:e.exports.jsx(s.a,{href:"#introduction",children:"Introduction"})}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/glPipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(s.p,{children:"In the Ray assignments, you implemented a ray tracer that projects a 3-dimensional scene on a 2-dimensional plane. Ray tracing, as you probably have experienced, can be very slow."}),`
`,e.exports.jsxs(s.p,{children:["In this assignment, you will design a ",e.exports.jsx(s.strong,{children:"real-time"})," scene viewer using components from previous labs including Parsing, Transformations, Trimeshes, VAOs, and Shaders."]}),`
`,e.exports.jsx(s.h2,{id:"requirements",children:e.exports.jsx(s.a,{href:"#requirements",children:"Requirements"})}),`
`,e.exports.jsx(s.h3,{id:"parsing-the-scene",children:e.exports.jsx(s.a,{href:"#parsing-the-scene",children:"Parsing the scene"})}),`
`,e.exports.jsxs(s.p,{children:[`Similarly to ray, you will use the same scene parser from the Parsing lab to read in scene
files. You are expected to call your scene parser to get your metadata and set up the scene
as you see fit when `,e.exports.jsx(s.code,{children:"GLRenderer::sceneChange()"}),` is called. You can access the currently stored
scene file by calling `,e.exports.jsx(s.code,{children:"settings.sceneFilePath"}),"."]}),`
`,e.exports.jsx(s.p,{children:`(Move above to 3.1)
Refer to section 3.1 on how to work with the parser and scene changes in the codebase.`}),`
`,e.exports.jsx(s.h3,{id:"shape-tessellation",children:e.exports.jsx(s.a,{href:"#shape-tessellation",children:"Shape tessellation"})}),`
`,e.exports.jsxs(s.p,{children:["In lab 8, you should have implemented tessellation for two shapes: ",e.exports.jsx(s.strong,{children:"cube"})," and ",e.exports.jsx(s.strong,{children:"sphere"}),`. In this
project, you are expected to also include tessellation for `,e.exports.jsx(s.strong,{children:"cone"})," and ",e.exports.jsx(s.strong,{children:"cylinder"}),`. The descrptions
of these shapes remain the same as in ray:`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"Cube"}),": A unit cube (i.e. sides of length 1) centered at the origin"]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"Sphere"}),": A sphere centered at the origin with radius 0.5."]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"Cone"}),": A cone centered at the origin with height 1 whose bottom cap has radius 0.5."]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.strong,{children:"Cylinder"}),`: A cylinder centered at the origin with height 1 whose top and bottom caps
have radius 0.5.`]}),`
`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/CylinderExample.png",alt:"TODO"},{src:"/projects/realtime1/ConeExample.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Tessellated cylinder and cone"}),`
`,e.exports.jsx(s.p,{children:"The tessellation parameters should control the vertical and radial tessellations just as they do for the sphere. As a reminder, parameter 1 controls tessellation along the longitude direction while parameter 2 controls tessellation along the latitude direction."}),`
`,e.exports.jsx(s.p,{children:"Be especially careful when calculating normals for the tip of the cone: make sure that they are aligned with the surface of the cone and not pointing straight up."}),`
`,e.exports.jsx(s.p,{children:`We recommend working on these shapes in your lab 8 code prior to porting them into your Lights, Camera project.
This will allow you to use the visualizer to debug position and normals.`}),`
`,e.exports.jsx(s.p,{children:"While the specifics of your tessellation code are up to you, you are expected to design your program in an extensible, object-oriented way. This means minimal code duplication and no 1000 line branch structures (such as if... else... statements). You will lose points if you do not follow these guidelines."}),`
`,e.exports.jsx(s.h3,{id:"camera",children:e.exports.jsx(s.a,{href:"#camera",children:"Camera"})}),`
`,e.exports.jsxs(s.p,{children:["Your camera for Ray only needed to produce a view matrix. For Realtime, you must produce ",e.exports.jsx(s.strong,{children:"both"})," a view and projection matrix given the scene file's camera parameters. The projection matrix is needed to convert from camera space to clip space for OpenGL to render the scene correctly."]}),`
`,e.exports.jsxs(s.p,{children:["To implement your view matrix, you ",e.exports.jsx(s.strong,{children:"are not"})," allowed to use ",e.exports.jsx(s.code,{children:"glm::lookAt"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["To implement your projection matrix, you ",e.exports.jsx(s.strong,{children:"are"})," allowed to use ",e.exports.jsx(s.code,{children:"glm::perspective"}),"."]}),`
`,e.exports.jsx(s.p,{children:"You will need to design your camera in an extensible manner as you will be expanding on its funcitonality in the next project."}),`
`,e.exports.jsx(s.h3,{id:"realtime-pipeline",children:e.exports.jsx(s.a,{href:"#realtime-pipeline",children:"Realtime Pipeline"})}),`
`,e.exports.jsxs(s.p,{children:[`Welcome to the meat and potatoes of this project! You will use everything you have learned from lecture and labs to manipulate the OpenGL pipeline to render scene data.
You will take your parsed scene metadata and use it to construct all necessary VAO/VBO objects and all shader uniform data. Then you will use these in the main render loop of `,e.exports.jsx(s.code,{children:"paintGL"})," to finally render the scene."]}),`
`,e.exports.jsxs(s.p,{children:[`To enforce good program design and to make you think about the design behind the
functionality of OpenGL, we will only allow you to directly call a small amount of
gl* functions within `,e.exports.jsx(s.code,{children:"initializeGl()"}),", ",e.exports.jsx(s.code,{children:"paintGl()"})," and ",e.exports.jsx(s.code,{children:"resizeGl()"}),`. In particular, the
only allowed OpenGL functions within `,e.exports.jsx(s.code,{children:"GLRenderer"})," are: ",e.exports.jsx(s.code,{children:"glClear"}),", ",e.exports.jsx(s.code,{children:"glClearColor"}),", ",e.exports.jsx(s.code,{children:"glEnable"}),", and ",e.exports.jsx(s.code,{children:"glDisable"}),`.
The rest must be contained within abstract and extensibly-designed classes.`]}),`
`,e.exports.jsx(s.h3,{id:"lights",children:e.exports.jsx(s.a,{href:"#lights",children:"Lights"})}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/RGB_channel_integration_test.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Color render example (scene: RBG_channel_integration_test.xml)"}),`
`,e.exports.jsx(s.p,{children:"For this project, your shader should have the following features:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Support for directional lights"}),`
`,e.exports.jsx(s.li,{children:"Ambient, diffuse, and specular intensity computation"}),`
`,e.exports.jsx(s.li,{children:"Final color computation integrating both object and light color"}),`
`,e.exports.jsx(s.li,{children:"Support for up to 8 simultaneous lights"}),`
`]}),`
`,e.exports.jsx(s.p,{children:`Of course, your shader must also perform all the necessary coordinate space conversions
(think MVP matricees) as well as the illumination model computation.`}),`
`,e.exports.jsx(s.p,{children:`As such, it is important to have completed Lab 10 before attempting this part
of the project. Refer to section 7 for more details.`}),`
`,e.exports.jsx(s.h3,{id:"results",children:e.exports.jsx(s.a,{href:"#results",children:"Results"})}),`
`,e.exports.jsx(s.p,{children:`Here are some sample images of what your realtime renderer should be capable of by the end of this
assignment.`}),`
`,e.exports.jsx(s.h2,{id:"stencil-code",children:e.exports.jsx(s.a,{href:"#stencil-code",children:"Stencil Code"})}),`
`,e.exports.jsx(s.p,{children:"You may notice the stencil code provided is minimal--that is by design. To complete this assignment, you will need to have a good understanding of the OpenGL pipeline."}),`
`,e.exports.jsx(s.p,{children:"We have provided for you the following files which you will interact with:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"GLRenderer"}),` : A file containing the initialization of an OpenGL context as well as functions
that are automatically called on certain events. These include: initializeGL, paintGL, and resizeGL.`]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"Settings"})," : Initialized with the same ",e.exports.jsx(s.code,{children:".ini"})," file as the Ray projects"]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"And you have already written the following:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"A scene parser (Lab 05)"}),`
`,e.exports.jsx(s.li,{children:"A basic camera class (Ray projects)"}),`
`,e.exports.jsx(s.li,{children:"Cube and sphere classes (Lab 08)"}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"readme",children:e.exports.jsx(s.a,{href:"#readme",children:"README"})}),`
`,e.exports.jsxs(s.p,{children:["Your repo should include a README in Markdown format with the filename ",e.exports.jsx(s.code,{children:"README.md"}),". This file should contain basic information about your design choices. You should also include any known bugs and any extra credit you\u2019ve implemented."]}),`
`,e.exports.jsxs(s.p,{children:[`For extra credit, please describe what you've done and point out the related part of your code.
If you implement any extra features that requires you to add a parameter for `,e.exports.jsx(s.code,{children:"QSettings.ini"}),`
and `,e.exports.jsx(s.code,{children:"Settings"}),`, please also document it accordingly so that te TAs won't miss anything when
grading your assignment.`]}),`
`,e.exports.jsx(s.h2,{id:"grading",children:e.exports.jsx(s.a,{href:"#grading",children:"Grading"})}),`
`,e.exports.jsx(s.p,{children:"This project is out of 100 points:"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Scene Parser Integration ",e.exports.jsx(s.strong,{children:"(5 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Camera ",e.exports.jsx(s.strong,{children:"(5 points)"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["View Matrix ",e.exports.jsx(s.strong,{children:"(1 point)"})]}),`
`,e.exports.jsxs(s.li,{children:["Projection Matrix ",e.exports.jsx(s.strong,{children:"(4 points)"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Shape Implementations ",e.exports.jsx(s.strong,{children:"(30 points)"}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Cube ",e.exports.jsx(s.strong,{children:"(3 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Sphere ",e.exports.jsx(s.strong,{children:"(3 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Cone ",e.exports.jsx(s.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Cylinder ",e.exports.jsx(s.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Proper Tessellation ",e.exports.jsx(s.strong,{children:"(4 points)"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Realtime Pipeline ",e.exports.jsx(s.strong,{children:"(35 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Object Color ",e.exports.jsx(s.strong,{children:"(5 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Directional Lights ",e.exports.jsx(s.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Multiple Lights (Up to 8 lights) ",e.exports.jsx(s.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Colored Lights ",e.exports.jsx(s.strong,{children:"(5 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Object Positioning ",e.exports.jsx(s.strong,{children:"(5 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["Software Design ",e.exports.jsx(s.strong,{children:"(25 points)"})]}),`
`,e.exports.jsxs(s.li,{children:["README ",e.exports.jsx(s.strong,{children:"(5 points)"})]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"extra-credit",children:e.exports.jsx(s.a,{href:"#extra-credit",children:"Extra Credit"})}),`
`,e.exports.jsx(s.p,{children:"Remember that half-credit requirements count as extra credit if you are not enrolled in the half-credit course."}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Adaptive level of detail:"}),`
Vary the degree of tessellation for your shapes based on:`]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["The number of objects in the scene ",e.exports.jsx(s.strong,{children:"(2 points)"}),": Scenes with more objects have fewer triangles, to keep the scene from getting too complex."]}),`
`,e.exports.jsxs(s.li,{children:["Distance from the object to the camera ",e.exports.jsx(s.strong,{children:"(6 points)"}),": Objects farther from the camera should have fewer triangles than objects closer to the camera."]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Create your own scene file (2 points):"}),`
Create your own scene by writing your own scene file. Refer to the provided scene files and to the `,e.exports.jsx(s.a,{href:"/docs/scenefile-documentation",children:"scene file documentation"})," for examples/information on how these files are structured. Your scene should be interesting enough to be considered as extra credit (in other words, placing two cubes on top of each other is not interesting enough, but building a snowman with a face would be interesting). If you already received extra credit for a custom scene file in the Intersect project, you cannot receive extra credit for the same scene again."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Mesh rendering (5 points):"}),`
Implement a function to load an .OBJ triangle mesh file and render it with OpenGL (i.e. translate the .OBJ data into VBO/VAO data).
To receive credit for this feature, you should include at least one scene file that makes use of a mesh.`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Torus (5 points):"}),`
Add in tessellation support for a torus shape.`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.div,{className:"task-no-number-callout callout",children:e.exports.jsxs(s.p,{children:["CS 1234/2230 students must earn at least ",e.exports.jsx(s.strong,{children:"6 points"})," of extra credit."]})}),`
`,e.exports.jsx(s.h2,{id:"faq--hints",children:e.exports.jsx(s.a,{href:"#faq--hints",children:"FAQ & Hints"})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsxs(s.strong,{children:["Theres nothing showing up for scene ",e.exports.jsx(s.code,{children:"XXX.xml"}),", but I know it works on others:"]}),`
Some scenes only have point lights in the scene; make sure the scene has directional lights`]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"reference-images",children:e.exports.jsx(s.a,{href:"#reference-images",children:"Reference Images"})}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/phongShaderTest.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"phongShaderTest"}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/teapot_test.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"teapot_test"}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/sus.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"sus"}),`
`,e.exports.jsx(t,{images:[{src:"/projects/realtime1/RGB_channel_integration_test.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"RBG_channel_integration_test"}),`
`,e.exports.jsx(s.p,{children:"transform correctness test file."}),`
`,e.exports.jsx(s.p,{children:"texture mapping per shape test file"}),`
`,e.exports.jsx(s.p,{children:"high load adaptive level of detail scene"}),`
`,e.exports.jsx(s.h2,{id:"submission",children:e.exports.jsx(s.a,{href:"#submission",children:"Submission"})}),`
`,e.exports.jsxs(s.p,{children:[`Submit your Github repo for this project to the "Project 5: Lights, Camera" assignment on Gradescope.
Instructions on using Github and Gradescope are available `,e.exports.jsx(s.a,{href:"/docs/github-gradescope-guide",children:"here"}),"."]}),`
`,e.exports.jsx(i,{})]})]})}function h(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(r,n)})):r(n)}export{h as default,c as documentProps};
