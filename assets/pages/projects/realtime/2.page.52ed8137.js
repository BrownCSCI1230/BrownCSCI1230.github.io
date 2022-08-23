import{j as e}from"../../../chunk-e052a03f.js";import{M as o}from"../../../chunk-6daa152b.js";import{I as r}from"../../../chunk-ded7f5eb.js";const c={title:"Project 6"};function s(n){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",ul:"ul",div:"div","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",rect:"rect",span:"span",code:"code",h3:"h3",em:"em",style:"style"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#project-6-logan-give-us-another-name",children:"Project 6: Logan Give Us Another Name"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#introduction",children:"Introduction"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#deliverables",children:"Deliverables"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#the-stencil",children:"The Stencil"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#new-light-types",children:"New Light Types"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#responsive-camera-movement",children:"Responsive Camera Movement"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#specifications",children:"Specifications"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#restrictions",children:"Restrictions"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#fbos",children:"FBOs."}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#filter-options",children:"Filter Options"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#tips-on-convolution-in-shaders",children:"Tips on Convolution in Shaders"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#realtime-texture-mapping",children:"Realtime Texture Mapping"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#faq",children:"FAQ"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#extra-credit-todo",children:"Extra Credit TODO"})})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"project-6-logan-give-us-another-name",children:e.exports.jsx(t.a,{href:"#project-6-logan-give-us-another-name",children:"Project 6: Logan Give Us Another Name"})}),`
`,e.exports.jsxs(t.p,{children:["You can find the algo for this project ",e.exports.jsx(t.a,{href:"/projects/realtime/2-algo",children:"here"}),"."]}),`
`,e.exports.jsx(t.h2,{id:"introduction",children:e.exports.jsx(t.a,{href:"#introduction",children:"Introduction"})}),`
`,e.exports.jsx(t.p,{children:"In the last project, you set up the foundation to render a static scene using a scene parser, a camera, and VAOs+ tesselation data."}),`
`,e.exports.jsx(t.p,{children:"In this project, you will extend your code to handle camera movement, finish your phong illumination model, and learn to apply post-processing effects to your scene using FBOs."}),`
`,e.exports.jsx(t.h2,{id:"deliverables",children:e.exports.jsx(t.a,{href:"#deliverables",children:"Deliverables"})}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Phong Lighting",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Point"}),`
`,e.exports.jsx(t.li,{children:"Spot Lights"}),`
`,e.exports.jsx(t.li,{children:"Light Attenuation"}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Camera Movement",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Implement translation on wasd (left, right, backward, forward) and ctrl (down) and space (up) presses"}),`
`,e.exports.jsx(t.li,{children:"Track key state and update continuously"}),`
`,e.exports.jsxs(t.li,{children:["Implement rotation on mouse move",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Horizontal mouse movement = rotate about up vector"}),`
`,e.exports.jsx(t.li,{children:"Vertical mouse movement = rotate about u vector (refer to slides)"}),`
`,e.exports.jsx(t.li,{children:"Implement look vector axis-angle rotation"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["FBOs",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["2 Effects, at least one from each of the following lists",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Per-pixel: invert, grayscale, hue shift"}),`
`,e.exports.jsx(t.li,{children:"Kernel-based: sharpen, box blur, edge detection"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Texture Mapping",`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Adding UV coodinates to your tesselator"}),`
`,e.exports.jsx(t.li,{children:"Passing Texture data into the Shader"}),`
`,e.exports.jsx(t.li,{children:"Using Texture Data within the shader to set the output color"}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"the-stencil",children:e.exports.jsx(t.a,{href:"#the-stencil",children:"The Stencil"})}),`
`,e.exports.jsx(t.p,{children:"You will be continuing to work within the same Codebase as from Realtime 1."}),`
`,e.exports.jsx(t.p,{children:"To support the FBO post processing we have added a rudimentary UI which you can enable by... TODO. This will update a settings object that you can use to track which post processing effects should be active in realtime."}),`
`,e.exports.jsx(t.p,{children:"Besides that, it's up to you how you want to structure the rest of the functionality!"}),`
`,e.exports.jsx(t.h2,{id:"new-light-types",children:e.exports.jsx(t.a,{href:"#new-light-types",children:"New Light Types"})}),`
`,e.exports.jsx(t.p,{children:"Most of the heavy lifting for the Phong model you have already implemented: color computation, ambient, diffuse, specular etc. Now you need to finish adding support for the different light types and add in attenuation for the light types that support it."}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Point Lights: similar to Ray, these lights are defined by their position and follow a standard quadratic attenuation fall off given by"}),`
`]}),`
`,e.exports.jsx(t.div,{className:"math math-display",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",display:"true",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-1.814ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.288ex",height:"4.851ex",role:"img",focusable:"false",viewBox:"0 -1342 7641.3 2143.9",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-1-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-2217",d:"M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D451",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsxs(t.g,{"data-mml-node":"mfrac",children:[e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(3570.7,676)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})}),e.exports.jsxs(t.g,{"data-mml-node":"mrow",transform:"translate(220,-719.9)",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(751.2,0)",children:e.exports.jsx(t.use,{"data-c":"2B",xlinkHref:"#MJX-1-TEX-N-2B"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1751.4,0)",children:e.exports.jsx(t.use,{"data-c":"1D44F",xlinkHref:"#MJX-1-TEX-I-1D44F"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2402.7,0)",children:e.exports.jsx(t.use,{"data-c":"2217",xlinkHref:"#MJX-1-TEX-N-2217"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(3124.9,0)",children:e.exports.jsx(t.use,{"data-c":"1D451",xlinkHref:"#MJX-1-TEX-I-1D451"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(3867.1,0)",children:e.exports.jsx(t.use,{"data-c":"2B",xlinkHref:"#MJX-1-TEX-N-2B"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(4867.3,0)",children:e.exports.jsx(t.use,{"data-c":"1D450",xlinkHref:"#MJX-1-TEX-I-1D450"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(5522.6,0)",children:e.exports.jsx(t.use,{"data-c":"2217",xlinkHref:"#MJX-1-TEX-N-2217"})}),e.exports.jsxs(t.g,{"data-mml-node":"msup",transform:"translate(6244.8,0)",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D451",xlinkHref:"#MJX-1-TEX-I-1D451"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(553,289) scale(0.707)",children:e.exports.jsx(t.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})]}),e.exports.jsx(t.rect,{width:"7401.3",height:"60",x:"120",y:"220"})]})})})]})})}),`
`,e.exports.jsxs(t.p,{children:["where ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.176ex",height:"1.593ex",role:"img",focusable:"false",viewBox:"0 -694 520 704",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-2-TEX-I-1D451",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D451",xlinkHref:"#MJX-2-TEX-I-1D451"})})})})]})})})," is the distance between the light and the point of interest, and a/b/c are coefficents defined by the material parameter ",e.exports.jsx(t.code,{children:"function"}),"."]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Spot Lights: Using the same mathematics as from the ray Project, these lights follow not only the standard distance falloff, but an additional angular falloff defined by ",e.exports.jsx(t.code,{children:"angle"})," and ",e.exports.jsx(t.code,{children:"falloff"})," in the stencil light object."]}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"responsive-camera-movement",children:e.exports.jsx(t.a,{href:"#responsive-camera-movement",children:"Responsive Camera Movement"})}),`
`,e.exports.jsx(t.p,{children:"In the last project, you created a static camera object meaning you could only view the single from a single point of view. For this part of the assignment, you will need to add several methods for transforming the camera. This will allow you to interactively move the camera around the scene!"}),`
`,e.exports.jsx(t.h3,{id:"specifications",children:e.exports.jsx(t.a,{href:"#specifications",children:"Specifications"})}),`
`,e.exports.jsx(t.p,{children:"TODO: need diagram displaying different forms of motion user testers im sorry"}),`
`,e.exports.jsx(t.p,{children:"Your camera should move according to these specifications:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"W/S: camera translation forward and backward respectivly along the look vector."}),`
`,e.exports.jsx(t.li,{children:"A/D: camera translation left and right respectivly in the x-z plane."}),`
`,e.exports.jsx(t.li,{children:"Space/Ctrl: camera translation up and down respectivly along the up vector (0,1,0)"}),`
`,e.exports.jsx(t.li,{children:"Mouse movement: camera rotation"}),`
`]}),`
`,e.exports.jsx(t.p,{children:"For mouse movement specifically."}),`
`,e.exports.jsxs(t.p,{children:["Moving the mouse horizontally should rotate the ",e.exports.jsx(t.em,{children:"look"})," vector around the ",e.exports.jsx(t.em,{children:"up"})," vector to make sure the camera does not roll about its w axis."]}),`
`,e.exports.jsx(t.p,{children:"Moving the mouse vertically should move the look vector in the plane made by the look and up vector."}),`
`,e.exports.jsx(t.p,{children:"You are going to need to figure out how to track the mouse position over time as the QT events do not explicitly track movement, only current position."}),`
`,e.exports.jsx(t.p,{children:"Additionally you will need to perform some sensitivity conversion from pixel moved and button presses to translation units. We leave this to you as the ideal sensitivity is ultimately down to personal preference."}),`
`,e.exports.jsx(t.h3,{id:"restrictions",children:e.exports.jsx(t.a,{href:"#restrictions",children:"Restrictions"})}),`
`,e.exports.jsx(t.p,{children:`You may NOT use the following GLM functions, we expect you to have a good enough understanding of transform matricies to construct helper functions for each of these:
glm::lookAt()
glm::scale()
glm::rotate()
glm::translate()`}),`
`,e.exports.jsx(t.h2,{id:"fbos",children:e.exports.jsx(t.a,{href:"#fbos",children:"FBOs."})}),`
`,e.exports.jsx(r,{images:[{src:"/projects/realtime2/PhongTest-None.png",alt:"TODO"},{src:"/projects/realtime2/PhongTest-Invert.png",alt:"TODO"},{src:"/projects/realtime2/PhongTest-Sharpen.png",alt:"TODO"},{src:"/projects/realtime2/PhongTest-InvertSharpen.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"From left to right: No Filter, Invert, Sharpen, Invert + Sharpen"}),`
`,e.exports.jsx(t.p,{children:"Using what you learned within labs 10 and 11, you are going to implement a pair of realtime post-processing filter effects using Frame Buffer Objects."}),`
`,e.exports.jsx(t.h3,{id:"filter-options",children:e.exports.jsx(t.a,{href:"#filter-options",children:"Filter Options"})}),`
`,e.exports.jsx(t.p,{children:"You are required to implement at least one per-pixel filter and one kernel based filter."}),`
`,e.exports.jsx(t.p,{children:"Per-pixel: - Color Invert - Gray Scale - Hue shift"}),`
`,e.exports.jsx(t.p,{children:"Kernel-based: - sharpen - box blur - edge detection (sobel)"}),`
`,e.exports.jsx(t.h3,{id:"tips-on-convolution-in-shaders",children:e.exports.jsx(t.a,{href:"#tips-on-convolution-in-shaders",children:"Tips on Convolution in Shaders"})}),`
`,e.exports.jsx(t.p,{children:`Consider how sampling a nearby pixel correlates to changing your current UV coordinate.
How would you increment your UV coordinate to sample a pixel 1 to the right in a
300 x 300 image?`}),`
`,e.exports.jsx(t.h2,{id:"realtime-texture-mapping",children:e.exports.jsx(t.a,{href:"#realtime-texture-mapping",children:"Realtime Texture Mapping"})}),`
`,e.exports.jsx(t.p,{children:"In addition to the phong illumation model extensions we have asked you to implement, the final feature we ask you to implement is realtime texture mapping for your 4 basic primitives."}),`
`,e.exports.jsx(t.p,{children:"This will require you to go back and modify your tesselation algorithm to generate UV coordinates for each vertex. Additionally you will need to add this attribute to your VAO and vertex shader to get the necessary information to the fragment shader where you can actually integrate the texture color."}),`
`,e.exports.jsx(t.p,{children:"Think of this as a test as to the extensiblity of your design and the chance to show off how easy it is to add new features to your implementation!"}),`
`,e.exports.jsx(t.h2,{id:"faq",children:e.exports.jsx(t.a,{href:"#faq",children:"FAQ"})}),`
`,e.exports.jsx(t.h2,{id:"extra-credit-todo",children:e.exports.jsx(t.a,{href:"#extra-credit-todo",children:"Extra Credit TODO"})}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"ssao"}),`
`,e.exports.jsx(t.li,{children:"paralax oculsion Maps"}),`
`,e.exports.jsx(t.li,{children:"screen space reflections"}),`
`,e.exports.jsx(t.li,{children:"shadow Maps"}),`
`,e.exports.jsx(t.li,{children:"text rendering"}),`
`,e.exports.jsx(t.li,{children:"spot lights"}),`
`,e.exports.jsx(t.li,{children:"animated scenes?"}),`
`,e.exports.jsx(t.li,{children:"raycast selections do something with it"}),`
`,e.exports.jsx(t.li,{children:"Realtime Normal Maps"}),`
`]}),`
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
`})]})]})}function x(n={}){const{wrapper:t}=n.components||{};return t?e.exports.jsx(t,Object.assign({},n,{children:e.exports.jsx(s,n)})):s(n)}export{x as default,c as documentProps};
