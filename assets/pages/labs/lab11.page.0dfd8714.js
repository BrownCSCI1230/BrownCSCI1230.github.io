import{j as e}from"../../chunk-903e764a.js";import{I as r}from"../../chunk-30f40460.js";import{M as n}from"../../chunk-b2e2a089.js";const c={title:"Lab 11"};function o(s){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",h2:"h2",p:"p",strong:"strong",em:"em",ul:"ul",h3:"h3",h4:"h4",code:"code",div:"div",pre:"pre",span:"span",blockquote:"blockquote"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#textures-and-fbos-lab",children:"Textures and FBOs Lab"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#intro",children:"Intro"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#textures",children:"Textures"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-is-a-texture",children:"What is a Texture?"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#creating-a-texture-on-the-cpu",children:"Creating a Texture on the CPU"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#qimages",children:"QImages"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#opengl-textures",children:"OpenGL Textures"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#passing-a-texture-to-the-gpu-uniforms-2-electric-boogaloo",children:"Passing A Texture To The GPU: Uniforms 2 Electric Boogaloo"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#using-a-texture-in-the-gpu-fullscreen-quads-and-uv-coordinates",children:"Using a Texture in the GPU: Fullscreen Quads and UV Coordinates"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#fullscreen-quads",children:"Fullscreen Quads"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#uv-coordinates",children:"UV Coordinates"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#sampling-a-texture-in-a-shader",children:"Sampling a Texture in a Shader"})})]})]})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#framebuffer-objects",children:"Framebuffer Objects"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-is-an-fbo",children:"What is an FBO?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-does-an-fbo-contain",children:"What does an FBO contain?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-does-an-fbos-attached-buffer-contain",children:"What does an FBO's attached buffer contain?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#making-our-own-fbo",children:"Making our own FBO"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#drawing-with-our-fbo",children:"Drawing with our FBO"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#where-did-it-go",children:"Where did it go?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#back-to-basics",children:"Back to Basics"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#glviewport",children:"glViewport"})})]})]})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"textures-and-fbos-lab",children:e.exports.jsx(t.a,{href:"#textures-and-fbos-lab",children:"Textures and FBOs Lab"})}),`
`,e.exports.jsx(t.h2,{id:"intro",children:e.exports.jsx(t.a,{href:"#intro",children:"Intro"})}),`
`,e.exports.jsxs(t.p,{children:[`In lab 9, you learned how OpenGL stores vertex data in two types of objects called
vertex buffer objects and vertex array objects. You learned about how to work with
scene data in real time. But what about working with 2-dimensional data? In previous
projects you worked with a canvas object that displayed your results onto the screen.
But how does this work in OpenGL? So far, we have seen the real time pipeline up to
the final step in this diagram, the `,e.exports.jsx(t.strong,{children:"Framebuffer"}),"."]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/pipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"90%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(t.p,{children:`In an oversimplification, the framebuffer is the 2D canvas that opengl works with when
using your shader program you wrote in the last lab. So far, you haven\u2019t had to worry
about this since you have been working with the default framebuffer that OpenGL
provides which happens to be your application window.`}),`
`,e.exports.jsxs(t.p,{children:["But what if you ",e.exports.jsx(t.em,{children:"don\u2019t"}),` want to draw on the screen? What if you want to
draw onto a texture and save it for later? This is where making your own
framebuffer objects comes in!`]}),`
`,e.exports.jsx(t.p,{children:"By the end of this lab, you will be able to:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Understand how textures work in OpenGL"}),`
`,e.exports.jsx(t.li,{children:"Understand framebuffers and when to use them"}),`
`,e.exports.jsx(t.li,{children:"Draw your framebuffers onto your screen"}),`
`,e.exports.jsx(t.li,{children:"Apply cool post-processing effects in real-time!"}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"textures",children:e.exports.jsx(t.a,{href:"#textures",children:"Textures"})}),`
`,e.exports.jsx(t.p,{children:`Before we dive into the 2D data we draw to, let\u2019s think about a common form of
2D data we use in our own scenes\u2026Textures!`}),`
`,e.exports.jsx(t.h3,{id:"what-is-a-texture",children:e.exports.jsx(t.a,{href:"#what-is-a-texture",children:"What is a Texture?"})}),`
`,e.exports.jsx(t.p,{children:`A texture is a 2D image (although any dimensional textures can exist such as volume noise)
which has the ability to be read from and written to. The object can flow between the CPU
and GPU the same as vertex data to be read in a shader.`}),`
`,e.exports.jsx(t.h3,{id:"creating-a-texture-on-the-cpu",children:e.exports.jsx(t.a,{href:"#creating-a-texture-on-the-cpu",children:"Creating a Texture on the CPU"})}),`
`,e.exports.jsx(t.h4,{id:"qimages",children:e.exports.jsx(t.a,{href:"#qimages",children:"QImages"})}),`
`,e.exports.jsxs(t.p,{children:["In Qt creator, the most common form of an image is called a ",e.exports.jsx(t.code,{children:"QImage"}),`. Let\u2019s create one
of our own!`]}),`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsxs(t.a,{href:"https://doc.qt.io/qt-6/qimage.html#QImage-8",children:[e.exports.jsx(t.code,{children:"QImage"})," constructor"]}),` takes in two parameters,
a file path formatted as a `,e.exports.jsx(t.code,{children:"QString"}),", and a format specification which is optional."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", store a ",e.exports.jsx(t.code,{children:"QImage"})," in the ",e.exports.jsx(t.code,{children:"m_image"}),` member variable using the relative file path of the
`,e.exports.jsx(t.strong,{children:"kitten.png"})," image in our project"]})}),`
`,e.exports.jsxs(t.p,{children:["Now let\u2019s format our ",e.exports.jsx(t.code,{children:"QImage"}),` to fit OpenGL standards. Unlike OpenGL which has its
UV coordinate (which you will learn about soon) origin at the `,e.exports.jsx(t.em,{children:"bottom left"}),", a ",e.exports.jsx(t.code,{children:"QImage"}),`
stores it in the `,e.exports.jsx(t.em,{children:"top left"}),`. Therefore one of our tasks is to mirror the image vertically.
The second is we need to ensure that we have 4, 8-bit color channels for R, G, B, and A.`]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["To do this let\u2019s overwrite our ",e.exports.jsx(t.code,{children:"m_image"})," to be:"]}),e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"code-highlight",children:e.exports.jsx(t.span,{className:"code-line",children:`	m_image = m_image.convertToFormat(QImage::Format_RGBA8888).mirrored();
`})})})]}),`
`,e.exports.jsx(t.h4,{id:"opengl-textures",children:e.exports.jsx(t.a,{href:"#opengl-textures",children:"OpenGL Textures"})}),`
`,e.exports.jsx(t.p,{children:`Great, now we have our Qt formatted image, let\u2019s put it in an OpenGL texture.
To start, we need to generate a texture using the following function:`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenTextures.xhtml",children:e.exports.jsx(t.strong,{children:"void glGenTextures(GLsizei n, GLuint * textures);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"})," :"]})," This indicates the number of textures we wish to generate."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"textures"})," :"]}),` This is the pointer this function will fill in with an id for the
generated texture. Multiple buffers can be filled in using a pointer to the first
element of an array of sufficient size or some pointer followed by sufficient allocated
space.`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", generate a texture and store it\u2019s id in ",e.exports.jsx(t.code,{children:"m_test_texture"}),"."]})}),`
`,e.exports.jsx(t.p,{children:`Before we work with the texture, we need to bind it to the state machine using:
void glBindTexture(GLenum target, GLuint texture)`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindTexture.xhtml",children:e.exports.jsx(t.strong,{children:"void glBindTexture(GLenum target, GLuint texture);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of texture we are binding. Since we are using a 2D
texture, our target will be `,e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"texture"})," :"]})," This is the id of the texture we just generated."]})]}),`
`,e.exports.jsxs(t.p,{children:["Now we have an empty texture sitting in the ",e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),` target in our state machine.
Let\u2019s fill it with our QImage using:`]}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glTexImage2D.xhtml",children:e.exports.jsx(t.strong,{children:`glTexImage2D(GLenum target, GLint level, GLint internalformat, GLsizei width,
GLsizei height, GLint border, GLenum format, GLenum type, const void * data);`})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of texture we are binding. For now, use
`,e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"level"})," :"]}),` This correlates with the level-of-detail of the image. Since we do not
wish to produce a mipmap at the moment, use 0 for this parameter.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"internalformat"})," :"]}),` This indicates the color format that will be contained within
the `,e.exports.jsx(t.strong,{children:"OpenGL Texture object"}),`. This is different than the format parameter seen later!
For now use `,e.exports.jsx(t.code,{children:"GL_RGBA"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"width"})," :"]})," This is the width of the desired OpenGL texture."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"height"})," :"]})," This is the height of the desired OpenGL texture."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"border"})," :"]}),` Indicates whether or not the image should have a border. For our purposes
we will use the value of 0 to indicate no border.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"format"})," :"]}),` This indicates the color format of the input pixel data. In our case, the
sample image uses `,e.exports.jsx(t.code,{children:"GL_RGBA"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"type"})," :"]})," This indicates the data type of the input pixel data. We will use ",e.exports.jsx(t.code,{children:"GL_UNSIGNED_BYTE"}),`
since it assigns 8 bits per component of R, G, B, and A.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"data"})," :"]})," This is the pointer to our pixel data. We can get this from our ",e.exports.jsx(t.code,{children:"QImage"}),`
by using the associated `,e.exports.jsx(t.code,{children:"bits()"})," function."]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After binding our texture in ",e.exports.jsx(t.code,{children:"InitializeGL"}),", load our ",e.exports.jsx(t.code,{children:"m_image"})," variable into ",e.exports.jsx(t.code,{children:"m_kitten_texture"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"Before we use the texture, we need to specify some behavior it should take on in particular if the image needs to be scaled up or down. Consider the situation where our fragment lies between two pixels in our texture. Which color should it output? These are parameters we can control and in our case we can ask for OpenGL to linearly interpolate between the nearby pixels."}),`
`,e.exports.jsx(t.p,{children:"How do we set these parameters? The function to do so is:"}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glTexParameter.xhtml",children:e.exports.jsx(t.strong,{children:"void glTexParameteri(GLenum target, GLenum pname, GLint param);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the target we bound our texture to. For our purposes, use
`,e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"pname"})," :"]})," This is an enumerable for the parameter we wish to set."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"param"})," :"]}),` This is the value we wish to set for our chosen parameter. See the documentation
for a list of parameters and their possible values.`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After adding our image data in ",e.exports.jsx(t.code,{children:"IntializeGL"}),`, use this function to set the minify
and magnify filters to use linear interpolation.`]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After setting our parameters in ",e.exports.jsx(t.code,{children:"InitializeGL"}),`, unbind our texture from the
GL_TEXTURE_2D target.`]})}),`
`,e.exports.jsx(t.h3,{id:"passing-a-texture-to-the-gpu-uniforms-2-electric-boogaloo",children:e.exports.jsx(t.a,{href:"#passing-a-texture-to-the-gpu-uniforms-2-electric-boogaloo",children:"Passing A Texture To The GPU: Uniforms 2 Electric Boogaloo"})}),`
`,e.exports.jsx(t.p,{children:`Now, how do we work with the texture we just created? We can create a uniform variable
for it just how we did in the shaders lab for different data types!`}),`
`,e.exports.jsx(t.p,{children:`Let\u2019s begin by creating a uniform variable in our shader that will hold our texture.
The data type of a texture is known as sampler2D.`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Add a ",e.exports.jsx(t.code,{children:"sampler2D"})," uniform variable to the ",e.exports.jsx(t.code,{children:"fbo.frag"})," shader file."]})}),`
`,e.exports.jsx(t.p,{children:`Now how do we set this variable? How textures work in OpenGL is using a concept called
texture slots.`}),`
`,e.exports.jsxs(t.p,{children:["So far, we have told you that you can just bind a texture using the ",e.exports.jsx(t.code,{children:"glBindTexture"}),` call.
This is actually only `,e.exports.jsx(t.em,{children:"half"}),` correct. There is an additional piece of state information
that loads textures onto the GPU. This is the `,e.exports.jsx(t.strong,{children:"texture slot"}),`. Most devices support at
least 32 different texture slots and by default, slot 0 is bound. So when we called
`,e.exports.jsx(t.code,{children:"glBindTexture"}),`, we were actually binding our texture object to slot 0. The reason we
have multiple slots is so that we can have multiple textures sampled by a shader at the
same time.`]}),`
`,e.exports.jsx(t.p,{children:`To set our uniform, we first need to load our texture into a texture slot, and then
indicate which slot index should be sampled in our shader.`}),`
`,e.exports.jsx(t.p,{children:"To load a texture into a texture slot, the steps are:"}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"Set the current active texture slot"}),`
`,e.exports.jsx(t.li,{children:"Bind the texture"}),`
`]}),`
`,e.exports.jsx(t.p,{children:"The first call is:"}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glActiveTexture.xhtml",children:e.exports.jsx(t.strong,{children:"void glActiveTexture(GLenum texture);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"texture"})," :"]}),` This is an enumerable that represents the texture slot. They are in the
format of `,e.exports.jsx(t.code,{children:"GL_TEXTUREi"}),", where i is an integer representing the slot number."]})]}),`
`,e.exports.jsx(t.p,{children:"The second call is the same binding call we have seen before!"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Before we previously bound our texture in ",e.exports.jsx(t.code,{children:"InitializeGL"}),`, manually set the active texture
slot to slot 0.`]})}),`
`,e.exports.jsx(t.p,{children:`To set the uniform value, it is represented by an int that correlates to the texture
slot we want to use and sample from.`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsx(t.p,{children:`In 'PaintGL', set the uniform value for your sampler2D you created in your fragment shader
to be the same texture slot number we bound our texture to.`})}),`
`,e.exports.jsx(t.h3,{id:"using-a-texture-in-the-gpu-fullscreen-quads-and-uv-coordinates",children:e.exports.jsx(t.a,{href:"#using-a-texture-in-the-gpu-fullscreen-quads-and-uv-coordinates",children:"Using a Texture in the GPU: Fullscreen Quads and UV Coordinates"})}),`
`,e.exports.jsx(t.p,{children:`As we have set our uniform variable for our texture, we are going to be using them
within our shader program! However, we currently have no triangles to draw our textures
on.`}),`
`,e.exports.jsx(t.h4,{id:"fullscreen-quads",children:e.exports.jsx(t.a,{href:"#fullscreen-quads",children:"Fullscreen Quads"})}),`
`,e.exports.jsx(t.p,{children:"If you recall the OpenGL coordinate system, we can see the limits of the screen as follows:"}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab9/openglcoordinates.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"OpenGL Coordinate System"}),`
`,e.exports.jsxs(t.p,{children:["What we can do with this is use it to construct what is known as a ",e.exports.jsx(t.strong,{children:"fullscreen quad"}),`.
Think of a fullscreen quad as a projector screen that we drape down in our scene that
happense to be `,e.exports.jsx(t.em,{children:"just"}),` the right size to cover the entire screen so that we can't see
behind it, but also can see it in its entirety!`]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", notice the fullscreen quad VBO data ",e.exports.jsx(t.code,{children:"m_fullscreen_data"}),`. Edit it
in order to be the correct size of the screen.`]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Mess around with ",e.exports.jsx(t.code,{children:"m_fullscreen_data"}),` data! What happens when you change the z coordinate?
What happens when you only change a single vertex?`]})}),`
`,e.exports.jsx(t.h4,{id:"uv-coordinates",children:e.exports.jsx(t.a,{href:"#uv-coordinates",children:"UV Coordinates"})}),`
`,e.exports.jsx(t.p,{children:`Great! Now we have the shape which we'll plaster our texture, but how do we (texture-)map
the image to the surface? In steps a new vertex attribute: UV coordinates!`}),`
`,e.exports.jsx(t.p,{children:`The UV coordinate attribute tells us at what point in the sampled texture should each
vertex correspond to. The lower left corner is set to be (0, 0) and the upper right corner
to be (1, 1) as in the following image:`}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/UVCoordinates.png",alt:"TODO"}],figNumber:1,targetWidth:"95%",figCaption:"UV Coordinates in OpenGL"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Pick 6 corresponding UV coordinates to pair with each vertex position in ",e.exports.jsx(t.code,{children:"m_fullscreen_data"}),`.
Make sure the bottom left corner of the fullscreen quad correlates with the bottom left corner
of the texture and the upper right corner of the fullscreen quad correlates with the
upper right corner of the texture!`]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),`, update the VAO attribute information to include the newly added UV
coordinates. Make sure to update the position attribute as well!`]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Add the UV attribute as a layout variable in ",e.exports.jsx(t.code,{children:"fbo.vert"}),"."]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Create an in/out variable pair to pass the UV coordinates from the ",e.exports.jsx(t.code,{children:"fbo.vert"}),` to
`,e.exports.jsx(t.code,{children:"fbo.frag"}),"."]})}),`
`,e.exports.jsx(t.h4,{id:"sampling-a-texture-in-a-shader",children:e.exports.jsx(t.a,{href:"#sampling-a-texture-in-a-shader",children:"Sampling a Texture in a Shader"})}),`
`,e.exports.jsx(t.p,{children:`Now we want to set our fragment color to be our texture at our pre-selected UV coordinates.
In GLSL, the function to sample a texture uniform which is of type sampler2D is:`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/texture.xhtml",children:e.exports.jsx(t.strong,{children:"gvec4 texture(gsampler2D sampler, vec2 P);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"sampler"})," :"]})," This is the name of the sampler2D we wish to sample from."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"P"})," :"]})," This is the UV coordinate we wish to sample the texture at."]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"fbo.frag"}),`, set the fragment color based on the texture color at the fragment's
UV coordinate.`]})}),`
`,e.exports.jsx(t.h2,{id:"framebuffer-objects",children:e.exports.jsx(t.a,{href:"#framebuffer-objects",children:"Framebuffer Objects"})}),`
`,e.exports.jsx(t.h3,{id:"what-is-an-fbo",children:e.exports.jsx(t.a,{href:"#what-is-an-fbo",children:"What is an FBO?"})}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:"Framebuffer: A portion of memory containing bitmaps that can drive displays."}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Fancy language aside, lets breakdown the word itself into components:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:'Frame: Canvas, screen space, originally used for the term of "next/current frame"'}),`
`,e.exports.jsx(t.li,{children:"Buffer: Data storage"}),`
`,e.exports.jsx(t.li,{children:"Object: Something, in this case a container that holds other information"}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"what-does-an-fbo-contain",children:e.exports.jsx(t.a,{href:"#what-does-an-fbo-contain",children:"What does an FBO contain?"})}),`
`,e.exports.jsxs(t.p,{children:["Framebuffers contain things in OpenGL known as *",e.exports.jsx(t.em,{children:"attachments"}),`. These include color buffers,
depth buffers, and stencil buffers which you will learn more about shortly. Each buffer
is represented by a sub-object being either:`]}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"A Texture"}),`
`,e.exports.jsx(t.li,{children:"A Renderbuffer"}),`
`]}),`
`,e.exports.jsxs(t.p,{children:[`So far you have already been working with textures. As you may recall, textures are usually
2D objects which have both read `,e.exports.jsx(t.strong,{children:"and"})," write capabilities."]}),`
`,e.exports.jsxs(t.p,{children:[`This is where renderbuffers differ! A renderbuffer can serve almost the same purpose of a
texture, except it only has capability to be `,e.exports.jsx(t.strong,{children:"written to"}),`. You can remember this
functionality by thinking of the name. `,e.exports.jsx(t.em,{children:"Render"}),`buffer refers to an object that can be
`,e.exports.jsx(t.em,{children:"rendered"})," or written to."]}),`
`,e.exports.jsx(t.h3,{id:"what-does-an-fbos-attached-buffer-contain",children:e.exports.jsx(t.a,{href:"#what-does-an-fbos-attached-buffer-contain",children:"What does an FBO's attached buffer contain?"})}),`
`,e.exports.jsx(t.p,{children:`Unknowingly, we have actually used framebuffers before. The default framebuffer happens
to be: the application window!`}),`
`,e.exports.jsxs(t.p,{children:[`Alongside this, we have also seen one of the attachemnts before. So far in the fragment
shader, we have explicitly written to a variable `,e.exports.jsx(t.code,{children:"fragColor"}),` which sets pixels in
the `,e.exports.jsx(t.strong,{children:"color buffer"})," to whatever we choose!"]}),`
`,e.exports.jsx(t.p,{children:"Ones we have not directly seen are depth and stencil buffers."}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Depth buffers"}),` contain information about how far away a specific pixel is from the camera.
We can write to the depth buffer by calling `,e.exports.jsx(t.code,{children:"glEnable(GL_DEPTH_TEST)"}),`. This allows
OpenGL to store depth information in the default framebuffer's depth buffer such that if
we draw two triangles on top of one another, OpenGL can tell which should display on top!`]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Stencil buffers"}),` contain information that is generated by special masks that enables certain
pixels to be drawn or not. This is not important at the moment, but if you wish to draw
something like outlines or recursive portals, this comes in handy!`]}),`
`,e.exports.jsx(t.h3,{id:"making-our-own-fbo",children:e.exports.jsx(t.a,{href:"#making-our-own-fbo",children:"Making our own FBO"})}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", generate an empty texture, ",e.exports.jsx(t.code,{children:"m_fbo_texture"})," and bind it to texture slot"]}),e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:[`This will be used to store our color buffer! To generate an empty texture, when
calling `,e.exports.jsx(t.code,{children:"glTexImage2D"}),", pass in a nullptr for the data."]}),`
`]})]}),`
`,e.exports.jsx(t.p,{children:`In order to add a color attachment to our framebuffer, we first need to make one! The function
to do this is:`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenFramebuffers.xhtml",children:e.exports.jsx(t.strong,{children:"void glGenFramebuffers(GLsizei n, GLuint *framebuffers);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"})," :"]})," This indicates the number of framebuffer objects to create."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"framebuffers"})," :"]}),` This is the pointer this function will fill in with an id for the
generated FBO. This way you can refer to it later by the same stored id.
Multiple FBOs can be filled in using a pointer to the first element of an array of
sufficient size or some pointer followed by sufficient allocated space.`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", generate a framebuffer and store it in ",e.exports.jsx(t.code,{children:"m_fbo"}),"."]})}),`
`,e.exports.jsxs(t.p,{children:["In order to actually ",e.exports.jsx(t.em,{children:"alter"}),` our framebuffer, we need to bind it to the state machine.
The function to do this is:`]}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindFramebuffer.xhtml",children:e.exports.jsx(t.strong,{children:"void glBindFramebuffer(GLenum target, GLuint framebuffer);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of framebuffer we wish to bind. For our purposes,
use `,e.exports.jsx(t.code,{children:"GL_FRAMEBUFFER"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"framebuffer"})," :"]})," This is id of the FBO we wish to bind."]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After generating our FBO in ",e.exports.jsx(t.code,{children:"InitializeGL"}),", bind ",e.exports.jsx(t.code,{children:"m_fbo"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"Now we can attach our color buffer! The function to do this is:"}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glFramebufferTexture2D.xhtml",children:e.exports.jsx(t.strong,{children:"void glFramebufferTexture2D(GLenum target, GLenum attachment, GLenum textarget, GLuint texture, GLint level);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of framebuffer we are working with. Just like in
`,e.exports.jsx(t.code,{children:"glBindFramebuffer"}),", use ",e.exports.jsx(t.code,{children:"GL_FRAMEBUFFER"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"attachment"})," :"]}),` This is the specific attachment we wish to add, since we are attaching
a color buffer, use `,e.exports.jsx(t.code,{children:"GL_COLOR_ATTACHMENT"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"textarget"})," :"]}),` This indicates the type of texture we are using. In our case, use
`,e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"texture"})," :"]}),` Here we place the texture object we wish to use. In our case this is
`,e.exports.jsx(t.code,{children:"m_fbo_texture"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"level"})," :"]}),` This specifies which mipmap or level of detail texture we want to use.
We want full detail so use 0.`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After binding our FBO in ",e.exports.jsx(t.code,{children:"InitializeGL"}),", add a color attachment."]})}),`
`,e.exports.jsxs(t.p,{children:["Great! Now we are going to use a ",e.exports.jsx(t.strong,{children:"renderbuffer"}),` to store the depth and stencil attachments.
When we look at how things are drawn with FBOs soon, you will get a better understanding!`]}),`
`,e.exports.jsx(t.p,{children:"To generate a renderbuffer, the function is:"}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenRenderbuffers.xhtml",children:e.exports.jsx(t.strong,{children:"void glGenRenderbuffers(GLsizei n, GLuint *renderbuffers);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"})," :"]})," This indicates the number of renderbuffer objects to create."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffers"})," :"]}),` This is the pointer this function will fill in with an id for the
generated RBO. This way you can refer to it later by the same stored id.
Multiple RBOs can be filled in using a pointer to the first element of an array of
sufficient size or some pointer followed by sufficient allocated space.`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", generate a renderbuffer and store it in ",e.exports.jsx(t.code,{children:"m_rbo"}),"."]})}),`
`,e.exports.jsx(t.p,{children:`Next, just like with a texture, we need to bind it to work on it. The only difference being
that there are no renderbuffer slots unlike with textures. This is because renderbuffers
can only be written to and not sampled from in a shader, so there is no reason to have multiple
slots for shaders to use as samplers!`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindRenderbuffer.xhtml",children:e.exports.jsx(t.strong,{children:"void glBindRenderbuffer(GLenum target, GLuint renderbuffer);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of renderbuffer we wish to bind. For our purposes,
use `,e.exports.jsx(t.code,{children:"GL_RENDERBUFFER"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffer"})," :"]})," This is id of the RBO we wish to bind."]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", bind the renderbuffer we just generated."]})}),`
`,e.exports.jsx(t.p,{children:`Next, just as a texture needed to have parameters such as width, height, and pixel data set
by glTexImage2D, renderbuffers require a similar call. The only difference is we cannot pass
in any pixel data since renderbuffers are read only. This makes the call a bit shorter:`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glRenderbufferStorage.xhtml",children:e.exports.jsx(t.strong,{children:"void glRenderbufferStorage(GLenum target, GLenum internalformat, GLsizei width, GLsizei height);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of framebuffer we wish to work with. For our purposes,
use `,e.exports.jsx(t.code,{children:"GL_RENDERBUFFER"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"internalformat"})," :"]}),` This indicates the pixel data format that will be contained within
the renderbuffer. We wiil be using `,e.exports.jsx(t.code,{children:"GL_DEPTH24_STENCIL8"}),` which indicates 24 bits will be
used for the depth component and 8 for the stencil component.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"width"})," :"]})," This is the width of the desired renderbuffer."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"height"})," :"]})," This is the height of the desired renderbuffer."]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", set our renderbuffers format by using the ",e.exports.jsx(t.code,{children:"glRenderbufferStorage"})," call."]})}),`
`,e.exports.jsx(t.p,{children:`In order to add our attachment, instead of using glFramebufferTexture2D, we use a similar
call specifically for renderbuffers instead of textures:`}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glFramebufferTexture2D.xhtml",children:e.exports.jsx(t.strong,{children:"void glFramebufferTexture2D(GLenum target, GLenum attachment, GLenum renderbuffertarget, GLuint renderbuffer);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]}),` This indicates the type of framebuffer we are working with. Just like in
`,e.exports.jsx(t.code,{children:"glBindFramebuffer"}),", use ",e.exports.jsx(t.code,{children:"GL_FRAMEBUFFER"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"attachment"})," :"]}),` This is the specific attachment we wish to add, since we are attaching
a depth and stencil buffer, use `,e.exports.jsx(t.code,{children:"GL_DEPTH_STENCIL_ATTACHMENT"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffertarget"})," :"]}),` This indicates the type of renderbuffer we are using. In our case, use
`,e.exports.jsx(t.code,{children:"GL_RENDERBUFFER"}),"."]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffer"})," :"]}),` Here we place the renderbuffer object we wish to use. In our case this is
`,e.exports.jsx(t.code,{children:"m_rbo"}),"."]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"InitializeGL"}),", add our depth and stencil attachment to ",e.exports.jsx(t.code,{children:"m_fbo"}),"."]})}),`
`,e.exports.jsx(t.h2,{id:"drawing-with-our-fbo",children:e.exports.jsx(t.a,{href:"#drawing-with-our-fbo",children:"Drawing with our FBO"})}),`
`,e.exports.jsx(t.h3,{id:"where-did-it-go",children:e.exports.jsx(t.a,{href:"#where-did-it-go",children:"Where did it go?"})}),`
`,e.exports.jsx(t.p,{children:`Let's see what happens when we draw to our FBO! OpenGL draws to whichever FBO is currently
bound so lets switch that.`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"PaintGL"}),", before calling ",e.exports.jsx(t.code,{children:"glClear"}),", bind our FBO."]})}),`
`,e.exports.jsx(t.p,{children:"If you run the program, you should see a black screen. What happened?"}),`
`,e.exports.jsxs(t.p,{children:["Instead of drawing to the screen, we drew to an ",e.exports.jsx(t.strong,{children:"offscreen"}),` framebuffer. So where is our
output image stored now? In `,e.exports.jsx(t.code,{children:"m_fbo_texture"}),`. This is the texture that we set to store our
color information.`]}),`
`,e.exports.jsx(t.h3,{id:"back-to-basics",children:e.exports.jsx(t.a,{href:"#back-to-basics",children:"Back to Basics"})}),`
`,e.exports.jsxs(t.p,{children:[`To fix this, lets create a way to just draw our color buffer back onto the screen. Luckily
this is the exact same operation we have been doing in `,e.exports.jsx(t.code,{children:"texture.vert"})," and ",e.exports.jsx(t.code,{children:"texture.frag"}),"."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Copy ",e.exports.jsx(t.code,{children:"texture.vert"})," into ",e.exports.jsx(t.code,{children:"postprocessing.vert"})," and ",e.exports.jsx(t.code,{children:"texture.frag"})," into ",e.exports.jsx(t.code,{children:"postprocessing.frag"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"Next, lets make sure we draw to the default framebuffer after we already drew offscreen."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"PaintGL"}),", after unbinding the ",e.exports.jsx(t.code,{children:"m_texture_shader"}),", bind framebuffer 0."]})}),`
`,e.exports.jsx(t.p,{children:"Next we can clear the screen again."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsx(t.p,{children:"After binding the default framebuffer, clear the screen."})}),`
`,e.exports.jsxs(t.p,{children:["Now we want to use the appropriate program, ",e.exports.jsx(t.code,{children:"m_postprocessing_shader"}),"."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After clearing the screen, use the ",e.exports.jsx(t.code,{children:"m_postprocessing_shader"})," program."]})}),`
`,e.exports.jsx(t.p,{children:`In order to draw onto the screen, we need to draw something. Luckily for us, we can
reuse our fullscreen quad to draw our texture onto the entirety of the screen.`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After using the ",e.exports.jsx(t.code,{children:"m_postprocessing_shader"})," program, bind our fullscreen quad vao."]})}),`
`,e.exports.jsx(t.p,{children:"Next, we can draw like we usually do."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After binding our ",e.exports.jsx(t.code,{children:"vao"}),", draw it using ",e.exports.jsx(t.code,{children:"glDrawArrays"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"For consistency, remember afterwards to return to the default state!"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After drawing for the second time in ",e.exports.jsx(t.code,{children:"PaintGL"}),`, unbind our VAO, and make sure to
unbind our current shader program.`]})}),`
`,e.exports.jsxs(t.p,{children:["If you run the program now, you ",e.exports.jsx(t.strong,{children:"still"}),` may see a black screen. Why is this?
On some devices, the default framebuffer does not actually correspond to slot 0!
However, we can find out what framebuffer is intially bound by doing the following:`]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Near the start of ",e.exports.jsx(t.code,{children:"InitializeGL"}),", call ",e.exports.jsx(t.code,{children:"glGetIntegerv(GL_FRAMEBUFFER_BINDING, &m_default_fbo);"}),`.
This will store the default FBO id somewhere we can reference later.`]})}),`
`,e.exports.jsx(t.p,{children:"Now we can fix our black screen."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"PaintGL"}),`, when binding the default framebuffer, replace our previous index of 0 with that
of `,e.exports.jsx(t.code,{children:"m_default_fbo"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"Now run the program. You might notice that some of the borders are off. Why is this?"}),`
`,e.exports.jsx(t.h3,{id:"glviewport",children:e.exports.jsx(t.a,{href:"#glviewport",children:"glViewport"})}),`
`,e.exports.jsx(t.p,{children:`This is because when we drew to our custom framebuffer, we never told OpenGL what size "screen"
it was drawing to! This is self-inferred when drawing to the application window or default
framebuffer, but when we want to draw one of our own, we need to explicitly state the FBO
dimensions.`}),`
`,e.exports.jsx(t.p,{children:"The function to do this is:"}),`
`,e.exports.jsxs(t.div,{className:"success-callout callout",children:[e.exports.jsx("p",{style:{textAlign:"center"},children:e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glViewport.xhtml",children:e.exports.jsx(t.strong,{children:"void glViewport(GLint x, GLint y, GLsizei width, GLsizei height);"})})}),`
`]})}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"x"})," :"]}),` This is the x coordinate of teh lower left corner of our screen. For our purposes
this is 0.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"y"})," :"]}),` This is the y coordinate of teh lower left corner of our screen. For our purposes
this is also 0.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"width"})," :"]}),` This is the width of our FBO we wish to draw to. Our window is of size
600 x 400 and as such the width should be 600.`]}),e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"height"})," :"]}),` Similarly to width, this specifies the height of the FBO we are drawing to.
Our window is of size 600 x 400 and as such the height should be 400.`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"PaintGL"}),", after binding ",e.exports.jsx(t.code,{children:"m_fbo"}),", set the viewport to the appropriate size."]})}),`
`,e.exports.jsx(t.p,{children:`At this stage, you should finally be back to seeing the same cute kitten you saw a few
steps ago!`}),`
`,e.exports.jsx(n,{})]})]})}function h(s={}){const{wrapper:t}=s.components||{};return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(o,s)})):o(s)}export{h as default,c as documentProps};
