import{p as P,i as A,d as f,o as C,c as V,w as x,a as c,b as _,F as g,r as h,u as p,e as m,f as v,H as R,g as E,h as u,t as y,j as S,k,l as w,m as N}from"./vendor.5fb5b3db.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};M();const T=Symbol("DndContextType");function j(t){P(T,t)}function Z(){return A(T)}let D=0;const d=Symbol.for("__VUE_DND_CONTEXT_INSTANCE__");function B(t){return"manager"in t&&t.manager}function F(t){if(B(t))return[t.manager,!1];const n=H(t.backend,t.context,t.options,t.debugMode),a=!t.context;return[n,a]}function H(t,n=O(),a,r){const e=n;return e[d]||(e[d]=V(t,n,a,r)),e[d]}function O(){return typeof globalThis!="undefined"?globalThis:typeof global!="undefined"?global:window}var U=f({name:"DndProvider",props:{manager:{type:Object},backend:{type:Function},context:{type:Object},options:{type:Object},debugMode:{type:Boolean}},setup(t,{slots:n}){const[a,r]=F(t);return r&&++D,C(()=>{if(r){const e=O();--D===0&&(e[d]=null)}}),j(a),()=>{var e,o;return(o=(e=n.default)==null?void 0:e.call(n))!=null?o:null}}}),ee=f({props:{connect:{type:Function,required:!0},src:{type:String,required:!0}},setup(t){return x(()=>{if(typeof Image=="undefined")return;let n=!1;const a=new Image;return a.src=t.src,a.onload=()=>{t.connect(a),n=!0},()=>{n&&t.connect(null)}}),()=>null}});const q="modulepreload",b={},G="/",s=function(n,a){return!a||a.length===0?n():Promise.all(a.map(r=>{if(r=`${G}${r}`,r in b)return;b[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":q,e||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),e)return new Promise((l,L)=>{i.addEventListener("load",l),i.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},I=[{path:"/example",name:"Example",component:()=>s(()=>import("./Example.f40478d8.js"),["assets/Example.f40478d8.js","assets/Example.b0748192.css","assets/useDrag.9e816804.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/useDrop.0a8ad276.js"])},{path:"/dustbin/single-target",name:"Single Target",component:()=>s(()=>import("./index.00ecb1ce.js"),["assets/index.00ecb1ce.js","assets/index.747d82fb.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrag.9e816804.js"])},{path:"/dustbin/iframe",name:"Within an Iframe",component:()=>s(()=>import("./index.c428bc08.js"),["assets/index.c428bc08.js","assets/vendor.5fb5b3db.js","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/main.0fbd7173.js","assets/useDrag.9e816804.js"])},{path:"/dustbin/copy-or-move",name:"Copy Or Move",component:()=>s(()=>import("./index.e7ddf693.js"),["assets/index.e7ddf693.js","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrag.9e816804.js"])},{path:"/dustbin/multiple-targets",name:"Multiple Targets",component:()=>s(()=>import("./index.001d2acd.js"),["assets/index.001d2acd.js","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrag.9e816804.js"])},{path:"/dustbin/stress-test",name:"Dustbin Stress Test",component:()=>s(()=>import("./index.58fdb34b.js"),["assets/index.58fdb34b.js","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrag.9e816804.js"])},{path:"/drag-around/naive",name:"Naive",component:()=>s(()=>import("./index.a6568ef9.js"),["assets/index.a6568ef9.js","assets/index.99c647ff.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/useDrag.9e816804.js","assets/main.0fbd7173.js"])},{path:"/drag-around/custom-drag-layer",name:"Custom Drag Layer",component:()=>s(()=>import("./index.19559784.js"),["assets/index.19559784.js","assets/index.e0f93fe5.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/useDrag.9e816804.js","assets/main.0fbd7173.js"])},{path:"/nesting/drag-sources",name:"Drag Sources",component:()=>s(()=>import("./index.1b148b0e.js"),["assets/index.1b148b0e.js","assets/index.6b01d8d8.css","assets/useDrag.9e816804.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrop.0a8ad276.js"])},{path:"/nesting/drop-targets",name:"Drop Targets",component:()=>s(()=>import("./index.143a2368.js"),["assets/index.143a2368.js","assets/index.e0958c46.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrag.9e816804.js"])},{path:"/sortable/simple",name:"Simple",component:()=>s(()=>import("./index.a3e3be82.js"),["assets/index.a3e3be82.js","assets/index.a224fb8c.css","assets/useDrag.9e816804.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/useDrop.0a8ad276.js","assets/main.0fbd7173.js"])},{path:"/sortable/cancel-on-drop-outside",name:"Cancel On Drop Outside",component:()=>s(()=>import("./index.90639439.js"),["assets/index.90639439.js","assets/index.74c815d4.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/useDrag.9e816804.js","assets/main.0fbd7173.js"])},{path:"/sortable/stress-test",name:"Stress Test",component:()=>s(()=>import("./index.09ae273e.js"),["assets/index.09ae273e.js","assets/index.6b0ec44e.css","assets/useDrag.9e816804.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/useDrop.0a8ad276.js","assets/main.0fbd7173.js"])},{path:"/customize/handles-and-previews",name:"Handles and Previews",component:()=>s(()=>import("./index.fe872cbd.js"),["assets/index.fe872cbd.js","assets/index.61958ca6.css","assets/useDrag.9e816804.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js"])},{path:"/customize/drop-effects",name:"Drop Effects",component:()=>s(()=>import("./index.fced56c3.js"),["assets/index.fced56c3.js","assets/index.bbdfb06d.css","assets/useDrag.9e816804.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js","assets/useDrop.0a8ad276.js"])},{path:"/other/native-files",name:"Native Files",component:()=>s(()=>import("./index.ef6336b9.js"),["assets/index.ef6336b9.js","assets/index.baf5bd5f.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js"])},{path:"/other/native-html",name:"Native HTML",component:()=>s(()=>import("./index.752615a8.js"),["assets/index.752615a8.js","assets/index.3e2e2c34.css","assets/useDrop.0a8ad276.js","assets/connectDragRef.a5dc16fa.js","assets/vendor.5fb5b3db.js","assets/main.0fbd7173.js"])}],W=I.reduce((t,n)=>{const r=n.path.split("/").filter(Boolean)[0].replace(/(^\w)|(-\w)/g,(o,i,l)=>i?i.toUpperCase():l?" "+l.slice(1).toUpperCase():"");let e=t[t.length-1];return(!e||e.name!==r)&&t.push(e={name:r,children:[]}),e.children.push(n),t},[]);var $=(t,n)=>{const a=t.__vccOpts||t;for(const[r,e]of n)a[r]=e;return a};const z={id:"app"},K={id:"sidebar"},X=f({setup(t){return(n,a)=>{const r=E("router-link"),e=E("router-view");return u(),c("div",z,[_("div",K,[(u(!0),c(g,null,h(p(W),o=>(u(),c("div",{key:o.name},[_("div",null,y(o.name),1),_("ul",null,[(u(!0),c(g,null,h(o.children,i=>(u(),c("li",{key:i.path},[m(r,{to:i.path},{default:v(()=>[S(y(i.name),1)]),_:2},1032,["to"])]))),128))])]))),128))]),_("div",null,[m(p(U),{backend:p(R)},{default:v(()=>[m(e)]),_:1},8,["backend"])])])}}});var Y=$(X,[["__scopeId","data-v-2a343813"]]),J=k({history:w(),routes:I});N(Y).use(J).mount("#app");export{U as D,$ as _,ee as a,Z as u};
