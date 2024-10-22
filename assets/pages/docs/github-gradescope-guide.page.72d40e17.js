import{j as e}from"../../chunk-b0d73203.js";import{I as o}from"../../chunk-e3efcf8b.js";import{M as r}from"../../chunk-82f9daf4.js";const h={title:"GitHub + Gradescope Guide"};function i(s){const t=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",h3:"h3",h4:"h4",code:"code",blockquote:"blockquote",div:"div",strong:"strong"},s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(t.nav,{className:"toc",children:e.exports.jsx(t.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h1",href:"#github--gradescope-guide",children:"GitHub + Gradescope Guide"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#basic-git",children:"Basic Git"}),e.exports.jsx(t.ol,{className:"toc-level toc-level-3",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#tracking-and-pushing-changes",children:"Tracking and pushing changes"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#git-status",children:"git status"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#git-add",children:"git add"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#git-commit",children:"git commit"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#git-push",children:"git push"})})]})]})})]}),e.exports.jsxs(t.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h2",href:"#handing-in-assignments",children:"Handing in assignments"}),e.exports.jsx(t.ol,{className:"toc-level toc-level-3",children:e.exports.jsxs(t.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(t.a,{className:"toc-link toc-link-h3",href:"#finding-the-commit-id",children:"Finding the commit ID"}),e.exports.jsxs(t.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#github-website",children:"GitHub website"})}),e.exports.jsx(t.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(t.a,{className:"toc-link toc-link-h4",href:"#command-line",children:"Command line"})})]})]})})]})]})]})})}),e.exports.jsxs(t.main,{children:[`
`,`
`,e.exports.jsx(t.h1,{id:"github--gradescope-guide",children:e.exports.jsx(t.a,{href:"#github--gradescope-guide",children:"GitHub + Gradescope Guide"})}),`
`,e.exports.jsx(t.p,{children:"This doc covers how to synchronize your local changes to your GitHub repo and how to turn in your GitHub repo as an assignment through Gradescope."}),`
`,e.exports.jsx(t.h2,{id:"basic-git",children:e.exports.jsx(t.a,{href:"#basic-git",children:"Basic Git"})}),`
`,e.exports.jsx(t.h3,{id:"tracking-and-pushing-changes",children:e.exports.jsx(t.a,{href:"#tracking-and-pushing-changes",children:"Tracking and pushing changes"})}),`
`,e.exports.jsx(t.p,{children:"Let's say you've edited your source code and now want to track the changes you've made. For example, maybe you edited main.cpp."}),`
`,e.exports.jsx(t.h4,{id:"git-status",children:e.exports.jsx(t.a,{href:"#git-status",children:e.exports.jsx(t.code,{children:"git status"})})}),`
`,e.exports.jsxs(t.p,{children:["Check the status of your repository by running ",e.exports.jsx(t.code,{children:"git status"})," in the repository directory. If you have made changes, you should see a bunch of files marked as not staged for commit. In our case, we only edited ",e.exports.jsx(t.code,{children:"main.cpp"}),", so that should be the only file listed here."]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/git-status.png",alt:"TODO"}],figNumber:1,figCaption:"The status of the repository before adding changes"}),`
`,e.exports.jsx(t.h4,{id:"git-add",children:e.exports.jsx(t.a,{href:"#git-add",children:e.exports.jsx(t.code,{children:"git add"})})}),`
`,e.exports.jsxs(t.p,{children:["Add your changes by running ",e.exports.jsx(t.code,{children:"git add <file to add>"}),". You can also use a pattern instead of filenames, like ",e.exports.jsx(t.code,{children:"git add *.cpp"})," to add all C++ source files. You can check the status of your repository again to verify that all changes you want to track have been added."]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/git-add.png",alt:"TODO"}],figNumber:2,figCaption:"Adding the changes and checking the the repository status again"}),`
`,e.exports.jsxs(t.p,{children:["You should be tracking changes often enough that you shouldn't have many files to add. If you choose to use ",e.exports.jsx(t.code,{children:"git add -A"})," which adds all changes at once, be sure to always check which group of files will be added in order to prevent unintended files from being tracked in the repository."]}),`
`,e.exports.jsx(t.h4,{id:"git-commit",children:e.exports.jsx(t.a,{href:"#git-commit",children:e.exports.jsx(t.code,{children:"git commit"})})}),`
`,e.exports.jsxs(t.p,{children:["Once all files have been added, you can commit your changes to the branch you are currently working on (for most people, this will be the main/master branch). Run ",e.exports.jsx(t.code,{children:"git commit -m <commit message>"})," with a short, informative message to add all tracked changes to the repository's history, also known as the tree."]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/git-commit.png",alt:"TODO"}],figNumber:3,figCaption:"Making a commit"}),`
`,e.exports.jsxs(t.blockquote,{children:[`
`,e.exports.jsxs(t.p,{children:["If you forget to add the ",e.exports.jsx(t.code,{children:"-m"})," flag and get stuck on a vim page after running just ",e.exports.jsx(t.code,{children:"git commit"}),", you can quit the page by running ",e.exports.jsx(t.code,{children:":q!"})," to return to the terminal and retry committing."]}),`
`]}),`
`,e.exports.jsx(t.h4,{id:"git-push",children:e.exports.jsx(t.a,{href:"#git-push",children:e.exports.jsx(t.code,{children:"git push"})})}),`
`,e.exports.jsxs(t.p,{children:["Push your changes to the origin remote (your personal GitHub Classroom repository) using ",e.exports.jsx(t.code,{children:"git push origin <branch, typically master/main>"}),". You can omit ",e.exports.jsx(t.code,{children:"origin <branch>"}),", but it is good practice to specify it to cement the idea that ",e.exports.jsx(t.code,{children:"git push"})," will update a specific branch of the origin repository."]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/git-push.png",alt:"TODO"}],figNumber:4,figCaption:"Pushing to origin."}),`
`,e.exports.jsx(t.div,{className:"warning-callout callout",children:e.exports.jsx(t.p,{children:"Commit (and push) your changes often! This will allow you to go back to working versions of your code if you have accidentally changed something and broken your functionality. GitHub also acts as a relatively reliable external backup for your code if for some reason your computer stops working."})}),`
`,e.exports.jsxs(t.p,{children:["For more information about GitHub, see our ",e.exports.jsx(t.a,{href:"https://www.google.com/url?q=https://docs.google.com/document/d/10O6_m-b3nb1XZx9ilxzsN4iHK7D0hWjAs030H2AXSjI/edit?usp%3Dsharing&sa=D&source=editors&ust=1657229381662616&usg=AOvVaw0viE4gdDdb4vjE8TaZ1po4",target:"_blank",rel:"noopener noreferrer",children:"GitHub Guide"}),"."]}),`
`,e.exports.jsx(t.h2,{id:"handing-in-assignments",children:e.exports.jsx(t.a,{href:"#handing-in-assignments",children:"Handing in assignments"})}),`
`,e.exports.jsx(t.p,{children:"This section covers how to hand in your work through Gradescope for both projects and labs in CS 1230."}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"Navigate to your repository on GitHub to verify that your changes have been properly pushed."}),`
`,e.exports.jsxs(t.li,{children:["Once you are satisfied with the state of your repository, navigate to the ",e.exports.jsx(t.a,{href:"https://www.gradescope.com/courses/843712",target:"_blank",rel:"noopener noreferrer",children:"CS 1230 course on Gradescope"}),"."]}),`
`,e.exports.jsx(t.li,{children:"Click on the assignment you'd like to hand in."}),`
`]}),`
`,e.exports.jsx(t.p,{children:"You will see two questions:"}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"GitHub Repository:"})," Enter the HTTPS URL of your GitHub repository. This can simply be found by copying the URL when you visit the repository on GitHub. For example: ",e.exports.jsx(t.a,{href:"https://github.com/BrownCSCI1230/projects-raster-jcarberry",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/BrownCSCI1230/projects-raster-jcarberry"})]}),`
`,e.exports.jsxs(t.li,{children:[e.exports.jsx(t.strong,{children:"Commit ID:"})," Enter the commit ID of the commit you'd like to submit. ",e.exports.jsx(t.a,{href:"#finding-the-commit-id",children:"Read on"})," to learn how to find the commit ID."]}),`
`]}),`
`,e.exports.jsxs(t.p,{children:["After entering the required information, click ",e.exports.jsx(t.strong,{children:"Submit"}),"."]}),`
`,e.exports.jsx(t.h3,{id:"finding-the-commit-id",children:e.exports.jsx(t.a,{href:"#finding-the-commit-id",children:"Finding the commit ID"})}),`
`,e.exports.jsx(t.p,{children:"We require that you submit the commit ID corresponding to the commit you'd like to submit."}),`
`,e.exports.jsx(t.p,{children:"We ask for this instead of having you submit your code because we must ensure the version of your code which you demonstrate to your mentor TA in mentor meetings is the same version you submit to Gradescope. Gradescope unfortunately does not allow TAs to view the commit ID of the code you submit, so we ask that you submit the commit ID to us directly."}),`
`,e.exports.jsx(t.p,{children:"During your mentor meetings, we verify that the commit ID you submitted to Gradescope matches the commit ID of the code you demonstrate."}),`
`,e.exports.jsx(t.p,{children:"In order to find the commit ID, you can either use the GitHub website or the command line."}),`
`,e.exports.jsx(t.h4,{id:"github-website",children:e.exports.jsx(t.a,{href:"#github-website",children:"GitHub website"})}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsx(t.li,{children:"Navigate to your repository on GitHub. Make sure you are on the correct branch. Click on the button as shown below to see the commit history."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/github-repo.png",alt:"TODO"}],figNumber:5,figCaption:"A sample GitHub repository"}),`
`,e.exports.jsxs(t.ol,{start:"2",children:[`
`,e.exports.jsx(t.li,{children:"Find the commit you'd like to submit and click on the clipboard icon to copy the commit ID."}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/commit-id.png",alt:"TODO"}],figNumber:6,figCaption:"Copying the commit ID"}),`
`,e.exports.jsx(t.h4,{id:"command-line",children:e.exports.jsx(t.a,{href:"#command-line",children:"Command line"})}),`
`,e.exports.jsxs(t.ol,{children:[`
`,e.exports.jsxs(t.li,{children:["Navigate to your repository on GitHub. Make sure you are on the correct branch. Run ",e.exports.jsx(t.code,{children:"git log"})," to see the commit history."]}),`
`]}),`
`,e.exports.jsx(o,{images:[{src:"/docs/github-gradescope-guide/git-log.png",alt:"TODO"}],figNumber:7,figCaption:"Copying the commit ID"}),`
`,e.exports.jsx(t.p,{children:"Find the commit you'd like to submit and copy the commit ID."}),`
`,e.exports.jsx(r,{})]})]})}function d(s={}){const{wrapper:t}=s.components||{};return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(i,s)})):i(s)}export{d as default,h as documentProps};