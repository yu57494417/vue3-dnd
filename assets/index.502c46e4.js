import{_ as b}from"./index.71a9837b.js";import{u as k}from"./useDrag.915eb989.js";import{a as C}from"./main.0fbd7173.js";import{d as f,n as B,q as i,u as e,h as d,a as _,b as p,M as O,s as g,P as x,Q as E,t as S,K as w,J as $,O as I,e as s,f as D}from"./vendor.5fb5b3db.js";import{u as T}from"./useDrop.4abc680f.js";import"./connectDragRef.5341d72d.js";const t={YELLOW:"yellow",BLUE:"blue"};const U=o=>(x("data-v-2ecfddc6"),o=o(),E(),o),W=["data-color"],Y=["checked"],V=U(()=>p("small",null,"Forbid drag",-1)),N=f({props:{color:null},setup(o){const a=o,l=B(!1),[c,u]=k(()=>({type:a.color,canDrag:!l.value,collect:r=>({isDragging:r.isDragging()})})),{isDragging:h}=C(c),m=()=>{l.value=!l.value},v=i(()=>{switch(a.color){case t.YELLOW:return"lightgoldenrodyellow";case t.BLUE:return"lightblue";default:return"lightgoldenrodyellow"}}),y=i(()=>({backgroundColor:e(v),opacity:e(h)?.4:1,cursor:e(l)?"default":"move"}));return(r,L)=>(d(),_("div",{ref:e(u),class:"source-box",style:g(e(y)),role:"SourceBox","data-color":o.color},[p("input",{type:"checkbox",checked:l.value,onChange:m},null,40,Y),V,O(r.$slots,"default",{},void 0,!0)],12,W))}});var n=b(N,[["__scopeId","data-v-2ecfddc6"]]);const F=o=>(x("data-v-051c997a"),o=o(),E(),o),P=["data-color"],q=F(()=>p("p",null,"Drop here.",-1)),z={key:0},J=f({props:{onDrop:null,lastDroppedColor:null},setup(o){const a=o,[l,c]=T(()=>({accept:[t.YELLOW,t.BLUE],drop(r,L){a.onDrop(L.getItemType())},collect:r=>({isOver:r.isOver(),canDrop:r.canDrop(),draggingColor:r.getItemType()})})),{isOver:u,draggingColor:h,canDrop:m}=C(l),v=i(()=>e(u)?1:.7),y=i(()=>{let r="#fff";switch(e(h)){case t.BLUE:r="lightblue";break;case t.YELLOW:r="lightgoldenrodyellow";break}return r});return(r,L)=>(d(),_("div",{ref:e(c),"data-color":o.lastDroppedColor||"none",style:g({backgroundColor:e(y),opacity:e(v)}),class:"target-box",role:"TargetBox"},[q,!e(m)&&o.lastDroppedColor?(d(),_("p",z," Last dropped: "+S(o.lastDroppedColor),1)):w("",!0)],12,P))}});var K=b(J,[["__scopeId","data-v-051c997a"]]);const M=f({setup(o){const a=B(null),l=c=>a.value=c;return(c,u)=>(d(),$(K,I(c.$attrs,{"last-dropped-color":a.value,"on-drop":l}),null,16,["last-dropped-color"]))}}),Q={style:{float:"left"}},R=f({setup(o){return(a,l)=>(d(),_("div",{style:g({overflow:"hidden",clear:"both",margin:"-.5rem"})},[p("div",Q,[s(n,{color:e(t).BLUE},{default:D(()=>[s(n,{color:e(t).YELLOW},{default:D(()=>[s(n,{color:e(t).YELLOW},null,8,["color"]),s(n,{color:e(t).BLUE},null,8,["color"])]),_:1},8,["color"]),s(n,{color:e(t).BLUE},{default:D(()=>[s(n,{color:e(t).YELLOW},null,8,["color"])]),_:1},8,["color"])]),_:1},8,["color"])]),p("div",{style:g({float:"left",marginLeft:"5rem",marginTop:".5rem"})},[s(M)],4)],4))}});var oo=R;export{oo as default};