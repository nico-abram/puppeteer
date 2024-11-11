/*! For license information please see 2cccce35.6f9eb66f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61776],{66479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"api/puppeteer.page.emulatevisiondeficiency","title":"Page.emulateVisionDeficiency() method","description":"Simulates the given vision deficiency on the page.","source":"@site/../docs/api/puppeteer.page.emulatevisiondeficiency.md","sourceDirName":"api","slug":"/api/puppeteer.page.emulatevisiondeficiency","permalink":"/next/api/puppeteer.page.emulatevisiondeficiency","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.emulateVisionDeficiency"},"sidebar":"api","previous":{"title":"Page.emulateTimezone","permalink":"/next/api/puppeteer.page.emulatetimezone"},"next":{"title":"Page.evaluate","permalink":"/next/api/puppeteer.page.evaluate"}}');var a=t(74848),r=t(28453);const s={sidebar_label:"Page.emulateVisionDeficiency"},o="Page.emulateVisionDeficiency() method",c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"pageemulatevisiondeficiency-method",children:"Page.emulateVisionDeficiency() method"})}),"\n",(0,a.jsx)(n.p,{children:"Simulates the given vision deficiency on the page."}),"\n",(0,a.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract emulateVisionDeficiency(\n    type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type'],\n  ): Promise<void>;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(n.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"type"})}),(0,a.jsx)("td",{children:(0,a.jsx)(n.p,{children:"Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']"})}),(0,a.jsx)("td",{children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"(Optional)"})," the type of deficiency to simulate, or ",(0,a.jsx)(n.code,{children:"'none'"})," to reset."]})})]})})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://v8.dev/blog/10-years');\n\n  await page.emulateVisionDeficiency('achromatopsia');\n  await page.screenshot({path: 'achromatopsia.png'});\n\n  await page.emulateVisionDeficiency('deuteranopia');\n  await page.screenshot({path: 'deuteranopia.png'});\n\n  await page.emulateVisionDeficiency('blurredVision');\n  await page.screenshot({path: 'blurred-vision.png'});\n\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},21020:(e,n,t)=>{var i=t(96540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var i,r={},p=null,l=null;for(i in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:a,type:e,key:p,ref:l,props:r,_owner:o.current}}n.Fragment=r,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);