/*! For license information please see d6cd964e.7472e3ba.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51516],{27350:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"api/puppeteer.browser.pages","title":"Browser.pages() method","description":"Gets a list of all open pages inside this Browser.","source":"@site/versioned_docs/version-23.7.1/api/puppeteer.browser.pages.md","sourceDirName":"api","slug":"/api/puppeteer.browser.pages","permalink":"/api/puppeteer.browser.pages","draft":false,"unlisted":false,"tags":[],"version":"23.7.1","frontMatter":{"sidebar_label":"Browser.pages"},"sidebar":"api","previous":{"title":"Browser.newPage","permalink":"/api/puppeteer.browser.newpage"},"next":{"title":"Browser.process","permalink":"/api/puppeteer.browser.process"}}');var n=s(74848),p=s(28453);const a={sidebar_label:"Browser.pages"},o="Browser.pages() method",i={},l=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,p.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"browserpages-method",children:"Browser.pages() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Gets a list of all open ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["If there are multiple ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),", this returns all ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," in all ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Browser {\n  pages(): Promise<Page[]>;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"}),"[]>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Non-visible ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),", such as ",(0,n.jsx)(r.code,{children:'"background_page"'}),", will not be listed here. You can find them using ",(0,n.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,p.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,r,s)=>{var t=s(96540),n=Symbol.for("react.element"),p=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,p={},l=null,c=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(p[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===p[t]&&(p[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:c,props:p,_owner:o.current}}r.Fragment=p,r.jsx=l,r.jsxs=l},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>o});var t=s(96540);const n={},p=t.createContext(n);function a(e){const r=t.useContext(p);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(p.Provider,{value:r},e.children)}}}]);