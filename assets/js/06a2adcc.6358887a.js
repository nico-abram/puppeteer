/*! For license information please see 06a2adcc.6358887a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27149],{49684:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.coverage.startjscoverage","title":"Coverage.startJSCoverage() method","description":"Signature","source":"@site/versioned_docs/version-23.10.2/api/puppeteer.coverage.startjscoverage.md","sourceDirName":"api","slug":"/api/puppeteer.coverage.startjscoverage","permalink":"/api/puppeteer.coverage.startjscoverage","draft":false,"unlisted":false,"tags":[],"version":"23.10.2","frontMatter":{"sidebar_label":"Coverage.startJSCoverage"},"sidebar":"api","previous":{"title":"Coverage.startCSSCoverage","permalink":"/api/puppeteer.coverage.startcsscoverage"},"next":{"title":"Coverage.stopCSSCoverage","permalink":"/api/puppeteer.coverage.stopcsscoverage"}}');var n=t(74848),a=t(28453);const o={sidebar_label:"Coverage.startJSCoverage"},i="Coverage.startJSCoverage() method",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"coveragestartjscoverage-method",children:"Coverage.startJSCoverage() method"})}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Coverage {\n  startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.jscoverageoptions",children:"JSCoverageOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," Set of configurable options for coverage defaults to ",(0,n.jsx)(r.code,{children:"resetOnNavigation : true, reportAnonymousScripts : false,"})," ",(0,n.jsx)(r.code,{children:"includeRawScriptCoverage : false, useBlockCoverage : true"})]})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.p,{children:"Promise that resolves when coverage is started."}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,n.jsx)(r.code,{children:"eval"})," or ",(0,n.jsx)(r.code,{children:"new Function"}),". If ",(0,n.jsx)(r.code,{children:"reportAnonymousScripts"})," is set to ",(0,n.jsx)(r.code,{children:"true"}),", anonymous scripts URL will start with ",(0,n.jsx)(r.code,{children:"debugger://VM"})," (unless a magic //# sourceURL comment is present, in which case that will the be URL)."]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21020:(e,r,t)=>{var s=t(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,a={},l=null,d=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,s)&&!c.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:l,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var s=t(96540);const n={},a=s.createContext(n);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);