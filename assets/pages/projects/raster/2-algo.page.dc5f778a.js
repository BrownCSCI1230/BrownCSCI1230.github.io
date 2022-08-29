import{j as e}from"../../../chunk-47a93a9e.js";import{M as a}from"../../../chunk-9ad3b198.js";import{I as r}from"../../../chunk-e84bc917.js";const x={title:"Project 2 (Algo)"};function n(s){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",h3:"h3",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",rect:"rect",strong:"strong",style:"style"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#project-2-filter-algo",children:"Project 2: Filter (Algo)"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#convolution",children:"Convolution"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#discrete",children:"Discrete"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#continuous",children:"Continuous"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#visualizing-convolution",children:"Visualizing Convolution"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#blur",children:"Blur"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#scale",children:"Scale"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#scaling-up",children:"Scaling Up"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#scaling-down",children:"Scaling Down"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#naive-back-map",children:"Naive Back-map"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#correct-back-map",children:"Correct Back-map"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#duality-of-domains",children:"Duality of Domains"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#visualizing-sinc-and-box-duals",children:"Visualizing Sinc and Box Duals"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#approximating-sinc",children:"Approximating Sinc"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#sampling-in-the-frequency-domain",children:"Sampling in the Frequency Domain"})})]})]})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"project-2-filter-algo",children:e.exports.jsx(t.a,{href:"#project-2-filter-algo",children:"Project 2: Filter (Algo)"})}),`
`,e.exports.jsxs(t.p,{children:["You can find the handout for this project ",e.exports.jsx(t.a,{href:"/projects/raster/2",children:"here"}),"."]}),`
`,e.exports.jsx(t.h2,{id:"convolution",children:e.exports.jsx(t.a,{href:"#convolution",children:"Convolution"})}),`
`,e.exports.jsx(t.h3,{id:"discrete",children:e.exports.jsx(t.a,{href:"#discrete",children:"Discrete"})}),`
`,e.exports.jsx(t.p,{children:"Fill in the output of the image convolved with the given kernel using zero-padding."}),`
`,e.exports.jsx(r,{images:[{src:"/algos/raster2/discrete.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"1D arrays representing the image and kernel for Q1.1"}),`
`,e.exports.jsx(t.h3,{id:"continuous",children:e.exports.jsx(t.a,{href:"#continuous",children:"Continuous"})}),`
`,e.exports.jsx(t.p,{children:"What is the y value of x=0.5 after convolution"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/raster2/continuous.png",alt:"TODO"}],figNumber:2,targetWidth:"95%",figCaption:"Image as a continuous signal with filter function for Q1.2"}),`
`,e.exports.jsx(t.h3,{id:"visualizing-convolution",children:e.exports.jsx(t.a,{href:"#visualizing-convolution",children:"Visualizing Convolution"})}),`
`,e.exports.jsx(t.p,{children:"Draw the shape of the function in Figure 2 after convolution."}),`
`,e.exports.jsx(t.h2,{id:"blur",children:e.exports.jsx(t.a,{href:"#blur",children:"Blur"})}),`
`,e.exports.jsxs(t.p,{children:["Let's perform a 1-dimensional blur of radius 2 on a row of an image using a kernel represented by array ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.079ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 477 647",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D454",xlinkHref:"#MJX-1-TEX-I-1D454"})})})})]})})}),". In the 1D image, which is represented by an array ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.244ex",height:"2.059ex",role:"img",focusable:"false",viewBox:"0 -705 550 910",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-2-TEX-I-1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D453",xlinkHref:"#MJX-2-TEX-I-1D453"})})})})]})})})," of floats, consider a point at index ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-3-TEX-I-1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D456",xlinkHref:"#MJX-3-TEX-I-1D456"})})})})]})})}),". Write the summation equation for the color at ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.781ex",height:"1.52ex",role:"img",focusable:"false",viewBox:"0 -661 345 672",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-4-TEX-I-1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D456",xlinkHref:"#MJX-4-TEX-I-1D456"})})})})]})})})," in the new, blurred image. You can ignore edge cases for this question. Keep in mind that the kernel width is actually 5, so the center point of the filter array ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.079ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 477 647",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-5-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D454",xlinkHref:"#MJX-5-TEX-I-1D454"})})})})]})})})," is at ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.468ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1533 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-6-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-5B",d:"M118 -250V750H255V710H158V-210H255V-250H118Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),e.exports.jsx(t.path,{id:"MJX-6-TEX-N-5D",d:"M22 710V750H159V-250H22V-210H119V710H22Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D454",xlinkHref:"#MJX-6-TEX-I-1D454"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(477,0)",children:e.exports.jsx(t.use,{"data-c":"5B",xlinkHref:"#MJX-6-TEX-N-5B"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(755,0)",children:e.exports.jsx(t.use,{"data-c":"32",xlinkHref:"#MJX-6-TEX-N-32"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1255,0)",children:e.exports.jsx(t.use,{"data-c":"5D",xlinkHref:"#MJX-6-TEX-N-5D"})})]})})]})})})," (why?)."]}),`
`,e.exports.jsx(t.h2,{id:"scale",children:e.exports.jsx(t.a,{href:"#scale",children:"Scale"})}),`
`,e.exports.jsx(t.h3,{id:"scaling-up",children:e.exports.jsx(t.a,{href:"#scaling-up",children:"Scaling Up"})}),`
`,e.exports.jsx(t.p,{children:"What is the filter support width when you scale (up) by a factor of n > 1?"}),`
`,e.exports.jsx(t.h3,{id:"scaling-down",children:e.exports.jsx(t.a,{href:"#scaling-down",children:"Scaling Down"})}),`
`,e.exports.jsx(t.p,{children:"What is the filter support width when you scale (down) by a factor of 0 < n < 1?"}),`
`,e.exports.jsx(t.h3,{id:"naive-back-map",children:e.exports.jsx(t.a,{href:"#naive-back-map",children:"Naive Back-map"})}),`
`,e.exports.jsx(t.p,{children:"Recall that back-mapping refers to finding the correct filter placement given a pixel in the output image."}),`
`,e.exports.jsxs(t.p,{children:["The naive back-map function is ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.797ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.294ex",height:"2.493ex",role:"img",focusable:"false",viewBox:"0 -750 5875.8 1102.1",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D456",d:"M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D463",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-I-1D452",d:"M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"}),e.exports.jsx(t.path,{id:"MJX-7-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D453",xlinkHref:"#MJX-7-TEX-I-1D453"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(550,0)",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-7-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(939,0)",children:e.exports.jsx(t.use,{"data-c":"1D465",xlinkHref:"#MJX-7-TEX-I-1D465"})}),e.exports.jsxs(t.g,{"data-mml-node":"msub",transform:"translate(1511,0)",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-7-TEX-N-29"})}),e.exports.jsxs(t.g,{"data-mml-node":"TeXAtom",transform:"translate(422,-150) scale(0.707)","data-mjx-texclass":"ORD",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D45B",xlinkHref:"#MJX-7-TEX-I-1D45B"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(600,0)",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-7-TEX-I-1D44E"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1129,0)",children:e.exports.jsx(t.use,{"data-c":"1D456",xlinkHref:"#MJX-7-TEX-I-1D456"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1474,0)",children:e.exports.jsx(t.use,{"data-c":"1D463",xlinkHref:"#MJX-7-TEX-I-1D463"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1959,0)",children:e.exports.jsx(t.use,{"data-c":"1D452",xlinkHref:"#MJX-7-TEX-I-1D452"})})]})]}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(3975.5,0)",children:e.exports.jsx(t.use,{"data-c":"3D",xlinkHref:"#MJX-7-TEX-N-3D"})}),e.exports.jsxs(t.g,{"data-mml-node":"mfrac",transform:"translate(5031.3,0)",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(220,394) scale(0.707)",children:e.exports.jsx(t.use,{"data-c":"1D465",xlinkHref:"#MJX-7-TEX-I-1D465"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(235.2,-345) scale(0.707)",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-7-TEX-I-1D44E"})}),e.exports.jsx(t.rect,{width:"604.5",height:"60",x:"120",y:"220"})]})]})})]})})})," but the correct back-map function is ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.797ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.878ex",height:"2.762ex",role:"img",focusable:"false",viewBox:"0 -868.9 7018.2 1221",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-8-TEX-I-1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}),e.exports.jsx(t.path,{id:"MJX-8-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D453",xlinkHref:"#MJX-8-TEX-I-1D453"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(550,0)",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-8-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(939,0)",children:e.exports.jsx(t.use,{"data-c":"1D465",xlinkHref:"#MJX-8-TEX-I-1D465"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1511,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-8-TEX-N-29"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(2177.8,0)",children:e.exports.jsx(t.use,{"data-c":"3D",xlinkHref:"#MJX-8-TEX-N-3D"})}),e.exports.jsxs(t.g,{"data-mml-node":"mfrac",transform:"translate(3233.6,0)",children:[e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(220,394) scale(0.707)",children:e.exports.jsx(t.use,{"data-c":"1D465",xlinkHref:"#MJX-8-TEX-I-1D465"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(235.2,-345) scale(0.707)",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-8-TEX-I-1D44E"})}),e.exports.jsx(t.rect,{width:"604.5",height:"60",x:"120",y:"220"})]}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(4300.2,0)",children:e.exports.jsx(t.use,{"data-c":"2B",xlinkHref:"#MJX-8-TEX-N-2B"})}),e.exports.jsxs(t.g,{"data-mml-node":"mfrac",transform:"translate(5300.5,0)",children:[e.exports.jsxs(t.g,{"data-mml-node":"mrow",transform:"translate(220,398) scale(0.707)",children:[e.exports.jsx(t.g,{"data-mml-node":"mn",children:e.exports.jsx(t.use,{"data-c":"31",xlinkHref:"#MJX-8-TEX-N-31"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(500,0)",children:e.exports.jsx(t.use,{"data-c":"2212",xlinkHref:"#MJX-8-TEX-N-2212"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(1278,0)",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-8-TEX-I-1D44E"})})]}),e.exports.jsxs(t.g,{"data-mml-node":"mrow",transform:"translate(495.1,-345) scale(0.707)",children:[e.exports.jsx(t.g,{"data-mml-node":"mn",children:e.exports.jsx(t.use,{"data-c":"32",xlinkHref:"#MJX-8-TEX-N-32"})}),e.exports.jsx(t.g,{"data-mml-node":"mi",transform:"translate(500,0)",children:e.exports.jsx(t.use,{"data-c":"1D44E",xlinkHref:"#MJX-8-TEX-I-1D44E"})})]}),e.exports.jsx(t.rect,{width:"1477.7",height:"60",x:"120",y:"220"})]})]})})]})})})]}),`
`,e.exports.jsxs(t.p,{children:["Suppose we wanted to scale ",e.exports.jsx(t.strong,{children:"down"})," a 9 pixel 1D image by a factor of 3 ($a=\\frac",1,3,")."]}),`
`,e.exports.jsx(t.p,{children:"Draw a picture to show where we would sample the original image using the naive back-map. (Above each sample point include an illustration of the filter.)"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/raster2/backmap.png",alt:"TODO"}],figNumber:3,targetWidth:"95%",figCaption:"Example of how to draw the sample points with the filter."}),`
`,e.exports.jsx(t.h3,{id:"correct-back-map",children:e.exports.jsx(t.a,{href:"#correct-back-map",children:"Correct Back-map"})}),`
`,e.exports.jsx(t.p,{children:"Draw another picture to show where we would sample the original image using the correct back-map. (Above each sample point include an illustration of the filter.)"}),`
`,e.exports.jsx(t.h2,{id:"duality-of-domains",children:e.exports.jsx(t.a,{href:"#duality-of-domains",children:"Duality of Domains"})}),`
`,e.exports.jsx(t.h3,{id:"visualizing-sinc-and-box-duals",children:e.exports.jsx(t.a,{href:"#visualizing-sinc-and-box-duals",children:"Visualizing Sinc and Box Duals"})}),`
`,e.exports.jsx(t.p,{children:"The dual of the box-like function in Figure 4(a) in the frequency domain is the sinc-like function shown in Figure 4(b) in the spatial domain (note that the box function shown need not have width 1, because there are no labels on the axes)."}),`
`,e.exports.jsx(t.p,{children:"Sketch the dual of the box-like function in Figure 2. Your drawing doesn't need to be perfectly accurate; we just need to see that you get the idea."}),`
`,e.exports.jsx(r,{images:[{src:"/algos/raster2/duals.png",alt:"TODO"}],figNumber:4,targetWidth:"95%",figCaption:"A box-like function with its sinc-like dual"}),`
`,e.exports.jsx(r,{images:[{src:"/algos/raster2/box.png",alt:"TODO"}],figNumber:5,targetWidth:"95%",figCaption:"A box-like function about twice as wide as 4(a)"}),`
`,e.exports.jsx(t.h3,{id:"approximating-sinc",children:e.exports.jsx(t.a,{href:"#approximating-sinc",children:"Approximating Sinc"})}),`
`,e.exports.jsx(t.p,{children:"What do we usually use to approximate the sinc function, and why do we make this approximation when translating these theoretical concepts into code?"}),`
`,e.exports.jsx(t.h3,{id:"sampling-in-the-frequency-domain",children:e.exports.jsx(t.a,{href:"#sampling-in-the-frequency-domain",children:"Sampling in the Frequency Domain"})}),`
`,e.exports.jsxs(t.p,{children:["If we're sampling a continuous function at a frequency of ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-9-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D45B",xlinkHref:"#MJX-9-TEX-I-1D45B"})})})})]})})})," samples per unit, what is the largest frequency we can represent, according to the Nyquist limit?"]}),`
`,e.exports.jsx(t.p,{children:"Now, examine the frequency plot of the infamous Mandrill in Figure 6. If you were going to sample this signal at a rate of 8 samples per unit, to avoid aliasing you would use what we know about the Nyquist limit to prefilter it. Sketch the new frequency plot after someone has performed this prefiltering step optimally."}),`
`,e.exports.jsx(r,{images:[{src:"/algos/raster2/mandrill.png",alt:"TODO"}],figNumber:6,targetWidth:"95%",figCaption:"The frequency spectrum of the mandrill image plotted"}),`
`,e.exports.jsx(a,{}),e.exports.jsx(t.style,{children:`
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
`})]})]})}function c(s={}){const{wrapper:t}=s.components||{};return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(n,s)})):n(s)}export{c as default,x as documentProps};
