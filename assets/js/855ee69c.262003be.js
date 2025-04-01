/*! For license information please see 855ee69c.262003be.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36985],{28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var s=t(96540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(e,r,s){var n=null;if(void 0!==s&&(n=""+s),void 0!==r.key&&(n=""+r.key),"key"in r)for(var o in s={},r)"key"!==o&&(s[o]=r[o]);else s=r;return r=s.ref,{$$typeof:t,type:e,key:n,ref:void 0!==r?r:null,props:s}}r.Fragment=s,r.jsx=n,r.jsxs=n},30901:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"api/puppeteer.browsercontext.pages","title":"BrowserContext.pages() method","description":"Gets a list of all open pages inside this browser context.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.browsercontext.pages.md","sourceDirName":"api","slug":"/api/puppeteer.browsercontext.pages","permalink":"/api/puppeteer.browsercontext.pages","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"BrowserContext.pages"},"sidebar":"api","previous":{"title":"BrowserContext.overridePermissions","permalink":"/api/puppeteer.browsercontext.overridepermissions"},"next":{"title":"BrowserContext.setCookie","permalink":"/api/puppeteer.browsercontext.setcookie"}}');var n=t(74848),o=t(28453);const a={sidebar_label:"BrowserContext.pages"},i="BrowserContext.pages() method",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"browsercontextpages-method",children:"BrowserContext.pages() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Gets a list of all open ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract pages(): Promise<Page[]>;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"}),"[]>"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Non-visible ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),", such as ",(0,n.jsx)(r.code,{children:'"background_page"'}),", will not be listed here. You can find them using ",(0,n.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);