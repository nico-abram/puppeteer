/*! For license information please see f53092e1.2a9a8e26.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26894],{5035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.eventemitter","title":"EventEmitter class","description":"The EventEmitter class that many Puppeteer classes extend.","source":"@site/versioned_docs/version-23.9.0/api/puppeteer.eventemitter.md","sourceDirName":"api","slug":"/api/puppeteer.eventemitter","permalink":"/api/puppeteer.eventemitter","draft":false,"unlisted":false,"tags":[],"version":"23.9.0","frontMatter":{"sidebar_label":"EventEmitter"},"sidebar":"api","previous":{"title":"TimeoutError","permalink":"/api/puppeteer.timeouterror"},"next":{"title":"EventEmitter.emit","permalink":"/api/puppeteer.eventemitter.emit"}}');var s=n(74848),i=n(28453);const l={sidebar_label:"EventEmitter"},d="EventEmitter class",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"eventemitter-class",children:"EventEmitter class"})}),"\n",(0,s.jsx)(t.p,{children:"The EventEmitter class that many Puppeteer classes extend."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare class EventEmitter<Events extends Record<EventType, unknown>> implements CommonEventEmitter<EventsWithWildcard<Events>>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Implements:"})," ",(0,s.jsx)(t.a,{href:"/api/puppeteer.commoneventemitter",children:"CommonEventEmitter"}),"<",(0,s.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>>"]}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["This allows you to listen to events that Puppeteer classes fire and act accordingly. Therefore you'll mostly use ",(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.on",children:"on"})," and ",(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.off",children:"off"})," to bind and unbind to event listeners."]}),"\n",(0,s.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(t.code,{children:"EventEmitter"})," class."]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"emit",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.emit",children:"emit(type, event)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Emit an event and call any associated listeners."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"listenercount",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.listenercount",children:"listenerCount(type)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Gets the number of listeners for a given event."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"off",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.off",children:"off(type, handler)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Remove an event listener from firing."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"on",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.on",children:"on(type, handler)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Bind an event listener to fire when an event occurs."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"once",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.once",children:"once(type, handler)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["Like ",(0,s.jsx)(t.code,{children:"on"})," but the listener will only be fired once and then it will be removed."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"removealllisteners",children:(0,s.jsx)(t.a,{href:"/api/puppeteer.eventemitter.removealllisteners",children:"removeAllListeners(type)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Removes all listeners. If given an event argument, it will remove only listeners for that event."})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,o=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)l.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:o,props:i,_owner:d.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);