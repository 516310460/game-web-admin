import{k as a,bu as e,r as s,l as t,n as o,L as l,o as n,q as r,s as i,a5 as c,w as d,v as p,y as u,Z as v}from"./vendor.c2cc062a.js";import{_ as S}from"./PageWrapper.9733b54c.js";import{aD as m,aE as T,aF as f,aG as x,aH as R,aI as X,aJ as b,aK as Y,aL as j,aM as _,aN as y,aO as E,aP as P}from"./index.c6214277.js";import"./usePageContext.211cdadf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const g=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((a=>({label:a,value:a,key:a})));var h=a({components:{Select:e,PageWrapper:S,FadeTransition:m,ScaleTransition:T,SlideYTransition:f,ScrollYTransition:x,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:b,ScrollXTransition:Y,SlideXReverseTransition:j,ScrollXReverseTransition:_,ScaleRotateTransition:y,ExpandXTransition:E,ExpandTransition:P},setup(){const a=s("Fade"),e=s(!0);return{options:g,value:a,start:function(){e.value=!1,setTimeout((()=>{e.value=!0}),300)},show:e}}});const k=u();t("data-v-8aaf1bc4");const w={class:"flex"},F=v(" start "),C={class:"box"};o();const W=k(((a,e,s,t,o,u)=>{const v=l("Select"),S=l("a-button"),m=l("PageWrapper");return n(),r(m,{title:"动画组件示例"},{default:k((()=>[i("div",w,[i(v,{options:a.options,value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),i(S,{type:"primary",class:"ml-4",onClick:a.start},{default:k((()=>[F])),_:1},8,["onClick"])]),(n(),r(c(`${a.value}Transition`),null,{default:k((()=>[d(i("div",C,null,512),[[p,a.show]])])),_:1}))])),_:1})}));h.render=W,h.__scopeId="data-v-8aaf1bc4";export default h;
