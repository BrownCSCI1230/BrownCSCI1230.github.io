import{j as e}from"../../chunk-37395b21.js";import{I as t}from"../../chunk-3e1e0f24.js";import{M as l}from"../../chunk-a40e06f3.js";const c={title:"Viewports"};function n(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",h2:"h2",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",span:"span",blockquote:"blockquote",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#viewports",children:"Viewports"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#recap-a-texture-in-an-fbo",children:"Recap: A Texture In An FBO"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#clearing",children:"Clearing"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#recap-the-canonical-view-volume",children:"Recap: The Canonical View Volume"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#drawing",children:"Drawing"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#setting-the-viewport",children:"Setting The Viewport"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#getting-the-viewport",children:"Getting The Viewport"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#putting-it-all-together",children:"Putting It All Together"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#faq",children:"FAQ"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"viewports",children:e.exports.jsx(s.a,{href:"#viewports",children:"Viewports"})}),`
`,e.exports.jsx(s.h2,{id:"recap-a-texture-in-an-fbo",children:e.exports.jsx(s.a,{href:"#recap-a-texture-in-an-fbo",children:"Recap: A Texture In An FBO"})}),`
`,e.exports.jsxs(s.p,{children:["Suppose there exists some ",e.exports.jsx(s.strong,{children:"texture"}),"\u2014the color buffer of the currently-bound FBO."]}),`
`,e.exports.jsx(t,{images:[{src:"/docs/viewports/texture.png",alt:"TODO"}],figNumber:2,targetWidth:"35%",figCaption:"A texture."}),`
`,e.exports.jsxs(s.p,{children:["If this was a texture that ",e.exports.jsx(s.em,{children:"you'd"})," previously created, then it'd have dimensions based on your call to ",e.exports.jsx(s.code,{children:"glRenderbufferStorage()"})," (",e.exports.jsx(s.a,{href:"https://registry.khronos.org/OpenGL-Refpages/gl4/html/glRenderbufferStorage.xhtml",target:"_blank",rel:"noopener noreferrer",children:"docs"}),")."]}),`
`,e.exports.jsxs(s.p,{children:["If this was the color buffer of the ",e.exports.jsx(s.strong,{children:"default FBO"}),", however, it'd have dimensions corresponding to whatever OpenGL is rendering to. In fact, this texture would be exactly what's rendered there."]}),`
`,e.exports.jsxs(s.p,{children:["But besides that, whether this is in the default FBO or one you've created is ",e.exports.jsx(s.strong,{children:"not important"}),". All that matters is that we've got this here texture."]}),`
`,e.exports.jsx(s.h2,{id:"clearing",children:e.exports.jsx(s.a,{href:"#clearing",children:"Clearing"})}),`
`,e.exports.jsxs(s.p,{children:["What happens when we call ",e.exports.jsx(s.code,{children:"glClear()"}),"? Very simply, it'll cause OpenGL to clear ",e.exports.jsx(s.em,{children:"everything"})," in the currently-bound FBO's texture, by filling it with some given value."]}),`
`,e.exports.jsxs(s.p,{children:["So let's now suppose we use ",e.exports.jsx(s.code,{children:"glClear()"})," to clear our texture with a blue color:"]}),`
`,e.exports.jsx(t,{images:[{src:"/docs/viewports/texture-cleared.png",alt:"TODO"}],figNumber:3,targetWidth:"35%",figCaption:"A texture, cleared with blue."}),`
`,e.exports.jsxs("details",{children:[e.exports.jsxs("summary",{children:["An aside on other, related ",e.exports.jsx(s.code,{children:"gl"})," functions"]}),e.exports.jsxs(s.p,{children:["Remember: an FBO can have multiple textures. We therefore specify ",e.exports.jsx(s.strong,{children:"which textures to clear"})," by calling ",e.exports.jsx(s.code,{children:"glClear()"})," with different arguments (",e.exports.jsx(s.a,{href:"https://registry.khronos.org/OpenGL-Refpages/gl4/html/glClear.xhtml",target:"_blank",rel:"noopener noreferrer",children:"docs"}),")."]}),e.exports.jsxs(s.p,{children:["We can also specify ",e.exports.jsx(s.strong,{children:"what value(s) to clear the texture(s) with"})," using ",e.exports.jsx(s.code,{children:"glClearColor()"}),", ",e.exports.jsx(s.code,{children:"glClearDepth()"}),", and ",e.exports.jsx(s.code,{children:"glClearStencil()"}),". You'll probably only have heard of the first one."]})]}),`
`,e.exports.jsx(s.h2,{id:"recap-the-canonical-view-volume",children:e.exports.jsx(s.a,{href:"#recap-the-canonical-view-volume",children:"Recap: The Canonical View Volume"})}),`
`,e.exports.jsxs(s.p,{children:["Here's ",e.exports.jsx(s.strong,{children:"the canonical view volume"}),". It is ",e.exports.jsx(s.em,{children:"always"})," a box of side-length 2, centered on the origin."]}),`
`,e.exports.jsx(t,{images:[{src:"/docs/viewports/canonical-view-volume.png",alt:"TODO"}],figNumber:1,targetWidth:"35%",figCaption:"The canonical view volume."}),`
`,e.exports.jsx(s.h2,{id:"drawing",children:e.exports.jsx(s.a,{href:"#drawing",children:"Drawing"})}),`
`,e.exports.jsx(s.p,{children:"Suppose we've prepared something to draw (see labs 8-10 for details), and we'd like to draw it to our texture. Here, we have placed a green sphere in our canonical view volume:"}),`
`,e.exports.jsx(t,{images:[{src:"/docs/viewports/green-sphere.png",alt:"TODO"}],figNumber:4,targetWidth:"35%",figCaption:"A green sphere, in the canonical view volume."}),`
`,e.exports.jsxs(s.p,{children:["As we already know, we can call something like ",e.exports.jsx(s.code,{children:"glDrawArrays()"})," (",e.exports.jsx(s.a,{href:"https://registry.khronos.org/OpenGL-Refpages/gl4/html/glDrawArrays.xhtml",target:"_blank",rel:"noopener noreferrer",children:"docs"}),") to render this sphere to the image in the Qt window that appears when we run our code."]}),`
`,e.exports.jsxs(s.p,{children:["Since that image is nothing more than a texture (in the default FBO), we can generalize the above statement: we use ",e.exports.jsx(s.code,{children:"glDrawArrays()"})," to render stuff in our ",e.exports.jsx(s.strong,{children:"canonical view volume"})," to a ",e.exports.jsx(s.strong,{children:"texture"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"setting-the-viewport",children:e.exports.jsx(s.a,{href:"#setting-the-viewport",children:"Setting The Viewport"})}),`
`,e.exports.jsxs(s.p,{children:["But how do we know ",e.exports.jsx(s.em,{children:"where"})," (on our texture) we should draw our sphere? After all, our canonical view volume goes from ",e.exports.jsx(s.code,{children:"-1"})," to ",e.exports.jsx(s.code,{children:"1"}),", not ",e.exports.jsx(s.code,{children:"0"})," to ",e.exports.jsx(s.code,{children:"width"})," or anything like that."]}),`
`,e.exports.jsxs(s.p,{children:["This is where ",e.exports.jsx(s.code,{children:"glViewport()"})," (",e.exports.jsx(s.a,{href:"https://registry.khronos.org/OpenGL-Refpages/gl4/html/glViewport.xhtml",target:"_blank",rel:"noopener noreferrer",children:"docs"}),") comes in. It allows us to define a mapping like so:"]}),`
`,e.exports.jsx(t,{images:[{src:"/docs/viewports/viewport-mapping.png",alt:"TODO"}],figNumber:5,targetWidth:"100%",figCaption:"The viewport maps a 2D coordinate range (in the xy plane of the canonical view volume's space) to another 2D coordinate range (this time, in the texture's coordinate space)."}),`
`,e.exports.jsxs(s.p,{children:["Typically, we'd specify our ",e.exports.jsx(s.code,{children:"glViewport()"})," arguments in such a way that the output 2D coordinate range matches our texture perfectly."]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," x = ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," y = ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` w = textureWidth;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` h = textureHeight;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glViewport"}),`(x, y, w, h);
`]})]})}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["In fact, Qt does this behind the scenes for you just before each ",e.exports.jsx(s.code,{children:"paintGL()"})," call, using the default FBO's texture's dimensions. That's why we didn't have to do this before lab 11."]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"But nothing's stopping you from setting this any way you like:"}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// Draw within a 400x400 square, with its bottom-left corner at (10,10)"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glViewport"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"10"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"10"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"400"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"400"}),`);
`]})]})}),`
`,e.exports.jsx(s.h2,{id:"getting-the-viewport",children:e.exports.jsx(s.a,{href:"#getting-the-viewport",children:"Getting The Viewport"})}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"glViewport()"})," lets us ",e.exports.jsx(s.em,{children:"set"})," the output viewport using ",e.exports.jsx(s.strong,{children:"4 integer values"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["We can ",e.exports.jsx(s.em,{children:"get"})," the currently-set viewport values by calling:"]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," vp[",e.exports.jsx(s.span,{className:"pl-c1",children:"4"}),"] = {-",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),", -",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),", -",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),", -",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),"}; ",e.exports.jsx(s.span,{className:"pl-c",children:"// Dummy values"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glGet"}),`(GL_VIEWPORT, vp);
`]}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsxs(s.span,{className:"code-line",children:["std::cout << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),"viewport: ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["          << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),"x = ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]})," << vp[",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),"] << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),", ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["          << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),"y = ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]})," << vp[",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),"] << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),", ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["          << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),"w = ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]})," << vp[",e.exports.jsx(s.span,{className:"pl-c1",children:"2"}),"] << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),", ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["          << ",e.exports.jsxs(s.span,{className:"pl-s",children:[e.exports.jsx(s.span,{className:"pl-pds",children:'"'}),"h = ",e.exports.jsx(s.span,{className:"pl-pds",children:'"'})]})," << vp[",e.exports.jsx(s.span,{className:"pl-c1",children:"3"}),`] << std::endl;
`]})]})}),`
`,e.exports.jsxs(s.div,{className:"task-callout callout",children:[e.exports.jsxs(s.p,{children:["Suppose we've created a texture with width ",e.exports.jsx(s.code,{children:"600"})," and height ",e.exports.jsx(s.code,{children:"400"}),". We then set our clear color to blue and cleared that texture."]}),e.exports.jsx(s.p,{children:"Right before we draw our green sphere to that texture, we call:"}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsx(s.code,{className:"language-cpp code-highlight",children:e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glViewport"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"300"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"200"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"600"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"400"}),`);
`]})})}),e.exports.jsx(s.p,{children:"What would our texture look like after the draw call finishes?"}),e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{align:"center"}),e.exports.jsx(s.th,{align:"center",children:"a"}),e.exports.jsx(s.th,{align:"center",children:"b"}),e.exports.jsx(s.th,{align:"center",children:"c"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"center",children:"1"}),e.exports.jsx(s.td,{align:"center",children:e.exports.jsx(s.img,{src:"viewports/a1.png",alt:"a1"})}),e.exports.jsx(s.td,{align:"center",children:e.exports.jsx(s.img,{src:"viewports/b1.png",alt:"b1"})}),e.exports.jsx(s.td,{align:"center",children:e.exports.jsx(s.img,{src:"viewports/c1.png",alt:"c1"})})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"center",children:"2"}),e.exports.jsx(s.td,{align:"center",children:e.exports.jsx(s.img,{src:"viewports/a2.png",alt:"a2"})}),e.exports.jsx(s.td,{align:"center",children:e.exports.jsx(s.img,{src:"viewports/b2.png",alt:"b2"})}),e.exports.jsx(s.td,{align:"center",children:e.exports.jsx(s.img,{src:"viewports/c2.png",alt:"c2"})})]})]})]})}),e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Click here for the solution."}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Answer"}),":"]}),e.exports.jsx(s.p,{children:"b1."}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Explanation"}),":"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"glClear()"})," will have cleared the ",e.exports.jsx(s.em,{children:"whole"})," texture with blue, not just the viewport area."]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"x"})," and ",e.exports.jsx(s.code,{children:"y"})," define the coordinates of the bottom-left corner of the viewport, so the image should start at ",e.exports.jsx(s.code,{children:"(300, 200)"}),"."]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"w"})," and ",e.exports.jsx(s.code,{children:"h"})," define the width and height respectively, not the top-right coordinates."]})]})]}),`
`,e.exports.jsx(s.h2,{id:"putting-it-all-together",children:e.exports.jsx(s.a,{href:"#putting-it-all-together",children:"Putting It All Together"})}),`
`,e.exports.jsx(s.p,{children:"If you've made it this far, well, that's about all we've got for you."}),`
`,e.exports.jsxs(s.p,{children:["Assuming you understand ",e.exports.jsx(s.strong,{children:"texture-mapping"}),' and the concept of creating a rectangle which "fills up" the canonical view volume (i.e. a ',e.exports.jsx(s.strong,{children:"full-screen quad"}),"), you ",e.exports.jsx(s.em,{children:"might"})," already be sufficiently equipped to understand the diagram below, which depicts what's happening in lab 11:"]}),`
`,e.exports.jsx(t,{images:[{src:"/docs/viewports/full-diagram.png",alt:"TODO"}],figNumber:6,targetWidth:"100%",children:e.exports.jsxs(s.p,{children:["How most post-processing is done in real-time graphics: render ",e.exports.jsx(s.em,{children:"to"})," a texture, then render ",e.exports.jsx(s.em,{children:"from"})," that texture, by texture-mapping it onto a full-screen quad. On that second pass, you can use a ",e.exports.jsx(s.strong,{children:"fragment shader"})," to apply post-processing effects."]})}),`
`,e.exports.jsx(s.p,{children:"If you still have any questions, that's what Ed is for. Please ask your questions there, so that everyone else can benefit from the discussion!"}),`
`,e.exports.jsx(s.p,{children:"We'll move some of the more frequently-asked questions here:"}),`
`,e.exports.jsx(s.h2,{id:"faq",children:e.exports.jsx(s.a,{href:"#faq",children:"FAQ"})}),`
`,e.exports.jsxs("details",{children:[e.exports.jsxs("summary",{children:["Why must I multiply by ",e.exports.jsx(s.code,{children:"devicePixelRatio()"}),"?"]}),e.exports.jsxs(s.p,{children:["Thanks to the likes of ",e.exports.jsx(s.strong,{children:"high-resolution displays"})," (like Apple's Retina screens), there's a difference between ",e.exports.jsx(s.em,{children:"logical"})," pixels and ",e.exports.jsx(s.em,{children:"physical"})," pixels."]}),e.exports.jsxs(s.div,{className:"success-callout callout",children:[e.exports.jsx(s.p,{children:"Logical pixels are roughly the same visual size across devices. Physical pixels are the size of the actual hardware pixels on the device."}),e.exports.jsx(s.p,{children:"The number of physical pixels per logical pixel is described by the device's pixel ratio."})]}),e.exports.jsxs(s.p,{children:["Unfortunately for us, ",e.exports.jsx(s.code,{children:"size()"})," returns dimensions in terms of ",e.exports.jsx(s.em,{children:"logical"})," pixels, but textures (such as the default FBO's color buffer, aka your output image) are defined in terms of ",e.exports.jsx(s.em,{children:"physical"})," pixels. Thus, we must scale our dimensions as such:"]}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," physWidth  = size().width() * ",e.exports.jsx(s.span,{className:"pl-en",children:"devicePixelRatio"}),`();
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," physHeight = size().width() * ",e.exports.jsx(s.span,{className:"pl-en",children:"devicePixelRatio"}),`();
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glViewport"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`, physWidth, physHeight);
`]})]})})]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What's going on with Windows computers and scaling?"}),e.exports.jsxs(s.p,{children:["On Windows operating systems, it's possible to scale the display by some amount (e.g. ",e.exports.jsx(s.code,{children:"150%"}),") via user preferences."]}),e.exports.jsxs(s.p,{children:["Unfortunately for us (again), this causes the default FBO's color buffer's dimensions to stray even further away from the dimensions returned by ",e.exports.jsx(s.code,{children:"size()"}),". That texture's dimensions are now additionally scaled by the user's display scaling factor, e.g. ",e.exports.jsx(s.code,{children:"1.5"})," times."]}),e.exports.jsx(s.p,{children:"A na\xEFve solution would be to additionally multiply by this factor:"}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// Assuming the user's display is scaled to 150%"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," physWidth  = size().width() * ",e.exports.jsx(s.span,{className:"pl-en",children:"devicePixelRatio"}),`() * 1.5;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," physHeight = size().width() * ",e.exports.jsx(s.span,{className:"pl-en",children:"devicePixelRatio"}),`() * 1.5;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"glViewport"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`, physWidth, physHeight);
`]})]})}),e.exports.jsx(s.p,{children:"However, this isn't a very portable solution. This code will produce undesirable output on a Windows machine with a different scaling factor, or on an Mac."}),e.exports.jsxs(s.div,{className:"success-callout callout",children:[e.exports.jsxs(s.p,{children:["A better approach would be to add this line to the beginning of ",e.exports.jsx(s.code,{children:"main()"}),":"]}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsx(s.code,{className:"language-cpp code-highlight",children:e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"QGuiApplication::setHighDpiScaleFactorRoundingPolicy"}),`(Qt::HighDpiScaleFactorRoundingPolicy::Floor);
`]})})}),e.exports.jsx(s.p,{children:"But we're not confident in our ability to explain why this works just yet."})]})]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsxs("summary",{children:["Wait, Qt sets the viewport between ",e.exports.jsx(s.code,{children:"paintGL()"})," calls? Why do we need to do it, then?"]}),e.exports.jsx(t,{images:[{src:"/docs/viewports/you-dont.png",alt:"TODO"}],figNumber:7,targetWidth:"50%",figCaption:"Thats the neat thing. You don't!"}),e.exports.jsx(s.p,{children:"It was a purely pedagogical exercise!"})]}),`
`,e.exports.jsx(l,{})]})]})}function p(r={}){const{wrapper:s}=r.components||{};return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(n,r)})):n(r)}export{p as default,c as documentProps};
