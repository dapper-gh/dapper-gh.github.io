(()=>{"use strict";var t,e={979:(t,e,n)=>{var s=n(234);function o(t){let e,n,o,r,c;var i=t[0].c;function u(t){return{props:{route:t[0].a}}}return i&&(e=new i(u(t))),{c(){e&&(0,s.YCL)(e.$$.fragment),n=(0,s.cSb)()},m(i,u){e&&(0,s.yef)(e,i,u),(0,s.$Tr)(i,n,u),o=!0,r||(c=(0,s.oLt)(window,"popstate",t[1]),r=!0)},p(t,[o]){const r={};if(1&o&&(r.route=t[0].a),i!==(i=t[0].c)){if(e){(0,s.dvw)();const t=e;(0,s.etI)(t.$$.fragment,1,0,(()=>{(0,s.vpE)(t,1)})),(0,s.gbL)()}i?(e=new i(u(t)),(0,s.YCL)(e.$$.fragment),(0,s.Ui)(e.$$.fragment,1),(0,s.yef)(e,n.parentNode,n)):e=null}else i&&e.$set(r)},i(t){o||(e&&(0,s.Ui)(e.$$.fragment,t),o=!0)},o(t){e&&(0,s.etI)(e.$$.fragment,t),o=!1},d(t){t&&(0,s.ogt)(n),e&&(0,s.vpE)(e,t),r=!1,c()}}}let r={};function c(t,e,n){let s,{routes:o}=e,c=location;function i(){let t=(c.hash.slice(1)||c.pathname).split("/"),e=-1;t:for(;++e in o;){let c=o[e].route.split("/"),i=[];for(var r=0;r in c;){let e=c[r],n=t[r++];if("*"==e&&n)i.push(n);else if(e!=n)continue t}if(r==t.length)return n(0,s={c:o[e].component,a:i})}}return r.route=function(t){history.pushState?history.pushState(0,"",t):c.hash=t,i()},i(),t.$$set=t=>{"routes"in t&&n(2,o=t.routes)},[s,i,o]}class i extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,c,o,s.N8,{routes:2})}}const u=i;function l(t){let e,n,o,r;const c=t[3].default,i=(0,s.nuO)(c,t,t[2],null);let u=[t[1]],l={};for(let t=0;t<u.length;t+=1)l=(0,s.f0i)(l,u[t]);return{c(){e=(0,s.bGB)("a"),i&&i.c(),(0,s.UF7)(e,l)},m(c,u){(0,s.$Tr)(c,e,u),i&&i.m(e,null),n=!0,o||(r=(0,s.oLt)(e,"click",(0,s.AT7)(t[4])),o=!0)},p(t,[o]){i&&i.p&&(!n||4&o)&&(0,s.kmG)(i,c,t,t[2],n?(0,s.u2N)(c,t[2],o,null):(0,s.VOJ)(t[2]),null),(0,s.UF7)(e,l=(0,s.LoY)(u,[2&o&&t[1]]))},i(t){n||((0,s.Ui)(i,t),n=!0)},o(t){(0,s.etI)(i,t),n=!1},d(t){t&&(0,s.ogt)(e),i&&i.d(t),o=!1,r()}}}function a(t,e,n){let{$$slots:o={},$$scope:c}=e,{href:i}=e;return t.$$set=t=>{n(1,e=(0,s.f0i)((0,s.f0i)({},e),(0,s.Jvk)(t))),"href"in t&&n(0,i=t.href),"$$scope"in t&&n(2,c=t.$$scope)},e=(0,s.Jvk)(e),[i,e,c,o,t=>r.route(i)]}class f extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,a,l,s.N8,{href:0})}}const p=f;function m(t){let e;return{c(){e=(0,s.fLW)("[airline fares]")},m(t,n){(0,s.$Tr)(t,e,n)},d(t){t&&(0,s.ogt)(e)}}}function $(t){let e,n,o,r,c,i;return c=new p({props:{href:"/fares",class:"bold",$$slots:{default:[m]},$$scope:{ctx:t}}}),{c(){e=(0,s.bGB)("div"),n=(0,s.bGB)("p"),n.innerHTML='Hi, I&#39;m <span class="bold">dapper</span>.',o=(0,s.DhX)(),r=(0,s.bGB)("p"),(0,s.YCL)(c.$$.fragment)},m(t,u){(0,s.$Tr)(t,e,u),(0,s.R3I)(e,n),(0,s.R3I)(e,o),(0,s.R3I)(e,r),(0,s.yef)(c,r,null),i=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){i||((0,s.Ui)(c.$$.fragment,t),i=!0)},o(t){(0,s.etI)(c.$$.fragment,t),i=!1},d(t){t&&(0,s.ogt)(e),(0,s.vpE)(c)}}}class d extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,null,$,s.N8,{})}}const g=d;function h(t){let e,n,o,r,c,i,u,l;return{c(){e=(0,s.bGB)("p"),n=(0,s.fLW)("Signature: "),o=(0,s.fLW)(t[1]),r=(0,s.DhX)(),c=(0,s.bGB)("p"),i=(0,s.bGB)("input"),(0,s.czc)(e,"word-break","break-all"),(0,s.Ljt)(i,"type","button"),i.value=t[2]},m(a,f){(0,s.$Tr)(a,e,f),(0,s.R3I)(e,n),(0,s.R3I)(e,o),(0,s.$Tr)(a,r,f),(0,s.$Tr)(a,c,f),(0,s.R3I)(c,i),u||(l=(0,s.oLt)(i,"click",t[3]),u=!0)},p(t,e){2&e&&(0,s.rTO)(o,t[1]),4&e&&(i.value=t[2])},d(t){t&&(0,s.ogt)(e),t&&(0,s.ogt)(r),t&&(0,s.ogt)(c),u=!1,l()}}}function y(t){let e,n;return{c(){e=(0,s.bGB)("p"),n=(0,s.fLW)(t[0])},m(t,o){(0,s.$Tr)(t,e,o),(0,s.R3I)(e,n)},p(t,e){1&e&&(0,s.rTO)(n,t[0])},d(t){t&&(0,s.ogt)(e)}}}function v(t){let e;function n(t,e){return null===t[1]?y:h}let o=n(t),r=o(t);return{c(){r.c(),e=(0,s.cSb)()},m(t,n){r.m(t,n),(0,s.$Tr)(t,e,n)},p(t,[s]){o===(o=n(t))&&r?r.p(t,s):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},i:s.ZTd,o:s.ZTd,d(t){r.d(t),t&&(0,s.ogt)(e)}}}function b(t,e,n){const s=decodeURIComponent(location.search.slice("?m=".length));let o="0x";for(let t,e=0;t=s.codePointAt(e);e++)o+=("00"+t.toString(16)).slice(-2);let r="Please sign the message.",c=null;window.ethereum?async function(){const t=(await ethereum.request({method:"eth_requestAccounts"}))[0];n(1,c=await ethereum.request({method:"personal_sign",params:[t,o]}))}():r="Please install MetaMask.";let i="Copy";return[r,c,i,async function(){const t=await navigator.permissions.query({name:"clipboard-write"});"granted"!==t.state&&"prompt"!==t.state||(await navigator.clipboard.writeText(c),n(2,i="Copied!"),setTimeout((()=>n(2,i="Copy")),1500))}]}class L extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,b,v,s.N8,{})}}const I=L;function B(t){let e;return{c(){e=(0,s.fLW)("[..]")},m(t,n){(0,s.$Tr)(t,e,n)},d(t){t&&(0,s.ogt)(e)}}}function w(t){let e;return{c(){e=(0,s.fLW)("[united]")},m(t,n){(0,s.$Tr)(t,e,n)},d(t){t&&(0,s.ogt)(e)}}}function x(t){let e;return{c(){e=(0,s.fLW)("[american]")},m(t,n){(0,s.$Tr)(t,e,n)},d(t){t&&(0,s.ogt)(e)}}}function E(t){let e,n,o,r,c,i,u,l,a,f;return o=new p({props:{href:"/",class:"bold",$$slots:{default:[B]},$$scope:{ctx:t}}}),i=new p({props:{href:"/fares/united",class:"bold",$$slots:{default:[w]},$$scope:{ctx:t}}}),a=new p({props:{href:"/fares/american",class:"bold",$$slots:{default:[x]},$$scope:{ctx:t}}}),{c(){e=(0,s.bGB)("div"),n=(0,s.bGB)("p"),(0,s.YCL)(o.$$.fragment),r=(0,s.DhX)(),c=(0,s.bGB)("p"),(0,s.YCL)(i.$$.fragment),u=(0,s.DhX)(),l=(0,s.bGB)("p"),(0,s.YCL)(a.$$.fragment)},m(t,p){(0,s.$Tr)(t,e,p),(0,s.R3I)(e,n),(0,s.yef)(o,n,null),(0,s.R3I)(e,r),(0,s.R3I)(e,c),(0,s.yef)(i,c,null),(0,s.R3I)(e,u),(0,s.R3I)(e,l),(0,s.yef)(a,l,null),f=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),a.$set(r)},i(t){f||((0,s.Ui)(o.$$.fragment,t),(0,s.Ui)(i.$$.fragment,t),(0,s.Ui)(a.$$.fragment,t),f=!0)},o(t){(0,s.etI)(o.$$.fragment,t),(0,s.etI)(i.$$.fragment,t),(0,s.etI)(a.$$.fragment,t),f=!1},d(t){t&&(0,s.ogt)(e),(0,s.vpE)(o),(0,s.vpE)(i),(0,s.vpE)(a)}}}class C extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,null,E,s.N8,{})}}const T=C;function D(t,e,n){const s=t.slice();return s[6]=e[n],s}function R(t){let e;return{c(){e=(0,s.fLW)("[..]")},m(t,n){(0,s.$Tr)(t,e,n)},d(t){t&&(0,s.ogt)(e)}}}function G(t){let e,n,o,r,c,i=t[6].name+"",u=t[6].value+"";return{c(){e=(0,s.bGB)("p"),n=(0,s.bGB)("span"),o=(0,s.fLW)(i),r=(0,s.fLW)(": "),c=(0,s.fLW)(u),(0,s.Ljt)(n,"class","bold")},m(t,i){(0,s.$Tr)(t,e,i),(0,s.R3I)(e,n),(0,s.R3I)(n,o),(0,s.R3I)(e,r),(0,s.R3I)(e,c)},p(t,e){2&e&&i!==(i=t[6].name+"")&&(0,s.rTO)(o,i),2&e&&u!==(u=t[6].value+"")&&(0,s.rTO)(c,u)},d(t){t&&(0,s.ogt)(e)}}}function S(t){let e,n,o,r,c,i,u,l,a,f;o=new p({props:{href:"/fares",class:"bold",$$slots:{default:[R]},$$scope:{ctx:t}}});let m=t[1],$=[];for(let e=0;e<m.length;e+=1)$[e]=G(D(t,m,e));return{c(){e=(0,s.bGB)("div"),n=(0,s.bGB)("p"),(0,s.YCL)(o.$$.fragment),r=(0,s.DhX)(),c=(0,s.bGB)("input"),i=(0,s.DhX)(),u=(0,s.bGB)("div");for(let t=0;t<$.length;t+=1)$[t].c();(0,s.Ljt)(n,"class","margined-down"),(0,s.Ljt)(c,"type","text"),(0,s.Ljt)(c,"class","small"),(0,s.Ljt)(u,"class","margined-up")},m(p,m){(0,s.$Tr)(p,e,m),(0,s.R3I)(e,n),(0,s.yef)(o,n,null),(0,s.R3I)(e,r),(0,s.R3I)(e,c),(0,s.BmG)(c,t[0]),(0,s.R3I)(e,i),(0,s.R3I)(e,u);for(let t=0;t<$.length;t+=1)$[t].m(u,null);l=!0,a||(f=(0,s.oLt)(c,"input",t[3]),a=!0)},p(t,[e]){const n={};if(512&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n),1&e&&c.value!==t[0]&&(0,s.BmG)(c,t[0]),2&e){let n;for(m=t[1],n=0;n<m.length;n+=1){const s=D(t,m,n);$[n]?$[n].p(s,e):($[n]=G(s),$[n].c(),$[n].m(u,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=m.length}},i(t){l||((0,s.Ui)(o.$$.fragment,t),l=!0)},o(t){(0,s.etI)(o.$$.fragment,t),l=!1},d(t){t&&(0,s.ogt)(e),(0,s.vpE)(o),(0,s.RMB)($,t),a=!1,f()}}}function F(t,e){const n=new Map;n.properties=new Map(t.map((t=>[t[0],{display:t[1],formatter:t[2]||(t=>t.toString())}])));for(const[t,s]of e)for(const e of t)n.set(e,s);return n}function O(t,e,n){let{fares:s}=e,o=[];const r={list:[],push(t,e){this.list.push({name:t,value:e})},commit(){n(1,o=this.list),this.list=[]}};let c="";return t.$$set=t=>{"fares"in t&&n(2,s=t.fares)},t.$$.update=()=>{1&t.$$.dirty&&function(){c!==c.toUpperCase()&&n(0,c=c.toUpperCase()),c.length>2&&n(0,c=c.slice(0,2)),c.match(/[^A-Z\d]/g)&&n(0,c=c.replace(/[^A-Z\d]/g,""));const t=c.toUpperCase();if(s.has(t)){const e=s.get(t);r.push("Status","Exists"),r.push("Fare Class",t);for(const t in e){const n=s.properties.get(t).formatter(e[t]);r.push(s.properties.get(t).display,n)}}else r.push("Status","Does Not Exist");r.commit()}()},[c,o,s,function(){c=this.value,n(0,c)}]}class U extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,O,S,s.N8,{fares:2})}}const N=U;function P(t){let e,n;return e=new N({props:{fares:t[0]}}),{c(){(0,s.YCL)(e.$$.fragment)},m(t,o){(0,s.yef)(e,t,o),n=!0},p:s.ZTd,i(t){n||((0,s.Ui)(e.$$.fragment,t),n=!0)},o(t){(0,s.etI)(e.$$.fragment,t),n=!1},d(t){(0,s.vpE)(e,t)}}}function k(t){return[F([["c","Cost"],["s","Service Level"],["u","Upgradeable",t=>t?"Yes":"No"]],[[["J"],{c:"Full",s:"First/Business",u:!1}],[["C","D"],{c:"High",s:"First/Business",u:!1}],[["Z"],{c:"Discounted",s:"First/Business",u:!1}],[["P"],{c:"Deeply Discounted",s:"First/Business",u:!1}],[["O"],{c:"High",s:"Premium Plus",u:!1}],[["A"],{c:"Discounted",s:"Premium Plus",u:!1}],[["R"],{c:"Deeply Discounted",s:"Premium Plus",u:!1}],[["Y"],{c:"Highest Full",s:"Economy",u:!0}],[["B"],{c:"Full",s:"Economy",u:!0}],[["M"],{c:"High",s:"Economy",u:!0}],[["E","U","H"],{c:"High",s:"Economy",u:!0}],[["Q","V","W"],{c:"Discounted",s:"Economy",u:!0}],[["S","T","L","K"],{c:"Deeply Discounted",s:"Economy",u:!1}],[["G"],{c:"Lowest Discounted",s:"Economy",u:!1}],[["N"],{c:"Full",s:"Basic Economy",u:!1}]])]}class W extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,k,P,s.N8,{})}}const Y=W;function H(t){let e,n;return e=new N({props:{fares:t[0]}}),{c(){(0,s.YCL)(e.$$.fragment)},m(t,o){(0,s.yef)(e,t,o),n=!0},p:s.ZTd,i(t){n||((0,s.Ui)(e.$$.fragment,t),n=!0)},o(t){(0,s.etI)(e.$$.fragment,t),n=!1},d(t){(0,s.vpE)(e,t)}}}function _(t){return[F([["c","Cost"],["s","Service Level"],["m","Elite Qualifying Mile Multiplier",t=>`${t.toFixed(1)}x`],["g","Elite Qualifying Segment Multiplier",t=>`${t.toFixed(1)}x`]],[[["F"],{c:"Full",s:"First",m:3,g:1}],[["A"],{c:"Discounted",s:"First",m:2,g:1}],[["J"],{c:"Full",s:"Business",m:3,g:1}],[["R"],{c:"High",s:"Business",m:2,g:1}],[["I"],{c:"Discounted",s:"Business",m:2,g:1}],[["D"],{c:"Deeply Discounted",s:"Business",m:2,g:1}],[["W"],{c:"Full",s:"Premium Economy",m:1.5,g:1}],[["P"],{c:"Discounted",s:"Premium Economy",m:1.5,g:1}],[["Y"],{c:"Highest Full",s:"Economy",m:1,g:1}],[["H","K","M","L"],{c:"High",s:"Economy",m:1,g:1}],[["V","G","S"],{c:"Discounted",s:"Economy",m:1,g:1}],[["N","Q","O"],{c:"Deeply Discounted",s:"Economy",m:1,g:1}],[["B"],{c:"Full",s:"Basic Economy",m:.5,g:.5}]])]}class M extends s.f_C{constructor(t){super(),(0,s.S1n)(this,t,_,H,s.N8,{})}}const j=M;window.onload=function(){new u({target:document.getElementById("svelte-root"),props:{routes:[{route:"/",component:g},{route:"/fares",component:T},{route:"/fares/united",component:Y},{route:"/fares/american",component:j},{route:"/sign",component:I}]}})}}},n={};function s(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,s),r.exports}s.m=e,t=[],s.O=(e,n,o,r)=>{if(!n){var c=1/0;for(a=0;a<t.length;a++){for(var[n,o,r]=t[a],i=!0,u=0;u<n.length;u++)(!1&r||c>=r)&&Object.keys(s.O).every((t=>s.O[t](n[u])))?n.splice(u--,1):(i=!1,r<c&&(c=r));if(i){t.splice(a--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[n,o,r]},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={592:0};s.O.j=e=>0===t[e];var e=(e,n)=>{var o,r,[c,i,u]=n,l=0;if(c.some((e=>0!==t[e]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(u)var a=u(s)}for(e&&e(n);l<c.length;l++)r=c[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(a)},n=self.webpackChunkdapper_codes=self.webpackChunkdapper_codes||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=s.O(void 0,[234],(()=>s(979)));o=s.O(o)})();