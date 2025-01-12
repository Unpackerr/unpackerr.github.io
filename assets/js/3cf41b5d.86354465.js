"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[149],{1189:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"install/generated/folder","title":"folder","description":"Watch Folders","source":"@site/docs/install/generated/folder.md","sourceDirName":"install/generated","slug":"/install/generated/folder","permalink":"/docs/install/generated/folder","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var r=s(4848),l=s(8453);const i={},d=void 0,a={},o=[{value:"Watch Folders",id:"watch-folders",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"watch-folders",children:"Watch Folders"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)("summary",{children:["Examples. Prefix: ",(0,r.jsx)("b",{children:"UN_FOLDER_"}),", Header: ",(0,r.jsx)("b",{children:" [[folder]]"})]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using the config file:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"##################################################################################\n### ###  STOP HERE ### STOP HERE ### STOP HERE ### STOP HERE #### STOP HERE  ### #\n### Only using Starr apps? The things above. The below configs are OPTIONAL. ### #\n##################################################################################\n\n\n##-Folders-#######################################################################\n## This application can also watch folders for things to extract. If you copy a ##\n## subfolder into a watched folder (defined below) any extractable items in the ##\n## folder will be decompressed. This has nothing to do with Starr applications. ##\n##################################################################################\n[[folder]]\n path = '/downloads/auto_extract'\n## Path to extract files to. The default (leaving this blank) is the same as `path` (above).\n extract_path = ''\n## Delete extracted or original files this long after extraction.\n## The default is 0. Set to 0 to disable all deletes. Uncomment it to enable deletes. Uses Go Duration.\n delete_after = \"10m\"\n## Unpackerr extracts archives inside archives. Set this to true to disable recursive extractions.\n disable_recursion = false\n## Delete extracted files after successful extraction? delete_after must be greater than 0.\n delete_files = false\n## Delete original items after successful extraction? delete_after must be greater than 0.\n delete_original = false\n## Disable extraction log (unpackerred.txt) file creation?\n disable_log = false\n## Move extracted files into original folder? If false, files go into an _unpackerred folder.\n move_back = false\n## Set this to true if you want this app to extract ISO files with .iso extension.\n extract_isos = false\n"})}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Using environment variables:"}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"## Watch Folders\nUN_FOLDER_0_PATH=/downloads/auto_extract\nUN_FOLDER_0_EXTRACT_PATH=\nUN_FOLDER_0_DELETE_AFTER=10m\nUN_FOLDER_0_DISABLE_RECURSION=false\nUN_FOLDER_0_DELETE_FILES=false\nUN_FOLDER_0_DELETE_ORIGINAL=false\nUN_FOLDER_0_DISABLE_LOG=false\nUN_FOLDER_0_MOVE_BACK=false\nUN_FOLDER_0_EXTRACT_ISOS=false\n"})})]}),"\n",(0,r.jsx)(t.p,{children:"Folders are a way to watch a folder for things to extract. You can use this to\nmonitor your download client's \"move to\" path if you're not using it with an Starr app."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Config Name"}),(0,r.jsx)(t.th,{children:"Variable Name"}),(0,r.jsx)(t.th,{children:"Default / Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_PATH"})}),(0,r.jsxs)(t.td,{children:["No Default / Folder to watch for archives. ",(0,r.jsx)(t.strong,{children:"Not for Starr apps."})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"extract_path"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_EXTRACT_PATH"})}),(0,r.jsxs)(t.td,{children:["No Default / Where to extract to. Uses ",(0,r.jsx)(t.code,{children:"path"})," if not set."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_after"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_DELETE_AFTER"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:'"10m"'})," / Delete requested files after this duration; ",(0,r.jsx)(t.code,{children:"0"})," disables."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"disable_recursion"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_DISABLE_RECURSION"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true disables extracting archives inside archives."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_files"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_DELETE_FILES"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete extracted files after successful extraction."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"delete_original"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_DELETE_ORIGINAL"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Delete archives after successful extraction."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"disable_log"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_DISABLE_LOG"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Turns off creation of extraction logs files for this folder."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"move_back"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_MOVE_BACK"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Move extracted items back into original folder."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"extract_isos"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"UN_FOLDER_0_EXTRACT_ISOS"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"false"})," / Setting this to true enables .iso file extraction."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var n=s(6540);const r={},l=n.createContext(r);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);