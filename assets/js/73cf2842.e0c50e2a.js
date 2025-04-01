/*! For license information please see 73cf2842.e0c50e2a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28394],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},55464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.page.authenticate","title":"Page.authenticate() method","description":"Provide credentials for HTTP authentication.","source":"@site/../docs/api/puppeteer.page.authenticate.md","sourceDirName":"api","slug":"/api/puppeteer.page.authenticate","permalink":"/next/api/puppeteer.page.authenticate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.authenticate"},"sidebar":"api","previous":{"title":"Page.addStyleTag","permalink":"/next/api/puppeteer.page.addstyletag"},"next":{"title":"Page.bringToFront","permalink":"/next/api/puppeteer.page.bringtofront"}}');var a=n(74848),i=n(28453);const s={sidebar_label:"Page.authenticate"},c="Page.authenticate() method",d={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"pageauthenticate-method",children:"Page.authenticate() method"})}),"\n",(0,a.jsxs)(t.p,{children:["Provide credentials for ",(0,a.jsx)(t.code,{children:"HTTP authentication"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Request interception will be turned on behind the scenes to implement authentication. This might affect performance."})}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract authenticate(credentials: Credentials | null): Promise<void>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"credentials"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/next/api/puppeteer.credentials",children:"Credentials"})," | null"]})}),(0,a.jsx)("td",{})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(t.p,{children:["To disable authentication, pass ",(0,a.jsx)(t.code,{children:"null"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);