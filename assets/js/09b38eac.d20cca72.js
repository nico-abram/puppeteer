/*! For license information please see 09b38eac.d20cca72.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6474],{96215:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.mouse.dragover","title":"Mouse.dragOver() method","description":"Dispatches a dragover event.","source":"@site/versioned_docs/version-23.10.2/api/puppeteer.mouse.dragover.md","sourceDirName":"api","slug":"/api/puppeteer.mouse.dragover","permalink":"/api/puppeteer.mouse.dragover","draft":false,"unlisted":false,"tags":[],"version":"23.10.2","frontMatter":{"sidebar_label":"Mouse.dragOver"},"sidebar":"api","previous":{"title":"Mouse.dragEnter","permalink":"/api/puppeteer.mouse.dragenter"},"next":{"title":"Mouse.drop","permalink":"/api/puppeteer.mouse.drop"}}');var s=t(74848),a=t(28453);const o={sidebar_label:"Mouse.dragOver"},i="Mouse.dragOver() method",d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"mousedragover-method",children:"Mouse.dragOver() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Dispatches a ",(0,s.jsx)(r.code,{children:"dragover"})," event."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Mouse {\n  abstract dragOver(\n    target: Point,\n    data: Protocol.Input.DragData,\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"target"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.point",children:"Point"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["point for emitting ",(0,s.jsx)(r.code,{children:"dragover"})," event"]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"data"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Protocol.Input.DragData"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"drag data containing items and operations mask"})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,a={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!d.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:p,props:a,_owner:i.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);