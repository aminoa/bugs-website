/*! For license information please see component---src-pages-about-tsx-9bc0744e2d0a39a73c46.js.LICENSE.txt */
(self.webpackChunkbugs_nyu_github_io=self.webpackChunkbugs_nyu_github_io||[]).push([[49],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},5815:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294);const i={base:"",disabled:"opacity-50 cursor-not-allowed",size:{small:"px-2 py-1 text-sm",normal:"px-4 py-2",large:"px-8 py-3 text-lg"},radius:{small:"rounded-sm",normal:"rounded",large:"rounded-lg"},variant:{default:"bg-white dark:bg-neutral-900 dark:border-gray-300 border-gray-300 border hover:bg-gray-100 text-black dark:text-white",primary:"bg-neutral-900 dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-600 text-white",secondary:"bg-violet-800 hover:bg-violet-600 text-white"}},l=o.forwardRef(((e,t)=>{let{children:r,type:n,className:l,variant:s="default",size:c="normal",radius:m="normal",disabled:u,...d}=e;return o.createElement("button",Object.assign({ref:t,disabled:u,type:n,className:a()(i.base,i.size[c],i.radius[m],i.variant[s],u&&i.disabled,l)},d),r)}));l.displayName="Button",t.Z=l},4223:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),o=r(7294);const i={base:"bg-white border-gray-300 border dark:bg-neutral-900 dark:border-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors",size:{small:"p-4 text-sm",normal:"p-8",large:"p-16 text-lg"},radius:{small:"rounded-sm",normal:"rounded-lg",large:"rounded-2xl"},shadow:{none:"",normal:"drop-shadow-[0_8px_16px_rgba(151,151,151,0.25)]"}};function l(e){let{children:t,size:r="normal",radius:n="normal",shadow:l="none",link:s}=e;const c=a()(i.base,i.size[r],i.radius[n],i.shadow[l]);return void 0===s?o.createElement("div",{className:c},t):o.createElement("a",{href:s,target:"_blank",rel:"noreferrer",className:c},t)}l.displayName="Card",t.Z=l},4255:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var n=r(7294),a=r(1883),o=r(1292),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};var l=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=i(i({},r),e);return n.createElement("svg",i({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)};var c=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=s(s({},r),e);return n.createElement("svg",s({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M3 5h18M3 12h18M3 19h18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),m=r(5815);const u="bugsThemeStorageKey";function d(){return"undefined"==typeof window}function h(){var e;return d()?"dark":null!==(e=localStorage.getItem(u))&&void 0!==e?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function g(e){d()||localStorage.setItem(u,e)}const p=(0,n.createContext)({currentTheme:"light",toggleCurrentTheme:()=>g("dark")});function f(){return(0,n.useContext)(p)}function v(e){let{children:t}=e;const{0:r,1:a}=(0,n.useState)(h);return n.createElement(p.Provider,{value:{currentTheme:r,toggleCurrentTheme:()=>{a((e=>{const t="light"===e?"dark":"light";return g(t),t}))}}},t)}const w=[{to:"/about",value:"About us"},{to:"/projects",value:"Projects"},{to:"/events",value:"Events"},{to:"/alumni",value:"Alumni"}];function b(){const{currentTheme:e,toggleCurrentTheme:t}=f(),{0:r,1:o}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>o(!1);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);return n.createElement("header",null,n.createElement("nav",{className:"flex max-w-5xl mx-auto items-center justify-between flex-wrap p-8"},n.createElement("div",{className:"flex items-center flex-shrink-0"},n.createElement(a.Link,{to:"/",className:"text-xl font-bold dark:text-stone-100"},"BUGS")),n.createElement("div",{className:"block md:hidden"},n.createElement("button",{className:"flex w-10 h-10 items-center justify-center",onClick:()=>o((e=>!e))},r?n.createElement(l,null):n.createElement(c,null))),n.createElement("div",{className:(r?"h-44":"h-0")+" w-full block truncate flex-grow mt-2 transition-height duration-100 md:mt-0 md:flex md:items-center md:w-auto md:h-auto"},n.createElement("div",{className:"md:flex md:flex-row md:flex-grow md:space-x-12 md:justify-center"},w.map((e=>{let{to:t,value:r}=e;return n.createElement(a.Link,{key:r,to:t,className:"text-zinc-800 block mb-4 md:mb-0 md:inline-block dark:text-stone-100"},r)}))),n.createElement("div",{className:"md:flex md:flex-row gap-2"},n.createElement("a",{href:"https://discord.gg/75jgtXy7rz"},n.createElement(m.Z,{variant:"secondary",className:"px-6"},"Join")),n.createElement(m.Z,{variant:"primary",className:"pv-6",onClick:t},"light"===e?"☀️ ":"🌙")))))}b.displayName="NavBar";var x=b,y=r(762),k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},k.apply(this,arguments)};var E=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=k(k({},r),e);return n.createElement("svg",k({width:"1.5em",height:"1.5em",viewBox:"0 0 24 24",strokeWidth:1.5,fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))})),j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},j.apply(this,arguments)};var C=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=j(j({},r),e);return n.createElement("svg",j({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M7 9l5 3.5L17 9",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z",stroke:"currentColor"}))})),N=function(){return N=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},N.apply(this,arguments)};var S=n.forwardRef((function(e,t){var r=n.useContext(o.s),a=N(N({},r),e);return n.createElement("svg",N({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},a),n.createElement("path",{d:"M12 16a4 4 0 100-8 4 4 0 000 8z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z",stroke:"currentColor"}),n.createElement("path",{d:"M17.5 6.51l.01-.011",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))}));const L=[{to:"https://github.com/BUGS-NYU",getMark:()=>n.createElement(y.Z,null)},{to:"https://discord.com/invite/75jgtXy7rz",getMark:()=>n.createElement(E,null)},{to:"mailto:bugsnyu@gmail.com",getMark:()=>n.createElement(C,null)},{to:"https://www.instagram.com/bugsnyu/",getMark:()=>n.createElement(S,null)}];function M(){return n.createElement("footer",{className:"w-full bg-[#3D1E5B] text-white"},n.createElement("div",{className:"mx-auto max-w-5xl px-8 py-24 flex flex-col gap-12 items-start justify-between md:flex-row md:items-center md:gap-0"},n.createElement("div",{className:"flex flex-col gap-y-4"},n.createElement("p",{className:"text-xl font-bold"},"BUGS @ NYU"),n.createElement("p",null,"NYU’s premier open source club"),n.createElement("div",{className:"flex flex-row gap-x-4"},L.map((e=>{let{to:t,getMark:r}=e;return n.createElement("a",{key:t,href:t,target:"_blank",rel:"noopener noreferrer"},r())})))),n.createElement("p",null,n.createElement("a",{href:"https://discord.com/invite/75jgtXy7rz",className:"text-purple-400 font-bold",target:"_blank",rel:"noopener noreferrer"},"Join us")," ","now and contribute to this website!")))}M.displayName="Footer";var A=M;const O=e=>{let{children:t}=e;const{currentTheme:r}=f();return n.createElement("div",{className:"min-h-screen antialiased "+r},n.createElement("div",{className:"light:bg-white dark:bg-zinc-900"},n.createElement(x,null),n.createElement("main",{className:"w-full min-h-[calc(100vh-12rem)] dark:text-white"},t),n.createElement(A,null)))};var I=e=>{let{children:t}=e;return n.createElement(v,null,n.createElement(O,null,t))}},2598:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return m},default:function(){return c}});var n=r(7294),a=r(1883),o=r(4255),i=r(4223);const l=[{name:"Abigal Zhou",description:"Abigail is a junior majoring in CS at CAS with an interest in operating systems and machine learning. She’s currently exploring the fintech space and enjoys trying new restaurants and running in her free time!",profileImg:"/images/team/abigal.jpg",role:"President"},{name:"Alex Ying",description:"Alex Ying is a Junior studying CS in Tandon. He enjoys skiing, rock climbing, and learning about cool algorithms. He is currently teaching himself how to cook (with mixed results).",profileImg:"/images/team/alexyi.jpg",role:"Lead Event Coordinator"},{name:"Alex Jia",description:"Alex Jia is a freshman majoring in computer science and mathematics at CAS. They were born in Xi’an and raised in Seattle. They are interested in the intersection between image processing and machine learning. In their free time, they enjoy hanging out with friends, watching anime, and going to cons.",profileImg:"/images/team/alexj.jpg",role:"Event Coordinator | Developer"},{name:"Phil",description:"Phil is a Freshman, Studying CS at CAS",profileImg:"/images/team/phil.jpg",role:"Event Coordinator"},{name:"Sewon Kim",description:"As a passionate musician who has been composing and performing on the clarinet from an early age, Sewon has a great interest in the art of creation. For this reason, Sewon believes that computer science means more than simple coding as it is a form of art, built of inspirations and innovations.",profileImg:"/images/team/sewon.jpg",role:"Website Designer"},{name:"Isha Gopal",description:"Isha is a sophomore studying CS at CAS, minoring in Economics and Film. In her free time, she’s either dancing, drawing, or playing video games!",profileImg:"/images/team/isha.jpg",role:"Graphic Designer"},{name:"Riley Dou",description:"Riley is a sophomore studying CS at Tandon. Born near the brown waters of Galveston, Texas, she enjoys dancing and skiing, and really really really likes dogs.",profileImg:"/images/team/riley.jpg",role:"Communications | Photographer"},{name:"Elaine Zou",description:"Elaine is a sophomore majoring in Business and CS at CAS. Originally from northern Virginia, she enjoys reading, drawing, and exploring New York in her free time.",profileImg:"/images/team/elaine.jpg",role:"Treasurer"},{name:"Lawrence",description:"Lawrence is a senior studying CS and Math at CAS. He likes abstract stuff. Besides coding, he also enjoys coffee brewing☕️ and singing🎤 a lot.",profileImg:"/images/team/lawrence.jpg",role:"CS Wiki Writer"},{name:"Faith Winford",description:"Faith Winford is a freshman studying CS and Philosophy at CAS. She’s interested in the intersection of AI and ethics. In her free time she likes listening to music and going to conerts.",profileImg:"/images/team/faith.jpg",role:"Website Maintainer"}],s=e=>{let{name:t,description:r,profileImg:a,role:o}=e;return n.createElement(i.Z,{shadow:"none",className:"flex flex-col items-center"},n.createElement("div",{className:"w-full h-64 overflow-hidden rounded-t-lg"},n.createElement("img",{className:"w-full h-full object-cover",src:a,alt:""})),n.createElement("h3",{className:"mt-6 text-xl font-bold"},t),n.createElement("h3",{className:" text-xl"},o),n.createElement("p",{className:"mt-2"},r))};var c=()=>{const e=(0,a.useStaticQuery)("1590930727").allFile.nodes.reduce(((e,t)=>{if("netid1234"!==t.name&&"README"!==t.name){const r=t.fields.content;e.push(r)}return e}),[]);e.sort(((e,t)=>e.toLowerCase().localeCompare(t.toLowerCase())));const t=new Intl.ListFormat("en",{style:"long",type:"conjunction"});return n.createElement(o.Z,null,n.createElement("div",{className:"max-w-5xl mx-auto px-8 flex flex-col py-8"},n.createElement("h1",{className:"text-4xl font-bold"},"About Us"),n.createElement("p",{className:"mt-4"},"BUGS is the premier open source club at NYU; we advocate for the ideals of open source via first-hand experience of students having an exciting and inclusive environment for them to develop their own projects, work together with other members on larger projects, and take their skills to contribute to pre-existing open source projects."),n.createElement("h2",{className:"mt-12 text-4xl font-bold"},"Executive Board"),n.createElement("div",{className:"mt-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"},l.map((e=>n.createElement(s,Object.assign({key:e.name},e))))),n.createElement("h2",{className:"mt-12 text-4xl font-bold"},"Members"),n.createElement("div",{className:"mt-4 mb-16"},n.createElement("p",null,"A list of some of our active members (in alphabetical order):"," ",t.format(e)),n.createElement("p",{className:"mt-4"},"Want your name to be a part of this list? Make a"," ",n.createElement("a",{className:"text-purple-600 font-semibold",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/BUGS-NYU/bugs-nyu.github.io/tree/main/src/data/members"},"pull request!")))))};const m=()=>n.createElement("title",null,"About")},762:function(e,t,r){"use strict";var n=r(7294),a=r(1292),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};var i=n.forwardRef((function(e,t){var r=n.useContext(a.s),i=o(o({},r),e);return n.createElement("svg",o({width:"1.5em",height:"1.5em",strokeWidth:1.5,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"currentColor",ref:t},i),n.createElement("path",{d:"M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}))}));t.Z=i},1292:function(e,t,r){"use strict";r.d(t,{s:function(){return n}});var n=r(7294).createContext({})}}]);
//# sourceMappingURL=component---src-pages-about-tsx-9bc0744e2d0a39a73c46.js.map