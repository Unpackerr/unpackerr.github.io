"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[736],{6837:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(4848),t=o(8453);const a={id:"compose",title:"Docker Compose",pagination_prev:"install/docker",pagination_next:"install/configuration",description:"Install Unpackerr with Docker Compose!"},s=void 0,i={id:"install/compose",title:"Docker Compose",description:"Install Unpackerr with Docker Compose!",source:"@site/docs/install/compose.md",sourceDirName:"install",slug:"/install/compose",permalink:"/docs/install/compose",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"compose",title:"Docker Compose",pagination_prev:"install/docker",pagination_next:"install/configuration",description:"Install Unpackerr with Docker Compose!"},sidebar:"someSidebar",previous:{title:"Docker Basics",permalink:"/docs/install/docker"},next:{title:"Application Configuration",permalink:"/docs/install/configuration"}},l={},d=[{value:"Data Mount",id:"data-mount",level:2},{value:"Log File",id:"log-file",level:2},{value:"More Notes",id:"more-notes",level:2},{value:"Config File",id:"config-file",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Copy the ",(0,r.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml",children:"example docker-compose.yml"}),"\nfrom the repo."]}),"\n",(0,r.jsx)(n.li,{children:"Update the docker-compose.yml file with your environment variable values for your installation."}),"\n",(0,r.jsx)(n.li,{children:"Remove variables you did not change; the defaults are found on the Configuration page."}),"\n",(0,r.jsx)(n.li,{children:"Again, remove the variables you don't set or change. You can always add them back later."}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Do not quote variable values, this isn't bash."})}),"\n",(0,r.jsx)(n.li,{children:"Then start it, like this:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker-compose up -d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example minimal compose file. This works, and all the defaults should work for you too.\nThe ",(0,r.jsxs)(n.a,{href:"https://docs.docker.com/compose/compose-file/05-services/#user",children:[(0,r.jsx)(n.code,{children:"user:"})," parameter"]})," controls\nthe uid and gid that the app runs as. The default is root if you don't include it."]}),"\n",(0,r.jsxs)(n.p,{children:["Find your ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"TZ identifier here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n  unpackerr:\n    image: golift/unpackerr\n    container_name: unpackerr\n    volumes:\n      - /mnt/storage/downloads:/downloads\n    restart: always\n    user: 1001:100\n    environment:\n      - TZ=America/New_York\n      - UN_LOG_FILE=/downloads/unpackerr.log\n      - UN_SONARR_0_URL=http://sonarr:8989\n      - UN_SONARR_0_API_KEY=32coolcatcharacters\n      - UN_RADARR_0_URL=http://radarr:7878\n      - UN_RADARR_0_API_KEY=32coolkatcharacters\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And if you're trying to watch a folder, add this ",(0,r.jsx)(n.code,{children:"environment:"})," variable with your folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"      - UN_FOLDER_0_PATH=/downloads/autoxtract\n"})}),"\n",(0,r.jsx)(n.h2,{id:"data-mount",children:"Data Mount"}),"\n",(0,r.jsxs)(n.admonition,{title:"Data Mount",type:"info",children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"/data"})," or ",(0,r.jsx)(n.code,{children:"/downloads"})," mount you use for Starr apps should be set the same for Unpackerr.\nUsing the same mount path keeps consistency and makes troubleshooting Unpackerr easier.\nMost importantly, it allows Unpackerr to find your files."]}),(0,r.jsxs)(n.p,{children:["This means that if you mount ",(0,r.jsx)(n.code,{children:"/mnt/storage/downloads:/downloads"})," on your Starr apps you should\nalso mount ",(0,r.jsx)(n.code,{children:"/mnt/storage/downloads:/downloads"})," on your Unpackerr container. If you mount\n",(0,r.jsx)(n.code,{children:"/mnt/user/data:/data"})," on your Starr apps, mount the same path on Unpackerr.\n",(0,r.jsx)(n.strong,{children:"Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them."})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This is the most important part. Look at your download client (like Qbit), Sonarr and Radarr in your\nexisting compose; look for ",(0,r.jsx)(n.code,{children:"volumes:"}),". One of these volumes is your download mount. It's usually\n",(0,r.jsx)(n.code,{children:"/data"})," or ",(0,r.jsx)(n.code,{children:"/downloads"})," and looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"    volumes:\n      - /mnt/storage/downloads:/downloads\n"})}),"\n",(0,r.jsx)(n.p,{children:"Simply copy the downloads storage volume from your Starr apps or download client to Unpackerr."}),"\n",(0,r.jsx)(n.h2,{id:"log-file",children:"Log File"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Set a log file."})," You'll need it to figure out what Unpackerr did. Put it in your download location.\nExample:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"    environment:\n      - UN_LOG_FILE=/downloads/unpackerr.log\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"/downloads/unpackerr.log"})," with ",(0,r.jsx)(n.code,{children:"/data/unpackerr.log"})," if you mounted ",(0,r.jsx)(n.code,{children:"/data"})," in ",(0,r.jsx)(n.code,{children:"volumes:"}),".\nOr whatever download path you mounted; just put it there for ease of finding it."]}),"\n",(0,r.jsx)(n.h2,{id:"more-notes",children:"More Notes"}),"\n",(0,r.jsxs)(n.admonition,{title:"Security Opts",type:"warning",children:[(0,r.jsx)(n.p,{children:"Do not include this in your compose. It will make Unpackerr not work properly. If you know how\nto adjust caps, go for it, but please don't ask for help without removing this first:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"    security_opt:\n       - no-new-privileges:true\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"config-file",children:"Config File"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Very Optional:"})}),"\n",(0,r.jsxs)(n.p,{children:["You may also use a config file with or instead of environment variables. Name the file ",(0,r.jsx)(n.code,{children:"unpackerr.conf"}),"\nand mount the folder it's in to ",(0,r.jsx)(n.code,{children:"/config"}),", so the file becomes available at ",(0,r.jsx)(n.code,{children:"/config/unpackerr.conf"}),".\nHere's an example volume mount. You need one like this that ends with ",(0,r.jsx)(n.code,{children:"/config"}),". Put the file in the\nfolder on the left side."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"    volumes:\n      - /mnt/appdata/unpackerr:/config\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>i});var r=o(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);