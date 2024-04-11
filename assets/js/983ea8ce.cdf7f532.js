/*! For license information please see 983ea8ce.cdf7f532.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60763],{35185:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(85893),i=r(11151);const d={sidebar_label:"LaunchOptions"},t="LaunchOptions interface",c={id:"api/puppeteer.launchoptions",title:"LaunchOptions interface",description:"Generic launch options that can be passed when launching any browser.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.launchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions",permalink:"/api/puppeteer.launchoptions",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"api",previous:{title:"launch",permalink:"/api/puppeteer.launch"},next:{title:"Locator",permalink:"/api/puppeteer.locator"}},l={},h=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"launchoptions-interface",children:"LaunchOptions interface"}),"\n",(0,s.jsx)(n.p,{children:"Generic launch options that can be passed when launching any browser."}),"\n",(0,s.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export interface LaunchOptions\n"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(n.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"channel",children:"channel"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.chromereleasechannel",children:"ChromeReleaseChannel"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Chrome Release Channel"})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"dumpio",children:"dumpio"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["If true, pipes the browser process stdout and stderr to ",(0,s.jsx)(n.code,{children:"process.stdout"})," and ",(0,s.jsx)(n.code,{children:"process.stderr"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"env",children:"env"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Record<string, string | undefined>"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Specify environment variables that will be visible to the browser."})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["The contents of ",(0,s.jsx)(n.code,{children:"process.env"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"executablepath",children:"executablePath"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"extraprefsfirefox",children:"extraPrefsFirefox"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Record<string, unknown>"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js",children:"Additional preferences"})," that can be passed when launching with Firefox."]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"handlesighup",children:"handleSIGHUP"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Close the browser process on ",(0,s.jsx)(n.code,{children:"SIGHUP"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"handlesigint",children:"handleSIGINT"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Close the browser process on ",(0,s.jsx)(n.code,{children:"Ctrl+C"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"handlesigterm",children:"handleSIGTERM"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Close the browser process on ",(0,s.jsx)(n.code,{children:"SIGTERM"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"ignoredefaultargs",children:"ignoreDefaultArgs"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean | string[]"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"true"}),", do not use ",(0,s.jsx)(n.code,{children:"puppeteer.defaultArgs()"})," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"pipe",children:"pipe"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Connect to a browser over a pipe instead of a WebSocket."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"product",children:"product"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/api/puppeteer.product",children:"Product"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Which browser to launch."})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"chrome"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"timeout",children:"timeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Maximum time in milliseconds to wait for the browser to start. Pass ",(0,s.jsx)(n.code,{children:"0"})," to disable the timeout."]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"30_000"})," (30 seconds)."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waitforinitialpage",children:"waitForInitialPage"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(n.p,{children:["Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",(0,s.jsx)(n.code,{children:"--no-startup-window"})," for Chrome)."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"true"})})})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75251:(e,n,r)=>{var s=r(67294),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var s,d={},h=null,o=null;for(s in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)t.call(n,s)&&!l.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:i,type:e,key:h,ref:o,props:d,_owner:c.current}}n.Fragment=d,n.jsx=h,n.jsxs=h},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var s=r(67294);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);