import{j as e}from"../../chunk-47a93a9e.js";import{I as o}from"../../chunk-e84bc917.js";import{M as t}from"../../chunk-9ad3b198.js";const c={title:"Preventing Memory Leaks"};function n(r){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span"},r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#preventing-memory-leaks",children:"Preventing Memory Leaks"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#valgrind-memory-analyzer",children:"Valgrind Memory Analyzer"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#preventing-memory-leaks-1",children:"Preventing Memory Leaks"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#gpu-memory-leaks",children:"GPU Memory Leaks"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"preventing-memory-leaks",children:e.exports.jsx(s.a,{href:"#preventing-memory-leaks",children:"Preventing Memory Leaks"})}),`
`,e.exports.jsx(s.p,{children:"Preventing and detecting memory leaks is a crucial part of coding in C++. This doc describes the Valgrind Memory Analyzer, a built-in tool in QtCreator that automatically detects memory leaks, as well as some design patterns to keep in mind in order to prevent memory leaks from ever happening."}),`
`,e.exports.jsx(s.h2,{id:"valgrind-memory-analyzer",children:e.exports.jsx(s.a,{href:"#valgrind-memory-analyzer",children:"Valgrind Memory Analyzer"})}),`
`,e.exports.jsx(s.p,{children:"Valgrind is a great tool for automatically detecting memory leaks, and it is built in to QtCreator. To use it, select Analyze > Valgrind Memory Analyzer."}),`
`,e.exports.jsx(o,{images:[{src:"/docs/preventing-memory-leaks/image1.png",alt:"TODO"}],figNumber:1,figCaption:"Running Valgrind Memory Analyzer in Qt"}),`
`,e.exports.jsx(s.p,{children:"This will run your program, keeping track of the memory that is allocated and freed. After the program has finished running, you will see a message indicating any leaks that occurred. In the example below, we never deleted the ConstantBrush, so 32 bytes of memory were leaked. The message points us to the exact line where this memory was allocated."}),`
`,e.exports.jsx(o,{images:[{src:"/docs/preventing-memory-leaks/image2.png",alt:"TODO"}],figNumber:2,figCaption:"Valgrind Shows 32 Bytes of Memory Leaked"}),`
`,e.exports.jsx(s.p,{children:"If no memory was leaked during the execution of your program, you will not see any messages displayed in that section, as shown below."}),`
`,e.exports.jsx(o,{images:[{src:"/docs/preventing-memory-leaks/image3.png",alt:"TODO"}],figNumber:3,figCaption:"Valgrind Shows No Bytes of Memory Leaked"}),`
`,e.exports.jsx(s.p,{children:"Note that if no messages are displayed, it does not necessarily mean that your program is leak-free. It only means that no leaks occurred during that run of the program. For example, the code below only deletes the object if myBoolean is true. If myBoolean happened to be true when running Valgrind Memory Analyzer, no leak messages would show up, but your program can still leak memory if myBoolean is false."}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:["    MyObject *object = ",e.exports.jsx(s.span,{className:"pl-k",children:"new"}),` MyObject();\r
`]}),e.exports.jsx(s.span,{className:"code-line",children:`\r
`}),e.exports.jsxs(s.span,{className:"code-line",children:["    ",e.exports.jsx(s.span,{className:"pl-k",children:"if"}),`(myBoolean) {\r
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["        ",e.exports.jsx(s.span,{className:"pl-k",children:"delete"}),` object;\r
`]}),e.exports.jsx(s.span,{className:"code-line",children:`    }
`})]})}),`
`,e.exports.jsx(s.p,{children:"Valgrind can be a very useful tool for detecting memory leaks, but it will not find them if you don\u2019t explicitly cause a certain branch of code to be executed while using it. As a result, you want to make sure you design your program such that memory leaks can be prevented in the first place."}),`
`,e.exports.jsx(s.h2,{id:"preventing-memory-leaks-1",children:e.exports.jsx(s.a,{href:"#preventing-memory-leaks-1",children:"Preventing Memory Leaks"})}),`
`,e.exports.jsxs(s.p,{children:["The rule of thumb for creating objects in C++ is that every ",e.exports.jsx(s.code,{children:"new"})," should correspond to exactly one ",e.exports.jsx(s.code,{children:"delete"}),`. You shouldn\u2019t need to worry about this if you\u2019re using smart pointers! Remember, don\u2019t allocate dynamic memory to a raw pointer. Another source of common errors is arrays/vectors. As usual, using vectors over arrays whenever possible will solve many of your problems. You might run into the issue where you access or write to indices past the length of the\r
vector. If you see unexplained segfaults, check your indices!`]}),`
`,e.exports.jsx(s.h2,{id:"gpu-memory-leaks",children:e.exports.jsx(s.a,{href:"#gpu-memory-leaks",children:"GPU Memory Leaks"})}),`
`,e.exports.jsxs(s.p,{children:["Valgrind will only catch CPU memory leaks, but you can leak GPU memory as well. To avoid this, make sure that each call to a ",e.exports.jsx(s.code,{children:"glGen*()"})," function (usually in a constructor) is matched with its corresponding ",e.exports.jsx(s.code,{children:"glDelete*()"})," function (usually in the destructor). If you\u2019re using the GL datatype classes you implemented in the labs, you probably won\u2019t need to worry about this either."]}),`
`,e.exports.jsx(t,{})]})]})}function m(r={}){const{wrapper:s}=r.components||{};return s?e.exports.jsx(s,Object.assign({},r,{children:e.exports.jsx(n,r)})):n(r)}export{m as default,c as documentProps};
