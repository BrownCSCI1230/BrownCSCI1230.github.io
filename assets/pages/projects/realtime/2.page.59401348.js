import{j as e}from"../../../chunk-b0d73203.js";import{I as r}from"../../../chunk-e3efcf8b.js";import{M as o}from"../../../chunk-82f9daf4.js";const x={title:"Project 6"};function n(s){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",ul:"ul",strong:"strong",div:"div","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",rect:"rect",span:"span",em:"em",h4:"h4",style:"style"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#project-6-action",children:"Project 6: Action!"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#introduction",children:"Introduction"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#requirements",children:"Requirements"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#lights",children:"Lights"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#camera-movement",children:"Camera Movement"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#fbos",children:"FBOs"}),e.exports.jsx(t.ol,{className:"toc-level toc-level-4",children:e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#tips-on-convolution-in-shaders",children:"Tips on Convolution in Shaders"})})})]})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#the-stencil",children:"The Stencil"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#realtimesettingschanged",children:"Realtime::settingsChanged()"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#realtime____event-functions",children:"Realtime::____event() Functions"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#m_keymap",children:"m_keyMap"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#readme",children:"README"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#grading",children:"Grading"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#extra-credit-todo",children:"Extra Credit TODO"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#submission",children:"Submission"})})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"project-6-action",children:e.exports.jsx(t.a,{href:"#project-6-action",children:"Project 6: Action!"})}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://classroom.github.com/a/1Fjza6bx",target:"_blank",rel:"noopener noreferrer",children:"Github Classroom assignment"})}),`
`,e.exports.jsxs(t.p,{children:["You can find the algo for this project ",e.exports.jsx(t.a,{href:"/projects/realtime/2-algo",children:"here"}),"."]}),`
`,e.exports.jsxs(t.p,{children:["Example scenefiles to render can be found in ",e.exports.jsxs(t.a,{href:"https://github.com/BrownCSCI1230/scenefiles",target:"_blank",rel:"noopener noreferrer",children:["our ",e.exports.jsx(t.code,{children:"scenefiles"})," repository"]}),"."]}),`
`,e.exports.jsx(t.h2,{id:"introduction",children:e.exports.jsx(t.a,{href:"#introduction",children:"Introduction"})}),`
`,e.exports.jsx(t.p,{children:"In the last project, you set up the foundation to render a static scene using a scene parser, a camera, VBOs/VAOs, and shaders."}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/pipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(t.p,{children:`In this project, you will extend your code to handle camera movement, finish your Phong
illumination model, and apply post-processing effects to your scene using FBOs.`}),`
`,e.exports.jsx(t.h2,{id:"requirements",children:e.exports.jsx(t.a,{href:"#requirements",children:"Requirements"})}),`
`,e.exports.jsx(t.h3,{id:"lights",children:e.exports.jsx(t.a,{href:"#lights",children:"Lights"})}),`
`,e.exports.jsx(t.p,{children:"For this project you will be expected to add support for:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Point Lights w/ Attenuation"}),`
`,e.exports.jsx(t.li,{children:"Spot Lights w/ Attenuation & Penumbra"}),`
`]}),`
`,e.exports.jsx(t.p,{children:`Most of the heavy lifting for the Phong illumination model you have already implemented:
color computation, ambient, diffuse, specular, etc. Now you need to finish adding support
for the different light types and add in attenuation for the light types that support it.`}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Point Lights"}),`: Similar to Ray, these lights are defined by their position and follow
a standard quadratic attenuation fall off given by`]}),`
`,e.exports.jsx(t.div,{className:"math math-display",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",display:"true",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-1.814ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.288ex",height:"4.851ex",role:"img",focusable:"false",viewBox:"0 -1342 7641.3 2143.9",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-1-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-2217",d:"M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D451",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsxs(t.g,{"data-mml-node":"mfrac",children:[e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(3570.7,676)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})}),e.exports.jsxs(t.g,{"data-mml-node":"mrow",transform:"translate(220,-719.9)",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(751.2,0)",children:e.exports.jsx(t.use,{"data-c":"2B",xlinkHref:"#MJX-1-TEX-N-2B"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1751.4,0)",children:e.exports.jsx(t.use,{"data-c":"1D44F",xlinkHref:"#MJX-1-TEX-I-1D44F"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2402.7,0)",children:e.exports.jsx(t.use,{"data-c":"2217",xlinkHref:"#MJX-1-TEX-N-2217"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(3124.9,0)",children:e.exports.jsx(t.use,{"data-c":"1D451",xlinkHref:"#MJX-1-TEX-I-1D451"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(3867.1,0)",children:e.exports.jsx(t.use,{"data-c":"2B",xlinkHref:"#MJX-1-TEX-N-2B"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(4867.3,0)",children:e.exports.jsx(t.use,{"data-c":"1D450",xlinkHref:"#MJX-1-TEX-I-1D450"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(5522.6,0)",children:e.exports.jsx(t.use,{"data-c":"2217",xlinkHref:"#MJX-1-TEX-N-2217"})}),e.exports.jsxs(t.g,{"data-mml-node":"msup",transform:"translate(6244.8,0)",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D451",xlinkHref:"#MJX-1-TEX-I-1D451"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(553,289) scale(0.707)",children:e.exports.jsx(t.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})]}),e.exports.jsx(t.rect,{width:"7401.3",height:"60",x:"120",y:"220"})]})})})]})})}),`
`,e.exports.jsxs(t.p,{children:["where ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.176ex",height:"1.593ex",role:"img",focusable:"false",viewBox:"0 -694 520 704",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-2-TEX-I-1D451",d:"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D451",xlinkHref:"#MJX-2-TEX-I-1D451"})})})})]})})})," is the distance between the light and the point of interest, and ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.159ex",height:"2.009ex",role:"img",focusable:"false",viewBox:"0 -694 2280.3 888",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-3-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.exports.jsx(t.path,{id:"MJX-3-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-3-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}),e.exports.jsx(t.path,{id:"MJX-3-TEX-I-1D450",d:"M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-3-TEX-I-1D44E"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(529,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-3-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(973.7,0)",children:e.exports.jsx(t.use,{"data-c":"1D44F",xlinkHref:"#MJX-3-TEX-I-1D44F"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1402.7,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-3-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1847.3,0)",children:e.exports.jsx(t.use,{"data-c":"1D450",xlinkHref:"#MJX-3-TEX-I-1D450"})})]})})]})})})," are coefficents defined by the material parameter ",e.exports.jsx(t.code,{children:"function"}),"."]}),`
`,e.exports.jsx(r,{images:[{src:"/projects/realtime/2/PointLight1.png",alt:"TODO"},{src:"/projects/realtime/2/PointLight2.png",alt:"TODO"}],figNumber:2,targetWidth:"95%",figCaption:"On the left: point_light1.xml. On the right: point_light2.xml"}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Spot Lights"}),": Using the same mathematics as in the Ray projects, these lights follow not only the standard distance falloff, but an additional angular falloff defined by ",e.exports.jsx(t.code,{children:"angle"})," and ",e.exports.jsx(t.code,{children:"falloff"})," in the stencil light object."]}),`
`,e.exports.jsx(r,{images:[{src:"/projects/realtime/2/SpotLight1.png",alt:"TODO"},{src:"/projects/realtime/2/SpotLight2.png",alt:"TODO"}],figNumber:3,targetWidth:"95%",figCaption:"On the left: spot_light1.xml. On the right: spot_light2.xml"}),`
`,e.exports.jsx(t.h3,{id:"camera-movement",children:e.exports.jsx(t.a,{href:"#camera-movement",children:"Camera Movement"})}),`
`,e.exports.jsxs(t.p,{children:["As the name of this project implies, this is the step where you will implement the ",e.exports.jsx(t.strong,{children:"action"}),"."]}),`
`,e.exports.jsxs(t.p,{children:["For ",e.exports.jsx(t.strong,{children:"translational"})," movement, your input and output will be required to match the following:"]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"W: Translates the camera in the direction of the look vector"}),`
`,e.exports.jsx(t.li,{children:"S: Translates the camera in the opposite direction of the look vector"}),`
`,e.exports.jsx(t.li,{children:"A: Translates the camera in the left direction, perpendicular to the look and up vectors"}),`
`,e.exports.jsx(t.li,{children:`D: Translates the camera in the right direction, also perpendicular to the look and up vectors.
This movement should be opposite to that of pressing A`}),`
`,e.exports.jsxs(t.li,{children:["Space: Translates the camera along the world space vector ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.166ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3167.3 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-4-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-4-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-4-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-4-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-4-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1833.7,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-4-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(2278.3,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-4-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2778.3,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-4-TEX-N-29"})})]})})]})})})]}),`
`,e.exports.jsxs(t.li,{children:["Ctrl: Translates the camera along the world space vector ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.926ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3945.3 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-5-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-5-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-5-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"2212",xlinkHref:"#MJX-5-TEX-N-2212"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(2111.7,0)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-5-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2611.7,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-5-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(3056.3,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(3556.3,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-5-TEX-N-29"})})]})})]})})})]}),`
`]}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsxs(t.p,{children:["For this project we would like you to move at a speed of ",e.exports.jsx(t.strong,{children:"5 world-space units per second"}),". Use the ",e.exports.jsx(t.code,{children:"deltaTime"})," parameter in the ",e.exports.jsx(t.code,{children:"timerEvent"})," function to help achieve this."]})}),`
`,e.exports.jsxs(t.p,{children:["For ",e.exports.jsx(t.strong,{children:"rotational"})," movement, your input and output will be required to match the following:"]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Mouse X Distance Traveled: Rotates the camera about the axis defined by the world space vector ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.166ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3167.3 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-6-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-6-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-6-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-6-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-6-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1833.7,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-6-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(2278.3,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-6-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2778.3,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-6-TEX-N-29"})})]})})]})})})]}),`
`,e.exports.jsx(t.li,{children:"Mouse Y Distance Traveled: Rotates the camera about the axis defined by a vector perpendicular to the look and up vectors of the camera."}),`
`,e.exports.jsxs(t.li,{children:["Mouse Left Click: ",e.exports.jsx(t.strong,{children:"ONLY"})," apply camera rotations if the left mouse button is currently held. This is similar behavior to the brush project so feel free to look back at your old code for inspiration."]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Hint: A perpendicular vector to two other vectors can be calculated by taking a cross product!"}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsxs(t.p,{children:["While we don't force a specific speed for rotation due to wide variance in mice sensitivity, your rotation must be dependent on the distance the mouse has traveled which is given as ",e.exports.jsx(t.code,{children:"deltaX"})," and ",e.exports.jsx(t.code,{children:"deltaY"})," within ",e.exports.jsx(t.code,{children:"mouseMoveEvent"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"You may notice there are a few things left up to your discretion. Whether you rotate CW or CCW on mouse movement as well as sensitivity is up to you, as long your implementation follows the general guidelines above."}),`
`,e.exports.jsx(r,{images:[{src:"/projects/realtime/2/ChessInteractive.gif",alt:"Interactivity in chess.xml"}],targetWidth:"75%",figNumber:4,figCaption:"Interactivity in chess.xml"}),`
`,e.exports.jsxs(t.p,{children:[`In particular, we have provided for you 6 different event functions you may find useful for this task:
`,e.exports.jsx(t.code,{children:"mousePressEvent"}),", ",e.exports.jsx(t.code,{children:"mouseReleaseEvent"}),", ",e.exports.jsx(t.code,{children:"mouseMoveEvent"}),", ",e.exports.jsx(t.code,{children:"keyPressEvent"}),", ",e.exports.jsx(t.code,{children:"keyRepeatEvent"}),", ",e.exports.jsx(t.code,{children:"keyReleaseEvent"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Important"}),": You may ",e.exports.jsx(t.strong,{children:"NOT"})," use the following GLM functions--we expect you to have a good enough understanding of transform matrices to construct helper functions for each of these if necessary:"]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.code,{children:"glm::scale()"})}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.code,{children:"glm::rotate()"})}),`
`,e.exports.jsx(t.li,{children:e.exports.jsx(t.code,{children:"glm::translate()"})}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"fbos",children:e.exports.jsx(t.a,{href:"#fbos",children:"FBOs"})}),`
`,e.exports.jsxs(t.p,{children:["For this project, you will be required to integrate Framebuffers into your project and use them to apply 2 different effects of your choosing. In particular, you must pick ",e.exports.jsx(t.strong,{children:"one"})," effect from each of the following lists:"]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.em,{children:"Per-pixel"}),": invert, grayscale"]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.em,{children:"Kernel-based:"})," sharpen, box blur (5x5 kernel)"]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"We would also like you to have some sort of variable to control what the default framebuffer value is as in lab 11. Please also include in your README how TAs can change it's value since depending on the OS, we may require a different default FBO value in order to draw to the screen for our TA machines."}),`
`,e.exports.jsx(r,{images:[{src:"/projects/realtime/2/PhongTest-None.png",alt:"TODO"},{src:"/projects/realtime/2/PhongTest-Invert.png",alt:"TODO"},{src:"/projects/realtime/2/PhongTest-Sharpen.png",alt:"TODO"},{src:"/projects/realtime/2/PhongTest-InvertSharpen.png",alt:"TODO"}],figNumber:5,targetWidth:"95%",figCaption:"From left to right: No Filter, Invert, Sharpen, Invert + Sharpen"}),`
`,e.exports.jsx(t.h4,{id:"tips-on-convolution-in-shaders",children:e.exports.jsx(t.a,{href:"#tips-on-convolution-in-shaders",children:"Tips on Convolution in Shaders"})}),`
`,e.exports.jsx(t.p,{children:"Consider how sampling a nearby pixel correlates to changing your current UV coordinate. How would you increment your UV coordinate to sample a pixel 1 to the right in a 300 x 300 image? How will you know the dimensions of your image when sampling it in your shader?"}),`
`,e.exports.jsx(t.h2,{id:"the-stencil",children:e.exports.jsx(t.a,{href:"#the-stencil",children:"The Stencil"})}),`
`,e.exports.jsx(t.p,{children:"You will be continuing to work within the same codebase as the previous assignment. However there are a few things you have now unlocked moving into Project 6!"}),`
`,e.exports.jsx(t.h3,{id:"realtimesettingschanged",children:e.exports.jsx(t.a,{href:"#realtimesettingschanged",children:e.exports.jsx(t.code,{children:"Realtime::settingsChanged()"})})}),`
`,e.exports.jsx(t.p,{children:`In Project 5, you used this function to get information about the cameras near and far planes as well as your tessellation parameters.
For this project, the new settings you will have to use are:`}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.code,{children:"settings.perPixelilter"}),": Should activate the implemented per-pixel filter of your choice."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.code,{children:"settings.kernelBasedFilter"}),": Should activate the implemented kernel-based filter of your choice."]}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"realtime____event-functions",children:e.exports.jsxs(t.a,{href:"#realtime____event-functions",children:[e.exports.jsx(t.code,{children:"Realtime::____event()"})," Functions"]})}),`
`,e.exports.jsxs(t.p,{children:["For these functions, there are really only 2 you should need to use for this project: ",e.exports.jsx(t.code,{children:"mouseMoveEvent"})," and ",e.exports.jsx(t.code,{children:"timerEvent"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.code,{children:"timerEvent"})," is called on a loop which is attempting to run 60 times per second. However because loops can never be perfect, we have calculated for you the time between loops labeled in a variable ",e.exports.jsx(t.code,{children:"deltaTime"})," which you can use for translational movement."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.code,{children:"mouseMoveEvent"})," is called whenever the mouse moves. We have calculated in this function for you ",e.exports.jsx(t.code,{children:"deltaX"})," and ",e.exports.jsx(t.code,{children:"deltaY"})," which tell you how far the mouse has moved. In addition, we have also applied a variable ",e.exports.jsx(t.code,{children:"m_mouseDown"})," which lets you know if the left mouse button is currently clicked."]}),`
`,e.exports.jsx(t.h3,{id:"m_keymap",children:e.exports.jsx(t.a,{href:"#m_keymap",children:e.exports.jsx(t.code,{children:"m_keyMap"})})}),`
`,e.exports.jsxs(t.p,{children:["A new member variable that will be useful to you is labeled ",e.exports.jsx(t.code,{children:"m_keyMap"}),". This is an ",e.exports.jsx(t.code,{children:"std::unordered_map"})," containing ",e.exports.jsx(t.code,{children:"Qt::Key"}),"s as the key and a boolean representing whether or not the key is currently pressed down at any given time. One example of how to use this member variable is:"]}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.code,{children:"m_keyMap[Qt::Key_W]"}),': Returns whether or not the "W" key is pressed down']}),`
`]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.code,{children:"m_keyMap"})," comes equipped to handle the keys: ",e.exports.jsx(t.code,{children:"Qt::Key_W"}),", ",e.exports.jsx(t.code,{children:"Qt::Key_A"}),", ",e.exports.jsx(t.code,{children:"Qt::Key_S"}),", ",e.exports.jsx(t.code,{children:"Qt::Key_D"}),", ",e.exports.jsx(t.code,{children:"Qt::Key_Space"}),", and ",e.exports.jsx(t.code,{children:"Qt::Key_Control"}),"."]}),`
`,e.exports.jsx(t.h2,{id:"readme",children:e.exports.jsx(t.a,{href:"#readme",children:"README"})}),`
`,e.exports.jsxs(t.p,{children:["Your repo should include a README in Markdown format with the filename ",e.exports.jsx(t.code,{children:"README.md"}),". This file should contain basic information about your design choices. You should also include any known bugs and any extra credit you've implemented."]}),`
`,e.exports.jsx(t.p,{children:"Please also, as described in the FBO section, include an explanation for TAs to quickly change the value of the default framebuffer such that they can run your code on their machines."}),`
`,e.exports.jsx(t.p,{children:"For extra credit, please describe what you've done and point out the related part of your code."}),`
`,e.exports.jsx(t.h2,{id:"grading",children:e.exports.jsx(t.a,{href:"#grading",children:"Grading"})}),`
`,e.exports.jsx(t.p,{children:"This project is out of 100 points:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Camera Interactability ",e.exports.jsx(t.strong,{children:"(25 points)"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Translation on Key Press ",e.exports.jsx(t.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(t.li,{children:["Rotation on Mouse Movement ",e.exports.jsx(t.strong,{children:"(15 points)"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Additional Lights ",e.exports.jsx(t.strong,{children:"(20 points)"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Point Lights w/ Attenuation ",e.exports.jsx(t.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(t.li,{children:["Spot Lights w/ Penumbra ",e.exports.jsx(t.strong,{children:"(10 points)"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["FBOs ",e.exports.jsx(t.strong,{children:"(25 points)"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["Per-Pixel Filter ",e.exports.jsx(t.strong,{children:"(10 points)"})]}),`
`,e.exports.jsxs(t.li,{children:["Kernel-Based Filter ",e.exports.jsx(t.strong,{children:"(15 points)"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Software Engineering, Efficiency, & Stability ",e.exports.jsx(t.strong,{children:"(25 points)"})]}),`
`,e.exports.jsxs(t.li,{children:["README ",e.exports.jsx(t.strong,{children:"(5 points)"})]}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"extra-credit-todo",children:e.exports.jsx(t.a,{href:"#extra-credit-todo",children:"Extra Credit TODO"})}),`
`,e.exports.jsx(t.p,{children:"Remember that half-credit requirements count as extra credit if you are not enrolled in the half-credit course."}),`
`,e.exports.jsxs(t.p,{children:["All of the ",e.exports.jsx(t.a,{href:"/projects/realtime/1#extra-credit",children:"extra credit options for Project 5 (Lights, Camera)"})," are also valid options here, provided you haven't already received credit for them on Project 5."]}),`
`,e.exports.jsx(t.p,{children:"In addition, we suggest the following extra features:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Implement More Filters"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Per-Pixel Filter (2 Points)"}),": Implement another per-pixel based filter"]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Kernel-Based or Multi-Stage Filter (3-5 Points, check with staff)"}),": Besides the 2 listed filters, there are many other filters that require multiple stages in a render pipeline. These can include things such as bloom or even edge detection having 2 sobel kernels as you experienced in the filter project!"]}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Screen Space Ambient Occlusion (10 Points)"}),": Screen space ambient occlusion is one way to help fake global illumination in a directly illuminated model. Implement the algorithm in a realtime for some extra credit!"]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Directional Light Shadow Maps (10 Points)"}),": Implement shadow mapping for directional lights."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Texture Mapping (8 Points)"}),": Add uv coordinates to your shapes and use them to give your shapes the textures they are assigned in their materials."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Fast Approximate Anti-Aliasing (10 Points)"}),": Implement the ",e.exports.jsx(t.a,{href:"https://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf",target:"_blank",rel:"noopener noreferrer",children:"FXAA algorithm"})," in a GLSL shader."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Connect Your Real Time Renderer to Your Raytracer (5 points)"}),`: Professional
3D software packages (such as Blender or Maya) provide an interactive 3D viewport
onto the scene being modeled, but they also provide interfaces to render the scene
with higher-quality methods (such as ray tracing). Add a button to the UI for this project which calls your ray tracer to render the
scene from the current camera viewpoint.`]}),`
`]}),`
`,e.exports.jsx(t.div,{className:"task-no-number-callout callout",children:e.exports.jsxs(t.p,{children:["CS 1234/2230 students must attempt at least ",e.exports.jsx(t.strong,{children:"8 points"})," of extra credit."]})}),`
`,e.exports.jsx(t.h2,{id:"submission",children:e.exports.jsx(t.a,{href:"#submission",children:"Submission"})}),`
`,e.exports.jsx(t.p,{children:'Submit your Github repo for this project to the "Project 6: Action! (Code)" assignment on Gradescope.'}),`
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
`})]})]})}function d(s={}){const{wrapper:t}=s.components||{};return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(n,s)})):n(s)}export{d as default,x as documentProps};
