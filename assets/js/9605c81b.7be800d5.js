/*! For license information please see 9605c81b.7be800d5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16759],{28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>a});var t=r(96540);const n={},s=t.createContext(n);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:i},e.children)}},29698:(e,i)=>{var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,i,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==i.key&&(n=""+i.key),"key"in i)for(var s in t={},i)"key"!==s&&(t[s]=i[s]);else t=i;return i=t.ref,{$$typeof:r,type:e,key:n,ref:void 0!==i?i:null,props:t}}i.Fragment=t,i.jsx=n,i.jsxs=n},59062:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/puppeteer.page.waitforfilechooser","title":"Page.waitForFileChooser() method","description":"This method is typically coupled with an action that triggers file choosing.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.waitforfilechooser.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitforfilechooser","permalink":"/api/puppeteer.page.waitforfilechooser","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.waitForFileChooser"},"sidebar":"api","previous":{"title":"Page.waitForDevicePrompt","permalink":"/api/puppeteer.page.waitfordeviceprompt"},"next":{"title":"Page.waitForFrame","permalink":"/api/puppeteer.page.waitforframe"}}');var n=r(74848),s=r(28453);const o={sidebar_label:"Page.waitForFileChooser"},a="Page.waitForFileChooser() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"pagewaitforfilechooser-method",children:"Page.waitForFileChooser() method"})}),"\n",(0,n.jsx)(i.p,{children:"This method is typically coupled with an action that triggers file choosing."}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"This must be called before the file chooser is launched. It will not return a currently active file chooser."})}),"\n",(0,n.jsx)(i.admonition,{type:"caution",children:(0,n.jsx)(i.p,{children:"Interception of file dialogs triggered via DOM APIs such as window.showOpenFilePicker is currently not supported."})}),"\n",(0,n.jsx)(i.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"class Page {\n  abstract waitForFileChooser(\n    options?: WaitTimeoutOptions,\n  ): Promise<FileChooser>;\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"(Optional)"})})})]})})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(i.p,{children:["Promise<",(0,n.jsx)(i.a,{href:"/api/puppeteer.filechooser",children:"FileChooser"}),">"]}),"\n",(0,n.jsx)(i.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(i.p,{children:['In the "headful" browser, this method results in the native file picker dialog ',(0,n.jsx)(i.code,{children:"not showing up"})," for the user."]}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(i.p,{children:["The following example clicks a button that issues a file chooser and then responds with ",(0,n.jsx)(i.code,{children:"/tmp/myfile.pdf"})," as if a user has selected this file."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-ts",children:"const [fileChooser] = await Promise.all([\n  page.waitForFileChooser(),\n  page.click('#upload-file-button'),\n  // some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},74848:(e,i,r)=>{e.exports=r(29698)}}]);