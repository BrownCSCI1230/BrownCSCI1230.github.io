import{j as e}from"../../../chunk-64786f19.js";const r={title:"Solution Demo Guide"};function o(n){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",div:"div",p:"p",h2:"h2",strong:"strong",code:"code",em:"em",pre:"pre",span:"span",br:"br"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#compiling-new-solution-demos",children:"Compiling New Solution Demos"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#macos",children:"MacOS"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#windows",children:"Windows"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#department-machines",children:"Department Machines"})})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,e.exports.jsx(s.h1,{id:"compiling-new-solution-demos",children:e.exports.jsx(s.a,{href:"#compiling-new-solution-demos",children:"Compiling New Solution Demos"})}),`
`,e.exports.jsx(s.div,{className:"warning-callout callout",children:e.exports.jsx(s.p,{children:"This document may be out of date, and should be verified."})}),`
`,e.exports.jsxs(s.p,{children:["Solution demos can currently be found in ",e.exports.jsx(s.a,{href:"https://drive.google.com/drive/u/3/folders/1aEA3WocKI2GgdwfuE2FV5nU57mn2RCqU",target:"_blank",rel:"noopener noreferrer",children:"this Google Drive folder"}),"."]}),`
`,e.exports.jsxs(s.p,{children:["These are all created from the solutions found in the ",e.exports.jsx(s.a,{href:"https://github.com/BrownCSCI1230/base/",target:"_blank",rel:"noopener noreferrer",children:"CSCI1230 base repo"}),"."]}),`
`,e.exports.jsx(s.h2,{id:"macos",children:e.exports.jsx(s.a,{href:"#macos",children:"MacOS"})}),`
`,e.exports.jsx(s.div,{className:"error-callout callout",children:e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:e.exports.jsx(s.strong,{children:"A note on version compatibility"})}),e.exports.jsx(s.p,{children:"It seems like solutions that have been built on machines that are MacOS 13.0 or later might not be backwards compatible. However, solutions built on older machines with MacOS < 13.0 do seem to work on newer devices."})]})}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Open the project in QtCreator and open ",e.exports.jsx(s.code,{children:"CMakeLists.txt"}),"."]}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.em,{children:"(Optionally)"})," Rename the project to something that indicates which solution it is by modifying this line which should be at the top of the file:"]}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`# Sets project name
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"project"}),`(projects_raster_min_solution LANGUAGES CXX C)
`]})]})}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsxs(s.li,{children:["Add the following snippet to the file. This will create a ",e.exports.jsx(s.code,{children:".app"})," on Mac when building which can then be deployed to create a standalone application."]}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"set_target_properties"}),"(${PROJECT_NAME} PROPERTIES\n"]}),e.exports.jsxs(s.span,{className:"code-line",children:["    MACOSX_BUNDLE ",e.exports.jsx(s.span,{className:"pl-c1",children:"TRUE"}),`
`]}),e.exports.jsx(s.span,{className:"code-line",children:`)
`})]})}),`
`,e.exports.jsxs(s.ol,{start:"4",children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Build the project in ",e.exports.jsx(s.strong,{children:"Release"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In your system file browser find the folder where Qt is installed on your computer. From there go to ",e.exports.jsx(s.code,{children:"[Qt Version Number] > macos > bin"}),". You should have a preinstalled tool called ",e.exports.jsx(s.code,{children:"macdeployqt"}),". Copy the full filepath to this binary.",e.exports.jsx(s.br,{}),`
`,"For example, if you had Qt version 6.2.4 installed in your home directory, the path should look like this: ",e.exports.jsx(s.code,{children:"~/Qt/6.2.4/macos/bin/macdeployqt"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In a terminal navigate to the build folder of the project you just built. Inside there should be a ",e.exports.jsx(s.code,{children:".app"})," file with the name of the project as defined in the ",e.exports.jsx(s.code,{children:"CMakeLists.txt"})," such as ",e.exports.jsx(s.code,{children:"projects_raster_min_solution.app"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Paste the path to ",e.exports.jsx(s.code,{children:"macdeployqt"})," copied in Step 5 followed by the name of the ",e.exports.jsx(s.code,{children:".app"})," bundle. If you are planning on uploading this demo to Google Drive, also include the ",e.exports.jsx(s.code,{children:"-dmg"})," argument which will create a disk image that can be downloaded and installed by others. Google Drive will not let you upload just the ",e.exports.jsx(s.code,{children:".app"}),".",e.exports.jsx(s.br,{}),`
`,"The full command should look something like this: ",e.exports.jsx(s.code,{children:"~/Qt/6.2.4/macos/bin/macdeployqt projects_raster_min_solution.app -dmg"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["After this is run, you should have a ",e.exports.jsx(s.code,{children:".dmg"})," file in the build folder like ",e.exports.jsx(s.code,{children:"projects_raster_min_solution.dmg"}),"."]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"windows",children:e.exports.jsx(s.a,{href:"#windows",children:"Windows"})}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsx(s.li,{children:"Open the project in QtCreator."}),`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.em,{children:"(Optionally)"})," Open ",e.exports.jsx(s.code,{children:"CMakeLists.txt"})," and rename the project to something that indicates which solution it is by modifying this line which should be at the top of the file:"]}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`# Sets project name
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"project"}),`(projects_raster_min_solution LANGUAGES CXX C)
`]})]})}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Build the project in ",e.exports.jsx(s.strong,{children:"Release"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In your system file browser find the folder where Qt is installed on your computer. From there go to ",e.exports.jsx(s.code,{children:"[Qt Version Number] > mingw_64 > bin"}),". You should have a preinstalled tool called ",e.exports.jsx(s.code,{children:"windeployqt"}),". Copy the full filepath to this binary.",e.exports.jsx(s.br,{}),`
`,"For example, if you had Qt version 6.2.4 installed in your C drive, the path should look like this: ",e.exports.jsx(s.code,{children:"C:/Qt/6.2.4/mingw_64/bin/windeployqt"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In a terminal navigate to the build folder of the project you just built. Inside there should be a ",e.exports.jsx(s.code,{children:".exe"})," file with the name of the project as defined in the ",e.exports.jsx(s.code,{children:"CMakeLists.txt"})," such as ",e.exports.jsx(s.code,{children:"projects_raster_min_solution.exe"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Paste the path to ",e.exports.jsx(s.code,{children:"windeployqt"})," copied in Step 5 followed by the name of the ",e.exports.jsx(s.code,{children:".exe"})," like this: ",e.exports.jsx(s.code,{children:"C:/Qt/6.2.4/mingw_64/bin/windeployqt projects_raster_min_solution.exe"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Unfortunately, ",e.exports.jsx(s.code,{children:"windeployqt"})," does not package everything into a nice little app bundle the way ",e.exports.jsx(s.code,{children:"macdeployqt"})," does so ",e.exports.jsx(s.strong,{children:"to share the solution you need to provide the entire build folder"})," which has the copied dynamically linked libraries (the ",e.exports.jsx(s.code,{children:".dll"})," files you probably see in the folder). However, to cut down on the size you can eliminate unecessary files by attempting to delete the build folder while running the executable. Windows will prompt you to skip files that cannot be deleted because they are used by the program. All others can be deleted. (Note: sometimes Windows doesn't let you delete the ",e.exports.jsx(s.code,{children:".cmake"})," folder but you don't need this and can delete it manually by doing ",e.exports.jsx(s.code,{children:"rm -r .cmake"}),")"]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Compress the build folder into a ",e.exports.jsx(s.code,{children:".zip"})," and rename it."]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.h2,{id:"department-machines",children:e.exports.jsx(s.a,{href:"#department-machines",children:"Department Machines"})}),`
`,e.exports.jsxs(s.p,{children:["Qt does not provide an included tool for deployment outside of Mac or Windows. Yay. Thanks Qt. Instead here's a workaround. (Most of the instructions are available on ",e.exports.jsx(s.a,{href:"https://appimage-builder.readthedocs.io/en/latest/intro/tutorial.html",target:"_blank",rel:"noopener noreferrer",children:"this page"}),", but are also summarized here.)"]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Get ",e.exports.jsx(s.code,{children:"appimage-builder"})," by running these commands in a terminal somewhere you can access the executable (like your user home directory):"]}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-powershell",children:e.exports.jsxs(s.code,{className:"language-powershell code-highlight",children:[e.exports.jsxs(s.span,{className:"code-line",children:["wget ",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),"O appimage",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),"builder",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),"x86_64.AppImage https:",e.exports.jsx(s.span,{className:"pl-k",children:"//"}),e.exports.jsx(s.span,{className:"pl-c1",children:"github.com"}),e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"AppImageCrafters",e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"appimage",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),"builder",e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"releases",e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"download",e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"v1.",e.exports.jsx(s.span,{className:"pl-c1",children:"1.0"}),e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"appimage",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),"builder",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),e.exports.jsx(s.span,{className:"pl-c1",children:"1.1"}),".",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),e.exports.jsx(s.span,{className:"pl-k",children:"-"}),`x86_64.AppImage
`]}),e.exports.jsxs(s.span,{className:"code-line",children:["chmod ",e.exports.jsx(s.span,{className:"pl-k",children:"+"}),"x appimage",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),"builder",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),`x86_64.AppImage
`]})]})}),`
`,e.exports.jsxs(s.ol,{start:"2",children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.em,{children:"(Optionally)"})," Open ",e.exports.jsx(s.code,{children:"CMakeLists.txt"})," and rename the project to something that indicates which solution it is by modifying this line which should be at the top of the file:"]}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-cpp",children:e.exports.jsxs(s.code,{className:"language-cpp code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`# Sets project name
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-en",children:"project"}),`(projects_raster_min_solution LANGUAGES CXX C)
`]})]})}),`
`,e.exports.jsxs(s.ol,{start:"3",children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Build the project in ",e.exports.jsx(s.strong,{children:"Release"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Navigate to the build folder of the project you just built. Inside there should be an executable file with the name of the project as defined in the ",e.exports.jsx(s.code,{children:"CMakeLists.txt"})," such as ",e.exports.jsx(s.code,{children:"projects_raster_min_solution"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In this build folder, move all the contents into nested folders such that you have a folder structure ",e.exports.jsx(s.code,{children:"AppDir/usr/bin/"})," where ",e.exports.jsx(s.code,{children:"bin"})," contains all the build files including the executable."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Copy the filepath to your ",e.exports.jsx(s.code,{children:"appimage-builder"})," executable wherever you installed it in step 1. For example, if you put it in your user's home directory it would look like ",e.exports.jsx(s.code,{children:"~/appimage-builder-x86_64.AppImage"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["In a terminal navigate to the build folder (the level above ",e.exports.jsx(s.code,{children:"AppDir"}),") and run the ",e.exports.jsx(s.code,{children:"appimage-builder"})," executable with the flag ",e.exports.jsx(s.code,{children:"--generate"}),". For example, ",e.exports.jsx(s.code,{children:"~/appimage-builder-x86_64.AppImage --generate"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsx(s.p,{children:"You will be prompted to fill in a bunch of application information for which you can use the defaults like so:"}),`
`]}),`
`]}),`
`,e.exports.jsx(s.pre,{className:"language-powershell",children:e.exports.jsxs(s.code,{className:"language-powershell code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`INFO:Generator:Searching AppDir
`}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"})," ID [",e.exports.jsx(s.span,{className:"pl-k",children:"Eg"}),": ",e.exports.jsx(s.span,{className:"pl-k",children:"com.example.app"}),`]: projects_raster_min_solution
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"}),` Application Name: projects_raster_min_solution
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"})," Icon: application",e.exports.jsx(s.span,{className:"pl-k",children:"-"}),`vnd.appimage
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"})," Executable path: usr",e.exports.jsx(s.span,{className:"pl-k",children:"/"}),"bin",e.exports.jsx(s.span,{className:"pl-k",children:"/"}),`projects_raster_min_solution
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"})," Arguments [",e.exports.jsx(s.span,{className:"pl-k",children:"Default"}),`: $@]: $@
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"})," Version [",e.exports.jsx(s.span,{className:"pl-k",children:"Eg"}),": ",e.exports.jsx(s.span,{className:"pl-c1",children:"1.0"}),".",e.exports.jsx(s.span,{className:"pl-c1",children:"0"}),`]: latest
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"})," Update Information [",e.exports.jsx(s.span,{className:"pl-k",children:"Default"}),": ",e.exports.jsx(s.span,{className:"pl-k",children:"guess"}),`]: guess
`]}),e.exports.jsxs(s.span,{className:"code-line",children:[e.exports.jsx(s.span,{className:"pl-k",children:"?"}),` Architecture: x86_64
`]})]})}),`
`,e.exports.jsxs(s.ol,{start:"9",children:[`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["Run ",e.exports.jsx(s.code,{children:"~/appimage-builder-x86_64.AppImage --recipe AppImageBuilder.yml"}),"."]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:[`
`,e.exports.jsxs(s.p,{children:["The resulting project executable (ex: ",e.exports.jsx(s.code,{children:"projects_raster_min_solution.AppImage"}),") should be in the current working directory."]}),`
`]}),`
`]})]})]})}function l(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(o,n)})):o(n)}export{l as default,r as documentProps};
