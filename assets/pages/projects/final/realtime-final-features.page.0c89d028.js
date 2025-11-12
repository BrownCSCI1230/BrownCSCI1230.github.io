import{j as e}from"../../../chunk-64786f19.js";import{I as t}from"../../../chunk-1e62d894.js";import{M as o}from"../../../chunk-88707149.js";const l={title:"Realtime Final Features List"};function n(s){const r=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",code:"code",h2:"h2"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(r.nav,{className:"toc",children:e.exports.jsx(r.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(r.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(r.a,{className:"toc-link toc-link-h1",href:"#recommended-technical-features",children:"Recommended Technical Features"}),e.exports.jsxs(r.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(r.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(r.a,{className:"toc-link toc-link-h2",href:"#realtime-features-list",children:"Realtime Features List"})}),e.exports.jsx(r.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(r.a,{className:"toc-link toc-link-h2",href:"#ray-features-list",children:"Ray Features List"})})]})]})})}),e.exports.jsxs(r.main,{children:[`
`,`
`,e.exports.jsx(r.h1,{id:"recommended-technical-features",children:e.exports.jsx(r.a,{href:"#recommended-technical-features",children:"Recommended Technical Features"})}),`
`,e.exports.jsxs(r.p,{children:["We suggest referring to this document while working on both ",e.exports.jsx(r.code,{children:"Project 6: Final Project Gear Up"})," and ",e.exports.jsx(r.code,{children:"Project 7: Final Project"}),". See the instructions in each handout for more info on what we're looking for."]}),`
`,e.exports.jsx(r.h2,{id:"realtime-features-list",children:e.exports.jsx(r.a,{href:"#realtime-features-list",children:"Realtime Features List"})}),`
`,e.exports.jsx("h3",{children:" (XX pts): Deferred Lighting "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/deferred-shading.png",alt:"deferred shading"}],figNumber:1,targetWidth:"60%",figCaption:"Deferred Shading Breakdown"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://learnopengl.com/Advanced-Lighting/Deferred-Shading",target:"_blank",rel:"noopener noreferrer",children:"OpenGL Tutorial"}),", ",e.exports.jsx(r.a,{href:"https://va3c.github.io/three.js/examples/webgldeferred_pointlights.html",target:"_blank",rel:"noopener noreferrer",children:"Three.js"}),", ",e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=vB2svwmjGUg",target:"_blank",rel:"noopener noreferrer",children:"Erkaman"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): HDR Rendering "}),`
High-dynamic range rendering, perhaps with bloom.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/hdr.png",alt:"hdr"}],figNumber:2,targetWidth:"50%",figCaption:"HDR Example"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/High-dynamic-range_rendering",target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"}),", ",e.exports.jsx(r.a,{href:"learnopengl.com/#!Advanced-Lighting/HDR",children:"OpenGL Tutorial"}),", ",e.exports.jsx(r.a,{href:"https://threejs.org/examples/?q=hdr#webgl_hdr",target:"_blank",rel:"noopener noreferrer",children:"Three.js"}),", ",e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=S59u7YB5gPM",target:"_blank",rel:"noopener noreferrer",children:"Schwarzschild Black Hole"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Shadow Mapping "}),`
E.g. with the ability to toggle on / off.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/shadow-mapping.png",alt:"shadow mapping"}],figNumber:2,targetWidth:"60%",figCaption:"Shadow Mapping"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"www.opengl-tutorial.org/intermediate-tutorials/tutorial-16-shadow-mapping/",children:"OpenGL Tutorial"}),", ",e.exports.jsx(r.a,{href:"https://learnopengl.com/Advanced-Lighting/Shadows/Shadow-Mapping",target:"_blank",rel:"noopener noreferrer",children:"LearnOpenGL"}),", ",e.exports.jsx(r.a,{href:"alteredqualia.com/three/examples/webgl_shadowmap.html",children:"Three.js"})]}),`
`,e.exports.jsxs(r.p,{children:["Possible improvements: Percentage close filtering (PCF), ",e.exports.jsx(r.a,{href:"developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf",children:"Cascaded Shadow Mapping"}),", ",e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=LGFDifcbsoQ&ab_channel=thebennybox",target:"_blank",rel:"noopener noreferrer",children:"Variance Shadow maps Tutorial video"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Environment Maps "}),`
E.g. cube maps / skyboxes.`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Ambient Occlusion "}),`
Screen-space ambient occlusion (SSAO)`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/ssao.png",alt:"SSAO"}],figNumber:2,targetWidth:"40%",figCaption:"Screen-space ambient occlusion (SSAO)"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"john-chapman-graphics.blogspot.com/2013/01/ssao-tutorial.html",children:"John Chapman Graphics"}),", ",e.exports.jsx(r.a,{href:"www.learnopengl.com/#!Advanced-Lighting/SSAO",children:"OpenGL Tutorial"}),", ",e.exports.jsx(r.a,{href:"threejs.org/examples/#webgl_postprocessing_ssao",children:"Three.js"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Depth-of-field  "}),`
Distributed ray tracing or screen-space effects.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/dof-3.png",alt:"dof-realtime"}],figNumber:2,targetWidth:"40%",figCaption:"Depth-of-field"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://developer.nvidia.com/gpugems/gpugems/part-iv-image-processing/chapter-23-depth-field-survey-techniques",target:"_blank",rel:"noopener noreferrer",children:"NVIDIA GPU Gems"}),", ",e.exports.jsx(r.a,{href:"casual-effects.blogspot.com/2013/09/the-skylanders-swap-force-depth-of.html",children:"Casual Effects"}),", ",e.exports.jsx(r.a,{href:"bartwronski.com",children:"Wronski"}),", ",e.exports.jsx(r.a,{href:"threejs.org/examples/webgl_postprocessing_dof.html",children:"Three.js"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Bump/normal/displacement mapping "}),`
E.g. with the ability to toggle on / off.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/normal-map.png",alt:"Bump/normal/displacement mapping"}],figNumber:2,targetWidth:"60%",figCaption:"Bump/normal/displacement Map"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://ogldev.org/www/tutorial26/tutorial26.html",target:"_blank",rel:"noopener noreferrer",children:"OGLDev Tutorial"}),", ",e.exports.jsx(r.a,{href:"www.opengl-tutorial.org/intermediate-tutorials/tutorial-13-normal-mapping/",children:"Open GL Tutorial"}),", ",e.exports.jsx(r.a,{href:"https://threejs.org/examples/webgl_materials_normalmap.html",target:"_blank",rel:"noopener noreferrer",children:"Three.js"}),", ",e.exports.jsx(r.a,{href:"www.3dkingdoms.com/tutorial.htm",children:"3D Kingdoms"}),", ",e.exports.jsx(r.a,{href:"https://apoorvaj.io/exploring-bump-mapping-with-webgl/",target:"_blank",rel:"noopener noreferrer",children:"Another demo"}),", Textbook p.647"]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Collision Detection  "}),`
With bounding boxes / spheres, or at the polygon level.`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Bezier Curve Movement "}),`
Camera or object motion along a path defined by a piecewise Bezier curve. E.g. to render a ride on a roller coaster.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/bezier-cam.gif",alt:"Bump/normal/displacement mapping"}],figNumber:2,targetWidth:"60%",figCaption:"Roblox Bezier Camera Movement"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://www.scss.tcd.ie/publications/tech-reports/reports.94/TCD-CS-94-18.pdf",target:"_blank",rel:"noopener noreferrer",children:"Paper"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Shadow Volumes  "}),`
With the ability to toggle on / off.`]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Fog / Atmospheric Scattering "}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Crowds / Flocks "}),`
E.g. `,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=bqtqltqcQhw",target:"_blank",rel:"noopener noreferrer",children:"Boids"}),": bird-like flocking behavior; something that you might easily add to any realtime project to spice it up a little :) (Another interactive ",e.exports.jsx(r.a,{href:"https://threejs.org/examples/webgl_gpgpu_birds.html",target:"_blank",rel:"noopener noreferrer",children:"demo"}),")."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/boid.gif",alt:"Flocking Example"}],figNumber:3,targetWidth:"50%",figCaption:"Example of Boids Flocking with boid criteria"}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Portal Rendering  "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=cWpFZbjtSQg",target:"_blank",rel:"noopener noreferrer",children:"Portals"}),": lots of trickery involved\u2014mesh and camera duplication, slicing, rotated clipping planes, just to name a few."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/portals.gif",alt:"Portals Example"}],figNumber:5,targetWidth:"50%",figCaption:"Example of Portals"}),`
`,e.exports.jsx("h3",{children:" (XX pts): Inverse Kinematics "}),`
`,e.exports.jsx("h3",{children:" (XX pts): Anti-Aliasing "}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Procedural Generation "}),`
For art, buildings/cities, environments, and/or geometry.`]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): L-Systems "}),`
Lindenmayer systems (for trees, plants, etc.).`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/l-systems.gif",alt:"L-Systems"}],figNumber:5,targetWidth:"50%",figCaption:"L-Systems"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/L-system",target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"}),", ",e.exports.jsx(r.a,{href:"algorithmicbotany.org/papers/abop/abop-ch1.pdf",children:"Algorithmic botany"}),", ",e.exports.jsx(r.a,{href:"morphocode.com/3d-branching-structures-with-rabbit/",children:"Morphocode"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Basic Physics Simulation "}),`
`,e.exports.jsx("h3",{children:" (XX pts): Spring & Mass Systems "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/spring-mass.png",alt:"spring mass"}],figNumber:5,targetWidth:"60%",figCaption:"Spring"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"www.cs.cmu.edu/~barbic/jellocube_bw.pdf",children:"CMU Course Slides"}),", ",e.exports.jsx(r.a,{href:"https://github.com/alecjacobson/computer-graphics-mass-spring-systems",target:"_blank",rel:"noopener noreferrer",children:"UToronto Assignment"}),", ",e.exports.jsx(r.a,{href:"https://graphics.stanford.edu/~mdfisher/cloth.html",target:"_blank",rel:"noopener noreferrer",children:"Matt's Webcorner"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Particle Systems "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/particle.png",alt:"Particle System"}],figNumber:5,targetWidth:"50%",figCaption:"Particle System"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"www.gamasutra.com/view/feature/130535/building_a_millionparticle_system.php",children:"Gamasutra"}),", ",e.exports.jsx(r.a,{href:"https://directtovideo.wordpress.com/2009/10/06/a-thoroughly-modern-particle-system/",target:"_blank",rel:"noopener noreferrer",children:"DirectToVideo"}),", ",e.exports.jsx(r.a,{href:"https://threejs.org/examples/webgl_points_sprites.html",target:"_blank",rel:"noopener noreferrer",children:"Three.js"}),", ",e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=I0JobHULJiE",target:"_blank",rel:"noopener noreferrer",children:"'17 Final Project Example"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Pixel Art Shading "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/pixel-shader.gif",alt:"Pixel Shader Gem"}],figNumber:2,targetWidth:"50%",figCaption:"Example of Pixel Shader"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=jFevm02NJ5M",target:"_blank",rel:"noopener noreferrer",children:"Pixel Shader w/ Outlines"}),": a simple, if slightly brittle shader (plus, ",e.exports.jsx(r.a,{href:"https://raw.githack.com/KodyJKing/three.js/outlined-pixel-example/examples/webgl_postprocessing_pixel.html",target:"_blank",rel:"noopener noreferrer",children:"interactive demo"}),")."]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Non-Photorealistic / Stylized Rendering "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/toon-shade.png",alt:"Toon Shading"},{src:"/projects/final/stylized-shader.png",alt:"Stylized Shader"}],figNumber:2,targetWidth:"100%",figCaption:"Stylized Shaders"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"www.lighthouse3d.com/tutorials/glsl-12-tutorial/toon-shading/",children:"Toon Shader Tutorial"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Crepuscular rays "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/crep-rays.png",alt:"Crepuscular Rays"}],figNumber:2,targetWidth:"60%",figCaption:"Crepuscular Rays"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Crepuscular_rays",target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"}),", ",e.exports.jsx(r.a,{href:"https://developer.nvidia.com/gpugems/GPUGems3/gpugems3_ch13.html",target:"_blank",rel:"noopener noreferrer",children:"GPU Gems Tutorial"}),", ",e.exports.jsx(r.a,{href:"fabiensanglard.net/lightScattering/",children:"Sanglard Implementation"}),", ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Anticrepuscular_rays",target:"_blank",rel:"noopener noreferrer",children:"Anticrepuscular Rays"}),", ",e.exports.jsx(r.a,{href:"https://developer.nvidia.com/gpugems/GPUGems2/gpugems2_chapter16.html",target:"_blank",rel:"noopener noreferrer",children:"Atmospheric Scattering"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Piecewise Bezier Surfaces "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/bezier-surface.png",alt:"Bezier Surface"}],figNumber:2,targetWidth:"60%",figCaption:"Piecewise Bezier Surface"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://cs184.eecs.berkeley.edu/sp21/docs/proj2",target:"_blank",rel:"noopener noreferrer",children:"UC Berkeley Assignment"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Wave Function Collapse "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=2SuvO4Gi7uY",target:"_blank",rel:"noopener noreferrer",children:"WFC"}),": generating random maps, etc, using a set of pieces and pre-defined constraints on how they fit together. This algorithm was invented by a Brown Visual Computing Ph.D. student!"]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/wfc.gif",alt:"WFC Example"}],figNumber:4,targetWidth:"50%",figCaption:"Example of Wave Function Collapse"}),`
`,e.exports.jsx("h3",{children:" (XX pts): Geometry and Tesselation Shaders "}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Volumetric Rendering "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=4QOcCGI6xOU",target:"_blank",rel:"noopener noreferrer",children:"Noise, Clouds, and (Cheap) Volumetric Rendering"}),": Worley noise and some volumetric rendering tricks help make clouds look good."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/clouds.gif",alt:"Clouds Example"}],figNumber:7,targetWidth:"50%",figCaption:"Example of Real-time Volumetric Clouds"}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Interactive Snow "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=BXo97H55EhA&t=557s",target:"_blank",rel:"noopener noreferrer",children:'"Interactive" Snow'}),": many of the coolest things you see in video games are actually just textures and shaders in disguise. This is another one of those things!"]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/snow.gif",alt:"Snow Example"}],figNumber:8,targetWidth:"50%",figCaption:"Example of Interactive Snow"}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Scrolling Displacement Maps "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=8rCRsOLiO7k",target:"_blank",rel:"noopener noreferrer",children:"Water and Scrolling Displacement Maps"}),": a pretty simple way to efficiently implement something like a lapping / flowing water texture."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/water-displacement.gif",alt:"Scrolling Displacement Example"}],figNumber:9,targetWidth:"50%",figCaption:"Example of Scrolling Displacement Maps"}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Pivot Caching "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=V1nkv8g-oi0",target:"_blank",rel:"noopener noreferrer",children:"Wobbly Leaves and Pivot Caching"}),": storing vertex attributes in textures, then using vertex shaders to make performant animations."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/wobbly.gif",alt:"Wobbly Leaves Tree"}],figNumber:1,targetWidth:"50%",figCaption:"Example of Pivot Caching"}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Stencil Buffers "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=ncJ6B_FkhIA",target:"_blank",rel:"noopener noreferrer",children:"Anime Eyes and Stencil Buffers"}),": render anime-style eyes-over-hair using stencil buffers, the lesser known sibling of depth and color buffers."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/stencil-buffer.gif",alt:"Stencil Buffer Example"}],figNumber:6,targetWidth:"50%",figCaption:"Example of Stencil Buffers"}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): GPU Raytracing  "}),`
In fragment/compute shaders, or using modern raytracing APIs (e.g. OptiX).`]}),`
`,e.exports.jsx("hr",{}),`
`,e.exports.jsx(r.h2,{id:"ray-features-list",children:e.exports.jsx(r.a,{href:"#ray-features-list",children:"Ray Features List"})}),`
`,e.exports.jsx("h3",{children:" (XX pts): Ambient Occlusion "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/ao-ray.png",alt:"Ambient Occlusion"}],figNumber:2,targetWidth:"60%",figCaption:"Ambient Occlusion"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Ambient_occlusion",target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Depth of Field "}),`
Sampling-based depth of field.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/dof-1.png",alt:"Dof1"},{src:"/projects/final/dof-2.png",alt:"Dof2"}],figNumber:2,targetWidth:"100%",figCaption:"Depth of Field"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://pathtracing.home.blog/depth-of-field/",target:"_blank",rel:"noopener noreferrer",children:"Pathtracing.home"}),", ",e.exports.jsx(r.a,{href:"https://raytracing.github.io/books/RayTracingInOneWeekend.html#defocusblur",target:"_blank",rel:"noopener noreferrer",children:"Ray Tracing in a weekend"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Ray Marching "}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Fractals "}),`
E.g. Mandelbulbs. Almost always combined with ray marching.`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/fractals.png",alt:"Fractal"}],figNumber:2,targetWidth:"50%",figCaption:"Fractals"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/Mandelbulb",target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"}),", ",e.exports.jsx(r.a,{href:"https://www.mandelbulb.com/",target:"_blank",rel:"noopener noreferrer",children:"Mandelbulb.com"}),`, [ShaderToy #1]
`,e.exports.jsx("h3",{children:" (XX pts): HDR Rendering  "})]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/hdr-img-based.png",alt:"HDR Image-based Lighting"}],figNumber:2,targetWidth:"60%",figCaption:"HDR Image-based Lighting"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://cglearn.codelight.eu/pub/computer-graphics/environment-mapping",target:"_blank",rel:"noopener noreferrer",children:"CG Learn"}),", ",e.exports.jsx(r.a,{href:"https://www.comp.nus.edu.sg/~cs4340/lecture/ibl.pdf",target:"_blank",rel:"noopener noreferrer",children:"NUS Slides"})]}),`
`,e.exports.jsx("h3",{children:" (XX pts): Area Lights/Soft Shadows "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/soft-shadows.png",alt:"Soft Shadows"}],figNumber:2,targetWidth:"60%",figCaption:"Soft Shadows Example"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"raytracerchallenge.com/bonus/area-light.html",children:"Raytracer challenge"}),", ",e.exports.jsx(r.a,{href:"https://raytracing.github.io/books/RayTracingTheNextWeek.html#rectanglesandlights",target:"_blank",rel:"noopener noreferrer",children:"Ray Tracing in One Weekend"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Motion Blur "}),`
Sampling-based motion blur`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/sampling-motion-blur.png",alt:"Sampling Based Motion Blur"}],figNumber:2,targetWidth:"60%",figCaption:"Sampling Based Motion Blur"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://raytracing.github.io/books/RayTracingTheNextWeek.html#motionblur",target:"_blank",rel:"noopener noreferrer",children:"Peter Shirley Book"})]}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): Portal Rendering "}),`
`,e.exports.jsx(r.a,{href:"https://www.youtube.com/watch?v=cWpFZbjtSQg",target:"_blank",rel:"noopener noreferrer",children:"Portals"}),": lots of trickery involved\u2014mesh and camera duplication, slicing, rotated clipping planes, just to name a few."]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/portals.gif",alt:"Portals Example"}],figNumber:5,targetWidth:"50%",figCaption:"Example of Portals"}),`
`,e.exports.jsx("h3",{children:" (XX pts): Dynamic Acceleration Structures "}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/dynamic-accel.png",alt:"Dynamic acceleration structures"}],figNumber:2,targetWidth:"100%",figCaption:"Screenshots from an animated 180,000 triangle scenes with moving dragonfly, fairy, and plants. At 1024 x 1024 pixels the scene is ray traced at roughly 3.7 frames per second."}),`
`,e.exports.jsx("h3",{children:" (XX pts): Lens Assemblies "}),`
`,e.exports.jsxs(r.p,{children:[e.exports.jsx("h3",{children:" (XX pts): L-Systems  "}),`
Lindenmayer systems (for trees, plants, etc.).`]}),`
`,e.exports.jsx(t,{images:[{src:"/projects/final/l-systems.gif",alt:"L-Systems"}],figNumber:5,targetWidth:"50%",figCaption:"L-Systems"}),`
`,e.exports.jsxs(r.p,{children:["Resources: ",e.exports.jsx(r.a,{href:"https://en.wikipedia.org/wiki/L-system",target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"}),", ",e.exports.jsx(r.a,{href:"algorithmicbotany.org/papers/abop/abop-ch1.pdf",children:"Algorithmic botany"}),", ",e.exports.jsx(r.a,{href:"morphocode.com/3d-branching-structures-with-rabbit/",children:"Morphocode"})]}),`
`,e.exports.jsx(o,{})]})]})}function c(s={}){const{wrapper:r}=s.components||{};return r?e.exports.jsx(r,Object.assign({},s,{children:e.exports.jsx(n,s)})):n(s)}export{c as default,l as documentProps};
