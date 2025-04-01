/*! For license information please see 93d74d1f.30e63981.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32929],{28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var s=t(96540);const a={},n=s.createContext(a);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function a(e,r,s){var a=null;if(void 0!==s&&(a=""+s),void 0!==r.key&&(a=""+r.key),"key"in r)for(var n in s={},r)"key"!==n&&(s[n]=r[n]);else s=r;return r=s.ref,{$$typeof:t,type:e,key:a,ref:void 0!==r?r:null,props:s}}r.Fragment=s,r.jsx=a,r.jsxs=a},42514:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.frame.locator","title":"Frame.locator() method","description":"locator(): Locator&lt;NodeFor&lt;Selector&gt;&gt;","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.frame.locator.md","sourceDirName":"api","slug":"/api/puppeteer.frame.locator","permalink":"/api/puppeteer.frame.locator","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Frame.locator"},"sidebar":"api","previous":{"title":"Frame.isDetached","permalink":"/api/puppeteer.frame.isdetached"},"next":{"title":"Frame.name","permalink":"/api/puppeteer.frame.name"}}');var a=t(74848),n=t(28453);const o={sidebar_label:"Frame.locator"},i="Frame.locator() method",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"framelocator-method",children:"Frame.locator() method"})}),"\n",(0,a.jsx)("h2",{id:"locator",children:"locator(): Locator<NodeFor<Selector>>"}),"\n",(0,a.jsxs)(r.p,{children:["Creates a locator for the provided selector. See ",(0,a.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  locator<Selector extends string>(\n    selector: Selector,\n  ): Locator<NodeFor<Selector>>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"selector"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Selector"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,a.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows querying by ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<",(0,a.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>"]}),"\n",(0,a.jsx)("h2",{id:"locator-1",children:"locator(): Locator<Ret>"}),"\n",(0,a.jsxs)(r.p,{children:["Creates a locator for the provided function. See ",(0,a.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]}),"\n",(0,a.jsx)(r.h3,{id:"signature-1",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  locator<Ret>(func: () => Awaitable<Ret>): Locator<Ret>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"func"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(r.p,{children:["() => ",(0,a.jsx)(r.a,{href:"/api/puppeteer.awaitable",children:"Awaitable"}),"<Ret>"]})}),(0,a.jsx)("td",{})]})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<Ret>"]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);