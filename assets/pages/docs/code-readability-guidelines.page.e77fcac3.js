import{j as e}from"../../chunk-903e764a.js";import{M as a}from"../../chunk-b2e2a089.js";const i={title:"Code Readability Guidelines"};function l(n){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",strong:"strong",code:"code",div:"div",pre:"pre",span:"span",h3:"h3",ul:"ul",em:"em",blockquote:"blockquote"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#code-readability-guidelines",children:"Code Readability Guidelines"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#naming",children:"Naming"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#casing-recommendations",children:"Casing Recommendations"})})})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#whitespace",children:"Whitespace"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#comments",children:"Comments"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#line-width",children:"Line Width"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"code-readability-guidelines",children:e.exports.jsx(s.a,{href:"#code-readability-guidelines",children:"Code Readability Guidelines"})}),`
`,e.exports.jsx(s.p,{children:"Follow these guidelines, and you'll have prettier code. Your grades will look better, too!"}),`
`,e.exports.jsx(s.h2,{id:"naming",children:e.exports.jsx(s.a,{href:"#naming",children:"Naming"})}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.strong,{children:"Name your variables appropriately."})}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"Humans"})," are not ",e.exports.jsx(s.code,{children:"Computers"}),"."]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"TAs"})," are a subclass of ",e.exports.jsx(s.code,{children:"Humans"}),", and so are ",e.exports.jsx(s.code,{children:"You"}),". Use good naming practices!"]}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Good Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"float"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"quadraticFormula"}),"(",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," a, ",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," b, ",e.exports.jsx(s.span,{className:"pl-k",children:"float"}),` c) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," top = b * b - ",e.exports.jsx(s.span,{className:"pl-c1",children:"sqrt"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"4"}),` * a * c);
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"3",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," bottom = ",e.exports.jsx(s.span,{className:"pl-c1",children:"2"}),` * a;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"4",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"float"}),` result = top / bottom;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"5",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` result;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"6",children:`}
`})]})})]})}),`
`,e.exports.jsx(s.div,{className:"error-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Bad Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"float"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"Qf"}),"(",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," a, ",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," b, ",e.exports.jsx(s.span,{className:"pl-k",children:"float"}),` c) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," t = b * b - ",e.exports.jsx(s.span,{className:"pl-c1",children:"sqrtf"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"4"}),` * a * c);
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"3",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"float"})," bm = ",e.exports.jsx(s.span,{className:"pl-c1",children:"2"}),` * a;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"4",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"float"}),` r = t / bm;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"5",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` r;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"6",children:`}
`})]})})]})}),`
`,e.exports.jsx(s.h3,{id:"casing-recommendations",children:e.exports.jsx(s.a,{href:"#casing-recommendations",children:"Casing Recommendations"})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:["Class and file names should be ",e.exports.jsx(s.code,{children:"StyledLikeThis"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["Variable and function names should be ",e.exports.jsx(s.code,{children:"styledLikeThis"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["Constants and macros should be ",e.exports.jsx(s.code,{children:"STYLED_LIKE_THIS"}),"."]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"whitespace",children:e.exports.jsx(s.a,{href:"#whitespace",children:"Whitespace"})}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.strong,{children:"Indent your code."})}),`
`,e.exports.jsx(s.p,{children:"Indents make your code much more readable. It also helps you keep track of scope and avoid nasty little typos!"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Use newlines to denote sections of code"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["If your code can be broken into smaller sections (or even better\u2014well-named helper functions), ",e.exports.jsx(s.em,{children:"do it!"})]}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Good Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"getFibonacciAt"}),"(",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` index) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (index == ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"})," ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"3",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (index == ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"})," ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"4",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"5",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num1 = ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"6",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num2 = ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"7",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num3 = ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"8",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"9",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"while"})," (index > ",e.exports.jsx(s.span,{className:"pl-c1",children:"2"}),`) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"10",children:["    ",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` prevNum3 = num3;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"11",children:`
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"12",children:`    num3 = num1 + num2;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"13",children:`    num1 = num2;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"14",children:`    num2 = prevNum3;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"15",children:`
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"16",children:`    index --;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"17",children:`  }
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"18",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"19",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` num3;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"20",children:`}
`})]})})]})}),`
`,e.exports.jsx(s.div,{className:"error-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Bad Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"getFibonacciAt"}),"(",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` index) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:[e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (index == ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"})," ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"3",children:`
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"4",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"5",children:[e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (index == ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"})," ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"6",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num1 =           ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"7",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num2 = ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"8",children:`
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"9",children:`
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"10",children:`
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"11",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"12",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num3 = ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"13",children:["    ",e.exports.jsx(s.span,{className:"pl-k",children:"while"})," (index    > ",e.exports.jsx(s.span,{className:"pl-c1",children:"2"}),`) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"14",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` prevNum3 = num3;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"15",children:`num3 =       num1 + num2;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"16",children:`num1 =   num2;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"17",children:`num2 = prevNum3;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"18",children:`            index --;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"19",children:`}
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"20",children:["               ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),`
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"21",children:`num3;
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"22",children:`}
`})]})}),e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsxs(s.p,{children:["This is only ",e.exports.jsx(s.em,{children:"slightly"})," exaggerated. Students have submitted worse! \u{1F62A}"]}),`
`]})]})}),`
`,e.exports.jsx(s.h2,{id:"comments",children:e.exports.jsx(s.a,{href:"#comments",children:"Comments"})}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Comments make your code more readable and maintainable"}),"."]}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Good Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// Levenshtein edit distance. Calculates the minimum"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// number of changes (removing, adding, or substituting"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"3",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// a character) required to make one word the same as"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"4",children:[e.exports.jsx(s.span,{className:"pl-c",children:"// another word. Is case sensitive."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"5",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"led"}),`(std::string word1, std::string word2) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"6",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// Get the length of the two words for future use."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"7",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," len1 = word1.",e.exports.jsx(s.span,{className:"pl-c1",children:"size"}),`();
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"8",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," len2 = word2.",e.exports.jsx(s.span,{className:"pl-c1",children:"size"}),`();
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"9",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"10",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// If either word is empty, then the edit distance"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"11",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// is the length of the other one."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"12",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (len1 == ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` len2;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"13",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (len2 == ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` len1;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"14",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"15",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// Obtain the cost of editing the last character of"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"16",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// either string."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"17",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"bool"})," lastCharsEqual = word1[len1 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),"] == word2[len2 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`];
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"18",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," cost = lastCharsEqual ? ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"})," : ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"19",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"20",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// Remove the last character from both strings for"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"21",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// the next recursive iteration."}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"22",children:["  std::string short1 = word1.",e.exports.jsx(s.span,{className:"pl-c1",children:"substr"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", len1 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`);
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"23",children:["  std::string short2 = word2.",e.exports.jsx(s.span,{className:"pl-c1",children:"substr"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", len2 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`);
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"24",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"25",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// Finally, return the minimum edit distance if we"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"26",children:["  ",e.exports.jsx(s.span,{className:"pl-c",children:"// remove a character:"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"27",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"return"})," ",e.exports.jsx(s.span,{className:"pl-c1",children:"std::min"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"std::min"}),`(
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"28",children:["    ",e.exports.jsx(s.span,{className:"pl-c1",children:"led"}),"(short1, word2) + ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),",    ",e.exports.jsx(s.span,{className:"pl-c",children:"// from word1,"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"29",children:["    ",e.exports.jsx(s.span,{className:"pl-c1",children:"led"}),"(word1, short2) + ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),"),   ",e.exports.jsx(s.span,{className:"pl-c",children:"// from word2,"}),`
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"30",children:["    ",e.exports.jsx(s.span,{className:"pl-c1",children:"led"}),"(short1, short2) + cost ",e.exports.jsx(s.span,{className:"pl-c",children:"// Or from both."}),`
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"31",children:`  );
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"32",children:`}
`})]})}),e.exports.jsx(s.blockquote,{children:`
`})]})}),`
`,e.exports.jsx(s.div,{className:"error-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Bad Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"led"}),`(std::string word1, std::string word2) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," len1 = word1.",e.exports.jsx(s.span,{className:"pl-c1",children:"size"}),`();
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"3",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," len2 = word2.",e.exports.jsx(s.span,{className:"pl-c1",children:"size"}),`();
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"4",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"5",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (len1 == ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` len2;
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"6",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"if"})," (len2 == ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),") ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` len1;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"7",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"8",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"bool"})," lastCharsEqual = word1[len1 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),"] == word2[len2 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`];
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"9",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," cost = lastCharsEqual ? ",e.exports.jsx(s.span,{className:"pl-c1",children:"0"})," : ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`;
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"10",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"11",children:["  std::string short1 = word1.",e.exports.jsx(s.span,{className:"pl-c1",children:"substr"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", len1 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`);
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"12",children:["  std::string short2 = word2.",e.exports.jsx(s.span,{className:"pl-c1",children:"substr"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),", len2 - ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`);
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"13",children:`
`}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"14",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"return"})," ",e.exports.jsx(s.span,{className:"pl-c1",children:"std::min"}),"(",e.exports.jsx(s.span,{className:"pl-c1",children:"std::min"}),`(
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"15",children:["    ",e.exports.jsx(s.span,{className:"pl-c1",children:"led"}),"(short1, word2) + ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`,
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"16",children:["    ",e.exports.jsx(s.span,{className:"pl-c1",children:"led"}),"(word1, short2) + ",e.exports.jsx(s.span,{className:"pl-c1",children:"1"}),`),
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"17",children:["    ",e.exports.jsx(s.span,{className:"pl-c1",children:"led"}),`(short1, short2) + cost
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"18",children:`  );
`}),e.exports.jsx(s.span,{className:"code-line line-number",line:"19",children:`}
`})]})})]})}),`
`,e.exports.jsx(s.h2,{id:"line-width",children:e.exports.jsx(s.a,{href:"#line-width",children:"Line Width"})}),`
`,e.exports.jsx(s.p,{children:e.exports.jsx(s.strong,{children:"Keep your lines to a reasonable length."})}),`
`,e.exports.jsx(s.p,{children:"Unfortunately, not everyone codes on an ultrawide monitor."}),`
`,e.exports.jsx(s.div,{className:"success-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Good Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"addFiveNumbers"}),"(",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num1, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num2, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num3, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num4, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"}),` num5) {
`]}),e.exports.jsxs(s.span,{className:"code-line line-number",line:"2",children:["  ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` (num1 + num2 + num3 + num4 + num5);
`]}),e.exports.jsx(s.span,{className:"code-line line-number",line:"3",children:`}
`})]})})]})}),`
`,e.exports.jsx(s.div,{className:"error-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"Bad Example"})}),e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsx(s.code,{className:"language-cpp code-highlight",children:e.exports.jsxs(s.span,{className:"code-line line-number",line:"1",children:[e.exports.jsx(s.span,{className:"pl-k",children:"int"})," ",e.exports.jsx(s.span,{className:"pl-en",children:"addFiveNumbers"}),"(",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num1, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num2, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num3, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num4, ",e.exports.jsx(s.span,{className:"pl-k",children:"int"})," num5) { ",e.exports.jsx(s.span,{className:"pl-k",children:"return"}),` (num1 + num2 + num3 + num4 + num5); }
`]})})})]})}),`
`,e.exports.jsx(a,{})]})]})}function p(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(l,n)})):l(n)}export{p as default,i as documentProps};
