"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[378],{2046:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"install/includes/dockerdatamount","title":"dockerdatamount","description":"The /data or /downloads mount you use for Starr apps should be set the same for Unpackerr.","source":"@site/docs/install/includes/dockerdatamount.md","sourceDirName":"install/includes","slug":"/install/includes/dockerdatamount","permalink":"/docs/install/includes/dockerdatamount","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var s=e(4848),r=e(8453);const a={},d=void 0,c={},l=[];function i(n){const o={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.admonition,{title:"Data Mount",type:"tip",children:[(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"/data"})," or ",(0,s.jsx)(o.code,{children:"/downloads"})," mount you use for Starr apps should be set the same for Unpackerr.\nUsing the same mount path keeps consistency and makes troubleshooting Unpackerr easier.\nMost importantly, it allows Unpackerr to find your files."]}),(0,s.jsxs)(o.p,{children:["This means that if you mount ",(0,s.jsx)(o.code,{children:"/mnt/storage/downloads:/downloads"})," on your Starr apps you should\nalso mount ",(0,s.jsx)(o.code,{children:"/mnt/storage/downloads:/downloads"})," on your Unpackerr container. If you mount\n",(0,s.jsx)(o.code,{children:"/mnt/user/data:/data"})," on your Starr apps, mount the same path on Unpackerr.\n",(0,s.jsx)(o.strong,{children:"Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them."})]})]}),"\n",(0,s.jsxs)(o.p,{children:["This is the most important part. Look at your download client (like Qbit), Sonarr and Radarr in your\nexisting compose or docker run commands; look for ",(0,s.jsx)(o.code,{children:"volumes:"})," or ",(0,s.jsx)(o.code,{children:"docker run -v"}),".\nOne of these volumes is your download mount. It's usually ",(0,s.jsx)(o.code,{children:"/data"})," or ",(0,s.jsx)(o.code,{children:"/downloads"})," and looks like this:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-shell",children:"docker run -v /mnt/storage/downloads:/downloads\n"})}),"\n",(0,s.jsx)(o.p,{children:"or"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:"    volumes:\n      - /mnt/storage/downloads:/downloads\n"})})]})}function u(n={}){const{wrapper:o}={...(0,r.R)(),...n.components};return o?(0,s.jsx)(o,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}},8453:(n,o,e)=>{e.d(o,{R:()=>a,x:()=>d});var t=e(6540);const s={},r=t.createContext(s);function a(n){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function d(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(r.Provider,{value:o},n.children)}}}]);