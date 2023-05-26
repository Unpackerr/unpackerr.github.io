"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"freebsd",title:"FreeBSD",pagination_prev:"install/choosemethod",pagination_next:"install/configuration",description:"Install Unpackerr on a FreeBSD server."},i=void 0,l={unversionedId:"install/freebsd",id:"install/freebsd",title:"FreeBSD",description:"Install Unpackerr on a FreeBSD server.",source:"@site/docs/install/freebsd.md",sourceDirName:"install",slug:"/install/freebsd",permalink:"/docs/install/freebsd",draft:!1,tags:[],version:"current",frontMatter:{id:"freebsd",title:"FreeBSD",pagination_prev:"install/choosemethod",pagination_next:"install/configuration",description:"Install Unpackerr on a FreeBSD server."},sidebar:"someSidebar",previous:{title:"Choose Install Method",permalink:"/docs/install/choosemethod"},next:{title:"Application Configuration",permalink:"/docs/install/configuration"}},s={},c=[{value:"Permissions",id:"permissions",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download a package from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Unpackerr/unpackerr/releases"},"Releases")," page."),(0,o.kt)("li",{parentName:"ol"},"Install it, edit config, start it."),(0,o.kt)("li",{parentName:"ol"},"Not many folks use FreeBSD, but we can try to help if you drop by the ",(0,o.kt)("a",{parentName:"li",href:"https://golift.io/discord"},"Discord"),".")),(0,o.kt)("admonition",{title:"Archive Access",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Requires access to your download location.\nMake sure you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," variables correctly in the configuration.\nEven if they're set incorrectly this app makes a best effort attempt to\nlocate your downloads. If Unpackerr can't find your downloads, then the\n",(0,o.kt)("inlineCode",{parentName:"p"},"path")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"paths"),") variables need to be adjusted.")),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"On FreeBSD the app runs as ",(0,o.kt)("inlineCode",{parentName:"p"},"nobody"),". That's not very good and will probably change in the future."))}d.isMDXComponent=!0}}]);