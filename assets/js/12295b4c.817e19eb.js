/*! For license information please see 12295b4c.817e19eb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89639],{24161:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.keyboard.press","title":"Keyboard.press() method","description":"Shortcut for Keyboard.down() and Keyboard.up().","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.keyboard.press.md","sourceDirName":"api","slug":"/api/puppeteer.keyboard.press","permalink":"/api/puppeteer.keyboard.press","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Keyboard.press"},"sidebar":"api","previous":{"title":"Keyboard.down","permalink":"/api/puppeteer.keyboard.down"},"next":{"title":"Keyboard.sendCharacter","permalink":"/api/puppeteer.keyboard.sendcharacter"}}');var t=s(74848),i=s(28453);const d={sidebar_label:"Keyboard.press"},o="Keyboard.press() method",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"keyboardpress-method",children:"Keyboard.press() method"})}),"\n",(0,t.jsxs)(r.p,{children:["Shortcut for ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract press(\n    key: KeyInput,\n    options?: Readonly<KeyPressOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"key"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Name of key to press, such as ",(0,t.jsx)(r.code,{children:"ArrowLeft"}),". See ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Readonly<",(0,t.jsx)(r.a,{href:"/api/puppeteer.keypressoptions",children:"KeyPressOptions"}),">"]})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts delay which, if specified, is the time to wait between ",(0,t.jsx)(r.code,{children:"keydown"})," and ",(0,t.jsx)(r.code,{children:"keyup"})," in milliseconds. Defaults to 0. Accepts commands which, if specified, is the commands of keyboard shortcuts, see ",(0,t.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h",children:"Chromium Source Code"})," for valid command names."]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["If ",(0,t.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,t.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,t.jsx)(r.code,{children:"keypress"}),"/",(0,t.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,t.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated."]}),"\n",(0,t.jsxs)(r.p,{children:["Modifier keys DO effect ",(0,t.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),". Holding down ",(0,t.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>o});var n=s(96540);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(e,r,n){var t=null;if(void 0!==n&&(t=""+n),void 0!==r.key&&(t=""+r.key),"key"in r)for(var i in n={},r)"key"!==i&&(n[i]=r[i]);else n=r;return r=n.ref,{$$typeof:s,type:e,key:t,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=t,r.jsxs=t},74848:(e,r,s)=>{e.exports=s(29698)}}]);