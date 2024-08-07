/*! For license information please see 1aab145a.df324b30.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60151],{87423:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=i(85893),a=i(11151);const r={sidebar_label:"Page.emulateVisionDeficiency"},s="Page.emulateVisionDeficiency() method",o={id:"api/puppeteer.page.emulatevisiondeficiency",title:"Page.emulateVisionDeficiency() method",description:"Simulates the given vision deficiency on the page.",source:"@site/versioned_docs/version-23.0.1/api/puppeteer.page.emulatevisiondeficiency.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatevisiondeficiency",permalink:"/api/puppeteer.page.emulatevisiondeficiency",draft:!1,unlisted:!1,tags:[],version:"23.0.1",frontMatter:{sidebar_label:"Page.emulateVisionDeficiency"},sidebar:"api",previous:{title:"Page.emulateTimezone",permalink:"/api/puppeteer.page.emulatetimezone"},next:{title:"Page.evaluate",permalink:"/api/puppeteer.page.evaluate"}},c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pageemulatevisiondeficiency-method",children:"Page.emulateVisionDeficiency() method"}),"\n",(0,t.jsx)(n.p,{children:"Simulates the given vision deficiency on the page."}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract emulateVisionDeficiency(\n    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']\n  ): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"type"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," the type of deficiency to simulate, or ",(0,t.jsx)(n.code,{children:"'none'"})," to reset."]})})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://v8.dev/blog/10-years');\n\n  await page.emulateVisionDeficiency('achromatopsia');\n  await page.screenshot({path: 'achromatopsia.png'});\n\n  await page.emulateVisionDeficiency('deuteranopia');\n  await page.screenshot({path: 'deuteranopia.png'});\n\n  await page.emulateVisionDeficiency('blurredVision');\n  await page.screenshot({path: 'blurred-vision.png'});\n\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},75251:(e,n,i)=>{var t=i(67294),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,i){var t,r={},p=null,l=null;for(t in void 0!==i&&(p=""+i),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:a,type:e,key:p,ref:l,props:r,_owner:o.current}}n.Fragment=r,n.jsx=p,n.jsxs=p},85893:(e,n,i)=>{e.exports=i(75251)},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var t=i(67294);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);