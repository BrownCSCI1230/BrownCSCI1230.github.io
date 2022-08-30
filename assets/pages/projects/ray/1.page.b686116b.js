import{j as e}from"../../../chunk-e052a03f.js";import{M as o}from"../../../chunk-6daa152b.js";import{I as s}from"../../../chunk-ded7f5eb.js";const c={title:"Project 3"};function r(n){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",strong:"strong",ul:"ul",h3:"h3",code:"code",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",style:"style"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#project-3-intersect",children:"Project 3: Intersect"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#introduction",children:"Introduction"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#requirements",children:"Requirements"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#parsing-the-scene",children:"Parsing the scene"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#generating-and-casting-rays",children:"Generating and casting rays"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#finding-intersection-point",children:"Finding intersection point"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#getting-normals-and-use-them-for-illumination",children:"Getting normals and use them for \u201CIllumination\u201D"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#results",children:"Results"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#project-stencil",children:"Project Stencil"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#codebase",children:"Codebase"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#design",children:"Design"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#extra-credits",children:"Extra Credits"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#readme",children:"README"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#handling-in",children:"Handling in"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#faq--hints",children:"FAQ & Hints"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#nothing-shows-up",children:"Nothing shows up"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#my-ray-tracer-runs-extremely-slow-",children:"My ray tracer runs extremely slow :("})})]})]})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"project-3-intersect",children:e.exports.jsx(t.a,{href:"#project-3-intersect",children:"Project 3: Intersect"})}),`
`,e.exports.jsxs(t.p,{children:["You can find the algo for this project ",e.exports.jsx(t.a,{href:"/projects/ray/1-algo",children:"here"}),"."]}),`
`,e.exports.jsx(t.h2,{id:"introduction",children:e.exports.jsx(t.a,{href:"#introduction",children:"Introduction"})}),`
`,e.exports.jsxs(t.p,{children:["In this assignment, you will implement the ",e.exports.jsx(t.strong,{children:"basic part"})," of your ray tracer, an intersection check pipeline that simulates how ray bounces in a scene."]}),`
`,e.exports.jsx(t.p,{children:"The following diagram shows an example of one ray shooting through a pixel on the viewplane and intersecting with a sphere in the scene. You ultimate goal of this assignment is to implement this process with the given scene data."}),`
`,e.exports.jsx(s,{images:[{src:"/projects/ray1/cast_ray.png",alt:"TODO"}],figNumber:1,targetWidth:"20%",figCaption:"Casting ray from camera."}),`
`,e.exports.jsx(t.h2,{id:"requirements",children:e.exports.jsx(t.a,{href:"#requirements",children:"Requirements"})}),`
`,e.exports.jsx(t.p,{children:"This assignment is out of 100 points"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Parsing the scene ",e.exports.jsx(t.strong,{children:"(5pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Casting ray from camera ",e.exports.jsx(t.strong,{children:"(10pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Intersection check pipeline ",e.exports.jsx(t.strong,{children:"(35pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Four shape primitives (implicit functions and normals) ",e.exports.jsx(t.strong,{children:"(20pts)"}),":",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Cube ",e.exports.jsx(t.strong,{children:"(5pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Sphere ",e.exports.jsx(t.strong,{children:"(5pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Cylinder ",e.exports.jsx(t.strong,{children:"(10pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Cone ",e.exports.jsx(t.strong,{children:"(10pts)"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Efficiency ",e.exports.jsx(t.strong,{children:"(15pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["Software Engineering & Stability ",e.exports.jsx(t.strong,{children:"(10pts)"})]}),`
`,e.exports.jsxs(t.li,{children:["README ",e.exports.jsx(t.strong,{children:"(5pts)"})]}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"parsing-the-scene",children:e.exports.jsx(t.a,{href:"#parsing-the-scene",children:"Parsing the scene"})}),`
`,e.exports.jsx(t.p,{children:"You are going to use the same scenefile from the parser lab to describe a scene. For your ray tracer, you will load the scene from a scenefile, parse it, and then render the scene with the ray tracing algorithm."}),`
`,e.exports.jsxs(t.p,{children:["Hence, first thing first, you need to be able to correctly parse the scene, which you have already completed in the parsing lab. ",e.exports.jsx(t.strong,{children:"If you haven't, please make sure you finish the parsing lab first before working on the ray project."})]}),`
`,e.exports.jsx(t.p,{children:"Please refer to section 3.1 on where to implement the parser."}),`
`,e.exports.jsx(t.h3,{id:"generating-and-casting-rays",children:e.exports.jsx(t.a,{href:"#generating-and-casting-rays",children:"Generating and casting rays"})}),`
`,e.exports.jsxs(t.p,{children:["In order to generate and cast rays into the scene, you will need to shoot rays through a pixel on the viewplane. For basic requirements, ",e.exports.jsx(t.strong,{children:"you are only required to shoot one ray through the center of each pixel"}),"."]}),`
`,e.exports.jsx(t.p,{children:`You may notice that your outputs have "jaggies" on edges like the image shown below.
These are aliasing due to the low sampling rate, so don't worry! Check out the extra credit section if you are interested in exploring ways to resolve them!`}),`
`,e.exports.jsx(s,{images:[{src:"/projects/ray1/jaggies.png",alt:"TODO"}],figNumber:2,targetWidth:"20%",figCaption:"Casting ray from camera."}),`
`,e.exports.jsx(t.h3,{id:"finding-intersection-point",children:e.exports.jsx(t.a,{href:"#finding-intersection-point",children:"Finding intersection point"})}),`
`,e.exports.jsx(t.p,{children:"In order to find an intersection point, we first have to define our shapes. As covered in lectures, we are going to use implicit functions to define our shapes. You are required to be able to correctly handle 4 shapes using implicit functions in total."}),`
`,e.exports.jsxs(t.p,{children:["For all implicit shapes, you can assume that their center all ",e.exports.jsx(t.strong,{children:"sit at the origin"})," and can fit into a ",e.exports.jsx(t.strong,{children:"unit cube"}),"."]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:`Cube:
We just need a unit cube which has all its sides with the length of 1`}),`
`,e.exports.jsx(t.li,{children:`Cone:
The bottom cap of the cone should have a radius of 0.5. The height should be 1 of course`}),`
`,e.exports.jsx(t.li,{children:`Cylinder:
Both the top and bottom caps of the cylinder should have a radius of 0.5. The height should also be 1`}),`
`,e.exports.jsx(t.li,{children:`Sphere:
The radius of the sphere should be 0.5`}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"getting-normals-and-use-them-for-illumination",children:e.exports.jsx(t.a,{href:"#getting-normals-and-use-them-for-illumination",children:"Getting normals and use them for \u201CIllumination\u201D"})}),`
`,e.exports.jsx(t.p,{children:"In this assignment, you are not required to handle any lighting. Yet, it would still be nice to be able to distinguish between different primitives in the scene and verify the implementation."}),`
`,e.exports.jsxs(t.p,{children:["For the scope of this assignment, ",e.exports.jsx(t.strong,{children:"color the pixel with the WORLD SPACE normal of the primitive at the intersection point"}),`.
You may have noticed that the value of normal ranges from -1 to 1, but RGB color only ranges from 0 to 1. Hence, a mapping is required to convert the value.
You can refer to the answer to Question 4.2 in the ray 1 ALGO for the correct mapping.`]}),`
`,e.exports.jsx(t.h3,{id:"results",children:e.exports.jsx(t.a,{href:"#results",children:"Results"})}),`
`,e.exports.jsx(t.p,{children:"Here are some sample images of what your ray tracer should be capable to render by the end of this assignment."}),`
`,e.exports.jsx(s,{images:[{src:"/projects/ray1/sample_output_1.png",alt:"TODO"},{src:"/projects/ray1/sample_output_2.png",alt:"TODO"},{src:"/projects/ray1/sample_output_3.png",alt:"TODO"}],figNumber:3,targetWidth:"20%",figCaption:"Sample outputs."}),`
`,e.exports.jsx(t.h2,{id:"project-stencil",children:e.exports.jsx(t.a,{href:"#project-stencil",children:"Project Stencil"})}),`
`,e.exports.jsx(t.h3,{id:"codebase",children:e.exports.jsx(t.a,{href:"#codebase",children:"Codebase"})}),`
`,e.exports.jsx(t.p,{children:"For this assignment, you are going to use the command line interface rather than the UI interface. The stencil reads from a config file and perform the parameter parsing."}),`
`,e.exports.jsxs(t.p,{children:["This config file is called ",e.exports.jsx(t.code,{children:"QSettings"})," and it has the extension of ",e.exports.jsx(t.code,{children:".ini"}),". ",e.exports.jsx(t.a,{href:"/projects/ray1/sample_config.ini",children:"Here"})," is a sample config file for reference. You can take a look at ",e.exports.jsx(t.code,{children:"main.cpp"})," to figure out how the config file is parsed."]}),`
`,e.exports.jsx(t.p,{children:"The codebase is structured with three modules."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsx(t.code,{children:"utils"})," module provides the utilities you will use for the ray tracer."]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["You should implement the ",e.exports.jsx(t.code,{children:"SceneParser"})," as you have done similarly in the parsing lab."]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsx(t.code,{children:"camera"})," module contains everything related to camera operation."]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["The ",e.exports.jsx(t.code,{children:"Camera.h"})," defines an interface for the camera. It provides everything you may need for this assignment."]}),`
`,e.exports.jsx(t.li,{children:"You should have your own camera implementation that conforms to this interface."}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsx(t.code,{children:"raytracer"})," module is the main component of this assignment. You will write the majority of your code here."]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["In ",e.exports.jsx(t.code,{children:"RayTraceScene"}),", you will construct the scene using the ",e.exports.jsx(t.code,{children:"RenderData"})," you filled in the ",e.exports.jsx(t.code,{children:"SceneParser"})]}),`
`,e.exports.jsxs(t.li,{children:["In ",e.exports.jsx(t.code,{children:"RayTracer"}),", You will implement the ray tracing algorithm. It takes in a ",e.exports.jsx(t.code,{children:"RayTracer::Config"})," during initialization."]}),`
`,e.exports.jsxs(t.li,{children:["The ",e.exports.jsx(t.code,{children:"RayTracer::Config"})," is a struct that contains various flags to enable or disable certain features."]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"As mentioned in the general handout, you have the freedom to add any class you think that is necessary for this assignment. But please do keep the existing interface intact, because the TAs are relying on the interface to grade your assignment."}),`
`,e.exports.jsxs(t.p,{children:["You may notice that the stencil already has some existing config parameters. Some of them are for the next assignments, others are for optional extra credits. However, if you feel like implementing an extra feature that is not included in the existing config parameters, feel free to add the new parameter to your ",e.exports.jsx(t.code,{children:".ini"})," file and the ",e.exports.jsx(t.code,{children:"RayTracer::Config"}),". You may also want to document this change in your README to help TA with grading."]}),`
`,e.exports.jsx(t.h3,{id:"design",children:e.exports.jsx(t.a,{href:"#design",children:"Design"})}),`
`,e.exports.jsx(t.p,{children:"Please do keep in mind that you are only implementing parts of your ray tracer, and you will keep working in the same repo in the next assignment."}),`
`,e.exports.jsx(t.p,{children:"When making your design choices, think a bit further about what could be needed in the next assignment, and whether your design provides the flexibility for you to easily extend its feature."}),`
`,e.exports.jsx(t.p,{children:"You can take a look at the handout for the next assignment to get some idea on what are the expectations."}),`
`,e.exports.jsx(t.p,{children:"To roughly sum it up, you are required to implement texture mapping, different light sources, and phong lighting model with shadow and reflection in your next assignment."}),`
`,e.exports.jsx(t.h2,{id:"extra-credits",children:e.exports.jsx(t.a,{href:"#extra-credits",children:"Extra Credits"})}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Acceleration data structure"}),": There are various ways to build an acceleration data structure. Here are the approaches that are covered in the lecture.",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Octree"}),`
`,e.exports.jsx(t.li,{children:"BVH"}),`
`,e.exports.jsx(t.li,{children:"KD-Tree"}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Parallelization"}),": There are many ways to parallelize your code. It can be as simple as one line of code in OpenMP. It can also go up to a carefully designed task scheduler that acts like Cinebench. Evidently, the grades you receive will be based on the complexity of your implementation. If you have more questions on the rubric and design choice, come to TA hours and we are happy to help."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Anti-aliasing"}),": As we are only shooting one ray through the center of each pixel, it can be expected that there will be aliasing. In your filter project, you\u2019ve learnt some ways to fix aliasing as a post-processing approach. Try to figure out if you can integrate your filter into your ray tracer as a post-processing module for your output image."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Super-sampling"}),": As mentioned above, the source of aliasing is the low number of samples. So the most direct way to resolve it is to increase the number of samples. Here are a few ways to do super-sampling.",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Naive super-sampling"}),`
`,e.exports.jsx(t.li,{children:"Adaptive super-sampling"}),`
`,e.exports.jsxs(t.li,{children:["A quick comparison between baseline and super-sampling",`
`,e.exports.jsx(s,{images:[{src:"/projects/ray1/cylinder_texture.png",alt:"TODO"},{src:"/projects/ray1/cylinder_texture_MSAA.png",alt:"TODO"}],figNumber:4,targetWidth:"20%",figCaption:"Left: Baseline; Right: MSAA"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"readme",children:e.exports.jsx(t.a,{href:"#readme",children:"README"})}),`
`,e.exports.jsx(t.p,{children:"You must submit a README in Markdown format. This file should contain basic information about your design choices. You should also include any known bugs or any extra credits you\u2019ve implemented."}),`
`,e.exports.jsxs(t.p,{children:["For extra credits, please describe what you've done and roughly point out the related code segment. If you implement any extra feature that requires you to add a parameter for the QSettings and the ",e.exports.jsx(t.code,{children:"RayTracer::Config"}),", please also document it accordingly so that the TAs won't miss anything when grading your assignment."]}),`
`,e.exports.jsxs(t.p,{children:["Please note that the README is worth ",e.exports.jsx(t.strong,{children:"5 points"})," of your assignment grade!"]}),`
`,e.exports.jsx(t.h2,{id:"handling-in",children:e.exports.jsx(t.a,{href:"#handling-in",children:"Handling in"})}),`
`,e.exports.jsx(t.p,{children:"To submit your assignment, upload your repo to Gradescope via Github. For all assignments in this course, we will test your code on department machines, so we expect your code to be able to compile on department machines. If you are developing locally, please test your code before submitting. If your code does not compile, we will ask you to resubmit and this will result in a late penalty!"}),`
`,e.exports.jsx(t.h2,{id:"faq--hints",children:e.exports.jsx(t.a,{href:"#faq--hints",children:"FAQ & Hints"})}),`
`,e.exports.jsx(t.h3,{id:"nothing-shows-up",children:e.exports.jsx(t.a,{href:"#nothing-shows-up",children:"Nothing shows up"})}),`
`,e.exports.jsx(t.p,{children:"Start with a simple scene, like the scene with only one primitive and make sure it\u2019s working."}),`
`,e.exports.jsx(t.p,{children:"Think thoroughly about the whole ray tracing pipeline before start writing your code. What are the transformations needed to compute the final output? Does your math and number make sense? Is there any negative value or extremely large value during the computation?"}),`
`,e.exports.jsx(t.p,{children:"Utilize the QtCreator debugger to debug."}),`
`,e.exports.jsx(t.h3,{id:"my-ray-tracer-runs-extremely-slow-",children:e.exports.jsx(t.a,{href:"#my-ray-tracer-runs-extremely-slow-",children:"My ray tracer runs extremely slow :("})}),`
`,e.exports.jsxs(t.p,{children:["Since the time complexity of the naive ray tracing algorithm is ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.873ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3480 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D440",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D442",xlinkHref:"#MJX-1-TEX-I-1D442"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(763,0)",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1152,0)",children:e.exports.jsx(t.use,{"data-c":"1D440",xlinkHref:"#MJX-1-TEX-I-1D440"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(2203,0)",children:e.exports.jsx(t.use,{"data-c":"1D441",xlinkHref:"#MJX-1-TEX-I-1D441"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(3091,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29"})})]})})]})})}),", where M is the number of pixels and N is the number of primitives, it inevitably is going to be slow when the number of primitives in the scene gets large."]}),`
`,e.exports.jsx(t.p,{children:"But that\u2019s not the end of the world and here are some tips for you at different stages."}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.strong,{children:"When you are still working on your project:"})}),`
`,e.exports.jsx(t.p,{children:"Typically, modern CPUs should have enough horsepower to handle most of our scenes. Yet, you still definitely want to render your scene in a flash to check for bugs and errors."}),`
`,e.exports.jsxs(t.p,{children:["One thing you can do is to limit the resolution of your output image. Our default rendering resolution is ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"9.553ex",height:"1.557ex",role:"img",focusable:"false",viewBox:"0 -666 4222.4 688",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-2-TEX-N-38",d:"M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z"}),e.exports.jsx(t.path,{id:"MJX-2-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-2-TEX-N-D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsxs(t.g,{"data-mml-node":"mn",children:[e.exports.jsx(t.use,{"data-c":"38",xlinkHref:"#MJX-2-TEX-N-38"}),e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30",transform:"translate(500,0)"}),e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30",transform:"translate(1000,0)"})]}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1722.2,0)",children:e.exports.jsx(t.use,{"data-c":"D7",xlinkHref:"#MJX-2-TEX-N-D7"})}),e.exports.jsxs(t.g,{"data-mml-node":"mn",transform:"translate(2722.4,0)",children:[e.exports.jsx(t.use,{"data-c":"38",xlinkHref:"#MJX-2-TEX-N-38"}),e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30",transform:"translate(500,0)"}),e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30",transform:"translate(1000,0)"})]})]})})]})})}),", but you can reduce it by half or even more. And of course, you don\u2019t want to start with any extremely complex scene. Here is the list of complex scenes that you should be aware of."]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"List of complex scenes"}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Despite these scenes being complex, it does not mean that we are not going to test them on your ray tracer for grading. You are still expected to output reasonable results on these scenes in a reasonable amount of time."}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.strong,{children:"When you have finished the basic requirements and are looking for more:"})}),`
`,e.exports.jsx(t.p,{children:"As covered in the lecture, ray tracing is \u2018embarrassingly parallel\u2019. Therefore, you can boost your performance simply by making your ray tracer parallel. And there are tons of ways to achieve this. Please refer to the extra credits section for more information."}),`
`,e.exports.jsxs(t.p,{children:["It\u2019s worth noting that acceleration data structure also offers ",e.exports.jsx(t.strong,{children:"significant"})," performance boost. And there are plenty of choices for you."]}),`
`,e.exports.jsx(t.p,{children:"If you are registered for the half-credit, it is strongly recommended that you do both for the requirement."}),`
`,e.exports.jsx(o,{}),e.exports.jsx(t.style,{children:`
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
`})]})]})}function h(n={}){const{wrapper:t}=n.components||{};return t?e.exports.jsx(t,Object.assign({},n,{children:e.exports.jsx(r,n)})):r(n)}export{h as default,c as documentProps};
