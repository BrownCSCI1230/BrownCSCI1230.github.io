import{j as e}from"../../chunk-903e764a.js";import{M as l}from"../../chunk-b2e2a089.js";const a={title:"Xcode CLT Installation Guide",hideNumbers:!0};function s(t){const o=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",strong:"strong",em:"em",h2:"h2",h3:"h3",img:"img",code:"code",div:"div",pre:"pre",span:"span"},t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(o.nav,{className:"toc",children:e.exports.jsx(o.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(o.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(o.a,{className:"toc-link toc-link-h1",href:"#xcode-command-line-tools-installation-guide",children:"Xcode Command Line Tools Installation Guide"}),e.exports.jsxs(o.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(o.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(o.a,{className:"toc-link toc-link-h2",href:"#option-1-install-the-full-xcode-application-simplest-way-recommended",children:"Option 1: Install The Full Xcode Application (Simplest Way; Recommended)"}),e.exports.jsxs(o.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(o.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(o.a,{className:"toc-link toc-link-h3",href:"#method-1-use-the-app-store",children:"Method 1: Use The App Store"})}),e.exports.jsx(o.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(o.a,{className:"toc-link toc-link-h3",href:"#method-2-manual-install",children:"Method 2: Manual Install"})})]})]}),e.exports.jsxs(o.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(o.a,{className:"toc-link toc-link-h2",href:"#option-2-install-xcode-clt-via-terminal",children:"Option 2: Install Xcode CLT Via Terminal"}),e.exports.jsxs(o.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(o.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(o.a,{className:"toc-link toc-link-h3",href:"#method-1-directly-install-xcode-clt-via-terminal",children:"Method 1: Directly Install Xcode CLT Via Terminal"})}),e.exports.jsx(o.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(o.a,{className:"toc-link toc-link-h3",href:"#method-2-install-the-xcode-command-line-tools-using-homebrew",children:"Method 2: Install the Xcode Command Line Tools using Homebrew"})})]})]})]})]})})}),e.exports.jsxs(o.main,{children:[`
`,`
`,e.exports.jsx(o.h1,{id:"xcode-command-line-tools-installation-guide",children:e.exports.jsx(o.a,{href:"#xcode-command-line-tools-installation-guide",children:"Xcode Command Line Tools Installation Guide"})}),`
`,e.exports.jsx(o.p,{children:"In order to install Qt and QtCreator, you must first have Xcode Command Line Tools (henceforth shortened to CLT) installed locally."}),`
`,e.exports.jsx(o.p,{children:"In this document, we'll provide two ways to ensure you have Xcode CLT installed. For each option, we'll walk you through two methods."}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What Is Xcode CLT?"}),e.exports.jsxs(o.p,{children:["For context, ",e.exports.jsx(o.strong,{children:"Xcode"})," is a complete development environment provided by Apple. If you are developing applications for MacOS, iOS, watchOS and tvOS, you must install the full Xcode application."]}),e.exports.jsxs(o.p,{children:[e.exports.jsxs(o.strong,{children:["However, for our purposes in CS 1230, you do not actually ",e.exports.jsx(o.em,{children:"need"})," to install the full Xcode application (which can be ~20GB or more!)."]})," If you're short on disk space, you may instead opt to install a much smaller subset of it. Specifically, the component you'll want is called ",e.exports.jsx(o.strong,{children:"Xcode Command Line Tools"}),"."]}),e.exports.jsxs(o.p,{children:["Alas, installing ",e.exports.jsx(o.em,{children:"just"})," Xcode CLT can be a bit troublesome."]})]}),`
`,e.exports.jsx(o.h2,{id:"option-1-install-the-full-xcode-application-simplest-way-recommended",children:e.exports.jsx(o.a,{href:"#option-1-install-the-full-xcode-application-simplest-way-recommended",children:"Option 1: Install The Full Xcode Application (Simplest Way; Recommended)"})}),`
`,e.exports.jsx(o.h3,{id:"method-1-use-the-app-store",children:e.exports.jsx(o.a,{href:"#method-1-use-the-app-store",children:"Method 1: Use The App Store"})}),`
`,e.exports.jsx(o.p,{children:"If you have time, space on disk, and want the simplest solution, you can download the entire Xcode application from the App Store. This is by far the easiest approach, but it can take anywhere from minutes to hours, depending on your device and network connection."}),`
`,e.exports.jsxs(o.p,{children:[e.exports.jsx(o.strong,{children:"We strongly recommend attempting this method first."})," This works perfectly fine for a majority of students."]}),`
`,e.exports.jsx(o.h3,{id:"method-2-manual-install",children:e.exports.jsx(o.a,{href:"#method-2-manual-install",children:"Method 2: Manual Install"})}),`
`,e.exports.jsxs(o.p,{children:["Another method is to download and unpack the Xcode package manually from this ",e.exports.jsx(o.a,{href:"https://developer.apple.com/download/all/?q=Xcode",target:"_blank",rel:"noopener noreferrer",children:"website"}),". It will be much quicker compared to a direct install through the App Store."]}),`
`,e.exports.jsxs(o.ol,{children:[`
`,e.exports.jsx(o.li,{children:"Go to the website and log in with your AppleID."}),`
`,e.exports.jsx(o.li,{children:"Select the latest non-beta Xcode release. You can find out what the latest version is by looking at the Xcode application listing on the App Store."}),`
`]}),`
`,e.exports.jsx(o.p,{children:e.exports.jsx(o.img,{src:"/docs/xcode-CLT-installation-guide/xcode-version.png",alt:"todo alt text"})}),`
`,e.exports.jsxs(o.ol,{start:"3",children:[`
`,e.exports.jsxs(o.li,{children:["Download the ",e.exports.jsx(o.code,{children:"xip"})," package and unpack it locally. There will be a Xcode application after you unpack the package. Move the Xcode package to the ",e.exports.jsx(o.code,{children:"Applications"})," folder."]}),`
`]}),`
`,e.exports.jsxs(o.div,{className:"warning-callout callout",children:[e.exports.jsxs(o.p,{children:["After you have the full Xcode application installed, ",e.exports.jsx(o.strong,{children:"you must launch Xcode once"}),"."]}),e.exports.jsx(o.p,{children:`If this is your fisrt time installing Xcode, you should see a prompt asking you to agree to Xcode user agreement.
You may also be asked to enter your password.`}),e.exports.jsx(o.p,{children:"After entering your password, you should see the following window, wait for the progress bar to complete."}),e.exports.jsx(o.p,{children:e.exports.jsx(o.img,{src:"/docs/xcode-CLT-installation-guide/install-component.png",alt:"todo alt text"})}),e.exports.jsx(o.p,{children:"To verify that you've installed Xcode CLT correctly, run the following command in your Terminal application:"}),e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"code-highlight",children:e.exports.jsx(o.span,{className:"code-line",children:`xcode-select -p
`})})}),e.exports.jsx(o.p,{children:"You should see the following output:"}),e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"code-highlight",children:e.exports.jsx(o.span,{className:"code-line",children:`/Applications/Xcode.app/Contents/Developer
`})})})]}),`
`,e.exports.jsx(o.h2,{id:"option-2-install-xcode-clt-via-terminal",children:e.exports.jsx(o.a,{href:"#option-2-install-xcode-clt-via-terminal",children:"Option 2: Install Xcode CLT Via Terminal"})}),`
`,e.exports.jsx(o.p,{children:"Normally, this would be the recommended approach, because it takes so much less time and disk space. However, the Xcode CLT installed using this approach is installed to a different location, and the Qt installer seems to have issues detecting this."}),`
`,e.exports.jsxs(o.p,{children:["While installing Qt through the graphical installer (see Lab 1), a pop-up may appear saying: ",e.exports.jsx(o.code,{children:"Xcode Command Line Tools not installed"}),". ",e.exports.jsx(o.strong,{children:"You should be able to dismiss the alert and continue the install process."})," Some of our TAs have confirmed that this is not a blocking alert, and it will disappear after you dismiss it. Subsequently, we were also able to build our assignments without issue."]}),`
`,e.exports.jsx(o.p,{children:"However, we cannot guarantee that there won't be any unforeseen errors, as the number of samples we have is too small. We recommend that you avoid this approach, unless you are really short on disk space."}),`
`,e.exports.jsx(o.h3,{id:"method-1-directly-install-xcode-clt-via-terminal",children:e.exports.jsx(o.a,{href:"#method-1-directly-install-xcode-clt-via-terminal",children:"Method 1: Directly Install Xcode CLT Via Terminal"})}),`
`,e.exports.jsx(o.p,{children:"Launch the Terminal application and type the following command."}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"code-highlight",children:e.exports.jsx(o.span,{className:"code-line",children:`xcode-select --install
`})})}),`
`,e.exports.jsxs(o.p,{children:["You will see the following prompt, select ",e.exports.jsx(o.code,{children:"Install"})," and the installation process will begin."]}),`
`,e.exports.jsx(o.p,{children:e.exports.jsx(o.img,{src:"/docs/xcode-CLT-installation-guide/installation-prompt.png",alt:"todo alt text"})}),`
`,e.exports.jsxs(o.p,{children:["When completed, you can verify the installation was successful by running the command ",e.exports.jsx(o.code,{children:"xcode-select -p"}),". The output should be"]}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"code-highlight",children:e.exports.jsx(o.span,{className:"code-line",children:`/Library/Developer/CommandLineTools
`})})}),`
`,e.exports.jsx(o.h3,{id:"method-2-install-the-xcode-command-line-tools-using-homebrew",children:e.exports.jsx(o.a,{href:"#method-2-install-the-xcode-command-line-tools-using-homebrew",children:"Method 2: Install the Xcode Command Line Tools using Homebrew"})}),`
`,e.exports.jsxs(o.p,{children:["Please refer to this ",e.exports.jsx(o.a,{href:"https://mac.install.guide/commandlinetools/3.html",target:"_blank",rel:"noopener noreferrer",children:"website"})," if you choose to go with this approach."]}),`
`,e.exports.jsx(l,{})]})]})}function r(t={}){const{wrapper:o}=t.components||{};return o?e.exports.jsx(o,Object.assign({},t,{children:e.exports.jsx(s,t)})):s(t)}export{r as default,a as documentProps};
