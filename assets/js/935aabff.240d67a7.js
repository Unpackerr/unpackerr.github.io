"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[64],{7173:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"install/generated/webserver","title":"webserver","description":"Web Server","source":"@site/docs/install/generated/webserver.md","sourceDirName":"install/generated","slug":"/install/generated/webserver","permalink":"/docs/install/generated/webserver","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{}}');var n=t(4848),i=t(8453);const l={},d=void 0,o={},c=[{value:"Web Server",id:"web-server",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"web-server",children:"Web Server"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsxs)("summary",{children:["Examples. Prefix: ",(0,n.jsx)("b",{children:"UN_WEBSERVER_"}),", Header: ",(0,n.jsx)("b",{children:" [webserver]"})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Using the config file:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'[webserver]\n## The web server currently only supports metrics; set this to true if you wish to use it.\n metrics = false\n## This may be set to a port or an ip:port to bind a specific IP. 0.0.0.0 binds ALL IPs.\n listen_addr = "0.0.0.0:5656"\n## Recommend setting a log file for HTTP requests. Otherwise, they go with other logs.\n log_file = \'\'\n## This app automatically rotates logs. Set these to the size and number to keep.\n log_files = 10\n log_file_mb = 10\n## Set both of these to valid file paths to enable HTTPS/TLS.\n ssl_cert_file = \'\'\n ssl_key_file = \'\'\n## Base URL from which to serve content.\n urlbase = "/"\n## Upstreams should be set to the IP or CIDR of your trusted upstream proxy.\n## Setting this correctly allows X-Forwarded-For to be used in logs.\n## In the future it may control auth proxy trust. Must be a list of strings.\n## example: upstreams = [ "127.0.0.1/32", "10.1.2.0/24" ]\n upstreams = []\n'})}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Using environment variables:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"## Web Server\nUN_WEBSERVER_METRICS=false\nUN_WEBSERVER_LISTEN_ADDR=0.0.0.0:5656\nUN_WEBSERVER_LOG_FILE=\nUN_WEBSERVER_LOG_FILES=10\nUN_WEBSERVER_LOG_FILE_MB=10\nUN_WEBSERVER_SSL_CERT_FILE=\nUN_WEBSERVER_SSL_KEY_FILE=\nUN_WEBSERVER_URLBASE=/\nUN_WEBSERVER_UPSTREAMS=\n"})})]}),"\n",(0,n.jsx)(s.admonition,{title:"Metrics",type:"note",children:(0,n.jsxs)(s.p,{children:["The web server currently only provides prometheus metrics, which you can display in\n",(0,n.jsx)(s.a,{href:"https://grafana.com/grafana/dashboards/18817-unpackerr/",children:"Grafana"}),".\nIt provides no UI. This may change in the future. The web server was added in v0.12.0."]})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Config Name"}),(0,n.jsx)(s.th,{children:"Variable Name"}),(0,n.jsx)(s.th,{children:"Default / Note"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"metrics"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_METRICS"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"false"})," / Extracted folders are written with this mode"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"listen_addr"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_LISTEN_ADDR"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:'"0.0.0.0:5656"'})," / ip",":port"," to listen on; ",(0,n.jsx)(s.code,{children:"0.0.0.0"})," is all IPs."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"log_file"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_LOG_FILE"})}),(0,n.jsx)(s.td,{children:"No Default / Provide optional file path to write HTTP logs."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"log_files"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_LOG_FILES"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"10"})," / Log files to keep after rotating. ",(0,n.jsx)(s.code,{children:"0"})," to disable."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"log_file_mb"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_LOG_FILE_MB"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"10"})," / Max size of HTTP log files in megabytes"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ssl_cert_file"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_SSL_CERT_FILE"})}),(0,n.jsx)(s.td,{children:"No Default / Path to SSL cert file to serve HTTPS."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ssl_key_file"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_SSL_KEY_FILE"})}),(0,n.jsx)(s.td,{children:"No Default / Path to SSL key file to serve HTTPS."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"urlbase"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_URLBASE"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:'"/"'})," / Base URL path to serve HTTP content."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"upstreams"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"UN_WEBSERVER_UPSTREAMS"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"[]"})," / List of upstream proxy CIDRs or IPs to trust."]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>d});var r=t(6540);const n={},i=r.createContext(n);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);