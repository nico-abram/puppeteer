/*! For license information please see 1624ee6d.0ba08679.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56428],{46972:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.frame.waitfornavigation","title":"Frame.waitForNavigation() method","description":"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate.","source":"@site/versioned_docs/version-23.7.1/api/puppeteer.frame.waitfornavigation.md","sourceDirName":"api","slug":"/api/puppeteer.frame.waitfornavigation","permalink":"/api/puppeteer.frame.waitfornavigation","draft":false,"unlisted":false,"tags":[],"version":"23.7.1","frontMatter":{"sidebar_label":"Frame.waitForNavigation"},"sidebar":"api","previous":{"title":"Frame.waitForFunction","permalink":"/api/puppeteer.frame.waitforfunction"},"next":{"title":"Frame.waitForSelector","permalink":"/api/puppeteer.frame.waitforselector"}}');var i=t(74848),a=t(28453);const o={sidebar_label:"Frame.waitForNavigation"},s="Frame.waitForNavigation() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"framewaitfornavigation-method",children:"Frame.waitForNavigation() method"})}),"\n",(0,i.jsx)(r.p,{children:"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate."}),"\n",(0,i.jsxs)(r.p,{children:["Usage of the ",(0,i.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"})," to change the URL is considered a navigation."]}),"\n",(0,i.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  abstract waitForNavigation(\n    options?: WaitForOptions,\n  ): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.em,{children:"(Optional)"})," Options to configure waiting behavior."]})})]})})]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(r.p,{children:["Promise<",(0,i.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,i.jsx)(r.p,{children:"A promise which resolves to the main resource response."}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  // The navigation promise resolves after navigation has finished\n  frame.waitForNavigation(),\n  // Clicking the link will indirectly cause a navigation\n  frame.click('a.my-link'),\n]);\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},21020:(e,r,t)=>{var n=t(96540),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:i,type:e,key:c,ref:p,props:a,_owner:s.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>s});var n=t(96540);const i={},a=n.createContext(i);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);