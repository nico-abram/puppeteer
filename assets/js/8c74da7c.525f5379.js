/*! For license information please see 8c74da7c.525f5379.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37734],{28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>h});var r=s(96540);const n={},c=r.createContext(n);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(c.Provider,{value:t},e.children)}},29698:(e,t)=>{var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function n(e,t,r){var n=null;if(void 0!==r&&(n=""+r),void 0!==t.key&&(n=""+t.key),"key"in t)for(var c in r={},t)"key"!==c&&(r[c]=t[c]);else r=t;return t=r.ref,{$$typeof:s,type:e,key:n,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=n,t.jsxs=n},73625:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>h,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.touchscreen","title":"Touchscreen class","description":"The Touchscreen class exposes touchscreen events.","source":"@site/../docs/api/puppeteer.touchscreen.md","sourceDirName":"api","slug":"/api/puppeteer.touchscreen","permalink":"/next/api/puppeteer.touchscreen","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Touchscreen"},"sidebar":"api","previous":{"title":"Mouse.wheel","permalink":"/next/api/puppeteer.mouse.wheel"},"next":{"title":"Touchscreen.tap","permalink":"/next/api/puppeteer.touchscreen.tap"}}');var n=s(74848),c=s(28453);const o={sidebar_label:"Touchscreen"},h="Touchscreen class",i={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"touchscreen-class",children:"Touchscreen class"})}),"\n",(0,n.jsx)(t.p,{children:"The Touchscreen class exposes touchscreen events."}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Touchscreen\n"})}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(t.code,{children:"Touchscreen"})," class."]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"tap",children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.tap",children:"tap(x, y)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Dispatches a ",(0,n.jsx)(t.code,{children:"touchstart"})," and ",(0,n.jsx)(t.code,{children:"touchend"})," event."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"touchend",children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.touchend",children:"touchEnd()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Dispatches a ",(0,n.jsx)(t.code,{children:"touchend"})," event on the first touch that is active."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"touchmove",children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.touchmove",children:"touchMove(x, y)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(t.p,{children:["Dispatches a ",(0,n.jsx)(t.code,{children:"touchMove"})," event on the first touch that is active."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Remarks:"})}),(0,n.jsxs)(t.p,{children:["Not every ",(0,n.jsx)(t.code,{children:"touchMove"})," call results in a ",(0,n.jsx)(t.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,n.jsx)(t.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"touchstart",children:(0,n.jsx)(t.a,{href:"/next/api/puppeteer.touchscreen.touchstart",children:"touchStart(x, y)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Dispatches a ",(0,n.jsx)(t.code,{children:"touchstart"})," event."]})})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},74848:(e,t,s)=>{e.exports=s(29698)}}]);