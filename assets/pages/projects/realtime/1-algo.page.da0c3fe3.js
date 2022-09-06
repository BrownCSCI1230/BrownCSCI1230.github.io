import{j as e}from"../../../chunk-903e764a.js";import{I as r}from"../../../chunk-30f40460.js";import{M as a}from"../../../chunk-b2e2a089.js";const x={title:"Project 5 (Algo)"};function n(t){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",strong:"strong",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",code:"code",tbody:"tbody",td:"td",pre:"pre",style:"style"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#project-5-lights-camera-algo",children:"Project 5: Lights, Camera (Algo)"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#projection-matrices",children:"Projection Matrices"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#visuals-question-wip",children:"Visuals (QUESTION WIP)"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#scaling",children:"Scaling"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#unhinging",children:"Unhinging"})})]})]})})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#vertex-attributes",children:"Vertex Attributes"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#vertex-buffer-format",children:"Vertex Buffer Format"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#vertex-arrays",children:"Vertex Arrays"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#realtime-pipeline",children:"Realtime Pipeline"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#31",children:"3.1"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#32",children:"3.2"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#program-analysis",children:"Program Analysis"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#erroneous-code",children:"Erroneous Code"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#predict-the-render",children:"Predict the Render"})})]})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#submission",children:"Submission"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"project-5-lights-camera-algo",children:e.exports.jsx(s.a,{href:"#project-5-lights-camera-algo",children:"Project 5: Lights, Camera (Algo)"})}),`
`,e.exports.jsxs(s.p,{children:["You can find the handout for this project ",e.exports.jsx(s.a,{href:"/projects/realtime/1",children:"here"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"projection-matrices",children:e.exports.jsx(s.a,{href:"#projection-matrices",children:"Projection Matrices"})}),`
`,e.exports.jsx(s.p,{children:"In lecture, we learned the two matrices that describe the camera: view and projection. In ray, you learned how to generate a view matrix from a position, look, and up vector. In realtime, you will explore the concept of a projection matrix which covers the geometry of a view frustum!"}),`
`,e.exports.jsx(s.h3,{id:"visuals-question-wip",children:e.exports.jsx(s.a,{href:"#visuals-question-wip",children:"Visuals (QUESTION WIP)"})}),`
`,e.exports.jsx(s.p,{children:"What does it (the scene) look like when we shape frustum into a cube?"}),`
`,e.exports.jsx(s.p,{children:"Frustum:"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/realtime1/Frustum.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"Frustum Scene"}),`
`,e.exports.jsx(s.p,{children:"Cube:"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/realtime1/Cube1.png",alt:"TODO"}],figNumber:2,targetWidth:"95%",figCaption:"Cube Scene 1"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/realtime1/Cube1.png",alt:"TODO"}],figNumber:3,targetWidth:"95%",figCaption:"Cube Scene 2"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/realtime1/Cube1.png",alt:"TODO"}],figNumber:4,targetWidth:"95%",figCaption:"Cube Scene 3"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/realtime1/Cube1.png",alt:"TODO"}],figNumber:5,targetWidth:"95%",figCaption:"Cube Scene 4"}),`
`,e.exports.jsx(s.h4,{id:"scaling",children:e.exports.jsx(s.a,{href:"#scaling",children:"Scaling"})}),`
`,e.exports.jsxs(s.p,{children:["Given a far plane of 100, height angle of 30 degrees, and a width angle of 45 degrees, what would the scaling matrix look like? Refer to ",e.exports.jsx(s.a,{href:"https://docs.google.com/presentation/d/1X8VHq-21yZbckzthbTDW_kKiRRlq3gWV/edit#slide=id.p60",target:"_blank",rel:"noopener noreferrer",children:"this lecture"})," for a reminder."]}),`
`,e.exports.jsx(s.h4,{id:"unhinging",children:e.exports.jsx(s.a,{href:"#unhinging",children:"Unhinging"})}),`
`,e.exports.jsxs(s.p,{children:["Given a near plane distance of 0.1 and a far plane distance of 100, what would the parallelization matrix look like? Refer to ",e.exports.jsx(s.a,{href:"https://docs.google.com/presentation/d/1X8VHq-21yZbckzthbTDW_kKiRRlq3gWV/edit#slide=id.p67",target:"_blank",rel:"noopener noreferrer",children:"this lecture"})," for a reminder."]}),`
`,e.exports.jsx(s.h2,{id:"vertex-attributes",children:e.exports.jsx(s.a,{href:"#vertex-attributes",children:"Vertex Attributes"})}),`
`,e.exports.jsx(s.h3,{id:"vertex-buffer-format",children:e.exports.jsx(s.a,{href:"#vertex-buffer-format",children:"Vertex Buffer Format"})}),`
`,e.exports.jsxs(s.p,{children:["Using ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.282ex",height:"1.339ex",role:"img",focusable:"false",viewBox:"0 -442 1008.6 592",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-1-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}),e.exports.jsx(s.path,{id:"MJX-1-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D465",xlinkHref:"#MJX-1-TEX-I-1D465"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(605,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-1-TEX-N-31"})})})]})})})]})})}),", ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.096ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 926.6 647",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-2-TEX-I-1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}),e.exports.jsx(s.path,{id:"MJX-2-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D466",xlinkHref:"#MJX-2-TEX-I-1D466"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(523,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-2-TEX-N-31"})})})]})})})]})})}),", ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.04ex",height:"1.339ex",role:"img",focusable:"false",viewBox:"0 -442 901.6 592",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-3-TEX-I-1D467",d:"M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"}),e.exports.jsx(s.path,{id:"MJX-3-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D467",xlinkHref:"#MJX-3-TEX-I-1D467"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(498,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-3-TEX-N-31"})})})]})})})]})})})," to represent a single vertex's position, ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.008ex",height:"1.339ex",role:"img",focusable:"false",viewBox:"0 -442 887.6 592",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-4-TEX-I-1D45F",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"}),e.exports.jsx(s.path,{id:"MJX-4-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D45F",xlinkHref:"#MJX-4-TEX-I-1D45F"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(484,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-4-TEX-N-31"})})})]})})})]})})}),", ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.067ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 913.6 647",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-5-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}),e.exports.jsx(s.path,{id:"MJX-5-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D454",xlinkHref:"#MJX-5-TEX-I-1D454"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(510,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-5-TEX-N-31"})})})]})})})]})})}),", ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.958ex",height:"1.91ex",role:"img",focusable:"false",viewBox:"0 -694 865.6 844",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-6-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}),e.exports.jsx(s.path,{id:"MJX-6-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D44F",xlinkHref:"#MJX-6-TEX-I-1D44F"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(462,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-6-TEX-N-31"})})})]})})})]})})})," for color and ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.282ex",height:"1.339ex",role:"img",focusable:"false",viewBox:"0 -442 1008.6 592",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-7-TEX-I-1D462",d:"M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}),e.exports.jsx(s.path,{id:"MJX-7-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D462",xlinkHref:"#MJX-7-TEX-I-1D462"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(605,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-7-TEX-N-31"})})})]})})})]})})}),", ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.085ex",height:"1.342ex",role:"img",focusable:"false",viewBox:"0 -443 921.6 593",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(s.defs,{children:[e.exports.jsx(s.path,{id:"MJX-8-TEX-I-1D463",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}),e.exports.jsx(s.path,{id:"MJX-8-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"})]}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsxs(s.g,{"data-mml-node":"msub",children:[e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D463",xlinkHref:"#MJX-8-TEX-I-1D463"})}),e.exports.jsx(s.g,{"data-mml-node":"TeXAtom",transform:"translate(518,-150) scale(0.707)","data-mjx-texclass":"ORD",children:e.exports.jsx(s.g,{"data-mml-node":"mn",children:e.exports.jsx(s.use,{"data-c":"31",xlinkHref:"#MJX-8-TEX-N-31"})})})]})})})]})})})," for texture coordinates, fill in the following array for ",e.exports.jsx(s.strong,{children:"2 vertices"})," which have ",e.exports.jsx(s.strong,{children:"position"}),", ",e.exports.jsx(s.strong,{children:"color"}),", and ",e.exports.jsx(s.strong,{children:"texture coordinate"})," attributes"]}),`
`,e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsx(s.table,{children:e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{}),e.exports.jsx(s.th,{})]})})})}),`
`,e.exports.jsx(s.h3,{id:"vertex-arrays",children:e.exports.jsx(s.a,{href:"#vertex-arrays",children:"Vertex Arrays"})}),`
`,e.exports.jsxs(s.p,{children:["For each attribute (position, color, and texture coordinate), please provide the stride and offset in bytes using ",e.exports.jsx(s.span,{className:"math math-inline",children:e.exports.jsx(s["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(s.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(s.defs,{children:e.exports.jsx(s.path,{id:"MJX-9-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"})}),e.exports.jsx(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(s.g,{"data-mml-node":"math",children:e.exports.jsx(s.g,{"data-mml-node":"mi",children:e.exports.jsx(s.use,{"data-c":"1D465",xlinkHref:"#MJX-9-TEX-I-1D465"})})})})]})})})," to reference ",e.exports.jsx(s.code,{children:"size_of(GL_float)"}),"."]}),`
`,e.exports.jsx(s.p,{children:"TODO TAble"}),`
`,e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{align:"left"}),e.exports.jsx(s.th,{align:"left",children:"Stride"}),e.exports.jsx(s.th,{align:"left",children:"Offset"}),e.exports.jsx(s.th,{align:"left",children:"Position"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Position"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Color"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Texture Coordinates"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"}),e.exports.jsx(s.td,{align:"left"})]})]})]})}),`
`,e.exports.jsx(s.h2,{id:"realtime-pipeline",children:e.exports.jsx(s.a,{href:"#realtime-pipeline",children:"Realtime Pipeline"})}),`
`,e.exports.jsx(r,{images:[{src:"/algos/realtime1/pipeline.png",alt:"TODO"}],figNumber:6,targetWidth:"95%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(s.h3,{id:"31",children:e.exports.jsx(s.a,{href:"#31",children:"3.1"})}),`
`,e.exports.jsx(s.p,{children:"What does rasterization do? How does rasterization fit into the realtime pipeline in terms of inputs and outputs?"}),`
`,e.exports.jsx(s.h3,{id:"32",children:e.exports.jsx(s.a,{href:"#32",children:"3.2"})}),`
`,e.exports.jsx(s.p,{children:`We can perform the same types of computation in both fragment and vertex shader.
Compare the performance considerations associated with applying coordinate transforms
in the vertex shader vs. the in fragment shader.`}),`
`,e.exports.jsx(s.p,{children:"Is this a good idea? why or why not?"}),`
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
`,e.exports.jsx(s.h2,{id:"submission",children:e.exports.jsx(s.a,{href:"#submission",children:"Submission"})}),`
`,e.exports.jsxs(s.p,{children:[`Submit your answers to these questions to the "Algo 5: Lights, Camera" assignment on Gradescope.
Instructions on using Gradescope are available `,e.exports.jsx(s.a,{href:"/docs/github-gradescope-guide",children:"here"}),"."]}),`
`,e.exports.jsx(a,{}),e.exports.jsx(s.style,{children:`
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
`})]})]})}function c(t={}){const{wrapper:s}=t.components||{};return s?e.exports.jsx(s,Object.assign({},t,{children:e.exports.jsx(n,t)})):n(t)}export{c as default,x as documentProps};
