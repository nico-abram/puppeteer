/*! For license information please see 6e237d07.2ccacb4f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19431],{28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var t=s(96540);const n={},o=t.createContext(n);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,r,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==r.key&&(n=""+r.key),"key"in r)for(var o in t={},r)"key"!==o&&(t[o]=r[o]);else t=r;return r=t.ref,{$$typeof:s,type:e,key:n,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=n,r.jsxs=n},47513:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"api/puppeteer.browsercontext.clearpermissionoverrides","title":"BrowserContext.clearPermissionOverrides() method","description":"Clears all permission overrides for this browser context.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.browsercontext.clearpermissionoverrides.md","sourceDirName":"api","slug":"/api/puppeteer.browsercontext.clearpermissionoverrides","permalink":"/api/puppeteer.browsercontext.clearpermissionoverrides","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"BrowserContext.clearPermissionOverrides"},"sidebar":"api","previous":{"title":"BrowserContext.browser","permalink":"/api/puppeteer.browsercontext.browser"},"next":{"title":"BrowserContext.close","permalink":"/api/puppeteer.browsercontext.close"}}');var n=s(74848),o=s(28453);const i={sidebar_label:"BrowserContext.clearPermissionOverrides"},a="BrowserContext.clearPermissionOverrides() method",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"browsercontextclearpermissionoverrides-method",children:"BrowserContext.clearPermissionOverrides() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Clears all permission overrides for this ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract clearPermissionOverrides(): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["Clearing overridden permissions in the ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},74848:(e,r,s)=>{e.exports=s(29698)}}]);