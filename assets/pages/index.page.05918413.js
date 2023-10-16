import{r as i,j as e}from"../chunk-b0d73203.js";const m=[{name:"Daniel Ritchie",type:"Professor",pronouns:"he/him",csLogin:"dritchi1",imageSrc:"/staff/daniel.jpg",hoverImage:"/staff-p/daniel-p.jpeg",color:"#112266",blurb:"Has an Erd\u0151s number of 4, a Bacon number of 3, and (debatably) an Erd\u0151s-Bacon number of 7."},{name:"Dylan Hu",type:"HTA",pronouns:"he/him",csLogin:"dhu24",imageSrc:"/staff/dylan.jpg",hoverImage:"/staff-p/dylan-p.jpg",color:"#965C29",blurb:"Is a senior from Massachusetts. Between perms. Wants to dye his hair orange. Enjoys grapefruit."},{name:"William Sun",type:"HTA",pronouns:"he/him",csLogin:"wsun28",imageSrc:"/staff/will.jpg",hoverImage:"/staff-p/will-p.jpg",color:"#99c9c2",blurb:"Is a concurrent masters student in Computer Science. Enjoys anime, memes, the Japanese language, memes, the violin, and memes."},{name:"Orion Bloomfield",type:"TA",pronouns:"he/him",csLogin:"obloomfi",imageSrc:"/staff/orion.jpg",hoverImage:"/staff-p/orion-p.jpg",color:"#9B9BBD",blurb:'Enjoys Norwalk, Connecticut (but has never been). Sings in acapella. Afraid of <a href="https://jpst.it/3mx-v">cryptic crosswords.</a>'},{name:"Jared Cambier",type:"TA",pronouns:"he/him",csLogin:"jcambier",imageSrc:"/staff/jared.jpg",hoverImage:"/staff-p/jared-p.jpg",color:"#6286a1",blurb:"I'm a senior from Kansas City. In my free time, I like playing bullet chess and video games (Stardew Valley recently). I also enjoy listening to jazz."},{name:"Jamie Chen",type:"TA",pronouns:"he/him",csLogin:"achen309",imageSrc:"/staff/jamie.jpg",hoverImage:"/staff-p/jamie-p.jpg",color:"#dabbed",blurb:"Is a second-yr master student in CS from Shenzhen. Loves everything glowy and volumetric \u{1F9CA}."},{name:"Tomas Dougan",type:"TA",pronouns:"he/him",csLogin:"tdougan1",imageSrc:"/staff/tomas.jpg",hoverImage:"/staff-p/tomas-p.jpg",color:"#39C5BB",blurb:"Hello!  I'm a junior from Athens, GA.  I'm interested in compilers, graphics, math, and hardware.  I also like rock climbing, drawing, and TV!  My favorite programming language is C."},{name:"Austin Funk",type:"TA",pronouns:"he/him",csLogin:"afunk3",imageSrc:"/staff/austin.jpg",hoverImage:"/staff-p/austin-p.jpg",color:"#bb51f5",blurb:"Is a junior from Charlottesville, VA (shoutout to my fellow TA, Stewart). Enjoys playing saxophone, feeding goats grass (from the ground), and reading fantasy books!"},{name:"Kazen Gallman",type:"TA",pronouns:"he/him",csLogin:"kgallman",imageSrc:"/staff/kazen.jpg",hoverImage:"/staff-p/kazen-p.jpg",color:"#5400db",blurb:`Hello! I'm a senior from RI studying CS and Cog Neuro, in my free time i'm probably playing video games, reading manga, playing volleyball, or sleeping, but I also like to make <a target="_blank" style="color: blue !important;" href="https://kazar4.com">really bad websites</a> :D`},{name:"Helen Huang",type:"TA",pronouns:"she/her",csLogin:"hhuang65",imageSrc:"/staff/helen.jpg",hoverImage:"/staff-p/helen-p.jpg",color:"#47010e",blurb:"Is a senior from Massachusetts. Favorite uses of graphics: art and video games."},{name:"Mehek Jethani",type:"TA",pronouns:"she/her",csLogin:"mjethani",imageSrc:"/staff/mehek.jpg",hoverImage:"/staff-p/mehek-p.jpg",color:"#f3dcfa",blurb:"Is a senior from NJ studying CS. Favorite use of graphics: movie VFX."},{name:"Stewart Morris",type:"TA",pronouns:"he/him",csLogin:"smorri21",imageSrc:"/staff/stewart.jpg",hoverImage:"/staff-p/stewart-p.jpg",color:"#00A8FF",blurb:"Is a junior from Charlottesville, VA (shoutout to my fellow TA, Austin). Enjoys playing guitar, watching movies, and going for the occasional hike!"},{name:"Sebastian Park",type:"TA",pronouns:"he/him",csLogin:"spark265",imageSrc:"/staff/sebastian.jpg",hoverImage:"/staff-p/sebastian-p.jpg",color:"#94cf91",blurb:"Hi. I\u2019m a junior from Massachusetts who likes talking and jazz and making sound with his mouth. Favorite use of graphics: The Lego Movie."},{name:"Anh Truong",type:"TA",pronouns:"he/him",csLogin:"dtruong7",imageSrc:"/staff/anh.jpg",hoverImage:"/staff-p/anh-p.jpg",color:"#000000",blurb:"Really enjoys playing the piano and seeing real, unharmed bunnies."},{name:"Nick Vadasz",type:"TA",pronouns:"he/him",csLogin:"nvadasz",imageSrc:"/staff/nick.jpg",hoverImage:"/staff-p/nick-p.jpg",color:"#e05409",blurb:"is a senior from Texas studying CS. Ruminates to shoegaze. Enjoyer of brutalist web design. Loves cold pasta. Fan of the color blue."},{name:"Smriti Vaidyanathan",type:"TA",pronouns:"she/her",csLogin:"svaidya4",imageSrc:"/staff/smriti.jpg",hoverImage:"/staff-p/smriti-p.jpg",color:"#295ee3",blurb:"Senior from the San Francisco Bay Area. Enjoys singing, cooking, molecular biology, and gymming."},{name:"Krishi Saripalli ",type:"Dev TA",pronouns:"he/him",csLogin:"ksaripal",imageSrc:"/staff/krishi.jpg",hoverImage:"/staff-p/krishi-p.jpg",color:"#112266",blurb:'I\u2019m a senior from the San Francisco Bay Area and a (fake) TA for this course. I like interactive graphics software, like Spline, and making things with <a target="_blank" href="https://en.wikipedia.org/wiki/Bloom_(shader_effect)">bloom</a>.'}];function p(){const[a,r]=i.exports.useState(!1),n=o=>r(o);return e.exports.jsx("div",{className:"staff-cards",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:m.map((o,t)=>i.exports.createElement(g,{...o,key:t,mouse:s=>r(s),hovering:a}))})}function g({name:a,type:r,csLogin:n,pronouns:o,imageSrc:t,hoverImage:s,color:c,blurb:d,mouse:f,hovering:h}){return e.exports.jsxs("div",{className:"pantone-card",children:[e.exports.jsx("div",{className:"pantone-card-image-outer",style:{backgroundColor:c},children:e.exports.jsx("div",{className:"pantone-card-image-inner",children:e.exports.jsx("img",{className:"pantone-card-image",src:h&&s?s:t,alt:"A picture of "+a})})}),e.exports.jsxs("div",{className:"pantone-card-content",children:[e.exports.jsxs("strong",{className:"card-title",children:[a,e.exports.jsx("sup",{children:"\xAE"})]}),e.exports.jsxs("p",{className:"card-subtitle",children:[r," \u2022 ",n," \u2022 ",o]}),e.exports.jsx("p",{className:"card-body",dangerouslySetInnerHTML:{__html:d}})]})]})}const x={title:"Home"};function l(a){const r=Object.assign({nav:"nav",ol:"ol",li:"li",a:"a",main:"main",h1:"h1",p:"p",h2:"h2",em:"em",strong:"strong",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},a.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(r.nav,{className:"toc",children:e.exports.jsx(r.ol,{className:"toc-level toc-level-1",children:e.exports.jsxs(r.li,{className:"toc-item toc-item-h1",children:[e.exports.jsx(r.a,{className:"toc-link toc-link-h1",href:"#welcome-to-cs-1230",children:"Welcome to CS 1230!"}),e.exports.jsxs(r.ol,{className:"toc-level toc-level-2",children:[e.exports.jsx(r.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(r.a,{className:"toc-link toc-link-h2",href:"#calendar",children:"Calendar"})}),e.exports.jsx(r.li,{className:"toc-item toc-item-h2",children:e.exports.jsx(r.a,{className:"toc-link toc-link-h2",href:"#staff",children:"Staff"})})]})]})})}),e.exports.jsxs(r.main,{children:[`
`,`
`,e.exports.jsx(r.h1,{id:"welcome-to-cs-1230",children:e.exports.jsx(r.a,{href:"#welcome-to-cs-1230",children:"Welcome to CS 1230!"})}),`
`,e.exports.jsx(r.p,{children:"Welcome to CS 1230, the longest-running computer graphics course in the known universe!"}),`
`,e.exports.jsx(r.p,{children:"This course offers an in-depth exploration of fundamental concepts in 2D and 3D computer graphics. It introduces 2D raster graphics techniques (image creation/manipulation/filtering), as well as 3D modeling, viewing, and rendering (using both raytracing and real-time rendering on the GPU). Along the way, you'll learn to program in C++ and the shading language GLSL, and learn to use the OpenGL library. The course culminates in an open-ended group final project in which you and your teammates use the skills you've learned throughout the semester to make some cool visual effects."}),`
`,e.exports.jsxs(r.p,{children:["Check out the ",e.exports.jsx(r.a,{href:"/docs/course-missive",children:"course missive"})," for more information on prerequisites, assignments, workload, etc."]}),`
`,e.exports.jsx(r.h2,{id:"calendar",children:e.exports.jsx(r.a,{href:"#calendar",children:"Calendar"})}),`
`,e.exports.jsx(r.p,{children:e.exports.jsx(r.em,{children:"Tip: Use the dropdown at the top right of the Google Calendar embed to filter by event type!"})}),`
`,e.exports.jsx("iframe",{src:"https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&title=CSCI%201230&showPrint=0&src=Y182NmI5ZGNkYWIxNjcwNTg1OTQ1NjBhNmM5ZDk1Y2ZiY2UxOWJmNTg5YjUxM2VmZWRlOTJjYmM2ZmNiYjg5ZDJhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y184ZjlmMThkYjhlYzMzZTA2NTIxYzk0OWY3OTcyOTk2ZGIwMTgxNThhZmE2NGFmNTVlY2Y1NGI2ZmIxMWNjNTc1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19mOGI4ODE2ZDFhODUzNDUzMDA4OTNkM2I4NGQxZmM0NDhhYTkzY2FiZTVlZjQyYzhmNjU4ZGJkMDFlZWFhNmMyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19mNGVlYmE3YmJiOTQwMjJkNDBmNTBiZjQ3ZGQ3MmQ5YTdjZTUzZGY1MDhmYzdjNzYxMzc1ZjA5ZWUwMDJjNzVlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y19hMjA1Mjg3YTNkMjk0ZTc0Yjc2YTVhZTczMWE1Mjg0MjJlYTE3OTcwNzhmYjk5MzU4NzY5MzQyN2MwOTJmZGE1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23b70e0d&color=%23c86000&color=%23c09a00&color=%2333b679&color=%230069a2",style:{backgroundColor:"white",borderRadius:10},width:"100%",height:"600",frameBorder:"0",scrolling:"no"}),`
`,e.exports.jsxs("details",{children:[e.exports.jsx("summary",{children:"Google Calendar and iCalendar subscription links"}),e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"For Google Calendar"}),": While logged in to your Google account, click on the links below to add them to your Google Calendar."]}),e.exports.jsxs(r.p,{children:[e.exports.jsx(r.strong,{children:"For iCalendar"}),': Secondary-click on the links below and select "Copy Link Address" to copy the link to your clipboard. Then, follow the instructions for your calendar app to add a calendar subscription using the link. ',e.exports.jsx(r.strong,{children:"Do not"})," download and import the ",e.exports.jsx(r.code,{children:".ics"})," files directly, as they will not update if the calendar changes."]}),e.exports.jsxs(r.table,{children:[e.exports.jsx(r.thead,{children:e.exports.jsxs(r.tr,{children:[e.exports.jsx(r.th,{align:"left",children:"Name"}),e.exports.jsx(r.th,{align:"left",children:"Google Calendar"}),e.exports.jsx(r.th,{align:"left",children:"iCalendar"}),e.exports.jsx(r.th,{align:"left",children:"Description"})]})}),e.exports.jsxs(r.tbody,{children:[e.exports.jsxs(r.tr,{children:[e.exports.jsx(r.td,{align:"left",children:"Assignments"}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/u/0?cid=Y182NmI5ZGNkYWIxNjcwNTg1OTQ1NjBhNmM5ZDk1Y2ZiY2UxOWJmNTg5YjUxM2VmZWRlOTJjYmM2ZmNiYjg5ZDJhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/ical/c_66b9dcdab167058594560a6c9d95cfbce19bf589b513efede92cbc6fcbb89d2a%40group.calendar.google.com/public/basic.ics",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:"Contains project and lab timelines."})]}),e.exports.jsxs(r.tr,{children:[e.exports.jsx(r.td,{align:"left",children:"Ed Hours"}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/u/0?cid=Y184ZjlmMThkYjhlYzMzZTA2NTIxYzk0OWY3OTcyOTk2ZGIwMTgxNThhZmE2NGFmNTVlY2Y1NGI2ZmIxMWNjNTc1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/ical/c_8f9f18db8ec33e06521c949f7972996db018158afa64af55ecf54b6fb11cc575%40group.calendar.google.com/public/basic.ics",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:"Contains Ed hours."})]}),e.exports.jsxs(r.tr,{children:[e.exports.jsx(r.td,{align:"left",children:"Hours"}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/u/0?cid=Y19mOGI4ODE2ZDFhODUzNDUzMDA4OTNkM2I4NGQxZmM0NDhhYTkzY2FiZTVlZjQyYzhmNjU4ZGJkMDFlZWFhNmMyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/ical/c_f8b8816d1a85345300893d3b84d1fc448aa93cabe5ef42c8f658dbd01eeaa6c2%40group.calendar.google.com/public/basic.ics",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:"Contains TA hours and Daniel's office hours."})]}),e.exports.jsxs(r.tr,{children:[e.exports.jsx(r.td,{align:"left",children:"Lectures"}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/u/0?cid=Y19mNGVlYmE3YmJiOTQwMjJkNDBmNTBiZjQ3ZGQ3MmQ5YTdjZTUzZGY1MDhmYzdjNzYxMzc1ZjA5ZWUwMDJjNzVlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/ical/c_f4eeba7bbb94022d40f50bf47dd72d9a7ce53df508fc7c761375f09ee002c75e%40group.calendar.google.com/public/basic.ics",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:"Contains lectures and other events held during lecture."})]}),e.exports.jsxs(r.tr,{children:[e.exports.jsx(r.td,{align:"left",children:"Mentor Meetings"}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/u/0?cid=Y19hMjA1Mjg3YTNkMjk0ZTc0Yjc2YTVhZTczMWE1Mjg0MjJlYTE3OTcwNzhmYjk5MzU4NzY5MzQyN2MwOTJmZGE1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:e.exports.jsx(r.a,{href:"https://calendar.google.com/calendar/ical/c_a205287a3d294e74b76a5ae731a528422ea1797078fb993587693427c092fda5%40group.calendar.google.com/public/basic.ics",target:"_blank",rel:"noopener noreferrer",children:"Link"})}),e.exports.jsx(r.td,{align:"left",children:"Contains Mentor Meeting slots."})]})]})]})]}),`
`,e.exports.jsx(r.h2,{id:"staff",children:e.exports.jsx(r.a,{href:"#staff",children:"Staff"})}),`
`,e.exports.jsx(r.p,{children:"CS 1230 was built by the following lovely people:"}),`
`,e.exports.jsx(p,{})]})]})}function u(a={}){const{wrapper:r}=a.components||{};return r?e.exports.jsx(r,Object.assign({},a,{children:e.exports.jsx(l,a)})):l(a)}export{u as default,x as documentProps};