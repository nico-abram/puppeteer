/*! For license information please see 5ffaa4c2.1ec2d3fc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14521],{28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>p});var n=t(96540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var i in n={},r)"key"!==i&&(n[i]=r[i]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=s,r.jsxs=s},74848:(e,r,t)=>{e.exports=t(29698)},75221:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api/puppeteer.puppeteernode","title":"PuppeteerNode class","description":"Extends the main Puppeteer class with Node specific behaviour for fetching and downloading browsers.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.puppeteernode.md","sourceDirName":"api","slug":"/api/puppeteer.puppeteernode","permalink":"/api/puppeteer.puppeteernode","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"PuppeteerNode"},"sidebar":"api","next":{"title":"PuppeteerNode.connect","permalink":"/api/puppeteer.puppeteernode.connect"}}');var s=t(74848),i=t(28453);const d={sidebar_label:"PuppeteerNode"},p="PuppeteerNode class",c={},h=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"puppeteernode-class",children:"PuppeteerNode class"})}),"\n",(0,s.jsxs)(r.p,{children:["Extends the main ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteer",children:"Puppeteer"})," class with Node specific behaviour for fetching and downloading browsers."]}),"\n",(0,s.jsxs)(r.p,{children:["If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,s.jsx)(r.code,{children:"require('puppeteer')"})," (or the equivalent ES ",(0,s.jsx)(r.code,{children:"import"}),")."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare class PuppeteerNode extends Puppeteer\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Extends:"})," ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteer",children:"Puppeteer"})]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["The most common method to use is ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"launch"}),", which is used to launch and connect to a new browser instance."]}),"\n",(0,s.jsxs)(r.p,{children:["See ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteer",children:"the main Puppeteer class"})," for methods common to all environments, such as ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"PuppeteerNode"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"The following is a typical example of using Puppeteer to drive automation:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Once you have created a ",(0,s.jsx)(r.code,{children:"page"})," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"`page` documentation"})," lists all the available methods."]}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"defaultbrowser",children:"defaultBrowser"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.supportedbrowser",children:"SupportedBrowser"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["The name of the browser that will be launched by default. For ",(0,s.jsx)(r.code,{children:"puppeteer"}),", this is influenced by your configuration. Otherwise, it's ",(0,s.jsx)(r.code,{children:"chrome"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"lastlaunchedbrowser",children:"lastLaunchedBrowser"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"readonly"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.supportedbrowser",children:"SupportedBrowser"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The name of the browser that was last launched."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"product",children:"product"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"readonly, deprecated"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Deprecated:"})}),(0,s.jsxs)(r.p,{children:["Do not use as this field as it does not take into account multiple browsers of different types. Use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode#defaultbrowser",children:"defaultBrowser"})," or ",(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode#lastlaunchedbrowser",children:"lastLaunchedBrowser"}),"."]})]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"connect",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.connect",children:"connect(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"This method attaches Puppeteer to an existing browser instance."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"defaultargs",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.defaultargs",children:"defaultArgs(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"executablepath",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.executablepath",children:"executablePath(channel)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The default executable path for a given ChromeReleaseChannel."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"executablepath",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.executablepath",children:"executablePath(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The default executable path given LaunchOptions."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"executablepath",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.executablepath",children:"executablePath()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The default executable path."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"launch",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"launch(options)"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),(0,s.jsxs)(r.p,{children:["When using with ",(0,s.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,s.jsx)(r.a,{href:"/api/puppeteer.launchoptions#executablepath",children:"options.executablePath"})," or ",(0,s.jsx)(r.a,{href:"/api/puppeteer.launchoptions#channel",children:"options.channel"})," must be provided."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsxs)(r.p,{children:["Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,s.jsx)(r.a,{href:"https://www.google.com/chrome/browser/canary.html",children:"Chrome Canary"})," or ",(0,s.jsx)(r.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Dev Channel"})," build is suggested. See ",(0,s.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:"this article"})," for a description of the differences between Chromium and Chrome. ",(0,s.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md",children:"This article"})," describes some differences for Linux users. See ",(0,s.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"this doc"})," for the description of Chrome for Testing."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"trimcache",children:(0,s.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.trimcache",children:"trimCache()"})})}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(r.p,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,s.jsx)(r.code,{children:"configuration.browserRevision"})," is provided."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Remarks:"})}),(0,s.jsx)(r.p,{children:"Note that the method does not check if any other Puppeteer versions installed on the host that use the same cache directory require the non-current binaries."})]})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);