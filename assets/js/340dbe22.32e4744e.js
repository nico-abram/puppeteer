/*! For license information please see 340dbe22.32e4744e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95473],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(e,t,r){var s=null;if(void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:s,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=s,t.jsxs=s},74848:(e,t,n)=>{e.exports=n(29698)},99537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"guides/getting-started","title":"Getting started","description":"Puppeteer will be familiar to people using other browser testing frameworks. You","source":"@site/versioned_docs/version-24.6.0/guides/getting-started.md","sourceDirName":"guides","slug":"/guides/getting-started","permalink":"/guides/getting-started","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{},"sidebar":"docs","previous":{"title":"Installation","permalink":"/guides/installation"},"next":{"title":"System requirements","permalink":"/guides/system-requirements"}}');var s=n(74848),a=n(28453);const o={},i="Getting started",p={},l=[];function c(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting started"})}),"\n",(0,s.jsxs)(t.p,{children:["Puppeteer will be familiar to people using other browser testing frameworks. You\n",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:"launch"}),"/",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect",children:"connect"}),"\na ",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.browser",children:"browser"}),",\n",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.browser.newpage",children:"create"})," some\n",(0,s.jsx)(t.a,{href:"https://pptr.dev/api/puppeteer.page",children:"pages"}),", and then manipulate them with\n",(0,s.jsx)(t.a,{href:"https://pptr.dev/api",children:"Puppeteer's API"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The following example searches ",(0,s.jsx)(t.a,{href:"https://developer.chrome.com/",children:"developer.chrome.com"}),' for blog posts with text "automate beyond recorder", click on the first result and print the full title of the blog post.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser and open a new blank page\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  // Navigate the page to a URL\n  await page.goto('https://developer.chrome.com/');\n\n  // Set screen size\n  await page.setViewport({width: 1080, height: 1024});\n\n  // Type into search box\n  await page.type('.devsite-search-field', 'automate beyond recorder');\n\n  // Wait and click on first result\n  const searchResultSelector = '.devsite-result-item-link';\n  await page.waitForSelector(searchResultSelector);\n  await page.click(searchResultSelector);\n\n  // Locate the full title with a unique string\n  const textSelector = await page.waitForSelector(\n    'text/Customize and automate',\n  );\n  const fullTitle = await textSelector?.evaluate(el => el.textContent);\n\n  // Print the full title\n  console.log('The title of this blog post is \"%s\".', fullTitle);\n\n  await browser.close();\n})();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For more in-depth usage, check our ",(0,s.jsx)(t.a,{href:"https://pptr.dev/docs",children:"documentation"}),"\nand ",(0,s.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples",children:"examples"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);