/*! For license information please see 866f3664.887f9f5c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54432],{23429:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"api/puppeteer.page.createpdfstream","title":"Page.createPDFStream() method","description":"Generates a PDF of the page with the print CSS media type.","source":"@site/versioned_docs/version-23.7.1/api/puppeteer.page.createpdfstream.md","sourceDirName":"api","slug":"/api/puppeteer.page.createpdfstream","permalink":"/api/puppeteer.page.createpdfstream","draft":false,"unlisted":false,"tags":[],"version":"23.7.1","frontMatter":{"sidebar_label":"Page.createPDFStream"},"sidebar":"api","previous":{"title":"Page.createCDPSession","permalink":"/api/puppeteer.page.createcdpsession"},"next":{"title":"Page.deleteCookie","permalink":"/api/puppeteer.page.deletecookie"}}');var n=t(74848),s=t(28453);const i={sidebar_label:"Page.createPDFStream"},p="Page.createPDFStream() method",o={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagecreatepdfstream-method",children:"Page.createPDFStream() method"})}),"\n",(0,n.jsxs)(r.p,{children:["Generates a PDF of the page with the ",(0,n.jsx)(r.code,{children:"print"})," CSS media type."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract createPDFStream(\n    options?: PDFOptions,\n  ): Promise<ReadableStream<Uint8Array>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.pdfoptions",children:"PDFOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," options for generating the PDF."]})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<ReadableStream<Uint8Array>>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["To generate a PDF with the ",(0,n.jsx)(r.code,{children:"screen"})," media type, call ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.emulatemediatype",children:"`page.emulateMediaType('screen')`"})," before calling ",(0,n.jsx)(r.code,{children:"page.pdf()"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["By default, ",(0,n.jsx)(r.code,{children:"page.pdf()"})," generates a pdf with modified colors for printing. Use the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust",children:"`-webkit-print-color-adjust`"})," property to force rendering of exact colors."]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,r,t)=>{var a=t(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var a,s={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,a)&&!o.hasOwnProperty(a)&&(s[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===s[a]&&(s[a]=r[a]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:p.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>p});var a=t(96540);const n={},s=a.createContext(n);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);