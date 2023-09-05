import{j as e}from"../../chunk-137b9351.js";import{I as r}from"../../chunk-1f744403.js";import{M as n}from"../../chunk-48b30f72.js";const c={title:"Lab 11"};function o(s){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",div:"div",code:"code",h2:"h2",strong:"strong",em:"em",ul:"ul",h3:"h3",h4:"h4",pre:"pre",span:"span",blockquote:"blockquote","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",br:"br",style:"style"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#lab-11-textures--fbos",children:"Lab 11: Textures & FBOs"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#intro",children:"Intro"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#textures",children:"Textures"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-is-a-texture",children:"What is a Texture?"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#creating-a-texture-on-the-cpu",children:"Creating a Texture on the CPU"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#qimages",children:"QImages"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#opengl-textures",children:"OpenGL Textures"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#passing-a-texture-to-the-gpu-uniforms-2-electric-boogaloo",children:"Passing A Texture To The GPU: Uniforms 2 Electric Boogaloo"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#using-a-texture-in-the-gpu-fullscreen-quads-and-uv-coordinates",children:"Using a Texture in the GPU: Fullscreen Quads and UV Coordinates"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#fullscreen-quads",children:"Fullscreen Quads"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#uv-coordinates",children:"UV Coordinates"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#sampling-a-texture-in-a-shader",children:"Sampling a Texture in a Shader"})})]})]})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#framebuffer-objects-fbos",children:"Framebuffer Objects (FBOs)"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-is-an-fbo",children:"What is an FBO?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-does-an-fbo-contain",children:"What does an FBO contain?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#what-does-an-fbos-attached-buffer-contain",children:"What does an FBO's attached buffer contain?"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#making-our-own-fbo",children:"Making our own FBO"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#drawing-with-our-fbo",children:"Drawing with our FBO"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#return-of-the-sphere",children:"Return of the Sphere"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#back-to-basics",children:"Back to Basics"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#glviewport",children:"glViewport"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#debugging",children:"Debugging"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#fbo-functionality",children:"FBO Functionality"}),e.exports.jsx(t.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#post-processing",children:"Post Processing"})})})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#resizing-framebuffers",children:"Resizing Framebuffers"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#memory-management",children:"Memory Management"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#submission",children:"Submission"})})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"lab-11-textures--fbos",children:e.exports.jsx(t.a,{href:"#lab-11-textures--fbos",children:"Lab 11: Textures & FBOs"})}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://classroom.github.com/a/baEBgBGA",target:"_blank",rel:"noopener noreferrer",children:"Github Classroom assignment"})}),`
`,e.exports.jsx(t.div,{className:"task-no-number-callout callout",children:e.exports.jsxs(t.p,{children:["Please put your answers to written questions in this lab, if any, in a Markdown file named ",e.exports.jsx(t.code,{children:"README.md"})," in your lab repo."]})}),`
`,e.exports.jsx(t.h2,{id:"intro",children:e.exports.jsx(t.a,{href:"#intro",children:"Intro"})}),`
`,e.exports.jsxs(t.p,{children:[`In Lab 9, you learned how OpenGL stores vertex data in two types of objects called
vertex buffer objects (VBOs) and vertex array objects (VAOs). You learned about how to work with
scene data in real time. But what about working with 2-dimensional data? In previous
projects you worked with a canvas object that displayed your results onto the screen.
But how does this work in OpenGL? So far, we have seen the real time pipeline up to
the final step in this diagram, the `,e.exports.jsx(t.strong,{children:"framebuffer"}),"."]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/pipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"90%",figCaption:"Realtime Pipeline"}),`
`,e.exports.jsx(t.p,{children:`In an oversimplification, the framebuffer is the 2D canvas that OpenGL works with when
using your shader program you wrote in the last lab. So far, you haven't had to worry
about this since you have been working with the default framebuffer that OpenGL
provides which happens to be your application window.`}),`
`,e.exports.jsxs(t.p,{children:["But what if you ",e.exports.jsx(t.em,{children:"don't"}),` want to draw on the screen? What if you want to
draw onto a texture and save it for later? This is where making your own
framebuffer objects comes in!`]}),`
`,e.exports.jsx(t.p,{children:"By the end of this lab, you will be able to:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"Understand how textures work in OpenGL,"}),`
`,e.exports.jsx(t.li,{children:"Understand framebuffers and when to use them,"}),`
`,e.exports.jsx(t.li,{children:"Draw your framebuffers onto your screen,"}),`
`,e.exports.jsx(t.li,{children:"Apply cool post-processing effects in real-time!"}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"textures",children:e.exports.jsx(t.a,{href:"#textures",children:"Textures"})}),`
`,e.exports.jsx(t.p,{children:`Before we dive into the 2D data we draw to, let's think about a common form of
2D data we use in our own scenes\u2026Textures!`}),`
`,e.exports.jsx(t.h3,{id:"what-is-a-texture",children:e.exports.jsx(t.a,{href:"#what-is-a-texture",children:"What is a Texture?"})}),`
`,e.exports.jsx(t.p,{children:`In OpenGL, a texture is a regular grid of values which can be read from and written to. We'll only be interacting with 2D textures in this lab, though OpenGL also supports 1D and 3D (i.e. volumetric) textures. Texture data can flow from the CPU
and GPU (just like vertex data) to be read in a shader. Or the other way around if you\u2019d like to export a texture to the CPU.`}),`
`,e.exports.jsx(t.h3,{id:"creating-a-texture-on-the-cpu",children:e.exports.jsx(t.a,{href:"#creating-a-texture-on-the-cpu",children:"Creating a Texture on the CPU"})}),`
`,e.exports.jsx(t.h4,{id:"qimages",children:e.exports.jsx(t.a,{href:"#qimages",children:"QImages"})}),`
`,e.exports.jsxs(t.p,{children:["In Qt creator, the most common form of an image is called a ",e.exports.jsx(t.code,{children:"QImage"}),`. Let's create one
of our own!`]}),`
`,e.exports.jsxs(t.p,{children:["The ",e.exports.jsxs(t.a,{href:"https://doc.qt.io/qt-6/qimage.html#QImage-8",target:"_blank",rel:"noopener noreferrer",children:[e.exports.jsx(t.code,{children:"QImage"})," constructor"]}),` takes in two parameters:
a file path formatted as a `,e.exports.jsx(t.code,{children:"QString"}),", and a format specification which is optional."]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL"}),", store a ",e.exports.jsx(t.code,{children:"QImage"})," in the ",e.exports.jsx(t.code,{children:"m_image"}),` member variable using the relative file path
(`,e.exports.jsx(t.code,{children:"kitten_filepath"}),") of the ",e.exports.jsx(t.strong,{children:"kitten.png"})," image in our project."]}),e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsx(t.p,{children:"Be sure to have set your working directory to your project directory in order for relative paths to work."})})]}),`
`,e.exports.jsxs(t.p,{children:["Now let's format our ",e.exports.jsx(t.code,{children:"QImage"}),` to fit OpenGL standards. Unlike OpenGL, which has its
UV coordinate space origin at the `,e.exports.jsx(t.em,{children:"bottom left"})," (which you will learn about soon), a ",e.exports.jsx(t.code,{children:"QImage"}),`
stores it in the `,e.exports.jsx(t.em,{children:"top left"}),`. Therefore one of our tasks is to mirror the image vertically.
The second is we need to ensure that we have 8-bit color channels for R, G, B, and A (4 channels in total).`]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["To do this let's overwrite our ",e.exports.jsx(t.code,{children:"m_image"})," to be:"]}),e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"code-highlight",children:e.exports.jsx(t.span,{className:"code-line",children:`	m_image = m_image.convertToFormat(QImage::Format_RGBA8888).mirrored();
`})})})]}),`
`,e.exports.jsx(t.h4,{id:"opengl-textures",children:e.exports.jsx(t.a,{href:"#opengl-textures",children:"OpenGL Textures"})}),`
`,e.exports.jsx(t.p,{children:`Now that we have our Qt formatted image, let's put it in an OpenGL texture.
To start, we need to generate a texture using the following function:`}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL"}),", generate a texture and store it's id in ",e.exports.jsx(t.code,{children:"m_kitten_texture"}),`. You
may find the following function useful:`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenTextures.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glGenTextures(GLsizei n, GLuint * textures);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"})," :"]})," This indicates the number of textures we wish to generate."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"textures"})," :"]})," This is the pointer this function will fill in with an id for the generated texture. Multiple textures can be filled in using a pointer to the first element of an array of sufficient size or some pointer followed by sufficient allocated space."]}),`
`]})]}),`
`,e.exports.jsx(t.p,{children:"Before we work with the texture, we need to bind it to the state machine."}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL"}),", bind our ",e.exports.jsx(t.code,{children:"m_kitten_texture"}),". You may find the following function useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindTexture.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glBindTexture(GLenum target, GLuint texture);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of texture we are binding. Since we are using a 2D texture, our target will be ",e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"texture"})," :"]})," This is the id of the texture we just generated."]}),`
`]})]}),`
`,e.exports.jsxs(t.p,{children:["Now we have an empty texture sitting in the ",e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"})," target in our state machine. Let's fill it with our ",e.exports.jsx(t.code,{children:"QImage"}),":"]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["After binding our texture in ",e.exports.jsx(t.code,{children:"initializeGL"}),", load our ",e.exports.jsx(t.code,{children:"m_image"})," variable into ",e.exports.jsx(t.code,{children:"m_kitten_texture"}),". You may find the following useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glTexImage2D.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"glTexImage2D(GLenum target, GLint level, GLint internalformat, GLsizei width, GLsizei height, GLint border, GLenum format, GLenum type, const void * data);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of texture we are binding. For now, use ",e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"level"})," :"]})," This correlates with the level-of-detail of the image. Since we do not wish to produce a mipmap (scaled texture) at the moment, use 0 for this parameter."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"internalformat"})," :"]})," This indicates the color format that will be contained within the ",e.exports.jsx(t.strong,{children:"OpenGL texture object"}),". This is different than the format parameter seen later! For now use ",e.exports.jsx(t.code,{children:"GL_RGBA"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"width"})," :"]})," This is the width of the desired OpenGL texture. For our image, it should be ",e.exports.jsx(t.code,{children:"m_image.width()"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"height"})," :"]})," This is the height of the desired OpenGL texture. For our image, it should be ",e.exports.jsx(t.code,{children:"m_image.height()"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"border"})," :"]})," Indicates whether or not the image should have a border. For our purposeswe will use the value of 0 to indicate no border."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"format"})," :"]})," This indicates the color format of the input pixel data. In our case, the sample image uses ",e.exports.jsx(t.code,{children:"GL_RGBA"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"type"})," :"]})," This indicates the data type of the input pixel data. We will use ",e.exports.jsx(t.code,{children:"GL_UNSIGNED_BYTE"})," since it assigns 8 bits per component of R, G, B, and A."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"data"})," :"]})," This is the pointer to our pixel data. We can get this from our ",e.exports.jsx(t.code,{children:"QImage"})," by using the associated ",e.exports.jsx(t.code,{children:"bits()"})," function."]}),`
`]})]}),`
`,e.exports.jsxs(t.p,{children:["Before we ",e.exports.jsx(t.strong,{children:"use"}),` the texture, we need to specify some behavior it should take on in particular if
the image needs to be scaled up or down. Consider the situation where our fragment lies
between two pixels in our texture. Which color should it output? These are parameters we
can control and in our case we can ask for OpenGL to linearly interpolate between the nearby
pixels.`]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/gl_linear_gl_nearest.png",alt:"TODO"}],figNumber:2,targetWidth:"90%",figCaption:"GL_NEAREST vs. GL_LINEAR Texture Filtering"}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["After adding our image data in ",e.exports.jsx(t.code,{children:"initializeGL"}),`, set the minify
and magnify filters to use linear interpolation. You will find the following function
useful:`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glTexParameter.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glTexParameteri(GLenum target, GLenum parametername, GLint parametervalue);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the target we bound our texture to. For our purposes, use ",e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"parametername"})," :"]})," This is an enum for the parameter we wish to set. Hint: Look at the documentation linked to find the relavant parameter names ;)"]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"parametervalue"})," :"]})," This is the value we wish to set for our chosen parameter. See the documentation for a list of parameters and their possible values."]}),`
`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After setting our parameters in ",e.exports.jsx(t.code,{children:"initializeGL"}),`, unbind our texture from the
`,e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"})," target. We can do this by binding texture id 0."]})}),`
`,e.exports.jsx(t.h3,{id:"passing-a-texture-to-the-gpu-uniforms-2-electric-boogaloo",children:e.exports.jsx(t.a,{href:"#passing-a-texture-to-the-gpu-uniforms-2-electric-boogaloo",children:"Passing A Texture To The GPU: Uniforms 2 Electric Boogaloo"})}),`
`,e.exports.jsx(t.p,{children:`Now, how do we work with the texture we just created? We can create a uniform variable
for it just how we did in the shaders lab for different data types!`}),`
`,e.exports.jsxs(t.p,{children:[`Let's begin by creating a uniform variable in our shader that will hold our texture.
The data type of a texture is known as `,e.exports.jsx(t.code,{children:"sampler2D"}),"."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Add a ",e.exports.jsx(t.code,{children:"sampler2D"})," uniform variable to the ",e.exports.jsx(t.code,{children:"texture.frag"})," shader file."]})}),`
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
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glActiveTexture.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glActiveTexture(GLenum texture);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"texture"})," :"]})," This is an enum that represents the texture slot. They are in the format of ",e.exports.jsx(t.code,{children:"GL_TEXTUREi"}),", where ",e.exports.jsx(t.code,{children:"i"})," is an integer representing the slot number. For example ",e.exports.jsx(t.code,{children:"GL_TEXTURE3"})," is texture slot 3."]}),`
`]}),`
`,e.exports.jsxs(t.p,{children:["The second call is the same ",e.exports.jsx(t.code,{children:"glBindTexture"})," call we have seen before."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Before we previously bound our texture in ",e.exports.jsx(t.code,{children:"initializeGL"}),", ",e.exports.jsx(t.strong,{children:"explicitly"}),` set the active texture
slot to slot 0.`]})}),`
`,e.exports.jsxs(t.p,{children:["To set the uniform value, it is represented by an ",e.exports.jsx(t.strong,{children:"int"})," (HINT: Think ",e.exports.jsx(t.code,{children:"glUniform1i"}),`) that correlates to the texture
slot we want to use and sample from. That is, if we bind our texture to `,e.exports.jsx(t.code,{children:"GL_TEXTURE0"}),`, we
should set our uniform value to 0 etc.`]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"intializeGL"}),", set the uniform value for your ",e.exports.jsx(t.code,{children:"sampler2D"}),` you created in your fragment shader
to be the same texture slot number we bound our texture to. Remember to call `,e.exports.jsx(t.code,{children:"glUseProgram"})," with ",e.exports.jsx(t.code,{children:"m_texture_shader"}),`
and get the variable location before setting it! Also be sure to return to default state
of program 0 afterwards.`]}),e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintTexture"}),", before calling ",e.exports.jsx(t.code,{children:"glDrawArrays"}),", be sure to bind the input parameter ",e.exports.jsx(t.code,{children:"texture"}),` to
texture slot 0 (Consider using `,e.exports.jsx(t.code,{children:"glActiveTexture"})," and ",e.exports.jsx(t.code,{children:"glBindTexture"}),")."]})]}),`
`,e.exports.jsx(t.h3,{id:"using-a-texture-in-the-gpu-fullscreen-quads-and-uv-coordinates",children:e.exports.jsx(t.a,{href:"#using-a-texture-in-the-gpu-fullscreen-quads-and-uv-coordinates",children:"Using a Texture in the GPU: Fullscreen Quads and UV Coordinates"})}),`
`,e.exports.jsx(t.p,{children:`At this point, we have set our uniform variable for our texture, and are going to use it
within our shader program. However, we currently have no triangles to draw our textures
on.`}),`
`,e.exports.jsx(t.h4,{id:"fullscreen-quads",children:e.exports.jsx(t.a,{href:"#fullscreen-quads",children:"Fullscreen Quads"})}),`
`,e.exports.jsxs(t.p,{children:["If you recall the OpenGL coordinate system, we can see the limits of the screen in ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-1-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D465",xlinkHref:"#MJX-1-TEX-I-1D465"})})})})]})})})," and ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.109ex",height:"1.464ex",role:"img",focusable:"false",viewBox:"0 -442 490 647",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsx(t.defs,{children:e.exports.jsx(t.path,{id:"MJX-2-TEX-I-1D466",d:"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"})}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsx(t.g,{"data-mml-node":"math",children:e.exports.jsx(t.g,{"data-mml-node":"mi",children:e.exports.jsx(t.use,{"data-c":"1D466",xlinkHref:"#MJX-2-TEX-I-1D466"})})})})]})})})," are as follows:"]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab9/openglcoordinates.png",alt:"TODO"}],figNumber:3,targetWidth:"95%",figCaption:"OpenGL Coordinate System"}),`
`,e.exports.jsxs(t.p,{children:["What we can do with this is use it to construct what is known as a ",e.exports.jsx(t.strong,{children:"fullscreen quad"}),`.
Think of a fullscreen quad as a projector screen that we drape down in our scene that
happens to be `,e.exports.jsx(t.em,{children:"just"}),` the right size to cover the entire screen so that we can't see
behind it, but also can see it in its entirety.`]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL"}),", notice the fullscreen quad VBO data ",e.exports.jsx(t.code,{children:"fullscreen_quad_data"}),`. Edit it
in order to be the correct size of the screen.`]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Mess around with ",e.exports.jsx(t.code,{children:"fullscreen_quad_data"}),`! What happens when you change the z coordinate?
What happens when you only change a single vertex?`]})}),`
`,e.exports.jsx(t.h4,{id:"uv-coordinates",children:e.exports.jsx(t.a,{href:"#uv-coordinates",children:"UV Coordinates"})}),`
`,e.exports.jsx(t.p,{children:`Great! Now we have the shape which we'll plaster our texture, but how do we (texture-)map
the image to the surface? In steps a new vertex attribute: UV coordinates!`}),`
`,e.exports.jsx(t.p,{children:`The UV coordinate attribute tells us at what point in the sampled texture should each
vertex correspond to. The lower left corner is set to be (0, 0) and the upper right corner
to be (1, 1) as in the following image:`}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/UVCoordinates.png",alt:"TODO"}],figNumber:4,targetWidth:"95%",figCaption:"UV Coordinates in OpenGL"}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsx(t.p,{children:"Ahead is a small chunk of tasks in order to add UV coordinates to your fullscreen quad. Do not fret! Most of these calls are reminiscent and reminders of ones you have seen before."})}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["Pick 6 corresponding UV coordinates to pair with each vertex position in ",e.exports.jsx(t.code,{children:"fullscreen_quad_data"}),`.
Make sure the bottom left corner of the fullscreen quad correlates with the bottom left corner
of the texture and the upper right corner of the fullscreen quad correlates with the
upper right corner of the texture!`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:"Hint: This should be the same process as adding color to your triangle data from lab 9!"}),`
`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL"}),`, update the VAO attribute information to include the newly added UV
coordinates. Make sure to update the position attribute as well.`]})}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["Add the UV attribute as a layout variable in ",e.exports.jsx(t.code,{children:"texture.vert"}),"."]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:`Remember that the attribute index you use in initializeGL for the VAO
should match that of the layout variable in the shader!`}),`
`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Create an in/out variable pair to pass the UV coordinates from the ",e.exports.jsx(t.code,{children:"texture.vert"}),` to
`,e.exports.jsx(t.code,{children:"texture.frag"}),`. Also be sure to set the out variable of texture.vert to be equal to
the layout input variable we created in the last step!`]})}),`
`,e.exports.jsx(t.h4,{id:"sampling-a-texture-in-a-shader",children:e.exports.jsx(t.a,{href:"#sampling-a-texture-in-a-shader",children:"Sampling a Texture in a Shader"})}),`
`,e.exports.jsx(t.p,{children:"Finally now that we have structured and funneled the appropriate data all the way down to the fragment shader, we can now color our pixels with our texture appropriately."}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"texture.frag"}),`, set the fragment color based on the texture color at the fragment's
UV coordinate. You can sample a `,e.exports.jsx(t.code,{children:"sampler2D"})," uniform with the following function:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/texture.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"gvec4 texture(gsampler2D sampler, vec2 P);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"sampler"})," :"]})," This is the name of the ",e.exports.jsx(t.code,{children:"sampler2D"})," we wish to sample from."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"P"})," :"]})," This is the UV coordinate we wish to sample the texture at."]}),`
`]})]}),`
`,e.exports.jsxs("details",{children:[" ",e.exports.jsxs("summary",{children:["What is ",e.exports.jsx(t.code,{children:"gvec4"})," and ",e.exports.jsx(t.code,{children:"gsampler2D"}),"?"]}),e.exports.jsxs(t.p,{children:["In glsl, there are special types for vectors of ints, unsigned ints, doubles, and floats which are given by ",e.exports.jsx(t.code,{children:"ivec4"}),", ",e.exports.jsx(t.code,{children:"uvec4"}),", ",e.exports.jsx(t.code,{children:"dvec4"}),", and ",e.exports.jsx(t.code,{children:"vec4"})," respectively. The same goes for sampler2Ds. The g in ",e.exports.jsx(t.code,{children:"gvec4"})," and ",e.exports.jsx(t.code,{children:"gsampler2D"})," is just a placeholder for any one of these types."]})]}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Uh Oh"})," \u{1F626} ",e.exports.jsx(t.br,{}),`
`,`If you run the program at this stage only half of the cat is visible!
Check `,e.exports.jsx(t.code,{children:"paintTexture"})," to see if you can find the bug! ",e.exports.jsx(t.br,{}),`
`,"Hint: It looks like only half of the fullscreen quad's vertices were drawn"]}),`
`]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/HalfKitten.png",alt:"TODO"}],figNumber:4.1,targetWidth:"80%",figCaption:"Half of the Kitten"}),`
`,e.exports.jsx(t.p,{children:"With the bug fixed, you should see something cute like this on your screen!"}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/FinalKitten.png",alt:"TODO"}],figNumber:4.2,targetWidth:"80%",figCaption:"Complete Kitten Image"}),`
`,e.exports.jsx(t.div,{className:"success-callout callout",children:e.exports.jsxs(t.p,{children:["Congrats on making it through textures in OpenGL! Feel free to treat this point as a stopping point for week 1 of this lab. Take a well deserved break and come back for the finale: ",e.exports.jsx(t.strong,{children:"framebuffers!"})]})}),`
`,e.exports.jsx(t.h2,{id:"framebuffer-objects-fbos",children:e.exports.jsx(t.a,{href:"#framebuffer-objects-fbos",children:"Framebuffer Objects (FBOs)"})}),`
`,e.exports.jsx(t.h3,{id:"what-is-an-fbo",children:e.exports.jsx(t.a,{href:"#what-is-an-fbo",children:"What is an FBO?"})}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Framebuffer"}),": A portion of memory containing bitmaps that can drive displays."]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Fancy language aside, lets break down the word itself into components:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:'Frame: Canvas, screen space, originally used for the term of "next/current frame"'}),`
`,e.exports.jsx(t.li,{children:"Buffer: Data storage"}),`
`,e.exports.jsx(t.li,{children:"Object: Something, in this case a container that holds other information"}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"what-does-an-fbo-contain",children:e.exports.jsx(t.a,{href:"#what-does-an-fbo-contain",children:"What does an FBO contain?"})}),`
`,e.exports.jsxs(t.p,{children:["Framebuffers contain things in OpenGL known as ",e.exports.jsx(t.strong,{children:"attachments"}),`. These include color buffers,
depth buffers, and stencil buffers which you will learn more about shortly. Each buffer
is represented by a sub-object being either:`]}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"A Texture"}),`
`,e.exports.jsx(t.li,{children:"A Renderbuffer"}),`
`]}),`
`,e.exports.jsxs(t.p,{children:[`So far you have already been working with textures. As you may recall, textures are usually
2D objects which have both read `,e.exports.jsx(t.strong,{children:"and"})," write capabilities."]}),`
`,e.exports.jsxs(t.p,{children:[`This is where renderbuffers differ! A renderbuffer can serve almost the same purpose of a
texture, except it only has capability to be `,e.exports.jsx(t.strong,{children:"written to"}),"."]}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:["You can remember this functionality by thinking of the name. ",e.exports.jsx(t.em,{children:"Render"}),`buffer refers to an object that can be
`,e.exports.jsx(t.em,{children:"rendered"})," or written to."]}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"what-does-an-fbos-attached-buffer-contain",children:e.exports.jsx(t.a,{href:"#what-does-an-fbos-attached-buffer-contain",children:"What does an FBO's attached buffer contain?"})}),`
`,e.exports.jsx(t.p,{children:`Unknowingly, we have actually used framebuffers before. The default framebuffer happens
to be: the application window!`}),`
`,e.exports.jsxs(t.p,{children:[`Alongside this, we have also seen one of the attachments before. So far in the fragment
shader, we have explicitly written to a `,e.exports.jsx(t.code,{children:"vec4"})," variable ",e.exports.jsx(t.code,{children:"fragColor"}),` which sets pixels in
the `,e.exports.jsx(t.strong,{children:"color buffer"})," to whatever we choose!"]}),`
`,e.exports.jsx(t.p,{children:"The ones we have not directly seen are depth and stencil buffers."}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Depth buffers"}),` contain information about how far away a specific pixel is from the camera.
We can write to the depth buffer by calling `,e.exports.jsx(t.code,{children:"glEnable(GL_DEPTH_TEST)"}),`. This allows
OpenGL to store depth information in the default framebuffer's depth buffer such that if
we draw two triangles on top of one another, OpenGL can tell which should display on top.`]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Stencil buffers"}),` contain information that is generated by special masks that enables certain
pixels to be drawn or not. This is not important at the moment, but if you wish to draw
something like outlines or recursive portals, this comes in handy.`]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/fboattachments.png",alt:"TODO"}],figNumber:5,targetWidth:"80%",figCaption:"FBO Attachments"}),`
`,e.exports.jsx(t.h3,{id:"making-our-own-fbo",children:e.exports.jsx(t.a,{href:"#making-our-own-fbo",children:"Making our own FBO"})}),`
`,e.exports.jsx(t.p,{children:"Next, we will generate and bind our own FBO."}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"makeFBO"}),", generate an FBO and store it in ",e.exports.jsx(t.code,{children:"m_fbo"}),". Then bind it. You may find the following useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenFramebuffers.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glGenFramebuffers(GLsizei n, GLuint *framebuffers);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"})," :"]})," This indicates the number of framebuffer objects to create."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"framebuffers"})," :"]})," This is the pointer this function will fill in with an id for the generated FBO. This way you can refer to it later by the same stored id. Multiple FBOs can be filled in using a pointer to the first element of an array of sufficient size or some pointer followed by sufficient allocated space."]}),`
`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindFramebuffer.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glBindFramebuffer(GLenum target, GLuint framebuffer);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of framebuffer we wish to bind. For our purposes, use ",e.exports.jsx(t.code,{children:"GL_FRAMEBUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"framebuffer"})," :"]})," This is id of the FBO we wish to bind."]}),`
`]})]}),`
`,e.exports.jsx(t.p,{children:`Before we configure our FBO, we need to generate containers for its attachments. As stated
previously, these can either be Textures or Renderbuffers. Let's try using a Texture in place
of our color attachment.`}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"makeFBO"}),", generate an empty texture, ",e.exports.jsx(t.code,{children:"m_fbo_texture"}),` and bind it to texture slot 0.
This will be used to store our color buffer.`]}),e.exports.jsxs("details",{children:[" ",e.exports.jsx("summary",{children:"Why are we binding to texture slot 0?"}),e.exports.jsxs(t.p,{children:[`You may recall that earlier we already boud one texture to slot 0, so the question may be
why we are overwriting that slot with a new texture? We could use a separate texture slot,
and have both textures actively bound, but this is typically only necessary if we actually
`,e.exports.jsx(t.strong,{children:"need"}),` to use both textures at the same time. For example this is useful when your shader
contains multiple textures it needs to sample from at the same time. However, we will only
ever be using one texture in our shader at a time.`]})]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:["To generate an empty texture, when calling ",e.exports.jsx(t.code,{children:"glTexImage2D"}),`, pass in a nullptr for the data.
Be sure to set the same minify and magnify parameters as well as return to default state by
unbinding our texture once we haveset all its parameters. When setting the width and height,
use `,e.exports.jsx(t.code,{children:"m_fbo_width"})," and ",e.exports.jsx(t.code,{children:"m_fbo_height"})," respectively."]}),`
`]}),e.exports.jsxs("details",{children:[" ",e.exports.jsx("summary",{children:e.exports.jsxs(t.p,{children:["What is the ",e.exports.jsx(t.code,{children:"m_devicePixelRatio"})," variable ",e.exports.jsx(t.code,{children:"m_screen_width"}),", ",e.exports.jsx(t.code,{children:"m_screen_height"}),", ",e.exports.jsx(t.code,{children:"m_fbo_height"}),`, and
`,e.exports.jsx(t.code,{children:"m_fbo_width"})," are all initialized with?"]})}),e.exports.jsxs(t.p,{children:[`For high density displays such as retina displays on many Mac computers, there is a discrepancy
between the physical pixels on the `,e.exports.jsx(t.strong,{children:"screen"})," and the device-independent pixels in a ",e.exports.jsx(t.strong,{children:"window"}),`.
This parameter will take into account this ratio and generate the proper width and height of
the window in pixels. You can read more `,e.exports.jsx(t.a,{href:"https://docs.microsoft.com/en-us/previous-versions/windows/desktop/mpc/pixel-density-and-usability",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})]})]}),`
`,e.exports.jsx(t.p,{children:"Next let's use instead a Renderbuffer to store our depth and stencil attachments."}),`
`,e.exports.jsxs("details",{children:[" ",e.exports.jsx("summary",{children:"Why not use another Texture?"}),e.exports.jsxs(t.p,{children:[`If you recall, as opposed to Textures, Renderbuffers can only be written to. This allows
for OpenGL to make some behind-the-scenes optimizations. For depth information, we
do not need to sample it like we do the colors of a texture. Later on, we will redraw our FBO by
using its color attachment texture just how we did the `,e.exports.jsx(t.code,{children:"m_kitten_texture"}),` to draw back
to the screen. But depth calculations are all self contained during the render process
and we do not need to sample it for our purposes.`]})]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"makeFBO"}),", generate a renderbuffer in ",e.exports.jsx(t.code,{children:"m_fbo_renderbuffer"}),", bind it, then set its configuration using ",e.exports.jsx(t.code,{children:"glRenderbufferStorage"}),`. You
may find the following functions useful:`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenRenderbuffers.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glGenRenderbuffers(GLsizei n, GLuint *renderbuffers);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"})," :"]})," This indicates the number of renderbuffer objects to create."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffers"})," :"]})," This is the pointer this function will fill in with an id for the generated RBO. This way you can refer to it later by the same stored id. Multiple RBOs can be filled in using a pointer to the first element of an array of sufficient size or some pointer followed by sufficient allocated space."]}),`
`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindRenderbuffer.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glBindRenderbuffer(GLenum target, GLuint renderbuffer);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of renderbuffer we wish to bind. For our purposes, use ",e.exports.jsx(t.code,{children:"GL_RENDERBUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffer"})," :"]})," This is id of the RBO we wish to bind."]}),`
`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glRenderbufferStorage.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glRenderbufferStorage(GLenum target, GLenum internalformat, GLsizei width, GLsizei height);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of framebuffer we wish to work with. For our purposes, use ",e.exports.jsx(t.code,{children:"GL_RENDERBUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"internalformat"})," :"]})," This indicates the pixel data format that will be contained within the renderbuffer. We wiil be using ",e.exports.jsx(t.code,{children:"GL_DEPTH24_STENCIL8"})," which indicates 24 bits will be used for the depth component and 8 for the stencil component."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"width"})," :"]})," This is the width of the desired renderbuffer. For our purposes, use ",e.exports.jsx(t.code,{children:"m_fbo_width"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"height"})," :"]})," This is the height of the desired renderbuffer. For our purposes, use ",e.exports.jsx(t.code,{children:"m_fbo_height"}),".3"]}),`
`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.strong,{children:"Be sure to unbind our Renderbuffer once we have set its configuration!"})}),`
`]})]}),`
`,e.exports.jsx(t.p,{children:"Now we can attach both of our attachments to the FBO we generated."}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"makeFBO"}),` after binding our FBO, attach both the color and depth/stencil attachemnts.
You may find the following functions useful:`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glFramebufferTexture2D.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glFramebufferTexture2D(GLenum target, GLenum attachment, GLenum textarget, GLuint texture, GLint level);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of framebuffer we are working with. Just like in ",e.exports.jsx(t.code,{children:"glBindFramebuffer"}),", use ",e.exports.jsx(t.code,{children:"GL_FRAMEBUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"attachment"})," :"]})," This is the specific attachment we wish to add, since we are attaching a color buffer, use ",e.exports.jsx(t.code,{children:"GL_COLOR_ATTACHMENT0"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"textarget"})," :"]})," This indicates the type of texture we are using. In our case, use ",e.exports.jsx(t.code,{children:"GL_TEXTURE_2D"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"texture"})," :"]})," Here we place the texture object we wish to use. In our case this is ",e.exports.jsx(t.code,{children:"m_fbo_texture"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"level"})," :"]})," This specifies which mipmap or level of detail texture we want to use. We want full detail so use 0."]}),`
`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glFramebufferRenderbuffer.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glFramebufferRenderbuffer(GLenum target, GLenum attachment, GLenum renderbuffertarget, GLuint renderbuffer);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"})," :"]})," This indicates the type of framebuffer we are working with. Just like in ",e.exports.jsx(t.code,{children:"glBindFramebuffer"}),", use ",e.exports.jsx(t.code,{children:"GL_FRAMEBUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"attachment"})," :"]})," This is the specific attachment we wish to add, since we are attaching a depth and stencil buffer, use ",e.exports.jsx(t.code,{children:"GL_DEPTH_STENCIL_ATTACHMENT"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffertarget"})," :"]})," This indicates the type of renderbuffer we are using. In our case, use ",e.exports.jsx(t.code,{children:"GL_RENDERBUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"renderbuffer"})," :"]})," Here we place the renderbuffer object we wish to use. In our case this is ",e.exports.jsx(t.code,{children:"m_fbo_renderbuffer"}),"."]}),`
`]})]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/TaskFlow.png",alt:"TODO"}],figNumber:6,targetWidth:"90%",figCaption:"Visualization of Tasks 19-21"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"makeFBO"}),", return to default state by unbinding our FBO. Do this by binding the FBO with id: ",e.exports.jsx(t.code,{children:"m_defaultFBO"}),`.
This is a const GLuint currently set to 0, but may not work properly which you will find out later.`]})}),`
`,e.exports.jsx(t.h2,{id:"drawing-with-our-fbo",children:e.exports.jsx(t.a,{href:"#drawing-with-our-fbo",children:"Drawing with our FBO"})}),`
`,e.exports.jsx(t.h3,{id:"return-of-the-sphere",children:e.exports.jsx(t.a,{href:"#return-of-the-sphere",children:"Return of the Sphere"})}),`
`,e.exports.jsx(t.p,{children:`Let's see what happens when we draw to our FBO! But first, lets get our sphere from
lab 10 showing on the screen again.`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL"}),`, comment out your current code. Uncomment the segment labeled for this task
which should get us back to the sphere from the previous lab.`]})}),`
`,e.exports.jsx(t.p,{children:"At this point, you should see the same sphere you saw in lab 10 on your screen:"}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/plain_sphere.png",alt:"TODO"}],figNumber:7,targetWidth:"80%",figCaption:"Sphere w/ Phong Lighting"}),`
`,e.exports.jsxs(t.p,{children:["Next, lets try drawing to our custom framebuffer! In OpenGL, ",e.exports.jsx(t.code,{children:"glDrawArrays"}),` will utilize
whichever framebuffer is currently bound, so lets change the current FBO.`]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL"}),", before ",e.exports.jsx(t.code,{children:"glClear"})," is called, bind our FBO."]})}),`
`,e.exports.jsx(t.p,{children:"If you run the program, you should see a black screen:"}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/black_screen.png",alt:"TODO"}],figNumber:8,targetWidth:"80%",figCaption:"Black Screen"}),`
`,e.exports.jsx(t.p,{children:"What happened?"}),`
`,e.exports.jsxs(t.p,{children:["Instead of drawing to the screen, we drew to an ",e.exports.jsx(t.strong,{children:"offscreen"}),` framebuffer. So where is our
output image stored now? In `,e.exports.jsx(t.code,{children:"m_fbo_texture"}),`! This is the texture that we set to store our
color information.`]}),`
`,e.exports.jsx(t.h3,{id:"back-to-basics",children:e.exports.jsx(t.a,{href:"#back-to-basics",children:"Back to Basics"})}),`
`,e.exports.jsxs(t.p,{children:[`To fix this, lets create a way to just draw our color buffer back onto the screen. Luckily
this is the exact same operation we have been doing in `,e.exports.jsx(t.code,{children:"texture.vert"})," and ",e.exports.jsx(t.code,{children:"texture.frag"}),"."]}),`
`,e.exports.jsx(t.p,{children:"Next, lets make sure we draw to the default framebuffer after we already drew offscreen."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL"}),", after ",e.exports.jsx(t.code,{children:"paintExampleGeometry"}),` is called, bind the default framebuffer by binding
the `,e.exports.jsx(t.code,{children:"m_defaultFBO"})," value which is declared near the top of ",e.exports.jsx(t.code,{children:"initializeGL"}),`
as a value of 0. This my need to change in a little bit so be sure to bind the variable rather than
the plain value of 0!`]})}),`
`,e.exports.jsxs(t.p,{children:["Next we can call ",e.exports.jsx(t.code,{children:"glClear"})," once more to clear our screen."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL"}),", after binding the default framebuffer, clear the screen using ",e.exports.jsx(t.code,{children:"glClear"}),`. Be sure to clear
both the color, and depth bits!`]})}),`
`,e.exports.jsx(t.p,{children:`Now we want to draw our fbo color attachment onto the screen as a texture. This should be
the same process we used to draw the kitten to our screen earlier!`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL"}),", after clearing the screen, call ",e.exports.jsx(t.code,{children:"paintTexture"})," with ",e.exports.jsx(t.code,{children:"m_fbo_texture"}),` to draw our fbo color
attachment onto our previous fullscreen quad.`]})}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsxs(t.p,{children:["If you run the program now, you ",e.exports.jsx(t.strong,{children:"still"}),` may see a black screen. Why is this?
In Qt Creator, the default framebuffer does not actually correspond to slot 0 :(.
Instead, the default begins at a value of 1. Then, `,e.exports.jsx(t.strong,{children:"for each"}),` FBO that is created,
the default FBO handle will increment by 1. That is, since we created 1 FBO of our own, the default
FBO will have a handle value of 2. Near the top of `,e.exports.jsx(t.code,{children:"initializeGL"}),`, replace the m_defaultFBO
from a value of 0 to 2. If still nothing shows up, please let a TA know.`]})}),`
`,e.exports.jsx(t.p,{children:`On high pixel density displays such as that of retina displays of Mac laptops, you may see
the image appear in the bottom left quadrant rather than the full screen. Why is this?`}),`
`,e.exports.jsx(t.h3,{id:"glviewport",children:e.exports.jsx(t.a,{href:"#glviewport",children:"glViewport"})}),`
`,e.exports.jsx(t.p,{children:`This is because when we drew to our custom framebuffer, we never told OpenGL what size "screen"
it was drawing to! As we have seen before, OpenGL space is represented by a box with x and y
dimensions ranging from -1 to 1. What OpenGL needs to know is how to map the pixel space on
the screen, say 600 x 400 to the OpenGL space as just defined with limits of -1 to 1 on both
x and y. As best practice, whenever switching between framebuffers of differing sizes, it is
important to call glViewport.`}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL"}),", after binding ",e.exports.jsx(t.code,{children:"m_fbo"}),`, set the viewport to the appropriate size. After binding
`,e.exports.jsx(t.code,{children:"m_defaultFBO"}),", also set the viewport to the screen size. The following function may be useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glViewport.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glViewport(GLint x, GLint y, GLsizei width, GLsizei height);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"x"})," :"]})," This is the x coordinate of the lower left corner of our screen. For our purposes this is 0."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"y"})," :"]})," This is the y coordinate of the lower left corner of our screen. For our purposes this is also 0."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"width"})," :"]})," This is the width of our FBO we wish to draw to. For our ",e.exports.jsx(t.strong,{children:"FBO"}),", we can use ",e.exports.jsx(t.code,{children:"m_fbo_width"}),", which should match what we used to generate our FBO attachments. For our ",e.exports.jsx(t.strong,{children:"screen"}),", we can use ",e.exports.jsx(t.code,{children:"m_screen_width"})," instead."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"height"})," :"]})," Similarly to width, this specifies the height of the FBO we are drawing to. For our ",e.exports.jsx(t.strong,{children:"FBO"}),", we can use ",e.exports.jsx(t.code,{children:"m_fbo_height"}),", which should match what we used to generate our FBO attachments. For our ",e.exports.jsx(t.strong,{children:"screen"}),", we can use ",e.exports.jsx(t.code,{children:"m_screen_height"})," instead."]}),`
`]})]}),`
`,e.exports.jsxs("details",{children:[" ",e.exports.jsx("summary",{children:"Why are x and y both 0?"}),e.exports.jsxs(t.p,{children:["You can think of the screen as a giant texture with its origin at the bottom left corner. Because of this, in the above call we are specifying which pixel coordinates we wish to draw too. In general we would like the pixel at ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.029ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2222.7 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-3-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-3-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-3-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-3-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-3-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-3-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-3-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-3-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1833.7,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-3-TEX-N-29"})})]})})]})})})," to be the bottom left limit and the one at (framebuffer width, framebuffer height) to be the top right limit of what we draw to."]})]}),`
`,e.exports.jsx(t.p,{children:`At this stage, you should finally be back to seeing the same sphere you saw a few
steps ago!`}),`
`,e.exports.jsx(t.h3,{id:"debugging",children:e.exports.jsx(t.a,{href:"#debugging",children:"Debugging"})}),`
`,e.exports.jsxs(t.p,{children:["If you still are having issues with your image being shrunk or in the wrong location, it is first important to determine where this is happening: in the draw to the custom framebuffer, or in the draw to the screen. One way we can differentiate the two is in our drawing loop, if before clearing the screen the first time we set the clear color to red, and then if before clearing the screen the second time we set our clear color to blue, then we will be able to tell which step is not drawing to the correct region as we hoped. Here is an example of the above schema when we set the viewport the second time around to be half the desired size (with the lower left corner still being ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.029ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2222.7 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-4-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-4-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-4-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-4-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-4-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-4-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1833.7,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-4-TEX-N-29"})})]})})]})})}),"):"]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/IncorrectScreenViewport.png",alt:"TODO"}],figNumber:9,targetWidth:"80%",figCaption:"Screen Viewport Wrong"}),`
`,e.exports.jsxs(t.p,{children:["And here is an example of the above schema when the viewport the first time around is set to be half the desired size (with the lower left corner still being ",e.exports.jsx(t.span,{className:"math math-inline",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.029ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2222.7 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-5-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}),e.exports.jsx(t.path,{id:"MJX-5-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsx(t.g,{"data-mml-node":"mo",children:e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-5-TEX-N-28"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(389,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(889,0)",children:e.exports.jsx(t.use,{"data-c":"2C",xlinkHref:"#MJX-5-TEX-N-2C"})}),e.exports.jsx(t.g,{"data-mml-node":"mn",transform:"translate(1333.7,0)",children:e.exports.jsx(t.use,{"data-c":"30",xlinkHref:"#MJX-5-TEX-N-30"})}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(1833.7,0)",children:e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-5-TEX-N-29"})})]})})]})})}),"):"]}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/IncorrectFBOViewport.png",alt:"TODO"}],figNumber:10,targetWidth:"80%",figCaption:"FBO Viewport Wrong"}),`
`,e.exports.jsx(t.h2,{id:"fbo-functionality",children:e.exports.jsx(t.a,{href:"#fbo-functionality",children:"FBO Functionality"})}),`
`,e.exports.jsx(t.h3,{id:"post-processing",children:e.exports.jsx(t.a,{href:"#post-processing",children:"Post Processing"})}),`
`,e.exports.jsx(t.p,{children:`So far in our post-processing shader, we have done nothing but redraw our scene as is.
Lets take advantage of having the pixels at our disposal and make some alterations.`}),`
`,e.exports.jsx(t.p,{children:"First, let's add some customizabiliy to our texture shader program."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"texture.frag"}),", add a uniform bool which will be used to toggle on and off post-processing."]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"glRenderer.h"}),", change the function signature of ",e.exports.jsx(t.code,{children:"paintTexture"}),` to include an extra
boolean parameter on whether or not to post-process the texture.`]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"glRenderer.cpp"}),", correct the function signature of ",e.exports.jsx(t.code,{children:"paintTexture"}),` to what you wrote in
`,e.exports.jsx(t.code,{children:"glRenderer.h"})," and be sure to update any previous calls you made to ",e.exports.jsx(t.code,{children:"paintTexture"}),` to
take this into account. In particular, in `,e.exports.jsx(t.code,{children:"paintGL"}),", update your call to ",e.exports.jsx(t.code,{children:"paintTexture"}),`
to turn filtering `,e.exports.jsx(t.strong,{children:"on"}),"."]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["A bool uniform can be set using the ",e.exports.jsx(t.code,{children:"glUniform1i"})," function. In ",e.exports.jsx(t.code,{children:"paintTexture"}),", use ",e.exports.jsx(t.code,{children:"glGetUniformLocation"}),`
and `,e.exports.jsx(t.code,{children:"glUniform1i"})," to set your custom bool uniform in ",e.exports.jsx(t.code,{children:"m_texture_shader"}),` depending on the input
bool parameter you added to `,e.exports.jsx(t.code,{children:"paintTexture"}),"."]})}),`
`,e.exports.jsx(t.p,{children:`If we wish to invert our colors, since each color value in OpenGL is on a 0 to 1 scale,
we can simply take any color cahnnel value and subtract it from 1 in order to get the
inverse of that color channel.`}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"texture.frag"}),", if your custom boolean is set to true, invert the channels of fragColor."]})}),`
`,e.exports.jsx(t.p,{children:`If you run the program, you should see your sphere has been warped into an inverse shadow
realm!`}),`
`,e.exports.jsx(r,{images:[{src:"/labs/lab11/inverted_sphere.png",alt:"TODO"}],figNumber:11,targetWidth:"80%",figCaption:"Sphere w/ Phong Lighting + Invert Filter"}),`
`,e.exports.jsx(t.p,{children:`There are many cool effects you can apply using framebuffers, including: kernel-based
image filtering which you will do in Project 6: Action!, particle effects,
or even draw portals with usage of the FBO's stencil attachment!`}),`
`,e.exports.jsx(t.h2,{id:"resizing-framebuffers",children:e.exports.jsx(t.a,{href:"#resizing-framebuffers",children:"Resizing Framebuffers"})}),`
`,e.exports.jsxs(t.p,{children:[`If you resize the screen, you will notice some bizarre behavior occurs. Why is this? Well,
while we resized our default framebuffer, our custom offscreen framebuffer hasn't changed
at all. Unfortunately, it is not easy to resize the FBO attachments we generated individually.
However, we can do something simple: delete and remake our FBO! Because we have a `,e.exports.jsx(t.code,{children:"makeFBO"}),` function
this makes the step of remaking a lot simpler.`]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"resizeGL"}),", delete our FBO attachments and FBO itself by using ",e.exports.jsx(t.code,{children:"glDeleteTextures"}),", ",e.exports.jsx(t.code,{children:"glDeleteRenderbuffers"}),`,
and `,e.exports.jsx(t.code,{children:"glDeleteFramebuffers"}),"."]}),e.exports.jsxs(t.p,{children:["Then, call ",e.exports.jsx(t.code,{children:"makeFBO"})," to regenerate a new Framebuffer."]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:["Note that we have already updated ",e.exports.jsx(t.code,{children:"m_fbo_width"})," and ",e.exports.jsx(t.code,{children:"m_fbo_height"})," for you in ",e.exports.jsx(t.code,{children:"resizeGL"}),"."]}),`
`]})]}),`
`,e.exports.jsx(t.h2,{id:"memory-management",children:e.exports.jsx(t.a,{href:"#memory-management",children:"Memory Management"})}),`
`,e.exports.jsxs(t.p,{children:["Before we exit, it is important to delete any memory we generated with ",e.exports.jsx(t.code,{children:"glGen"})," calls."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"finish"}),", delete our kitten texture, FBO texture, FBO renderbuffer, and FBO itself."]})}),`
`,e.exports.jsx(t.h2,{id:"submission",children:e.exports.jsx(t.a,{href:"#submission",children:"Submission"})}),`
`,e.exports.jsx(t.p,{children:'Submit your Github repo for this lab to the "Lab 11: Textures & FBOs" assignment on Gradescope, then get checked off at your mentor meeting.'}),`
`,e.exports.jsx(n,{}),e.exports.jsx(t.style,{children:`
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
`})]})]})}function h(s={}){const{wrapper:t}=s.components||{};return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(o,s)})):o(s)}export{h as default,c as documentProps};
