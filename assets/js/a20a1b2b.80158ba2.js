/*! For license information please see a20a1b2b.80158ba2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69906],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}},29698:(e,n)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(e,n,t){var r=null;if(void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),"key"in n)for(var o in t={},n)"key"!==o&&(t[o]=n[o]);else t=n;return n=t.ref,{$$typeof:s,type:e,key:r,ref:void 0!==n?n:null,props:t}}n.Fragment=t,n.jsx=r,n.jsxs=r},74848:(e,n,s)=>{e.exports=s(29698)},89252:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"guides/screenshots","title":"Screenshots","description":"For capturing screenshots use Page.screenshot().","source":"@site/versioned_docs/version-24.6.0/guides/screenshots.md","sourceDirName":"guides","slug":"/guides/screenshots","permalink":"/guides/screenshots","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{},"sidebar":"docs","previous":{"title":"Headless mode","permalink":"/guides/headless-modes"},"next":{"title":"PDF generation","permalink":"/guides/pdf-generation"}}');var r=s(74848),o=s(28453);const a={},i="Screenshots",c={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"screenshots",children:"Screenshots"})}),"\n",(0,r.jsxs)(n.p,{children:["For capturing screenshots use ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.page.screenshot",children:(0,r.jsx)(n.code,{children:"Page.screenshot()"})}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://news.ycombinator.com', {\n  waitUntil: 'networkidle2',\n});\nawait page.screenshot({\n  path: 'hn.png',\n});\n\nawait browser.close();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also capture a screenshot of a specific element using ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.screenshot",children:(0,r.jsx)(n.code,{children:"ElementHandle.screenshot()"})}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const fileElement = await page.waitForSelector('div');\nawait fileElement.screenshot({\n  path: 'div.png',\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, ",(0,r.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.screenshot",children:(0,r.jsx)(n.code,{children:"ElementHandle.screenshot()"})})," tries to scroll the element into view\nif it is hidden."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);