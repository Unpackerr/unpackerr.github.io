"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[707],{1111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"install/generated/folders","title":"folders","description":"Folder Settings","source":"@site/docs/install/generated/folders.md","sourceDirName":"install/generated","slug":"/install/generated/folders","permalink":"/docs/install/generated/folders","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=t(4848),l=t(8453);const o={},d=void 0,i={},c=[{value:"Folder Settings",id:"folder-settings",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"folder-settings",children:"Folder Settings"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_FOLDERS_"}),", Header: ",(0,r.jsx)("b",{children:" [folders]"})]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'## Global Folder configuration that affects all watched folders.\n[folders]\n## How often poller checks for new folders.\n## The default of `0s` will disable the poller on all systems except Docker.\n## Set this value to `1ms` to disable it in Docker.\n interval = "0s"\n## How many new folder events can be immediately queued. Don\'t change this.\n buffer = 20000\n'})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"## Folder Settings\nUN_FOLDERS_INTERVAL=1s\nUN_FOLDERS_BUFFER=20000\n"})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Config Name"}),(0,r.jsx)(n.th,{children:"Variable Name"}),(0,r.jsx)(n.th,{children:"Default / Note"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"interval"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UN_FOLDERS_INTERVAL"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:'"0s"'})," / How often poller checks for new folders. Use ",(0,r.jsx)(n.code,{children:"1ms"})," to disable it."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buffer"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"UN_FOLDERS_BUFFER"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"20000"})," / How many new folder events can be immediately queued."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6540);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);