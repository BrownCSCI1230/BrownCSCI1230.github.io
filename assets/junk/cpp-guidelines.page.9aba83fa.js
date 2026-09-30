import{j as e}from"../chunk-b0d73203.js";import{M as r}from"../chunk-82f9daf4.js";const i={title:"C++ Guidelines"};function a(n){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",span:"span",strong:"strong",em:"em",ul:"ul"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#c-guidelines-for-stencil-code",children:"C++ Guidelines For Stencil Code"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#syntax--semantics",children:"Syntax & Semantics"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#use-pointers-instead-of-c-arrays",children:"Use Pointers Instead of C Arrays"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#prefer-brace-initialization-over-parenthesis-initialization",children:"Prefer Brace Initialization Over Parenthesis Initialization"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#avoid-using-constructors-where-possible",children:"Avoid Using Constructors Where Possible"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#prefer-range-for-for-looping-over-containers",children:"Prefer Range-For For Looping Over Containers"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#use-auto",children:"Use auto"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#use-type-aliases",children:"Use Type Aliases"})})]})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#naming--documentation",children:"Naming & Documentation"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#consider-your-target-audience",children:"Consider Your Target Audience"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#generally-use-names-that-describe-purpose-not-implementation",children:"Generally, Use Names That Describe Purpose, Not Implementation"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#be-wary-of-abbreviation",children:"Be Wary Of Abbreviation"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#err-on-the-side-of-verbosity",children:"Err On The Side Of Verbosity"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#comment-your-functions",children:"Comment Your Functions"})})]})]})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"c-guidelines-for-stencil-code",children:e.exports.jsx(s.a,{href:"#c-guidelines-for-stencil-code",children:"C++ Guidelines For Stencil Code"})}),`
`,e.exports.jsx(s.h2,{id:"syntax--semantics",children:e.exports.jsx(s.a,{href:"#syntax--semantics",children:"Syntax & Semantics"})}),`
`,e.exports.jsx(s.h3,{id:"use-pointers-instead-of-c-arrays",children:e.exports.jsx(s.a,{href:"#use-pointers-instead-of-c-arrays",children:"Use Pointers Instead of C Arrays"})}),`
`,e.exports.jsxs(s.p,{children:["Always use pointers instead of C arrays. This is especially relevant when dealing with ",e.exports.jsx(s.code,{children:"QImage"}),"'s data."]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:["std::",e.exports.jsx(s.span,{className:"pl-c1",children:"uint8_t"}),"[] arr ",e.exports.jsx(s.span,{className:"pl-c",children:"// bad"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["std::",e.exports.jsx(s.span,{className:"pl-c1",children:"uint8_t"}),"*  ptr ",e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]})]})}),`
`,e.exports.jsx(s.p,{children:"To access elements:"}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:["*(ptr + ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),") ",e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["ptr[",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),"]     ",e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]})]})}),`
`,e.exports.jsx(s.h3,{id:"prefer-brace-initialization-over-parenthesis-initialization",children:e.exports.jsx(s.a,{href:"#prefer-brace-initialization-over-parenthesis-initialization",children:"Prefer Brace Initialization Over Parenthesis Initialization"})}),`
`,e.exports.jsx(s.p,{children:"In general, most of your variable declarations should look like this:"}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"auto"})," x1 = Type{}; ",e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["Type x2 = Type{}; ",e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]})]})}),`
`,e.exports.jsx(s.p,{children:"We advise against the following:"}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"auto"})," y = Type(); ",e.exports.jsx(s.span,{className:"pl-c",children:"// bad"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["Type z{}; ",e.exports.jsx(s.span,{className:"pl-c",children:"// ugly, but okay"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["Type ",e.exports.jsx(s.span,{className:"pl-en",children:"w"}),"(); ",e.exports.jsx(s.span,{className:"pl-c",children:"// very bad: this does not create a variable w."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["          ",e.exports.jsx(s.span,{className:"pl-c",children:"// it declares a function w() which returns an instance of Type."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["          ",e.exports.jsx(s.span,{className:"pl-c",children:'// this is known as the "most vexing parse" in C/C++'}),`
`]})]})}),`
`,e.exports.jsx(s.h3,{id:"avoid-using-constructors-where-possible",children:e.exports.jsx(s.a,{href:"#avoid-using-constructors-where-possible",children:"Avoid Using Constructors Where Possible"})}),`
`,e.exports.jsxs(s.p,{children:["If your class/struct has a construction/initialization process which requires functionality beyond just ",e.exports.jsx(s.code,{children:"x = y, z = w, ..."}),", use an explicit initialization member function instead."]}),`
`,e.exports.jsx(s.p,{children:"This has to do with certain hard-to-debug bugs that might appear when both (1) using value semantics (passing things around by value) and (2) defining some, but not all, of a class/struct's special member functions (constructor, destructor, etc)."}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"auto"}),` x = ComplicatedThing{param1, param2, param3};
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["x.initializeSubThing(); ",e.exports.jsx(s.span,{className:"pl-c",children:"// <-- some complex operation must be done, before it can be used"}),`
`]})]})}),`
`,e.exports.jsx(s.h3,{id:"prefer-range-for-for-looping-over-containers",children:e.exports.jsx(s.a,{href:"#prefer-range-for-for-looping-over-containers",children:"Prefer Range-For For Looping Over Containers"})}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"for"})," (",e.exports.jsx(s.span,{className:"pl-k",children:"auto"}),`& x : container)
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// something involving x"}),`
`]}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// bad, unless you need i elsewhere in the loop"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"for"})," (",e.exports.jsx(s.span,{className:"pl-k",children:"auto"})," i = ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`; i < container.size(); ++i)
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// something involving container[i]"}),`
`]})]})}),`
`,e.exports.jsx(s.h3,{id:"use-auto",children:e.exports.jsxs(s.a,{href:"#use-auto",children:["Use ",e.exports.jsx(s.code,{children:"auto"})]})}),`
`,e.exports.jsxs(s.p,{children:["Feel free to use type deduction, e.g. ",e.exports.jsx(s.code,{children:"auto myVariable = myValue"}),", within function bodies."]}),`
`,e.exports.jsx(s.p,{children:"Avoid using them in function signatures where an explicit type could be used instead."}),`
`,e.exports.jsx(s.h3,{id:"use-type-aliases",children:e.exports.jsx(s.a,{href:"#use-type-aliases",children:"Use Type Aliases"})}),`
`,e.exports.jsxs(s.p,{children:["In the event that writing a long, explicit type annotation (as opposed to ",e.exports.jsx(s.code,{children:"auto"}),") is unavoidable, feel free to use a type alias instead:"]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// bad: not very readable"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["std::vector<std::array<SuperLongTypeName, ",e.exports.jsx(s.span,{className:"pl-c1",children:"123"}),`>> variable
`]}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"using"})," InnerType = std::array<SuperLongTypeName, ",e.exports.jsx(s.span,{className:"pl-c1",children:"123"}),`>;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"using"}),` ContainerType = std::vector<InnerType>;
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"auto"}),` variable = ContainerType{};
`]})]})}),`
`,e.exports.jsx(s.h2,{id:"naming--documentation",children:e.exports.jsx(s.a,{href:"#naming--documentation",children:"Naming & Documentation"})}),`
`,e.exports.jsx(s.h3,{id:"consider-your-target-audience",children:e.exports.jsx(s.a,{href:"#consider-your-target-audience",children:"Consider Your Target Audience"})}),`
`,e.exports.jsxs(s.p,{children:["Use names that would be clear to students at the ",e.exports.jsx(s.strong,{children:"expected level of knowledge"})," ",e.exports.jsx(s.em,{children:"at or before"})," the start of the assignment."]}),`
`,e.exports.jsx(s.p,{children:`E.g. if you are writing a lab that comes much earlier than the OpenGL parts of the course, avoid introducing the term "shader" in a function/variable name, as students may not appreciate its significance. Worse, they may develop an incorrect understanding of it, which they'll have to unlearn later.`}),`
`,e.exports.jsx(s.h3,{id:"generally-use-names-that-describe-purpose-not-implementation",children:e.exports.jsx(s.a,{href:"#generally-use-names-that-describe-purpose-not-implementation",children:"Generally, Use Names That Describe Purpose, Not Implementation"})}),`
`,e.exports.jsxs(s.p,{children:["Use names that describe the ",e.exports.jsx(s.strong,{children:"purpose or intent"})," of the object."]}),`
`,e.exports.jsx(s.p,{children:"Do not use names that describe its underlying implementation, unless:"}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"The underlying implementation is the thing that students are meant to learn / interact with, OR"}),`
`,e.exports.jsxs(s.li,{children:["There are multiple implementations of the same thing, and the names help to juxtapose them.",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["e.g. ",e.exports.jsx(s.code,{children:"dfs()"})," and ",e.exports.jsx(s.code,{children:"bfs()"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h3,{id:"be-wary-of-abbreviation",children:e.exports.jsx(s.a,{href:"#be-wary-of-abbreviation",children:"Be Wary Of Abbreviation"})}),`
`,e.exports.jsxs(s.p,{children:["Avoid creating ",e.exports.jsx(s.strong,{children:"uncommon abbreviations"})," by deleting letters within a word."]}),`
`,e.exports.jsxs(s.p,{children:["That said, there are plenty of acceptable abbreviations, so use your own judgement (and refer to the next subsection on ",e.exports.jsx(s.a,{href:"#err-on-the-side-of-verbosity",children:"verbosity vs visibility"}),"):"]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"language-text code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`obj: object
`}),e.exports.jsx(s.span,{className:"code-line",children:`col: column
`}),e.exports.jsx(s.span,{className:"code-line",children:`mat: matrix
`}),e.exports.jsx(s.span,{className:"code-line",children:`vec: vector
`}),e.exports.jsx(s.span,{className:"code-line",children:`vert: vertex
`}),e.exports.jsx(s.span,{className:"code-line",children:`dist: distance
`})]})}),`
`,e.exports.jsx(s.p,{children:"Additionally, all acronyms must have the same case."}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"printVAO"}),"(); ",e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"printVao"}),"(); ",e.exports.jsx(s.span,{className:"pl-c",children:"// bad"}),`
`]})]})}),`
`,e.exports.jsx(s.h3,{id:"err-on-the-side-of-verbosity",children:e.exports.jsx(s.a,{href:"#err-on-the-side-of-verbosity",children:"Err On The Side Of Verbosity"})}),`
`,e.exports.jsx(s.p,{children:"Do not worry about saving horizontal space, as it is far more important to make your code immediately understandable by a student."}),`
`,e.exports.jsxs(s.p,{children:["Generally speaking, ",e.exports.jsx(s.strong,{children:"descriptiveness should be proportional to the name's scope of visibility"}),": e.g. ",e.exports.jsx(s.code,{children:"n"})," may be a fine name within a 5-line function, but within the scope of a class, it's likely too vague."]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["std::tuple<",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),", ",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),"> ",e.exports.jsx(s.span,{className:"pl-en",children:"countLeafAndNonleafNodes"}),`(MyTreeType& ast);
`]}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// bad: no one will understand why there are two return values"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["std::tuple<",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),", ",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),"> ",e.exports.jsx(s.span,{className:"pl-en",children:"countNodes"}),`(MyTreeType& ast);
`]})]})}),`
`,e.exports.jsx(s.h3,{id:"comment-your-functions",children:e.exports.jsx(s.a,{href:"#comment-your-functions",children:"Comment Your Functions"})}),`
`,e.exports.jsx(s.p,{children:"Some software developers in industry prefer keeping inline comments to a minimum, as they are a crutch for bad naming and factorization/abstraction."}),`
`,e.exports.jsxs(s.p,{children:["That said, we are writing code for students, not industry professionals, so ",e.exports.jsx(s.strong,{children:"comment your functions"}),". Keep it short and simple, and follow the same guidelines as above."]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// good"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// Returns the number of leaf and non-leaf nodes in a given MyTreeType"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["std::tuple<",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),", ",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),"> ",e.exports.jsx(s.span,{className:"pl-en",children:"countLeafAndNonleafNodes"}),`(MyTreeType& ast);
`]}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// bad: implementation detail is irrelevant, and comment is getting too long"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// Uses DFS to iterate through nodes of given MyTreeType ast, then returns a"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// tuple containing the count of leaf nodes and the count of non-leaf nodes,"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["std::tuple<",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),", ",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),"> ",e.exports.jsx(s.span,{className:"pl-en",children:"countLeafAndNonleafNodes"}),`(MyTreeType& ast);
`]})]})}),`
`,e.exports.jsx(r,{})]})]})}function l(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(a,n)})):a(n)}export{l as default,i as documentProps};
