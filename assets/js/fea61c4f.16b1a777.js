/*! For license information please see fea61c4f.16b1a777.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35639],{3629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.page.emulatenetworkconditions","title":"Page.emulateNetworkConditions() method","description":"This does not affect WebSockets and WebRTC PeerConnections (see https://crbug.com/563644). To set the page offline, you can use Page.setOfflineMode().","source":"@site/versioned_docs/version-23.10.2/api/puppeteer.page.emulatenetworkconditions.md","sourceDirName":"api","slug":"/api/puppeteer.page.emulatenetworkconditions","permalink":"/api/puppeteer.page.emulatenetworkconditions","draft":false,"unlisted":false,"tags":[],"version":"23.10.2","frontMatter":{"sidebar_label":"Page.emulateNetworkConditions"},"sidebar":"api","previous":{"title":"Page.emulateMediaType","permalink":"/api/puppeteer.page.emulatemediatype"},"next":{"title":"Page.emulateTimezone","permalink":"/api/puppeteer.page.emulatetimezone"}}');var o=t(74848),i=t(28453);const s={sidebar_label:"Page.emulateNetworkConditions"},a="Page.emulateNetworkConditions() method",d={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"pageemulatenetworkconditions-method",children:"Page.emulateNetworkConditions() method"})}),"\n",(0,o.jsxs)(n.p,{children:["This does not affect WebSockets and WebRTC PeerConnections (see ",(0,o.jsx)(n.a,{href:"https://crbug.com/563644",children:"https://crbug.com/563644"}),"). To set the page offline, you can use ",(0,o.jsx)(n.a,{href:"/api/puppeteer.page.setofflinemode",children:"Page.setOfflineMode()"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A list of predefined network conditions can be used by importing ",(0,o.jsx)(n.a,{href:"/api/puppeteer.predefinednetworkconditions",children:"PredefinedNetworkConditions"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract emulateNetworkConditions(\n    networkConditions: NetworkConditions | null,\n  ): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:(0,o.jsx)(n.p,{children:"Parameter"})}),(0,o.jsx)("th",{children:(0,o.jsx)(n.p,{children:"Type"})}),(0,o.jsx)("th",{children:(0,o.jsx)(n.p,{children:"Description"})})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"networkConditions"})}),(0,o.jsx)("td",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/api/puppeteer.networkconditions",children:"NetworkConditions"})," | null"]})}),(0,o.jsx)("td",{children:(0,o.jsxs)(n.p,{children:["Passing ",(0,o.jsx)(n.code,{children:"null"})," disables network condition emulation."]})})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import {PredefinedNetworkConditions} from 'puppeteer';\nconst slow3G = PredefinedNetworkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,p=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:p,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);