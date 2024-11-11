/*! For license information please see 89dd7d6a.c69f457f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25500],{77191:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"browsers-api/index","title":"@puppeteer/browsers","description":"Manage and launch browsers/drivers from a CLI or programmatically.","source":"@site/../docs/browsers-api/index.md","sourceDirName":"browsers-api","slug":"/browsers-api/","permalink":"/next/browsers-api/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"API"},"sidebar":"browsersApi","next":{"title":"launch","permalink":"/next/browsers-api/browsers.launch"}}');var i=r(74848),t=r(28453);const l={sidebar_label:"API"},o="@puppeteer/browsers",d={},a=[{value:"CLI",id:"cli",level:2},{value:"Known limitations",id:"known-limitations",level:2},{value:"API",id:"api",level:2},{value:"Classes",id:"classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"puppeteerbrowsers",children:"@puppeteer/browsers"})}),"\n",(0,i.jsx)(s.p,{children:"Manage and launch browsers/drivers from a CLI or programmatically."}),"\n",(0,i.jsx)(s.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsxs)(s.p,{children:["Use ",(0,i.jsx)(s.code,{children:"npx"})," to run the CLI:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx @puppeteer/browsers --help\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Built-in per-command ",(0,i.jsx)(s.code,{children:"help"})," will provide all documentation you need to use the CLI."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx @puppeteer/browsers --help # help for all commands\nnpx @puppeteer/browsers install --help # help for the install command\nnpx @puppeteer/browsers launch --help # help for the launch command\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Some example to give an idea of what the CLI looks like (use the ",(0,i.jsx)(s.code,{children:"--help"})," command for more examples):"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"# Download the latest available Chrome for Testing binary corresponding to the Stable channel.\nnpx @puppeteer/browsers install chrome@stable\n\n# Download a specific Chrome for Testing version.\nnpx @puppeteer/browsers install chrome@116.0.5793.0\n\n# Download the latest Chrome for Testing version for the given milestone.\nnpx @puppeteer/browsers install chrome@117\n\n# Download the latest available ChromeDriver version corresponding to the Canary channel.\nnpx @puppeteer/browsers install chromedriver@canary\n\n# Download a specific ChromeDriver version.\nnpx @puppeteer/browsers install chromedriver@116.0.5793.0\n"})}),"\n",(0,i.jsx)(s.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Launching the system browsers is only possible for Chrome/Chromium."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,i.jsxs)(s.p,{children:["The programmatic API allows installing and launching browsers from your code. See the ",(0,i.jsx)(s.code,{children:"test"})," folder for examples on how to use the ",(0,i.jsx)(s.code,{children:"install"}),", ",(0,i.jsx)(s.code,{children:"canInstall"}),", ",(0,i.jsx)(s.code,{children:"launch"}),", ",(0,i.jsx)(s.code,{children:"computeExecutablePath"}),", ",(0,i.jsx)(s.code,{children:"computeSystemExecutablePath"})," and other methods."]}),"\n",(0,i.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Class"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"cli",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.cli",children:"CLI"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"installedbrowser",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.installedbrowser",children:"InstalledBrowser"})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Remarks:"})}),(0,i.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.jsx)(s.code,{children:"InstalledBrowser"})," class."]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"process",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.process",children:"Process"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"timeouterror",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.timeouterror",children:"TimeoutError"})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Remarks:"})}),(0,i.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.jsx)(s.code,{children:"TimeoutError"})," class."]})]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Enumeration"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"browser",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.browser",children:"Browser"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:"Supported browsers."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"browserplatform",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.browserplatform",children:"BrowserPlatform"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:"Platform names used to identify a OS platform x architecture combination in the way that is relevant for the browser download."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"chromereleasechannel",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.chromereleasechannel",children:"ChromeReleaseChannel"})})}),(0,i.jsx)("td",{})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Function"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"candownload",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.candownload",children:"canDownload(options)"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"computeexecutablepath",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.computeexecutablepath",children:"computeExecutablePath(options)"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"computesystemexecutablepath",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.computesystemexecutablepath",children:"computeSystemExecutablePath(options)"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"createprofile",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.createprofile",children:"createProfile(browser, opts)"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"detectbrowserplatform",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.detectbrowserplatform",children:"detectBrowserPlatform()"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"getinstalledbrowsers",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.getinstalledbrowsers",children:"getInstalledBrowsers(options)"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:"Returns metadata about browsers installed in the cache directory."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"getversioncomparator",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.getversioncomparator",children:"getVersionComparator(browser)"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:"Returns a version comparator for the given browser that can be used to sort browser versions."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"install",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.install",children:"install(options)"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Downloads and unpacks the browser archive according to the ",(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"}),"."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"install",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.install",children:"install(options)"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Downloads the browser archive according to the ",(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"})," without unpacking."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"launch",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.launch",children:"launch(opts)"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(s.p,{children:["Launches a browser process according to ",(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.launchoptions",children:"LaunchOptions"}),"."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"makeprogresscallback",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.makeprogresscallback",children:"makeProgressCallback(browser, buildId)"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"resolvebuildid",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.resolvebuildid",children:"resolveBuildId(browser, platform, tag)"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"uninstall",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.uninstall",children:"uninstall(options)"})})}),(0,i.jsx)("td",{})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Interface"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"getinstalledbrowsersoptions",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.getinstalledbrowsersoptions",children:"GetInstalledBrowsersOptions"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"installoptions",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.installoptions",children:"InstallOptions"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"launchoptions",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.launchoptions",children:"LaunchOptions"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"options",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.options",children:"Options"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"profileoptions",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.profileoptions",children:"ProfileOptions"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"systemoptions",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.systemoptions",children:"SystemOptions"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"uninstalloptions",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.uninstalloptions",children:"UninstallOptions"})})}),(0,i.jsx)("td",{})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Variable"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"cdp_websocket_endpoint_regex",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.cdp_websocket_endpoint_regex",children:"CDP_WEBSOCKET_ENDPOINT_REGEX"})})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("span",{id:"webdriver_bidi_websocket_endpoint_regex",children:(0,i.jsx)(s.a,{href:"/next/browsers-api/browsers.webdriver_bidi_websocket_endpoint_regex",children:"WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX"})})}),(0,i.jsx)("td",{})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21020:(e,s,r)=>{var n=r(96540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,r){var n,t={},a=null,c=null;for(n in void 0!==r&&(a=""+r),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(c=s.ref),s)l.call(s,n)&&!d.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:i,type:e,key:a,ref:c,props:t,_owner:o.current}}s.Fragment=t,s.jsx=a,s.jsxs=a},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>o});var n=r(96540);const i={},t=n.createContext(i);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);