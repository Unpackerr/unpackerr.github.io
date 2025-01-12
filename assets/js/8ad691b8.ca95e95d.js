"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[273,378,736],{1658:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"install/compose","title":"Docker Compose","description":"Install Unpackerr with Docker Compose!","source":"@site/docs/install/compose.md","sourceDirName":"install","slug":"/install/compose","permalink":"/docs/install/compose","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"compose","title":"Docker Compose","pagination_prev":"install/docker","pagination_next":"install/configuration","description":"Install Unpackerr with Docker Compose!"},"sidebar":"someSidebar","previous":{"title":"Docker Basics","permalink":"/docs/install/docker"},"next":{"title":"Application Configuration","permalink":"/docs/install/configuration"}}');var t=o(4848),s=o(8453),i=o(6311),a=o(2046);const l={id:"compose",title:"Docker Compose",pagination_prev:"install/docker",pagination_next:"install/configuration",description:"Install Unpackerr with Docker Compose!"},c="Compose Install",d={},h=[{value:"Data Mount",id:"data-mount",level:2},...a.toc,{value:"Log File",id:"log-file",level:2},{value:"More Notes",id:"more-notes",level:2},{value:"Config File",id:"config-file",level:2},...i.toc];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"compose-install",children:"Compose Install"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml",children:"example docker-compose.yml"}),"\nfrom the repo or ",(0,t.jsx)(n.a,{href:"https://notifiarr.com/unpackerr",children:"generate one"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Update the docker-compose.yml file with your environment variable values for your installation."}),"\n",(0,t.jsx)(n.li,{children:"Remove variables you did not change; the defaults are found on the Configuration page."}),"\n",(0,t.jsx)(n.li,{children:"Again, remove the variables you don't set or change. You can always add them back later."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Do not quote variable values, this isn't bash."})}),"\n",(0,t.jsx)(n.li,{children:"Then start it, like this:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example minimal compose file. This works well, and all the defaults should work for you too.\nThe ",(0,t.jsxs)(n.a,{href:"https://docs.docker.com/compose/compose-file/05-services/#user",children:[(0,t.jsx)(n.code,{children:"user:"})," parameter"]})," controls\nthe uid and gid that the app runs as. The default is root if you don't include it, but you should definitely\ninclude it, and set it correctly for your environment.\nRead the ",(0,t.jsx)(n.a,{href:"docker#permissions",children:"Permissions section on the Docker page"})," for more details."]}),"\n",(0,t.jsxs)(n.p,{children:["Find your time zone ",(0,t.jsxs)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:[(0,t.jsx)(n.code,{children:"TZ"})," identifier here"]}),",\nand set ",(0,t.jsx)(n.code,{children:"TZ"})," too so logs have the correct time stamp for you."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"services:\n  unpackerr:\n    image: golift/unpackerr\n    container_name: unpackerr\n    volumes:\n      - /mnt/storage/downloads:/downloads\n    restart: always\n    user: 1001:100\n    environment:\n      - TZ=America/New_York\n      - UN_LOG_FILE=/downloads/unpackerr.log\n      - UN_SONARR_0_URL=http://sonarr:8989\n      - UN_SONARR_0_API_KEY=32coolcatcharacters\n      - UN_RADARR_0_URL=http://radarr:7878\n      - UN_RADARR_0_API_KEY=32coolkatcharacters\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And if you're trying to watch a folder, add this ",(0,t.jsx)(n.code,{children:"environment:"})," variable with ",(0,t.jsx)(n.em,{children:"your"})," folder path:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"      - UN_FOLDER_0_PATH=/downloads/autoxtract\n"})}),"\n",(0,t.jsx)(n.h2,{id:"data-mount",children:"Data Mount"}),"\n",(0,t.jsx)(a.default,{}),"\n",(0,t.jsx)(n.p,{children:"Simply copy the downloads storage volume from your Starr apps or download client to Unpackerr."}),"\n",(0,t.jsx)(n.h2,{id:"log-file",children:"Log File"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Set a log file."})," You'll need it to figure out what Unpackerr did. Put it in your download location.\nExample:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"    environment:\n      - UN_LOG_FILE=/downloads/unpackerr.log\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"/downloads/unpackerr.log"})," with ",(0,t.jsx)(n.code,{children:"/data/unpackerr.log"})," if you mounted ",(0,t.jsx)(n.code,{children:"/data"})," in ",(0,t.jsx)(n.code,{children:"volumes:"}),".\nOr whatever download path you mounted; just put it there for ease of finding it."]}),"\n",(0,t.jsx)(n.h2,{id:"more-notes",children:"More Notes"}),"\n",(0,t.jsxs)(n.admonition,{title:"Security Opts",type:"danger",children:[(0,t.jsx)(n.p,{children:"Do not include this in your compose. It will make Unpackerr not work properly. If you know how\nto adjust caps, go for it, but please don't ask for help without removing this first:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"    security_opt:\n       - no-new-privileges:true\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"config-file",children:"Config File"}),"\n",(0,t.jsxs)(n.p,{children:["You may also use a config file with or instead of environment variables.\n",(0,t.jsx)(n.strong,{children:"This section is optional and generally not recommended for compose users."})]}),"\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"    volumes:\n      - /mnt/appdata/unpackerr:/config\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You should have a volume like the one above. It must end with ",(0,t.jsx)(n.code,{children:":/config"}),".\nPut the ",(0,t.jsx)(n.code,{children:"unpackerr.conf"})," file in the folder on the left side,\nor edit the file unpackerr writes after you start it."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},6311:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"install/includes/dockerconfigfile","title":"dockerconfigfile","description":"When you start Unpackerr in Docker it checks for a /config directory. If one exists, and there is","source":"@site/docs/install/includes/dockerconfigfile.md","sourceDirName":"install/includes","slug":"/install/includes/dockerconfigfile","permalink":"/docs/install/includes/dockerconfigfile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var t=o(4848),s=o(8453);const i={},a=void 0,l={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Default Config File",type:"info",children:(0,t.jsxs)(n.p,{children:["When you start Unpackerr in Docker it checks for a ",(0,t.jsx)(n.code,{children:"/config"})," directory. If one exists, and there is\nno ",(0,t.jsx)(n.code,{children:"unpackerr.conf"})," file within it, a brand new file is written with all default values. We still\nrecommend using the ",(0,t.jsx)(n.a,{href:"https://notifiarr.com/unpackerr",children:"generator"})," to build yourself a new file.\nReplace the file or contents with those from the generator and restart the container."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy the ",(0,t.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example",children:"example config file"}),"\nfrom the repo, or ",(0,t.jsx)(n.a,{href:"https://notifiarr.com/unpackerr",children:"generate one"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Then grab the image from DockerHub or GHCR."}),"\n",(0,t.jsxs)(n.li,{children:["Run the image using a ",(0,t.jsx)(n.code,{children:"volume"})," mount for the config file's directory."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.strong,{children:["The config file must be located at ",(0,t.jsx)(n.code,{children:"/config/unpackerr.conf"}),"."]})}),"\n",(0,t.jsxs)(n.li,{children:["Recommend bind-mounting ",(0,t.jsx)(n.code,{children:"/config"})," volume as an app-data directory. Example Follows."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2046:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"install/includes/dockerdatamount","title":"dockerdatamount","description":"The /data or /downloads mount you use for Starr apps should be set the same for Unpackerr.","source":"@site/docs/install/includes/dockerdatamount.md","sourceDirName":"install/includes","slug":"/install/includes/dockerdatamount","permalink":"/docs/install/includes/dockerdatamount","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var t=o(4848),s=o(8453);const i={},a=void 0,l={},c=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Data Mount",type:"tip",children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"/data"})," or ",(0,t.jsx)(n.code,{children:"/downloads"})," mount you use for Starr apps should be set the same for Unpackerr.\nUsing the same mount path keeps consistency and makes troubleshooting Unpackerr easier.\nMost importantly, it allows Unpackerr to find your files."]}),(0,t.jsxs)(n.p,{children:["This means that if you mount ",(0,t.jsx)(n.code,{children:"/mnt/storage/downloads:/downloads"})," on your Starr apps you should\nalso mount ",(0,t.jsx)(n.code,{children:"/mnt/storage/downloads:/downloads"})," on your Unpackerr container. If you mount\n",(0,t.jsx)(n.code,{children:"/mnt/user/data:/data"})," on your Starr apps, mount the same path on Unpackerr.\n",(0,t.jsx)(n.strong,{children:"Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them."})]})]}),"\n",(0,t.jsxs)(n.p,{children:["This is the most important part. Look at your download client (like Qbit), Sonarr and Radarr in your\nexisting compose or docker run commands; look for ",(0,t.jsx)(n.code,{children:"volumes:"})," or ",(0,t.jsx)(n.code,{children:"docker run -v"}),".\nOne of these volumes is your download mount. It's usually ",(0,t.jsx)(n.code,{children:"/data"})," or ",(0,t.jsx)(n.code,{children:"/downloads"})," and looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"docker run -v /mnt/storage/downloads:/downloads\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"    volumes:\n      - /mnt/storage/downloads:/downloads\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);