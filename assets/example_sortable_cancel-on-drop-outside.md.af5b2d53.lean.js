import{_ as h,d as g,k as v,u as y,f as C,e as i,o as s,c as p,t as I,n as R,w as b,F as k,p as S,q as T,g as A,a as n,b as u}from"./app.847c0257.js";import{t as E}from"./chunks/index.dd4d4a19.js";const f={CARD:"card"};const B=g({props:{id:null,text:null,moveCard:null,findCard:null},setup(c){const t=c,o=v(()=>t.findCard(t.id).index),[l,_]=y(()=>({type:f.CARD,item:()=>({id:t.id,originalIndex:o.value}),collect:e=>({isDragging:e.isDragging()}),end:(e,a)=>{const{id:m,originalIndex:D}=e;a.didDrop()||t.moveCard(m,D)}})),[,x]=C(()=>({accept:f.CARD,hover({id:e}){if(e!==t.id){const{index:a}=t.findCard(t.id);t.moveCard(e,a)}}})),{isDragging:d}=E(l),r=v(()=>i(d)?0:1);return(e,a)=>(s(),p("div",{ref:m=>i(_)(i(x)(m)),class:"card",style:R({opacity:i(r)})},I(c.text),5))}});var M=h(B,[["__scopeId","data-v-57409592"]]);const $=g({setup(c){const o=b([{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it"},{id:6,text:"???"},{id:7,text:"PROFIT"}]),l=d=>{const r=o.value.filter(e=>`${e.id}`===d)[0];return{card:r,index:o.value.indexOf(r)}},_=(d,r)=>{const{card:e,index:a}=l(d);o.value.splice(a,1),o.value.splice(r,0,e)},[,x]=C(()=>({accept:f.CARD}));return(d,r)=>(s(),p("div",{ref:i(x),style:{width:"400px"}},[(s(!0),p(k,null,S(o.value,e=>(s(),T(M,{id:`${e.id}`,key:e.id,text:e.text,"move-card":_,"find-card":l},null,8,["id","text"]))),128))],512))}}),w=n("p",null,"\u56E0\u4E3A\u60A8\u7F16\u5199\u903B\u8F91\u800C\u4E0D\u662F\u4F7F\u7528\u73B0\u6210\u7684\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u60A8\u53EF\u4EE5\u5C06\u884C\u4E3A\u8C03\u6574\u4E3A\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u7684\u884C\u4E3A\u3002",-1),F=n("p",null,[u("\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u662F\u5728\u653E\u7F6E\u76EE\u6807\u7684"),n("code",null,"drop()"),u("\u5904\u7406\u7A0B\u5E8F\u4E2D\u79FB\u52A8\u5361\u7247\uFF0C\u800C\u662F\u5728\u62D6\u52A8\u6E90\u7684"),n("code",null,"end()"),u("\u5904\u7406\u7A0B\u5E8F\u4E2D\u8FDB\u884C\u3002\u8FD9\u8BA9\u6211\u4EEC\u53EF\u4EE5\u68C0\u67E5"),n("code",null,"monitor.didDrop()"),u("\u5E76\u6062\u590D\u5361\u7247\u662F\u5426\u6389\u843D\u5230\u5176\u5BB9\u5668\u4E4B\u5916\u7684\u62D6\u52A8\u64CD\u4F5C\u3002")],-1),N=n("hr",null,null,-1),O=n("br",null,null,-1),V=n("br",null,null,-1),P=n("br",null,null,-1),J='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"example/sortable/cancel-on-drop-outside.md"}',W={},L=Object.assign(W,{setup(c){return(t,o)=>(s(),p("div",null,[w,F,N,O,V,P,A(i($))]))}});export{J as __pageData,L as default};