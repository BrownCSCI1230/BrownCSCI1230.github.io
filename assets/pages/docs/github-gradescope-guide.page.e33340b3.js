import{j as e}from"../../chunk-e052a03f.js";import{I as o}from"../../chunk-ded7f5eb.js";import{M as n}from"../../chunk-6daa152b.js";const d={title:"Github + Gradescope Guide"};function t(i){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong"},i.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#github--gradescope-guide",children:"Github + Gradescope Guide"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#tracking-and-pushing-changes",children:"Tracking and Pushing changes"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#handing-in-assignments",children:"Handing in Assignments"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"github--gradescope-guide",children:e.exports.jsx(s.a,{href:"#github--gradescope-guide",children:"Github + Gradescope Guide"})}),`
`,e.exports.jsxs(s.p,{children:["If you have not already finished setting up everything you needed from ",e.exports.jsx(s.a,{href:"../labs/lab1",children:"Lab 1"}),", please do so. Otherwise, take a read through this doc which covers how to update your local changes to your Github repo and how to turn in your Github repo as an assignment through Gradescope."]}),`
`,e.exports.jsx(s.h2,{id:"tracking-and-pushing-changes",children:e.exports.jsx(s.a,{href:"#tracking-and-pushing-changes",children:"Tracking and Pushing changes"})}),`
`,e.exports.jsx(s.p,{children:"Let\u2019s say you\u2019ve edited your source code and now want to track the changes you\u2019ve made. For example, maybe you edited main.cpp."}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image8.png",alt:"TODO"}],figNumber:1,figCaption:"Editing main.cpp in vim"}),`
`,e.exports.jsx(s.p,{children:"This is vim, a terminal-based editor, so don\u2019t worry too much if your code doesn\u2019t look like this in Qt Creator."}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Check the status of your repository by running git status\xA0in the repository directory. You should see a bunch of files marked as not staged for commit."}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Add your changes by running ",e.exports.jsx(s.code,{children:"git add <files to add>"}),". You can also use a pattern instead of filenames, like \xA0",e.exports.jsx(s.code,{children:"git add *.cpp"}),"\xA0to add all C++ source files. You can check the status of your repository again to verify that all changes you want to track have been added."]}),`
`]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image11.png",alt:"TODO"}],figNumber:2,figCaption:"The status of the repository before adding changes"}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image13.png",alt:"TODO"}],figNumber:3,figCaption:"Adding the changes and checking the the repository status again"}),`
`,e.exports.jsx(s.p,{children:"We don't recommend adding all changes at once, as this can result in unintended files being tracked in the repository. You should be tracking changes often enough that you should not have many files to add."}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsxs(s.li,{children:["Once all files have been added, you can commit\xA0your changes to the branch you are currently working on (for most people, this will be the main/master branch). Run ",e.exports.jsx(s.code,{children:"git commit -m <commit message>"}),"\xA0with a short, informative message to add all tracked changes to the repository\u2019s history, also known as the tree."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image1.png",alt:"TODO"}],figNumber:4,figCaption:"Making a commit"}),`
`,e.exports.jsxs(s.ol,{start:"4",children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Push your changes to the origin repository (your personal GitHub Classroom repository) using ",e.exports.jsx(s.code,{children:"git push origin <branch, typically master\\>"}),". You can omit ",e.exports.jsx(s.code,{children:"origin <branch>"}),", but it is good practice for students who are newer to Git to make a habit of specifying to cement the idea that git push\xA0will update the tree of the origin\xA0repository specifically."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"Commit (and push) your changes often!\xA0This will allow you to go back to working versions of your code if you accidentally change something and break your functionality. GitHub also acts as a relatively reliable external backup for your code if for some reason your computer stops working."}),`
`]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image3.png",alt:"TODO"}],figNumber:5,figCaption:"Pushing to origin. The -v flag just makes the output verbose."}),`
`,e.exports.jsxs(s.p,{children:["For more information about GitHub, see our ",e.exports.jsx(s.a,{href:"https://www.google.com/url?q=https://docs.google.com/document/d/10O6_m-b3nb1XZx9ilxzsN4iHK7D0hWjAs030H2AXSjI/edit?usp%3Dsharing&sa=D&source=editors&ust=1657229381662616&usg=AOvVaw0viE4gdDdb4vjE8TaZ1po4",children:"GitHub Guide"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"handing-in-assignments",children:e.exports.jsx(s.a,{href:"#handing-in-assignments",children:"Handing in Assignments"})}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Navigate to your repository on GitHub. To verify that your changes have been properly pushed, you can click through the source code folders and files on the repository page."}),`
`,e.exports.jsx(s.li,{children:"Once you are satisfied with the state of your repository, navigate to CS1230 on Gradescope."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image10.png",alt:"TODO"}],figNumber:6,figCaption:"CS1230 on Gradescope"}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsx(s.li,{children:"Click on the assignment you\u2019d like to hand in."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image6.png",alt:"TODO"}],figNumber:7,figCaption:"An Assignment on Gradescope"}),`
`,e.exports.jsxs(s.ol,{start:"4",children:[`
`,e.exports.jsxs(s.li,{children:["Click ",e.exports.jsx(s.strong,{children:"Connect to GitHub"})," on the popup submission window."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image5.png",alt:"TODO"}],figNumber:8,figCaption:"Connecting GitHub to Gradescope"}),`
`,e.exports.jsxs(s.ol,{start:"5",children:[`
`,e.exports.jsxs(s.li,{children:["Click ",e.exports.jsx(s.strong,{children:"Authorize Gradescope"}),"\xA0to continue after signing into GitHub."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image9.png",alt:"TODO"}],figNumber:9,figCaption:"Authorizing gradescope"}),`
`,e.exports.jsxs(s.ol,{start:"6",children:[`
`,e.exports.jsx(s.li,{children:"Select your projects repository from the cs123tas\xA0organization."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image2.png",alt:"TODO"}],figNumber:10,figCaption:"Specifying which repository to submit"}),`
`,e.exports.jsxs(s.ol,{start:"7",children:[`
`,e.exports.jsx(s.li,{children:"Select the branch you\u2019d like to hand in. In most cases, this will be master/main."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image7.png",alt:"TODO"}],figNumber:11,figCaption:"Specifying which branch to submit"}),`
`,e.exports.jsxs(s.ol,{start:"8",children:[`
`,e.exports.jsx(s.li,{children:"Click Upload\xA0to complete your submission."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image4.png",alt:"TODO"}],figNumber:12,figCaption:"Uploading a Submission"}),`
`,e.exports.jsxs(s.ol,{start:"9",children:[`
`,e.exports.jsx(s.li,{children:"You\u2019ve successfully submitted your assignment! You should see a confirmation message and email."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image12.png",alt:"TODO"}],figNumber:13,figCaption:"Confirmation message"}),`
`,e.exports.jsx(n,{})]})]})}function g(i={}){const{wrapper:s}=i.components||{};return s?e.exports.jsx(s,Object.assign({},i,{children:e.exports.jsx(t,i)})):t(i)}export{g as default,d as documentProps};
