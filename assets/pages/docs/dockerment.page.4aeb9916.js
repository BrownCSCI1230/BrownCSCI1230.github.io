import{j as e}from"../../chunk-e10c3f71.js";import{M as o}from"../../chunk-c43eafc3.js";const c={title:"Dockerment"};function r(n){const s=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",code:"code",ul:"ul",h4:"h4",pre:"pre",span:"span"},n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s.nav,{className:"toc",children:e.exports.jsx(s.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h1",href:"#docker-grading-environment-guide",children:"Docker Grading Environment Guide"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-2",children:[e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#docker-overview",children:"Docker Overview"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#terminology",children:"Terminology"})})})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#gradescope",children:"Gradescope"})}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#running-docker-locally",children:"Running Docker Locally"}),e.exports.jsx(s.ol,{className:"toc-level toc-level-3",children:e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#convenience-scripts",children:"Convenience Scripts"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#building-and-running",children:"Building and Running"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#running-ta-demo",children:"Running TA Demo"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#script-usage",children:"Script usage"})})]})]})})]}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h2",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h2",href:"#in-case-of-failure-alternative-method-for-running-docker-locally",children:"In Case of Failure: Alternative Method for Running Docker Locally"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-3",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#building",children:"Building"})}),e.exports.jsxs(s.li,{className:"toc-item toc-item-h3",children:[e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#running",children:"Running"}),e.exports.jsxs(s.ol,{className:"toc-level toc-level-4",children:[e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#graphical-output-raster-and-realtime-projects",children:"Graphical Output (Raster and Realtime projects)"})}),e.exports.jsx(s.li,{className:"toc-item toc-item-h4",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h4",href:"#command-line-ray-projects",children:"Command Line (Ray projects)"})})]})]}),e.exports.jsx(s.li,{className:"toc-item toc-item-h3",children:e.exports.jsx(s.a,{className:"toc-link toc-link-h3",href:"#running-ta-demos",children:"Running TA demos"})})]})]})]})]})})}),e.exports.jsxs(s.main,{children:[`
`,`
`,e.exports.jsx(s.h1,{id:"docker-grading-environment-guide",children:e.exports.jsx(s.a,{href:"#docker-grading-environment-guide",children:"Docker Grading Environment Guide"})}),`
`,e.exports.jsx(s.p,{children:"To grade your assignments, we use a class Docker image to compile, build, and run your code. The following sections explain how you might use this Docker image to ensure you see the same results we do. Additionally, the class Docker image contains TA demos of class projects. Setting up Docker locally will give you access to the demos independent of the department filesystem!"}),`
`,e.exports.jsx(s.h2,{id:"docker-overview",children:e.exports.jsx(s.a,{href:"#docker-overview",children:"Docker Overview"})}),`
`,e.exports.jsxs(s.p,{children:["From the Docker ",e.exports.jsx(s.a,{href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener noreferrer",children:"docs"}),":"]}),`
`,e.exports.jsxs(s.blockquote,{children:[`
`,e.exports.jsx(s.p,{children:"Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications."}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["For the purposes of this class, you can think of Docker as a virtual machine that contains a standardized build environment. ",e.exports.jsx(s.strong,{children:"By checking that your code builds and runs in this standardized environment, you can be sure that we can build and run your code as well."})]}),`
`,e.exports.jsx(s.h3,{id:"terminology",children:e.exports.jsx(s.a,{href:"#terminology",children:"Terminology"})}),`
`,e.exports.jsx(s.div,{className:"table-wrapper",children:e.exports.jsxs(s.table,{children:[e.exports.jsx(s.thead,{children:e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.th,{align:"left",children:"Term"}),e.exports.jsx(s.th,{align:"left",children:"Description"})]})}),e.exports.jsxs(s.tbody,{children:[e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Image"}),e.exports.jsx(s.td,{align:"left",children:"A Docker image is a read-only template for creating a Docker container. An image is only the instructions for how to set up the environment. What is actually being run is a Docker container."})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Container"}),e.exports.jsxs(s.td,{align:"left",children:["A Docker container is a ",e.exports.jsx(s.em,{children:"mostly"})," isolated environment in which you can, for instance, build and run applications."]})]}),e.exports.jsxs(s.tr,{children:[e.exports.jsx(s.td,{align:"left",children:"Volume"}),e.exports.jsx(s.td,{align:"left",children:"A Docker volume is more or less a portion of your filesystem which can be accessed by a Docker container. Here, we will use it to share files between your host machine and your Docker container."})]})]})]})}),`
`,e.exports.jsx(s.h2,{id:"gradescope",children:e.exports.jsx(s.a,{href:"#gradescope",children:"Gradescope"})}),`
`,e.exports.jsxs(s.p,{children:["If you ",e.exports.jsx(s.em,{children:"only"})," want to check that your project compiles, each Gradescope assignment has an autograder setup that only checks if the project successfully compiles when you submit. This requires no local setup on your end!"]}),`
`,e.exports.jsx(s.h2,{id:"running-docker-locally",children:e.exports.jsx(s.a,{href:"#running-docker-locally",children:"Running Docker Locally"})}),`
`,e.exports.jsxs(s.p,{children:[`Verifying that your code compiles correctly in the Docker environment should be sufficient.
However, if you `,e.exports.jsx(s.em,{children:"really"})," want to ensure that we are seeing the same graphical output that you're seeing, or you want access to the TA demos on your machine, you will need to setup Docker locally."]}),`
`,e.exports.jsxs(s.ol,{children:[`
`,e.exports.jsxs(s.li,{children:["Get Docker ",e.exports.jsx(s.a,{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["Pull our grading environment with ",e.exports.jsx(s.code,{children:"docker pull anc2001/cs1230_env:latest"}),".",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:"If any of the steps below fail, try pulling the image again as it will receive periodic updates throughout the semester"}),`
`]}),`
`]}),`
`,e.exports.jsxs(s.li,{children:["If you don't already have it, get python ",e.exports.jsx(s.a,{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer",children:"here"})]}),`
`,e.exports.jsxs(s.li,{children:["Clone this ",e.exports.jsx(s.a,{href:"https://github.com/BrownCSCI1230/grading_env.git",target:"_blank",rel:"noopener noreferrer",children:"repo"})," for access to convenience scripts"]}),`
`]}),`
`,e.exports.jsx(s.p,{children:"The process of using the class environment involves first building the project into a Docker image, and then running that image as either a graphical session, or as an interactive session if you need to run things from the command line."}),`
`,e.exports.jsxs(s.div,{className:"warning-callout callout",children:[e.exports.jsxs(s.p,{children:["If you are on Windows, you must run these commands in ",e.exports.jsx(s.strong,{children:"Git Bash"})," or ",e.exports.jsx(s.strong,{children:"Powershell"}),"."]}),e.exports.jsxs(s.p,{children:["Additionally, all filepaths must be specified with ",e.exports.jsx(s.code,{children:"//"})," (i.e. you must use these as your filepath separators). This includes the path to the source code ",e.exports.jsx(s.code,{children:"SRC_PATH"}),' and the other filepaths present in the command. "Windows-specific versions" of some commands below are included in collapsible sections.']})]}),`
`,e.exports.jsx(s.h3,{id:"convenience-scripts",children:e.exports.jsx(s.a,{href:"#convenience-scripts",children:"Convenience Scripts"})}),`
`,e.exports.jsxs(s.p,{children:["Included in the repo you just cloned are two convenience python scripts ",e.exports.jsx(s.code,{children:"build.py"})," and ",e.exports.jsx(s.code,{children:"run.py"}),". These should abstract away many of the docker commands required to compile and run your code in our standardized environment. Example usage shown below."]}),`
`,e.exports.jsx(s.h4,{id:"building-and-running",children:e.exports.jsx(s.a,{href:"#building-and-running",children:"Building and Running"})}),`
`,e.exports.jsxs(s.p,{children:["First build the project. This command will take the source code at the path given, build it, and then write the necessary files to a docker image called ",e.exports.jsx(s.code,{children:"qt_project"})," by default."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"code-highlight",children:e.exports.jsx(s.span,{className:"code-line",children:`python3 build.py -s /path/to/src
`})})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"/path/to/src"})," specifies the absolute path to your source code (remember to ensure the filepath uses ",e.exports.jsx(s.code,{children:"//"})," separators if you're on Windows)."]}),`
`]}),`
`,e.exports.jsxs(s.p,{children:["Next run the project in a Docker container. This will run the previously built docker image ",e.exports.jsx(s.code,{children:"qt_project"})," in a docker container called ",e.exports.jsx(s.code,{children:"qt_app"})]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"code-highlight",children:e.exports.jsx(s.span,{className:"code-line",children:`python3 run.py -e executable_name
`})})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"executable_name"})," specifies the name of the executable which will eventually be run. Note that for all CS 1230 assignments, the executable name is exactly the project name specified in the assignment's ",e.exports.jsx(s.code,{children:"CMakeLists.txt"})," (it is the first thing in the parentheses in ",e.exports.jsx(s.code,{children:"project(...)"}),")."]}),`
`]}),`
`,e.exports.jsx(s.h4,{id:"running-ta-demo",children:e.exports.jsx(s.a,{href:"#running-ta-demo",children:"Running TA Demo"})}),`
`,e.exports.jsxs(s.p,{children:["Within the docker image are TA demos for each of the projects. These demos are available through the ",e.exports.jsx(s.code,{children:"run.py"})," script. Example usage is shown below."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"code-highlight",children:e.exports.jsx(s.span,{className:"code-line",children:`python3 run.py --demo -e executable_name -i anc2001/cs1230_env:latest
`})})}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"executable_name"})," is the name of the project you want to show. If the name has a ",e.exports.jsx(s.code,{children:"min"})," suffix, it will run the minimum working solution, and a ",e.exports.jsx(s.code,{children:"max"})," suffix will run an implementation with extra credit features implemented. The executable name options are",`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"projects_2d_min"})}),`
`,e.exports.jsx(s.li,{children:e.exports.jsx(s.code,{children:"projects_2d_max"})}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(s.div,{className:"warning-callout callout",children:e.exports.jsx(s.p,{children:"You may have noticed that the Ray and Realtime project demos are not yet available. TA demos of those projects will be available when their respective projects are released!"})}),`
`,e.exports.jsx(s.h4,{id:"script-usage",children:e.exports.jsx(s.a,{href:"#script-usage",children:"Script usage"})}),`
`,e.exports.jsxs(s.p,{children:["Note that ",e.exports.jsx(s.code,{children:"CONTAINER"})," and ",e.exports.jsx(s.code,{children:"IMAGE"})," can be anything you want. We suggest keeping the defaults, but feel free to change them if you want."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`usage: build.py [-h] -s SOURCE [-c CONTAINER] [-i IMAGE]
`}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsx(s.span,{className:"code-line",children:`optional arguments:
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -h, --help            show this help message and exit
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -s SOURCE, --source SOURCE
`}),e.exports.jsx(s.span,{className:"code-line",children:`                        absolute filepath to source code (required)
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -c CONTAINER, --container CONTAINER
`}),e.exports.jsx(s.span,{className:"code-line",children:`                        name of temporary container (default qt_build)
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -i IMAGE, --image IMAGE
`}),e.exports.jsx(s.span,{className:"code-line",children:`                        name of image (default qt_project)
`})]})}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`usage: run.py [-h] [--mode MODE] [--demo] -e EXECUTABLE [-c CONTAINER] [-i IMAGE]
`}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsx(s.span,{className:"code-line",children:`optional arguments:
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -h, --help            show this help message and exit
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --mode MODE           either graphical or cli
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --demo                Flag to specify running the TA demo
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -e EXECUTABLE, --executable EXECUTABLE
`}),e.exports.jsx(s.span,{className:"code-line",children:`                        name of executable (required)
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -c CONTAINER, --container CONTAINER
`}),e.exports.jsx(s.span,{className:"code-line",children:`                        name of container (default qt_app)
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -i IMAGE, --image IMAGE
`}),e.exports.jsx(s.span,{className:"code-line",children:`                        name of image (default qt_project)
`})]})}),`
`,e.exports.jsx(s.h2,{id:"in-case-of-failure-alternative-method-for-running-docker-locally",children:e.exports.jsx(s.a,{href:"#in-case-of-failure-alternative-method-for-running-docker-locally",children:"In Case of Failure: Alternative Method for Running Docker Locally"})}),`
`,e.exports.jsx(s.p,{children:"In case the convenience scripts fail, try the following steps to build and run your code in the standardized environment. The convenience scripts essentially run these commands for you, but in case of failure, working with Docker commands explicitly is more likely to be successful."}),`
`,e.exports.jsx(s.h3,{id:"building",children:e.exports.jsx(s.a,{href:"#building",children:"Building"})}),`
`,e.exports.jsx(s.p,{children:"To begin, we must define some environment variables for naming purposes. These follow the same naming requirements as the convenience scripts."}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`export SRC_PATH=/absolute-path/to/src \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  EXECUTABLE=executable_name \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  CONTAINER=qt_app \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  IMAGE=cs1230_qt_project
`})]})}),`
`,e.exports.jsxs(s.p,{children:["With these next commands, we'll actually build the project\u2014this will take your source code, build it, and write that image to a docker image named ",e.exports.jsx(s.code,{children:"IMAGE"}),"."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`docker run \\
`}),e.exports.jsx(s.span,{className:"code-line",children:"    --name ${CONTAINER} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:`    --platform=linux/amd64 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:'    -v "${SRC_PATH}:/tmp/src" \\\n'}),e.exports.jsx(s.span,{className:"code-line",children:`    anc2001/cs1230_env:latest \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`    /opt/build_project.sh
`}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsx(s.span,{className:"code-line",children:"docker image rm ${IMAGE}\n"}),e.exports.jsx(s.span,{className:"code-line",children:"docker commit ${CONTAINER} ${IMAGE}\n"}),e.exports.jsx(s.span,{className:"code-line",children:"docker container rm ${CONTAINER}\n"})]})}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Windows Git Bash Version"}),e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`docker run \\
`}),e.exports.jsx(s.span,{className:"code-line",children:"    --name ${CONTAINER} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:`    --platform=linux/amd64 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:'    -v "${SRC_PATH}://tmp//src" \\\n'}),e.exports.jsx(s.span,{className:"code-line",children:`    anc2001/cs1230_env:latest \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`    //opt//build_project.sh
`}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsx(s.span,{className:"code-line",children:"docker image rm ${IMAGE}\n"}),e.exports.jsx(s.span,{className:"code-line",children:"docker commit ${CONTAINER} ${IMAGE}\n"}),e.exports.jsx(s.span,{className:"code-line",children:"docker container rm ${CONTAINER}\n"})]})})]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What do the above commands actually do?"}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"--name"})," specifies the name of the container"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"--platform"})," specifies the architecture the docker container will run on"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:'-v "${SRC_PATH}:/tmp/src"'})," mounts a volume in the container. The files at ",e.exports.jsx(s.code,{children:"SRC_PATH"})," (the project source code) will be accessible at ",e.exports.jsx(s.code,{children:"/tmp/src"})," within the container"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"anc2001/cs1230_env:latest"})," is the name of the Docker Image the container is based on"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"/opt/build_project.sh"})," is the script the docker container will run upon starting"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"docker image rm ${IMAGE}"})," - deletes the previous image at ",e.exports.jsx(s.code,{children:"IMAGE"})]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"docker commit ${CONTAINER} ${IMAGE}"})," - saves the container as permanent memory at ",e.exports.jsx(s.code,{children:"IMAGE"}),", otherwise the compiled executable will disappear after the container is removed"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"docker container rm ${CONTAINER}"})," - Remove the container"]})]}),`
`,e.exports.jsx(s.h3,{id:"running",children:e.exports.jsx(s.a,{href:"#running",children:"Running"})}),`
`,e.exports.jsx(s.h4,{id:"graphical-output-raster-and-realtime-projects",children:e.exports.jsx(s.a,{href:"#graphical-output-raster-and-realtime-projects",children:"Graphical Output (Raster and Realtime projects)"})}),`
`,e.exports.jsxs(s.p,{children:["This will run the previously build docker image (",e.exports.jsx(s.code,{children:"cs1230_qt_project"}),") in a docker container and connect it to a graphical display accessible within any modern browser at ",e.exports.jsx(s.code,{children:"http://localhost:6080"}),":"]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`docker run \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --platform=linux/amd64 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -d \\
`}),e.exports.jsx(s.span,{className:"code-line",children:"  --name ${CONTAINER} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:'  --env="APP=/tmp/build/${EXECUTABLE}" \\\n'}),e.exports.jsx(s.span,{className:"code-line",children:`  -p 6080:6080 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:"  ${IMAGE} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:`  /usr/bin/supervisord -c /etc/supervisor/supervisord.conf
`})]})}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Windows Git Bash Version"}),e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`docker run \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --platform=linux/amd64 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -d \\
`}),e.exports.jsx(s.span,{className:"code-line",children:"  --name ${CONTAINER} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:'  --env="APP=//tmp//build//${EXECUTABLE}" \\\n'}),e.exports.jsx(s.span,{className:"code-line",children:`  -p 6080:6080 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:"  ${IMAGE} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:`  //usr//bin//supervisord -c //etc//supervisor//supervisord.conf
`})]})})]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What do the above commands actually do?"}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"-d"})," means the container runs in detached mode (i.e. in the background)."]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"--env"})," sets the environment variable ",e.exports.jsx(s.code,{children:"APP"})," inside the container. By default the ",e.exports.jsx(s.code,{children:"APP"})," environment variable is not set. If the ",e.exports.jsx(s.code,{children:"APP"})," environment variable points to an invalid path or is empty, no graphical output will show when connected to the localhost (the container will still run)"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"-p"})," opens up a port at 6080 by default, you can change this if you really want by changing the first argument number."]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"/usr/bin/supervisord -c /etc/supervisor/supervisord.conf"})," is the command to open up a graphical session and expose it at the corresponding port."]})]}),`
`,e.exports.jsxs(s.p,{children:["The application should now be available at ",e.exports.jsx(s.code,{children:"http://localhost:6080"})]}),`
`,e.exports.jsxs(s.p,{children:["When you're done with the docker container you can run ",e.exports.jsx(s.code,{children:"docker stop ${CONTAINER}"})," and ",e.exports.jsx(s.code,{children:"docker container rm ${CONTAINER}"})]}),`
`,e.exports.jsx(s.h4,{id:"command-line-ray-projects",children:e.exports.jsx(s.a,{href:"#command-line-ray-projects",children:"Command Line (Ray projects)"})}),`
`,e.exports.jsxs(s.p,{children:["This will open up the previously built image with an interactive terminal session that allows you to run the executable. Since the example is Ray, It will also mount a volume at ",e.exports.jsx(s.code,{children:"RESULTS_PATH"})," so that you can see the resulting images."]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`export RESULTS_PATH=/path/to/results
`}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsx(s.span,{className:"code-line",children:`docker run \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --rm \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -it \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --platform=linux/amd64 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:'  -v "${RESULTS_PATH}:/tmp/results" \\\n'}),e.exports.jsx(s.span,{className:"code-line",children:"  ${IMAGE} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:`  /bin/bash
`})]})}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Windows Git Bash Version"}),e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:`export RESULTS_PATH=//path//to//results
`}),e.exports.jsx(s.span,{className:"code-line",children:`
`}),e.exports.jsx(s.span,{className:"code-line",children:`docker run \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --rm \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  -it \\
`}),e.exports.jsx(s.span,{className:"code-line",children:`  --platform=linux/amd64 \\
`}),e.exports.jsx(s.span,{className:"code-line",children:'  -v "${RESULTS_PATH}://tmp//results" \\\n'}),e.exports.jsx(s.span,{className:"code-line",children:"  ${IMAGE} \\\n"}),e.exports.jsx(s.span,{className:"code-line",children:`  //bin//bash
`})]})})]}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"What do the above commands actually do?"}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"-it"})," specifies an interactive session"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"--rm"})," will remove the container when exited"]}),e.exports.jsxs(s.p,{children:[e.exports.jsx(s.code,{children:"/bin/bash"})," is the command to open up ",e.exports.jsx(s.code,{children:"bash"})," upon starting the container"]})]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Ray-specific"}),": Make sure your ",e.exports.jsx(s.code,{children:".ini"})," files point to an output image at ",e.exports.jsx(s.code,{children:"/tmp/results"})," so that you can see your images!"]}),`
`,e.exports.jsx(s.h3,{id:"running-ta-demos",children:e.exports.jsx(s.a,{href:"#running-ta-demos",children:"Running TA demos"})}),`
`,e.exports.jsxs(s.p,{children:["If the python script fails when running the TA demo, try going through sections ",e.exports.jsx(s.code,{children:"4.1 - 4.2"})," again but with"]}),`
`,e.exports.jsxs(s.ul,{children:[`
`,e.exports.jsxs(s.li,{children:[e.exports.jsx(s.code,{children:"IMAGE"})," environment variable set to ",e.exports.jsx(s.code,{children:"anc2001/cs1230_env:latest"}),"."]}),`
`,e.exports.jsxs(s.li,{children:["The docker run command for running the graphical application in ",e.exports.jsx(s.code,{children:"4.2.1"})," edited. Replace the value of ",e.exports.jsx(s.code,{children:"APP"})," with ",e.exports.jsx(s.code,{children:"/demos/executable_name/build/executable_name_prefix"}),". For example"]}),`
`]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsxs(s.code,{className:"code-highlight",children:[e.exports.jsx(s.span,{className:"code-line",children:'--env="APP=/tmp/build/${EXECUTABLE}"\n'}),e.exports.jsx(s.span,{className:"code-line",children:`  ===>
`}),e.exports.jsx(s.span,{className:"code-line",children:`--env="APP=/demos/projects_2d_min/build/projects_2d"
`})]})}),`
`,e.exports.jsx(o,{})]})]})}function l(n={}){const{wrapper:s}=n.components||{};return s?e.exports.jsx(s,Object.assign({},n,{children:e.exports.jsx(r,n)})):r(n)}export{l as default,c as documentProps};
