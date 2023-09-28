(()=>{"use strict";var e={n:o=>{var n=o&&o.__esModule?()=>o.default:()=>o;return e.d(n,{a:n}),n},d:(o,n)=>{for(var t in n)e.o(n,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:n[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{Button:()=>a,Card:()=>v,Form:()=>S,Layout:()=>b,TextField:()=>N,Theme:()=>D,Typography:()=>m,breakpoints:()=>l,combineClassNames:()=>i,useBreakpoint:()=>d});const n=require("react");var t=e.n(n),i=function(e){return e.filter(Boolean).join(" ")};const r={button:"woozdesign-b_aG7","button--block":"woozdesign-DzEbQ","button--large":"woozdesign-Rsc5Y","button--xlarge":"woozdesign-WINoP","button--small":"woozdesign-tM4Ki","button--disabled":"woozdesign-kdt7p","button--round":"woozdesign-sRHim","button--circle":"woozdesign-QJ4DF","button--primary":"woozdesign-ym05_","icon-prepend":"woozdesign-tAcIT","icon-append":"woozdesign-MoXdl","button--high-contrast":"woozdesign-KKxLy","button--secondary":"woozdesign-iCHsh","button--outlined":"woozdesign-MJQm4","button--text":"woozdesign-w7AO2","button--icon":"woozdesign-yezCK"};var s=function(){return s=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e},s.apply(this,arguments)};const a=function(e){var o,n=e.variant,a=void 0===n?"primary":n,l=e.size,d=void 0===l?"medium":l,c=e.color,g=void 0===c?"purple":c,u=e.disabled,m=void 0!==u&&u,p=e.block,w=void 0!==p&&p,z=e.highContrast,v=void 0!==z&&z,f=e.shape,y=void 0===f?"rect":f,h=e.buttonType,b=void 0===h?"button":h,x=e.iconPrepend,O=e.iconAppend,E=e.children,N=e.onClick,C=e.href,S=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(e,["variant","size","color","disabled","block","highContrast","shape","buttonType","iconPrepend","iconAppend","children","onClick","href"]),j=[null!==(o=S.className)&&void 0!==o?o:"",r.button,r["button--".concat(d)],r["button--".concat(a)],m?r["button--disabled"]:"",w?r["button--block"]:"",v?r["button--high-contrast"]:"",r["button--".concat(y)]];return C?t().createElement("a",s({className:i(j),"data-accent-color":g,href:C,onClick:function(e){N&&N(e)}},S),x&&t().createElement("span",{className:r["icon-prepend"]},x),E,O&&t().createElement("span",{className:r["icon-append"]},O)):t().createElement("button",s({className:i(j),"data-accent-color":g,disabled:m,onClick:function(e){N&&N(e)},type:b},S),x&&t().createElement("span",{className:r["icon-prepend"]},x),E,O&&t().createElement("span",{className:r["icon-append"]},O))};var l={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},d=function(){var e=function(){var e,o="undefined"!=typeof window?window.innerWidth:0;return{breakpoint:e=o>=l.xxl?"xxl":o>=l.xl?"xl":o>=l.lg?"lg":o>=l.md?"md":o>=l.sm?"sm":"xs",xsAndUp:o>=l.xs,smAndDown:o<l.md,smAndUp:o>=l.sm,mdAndDown:o<l.lg,mdAndUp:o>=l.md,lgAndDown:o<l.xl,lgAndUp:o>=l.lg,xlAndDown:o<l.xxl,xlAndUp:o>=l.xl,xxlAndDown:!0,xs:"xs"==e,sm:"sm"==e,md:"md"==e,lg:"lg"==e,xl:"xl"==e,xxl:"xxl"==e}},o=(0,n.useState)(e),t=o[0],i=o[1];return(0,n.useEffect)((function(){var o=function(){i(e())};if("undefined"!=typeof window)return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),t};const c={"title-1":"woozdesign-BVZdD","subtitle-1":"woozdesign-F1JtJ","title-2":"woozdesign-m4rj8","subtitle-2":"woozdesign-UQFcU","title-3":"woozdesign-EB0gH","subtitle-3":"woozdesign-uddp6","title-4":"woozdesign-rcHd6","subtitle-4":"woozdesign-wOfBo","title-5":"woozdesign-EWPUB","subtitle-5":"woozdesign-ssQkO","title-6":"woozdesign-fJsuB","subtitle-6":"woozdesign-WYS6o",text:"woozdesign-W2noe","text--small":"woozdesign-o_dIr","text--medium":"woozdesign-EDuWX","text--large":"woozdesign-pCgbf"};var g=function(){return g=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e},g.apply(this,arguments)},u=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n};const m={Title:function(e){var o=e.level,n=void 0===o?2:o,r=e.color,s=void 0===r?"gray":r,a=e.children,l=e.className,d=void 0===l?"":l,m=u(e,["level","color","children","className"]),p="h".concat(n),w=c["title-".concat(n)],z=i([w,d]);return t().createElement(p,g({className:z,"data-accent-color":s},m),a)},Text:function(e){var o=e.children,n=e.size,r=void 0===n?"medium":n,s=e.color,a=void 0===s?"gray":s,l=e.className,d=void 0===l?"":l,m=u(e,["children","size","color","className"]),p=c["text--".concat(r)],w=i([p,d]);return t().createElement("span",g({className:w,"data-accent-color":a},m),o)},Subtitle:function(e){var o=e.level,n=void 0===o?6:o,r=e.color,s=void 0===r?"gray":r,a=e.children,l=e.className,d=void 0===l?"":l,m=u(e,["level","color","children","className"]),p="h".concat(n),w=c["subtitle-".concat(n)],z=i([w,d]);return t().createElement(p,g({className:z,"data-accent-color":s},m),a)},Paragraph:function(e){var o=e.children,n=e.color,r=void 0===n?"gray":n,s=e.size,a=void 0===s?"medium":s,l=e.className,d=void 0===l?"":l,m=u(e,["children","color","size","className"]),p=c["text--".concat(a)],w=i([p,d]);return t().createElement("p",g({className:w,"data-accent-color":r},m),o)}},p={card:"woozdesign-t3s26","card--small":"woozdesign-Ydrsf",heading:"woozdesign-UhufO",body:"woozdesign-DZFwi",actions:"woozdesign-BDR5h","card--medium":"woozdesign-zayRx","card--large":"woozdesign-b1lW9","card--xlarge":"woozdesign-aNrE8","heading--outlined":"woozdesign-fzzGn","heading-title":"woozdesign-vk8RJ","heading-subtitle":"woozdesign-p7moq","heading-action":"woozdesign-Sna83",description:"woozdesign-v_2oZ","actions--outlined":"woozdesign-AnSu_","card--outlined":"woozdesign-lTb0t"};var w=function(){return w=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e},w.apply(this,arguments)},z=function(e){var o=e.outlined,n=void 0===o||o,r=e.size,s=void 0===r?"medium":r,a=e.children,l=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(e,["outlined","size","children"]),d=[p.card,p["card--".concat(s)]];return n&&d.push(p["card--outlined"]),t().createElement("div",w({className:i(d)},l),a)};z.Heading=function(e){var o=e.title,n=e.subtitle,r=e.action,s=e.titleLevel,a=void 0===s?5:s,l=e.outlined,d=[p.heading,void 0===l||l?p["heading--outlined"]:""];return t().createElement("div",{className:i(d)},t().createElement("div",null,t().createElement(m.Title,{level:a,style:{margin:"0"}},o),n&&t().createElement(m.Subtitle,{style:{margin:"0"}},n)),r&&t().createElement("div",{className:p["heading-action"]},r))},z.Body=function(e){var o=e.title,n=e.description,i=e.titleLevel,r=void 0===i?5:i;return t().createElement("div",{className:p.body},o&&t().createElement(m.Title,{level:r,style:{margin:"0"}},o),n&&t().createElement(m.Text,{type:"secondary",style:{margin:"0"}},n))},z.Actions=function(e){var o=e.children,n=e.justify,r=void 0===n?"start":n,s=e.outlined,a=[p.actions,void 0===s||s?p["actions--outlined"]:""];return t().createElement("div",{className:i(a),style:{justifyContent:r}},o)};const v=z,f={container:"woozdesign-fEXeM",row:"woozdesign-cjaHv",col:"woozdesign-Z57ff","xs-1":"woozdesign-mnH3E","xs-2":"woozdesign-sdD_v","xs-3":"woozdesign-ysXMZ","xs-4":"woozdesign-U9ro4","xs-5":"woozdesign-cJXfk","xs-6":"woozdesign-l1OSU","xs-7":"woozdesign-VZjd2","xs-8":"woozdesign-CprBZ","xs-9":"woozdesign-GMjeU","xs-10":"woozdesign-IJ9At","xs-11":"woozdesign-nTkwO","xs-12":"woozdesign-bD8RC","xs-13":"woozdesign-EmjX3","xs-14":"woozdesign-bZNh3","xs-15":"woozdesign-bxyYH","xs-16":"woozdesign-t_Sfq","xs-17":"woozdesign-dEeMj","xs-18":"woozdesign-oC0td","xs-19":"woozdesign-G0shg","xs-20":"woozdesign-rINrn","xs-21":"woozdesign-dSvlC","xs-22":"woozdesign-QmgvQ","xs-23":"woozdesign-luvSM","xs-24":"woozdesign-aSLZE","sm-1":"woozdesign-Ebb20","sm-2":"woozdesign-qtqwU","sm-3":"woozdesign-CAf9a","sm-4":"woozdesign-PhMVo","sm-5":"woozdesign-PMDMN","sm-6":"woozdesign-dJvv4","sm-7":"woozdesign-NTF7R","sm-8":"woozdesign-kNNog","sm-9":"woozdesign-uyUuu","sm-10":"woozdesign-HIQPc","sm-11":"woozdesign-mIIoE","sm-12":"woozdesign-v21EQ","sm-13":"woozdesign-Vx426","sm-14":"woozdesign-WItLt","sm-15":"woozdesign-MOlXp","sm-16":"woozdesign-_7vDP","sm-17":"woozdesign-6LLOp","sm-18":"woozdesign-C7bIM","sm-19":"woozdesign-llIj1","sm-20":"woozdesign-mF0sk","sm-21":"woozdesign-pFQ5A","sm-22":"woozdesign-NfADk","sm-23":"woozdesign-Kfl_E","sm-24":"woozdesign-c7EY0","md-1":"woozdesign-bBm3d","md-2":"woozdesign-b_CIl","md-3":"woozdesign-uDM_H","md-4":"woozdesign-AFoNX","md-5":"woozdesign-O7yrl","md-6":"woozdesign-qXh6K","md-7":"woozdesign-HBs0N","md-8":"woozdesign-CRuA9","md-9":"woozdesign-z4pco","md-10":"woozdesign-dNQ0J","md-11":"woozdesign-phkWN","md-12":"woozdesign-d8eYn","md-13":"woozdesign-W8xM_","md-14":"woozdesign-Bp5LV","md-15":"woozdesign-pbX4p","md-16":"woozdesign-Sco7F","md-17":"woozdesign-ZoP5N","md-18":"woozdesign-JFr2v","md-19":"woozdesign-RxjPT","md-20":"woozdesign-uyD0H","md-21":"woozdesign-RiHOE","md-22":"woozdesign-TIFSD","md-23":"woozdesign-zcCDL","md-24":"woozdesign-QzuQu","lg-1":"woozdesign-L5P_s","lg-2":"woozdesign-TGvY_","lg-3":"woozdesign-z4eTB","lg-4":"woozdesign-FzBdB","lg-5":"woozdesign-yMYMo","lg-6":"woozdesign-a8O2y","lg-7":"woozdesign-tHPH3","lg-8":"woozdesign-a8f5a","lg-9":"woozdesign-EABRn","lg-10":"woozdesign-XPSEP","lg-11":"woozdesign-ZkXCy","lg-12":"woozdesign-bhyFS","lg-13":"woozdesign-GGqqp","lg-14":"woozdesign-QlFEp","lg-15":"woozdesign-lpXjM","lg-16":"woozdesign-_htXp","lg-17":"woozdesign-SIsmR","lg-18":"woozdesign-dnZpi","lg-19":"woozdesign-eTEuN","lg-20":"woozdesign-Lb6wd","lg-21":"woozdesign-DrnYe","lg-22":"woozdesign-Hww35","lg-23":"woozdesign-nc3yU","lg-24":"woozdesign-qvLEl","xl-1":"woozdesign-w1aXQ","xl-2":"woozdesign-BeFNp","xl-3":"woozdesign-vtCUn","xl-4":"woozdesign-jcrqe","xl-5":"woozdesign-NSWyS","xl-6":"woozdesign-f1gzf","xl-7":"woozdesign-t8Q7n","xl-8":"woozdesign-tVfeO","xl-9":"woozdesign-t7rBr","xl-10":"woozdesign-W9nMy","xl-11":"woozdesign-MrWSm","xl-12":"woozdesign-ekcNJ","xl-13":"woozdesign-XVFfe","xl-14":"woozdesign-z5EO3","xl-15":"woozdesign-YoYOg","xl-16":"woozdesign-bc1k6","xl-17":"woozdesign-HSHAq","xl-18":"woozdesign-zlomW","xl-19":"woozdesign-rsB5G","xl-20":"woozdesign-TN4CE","xl-21":"woozdesign-WgCE8","xl-22":"woozdesign-o4HhB","xl-23":"woozdesign-snDe3","xl-24":"woozdesign-vzjyl"};var y=function(){return y=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e},y.apply(this,arguments)},h=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n};const b={Container:function(e){var o,n=e.children,r=h(e,["children"]),s=[f.container,null!==(o=r.className)&&void 0!==o?o:""],a=y({},r.style);return t().createElement("div",y({},r,{className:i(s),style:a}),n)},Row:function(e){var o,n=e.gutter,r=void 0===n?[0,0]:n,s=e.align,a=void 0===s?"start":s,l=e.justify,d=void 0===l?"start":l,c=e.children,g=h(e,["gutter","align","justify","children"]),u=[f.row,null!==(o=g.className)&&void 0!==o?o:""],m=y({alignItems:a,justifyContent:d,"--horizontal-gutter":"".concat(r[0],"px"),"--vertical-gutter":"".concat(r[1],"px")},g.style);return t().createElement("div",y({},g,{className:i(u),style:m}),c)},Col:function(e){var o,n=e.xs,r=e.sm,s=e.md,a=e.lg,l=e.xl,d=e.children,c=h(e,["xs","sm","md","lg","xl","children"]),g=[f.col,null!==(o=c.className)&&void 0!==o?o:"",n?f["xs-".concat(n)]:"",r?f["sm-".concat(r)]:"",s?f["md-".concat(s)]:"",a?f["lg-".concat(a)]:"",l?f["xl-".concat(l)]:""],u=y({},c.style);return t().createElement("div",y({},c,{className:i(g),style:u}),d)}},x={wrapper:"woozdesign-L18ko",large:"woozdesign-HDBlQ",label:"woozdesign-InsU7",small:"woozdesign-rhwpU",group:"woozdesign-WzhtS",block:"woozdesign-BwTWa",input:"woozdesign-EJkZB",hasPrependIcon:"woozdesign-dB8px",iconPrepend:"woozdesign-cYNne",iconAppend:"woozdesign-mSp00",error:"woozdesign-IRcSJ",active:"woozdesign-ddIZt"};var O=function(){return O=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e},O.apply(this,arguments)},E=function(e,o,n){if(n||2===arguments.length)for(var t,i=0,r=o.length;i<r;i++)!t&&i in o||(t||(t=Array.prototype.slice.call(o,0,i)),t[i]=o[i]);return e.concat(t||Array.prototype.slice.call(o))};const N=function(e){var o=e.size,r=void 0===o?"medium":o,s=e.label,a=e.iconPrepend,l=e.iconAppend,d=e.block,c=e.errorMessage,g=e.onChange,u=e.onSubmit,p=e.hasSubmitted,w=void 0!==p&&p,z=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}(e,["size","label","iconPrepend","iconAppend","block","errorMessage","onChange","onSubmit","hasSubmitted"]),v=[x.group,x[r],d?x.block:""],f=[x.input,a?x.hasPrependIcon:""],y=(0,n.useState)(null),h=y[0],b=y[1],N=function(e){e.validity.valid?b(null):b(function(e){return c||(e.validity.valueMissing?"This field is required":e.validity.typeMismatch?"Invalid format":e.validity.patternMismatch?"Not valid input":e.validity.tooShort?"Field should be at least ".concat(e.minLength," characters; you entered ").concat(e.value.length,"."):"Invalid input")}(e))};return t().createElement("div",{className:i([x.wrapper,x[r]])},s&&t().createElement("div",null,t().createElement(m.Paragraph,{type:"secondary",size:"small",className:x.label},z.required&&t().createElement("span",{style:{color:"var(--color-error)",marginRight:"4px"}},"*"),s)),t().createElement("div",{className:i(v)},a&&t().createElement("span",{className:x.iconPrepend},a),t().createElement("input",O({},z,{"data-has-value":w,onChange:function(e){(w||e.target.value)&&N(e.target),g&&g(e)},onKeyPress:function(e){"Enter"===e.key&&u&&(w&&N(e.target),u())},onInvalid:function(e){N(e.target)},className:i(E(E([],f,!0),[h?x.inputError:""],!1))})),l&&t().createElement("span",{className:x.iconAppend},l)),h&&t().createElement("div",{className:x.error},h))},C={},S=function(e){var o=e.children,i=e.onSuccess,r=e.onError,s=(0,n.useState)(!1),a=s[0],l=s[1];return t().createElement("form",{className:C.form,onSubmit:function(e){e.preventDefault(),e.currentTarget.checkValidity()?i(e):r(),l(!0)},noValidate:!0},t().Children.map(o,(function(e){return t().isValidElement(e)?t().cloneElement(e,{hasSubmitted:a}):e})))};var j="dark",P="medium",A="purple",k=function(){return k=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var i in o=arguments[n])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e},k.apply(this,arguments)},T=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)o.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n},I=n.createContext(void 0),M=n.forwardRef((function(e,o){return void 0===n.useContext(I)?n.createElement(L,k({},e,{ref:o})):n.createElement(R,k({},e,{ref:o}))}));M.displayName="ThemeProvider";var L=n.forwardRef((function(e,o){var t=e.appearance,i=void 0===t?j:t,r=e.radius,s=void 0===r?P:r,a=e.accentColor,l=void 0===a?A:a,d=T(e,["appearance","radius","accentColor"]),c=n.useState(i),g=c[0],u=c[1];n.useEffect((function(){return u(i)}),[i]);var m=n.useState(s),p=m[0],w=m[1];n.useEffect((function(){return w(s)}),[s]);var z=n.useState(l),v=z[0],f=z[1];n.useEffect((function(){return f(l)}),[l]);var y=n.memo((function(e){var o=e.appearance;return n.createElement("script",{dangerouslySetInnerHTML:{__html:"!(function(){try{var d=document.documentElement,c=d.classList;c.remove('light','dark');d.style.colorScheme='".concat(o,"';c.add('").concat(o,"');}catch(e){}})();")}})}),(function(){return!0}));return y.displayName="ExplicitRootAppearanceScript",n.useEffect((function(){return B(i)}),[i]),n.createElement(n.Fragment,null,"inherit"!==g&&n.createElement(y,{appearance:g}),n.createElement(R,k({},d,{ref:o,isRoot:!0,appearance:g,radius:p,accentColor:v,onAppearanceChange:u,onAccentColorChange:f,onRadiusChange:w})))}));L.displayName="ThemeRoot";var R=n.forwardRef((function(e,o){var t,r,s,a,l=n.useContext(I),d=e.isRoot,c=e.appearance,g=void 0===c?null!==(t=null==l?void 0:l.appearance)&&void 0!==t?t:j:c,u=e.accentColor,m=void 0===u?null!==(r=null==l?void 0:l.accentColor)&&void 0!==r?r:A:u,p=e.radius,w=void 0===p?null!==(s=null==l?void 0:l.radius)&&void 0!==s?s:P:p,z=e.onAppearanceChange,v=void 0===z?function(){}:z,f=e.onRadiusChange,y=void 0===f?function(){}:f,h=e.onAccentColorChange,b=void 0===h?function(){}:h,x=T(e,["isRoot","appearance","accentColor","radius","onAppearanceChange","onRadiusChange","onAccentColorChange"]),O=i(["woozdesign","woozdesign-".concat(g),"".concat(g),"".concat(g,"-theme"),null!==(a=x.className)&&void 0!==a?a:""]);return n.createElement(I.Provider,{value:n.useMemo((function(){return{appearance:g,radius:w,accentColor:m,onAppearanceChange:v,onAccentColorChange:b,onRadiusChange:y}}),[g,w,m,v,b,y])},n.createElement("div",k({"data-is-root-theme":d?"true":"false","data-radius":w,"data-accent-color":m,ref:o},x,{className:O})))}));R.displayName="ThemeImpl";var B=function(e){var o=document.documentElement;(o.classList.contains("light-theme")||o.classList.contains("dark-theme"))&&(o.classList.remove("light-theme","dark-theme"),o.style.colorScheme=e,o.classList.add("".concat(e,"-theme"))),(o.classList.contains("light")||o.classList.contains("dark"))&&(o.classList.remove("light","dark"),o.style.colorScheme=e,o.classList.add(e))};const D={ThemeProvider:M,useThemeContext:function(){var e=n.useContext(I);if(void 0===e)throw new Error("`useThemeContext` must be used within a `ThemeProvider`");return e},updateThemeAppearanceClass:B};module.exports=o})();