/*! For license information please see 0b279926.dd48f872.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29970],{77653:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/puppeteer.puppeteernode.launch","title":"PuppeteerNode.launch() method","description":"Launches a browser instance with given arguments and options when specified.","source":"@site/../docs/api/puppeteer.puppeteernode.launch.md","sourceDirName":"api","slug":"/api/puppeteer.puppeteernode.launch","permalink":"/next/api/puppeteer.puppeteernode.launch","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"PuppeteerNode.launch"},"sidebar":"api","previous":{"title":"PuppeteerNode.executablePath","permalink":"/next/api/puppeteer.puppeteernode.executablepath"},"next":{"title":"PuppeteerNode.trimCache","permalink":"/next/api/puppeteer.puppeteernode.trimcache"}}');var o=n(74848),s=n(28453);const i={sidebar_label:"PuppeteerNode.launch"},a="PuppeteerNode.launch() method",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"puppeteernodelaunch-method",children:"PuppeteerNode.launch() method"})}),"\n",(0,o.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),"\n",(0,o.jsxs)(r.p,{children:["When using with ",(0,o.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,o.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions#executablepath",children:"options.executablePath"})," or ",(0,o.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions#channel",children:"options.channel"})," must be provided."]}),"\n",(0,o.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"class PuppeteerNode {\n  launch(options?: PuppeteerLaunchOptions): Promise<Browser>;\n}\n"})}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(r.p,{children:"Parameter"})}),(0,o.jsx)("th",{children:(0,o.jsx)(r.p,{children:"Type"})}),(0,o.jsx)("th",{children:(0,o.jsx)(r.p,{children:"Description"})})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(r.p,{children:"options"})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/next/api/puppeteer.puppeteerlaunchoptions",children:"PuppeteerLaunchOptions"})})}),(0,o.jsx)("td",{children:(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"(Optional)"})," Options to configure launching behavior."]})})]})})]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(r.p,{children:["Promise<",(0,o.jsx)(r.a,{href:"/next/api/puppeteer.browser",children:"Browser"}),">"]}),"\n",(0,o.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(r.p,{children:["Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,o.jsx)(r.a,{href:"https://www.google.com/chrome/browser/canary.html",children:"Chrome Canary"})," or ",(0,o.jsx)(r.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Dev Channel"})," build is suggested. See ",(0,o.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:"this article"})," for a description of the differences between Chromium and Chrome. ",(0,o.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md",children:"This article"})," describes some differences for Linux users. See ",(0,o.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"this doc"})," for the description of Chrome for Testing."]}),"\n",(0,o.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(r.p,{children:["You can use ",(0,o.jsx)(r.a,{href:"/next/api/puppeteer.launchoptions#ignoredefaultargs",children:"options.ignoreDefaultArgs"})," to filter out ",(0,o.jsx)(r.code,{children:"--mute-audio"})," from default arguments:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio'],\n});\n"})})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var t=n(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,h=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,t)&&!p.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:h,props:s,_owner:a.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);