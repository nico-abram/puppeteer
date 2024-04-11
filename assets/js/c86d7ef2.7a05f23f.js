/*! For license information please see c86d7ef2.7a05f23f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22310],{9590:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=n(85893),s=n(11151);const a={sidebar_label:"Frame.$eval"},i="Frame.$eval() method",l={id:"api/puppeteer.frame._eval",title:"Frame.$eval() method",description:"Runs the given function on the first element matching the given selector in the frame.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.frame._eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame._eval",permalink:"/api/puppeteer.frame._eval",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"Frame.$eval"},sidebar:"api",previous:{title:"Frame.$$eval",permalink:"/api/puppeteer.frame.__eval"},next:{title:"Frame.addScriptTag",permalink:"/api/puppeteer.frame.addscripttag"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"frameeval-method",children:"Frame.$eval() method"}),"\n",(0,t.jsx)(r.p,{children:"Runs the given function on the first element matching the given selector in the frame."}),"\n",(0,t.jsx)(r.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<\n      NodeFor<Selector>,\n      Params\n    >,\n  >(\n    selector: Selector,\n    pageFunction: string | Func,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"selector"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Selector"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The selector to query for."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string | Func"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The function to be evaluated in the frame's context. The first element matching the selector will be passed to the function as its first argument."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Params"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Additional arguments to pass to ",(0,t.jsx)(r.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(r.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,t.jsx)(r.p,{children:"A promise to the result of the function."}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const searchValue = await frame.$eval('#search', el => el.value);\n"})})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,a={},o=null,d=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:o,ref:d,props:a,_owner:l.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>i});var t=n(67294);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);