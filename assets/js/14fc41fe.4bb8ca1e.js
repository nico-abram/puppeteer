/*! For license information please see 14fc41fe.4bb8ca1e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83115],{80809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.puppeteerlifecycleevent","title":"PuppeteerLifeCycleEvent type","description":"Signature","source":"@site/../docs/api/puppeteer.puppeteerlifecycleevent.md","sourceDirName":"api","slug":"/api/puppeteer.puppeteerlifecycleevent","permalink":"/next/api/puppeteer.puppeteerlifecycleevent","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"PuppeteerLifeCycleEvent"},"sidebar":"api","previous":{"title":"PuppeteerLaunchOptions","permalink":"/next/api/puppeteer.puppeteerlaunchoptions"},"next":{"title":"PuppeteerNodeLaunchOptions","permalink":"/next/api/puppeteer.puppeteernodelaunchoptions"}}');var p=n(74848),o=n(28453);const i={sidebar_label:"PuppeteerLifeCycleEvent"},a="PuppeteerLifeCycleEvent type",s={},c=[{value:"Signature",id:"signature",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,o.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.header,{children:(0,p.jsx)(t.h1,{id:"puppeteerlifecycleevent-type",children:"PuppeteerLifeCycleEvent type"})}),"\n",(0,p.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-typescript",children:"export type PuppeteerLifeCycleEvent =\n  /**\n   * Waits for the 'load' event.\n   */\n  | 'load'\n  /**\n   * Waits for the 'DOMContentLoaded' event.\n   */\n  | 'domcontentloaded'\n  /**\n   * Waits till there are no more than 0 network connections for at least `500`\n   * ms.\n   */\n  | 'networkidle0'\n  /**\n   * Waits till there are no more than 2 network connections for at least `500`\n   * ms.\n   */\n  | 'networkidle2';\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(l,{...e})}):l(e)}},21020:(e,t,n)=>{var r=n(96540),p=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:p,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const p={},o=r.createContext(p);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);