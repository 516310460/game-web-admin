import{k as e,r as t,c7 as i,J as a,o as n,q as s,S as r,L as c,s as d,x as o,y as l}from"./vendor.c2cc062a.js";import{_ as u}from"./PageWrapper.e2c73ada.js";import"./index.a031c7d6.js";import"./usePageContext.ac42f75d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var p=e({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:n}){const s=t(null);return i(s,(()=>{n("clickOutside")})),a((()=>{n("mounted")})),{wrap:s}}});const k={ref:"wrap"};p.render=function(e,t,i,a,c,d){return n(),s("div",k,[r(e.$slots,"default")],512)};var f=e({components:{ClickOutSide:p,PageWrapper:u},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const m=l(),C=m(((e,t,i,a,r,l)=>{const u=c("ClickOutSide"),p=c("PageWrapper");return n(),s(p,{title:"点内外部触发事件"},{default:m((()=>[d(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:m((()=>[d("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},o(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));f.render=C,f.__scopeId="data-v-4b8dd7fd";export default f;
