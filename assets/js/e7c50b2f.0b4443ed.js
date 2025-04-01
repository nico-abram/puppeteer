/*! For license information please see e7c50b2f.0b4443ed.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78209],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,t,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),"key"in t)for(var o in n={},t)"key"!==o&&(n[o]=t[o]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:a,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=a,t.jsxs=a},42321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.awaitedlocator","title":"AwaitedLocator type","description":"Signature","source":"@site/../docs/api/puppeteer.awaitedlocator.md","sourceDirName":"api","slug":"/api/puppeteer.awaitedlocator","permalink":"/next/api/puppeteer.awaitedlocator","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"AwaitedLocator"},"sidebar":"api","previous":{"title":"AwaitablePredicate","permalink":"/next/api/puppeteer.awaitablepredicate"},"next":{"title":"BoundingBox","permalink":"/next/api/puppeteer.boundingbox"}}');var a=r(74848),o=r(28453);const i={sidebar_label:"AwaitedLocator"},s="AwaitedLocator type",p={},c=[{value:"Signature",id:"signature",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"awaitedlocator-type",children:"AwaitedLocator type"})}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"export type AwaitedLocator<T> = T extends Locator<infer S> ? S : never;\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"References:"})," ",(0,a.jsx)(t.a,{href:"/next/api/puppeteer.locator",children:"Locator"})]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},74848:(e,t,r)=>{e.exports=r(29698)}}]);