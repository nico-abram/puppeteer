/*! For license information please see 018dd4e3.f39ed61d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32762],{47890:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"api/puppeteer.browserlaunchargumentoptions","title":"BrowserLaunchArgumentOptions interface","description":"Launcher options that only apply to Chrome.","source":"@site/versioned_docs/version-23.7.1/api/puppeteer.browserlaunchargumentoptions.md","sourceDirName":"api","slug":"/api/puppeteer.browserlaunchargumentoptions","permalink":"/api/puppeteer.browserlaunchargumentoptions","draft":false,"unlisted":false,"tags":[],"version":"23.7.1","frontMatter":{"sidebar_label":"BrowserLaunchArgumentOptions"},"sidebar":"api","previous":{"title":"BrowserEvents","permalink":"/api/puppeteer.browserevents"},"next":{"title":"BrowserLauncher","permalink":"/api/puppeteer.browserlauncher"}}');var t=n(74848),i=n(28453);const d={sidebar_label:"BrowserLaunchArgumentOptions"},o="BrowserLaunchArgumentOptions interface",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"browserlaunchargumentoptions-interface",children:"BrowserLaunchArgumentOptions interface"})}),"\n",(0,t.jsx)(r.p,{children:"Launcher options that only apply to Chrome."}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface BrowserLaunchArgumentOptions\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"args",children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string[]"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Additional command line arguments to pass to the browser instance."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"debuggingport",children:"debuggingPort"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"number"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Specify the debugging port number to use"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"devtools",children:"devtools"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Whether to auto-open a DevTools panel for each tab. If this is set to ",(0,t.jsx)(r.code,{children:"true"}),", then ",(0,t.jsx)(r.code,{children:"headless"})," will be forced to ",(0,t.jsx)(r.code,{children:"false"}),"."]})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"false"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"headless",children:"headless"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"boolean | 'shell'"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Whether to run the browser in headless mode."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"true"})," launches the browser in the ",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/articles/new-headless/",children:"new headless"})," mode."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"'shell'"})," launches ",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-headless-shell",children:"shell"})," known as the old headless mode."]}),"\n"]}),"\n"]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"true"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"userdatadir",children:"userDataDir"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Path to a user data directory. ",(0,t.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/user_data_dir.md",children:"see the Chromium docs"})," for more info."]})}),(0,t.jsx)("td",{})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,r,n)=>{var s=n(96540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var s,i={},c=null,h=null;for(s in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)d.call(r,s)&&!l.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:c,ref:h,props:i,_owner:o.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);