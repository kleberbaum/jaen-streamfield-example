"use strict";(self.webpackChunk_snek_at_jaen_template=self.webpackChunk_snek_at_jaen_template||[]).push([[754],{8754:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});n(38559);var r,o=n(17262),i=n(55673),a=n(82183),l=n(67294),u=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"==typeof e&&d.test(e)},f=[],p=0;p<256;++p)f.push((p+256).toString(16).substr(1));var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};var g=function(e,t,n){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return m(r)},v=n(47505),y=n(24309),h=n(90522),b=n(75555);function I(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=n(6483),S=n(23431),w=(0,b.X)((function(){var e=(0,y.TL)(),t=(0,v.kp)(),n=(0,v.KJ)(),r=(0,o.q)(),u=(0,y.CG)((function(e){return e.site.routing.dynamicPaths})),s=l.useMemo((function(){return t.templates.map((function(e){return e.TemplateName}))}),[t.templates]),d=l.useState(null),c=d[0],f=d[1],p=l.useState(null),m=p[0],b=p[1];l.useEffect((function(){if(m){var t=function(e,t){var n=t.nodes,r={},o=[],i=function(e,t){return"/"+function e(n,r){var o;void 0===r&&(r="");var i=t[n],a=null===(o=i.parent)||void 0===o?void 0:o.id,l=a&&t[a],u=i.slug+"/"+r;return a&&l?e(a,u):u}(e)}(e,n);return alert("baseId: "+e+" basePath: "+i),function e(t,a){void 0===a&&(a=i),alert("resolve "+t+" path: "+a),r[a]=t,o.push(t);for(var l,u=I(n[t].children);!(l=u()).done;){var s=l.value,d=""+a+n[s.id].slug;e(s.id,d)}}(e),{dynamicPaths:r,affectedIds:o}}(m,n);alert(JSON.stringify(t)),e(h.bR({dynamicPaths:t})),b(null)}}),[n]);var P=function(e){b(e)},w=function(t,r){var o=n.nodes[t].pageMetadata;e(h.T$({pageId:t,slug:r.slug,meta:{title:r.title||(null==o?void 0:o.title),description:r.description||(null==o?void 0:o.description),image:r.image||(null==o?void 0:o.image),isBlogPost:r.isBlogPost||(null==o?void 0:o.isBlogPost),datePublished:r.lastPublished||(null==o?void 0:o.datePublished)}})),P(t),j(t)},j=function(e){var t,r=n.nodes;e&&((t=Object.keys(u).find((function(t){return u[t]===e})))||(t=r[e].path)),("undefined"!=typeof window&&window.location.pathname)!==t&&(0,a.c4)(t||"/")},k=l.useMemo((function(){return e=n.nodes,Object.fromEntries(Object.entries(e).map((function(e){var t,n=e[0],r=e[1],o=r.title,i=r.slug,a=r.parent,l=r.children,u=r.template,s=r.pageMetadata;return[n,{data:{slug:i||(null==r||null===(t=r.path)||void 0===t?void 0:t.split("/")[1])||"root",title:(null==s?void 0:s.title)||o,description:(null==s?void 0:s.description)||"",image:(null==s?void 0:s.image)||"",isBlogPost:(null==s?void 0:s.isBlogPost)||!1,lastPublished:null==s?void 0:s.datePublished,locked:!u},children:l.map((function(e){return e.id})),parent:a?a.id:null}]})));var e}),[n.nodes]);return(0,S.jsx)(l.Fragment,null,(0,S.jsx)(i.PageExplorer,{items:k,rootItemIds:n.rootNodeIds,templates:s,onItemCreate:function(t,n,r,o){var i=g();e(h.Ws({pageId:i,page:{slug:r,template:o,parent:t?{id:t}:null,children:[],fields:{},pageMetadata:{title:n,description:"",image:"",canonical:"",isBlogPost:!1}}})),P(i)},onItemDelete:function(t){e(h.CT(t)),P(t),j(null)},onItemUpdate:w,onItemMove:function(t,n){e(h.kj({pageId:t,parentPageId:n})),P(t),j(t)},onItemSelect:j,onItemImageClick:function(e){f(e),r.onOpen()}}),r.isOpen&&(0,S.jsx)(C.Z,{mode:"selector",onSelectorClose:r.onClose,onSelectorSelect:function(e){c&&w(c,{image:e.src}),f(null),r.onClose()}}))}))}}]);
//# sourceMappingURL=754-82ffe5cb91f94c02d70b.js.map