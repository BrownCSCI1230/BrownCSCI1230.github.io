import{j as e}from"../../../chunk-6ef03c1b.js";import{I as s}from"../../../chunk-f0aa7aed.js";import{M as i}from"../../../chunk-b9ea0eaf.js";const c={title:"Project 5"};function r(n){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",code:"code",h3:"h3"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#project-5-logan-give-us-a-name",children:"Project 5: Logan Give Us A Name"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#introduction",children:"Introduction"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#deliverables",children:"Deliverables"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#the-stencil",children:"The Stencil"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#trimeshes-part-2",children:"Trimeshes Part 2"}),e.exports.jsx(t.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#detailed-specification",children:"Detailed Specification"})})})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#sceneparser",children:"SceneParser"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#camera-design",children:"Camera design"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#realtime-pipeline",children:"Realtime Pipeline"}),e.exports.jsx(t.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#shader-program-functionality",children:"Shader Program functionality"})})})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#rubric",children:"Rubric"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#extra-credit",children:"Extra Credit"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#faq",children:"FAQ"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#reference-images",children:"Reference Images"})})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"project-5-logan-give-us-a-name",children:e.exports.jsx(t.a,{href:"#project-5-logan-give-us-a-name",children:"Project 5: Logan Give Us A Name"})}),`
`,e.exports.jsxs(t.p,{children:["You can find the algo for this project ",e.exports.jsx(t.a,{href:"/projects/realtime/1-algo",children:"here"}),"."]}),`
`,e.exports.jsx(t.h2,{id:"introduction",children:e.exports.jsx(t.a,{href:"#introduction",children:"Introduction"})}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/glPipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(t.p,{children:"In the Ray assignments, you implemented a ray tracer that projects a 3-dimensional scene on a 2-dimensional plane. Ray-tracing, as you probably have experienced, can be very slow."}),`
`,e.exports.jsxs(t.p,{children:["In this assignment, you will design a ",e.exports.jsx(t.strong,{children:"real-time"})," sceneviewer. In other words, you will implement from scratch the Real-Time Graphics pipeline using components from previous labs including Parsing, Transformations, Trimeshes, VAOs, and Shaders."]}),`
`,e.exports.jsx(t.h2,{id:"deliverables",children:e.exports.jsx(t.a,{href:"#deliverables",children:"Deliverables"})}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Tesselation for the following shapes",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["From Trimeshes Lab",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Sphere"}),`
`,e.exports.jsx(t.li,{children:"Cube"}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Implement for this project",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Cone"}),`
`,e.exports.jsx(t.li,{children:"Cylinder"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.li,{children:"Port your SceneParser from lab 5"}),`
`,e.exports.jsxs(t.li,{children:["Camera",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Extend implementation with perspective projection"}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Setup RealTime pipeline to render scene from parsed metadata",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"create and load basic shader"}),`
`,e.exports.jsx(t.li,{children:"load shape data into VAO/VBO's"}),`
`,e.exports.jsx(t.li,{children:"pass in shader uniforms"}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"the-stencil",children:e.exports.jsx(t.a,{href:"#the-stencil",children:"The Stencil"})}),`
`,e.exports.jsx(t.p,{children:"You may notice the stencil code provided is minimal, that is by design. To complete this assignment you will need to have a good understanding of the OpenGL pipeline."}),`
`,e.exports.jsxs(t.p,{children:["We have provided for you the following. - ",e.exports.jsx(t.code,{children:"GlRenderer"})," : An OpenGL context to draw - ",e.exports.jsx(t.code,{children:"Settings"})," : Initialized with the same main.ini as Ray"]}),`
`,e.exports.jsx(t.p,{children:"And you have already written the following. - A scene parser (Lab 5) - A basic camera class (Ray Project)"}),`
`,e.exports.jsx(t.h2,{id:"trimeshes-part-2",children:e.exports.jsx(t.a,{href:"#trimeshes-part-2",children:"Trimeshes Part 2"})}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/CylinderExample.png",alt:"TODO"},{src:"/projects/realtime1/ConeExample.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Cone and Cylinders should be dimensioned with unit lengths"}),`
`,e.exports.jsx(t.p,{children:"In order to render more complex scenes, you are going to need to implement a tesselator for two new shapes: a Cone and a Cylinder."}),`
`,e.exports.jsx(t.p,{children:"We recommend you implement these shapes in the trimeshes lab code and then copy over the relevant generation code. This will allow you to use the visualizer to debug position and normals."}),`
`,e.exports.jsx(t.p,{children:"While the specifics of your tessellation code are up to you, you are expected to design your program in an extensible, object-oriented way. This means minimal code duplication and no 1000 line branch structures. You will lose points if you do not follow these guidelines."}),`
`,e.exports.jsx(t.h3,{id:"detailed-specification",children:e.exports.jsx(t.a,{href:"#detailed-specification",children:"Detailed Specification"})}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/coneCylinedDiagram.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Cone and Cylinders should be dimensioned with unit lengths"}),`
`,e.exports.jsx(t.p,{children:"The cone and cylinder should have the following properties..."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"height 1"}),`
`,e.exports.jsx(t.li,{children:"base diameter 1"}),`
`,e.exports.jsx(t.li,{children:"axis aligned vertically along (0,1,0)"}),`
`,e.exports.jsx(t.li,{children:"the object space origin is centered halfway (0.5) along the central vertical axis."}),`
`]}),`
`,e.exports.jsx(t.p,{children:"The tesselation parameters should control the vertical and radial tesselations like they did for the sphere."}),`
`,e.exports.jsx(t.p,{children:"Be especially careful when calculating normals for the tip of the cone, make sure that they are aligned with the surface of the cone and not pointing straight up."}),`
`,e.exports.jsx(t.h2,{id:"sceneparser",children:e.exports.jsx(t.a,{href:"#sceneparser",children:"SceneParser"})}),`
`,e.exports.jsx(t.p,{children:"As we are using the same scenefile format from Ray for Realtime, you will need to port over your scene parser to convert the raw scene data into renderable objects."}),`
`,e.exports.jsx(t.p,{children:"Of course the final functionality of the scene parser will depend on how you design your classes and abstractions."}),`
`,e.exports.jsx(t.h2,{id:"camera-design",children:e.exports.jsx(t.a,{href:"#camera-design",children:"Camera design"})}),`
`,e.exports.jsxs(t.p,{children:["Your camera for Ray only needed to produce a view matrix. For Realtime, you must produce ",e.exports.jsx(t.strong,{children:"both"})," a view and projection matrix given the scene file's camera parameters. The Projection matrix is needed to convert from camera space to clip space for OpenGL to render the scene correctly."]}),`
`,e.exports.jsxs(t.p,{children:["To implement your view matrix, you ",e.exports.jsx(t.strong,{children:"are not"})," allowed to use glm::lookAt."]}),`
`,e.exports.jsxs(t.p,{children:["To implement your projection matrix, you ",e.exports.jsx(t.strong,{children:"are"})," allowed to use glm::perspective"]}),`
`,e.exports.jsx(t.p,{children:"You will need to design your camera in an extensible manner as we will be expanding on this funcitonality in Realtime 2."}),`
`,e.exports.jsx(t.h2,{id:"realtime-pipeline",children:e.exports.jsx(t.a,{href:"#realtime-pipeline",children:"Realtime Pipeline"})}),`
`,e.exports.jsx(t.p,{children:"Welcome to the Meat and Potatoes of the project. You will use everything you have learned from lecture and the labs and manipulate the OpenGL pipeline to render the scene data."}),`
`,e.exports.jsx(t.p,{children:"You will take your parsed scene metadata, use it to construct all necessary VAO/VBO objects and all shader uniform data. Then you will use these in the main render loop of paintGL to finally render the scene."}),`
`,e.exports.jsx(t.p,{children:"To enforce good program design and to make you think about the design behind the functionality of OpenGL, we will only allow you to directly call a small amount of gl* functions within initializeGl(), paintGl() and resizeGl() the rest must be contained within abstract and extensibly designed classes."}),`
`,e.exports.jsx(t.p,{children:"You are allowed to directly call..."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"glClearColor"}),`
`,e.exports.jsx(t.li,{children:"glEnable"}),`
`,e.exports.jsx(t.li,{children:"glClear"}),`
`,e.exports.jsx(t.li,{children:"glDisable"}),`
`]}),`
`,e.exports.jsx(t.p,{children:"All other OpenGL functions may not be called directly."}),`
`,e.exports.jsx(t.h3,{id:"shader-program-functionality",children:e.exports.jsx(t.a,{href:"#shader-program-functionality",children:"Shader Program functionality"})}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/RGB_channel_integration_test.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Color Render Example (scene RBG_channel_integration_test.xml)"}),`
`,e.exports.jsx(t.p,{children:"As you have implemented a basic phong model in the shader lab, we will ask you to extend that shader with support for object and light colors."}),`
`,e.exports.jsx(t.p,{children:"Thus your shader should, fow now, have the following features..."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"directional light support only"}),`
`,e.exports.jsx(t.li,{children:"ambient, diffuse, and specular intensity computation"}),`
`,e.exports.jsx(t.li,{children:"final color computation integrating both object and light color"}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Of course your shader must also perform all the necessary coordinate space conversions (think MVP matricies) as well as the illumination model computation."}),`
`,e.exports.jsx(t.h2,{id:"rubric",children:e.exports.jsx(t.a,{href:"#rubric",children:"Rubric"})}),`
`,e.exports.jsx(t.p,{children:"The deliverables are worth the following..."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"5 pts: follow restrictions on OpenGL function calls"}),`
`,e.exports.jsx(t.li,{children:"5 pts: does not use glm::lookAt"}),`
`,e.exports.jsx(t.li,{children:"TODO etc."}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"extra-credit",children:e.exports.jsx(t.a,{href:"#extra-credit",children:"Extra Credit"})}),`
`,e.exports.jsx(t.p,{children:"Remember that half-credit requirements count as extra credit if you are not enrolled in the half-credit course."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsx(t.p,{children:`Adaptive level of detail
Going a step further, you can implement varying degrees of tessellation depending on how many objects in the scene there are. In other words, for scenes with many objects in them, each object should be rendered with fewer triangles than if the scene contained a small number of objects. Look up level of detail for more information. Note: many of the examples you will find discuss distance-based or view-dependent level of detail, which you are not required to do!`}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsx(t.p,{children:`Create your own scene file
Create your own scene by writing your own scene file. Refer to the provided scenefiles for formatting. Your scene should be interesting enough to be considered as extra credit (in other words, placing two cubes on top of each other is not interesting enough, but building a snowman with a face would be interesting!).`}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsx(t.p,{children:`Mesh Loader
Write your own script to load in .obj and load it into your scene. We would need to provide some scenes that make use of this feature if we are going to include it as extra credit.`}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsx(t.p,{children:`Torus
Add in tesselation support for a torus.`}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsx(t.p,{children:"more? there are a lot for realtime 2 so perhaps not"}),`
`]}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"faq",children:e.exports.jsx(t.a,{href:"#faq",children:"FAQ"})}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:`Theres nothing showing up for scene XXX.xml but I know it works on others
Some Scenes only have point lights in the scene, make sure the scene has directional lights`}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"reference-images",children:e.exports.jsx(t.a,{href:"#reference-images",children:"Reference Images"})}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/phongShaderTest.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"phongShaderTest"}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/teapot_test.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"teapot_test"}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/sus.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"sus"}),`
`,e.exports.jsx(s,{images:[{src:"/projects/realtime1/RGB_channel_integration_test.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"RBG_channel_integration_test"}),`
`,e.exports.jsx(t.p,{children:"transform correctness test file."}),`
`,e.exports.jsx(t.p,{children:"texture mapping per shape test file"}),`
`,e.exports.jsx(t.p,{children:"high load adaptive level of detail scene"}),`
`,e.exports.jsx(i,{})]})]})}function h(n={}){const{wrapper:t}=n.components||{};return t?e.exports.jsx(t,Object.assign({},n,{children:e.exports.jsx(r,n)})):r(n)}export{h as default,c as documentProps};
