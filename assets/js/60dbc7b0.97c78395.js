/*! For license information please see 60dbc7b0.97c78395.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98407],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(e,t,a){var r=null;if(void 0!==a&&(r=""+a),void 0!==t.key&&(r=""+t.key),"key"in t)for(var s in a={},t)"key"!==s&&(a[s]=t[s]);else a=t;return t=a.ref,{$$typeof:n,type:e,key:r,ref:void 0!==t?t:null,props:a}}t.Fragment=a,t.jsx=r,t.jsxs=r},35837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"api/puppeteer.page.setjavascriptenabled","title":"Page.setJavaScriptEnabled() method","description":"Signature","source":"@site/../docs/api/puppeteer.page.setjavascriptenabled.md","sourceDirName":"api","slug":"/api/puppeteer.page.setjavascriptenabled","permalink":"/next/api/puppeteer.page.setjavascriptenabled","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.setJavaScriptEnabled"},"sidebar":"api","previous":{"title":"Page.setGeolocation","permalink":"/next/api/puppeteer.page.setgeolocation"},"next":{"title":"Page.setOfflineMode","permalink":"/next/api/puppeteer.page.setofflinemode"}}');var r=n(74848),s=n(28453);const i={sidebar_label:"Page.setJavaScriptEnabled"},l="Page.setJavaScriptEnabled() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"pagesetjavascriptenabled-method",children:"Page.setJavaScriptEnabled() method"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setJavaScriptEnabled(enabled: boolean): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"enabled"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"boolean"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Whether or not to enable JavaScript on the page."})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"NOTE: changing this value won't affect scripts that have already been run. It will take full effect on the next navigation."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);