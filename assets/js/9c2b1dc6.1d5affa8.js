"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[487],{4993:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=s(4848),n=s(8453);const d={},i=void 0,l={id:"install/generated/starr",title:"starr",description:"Sonarr Settings",source:"@site/docs/install/generated/starr.md",sourceDirName:"install/generated",slug:"/install/generated/starr",permalink:"/docs/install/generated/starr",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Sonarr Settings",id:"sonarr-settings",level:2},{value:"Radarr Settings",id:"radarr-settings",level:2},{value:"Lidarr Settings",id:"lidarr-settings",level:2},{value:"Readarr Settings",id:"readarr-settings",level:2},{value:"Whisparr Settings",id:"whisparr-settings",level:2}];function a(e){const t={code:"code",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"sonarr-settings",children:"Sonarr Settings"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_SONARR_"}),", Header: ",(0,r.jsx)("b",{children:" [[sonarr]]"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'## Leaving the [[sonarr]] header uncommented (no leading hash #) without also\n## uncommenting the api_key (remove the hash #) will produce a startup warning.\n[[sonarr]]\n url = "http://127.0.0.1:8989"\n api_key = "0123456789abcdef0123456789abcdef"\n## List of paths where content is downloaded for this app.\n## Used as fallback if the path the Starr app reports does not exist or is not accessible.\n paths = [\'/downloads\']\n## Default protocols is torrent. Alternative: "torrent,usenet"\n protocols = "torrent"\n## How long to wait for a reply from the backend.\n timeout = "10s"\n## How long to wait after import before deleting the extracted items.\n delete_delay = "5m"\n## If you use this app with NZB you may wish to delete archives after extraction.\n## General recommendation is: do not enable this for torrent use.\n## Setting this to true deletes the entire original download folder after import.\n delete_orig = false\n## If you use Syncthing, setting this to true will make unpackerr wait for syncs to finish.\n syncthing = false\n'})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"## Sonarr Settings\nUN_SONARR_0_URL=http://sonarr:8989\nUN_SONARR_0_API_KEY=0123456789abcdef0123456789abcdef\nUN_SONARR_0_PATHS_0=/downloads\nUN_SONARR_0_PROTOCOLS=torrent\nUN_SONARR_0_TIMEOUT=10s\nUN_SONARR_0_DELETE_DELAY=5m\nUN_SONARR_0_DELETE_ORIG=false\nUN_SONARR_0_SYNCTHING=false\n"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Default / Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_URL"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"starr is not a real section has no default url"'})," / URL where this starr app can be accessed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"api_key"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_API_KEY"})}),(0,r.jsx)(t.td,{children:"No Default / Provide URL and API key if you use this app."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paths"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_PATHS_0"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'["/downloads"]'})," / File system path where downloaded items are located."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protocols"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_PROTOCOLS"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"torrent"'})," / Protocols to process. Alt: ",(0,r.jsx)(t.code,{children:"torrent,usenet"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_TIMEOUT"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"10s"'})," / How long to wait for the app to respond."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_delay"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_DELETE_DELAY"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"5m"'})," / Extracts are deleted this long after import, ",(0,r.jsx)(t.code,{children:"-1s"})," to disable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_orig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_DELETE_ORIG"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete archives after import? Recommend keeping this false."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"syncthing"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_SONARR_SYNCTHING"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true makes unpackerr wait for syncthing to finish."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"radarr-settings",children:"Radarr Settings"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_RADARR_"}),", Header: ",(0,r.jsx)("b",{children:" [[radarr]]"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'## Leaving the [[radarr]] header uncommented (no leading hash #) without also\n## uncommenting the api_key (remove the hash #) will produce a startup warning.\n[[radarr]]\n url = "http://127.0.0.1:7878"\n api_key = "0123456789abcdef0123456789abcdef"\n## List of paths where content is downloaded for this app.\n## Used as fallback if the path the Starr app reports does not exist or is not accessible.\n paths = [\'/downloads\']\n## Default protocols is torrent. Alternative: "torrent,usenet"\n protocols = "torrent"\n## How long to wait for a reply from the backend.\n timeout = "10s"\n## How long to wait after import before deleting the extracted items.\n delete_delay = "5m"\n## If you use this app with NZB you may wish to delete archives after extraction.\n## General recommendation is: do not enable this for torrent use.\n## Setting this to true deletes the entire original download folder after import.\n delete_orig = false\n## If you use Syncthing, setting this to true will make unpackerr wait for syncs to finish.\n syncthing = false\n'})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"## Radarr Settings\nUN_RADARR_0_URL=http://radarr:7878\nUN_RADARR_0_API_KEY=0123456789abcdef0123456789abcdef\nUN_RADARR_0_PATHS_0=/downloads\nUN_RADARR_0_PROTOCOLS=torrent\nUN_RADARR_0_TIMEOUT=10s\nUN_RADARR_0_DELETE_DELAY=5m\nUN_RADARR_0_DELETE_ORIG=false\nUN_RADARR_0_SYNCTHING=false\n"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Default / Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_URL"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"starr is not a real section has no default url"'})," / URL where this starr app can be accessed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"api_key"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_API_KEY"})}),(0,r.jsx)(t.td,{children:"No Default / Provide URL and API key if you use this app."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paths"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_PATHS_0"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'["/downloads"]'})," / File system path where downloaded items are located."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protocols"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_PROTOCOLS"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"torrent"'})," / Protocols to process. Alt: ",(0,r.jsx)(t.code,{children:"torrent,usenet"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_TIMEOUT"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"10s"'})," / How long to wait for the app to respond."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_delay"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_DELETE_DELAY"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"5m"'})," / Extracts are deleted this long after import, ",(0,r.jsx)(t.code,{children:"-1s"})," to disable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_orig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_DELETE_ORIG"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete archives after import? Recommend keeping this false."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"syncthing"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_RADARR_SYNCTHING"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true makes unpackerr wait for syncthing to finish."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"lidarr-settings",children:"Lidarr Settings"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_LIDARR_"}),", Header: ",(0,r.jsx)("b",{children:" [[lidarr]]"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'[[lidarr]]\n url = "http://127.0.0.1:8686"\n api_key = "0123456789abcdef0123456789abcdef"\n## List of paths where content is downloaded for this app.\n## Used as fallback if the path the Starr app reports does not exist or is not accessible.\n paths = [\'/downloads\']\n## Default protocols is torrent. Alternative: "torrent,usenet"\n protocols = "torrent"\n## How long to wait for a reply from the backend.\n timeout = "10s"\n## How long to wait after import before deleting the extracted items.\n delete_delay = "5m"\n## If you use this app with NZB you may wish to delete archives after extraction.\n## General recommendation is: do not enable this for torrent use.\n## Setting this to true deletes the entire original download folder after import.\n delete_orig = false\n## If you use Syncthing, setting this to true will make unpackerr wait for syncs to finish.\n syncthing = false\n'})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"## Lidarr Settings\nUN_LIDARR_0_URL=http://lidarr:8686\nUN_LIDARR_0_API_KEY=0123456789abcdef0123456789abcdef\nUN_LIDARR_0_PATHS_0=/downloads\nUN_LIDARR_0_PROTOCOLS=torrent\nUN_LIDARR_0_TIMEOUT=10s\nUN_LIDARR_0_DELETE_DELAY=5m\nUN_LIDARR_0_DELETE_ORIG=false\nUN_LIDARR_0_SYNCTHING=false\n"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Default / Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_URL"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"starr is not a real section has no default url"'})," / URL where this starr app can be accessed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"api_key"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_API_KEY"})}),(0,r.jsx)(t.td,{children:"No Default / Provide URL and API key if you use this app."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paths"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_PATHS_0"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'["/downloads"]'})," / File system path where downloaded items are located."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protocols"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_PROTOCOLS"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"torrent"'})," / Protocols to process. Alt: ",(0,r.jsx)(t.code,{children:"torrent,usenet"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_TIMEOUT"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"10s"'})," / How long to wait for the app to respond."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_delay"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_DELETE_DELAY"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"5m"'})," / Extracts are deleted this long after import, ",(0,r.jsx)(t.code,{children:"-1s"})," to disable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_orig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_DELETE_ORIG"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete archives after import? Recommend keeping this false."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"syncthing"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_LIDARR_SYNCTHING"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true makes unpackerr wait for syncthing to finish."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"readarr-settings",children:"Readarr Settings"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_READARR_"}),", Header: ",(0,r.jsx)("b",{children:" [[readarr]]"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'[[readarr]]\n url = "http://127.0.0.1:8787"\n api_key = "0123456789abcdef0123456789abcdef"\n## List of paths where content is downloaded for this app.\n## Used as fallback if the path the Starr app reports does not exist or is not accessible.\n paths = [\'/downloads\']\n## Default protocols is torrent. Alternative: "torrent,usenet"\n protocols = "torrent"\n## How long to wait for a reply from the backend.\n timeout = "10s"\n## How long to wait after import before deleting the extracted items.\n delete_delay = "5m"\n## If you use this app with NZB you may wish to delete archives after extraction.\n## General recommendation is: do not enable this for torrent use.\n## Setting this to true deletes the entire original download folder after import.\n delete_orig = false\n## If you use Syncthing, setting this to true will make unpackerr wait for syncs to finish.\n syncthing = false\n'})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"## Readarr Settings\nUN_READARR_0_URL=http://readarr:8787\nUN_READARR_0_API_KEY=0123456789abcdef0123456789abcdef\nUN_READARR_0_PATHS_0=/downloads\nUN_READARR_0_PROTOCOLS=torrent\nUN_READARR_0_TIMEOUT=10s\nUN_READARR_0_DELETE_DELAY=5m\nUN_READARR_0_DELETE_ORIG=false\nUN_READARR_0_SYNCTHING=false\n"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Default / Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_URL"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"starr is not a real section has no default url"'})," / URL where this starr app can be accessed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"api_key"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_API_KEY"})}),(0,r.jsx)(t.td,{children:"No Default / Provide URL and API key if you use this app."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paths"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_PATHS_0"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'["/downloads"]'})," / File system path where downloaded items are located."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protocols"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_PROTOCOLS"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"torrent"'})," / Protocols to process. Alt: ",(0,r.jsx)(t.code,{children:"torrent,usenet"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_TIMEOUT"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"10s"'})," / How long to wait for the app to respond."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_delay"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_DELETE_DELAY"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"5m"'})," / Extracts are deleted this long after import, ",(0,r.jsx)(t.code,{children:"-1s"})," to disable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_orig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_DELETE_ORIG"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete archives after import? Recommend keeping this false."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"syncthing"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_READARR_SYNCTHING"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true makes unpackerr wait for syncthing to finish."]})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"whisparr-settings",children:"Whisparr Settings"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_WHISPARR_"}),", Header: ",(0,r.jsx)("b",{children:" [[whisparr]]"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'[[whisparr]]\n url = "http://127.0.0.1:6969"\n api_key = "0123456789abcdef0123456789abcdef"\n## List of paths where content is downloaded for this app.\n## Used as fallback if the path the Starr app reports does not exist or is not accessible.\n paths = [\'/downloads\']\n## Default protocols is torrent. Alternative: "torrent,usenet"\n protocols = "torrent"\n## How long to wait for a reply from the backend.\n timeout = "10s"\n## How long to wait after import before deleting the extracted items.\n delete_delay = "5m"\n## If you use this app with NZB you may wish to delete archives after extraction.\n## General recommendation is: do not enable this for torrent use.\n## Setting this to true deletes the entire original download folder after import.\n delete_orig = false\n## If you use Syncthing, setting this to true will make unpackerr wait for syncs to finish.\n syncthing = false\n'})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"## Whisparr Settings\nUN_WHISPARR_0_URL=http://whisparr:6969\nUN_WHISPARR_0_API_KEY=0123456789abcdef0123456789abcdef\nUN_WHISPARR_0_PATHS_0=/downloads\nUN_WHISPARR_0_PROTOCOLS=torrent\nUN_WHISPARR_0_TIMEOUT=10s\nUN_WHISPARR_0_DELETE_DELAY=5m\nUN_WHISPARR_0_DELETE_ORIG=false\nUN_WHISPARR_0_SYNCTHING=false\n"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Default / Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_URL"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"starr is not a real section has no default url"'})," / URL where this starr app can be accessed."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"api_key"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_API_KEY"})}),(0,r.jsx)(t.td,{children:"No Default / Provide URL and API key if you use this app."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paths"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_PATHS_0"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'["/downloads"]'})," / File system path where downloaded items are located."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protocols"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_PROTOCOLS"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"torrent"'})," / Protocols to process. Alt: ",(0,r.jsx)(t.code,{children:"torrent,usenet"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeout"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_TIMEOUT"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"10s"'})," / How long to wait for the app to respond."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_delay"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_DELETE_DELAY"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"5m"'})," / Extracts are deleted this long after import, ",(0,r.jsx)(t.code,{children:"-1s"})," to disable."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_orig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_DELETE_ORIG"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete archives after import? Recommend keeping this false."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"syncthing"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_WHISPARR_SYNCTHING"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true makes unpackerr wait for syncthing to finish."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var r=s(6540);const n={},d=r.createContext(n);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);