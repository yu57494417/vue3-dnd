var O=Object.defineProperty,$=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var x=(t,e,o)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,p=(t,e)=>{for(var o in e||(e={}))I.call(e,o)&&x(t,o,e[o]);if(y)for(var o of y(e))S.call(e,o)&&x(t,o,e[o]);return t},g=(t,e)=>$(t,w(e));import{_ as X}from"./index.ea8fdaf2.js";import{u as z}from"./useDrop.0a8ad276.js";import{t as D}from"./main.0fbd7173.js";import{d as f,C as B,q as u,u as r,h,a as v,t as k,s as R,b,e as i}from"./vendor.5fb5b3db.js";import{u as A}from"./useDrag.9e816804.js";import"./connectDragRef.a5dc16fa.js";const C={BOX:"box"},H=f({setup(t){const e={height:"12rem",width:"12rem",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},[o,d]=z(()=>({accept:C.BOX,drop:()=>({name:"Dustbin"}),collect:n=>({isOver:n.isOver(),canDrop:n.canDrop()})})),{canDrop:s,isOver:l}=B(D(o)),c=u(()=>r(s)&&r(l)),a=u(()=>r(c)?"darkgreen":r(s)?"darkkhaki":"#222");return(n,m)=>(h(),v("div",{ref:r(d),role:"Dustbin",style:R(g(p({},e),{backgroundColor:r(a)}))},k(r(c)?"Release to drop":"Drag a box here"),5))}});const N=["data-testid"],V=f({props:{name:null},setup(t){const e=t,o={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},[d,s]=A(()=>({type:C.BOX,item:()=>({name:e.name}),end:(a,n)=>{const m=n.getDropResult();a&&m&&alert(`You dropped ${a.name} into ${m.name}!`)},collect:a=>({isDragging:a.isDragging(),handlerId:a.getHandlerId()})})),{isDragging:l}=B(D(d)),c=u(()=>r(l)?.4:1);return(a,n)=>(h(),v("div",{ref:r(s),role:"Box",style:R(g(p({},o),{opacity:r(c)})),"data-testid":`box-${t.name}`},k(t.name),13,N))}});var _=X(V,[["__scopeId","data-v-34bec488"]]);const q={style:{overflow:"hidden",clear:"both"}},E={style:{overflow:"hidden",clear:"both"}},G=f({setup(t){return(e,o)=>(h(),v("div",null,[b("div",q,[i(H)]),b("div",E,[i(_,{name:"Glass"}),i(_,{name:"Banana"}),i(_,{name:"Paper"})])]))}});var L=G;export{L as default};