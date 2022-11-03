import{j as e}from"../../chunk-b0d73203.js";import{I as s}from"../../chunk-e3efcf8b.js";import{M as o}from"../../chunk-82f9daf4.js";const c={title:"Lab 9"};function n(r){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",div:"div",code:"code",h2:"h2",h3:"h3",strong:"strong",ul:"ul",em:"em",blockquote:"blockquote",pre:"pre",span:"span",h4:"h4","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",style:"style"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#lab-9-vbos--vaos",children:"Lab 9: VBOs & VAOs"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#introduction",children:"Introduction"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#objectives",children:"Objectives"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#stencil-code",children:"Stencil Code"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#getting-started-with-opengl",children:"Getting Started With OpenGL"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#using-the-khronos-documentation",children:"Using The Khronos Documentation"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#debugging-in-opengl",children:"Debugging In OpenGL"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#the-opengl-state-machine",children:"The OpenGL State Machine"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#qt-creator-opengl-functions",children:"Qt Creator OpenGL functions"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#intializegl",children:"intializeGL"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#paintgl",children:"paintGL"})})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#vertex-buffer-objects",children:"Vertex Buffer Objects"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#creating-a-vertex-buffer-object",children:"Creating A Vertex Buffer Object"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#adding-data",children:"Adding Data"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#binding-a-vbo",children:"Binding A VBO"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#defining-a-triangle",children:"Defining A Triangle"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#putting-data-into-a-vbo",children:"Putting Data Into A VBO"})})]})]})]})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#vertex-array-objects",children:"Vertex Array Objects"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#vertex-attributes",children:"Vertex Attributes"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#creating-a-vao",children:"Creating A VAO"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#binding-a-vao",children:"Binding A VAO"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#utilizing-a-vao",children:"Utilizing A VAO"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#unbinding-objects",children:"Unbinding Objects"})}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#drawing-in-opengl",children:"Drawing In OpenGL"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#drawing-overview",children:"Drawing Overview"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#the-gldrawarrays-call",children:"The glDrawArrays Call"})})]})]}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#memory-management",children:"Memory Management"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#end",children:"End"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#submission",children:"Submission"})})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"lab-9-vbos--vaos",children:e.exports.jsx(t.a,{href:"#lab-9-vbos--vaos",children:"Lab 9: VBOs & VAOs"})}),`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://classroom.github.com/a/Y8TTg_o8",target:"_blank",rel:"noopener noreferrer",children:"Github Classroom assignment"})}),`
`,e.exports.jsx(t.div,{className:"task-no-number-callout callout",children:e.exports.jsxs(t.p,{children:["Please put your answers to written questions in this lab, if any, in a Markdown file named ",e.exports.jsx(t.code,{children:"README.md"})," in your lab repo."]})}),`
`,e.exports.jsx(t.h2,{id:"introduction",children:e.exports.jsx(t.a,{href:"#introduction",children:"Introduction"})}),`
`,e.exports.jsx(t.p,{children:"Welcome to the world of OpenGL!"}),`
`,e.exports.jsx(t.p,{children:`In the last lab, you learned how to construct vertex data for various shapes and put them into a container as continuous floats.
What you didn't know is that this representation is actually how OpenGL stores its vertex data as well!`}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab11/pipeline.png",alt:"TODO"}],figNumber:1,targetWidth:"100%",figCaption:"The OpenGL pipeline."}),`
`,e.exports.jsx(t.h3,{id:"objectives",children:e.exports.jsx(t.a,{href:"#objectives",children:"Objectives"})}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:["Understand what ",e.exports.jsx(t.strong,{children:"vertex buffer objects"})," and ",e.exports.jsx(t.strong,{children:"vertex array objects"})," are, and how to use them,"]}),`
`,e.exports.jsxs(t.li,{children:["Learn about ",e.exports.jsx(t.strong,{children:"per-vertex attributes"})," and ",e.exports.jsx(t.strong,{children:"layouts"}),", and"]}),`
`,e.exports.jsx(t.li,{children:"Draw triangle meshes (which you have been creating in the last lab!)"}),`
`]}),`
`,e.exports.jsx(t.h3,{id:"stencil-code",children:e.exports.jsx(t.a,{href:"#stencil-code",children:"Stencil Code"})}),`
`,e.exports.jsx(t.p,{children:"In this lab, you will be working primarily within the following files:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.code,{children:"debug.h"}),": Contains a namespace with a single function ",e.exports.jsx(t.code,{children:"glErrorCheck"})," which you use in task 2."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.code,{children:"glrenderer.cpp"}),": in particular, the function ",e.exports.jsx(t.code,{children:"initializeGL"})," which gets everything setup to render, and the function ",e.exports.jsx(t.code,{children:"paintGL"}),' which is called "every" frame to perform the actual rendering.']}),`
`]}),`
`,e.exports.jsx(t.p,{children:"We have already included the following functionality for you:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["A ",e.exports.jsx(t.code,{children:"shaderLoader"})," to read and compile the shader source files."]}),`
`,e.exports.jsx(t.li,{children:"A default shader that is already loaded and bound/deleted in appropriate places."}),`
`,e.exports.jsx(t.li,{children:"Setting up QT OpenGL context to draw in."}),`
`]}),`
`,e.exports.jsx(t.h2,{id:"getting-started-with-opengl",children:e.exports.jsx(t.a,{href:"#getting-started-with-opengl",children:"Getting Started With OpenGL"})}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Be aware:"})," in this lab, you will not be able to see any (meaningful) visual output until you complete the final drawing task."]})}),`
`,e.exports.jsxs(t.p,{children:["In the code you wrote for the last lab, your mesh data was stored in C++ structures on the ",e.exports.jsx(t.em,{children:"CPU"}),". In this lab you will create OpenGL specific objects to both store and describe the data that can be used for drawing on the ",e.exports.jsx(t.em,{children:"GPU"}),"."]}),`
`,e.exports.jsxs(t.p,{children:["These objects are: ",e.exports.jsx(t.strong,{children:"Vertex Buffer Objects"})," (",e.exports.jsx(t.strong,{children:"VBOs"}),") and ",e.exports.jsx(t.strong,{children:"Vertex Array Objects"})," (",e.exports.jsx(t.strong,{children:"VAOs"}),")."]}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/VBO_VAO_Overview.png",alt:"TODO"}],figNumber:2,targetWidth:"100%",figCaption:"Visualization of a vertex buffer object (VBO) and a vertex array object (VAO). The VBO stores per-vertex attributes (in this case, 3 floats for position and 3 floats for color), and the VAO contains information about how these attributes are laid out in the VBO."}),`
`,e.exports.jsx(t.p,{children:"At the moment, you can think of a VBO as a dumb container, like a C++ vector or array: it doesn't have any semantic understanding of the data that it contains."}),`
`,e.exports.jsx(t.p,{children:'This understanding is provided by a VAO, which acts as a "translation manual". A VAO tells the GPU what data is in its associated VBO, and what format that data is in.'}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsx(t.p,{children:'Despite VAO having "array" in its name, it is the VBO, and not the VAO, which is the array of per-vertex values.'})}),`
`,e.exports.jsx(t.h3,{id:"using-the-khronos-documentation",children:e.exports.jsx(t.a,{href:"#using-the-khronos-documentation",children:"Using The Khronos Documentation"})}),`
`,e.exports.jsx(t.p,{children:"When learning a new application programming interface (API), it's always good practice to explore its documentation."}),`
`,e.exports.jsxs(t.p,{children:["APIs are described by their ",e.exports.jsx(t.em,{children:"specifications"}),", which tell you how they can be used. OpenGL is no exception: it is maintained by the Khronos group, which also provides extensive documentation on its functions (for all OpenGL versions)."]}),`
`,e.exports.jsx(t.div,{className:"success-callout callout",children:e.exports.jsxs(t.p,{children:["The home page for the OpenGL 3.1 specification can be found ",e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"While our project stencil code is configured to use the newer OpenGL 4.1, all the OpenGL functions we will be using are contained within the OpenGL 3.1 spec."}),`
`,e.exports.jsx(t.p,{children:"Let's take a look at a function to see what the docs tell us about it!"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Find the function ",e.exports.jsx(t.code,{children:"glGetError()"})," and open its documentation."]})}),`
`,e.exports.jsx(t.p,{children:"Pay attention to the different sections:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsxs(t.li,{children:["The first section, ",e.exports.jsx(t.strong,{children:"Name"}),", gives the function name along with a very short description of what it does. If you are trying to understand a new function, you will almost always have to dig deeper."]}),`
`,e.exports.jsxs(t.li,{children:["The second section, ",e.exports.jsx(t.strong,{children:"C Specification"}),", gives the type signature of the function in question."]}),`
`,e.exports.jsxs(t.li,{children:["In cases where a function has input parameters, there will be an intermediate section titled ",e.exports.jsx(t.strong,{children:"Parameters"})," which gives short descriptions of each input parameter and (occasionally) what values they can take on."]}),`
`,e.exports.jsxs(t.li,{children:["The third section, ",e.exports.jsx(t.strong,{children:"Description"}),", gives you much more information about how the function is used and sometimes information about the parameters in question (such as the OpenGL error enums as we see here)."]}),`
`,e.exports.jsxs(t.li,{children:["The fourth section, ",e.exports.jsx(t.strong,{children:"API Version Support"}),", tells us in which OpenGL versions this function can be called. All of the functions we will require you to use in your labs and projects will be supported in OpenGL 3.1, but you may want to check this section if you use any other functions (e.g. for extra credit features)."]}),`
`]}),`
`,e.exports.jsx(t.div,{className:"success-callout callout",children:e.exports.jsxs(t.p,{children:["While working on this lab (and all subsequent CS 1230 assignments), we ",e.exports.jsx(t.em,{children:"strongly"})," recommend having the docs open in another tab for reference. For each function we explain, we'll also link to their relevant page in the docs."]})}),`
`,e.exports.jsx(t.h3,{id:"debugging-in-opengl",children:e.exports.jsx(t.a,{href:"#debugging-in-opengl",children:"Debugging In OpenGL"})}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:["In this section, you will be working in ",e.exports.jsx(t.code,{children:"debug.h"}),"."]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"Any time OpenGL is incorrectly used, instead of crashing the program, you might be presented with a blank screen with no error messages. That'd make it really difficult to debug things. Luckily, OpenGL does some work behind the scenes for us."}),`
`,e.exports.jsxs(t.p,{children:["Each time OpenGL detects a function has been used incorrectly, it will set an error flag behind the scenes. But how do we know what error flags are currently set? In the previous section, you looked at the documentation for a function called ",e.exports.jsx(t.code,{children:"glGetError"}),". This function will return one of these stored error flags and clear it from storage. Unfortunately, the order in which flags are returned is random, so the best way to overcome this if you encounter errors is to check the flags and check them often."]}),`
`,e.exports.jsxs(t.p,{children:[`In addition to this, each time you check for errors, it is important to call glGetError in
a loop until it returns `,e.exports.jsx(t.code,{children:"GL_NO_ERROR"})," indicating all errors have been cleared. In ",e.exports.jsx(t.code,{children:"debug.h"}),`,
we have provided you the following function which does this:`]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsxs(t.code,{className:"code-highlight",children:[e.exports.jsx(t.span,{className:"code-line",children:`inline void glErrorCheck(){
`}),e.exports.jsx(t.span,{className:"code-line",children:`  GLenum error = glGetError();
`}),e.exports.jsx(t.span,{className:"code-line",children:`  while(error != GL_NO_ERROR){
`}),e.exports.jsx(t.span,{className:"code-line",children:`    std::cout<<error<<std::endl;
`}),e.exports.jsx(t.span,{className:"code-line",children:`    error = glGetError();
`}),e.exports.jsx(t.span,{className:"code-line",children:`  }
`}),e.exports.jsx(t.span,{className:"code-line",children:`}
`})]})}),`
`,e.exports.jsx(t.div,{className:"success-callout callout",children:e.exports.jsxs(t.p,{children:["Feel free to use this header file in your OpenGL projects. You are not expected to understand ",e.exports.jsx(t.strong,{children:"namespace"})," and ",e.exports.jsx(t.strong,{children:"inline"}),"; to use the ",e.exports.jsx(t.code,{children:"glErrorCheck"})," function in another file, just include this header file and call the function as ",e.exports.jsx(t.code,{children:"Debug::glErrorCheck()"}),"."]})}),`
`,e.exports.jsx(t.p,{children:"This function is very useful! However, if we call it multiple times in different locations throught our program, it can be difficult to determine which call is producing an error."}),`
`,e.exports.jsx(t.p,{children:"Let's change our function to take in a file name and line number so we can include that information when we print out errors:"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Add two input parameters to the ",e.exports.jsx(t.code,{children:"glErrorCheck"})," function, the first being a ",e.exports.jsx(t.code,{children:"const char*"})," for the file name, and the second being an ",e.exports.jsx(t.code,{children:"int"})," for the line number. Edit the print statement to include this information to make the debug statements more descriptive (Include the file name and line number)."]})}),`
`,e.exports.jsxs(t.p,{children:["This is great, but it's a pain to manually type out the file name and line number every time we call the function. Luckily, C++ provides two preprocessor macros, ",e.exports.jsx(t.code,{children:"__LINE__"})," and ",e.exports.jsx(t.code,{children:"__FILE__"}),`, which get replaced at
compile time to an int of the current line number and char* of the current file name, respectively.`]}),`
`,e.exports.jsx(t.p,{children:"As such, each time you call this function, you could instead write:"}),`
`,e.exports.jsx(t.pre,{className:"language-cpp",children:e.exports.jsx(t.code,{className:"language-cpp code-highlight",children:e.exports.jsxs(t.span,{className:"code-line",children:[e.exports.jsx(t.span,{className:"pl-en",children:"Debug::glErrorCheck"}),`(__FILE__, __LINE__);
`]})})}),`
`,e.exports.jsxs(t.p,{children:["We can make this even simpler by using something called a ",e.exports.jsx(t.strong,{children:"preprocessor directive"}),". A preprocessor directive is indicated by the use of a hash symbol in the beginning. You're already be familiar with at least one such directory: ",e.exports.jsx(t.code,{children:"#include"}),"."]}),`
`,e.exports.jsxs(t.p,{children:["The preprocessor directive we will be using is called ",e.exports.jsx(t.code,{children:"#define"}),". This has a signature of:"]}),`
`,e.exports.jsx(t.pre,{className:"language-cpp",children:e.exports.jsx(t.code,{className:"language-cpp code-highlight",children:e.exports.jsxs(t.span,{className:"code-line",children:["#",e.exports.jsx(t.span,{className:"pl-k",children:"define"})," ",e.exports.jsx(t.span,{className:"pl-en",children:"identifier"}),` replacement
`]})})}),`
`,e.exports.jsx(t.p,{children:`The way it works is that the preproccessor will replace every instance of the identifier in the
code with what is put in the replacement.`}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["After defining our ",e.exports.jsx(t.code,{children:"glErrorCheck"})," function, add the following preprocessor directive:"]}),e.exports.jsx(t.pre,{className:"language-cpp",children:e.exports.jsx(t.code,{className:"language-cpp code-highlight",children:e.exports.jsxs(t.span,{className:"code-line",children:["#",e.exports.jsx(t.span,{className:"pl-k",children:"define"})," ",e.exports.jsx(t.span,{className:"pl-en",children:"glErrorCheck"}),`() glErrorCheck(__FILE__, __LINE__)
`]})})})]}),`
`,e.exports.jsx(t.p,{children:`Now we can call the function with no arguments (just as we did originally), and the preprocessor
will do the tedious work of writing in the arguments for us.`}),`
`,e.exports.jsx(t.h3,{id:"the-opengl-state-machine",children:e.exports.jsx(t.a,{href:"#the-opengl-state-machine",children:"The OpenGL State Machine"})}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:["For the rest of this lab, you will be working in ",e.exports.jsx(t.code,{children:"glRenderer.cpp"}),"."]}),`
`]}),`
`,e.exports.jsxs(t.p,{children:[`Instead of defining a bunch of instances of objects and calling methods on them directly,
OpenGL functions as a `,e.exports.jsx(t.strong,{children:"state machine"}),`. This means that it keeps track of some overarching
meta-object with different settings and conditions which affects every operation it performs.
In OpenGL, this meta-object is called the `,e.exports.jsx(t.strong,{children:"context"}),`.
Thus, you will have to change your programming mindset when working with at OpenGL
functions.`]}),`
`,e.exports.jsx(t.p,{children:'There are 2 "genres" of functions you will work with:'}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"State-Setting"}),": a function which changes the state of the current OpenGL context."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"State-Using"}),": a function which uses the current state parameters in order to achieve an output."]}),`
`]}),`
`,e.exports.jsxs(t.p,{children:[`Just how action and comedy came together to bring us the Spy Kids film franchise, these function "genres" are
`,e.exports.jsx(t.strong,{children:"NOT"})," mutually exclusive: some functions will do both state setting and state using."]}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/State_Machine.png",alt:"TODO"}],figNumber:3,targetWidth:"100%",children:e.exports.jsxs(t.p,{children:["Visualization of the OpenGL State Machine. Here, we show how using the state setting function ",e.exports.jsx(t.code,{children:"glClearColor"})," changes the state of the context, and how using the state using function ",e.exports.jsx(t.code,{children:"glClear"})," uses the state of the context to clear the screen to a particular color."]})}),`
`,e.exports.jsx(t.p,{children:"It is important to be careful about managing OpenGL's state during the execution of your programs. There are two strategies for this:"}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Assume Nothing:"})," When writing a function that uses OpenGL, consider that the state could be anything. Explicitly set the values of the state parameters you depend on."]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Default Configuration:"})," Decide on a set of reasonable default state values, and set the state to these values at the start of your application. Anywhere you change one of these state parameters, restore the parameter to its previous value after you're done rendering a component of the scene."]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"For the purposes of these labs, we will primarily be using the second option."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Search the docs for the ",e.exports.jsx(t.code,{children:"glClearColor"})," function and call it at the start of ",e.exports.jsx(t.code,{children:"initializeGL()"})," to ",e.exports.jsx(t.strong,{children:"set our default state"})," and change the background color to anything you like! Run the program to see what it does."]})}),`
`,e.exports.jsx(t.h2,{id:"qt-creator-opengl-functions",children:e.exports.jsx(t.a,{href:"#qt-creator-opengl-functions",children:"Qt Creator OpenGL functions"})}),`
`,e.exports.jsx(t.p,{children:"Before continuing, with knowledge of what the OpenGL state machine or context is, we can now greater understand Qt's inner workings and some of its OpenGL-specific functions."}),`
`,e.exports.jsx(t.h3,{id:"intializegl",children:e.exports.jsx(t.a,{href:"#intializegl",children:e.exports.jsx(t.code,{children:"intializeGL"})})}),`
`,e.exports.jsxs(t.p,{children:["This is called once near the start of the program ",e.exports.jsx(t.strong,{children:"after"})," the constructor of ",e.exports.jsx(t.code,{children:"glrenderer.cpp"})," has been called. It also is called before the first call to ",e.exports.jsx(t.code,{children:"paintGL()"}),". However, you ",e.exports.jsx(t.strong,{children:"cannot"})," use any draw calls in this function. Rather, we use it to initialize any OpenGL related information we may need, ",e.exports.jsx(t.strong,{children:"after"})," the GLEW initialization calls as commented."]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What is GLEW?"}),e.exports.jsxs(t.p,{children:[e.exports.jsx(t.a,{href:"https://glew.sourceforge.net/",target:"_blank",rel:"noopener noreferrer",children:"GLEW (GL Extension Wrangler Library)"})," is an ",e.exports.jsx(t.em,{children:"extension loading library"}),". Its purpose is to determine at run-time which OpenGL features are available (version and extensions) and to load function definitions from your graphics driver for you to use."]})]}),`
`,e.exports.jsx(t.h3,{id:"paintgl",children:e.exports.jsx(t.a,{href:"#paintgl",children:e.exports.jsx(t.code,{children:"paintGL"})})}),`
`,e.exports.jsx(t.p,{children:"This is called whenever the OpenGL context changes, i.e. when you make some state-altering OpenGL call. This is an optimization Qt makes to not redraw a screen that isn't any different than before."}),`
`,e.exports.jsx(t.h2,{id:"vertex-buffer-objects",children:e.exports.jsx(t.a,{href:"#vertex-buffer-objects",children:"Vertex Buffer Objects"})}),`
`,e.exports.jsx(t.p,{children:"Shapes in OpenGL are broken down into a collection of triangles, each of which is defined by three vertices. So far, we have been processing all of our scene data on the CPU, but in order to draw using OpenGL, we need to send a list of vertices to the GPU. We'll use Vertex Buffer Objects (VBOs) to do this."}),`
`,e.exports.jsx(t.h3,{id:"creating-a-vertex-buffer-object",children:e.exports.jsx(t.a,{href:"#creating-a-vertex-buffer-object",children:"Creating A Vertex Buffer Object"})}),`
`,e.exports.jsx(t.p,{children:"Let's jump straight in by creating a VBO!"}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["Generate a single VBO in ",e.exports.jsx(t.code,{children:"initializeGL()"})," and store its ID in ",e.exports.jsx(t.code,{children:"m_vbo"}),`. You may find the
following function useful:`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenBuffers.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glGenBuffers(GLsizei n, GLuint *buffers);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"}),":"]}),`  the number of vertex buffer objects to create.
The type GLsizei is an OpenGL alias indicating it is an integer representing some size`]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"buffers"}),":"]}),` the pointer this function will fill in with an ID for the
generated buffer. This way you can refer to it later by the same stored ID.
Multiple buffers can be filled in using a pointer to the first element of an array of
sufficient size or some pointer followed by sufficient allocated space.
GLuint is an OpenGL alias for an unsigned int.`]}),`
`]})]}),`
`,e.exports.jsx(t.h3,{id:"adding-data",children:e.exports.jsx(t.a,{href:"#adding-data",children:"Adding Data"})}),`
`,e.exports.jsx(t.h4,{id:"binding-a-vbo",children:e.exports.jsx(t.a,{href:"#binding-a-vbo",children:"Binding A VBO"})}),`
`,e.exports.jsx(t.p,{children:`Congratulations, you have made a VBO! But\u2026it currently holds no data! Let's fix that.
As said before, OpenGL is a state machine, so in order to interact with our created
buffer, we need to bind it to the current state.`}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL()"}),`, bind your previously created VBO. You may find the following function
useful:`]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindBuffer.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glBindBuffer(GLenum target, GLuint buffer);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"}),":"]}),` an enum indicating which type of buffer you are binding. For
our purposes, use `,e.exports.jsx(t.code,{children:"GL_ARRAY_BUFFER"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"buffer"}),":"]})," the ID of the buffer that should be bound (hint: remember the GLuint we created in the last step?)."]}),`
`]})]}),`
`,e.exports.jsx(t.p,{children:"Now our state is all set up to transfer data into our buffer container!"}),`
`,e.exports.jsxs(t.p,{children:["Before we do this, we actually need some data to put inside. Let's construct a ",e.exports.jsx(t.code,{children:"std::vector"})," that represents a single triangle."]}),`
`,e.exports.jsx(t.h4,{id:"defining-a-triangle",children:e.exports.jsx(t.a,{href:"#defining-a-triangle",children:"Defining A Triangle"})}),`
`,e.exports.jsx(t.p,{children:"A triangle is defined by 3 vertices. For now, let's assume that these vertices carry information only about their position. In in the last lab you worked with vertex normals, and later in this lab, you will learn about even more attributes that vertices can have."}),`
`,e.exports.jsx(t.p,{children:"As a reminder: in OpenGL, the screen is defined as in the image below:"}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/openglcoordinates.png",alt:"TODO"}],figNumber:4,targetWidth:"100%",figCaption:"OpenGL's canonical coordinate system (also known as Normalized Device Coordinates)."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Pick 3 points that would make a nice triangle. Set the ",e.exports.jsx(t.code,{children:"z"})," values for all of these points to ",e.exports.jsx(t.code,{children:"0"}),"."]})}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsx(t.p,{children:"Remember that in OpenGL, triangles are defined with vertices ordered counter-clockwise. Revisit lab 8 if you need to"})}),`
`,e.exports.jsx(t.h4,{id:"putting-data-into-a-vbo",children:e.exports.jsx(t.a,{href:"#putting-data-into-a-vbo",children:"Putting Data Into A VBO"})}),`
`,e.exports.jsx(t.p,{children:`Now how will we actually put this information into our VBO? Let's take a
look at the function to do so first:`}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBufferData.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glBufferData(GLenum target, GLsizeiptr size, const void *data, GLenum usage);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"target"}),":"]})," This is the same argument seen in ",e.exports.jsx(t.code,{children:"glBindBuffer"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"size"}),":"]})," the size, in ",e.exports.jsx(t.strong,{children:"bytes"}),", of the input data array. Something like ",e.exports.jsx(t.code,{children:"sizeof(GLfloat) * data.size()"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"data"}),":"]})," a pointer to the first element of the input data array."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"usage"}),":"]}),` an OpenGL enum representing how the data will be used. For
our purposes, the usage parameter should be `,e.exports.jsx(t.code,{children:"GL_STATIC_DRAW"}),` which indicates we don't
expect to change the data, so OpenGL can make optimizations based on that.`]}),`
`]}),`
`,e.exports.jsxs(t.p,{children:["Lets take a closer look at the ",e.exports.jsx(t.code,{children:"data"})," parameter. The function expects a pointer to an input data array, but we don't have that array yet! Let's use a ",e.exports.jsx(t.code,{children:"std::vector"})," to construct our data container. In OpenGL, rather than separating out values for each individual vertex, it expects all of them mashed together into one contiguous collection (as you did in the previous lab). The VAO (which you will learn about soon) keeps track of where the attributes are for us!"]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL()"}),", construct a ",e.exports.jsx(t.code,{children:"std::vector<GLfloat>"}),` containing your three triangle points in a contiguous
series of floats.`]})}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What is GLfloat?"}),e.exports.jsx(t.p,{children:"Because some data types are inconsistent in size across different operating systems, OpenGL likes to standardize them with its own custom types. In OpenGL, GLfloat will always store 4 bytes of data."})]}),`
`,e.exports.jsxs(t.p,{children:["To obtain the pointer required by the ",e.exports.jsx(t.code,{children:"data"})," argument to ",e.exports.jsx(t.code,{children:"glBufferData"}),", we can use the ",e.exports.jsx(t.code,{children:"data()"})," method of the ",e.exports.jsx(t.code,{children:"std::vector"}),`
object. This will return a pointer to the first element as needed.`]}),`
`,e.exports.jsxs(t.p,{children:["For ",e.exports.jsx(t.code,{children:"size"}),`, while we can manually input the size of our data, it is much easier
to let the program calculate that for us. The size of our data is going to be equal to:`]}),`
`,e.exports.jsx(t.div,{className:"math math-display",children:e.exports.jsx(t["mjx-container"],{className:"MathJax",jax:"SVG",display:"true",children:e.exports.jsxs(t.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"41.578ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18377.4 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[e.exports.jsxs(t.defs,{children:[e.exports.jsx(t.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-6C",d:"M42 46H56Q95 46 103 60V68Q103 77 103 91T103 124T104 167T104 217T104 272T104 329Q104 366 104 407T104 482T104 542T103 586T103 603Q100 622 89 628T44 637H26V660Q26 683 28 683L38 684Q48 685 67 686T104 688Q121 689 141 690T171 693T182 694H185V379Q185 62 186 60Q190 52 198 49Q219 46 247 46H263V0H255L232 1Q209 2 183 2T145 3T107 3T57 1L34 0H26V46H42Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-65",d:"M28 218Q28 273 48 318T98 391T163 433T229 448Q282 448 320 430T378 380T406 316T415 245Q415 238 408 231H126V216Q126 68 226 36Q246 30 270 30Q312 30 342 62Q359 79 369 104L379 128Q382 131 395 131H398Q415 131 415 121Q415 117 412 108Q393 53 349 21T250 -11Q155 -11 92 58T28 218ZM333 275Q322 403 238 411H236Q228 411 220 410T195 402T166 381T143 340T127 274V267H333V275Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-6E",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-67",d:"M329 409Q373 453 429 453Q459 453 472 434T485 396Q485 382 476 371T449 360Q416 360 412 390Q410 404 415 411Q415 412 416 414V415Q388 412 363 393Q355 388 355 386Q355 385 359 381T368 369T379 351T388 325T392 292Q392 230 343 187T222 143Q172 143 123 171Q112 153 112 133Q112 98 138 81Q147 75 155 75T227 73Q311 72 335 67Q396 58 431 26Q470 -13 470 -72Q470 -139 392 -175Q332 -206 250 -206Q167 -206 107 -175Q29 -140 29 -75Q29 -39 50 -15T92 18L103 24Q67 55 67 108Q67 155 96 193Q52 237 52 292Q52 355 102 398T223 442Q274 442 318 416L329 409ZM299 343Q294 371 273 387T221 404Q192 404 171 388T145 343Q142 326 142 292Q142 248 149 227T179 192Q196 182 222 182Q244 182 260 189T283 207T294 227T299 242Q302 258 302 292T299 343ZM403 -75Q403 -50 389 -34T348 -11T299 -2T245 0H218Q151 0 138 -6Q118 -15 107 -34T95 -74Q95 -84 101 -97T122 -127T170 -155T250 -167Q319 -167 361 -139T403 -75Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-74",d:"M27 422Q80 426 109 478T141 600V615H181V431H316V385H181V241Q182 116 182 100T189 68Q203 29 238 29Q282 29 292 100Q293 108 293 146V181H333V146V134Q333 57 291 17Q264 -10 221 -10Q187 -10 162 2T124 33T105 68T98 100Q97 107 97 248V385H18V422H27Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-68",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 124T102 167T103 217T103 272T103 329Q103 366 103 407T103 482T102 542T102 586T102 603Q99 622 88 628T43 637H25V660Q25 683 27 683L37 684Q47 685 66 686T103 688Q120 689 140 690T170 693T181 694H184V367Q244 442 328 442Q451 442 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-20",d:""}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-6F",d:"M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-66",d:"M273 0Q255 3 146 3Q43 3 34 0H26V46H42Q70 46 91 49Q99 52 103 60Q104 62 104 224V385H33V431H104V497L105 564L107 574Q126 639 171 668T266 704Q267 704 275 704T289 705Q330 702 351 679T372 627Q372 604 358 590T321 576T284 590T270 627Q270 647 288 667H284Q280 668 273 668Q245 668 223 647T189 592Q183 572 182 497V431H293V385H185V225Q185 63 186 61T189 57T194 54T199 51T206 49T213 48T222 47T231 47T241 46T251 46H282V0H273Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-64",d:"M376 495Q376 511 376 535T377 568Q377 613 367 624T316 637H298V660Q298 683 300 683L310 684Q320 685 339 686T376 688Q393 689 413 690T443 693T454 694H457V390Q457 84 458 81Q461 61 472 55T517 46H535V0Q533 0 459 -5T380 -11H373V44L365 37Q307 -11 235 -11Q158 -11 96 50T34 215Q34 315 97 378T244 442Q319 442 376 393V495ZM373 342Q328 405 260 405Q211 405 173 369Q146 341 139 305T131 211Q131 155 138 120T173 59Q203 26 251 26Q322 26 373 103V342Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-61",d:"M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-2217",d:"M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-73",d:"M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-69",d:"M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-7A",d:"M42 263Q44 270 48 345T53 423V431H393Q399 425 399 415Q399 403 398 402L381 378Q364 355 331 309T265 220L134 41L182 40H206Q254 40 283 46T331 77Q352 105 359 185L361 201Q361 202 381 202H401V196Q401 195 393 103T384 6V0H209L34 1L31 3Q28 8 28 17Q28 30 29 31T160 210T294 394H236Q169 393 152 388Q127 382 113 367Q89 344 82 264V255H42V263Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-72",d:"M36 46H50Q89 46 97 60V68Q97 77 97 91T98 122T98 161T98 203Q98 234 98 269T98 328L97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 60 434T96 436Q112 437 131 438T160 441T171 442H174V373Q213 441 271 441H277Q322 441 343 419T364 373Q364 352 351 337T313 322Q288 322 276 338T263 372Q263 381 265 388T270 400T273 405Q271 407 250 401Q234 393 226 386Q179 341 179 207V154Q179 141 179 127T179 101T180 81T180 66V61Q181 59 183 57T188 54T193 51T200 49T207 48T216 47T225 47T235 46T245 46H276V0H267Q249 3 140 3Q37 3 28 0H20V46H36Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-79",d:"M69 -66Q91 -66 104 -80T118 -116Q118 -134 109 -145T91 -160Q84 -163 97 -166Q104 -168 111 -168Q131 -168 148 -159T175 -138T197 -106T213 -75T225 -43L242 0L170 183Q150 233 125 297Q101 358 96 368T80 381Q79 382 78 382Q66 385 34 385H19V431H26L46 430Q65 430 88 429T122 428Q129 428 142 428T171 429T200 430T224 430L233 431H241V385H232Q183 385 185 366L286 112Q286 113 332 227L376 341V350Q376 365 366 373T348 383T334 385H331V431H337H344Q351 431 361 431T382 430T405 429T422 429Q477 429 503 431H508V385H497Q441 380 422 345Q420 343 378 235T289 9T227 -131Q180 -204 113 -204Q69 -204 44 -177T19 -116Q19 -89 35 -78T69 -66Z"}),e.exports.jsx(t.path,{id:"MJX-1-TEX-N-70",d:"M36 -148H50Q89 -148 97 -134V-126Q97 -119 97 -107T97 -77T98 -38T98 6T98 55T98 106Q98 140 98 177T98 243T98 296T97 335T97 351Q94 370 83 376T38 385H20V408Q20 431 22 431L32 432Q42 433 61 434T98 436Q115 437 135 438T165 441T176 442H179V416L180 390L188 397Q247 441 326 441Q407 441 464 377T522 216Q522 115 457 52T310 -11Q242 -11 190 33L182 40V-45V-101Q182 -128 184 -134T195 -145Q216 -148 244 -148H260V-194H252L228 -193Q205 -192 178 -192T140 -191Q37 -191 28 -194H20V-148H36ZM424 218Q424 292 390 347T305 402Q234 402 182 337V98Q222 26 294 26Q345 26 384 80T424 218Z"})]}),e.exports.jsx(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:e.exports.jsxs(t.g,{"data-mml-node":"math",children:[e.exports.jsxs(t.g,{"data-mml-node":"mtext",children:[e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"}),e.exports.jsx(t.use,{"data-c":"6C",xlinkHref:"#MJX-1-TEX-N-6C",transform:"translate(389,0)"}),e.exports.jsx(t.use,{"data-c":"65",xlinkHref:"#MJX-1-TEX-N-65",transform:"translate(667,0)"}),e.exports.jsx(t.use,{"data-c":"6E",xlinkHref:"#MJX-1-TEX-N-6E",transform:"translate(1111,0)"}),e.exports.jsx(t.use,{"data-c":"67",xlinkHref:"#MJX-1-TEX-N-67",transform:"translate(1667,0)"}),e.exports.jsx(t.use,{"data-c":"74",xlinkHref:"#MJX-1-TEX-N-74",transform:"translate(2167,0)"}),e.exports.jsx(t.use,{"data-c":"68",xlinkHref:"#MJX-1-TEX-N-68",transform:"translate(2556,0)"}),e.exports.jsx(t.use,{"data-c":"20",xlinkHref:"#MJX-1-TEX-N-20",transform:"translate(3112,0)"}),e.exports.jsx(t.use,{"data-c":"6F",xlinkHref:"#MJX-1-TEX-N-6F",transform:"translate(3362,0)"}),e.exports.jsx(t.use,{"data-c":"66",xlinkHref:"#MJX-1-TEX-N-66",transform:"translate(3862,0)"}),e.exports.jsx(t.use,{"data-c":"20",xlinkHref:"#MJX-1-TEX-N-20",transform:"translate(4168,0)"}),e.exports.jsx(t.use,{"data-c":"64",xlinkHref:"#MJX-1-TEX-N-64",transform:"translate(4418,0)"}),e.exports.jsx(t.use,{"data-c":"61",xlinkHref:"#MJX-1-TEX-N-61",transform:"translate(4974,0)"}),e.exports.jsx(t.use,{"data-c":"74",xlinkHref:"#MJX-1-TEX-N-74",transform:"translate(5474,0)"}),e.exports.jsx(t.use,{"data-c":"61",xlinkHref:"#MJX-1-TEX-N-61",transform:"translate(5863,0)"}),e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29",transform:"translate(6363,0)"})]}),e.exports.jsx(t.g,{"data-mml-node":"mo",transform:"translate(6974.2,0)",children:e.exports.jsx(t.use,{"data-c":"2217",xlinkHref:"#MJX-1-TEX-N-2217"})}),e.exports.jsxs(t.g,{"data-mml-node":"mtext",transform:"translate(7696.4,0)",children:[e.exports.jsx(t.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"}),e.exports.jsx(t.use,{"data-c":"73",xlinkHref:"#MJX-1-TEX-N-73",transform:"translate(389,0)"}),e.exports.jsx(t.use,{"data-c":"69",xlinkHref:"#MJX-1-TEX-N-69",transform:"translate(783,0)"}),e.exports.jsx(t.use,{"data-c":"7A",xlinkHref:"#MJX-1-TEX-N-7A",transform:"translate(1061,0)"}),e.exports.jsx(t.use,{"data-c":"65",xlinkHref:"#MJX-1-TEX-N-65",transform:"translate(1505,0)"}),e.exports.jsx(t.use,{"data-c":"20",xlinkHref:"#MJX-1-TEX-N-20",transform:"translate(1949,0)"}),e.exports.jsx(t.use,{"data-c":"6F",xlinkHref:"#MJX-1-TEX-N-6F",transform:"translate(2199,0)"}),e.exports.jsx(t.use,{"data-c":"66",xlinkHref:"#MJX-1-TEX-N-66",transform:"translate(2699,0)"}),e.exports.jsx(t.use,{"data-c":"20",xlinkHref:"#MJX-1-TEX-N-20",transform:"translate(3005,0)"}),e.exports.jsx(t.use,{"data-c":"73",xlinkHref:"#MJX-1-TEX-N-73",transform:"translate(3255,0)"}),e.exports.jsx(t.use,{"data-c":"74",xlinkHref:"#MJX-1-TEX-N-74",transform:"translate(3649,0)"}),e.exports.jsx(t.use,{"data-c":"6F",xlinkHref:"#MJX-1-TEX-N-6F",transform:"translate(4038,0)"}),e.exports.jsx(t.use,{"data-c":"72",xlinkHref:"#MJX-1-TEX-N-72",transform:"translate(4538,0)"}),e.exports.jsx(t.use,{"data-c":"65",xlinkHref:"#MJX-1-TEX-N-65",transform:"translate(4930,0)"}),e.exports.jsx(t.use,{"data-c":"64",xlinkHref:"#MJX-1-TEX-N-64",transform:"translate(5374,0)"}),e.exports.jsx(t.use,{"data-c":"20",xlinkHref:"#MJX-1-TEX-N-20",transform:"translate(5930,0)"}),e.exports.jsx(t.use,{"data-c":"64",xlinkHref:"#MJX-1-TEX-N-64",transform:"translate(6180,0)"}),e.exports.jsx(t.use,{"data-c":"61",xlinkHref:"#MJX-1-TEX-N-61",transform:"translate(6736,0)"}),e.exports.jsx(t.use,{"data-c":"74",xlinkHref:"#MJX-1-TEX-N-74",transform:"translate(7236,0)"}),e.exports.jsx(t.use,{"data-c":"61",xlinkHref:"#MJX-1-TEX-N-61",transform:"translate(7625,0)"}),e.exports.jsx(t.use,{"data-c":"20",xlinkHref:"#MJX-1-TEX-N-20",transform:"translate(8125,0)"}),e.exports.jsx(t.use,{"data-c":"74",xlinkHref:"#MJX-1-TEX-N-74",transform:"translate(8375,0)"}),e.exports.jsx(t.use,{"data-c":"79",xlinkHref:"#MJX-1-TEX-N-79",transform:"translate(8764,0)"}),e.exports.jsx(t.use,{"data-c":"70",xlinkHref:"#MJX-1-TEX-N-70",transform:"translate(9292,0)"}),e.exports.jsx(t.use,{"data-c":"65",xlinkHref:"#MJX-1-TEX-N-65",transform:"translate(9848,0)"}),e.exports.jsx(t.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29",transform:"translate(10292,0)"})]})]})})]})})}),`
`,e.exports.jsxs(t.p,{children:["We can compute the first part using ",e.exports.jsx(t.code,{children:"std::vector"}),` methods. For the second part,
we can take advantage of the `,e.exports.jsx(t.code,{children:"sizeof()"}),` function and pass in the data type stored
in our vector (e.g. `,e.exports.jsx(t.code,{children:"sizeof(GLfloat)"}),")."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL()"}),", pass a triangle's worth of data into your VBO."]})}),`
`,e.exports.jsx(t.h2,{id:"vertex-array-objects",children:e.exports.jsx(t.a,{href:"#vertex-array-objects",children:"Vertex Array Objects"})}),`
`,e.exports.jsx(t.p,{children:"Next, we will tell OpenGL the structure of our data using something called a Vertex Array Object, or VAO for short."}),`
`,e.exports.jsx(t.h3,{id:"vertex-attributes",children:e.exports.jsx(t.a,{href:"#vertex-attributes",children:"Vertex Attributes"})}),`
`,e.exports.jsx(t.p,{children:`At the moment, the only data we have cared about is the position of each vertex.
But each vertex can have many more attributes than just its
position. Consider colors, texture coordinates, or (as you saw in the previous lab),
normals.
It is our job to tell OpenGL what attributes we care about and where to find them in the VBO.`}),`
`,e.exports.jsx(t.p,{children:"Consider again this figure, which shows a data layout containing positions and colors interleaved:"}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/VBO_VAO_Overview.png",alt:"TODO"}],figNumber:5,targetWidth:"100%",figCaption:"Visualization of a Vertex Buffer Object (VBOs) and a Vertex Array Object (VAO). The VBO stores per-vertex attributes (in this case, 3 floats for position and 3 floats for color), and the VAO contains information about how these attributes are laid out in the VBO."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Add colors of your choosing as RGB values to each vertex and integrate them into your previous triangle data vector in ",e.exports.jsx(t.code,{children:"initializeGL()"}),"."]})}),`
`,e.exports.jsxs("details",{children:[e.exports.jsxs("summary",{children:["Does your ",e.exports.jsx(t.code,{children:"std::vector"})," look familiar?"]}),e.exports.jsx(t.p,{children:`It should! This is the same format of data we worked with in the last lab.
Without knowing it, you were actually creating VBO/VAO-ready data with position
and normal attributes--keep that in mind when working on the project.`})]}),`
`,e.exports.jsx(t.h3,{id:"creating-a-vao",children:e.exports.jsx(t.a,{href:"#creating-a-vao",children:"Creating A VAO"})}),`
`,e.exports.jsx(t.p,{children:"Now let's tell OpenGL that we have this extra attribute by making a VAO!"}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL()"}),", generate a single VAO and store its id in ",e.exports.jsx(t.code,{children:"m_vao"}),". You may find the following function useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glGenVertexArrays.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glGenVertexArrays(GLsizei n, GLuint *arrays);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"}),":"]})," the number of vertex array objects to create."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"arrays"}),":"]})," the pointer this function will fill in with an ID for the generated array. Similarly to ",e.exports.jsx(t.code,{children:"glGenBuffers"}),", you can also fill in an array or segment of continuous memory with pointers to multiple vertex array objects."]}),`
`]})]}),`
`,e.exports.jsx(t.h3,{id:"binding-a-vao",children:e.exports.jsx(t.a,{href:"#binding-a-vao",children:"Binding A VAO"})}),`
`,e.exports.jsx(t.p,{children:"Next, to actually use this VAO, we need to bind it."}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"initializeGL()"}),", bind your VAO. You may find the following function useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glBindVertexArray.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glBindVertexArray(GLuint array);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"array"}),":"]})," the ID of the VAO we wish to bind"]}),`
`]})]}),`
`,e.exports.jsx(t.h3,{id:"utilizing-a-vao",children:e.exports.jsx(t.a,{href:"#utilizing-a-vao",children:"Utilizing A VAO"})}),`
`,e.exports.jsx(t.p,{children:`Now that the VAO is bound, we can actually use it to let OpenGL know the structure
of our VBO.`}),`
`,e.exports.jsxs(t.p,{children:["For ",e.exports.jsx(t.em,{children:e.exports.jsx(t.strong,{children:"each"})})," attribute, we need to do two things:"]}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"Let OpenGL know we are identifying an attribute and which one"}),`
`,e.exports.jsx(t.li,{children:"Specify the location and layout of the attribute in the VBO data."}),`
`]}),`
`,e.exports.jsx(t.p,{children:"For the first part, we rely on the following function:"}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glEnableVertexAttribArray.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glEnableVertexAttribArray(GLuint index);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"index"}),":"]}),` the index of the attribute we are identifying. By index, this
does not refer to an index into our data vector. Rather, this is just some unique unsigned integer
we use to identify each attribute. We pick this value ourselves; in the `,e.exports.jsx(t.strong,{children:"next"}),` lab, Shaders,
you will see how we use this index when doing shader programming. In `,e.exports.jsx(t.strong,{children:"this"}),` lab, because we have written
the shaders for you, we have assigned `,e.exports.jsx(t.strong,{children:"position to have index 0"})," and ",e.exports.jsx(t.strong,{children:`color to have an
index of 1`}),"."]}),`
`]}),`
`,e.exports.jsx(t.p,{children:"For the second part, we use a more complex function:"}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glVertexAttribPointer.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:`void glVertexAttribPointer(GLuint index, GLint size, GLenum type, GLboolean
normalized, GLsizei stride, const void* offset);`})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"index"}),":"]})," the same index as used in ",e.exports.jsx(t.code,{children:"glEnableVertexAttribArray"})," above."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"size"}),":"]})," the length of one vertex's instance of this attribute, ",e.exports.jsx(t.em,{children:"not"})," the size in bytes. For a position (consisting of 3 floats), this would simply be ",e.exports.jsx(t.code,{children:"3"}),". For an attribute that has 5 ints, this would be ",e.exports.jsx(t.code,{children:"5"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"type"}),":"]})," the type of variable used for each component in the attribute. For GLfloats, this would be ",e.exports.jsx(t.code,{children:"GL_FLOAT"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"normalized"}),":"]})," this parameter has to do with the types you use as data and whether you need to scale their values; for now, just use ",e.exports.jsx(t.code,{children:"GL_FALSE"}),". If you wish to know more, OpenGL specifies that having normalized set to GL_TRUE will convert any signed values to range [-1, 1] and any unsigned values to the range [0, 1]. This may be useful for converting a uint8_t to floating point representation for example."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"stride"}),":"]})," the size, in ",e.exports.jsx(t.strong,{children:"bytes"}),", between two vertices. E.g. for position, this would be the distance (in bytes) between the x coordinate of the position of the first vertex and the x coordinate of the second vertex."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"offset"}),":"]})," the offset, in ",e.exports.jsx(t.strong,{children:"bytes"}),", of the first vertex's instance of the attribute in the array of data. For example, in ",e.exports.jsx(t.a,{href:"#figure-6",children:"figure 6"})," below, the offset of the color attribute is ",e.exports.jsx(t.code,{children:"3 * sizeof(GLfloat)"}),". We ",e.exports.jsx(t.em,{children:"strongly"})," reccomend to leave the offset in (length of data) * (size of data) format to stay organized. ",e.exports.jsx(t.strong,{children:"Important:"})," To cast this offset into a ",e.exports.jsx(t.code,{children:"void *"})," (as expected by this function), we need to use ",e.exports.jsx(t.code,{children:"reinterpret_cast<void*>()"}),"."]}),`
`]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsxs("summary",{children:["What is ",e.exports.jsx(t.code,{children:"GL_FLOAT"}),"?"]}),e.exports.jsxs(t.p,{children:["GL_FLOAT is a built in OpenGL enum that is used in gl functions as an argument indicating a type of GLfloat. It ",e.exports.jsx(t.strong,{children:"should not"})," be used as a type itself! Read more ",e.exports.jsx(t.a,{href:"https://www.khronos.org/opengl/wiki/OpenGL_Type",target:"_blank",rel:"noopener noreferrer",children:"here"})," about OpenGL types."]})]}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/Stride_Offset_White_Background.png",alt:"TODO"}],figNumber:6,targetWidth:"100%",figCaption:"Visualizing how different components of a VAO specify different parts of a VBO."}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Note:"})," These two functions (",e.exports.jsx(t.code,{children:"glEnableVertexArrayAttrib"})," and ",e.exports.jsx(t.code,{children:"glVertexAttribPointer"}),") will assume they apply to whichever VBO is currently bound, so be careful of your state when using them. In fact, you can store separate attributes of the same object in different VBOs and link them together with a single VAO, as in figure 7 below:"]})}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/VAOMultiple.png",alt:"TODO"}],figNumber:7,targetWidth:"75%",figCaption:"Top: A VAO whose attributes are stored in two VBOs. Bottom: A VAO whose attributes are stored in a single VBO."}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Add the two attributes of position and color to your VAO in ",e.exports.jsx(t.code,{children:"initializeGL()"}),"."]})}),`
`,e.exports.jsx(t.h2,{id:"unbinding-objects",children:e.exports.jsx(t.a,{href:"#unbinding-objects",children:"Unbinding Objects"})}),`
`,e.exports.jsxs(t.p,{children:["Earlier, we discussed common approaches to handling the OpenGL state machine. Here, we will implement these ideas by keeping a common default state set. When we started, VBO and VAO IDs ",e.exports.jsx(t.code,{children:"0"})," were bound, which means no VBO or VAO was bound. Let's return to that starting condition before we exit the ",e.exports.jsx(t.code,{children:"initializeGL()"})," function."]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["Unbind your VBO and VAO at the end of ",e.exports.jsx(t.code,{children:"initializeGL()"}),". To do so, bind ID ",e.exports.jsx(t.code,{children:"0"}),"."]})}),`
`,e.exports.jsx(t.h2,{id:"drawing-in-opengl",children:e.exports.jsx(t.a,{href:"#drawing-in-opengl",children:"Drawing In OpenGL"})}),`
`,e.exports.jsx(t.h3,{id:"drawing-overview",children:e.exports.jsx(t.a,{href:"#drawing-overview",children:"Drawing Overview"})}),`
`,e.exports.jsx(t.p,{children:"Now, you're ready to draw the triangle you worked so hard to create."}),`
`,e.exports.jsxs(t.p,{children:["Here are the general steps you ought to follow. In this lab and for the projects, this will be done in ",e.exports.jsx(t.code,{children:"paintGL"}),":"]}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:["Clear the screen using ",e.exports.jsx(t.code,{children:"glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)"})]}),`
`,e.exports.jsxs(t.li,{children:["For each shader you want to use:",`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:["Bind the shader using ",e.exports.jsx(t.code,{children:"glUseProgram(GLuint program);"})]}),`
`,e.exports.jsxs(t.li,{children:["For each VAO you want to draw with the current shader:",`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"Bind the VAO"}),`
`,e.exports.jsxs(t.li,{children:["Draw using ",e.exports.jsx(t.code,{children:"glDrawArrays(GLenum mode, GLint first, GLsizei count)"})]}),`
`,e.exports.jsx(t.li,{children:"Unbind the VAO"}),`
`]}),`
`]}),`
`,e.exports.jsxs(t.li,{children:["Unbind the shader using ",e.exports.jsx(t.code,{children:"glUseProgram(0);"})]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsx(t.p,{children:'Notice how all operations using a specific shader or VAO are surrounded by a bind and an "unbind" call!'})}),`
`,e.exports.jsx(t.p,{children:"You will only be responsible for step 1 and steps 2.b.i through 2.b.iii. Since we're using just one shader and one VAO (in this lab), we can collapse this into a linear sequence of step.:"}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL()"}),", before ",e.exports.jsx(t.code,{children:"glUseProgram()"}),", clear the screen."]})}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"paintGL()"}),", after ",e.exports.jsx(t.code,{children:"glUseProgram()"}),", bind our VAO."]})}),`
`,e.exports.jsx(t.h3,{id:"the-gldrawarrays-call",children:e.exports.jsxs(t.a,{href:"#the-gldrawarrays-call",children:["The ",e.exports.jsx(t.code,{children:"glDrawArrays"})," Call"]})}),`
`,e.exports.jsxs(t.p,{children:["Now let's actually ",e.exports.jsx(t.em,{children:"draw"})," the VAOs."]}),`
`,e.exports.jsxs(t.div,{className:"task-callout callout",children:[e.exports.jsxs(t.p,{children:["In the middle of ",e.exports.jsx(t.code,{children:"paintGL"}),", draw our triangle. You may find the following useful:"]}),e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glDrawArrays.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.strong,{children:"void glDrawArrays(GLenum mode, GLint first, GLsizei count);"})})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"mode"}),":"]})," the type of primitive to render. In all of our assignments in CS 1230, we'll use ",e.exports.jsx(t.code,{children:"GL_TRIANGLES"}),"."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"first"}),":"]})," the starting index for OpenGL to look in our VBO (this will usually be ",e.exports.jsx(t.code,{children:"0"}),")."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"count"}),":"]})," how many vertices to draw."]}),`
`]})]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["After drawing the triangle in ",e.exports.jsx(t.code,{children:"paintGL"}),", return to default state by unbinding our VAO."]})}),`
`,e.exports.jsx(t.p,{children:"At this stage, you finally will be able see an iconic rainbow triangle somewhat similar to this:"}),`
`,e.exports.jsx(s,{images:[{src:"/labs/lab9/FinalTriangle.png",alt:"TODO"}],figNumber:8,targetWidth:"100%",figCaption:"An example of the sort of output your code should produce. The exact position, size, and color of the triangle may vary, depending on your design choices earlier in this lab."}),`
`,e.exports.jsx(t.h2,{id:"memory-management",children:e.exports.jsx(t.a,{href:"#memory-management",children:"Memory Management"})}),`
`,e.exports.jsxs(t.p,{children:["So far, by calling ",e.exports.jsx(t.code,{children:"glGenBuffers()"})," and ",e.exports.jsx(t.code,{children:"glGenVertexArrays()"}),", we have ",e.exports.jsx(t.em,{children:"allocated"})," space to store our data and objects. This memory is ",e.exports.jsx(t.strong,{children:"not"})," automatically freed when it goes out of scope."]}),`
`,e.exports.jsx(t.p,{children:`To free this memory (and avoid memory leaks), we must call on the various "glDelete()" functions at our disposal. In this lab, we'll use two of these:`}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glDeleteBuffers.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.code,{children:"glDeleteBuffers()"})}),`
which applies to VBOs, and`]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.a,{href:"https://registry.khronos.org/OpenGL-Refpages/es3.1/html/glDeleteVertexArrays.xhtml",target:"_blank",rel:"noopener noreferrer",children:e.exports.jsx(t.code,{children:"glDeleteVertexArrays()"})}),`
which applies to VAOs.`]}),`
`]}),`
`,e.exports.jsx(t.p,{children:'In general, all "glDelete()" calls follow the following pattern:'}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsx(t.p,{children:e.exports.jsx(t.code,{children:"void glDelete_______(GLsizei n, const GLuint *object);"})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"n"}),":"]})," how many of the object to delete."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsxs(t.strong,{children:[e.exports.jsx(t.code,{children:"object"}),":"]}),` a pointer to the object being deleted. Or, as we could create multiple within an array or
continuous segment of memory, the pointer to the beginning of this memory can also be passed in.`]}),`
`]}),`
`,e.exports.jsx(t.div,{className:"task-callout callout",children:e.exports.jsxs(t.p,{children:["In ",e.exports.jsx(t.code,{children:"finish()"}),", free your VBO and VAO memory."]})}),`
`,e.exports.jsx(t.h2,{id:"end",children:e.exports.jsx(t.a,{href:"#end",children:"End"})}),`
`,e.exports.jsx(t.p,{children:"Congrats on finishing the VBOs & VAOs lab! Now, it's time to submit your code and get checked off by a TA."}),`
`,e.exports.jsx(t.h2,{id:"submission",children:e.exports.jsx(t.a,{href:"#submission",children:"Submission"})}),`
`,e.exports.jsx(t.p,{children:'Submit your Github repo for this lab to the "Lab 9: VBOs & VAOs" assignment on Gradescope, then get checked off by a TA during lab hours.'}),`
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
`})]})]})}function h(r={}){const{wrapper:t}=r.components||{};return t?e.exports.jsx(t,Object.assign({},r,{children:e.exports.jsx(n,r)})):n(r)}export{h as default,c as documentProps};
