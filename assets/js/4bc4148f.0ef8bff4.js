/*! For license information please see 4bc4148f.0ef8bff4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98397],{35882:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/puppeteer.screenshotoptions","title":"ScreenshotOptions interface","description":"Signature","source":"@site/versioned_docs/version-24.0.0/api/puppeteer.screenshotoptions.md","sourceDirName":"api","slug":"/api/puppeteer.screenshotoptions","permalink":"/api/puppeteer.screenshotoptions","draft":false,"unlisted":false,"tags":[],"version":"24.0.0","frontMatter":{"sidebar_label":"ScreenshotOptions"},"sidebar":"api","previous":{"title":"ScreenshotClip","permalink":"/api/puppeteer.screenshotclip"},"next":{"title":"SerializedAXNode","permalink":"/api/puppeteer.serializedaxnode"}}');var i=n(74848),t=n(28453);const d={sidebar_label:"ScreenshotOptions"},c="ScreenshotOptions interface",l={},h=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"screenshotoptions-interface",children:"ScreenshotOptions interface"})}),"\n",(0,i.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"export interface ScreenshotOptions\n"})}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Property"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Modifiers"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Description"})}),(0,i.jsx)("th",{children:(0,i.jsx)(r.p,{children:"Default"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"capturebeyondviewport",children:"captureBeyondViewport"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Capture the screenshot beyond the viewport."})}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"false"})," if there is no ",(0,i.jsx)(r.code,{children:"clip"}),". ",(0,i.jsx)(r.code,{children:"true"})," otherwise."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"clip",children:"clip"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/api/puppeteer.screenshotclip",children:"ScreenshotClip"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Specifies the region of the page/element to clip."})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"encoding",children:"encoding"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"'base64' | 'binary'"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Encoding of the image."})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"'binary'"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"fromsurface",children:"fromSurface"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Capture the screenshot from the surface, rather than the view."})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"true"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"fullpage",children:"fullPage"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["When ",(0,i.jsx)(r.code,{children:"true"}),", takes a screenshot of the full page."]})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"false"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"omitbackground",children:"omitBackground"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Hides default white background and allows capturing screenshots with transparency."})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"false"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"optimizeforspeed",children:"optimizeForSpeed"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"boolean"})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"false"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"path",children:"path"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"string"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"The file path to save the image to. The screenshot type will be inferred from file extension. If path is a relative path, then it is resolved relative to current working directory. If no path is provided, the image won't be saved to the disk."})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"quality",children:"quality"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"number"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["Quality of the image, between 0-100. Not applicable to ",(0,i.jsx)(r.code,{children:"png"})," images."]})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"type",children:"type"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"optional"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"'png' | 'jpeg' | 'webp'"})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"'png'"})})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},21020:(e,r,n)=>{var s=n(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,n){var s,t={},h=null,o=null;for(s in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)d.call(r,s)&&!l.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:h,ref:o,props:t,_owner:c.current}}r.Fragment=t,r.jsx=h,r.jsxs=h},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>c});var s=n(96540);const i={},t=s.createContext(i);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);