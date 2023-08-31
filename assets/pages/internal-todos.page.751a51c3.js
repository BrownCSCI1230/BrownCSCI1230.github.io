import{j as e}from"../chunk-91776ecf.js";const i={title:"Internal TODOs"};function r(t){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",blockquote:"blockquote",h2:"h2",div:"div",code:"code",ul:"ul",h3:"h3",em:"em"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#internal-todos",children:"Internal TODOs"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#most-impactful",children:"Most Impactful"})}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#projects",children:"Projects"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#project-1-brush",children:"Project 1: Brush"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#project-2-filter",children:"Project 2: Filter"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#project-3-intersect",children:"Project 3: Intersect"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#project-4-illuminate",children:"Project 4: Illuminate"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#project-5-lights-camera",children:"Project 5: Lights, Camera"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#project-6-action",children:"Project 6: Action!"})})]})]})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,e.exports.jsx(s.h1,{id:"internal-todos",children:e.exports.jsx(s.a,{href:"#internal-todos",children:"Internal TODOs"})}),`
`,e.exports.jsx(s.p,{children:"This is a list of small things to fix or improve upon, based on our TAs' experiences and student feedback gathered during Fall 2022's run of CS 1230."}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"If you have inherited this document, godspeed."}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"most-impactful",children:e.exports.jsx(s.a,{href:"#most-impactful",children:"Most Impactful"})}),`
`,e.exports.jsx(s.p,{children:"These are the three most impactful changes that can be made. Everything else is small stuff."}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Create an executable demo for each project, using our minimal and maximal solutions."}),`
`]})}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs(s.ol,{start:"2",children:[`
`,e.exports.jsxs(s.li,{children:["Rework the ",e.exports.jsx(s.code,{children:"scenefiles"})," repository to better facilitate incremental testing. Get rid of fluff, and especially get rid of confusing bench images."]}),`
`]})}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsx(s.li,{children:'Attempt to partially, if not fully, automate the grading of assignments. If partial, make this accessible to students so they can "grade" their implementations themselves.'}),`
`]})}),`
`,e.exports.jsx(s.h2,{id:"projects",children:e.exports.jsx(s.a,{href:"#projects",children:"Projects"})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:`Make every extra credit item (both on Gradescope's rubrics and on the handouts) "up to X points", instead of "X points".`}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"project-1-brush",children:e.exports.jsx(s.a,{href:"#project-1-brush",children:"Project 1: Brush"})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Stencil Code",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Fix ",e.exports.jsx(s.code,{children:"clearCanvas()"}),"... why does it make the canvas bigger lmao"]}),`
`,e.exports.jsxs(s.li,{children:["Make project 1 and lab 2 work the same way re: ",e.exports.jsx(s.code,{children:"mouseDragged()"})," requiring a left mouse button (LMB) check. They'll have to implement the LMB-is-down boolean themselves."]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["General",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Specify that students ",e.exports.jsx(s.em,{children:"should"})," paint on ",e.exports.jsx(s.code,{children:"mouseDown()"}),". This applies to lab 2 as well, and both handouts should be edited.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"This has an added bonus: we can grade their mask just by clicking once."}),`
`]}),`
`]}),`
`,e.exports.jsx(s.li,{children:"Specify that if your brush center is off-canvas, but its radius is big enough that it should be drawing on the canvas, then it must draw on the canvas."}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Efficiency",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Emphasize that they should only re-create the brush mask when necessary, i.e. they must check for changes in radius and brush type.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Modify gradescope rubric's efficiency part to account for this."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Constant",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Fix constant brush.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["EITHER:",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Specify that constant brush should draw 1 pixel at radius 1, i.e. ",e.exports.jsx(s.code,{children:"distance < radius"}),";"]}),`
`,e.exports.jsxs(s.li,{children:["Specify that constant brush should draw 5 pixels at radius 1, i.e. ",e.exports.jsx(s.code,{children:"distance \u2264 radius"}),"; or"]}),`
`,e.exports.jsxs(s.li,{children:["(Preferred) use this nifty formula: ",e.exports.jsx(s.code,{children:"distance < radius - sqrt(2)/2"}),". It produces a much nicer circle, that looks like the kind a pixel art app would produce. Ask ",e.exports.jsx(s.code,{children:"zcheng12"})," or ",e.exports.jsx(s.code,{children:"dtoth1"})," for details."]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.li,{children:"Important: this will require changing all examples of the constant brush (videos, images, etc)!"}),`
`]}),`
`]}),`
`,e.exports.jsx(s.li,{children:"Possibly move constant brush into lab 2: pencil, as an optional final task. This would mean that students can collaborate on it, so weigh the tradeoffs accordingly. As it is, brush is a little too easy."}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Smudge",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Fix smudging from edges: use transparent (",e.exports.jsx(s.code,{children:"RGBA{0,0,0,0}"}),") instead of black."]}),`
`,e.exports.jsxs(s.li,{children:["In the handout, warn them not to re-create their data structure every time ",e.exports.jsx(s.code,{children:"mouseDragged()"})," is called. It's especially easy to forget that ",e.exports.jsx(s.code,{children:"clear()"})," will cause this to happen, requiring a reallocation of memory afterwards."]}),`
`,e.exports.jsx(s.li,{children:"Specify to use linear or quadratic (please pick one) for smudging, to make our grading easier. Do not permit using the constant brush."}),`
`,e.exports.jsxs(s.li,{children:["(Recommended, but optional) Change project requirements so that smudge brush must be affected by alpha.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["In this case, we can say: when alpha is ",e.exports.jsx(s.code,{children:"255"}),", however much I smudge in a single stroke (within the canvas), the pixel under the cursor should always stay the same."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Spray",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Emphasize that spray should spray dots of the same color, i.e. THE BRUSH COLOR, accounting for the alpha."}),`
`,e.exports.jsx(s.li,{children:'Specify that spray should do a DIFFERENT distribution of points every time it is "painted" to the screen.'}),`
`,e.exports.jsxs(s.li,{children:["Specify that spray should fill ",e.exports.jsx(s.code,{children:"density"})," proportion of its mask: if ",e.exports.jsx(s.code,{children:"density = 100"}),", it's basically constant brush; if ",e.exports.jsx(s.code,{children:"density = 0"}),", it does nothing"]}),`
`,e.exports.jsx(s.li,{children:"Specify that the brush should be a circle centered on the mouse x,y"}),`
`,e.exports.jsxs(s.li,{children:["Make a note about using ",e.exports.jsx(s.code,{children:"rand()"})," or ",e.exports.jsx(s.code,{children:"arc4_random()"})]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Fill",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Specify that it should fill on mouse down, not on mouse dragged."}),`
`,e.exports.jsx(s.li,{children:"Specify that fill should fill the canvas if clicked on an empty canvas; in general, it should treat the canvas bounds as... bounds."}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Alpha Blending",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:'Specify the correct implementation of alpha blending: the "effect" of the brush is "capped" at its current alpha value. This is what Photoshop does, though Procreate might behave differently.'}),`
`,e.exports.jsx(s.li,{children:"(Optional) specify that it's fine for alpha blending not to work with their other extra credit brushes. Possibly give more extra credit if they fix those too."}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"project-2-filter",children:e.exports.jsx(s.a,{href:"#project-2-filter",children:"Project 2: Filter"})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["General",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Be clearer in the handout about what we expect their filters to produce at edge cases, e.g. when blurring sigma = 0."}),`
`,e.exports.jsx(s.li,{children:"Change function names for Project 2: Filter in the projects_2D stencil, to match those in Lab 3: Convolution"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Scaling",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Specify in the handout to ",e.exports.jsx(s.code,{children:"round"})," the output size if the scale factor times the width or height produces a non-integer value. ",e.exports.jsx(s.code,{children:"floor"})," is fine, too, but be consistent.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"It's very important to be consistent. Many students messed this up, causing a 45\xB0 shearing of their image due to an indexing mismatch of 1 pixel per row."}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["When at boundaries, instead of using ",e.exports.jsx(s.code,{children:"getPixelReflected()"})," or whatever, ask students to divide by the sum of the weights used when summing over the triangle. This is possibly more correct, but feel free to disagree."]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Edge Detection",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Fix sensitivity and be clearer about what it should do."}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Extra Credit",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Reduce point values for:",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Basic chromatic aberration: 4 --> 3"}),`
`,e.exports.jsx(s.li,{children:"Spatially-aware: 8 --> 6"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["Rotation",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"Specify in the handout that, as with all filters, rotation should be able to be applied consecutively on the same image!"}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"project-3-intersect",children:e.exports.jsx(s.a,{href:"#project-3-intersect",children:"Project 3: Intersect"})}),`
`,e.exports.jsx(s.h3,{id:"project-4-illuminate",children:e.exports.jsx(s.a,{href:"#project-4-illuminate",children:"Project 4: Illuminate"})}),`
`,e.exports.jsx(s.h3,{id:"project-5-lights-camera",children:e.exports.jsx(s.a,{href:"#project-5-lights-camera",children:"Project 5: Lights, Camera"})}),`
`,e.exports.jsx(s.h3,{id:"project-6-action",children:e.exports.jsx(s.a,{href:"#project-6-action",children:"Project 6: Action!"})})]})]})}function o(t={}){const{wrapper:s}=t.components||{};return s?e.exports.jsx(s,Object.assign({},t,{children:e.exports.jsx(r,t)})):r(t)}export{o as default,i as documentProps};
