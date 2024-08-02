"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[697,282],{5851:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(4848),a=r(8453);const s={},o=void 0,i={id:"install/includes/archiveaccess",title:"archiveaccess",description:"Unpackerr requires write access to your download location.",source:"@site/docs/install/includes/archiveaccess.md",sourceDirName:"install/includes",slug:"/install/includes/archiveaccess",permalink:"/docs/install/includes/archiveaccess",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",...(0,a.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Archive Access",type:"caution",children:(0,t.jsxs)(n.p,{children:["Unpackerr requires write access to your download location.\nMake sure you set the ",(0,t.jsx)(n.code,{children:"path"})," variables correctly in the configuration.\nEven if they're set incorrectly Unpackerr makes a best effort attempt\nto locate your downloads. If it can't find your downloads, then the\n",(0,t.jsx)(n.code,{children:"path"})," or ",(0,t.jsx)(n.code,{children:"paths"})," variables need to be adjusted."]})})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8927:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(4848),a=r(8453),s=r(5851);const o={id:"seedbox",title:"Seedbox",pagination_prev:"install/linux",pagination_next:"install/configuration",description:"Install Unpackerr on a Linux server without root."},i="Seedbox Install",c={id:"install/seedbox",title:"Seedbox",description:"Install Unpackerr on a Linux server without root.",source:"@site/docs/install/seedbox.md",sourceDirName:"install",slug:"/install/seedbox",permalink:"/docs/install/seedbox",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"seedbox",title:"Seedbox",pagination_prev:"install/linux",pagination_next:"install/configuration",description:"Install Unpackerr on a Linux server without root."},sidebar:"someSidebar",previous:{title:"Repository",permalink:"/docs/install/linux"},next:{title:"Application Configuration",permalink:"/docs/install/configuration"}},l={},d=[...s.toc,{value:"Install Script",id:"install-script",level:2},{value:"Screen Usage",id:"screen-usage",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"seedbox-install",children:"Seedbox Install"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"These directions explain how to install Unpackerr on your linux shell without root."})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Download a binary from the ",(0,t.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr/releases/latest",children:"latest release"}),".\nThe ",(0,t.jsx)(n.code,{children:"unpackerr.amd64.linux.gz"})," file is almost certainly what you want to grab,\nso start there if you're not sure."]}),"\n",(0,t.jsxs)(n.li,{children:["Extract the gz file with ",(0,t.jsx)(n.code,{children:"gunzip"})," (or whatever),\nrename it to ",(0,t.jsx)(n.code,{children:"unpackerr"})," and make it executable: ",(0,t.jsx)(n.code,{children:"chmod +x unpackerr"})]}),"\n",(0,t.jsxs)(n.li,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example",children:"example config file"}),",\nor ",(0,t.jsx)(n.a,{href:"https://notifiarr.com/unpackerr",children:"generate one"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Edit config file to suit your needs: ",(0,t.jsx)(n.code,{children:"nano unpackerr.conf"})]}),"\n",(0,t.jsxs)(n.li,{children:["Put both on your Linux shell server, in an ",(0,t.jsx)(n.code,{children:"~/unapckerr/"})," folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Run Unpackerr in the background, ",(0,t.jsx)(n.code,{children:"screen"})," is the easiest way to do so."]}),"\n"]}),"\n",(0,t.jsx)(s.default,{}),"\n",(0,t.jsx)(n.h2,{id:"install-script",children:"Install Script"}),"\n",(0,t.jsxs)(n.p,{children:["Here's a simple script that automates the above steps.\nYou should take some time to understand how ",(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/GNU_Screen",children:"screen"}),"\nworks if you use this solution. Please read and understand what the script does before running it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# Get the latest release tag from GitHub API.\nTAG=$(curl -s https://api.github.com/repos/Unpackerr/unpackerr/releases/latest | \\\n  grep "tag_name" | cut -d \'"\' -f 4)\n\n# Check system architecture and assign it to ARCH variable.\nARCH="$(uname -m)"\nif [ "$ARCH" = "x86_64" ]; then\n  ARCH="amd64"\nelif [ "$ARCH" = "aarch64" ]; then\n  ARCH="arm64"\nelif [ "$ARCH" = "armv7l" ]; then\n  ARCH="arm"\nfi\n\n# Construct the download URL.\nURL="https://github.com/Unpackerr/unpackerr/releases/download/$TAG/unpackerr.${ARCH}.linux.gz"\n\n# Download and extract the binary.\nmkdir -p $HOME/unpackerr\nwget $URL -O - | gunzip > $HOME/unpackerr/unpackerr\nchmod 0755 $HOME/unpackerr/unpackerr\n\n# Download the example config file from the same tag.\nwget https://raw.githubusercontent.com/Unpackerr/unpackerr/$TAG/examples/unpackerr.conf.example \\\n  -O $HOME/unpackerr/unpackerr.conf\nchmod 0600 $HOME/unpackerr/unpackerr.conf\n\n# This opens nano, so you may edit unpackerr.conf to suit your needs.\n# Set a starr app url and api key, and a log file at minimum.\n# "~/unpackerr/unpackerr.log" is a good path for a log file.\nnano $HOME/unpackerr/unpackerr.conf\n\n# Set up a screen session to run unpackerr in the background.\nscreen -dmS unpackerr $HOME/unpackerr/unpackerr -c $HOME/unpackerr/unpackerr.conf\n\n# Add a cron job to start the screen session on reboot.\n# Note: This adds the job to the current user\'s crontab.\n# You\'ll need to manually remove it if you want to stop it later.\n(crontab -l 2>/dev/null; \\\n  echo "@reboot screen -dmS unpackerr $HOME/unpackerr/unpackerr -c $HOME/unpackerr/unpackerr.conf") | \\\n  crontab -\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After you run this script, and exit ",(0,t.jsx)(n.code,{children:"nano"})," (with ",(0,t.jsx)(n.code,{children:"ctrl+x"}),"), Unpackerr will be running in the background."]}),"\n",(0,t.jsx)(n.h2,{id:"screen-usage",children:"Screen Usage"}),"\n",(0,t.jsxs)(n.p,{children:["If you're not familiar with ",(0,t.jsx)(n.code,{children:"screen"}),", here's a quick primer:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"screen -r"})," to re-attach Unpackerr's screen to your terminal."]}),"\n",(0,t.jsxs)(n.li,{children:["After you're satisfied with it, press ",(0,t.jsx)(n.code,{children:"ctrl+a"})," then ",(0,t.jsx)(n.code,{children:"d"})," to detach (and put it back into the background)."]}),"\n",(0,t.jsxs)(n.li,{children:["Reminder that all commands inside a ",(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/GNU_Screen",children:"screen"}),"\nsession begin with ",(0,t.jsx)(n.code,{children:"ctrl+a"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["To make Unpackerr exit, re-attach it and press ",(0,t.jsx)(n.code,{children:"ctrl+c"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The above script also adds a crontab to start Unpackerr on reboot.\nRun ",(0,t.jsx)(n.code,{children:"crontab -l"})," to list all crontabs and verify that Unpackerr's exists.\nRun ",(0,t.jsx)(n.code,{children:"crontab -r"})," to remove all crontabs and ",(0,t.jsx)(n.code,{children:"crontab -e"})," to edit them."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(6540);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);