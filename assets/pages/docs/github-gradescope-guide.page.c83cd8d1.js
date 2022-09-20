import{j as e}from"../../chunk-b0d73203.js";import{I as o}from"../../chunk-e3efcf8b.js";import{M as n}from"../../chunk-82f9daf4.js";const d={title:"Github + Gradescope Guide"};function i(t){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",code:"code",strong:"strong"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#github--gradescope-guide",children:"Github + Gradescope Guide"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#tracking-and-pushing-changes",children:"Tracking and Pushing changes"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#handing-in-assignments",children:"Handing in Assignments"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"github--gradescope-guide",children:e.exports.jsx(s.a,{href:"#github--gradescope-guide",children:"Github + Gradescope Guide"})}),`
`,e.exports.jsx(s.p,{children:"This doc covers how to update your local changes to your Github repo and how to turn in your Github repo as an assignment through Gradescope. Note that GitHub has updated their terminology and that the master branch has been renamed to the main branch, but its function is unchanged."}),`
`,e.exports.jsx(s.h2,{id:"tracking-and-pushing-changes",children:e.exports.jsx(s.a,{href:"#tracking-and-pushing-changes",children:"Tracking and Pushing changes"})}),`
`,e.exports.jsx(s.p,{children:"Let's say you've edited your source code and now want to track the changes you've made. For example, maybe you edited main.cpp."}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Check the status of your repository by running ",e.exports.jsx(s.code,{children:"git status"})," in the repository directory. You should see a bunch of files marked as not staged for commit. In our case, we only edited main.cpp, so that should be the only file listed here."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image11.png",alt:"TODO"}],figNumber:1,figCaption:"The status of the repository before adding changes"}),`
`,e.exports.jsxs(s.ol,{start:"2",children:[`
`,e.exports.jsxs(s.li,{children:["Add your changes by running ",e.exports.jsx(s.code,{children:"git add <file to add>"}),". You can also use a pattern instead of filenames, like ",e.exports.jsx(s.code,{children:"git add *.cpp"})," to add all C++ source files. You can check the status of your repository again to verify that all changes you want to track have been added."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image13.png",alt:"TODO"}],figNumber:2,figCaption:"Adding the changes and checking the the repository status again"}),`
`,e.exports.jsxs(s.p,{children:["You should be tracking changes often enough that you shouldn't have many files to add. If you choose to use ",e.exports.jsx(s.code,{children:"git add -A"})," which adds all changes at once, be sure to always check which group of files will be added in order to prevent unintended files from being tracked in the repository."]}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsxs(s.li,{children:["Once all files have been added, you can commit your changes to the branch you are currently working on (for most people, this will be the main/master branch). Run ",e.exports.jsx(s.code,{children:"git commit -m <commit message>"})," with a short, informative message to add all tracked changes to the repository's history, also known as the tree."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image1.png",alt:"TODO"}],figNumber:3,figCaption:"Making a commit"}),`
`,e.exports.jsxs(s.p,{children:["If you forget to add the ",e.exports.jsx(s.code,{children:"-m"})," flag and get stuck on a vim page after running just ",e.exports.jsx(s.code,{children:"git commit"}),", you can quit the page by running ",e.exports.jsx(s.code,{children:":q!"})," to return to the terminal and retry committing."]}),`
`,e.exports.jsxs(s.ol,{start:"4",children:[`
`,e.exports.jsxs(s.li,{children:["Push your changes to the origin repository (your personal GitHub Classroom repository) using ",e.exports.jsx(s.code,{children:"git push origin <branch, typically master/main>"}),". You can omit ",e.exports.jsx(s.code,{children:"origin <branch>"}),", but it is good practice to specify it to cement the idea that ",e.exports.jsx(s.code,{children:"git push"})," will update a specific branch of the origin repository."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/image3.png",alt:"TODO"}],figNumber:4,figCaption:"Pushing to origin. The -v flag just makes the output verbose and doesn't need to be included."}),`
`,e.exports.jsxs(s.ol,{start:"5",children:[`
`,e.exports.jsx(s.li,{children:"Commit (and push) your changes often! This will allow you to go back to working versions of your code if you have accidentally changed something and broken your functionality. GitHub also acts as a relatively reliable external backup for your code if for some reason your computer stops working."}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["For more information about GitHub, see our ",e.exports.jsx(s.a,{href:"https://www.google.com/url?q=https://docs.google.com/document/d/10O6_m-b3nb1XZx9ilxzsN4iHK7D0hWjAs030H2AXSjI/edit?usp%3Dsharing&sa=D&source=editors&ust=1657229381662616&usg=AOvVaw0viE4gdDdb4vjE8TaZ1po4",target:"_blank",rel:"noopener noreferrer",children:"GitHub Guide"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"handing-in-assignments",children:e.exports.jsx(s.a,{href:"#handing-in-assignments",children:"Handing in Assignments"})}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Navigate to your repository on GitHub to verify that your changes have been properly pushed."}),`
`,e.exports.jsx(s.li,{children:"Once you are satisfied with the state of your repository, navigate to the CS 1230 course on Gradescope."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_course.png",alt:"TODO"}],figNumber:5,figCaption:"CS 1230 on Gradescope"}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsx(s.li,{children:"Click on the assignment you'd like to hand in."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_assignment.png",alt:"TODO"}],figNumber:6,figCaption:"An Assignment on Gradescope"}),`
`,e.exports.jsxs(s.ol,{start:"4",children:[`
`,e.exports.jsxs(s.li,{children:["Navigate to the GitHub option on the popup submission window. Connect your GitHub account if you haven't already by clicking ",e.exports.jsx(s.strong,{children:"Connect to GitHub"})," and following the prompts to connect."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_github_with_connect.png",alt:"TODO"}],figNumber:7,figCaption:"Connecting GitHub to Gradescope"}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:" If your account is already connected, your submission window should look like this... "}),e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_github.png",alt:"TODO"}],figNumber:8,figCaption:"Connected Gradescope submission window"})]}),`
`,e.exports.jsxs(s.ol,{start:"6",children:[`
`,e.exports.jsxs(s.li,{children:["Click ",e.exports.jsx(s.strong,{children:"Select a repository"})," and select the project repository that you want to submit."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_repository.png",alt:"TODO"}],figNumber:9,figCaption:"Specifying which repository to submit"}),`
`,e.exports.jsxs(s.ol,{start:"7",children:[`
`,e.exports.jsxs(s.li,{children:["Select the branch you'd like to hand in. In most cases, this will be ",e.exports.jsx(s.code,{children:"master"})," or ",e.exports.jsx(s.code,{children:"main"}),"."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_branch.png",alt:"TODO"}],figNumber:10,figCaption:"Specifying which branch to submit"}),`
`,e.exports.jsxs(s.ol,{start:"8",children:[`
`,e.exports.jsxs(s.li,{children:["Click ",e.exports.jsx(s.strong,{children:"Upload"})," to complete your submission."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_upload.png",alt:"TODO"}],figNumber:11,figCaption:"Uploading a Submission"}),`
`,e.exports.jsxs(s.ol,{start:"9",children:[`
`,e.exports.jsx(s.li,{children:"You have successfully submitted your assignment! You should see a confirmation message and email."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_submitted.png",alt:"TODO"}],figNumber:12,figCaption:"Confirmation message"}),`
`,e.exports.jsxs(s.ol,{start:"10",children:[`
`,e.exports.jsx(s.li,{children:"If your project has successfully compiled, you should see something like this!"}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_compiled.png",alt:"TODO"}],figNumber:13,figCaption:"Compilation Success Message"}),`
`,e.exports.jsxs(s.ol,{start:"11",children:[`
`,e.exports.jsx(s.li,{children:"If something has gone wrong, you will see something like this :("}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/gradescope_compile_failed.png",alt:"TODO"}],figNumber:14,figCaption:"Compilation Failure Message"}),`
`,e.exports.jsx(n,{})]})]})}function h(t={}){const{wrapper:s}=t.components||{};return s?e.exports.jsx(s,Object.assign({},t,{children:e.exports.jsx(i,t)})):i(t)}export{h as default,d as documentProps};
