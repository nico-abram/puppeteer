/*! For license information please see f028746a.e5705ba5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67741],{28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}},29698:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,t,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:s,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=s,t.jsxs=s},49473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.browsercontextevent","title":"BrowserContextEvent enum","description":"Signature","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.browsercontextevent.md","sourceDirName":"api","slug":"/api/puppeteer.browsercontextevent","permalink":"/api/puppeteer.browsercontextevent","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"BrowserContextEvent"},"sidebar":"api","previous":{"title":"BoxModel","permalink":"/api/puppeteer.boxmodel"},"next":{"title":"BrowserContextEvents","permalink":"/api/puppeteer.browsercontextevents"}}');var s=r(74848),i=r(28453);const o={sidebar_label:"BrowserContextEvent"},a="BrowserContextEvent enum",d={},c=[{value:"Signature",id:"signature",level:3},{value:"Enumeration Members",id:"enumeration-members",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"browsercontextevent-enum",children:"BrowserContextEvent enum"})}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare const enum BrowserContextEvent\n"})}),"\n",(0,s.jsx)(t.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Member"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Value"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"TargetChanged"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'"targetchanged"'})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Emitted when the url of a target inside the browser context changes. Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"TargetCreated"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'"targetcreated"'})})}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Emitted when a target is created within the browser context, for example when a new page is opened by ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open",children:"window.open"})," or by ",(0,s.jsx)(t.a,{href:"/api/puppeteer.browsercontext.newpage",children:"browserContext.newPage"})]}),(0,s.jsxs)(t.p,{children:["Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"TargetDestroyed"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'"targetdestroyed"'})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Emitted when a target is destroyed within the browser context, for example when a page is closed. Contains a ",(0,s.jsx)(t.a,{href:"/api/puppeteer.target",children:"Target"})," instance."]})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},74848:(e,t,r)=>{e.exports=r(29698)}}]);