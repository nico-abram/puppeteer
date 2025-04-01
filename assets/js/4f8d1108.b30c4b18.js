/*! For license information please see 4f8d1108.b30c4b18.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43983],{28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}},29698:(e,n)=>{var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(e,n,r){var t=null;if(void 0!==r&&(t=""+r),void 0!==n.key&&(t=""+n.key),"key"in n)for(var i in r={},n)"key"!==i&&(r[i]=n[i]);else r=n;return n=r.ref,{$$typeof:s,type:e,key:t,ref:void 0!==n?n:null,props:r}}n.Fragment=r,n.jsx=t,n.jsxs=t},51201:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.press","title":"ElementHandle.press() method","description":"Focuses the element, and then uses Keyboard.down() and Keyboard.up().","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.elementhandle.press.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.press","permalink":"/api/puppeteer.elementhandle.press","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"ElementHandle.press"},"sidebar":"api","previous":{"title":"ElementHandle.isVisible","permalink":"/api/puppeteer.elementhandle.isvisible"},"next":{"title":"ElementHandle.screenshot","permalink":"/api/puppeteer.elementhandle.screenshot"}}');var t=s(74848),i=s(28453);const d={sidebar_label:"ElementHandle.press"},l="ElementHandle.press() method",a={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"elementhandlepress-method",children:"ElementHandle.press() method"})}),"\n",(0,t.jsxs)(n.p,{children:["Focuses the element, and then uses ",(0,t.jsx)(n.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,t.jsx)(n.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  press(key: KeyInput, options?: Readonly<KeyPressOptions>): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"key"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["Name of key to press, such as ",(0,t.jsx)(n.code,{children:"ArrowLeft"}),". See ",(0,t.jsx)(n.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["Readonly<",(0,t.jsx)(n.a,{href:"/api/puppeteer.keypressoptions",children:"KeyPressOptions"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"key"})," is a single character and no modifier keys besides ",(0,t.jsx)(n.code,{children:"Shift"})," are being held down, a ",(0,t.jsx)(n.code,{children:"keypress"}),"/",(0,t.jsx)(n.code,{children:"input"})," event will also be generated. The ",(0,t.jsx)(n.code,{children:"text"})," option can be specified to force an input event to be generated."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE"})," Modifier keys DO affect ",(0,t.jsx)(n.code,{children:"elementHandle.press"}),". Holding down ",(0,t.jsx)(n.code,{children:"Shift"})," will type the text in upper case."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},74848:(e,n,s)=>{e.exports=s(29698)}}]);