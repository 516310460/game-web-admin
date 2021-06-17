var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,a=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&r(e,s,t[s]);if(i)for(var s of i(t))o.call(t,s)&&r(e,s,t[s]);return e};import{d as l,an as c,r as u,ac as p}from"./index.7fd854bf.js";import{u as f}from"./useExpose.9766eb76.js";import{k as d,B as y,r as g,F as m,a6 as h,f as v,u as b,s as x,bz as w,cg as S}from"./vendor.c2cc062a.js";const{t:T}=l(),j={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:T("component.verify.dragText")},successText:{type:[String],default:T("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},O=(P=a({},j),t(P,s({src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}})));var P,D=d({name:"BaseDargVerify",props:j,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:s}){const i=y({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),n=g(null),o=g(null),r=g(null),l=g(null);m((()=>i.isPassing),(e=>{if(e){const{startTime:s,endTime:n}=i;t("success",{isPassing:e,time:((n-s)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),h((()=>{i.isPassing=!!e.value}));const d=v((()=>{const{height:t,actionStyle:s}=e,i=`${parseInt(t)}px`;return a({left:0,width:i,height:i},s)})),T=v((()=>{const{height:t,width:s,circle:i,wrapStyle:n}=e,o=parseInt(t),r=`${parseInt(s)}px`;return a({width:r,height:`${o}px`,lineHeight:`${o}px`,borderRadius:i?o/2+"px":0},n)})),j=v((()=>{const{height:t,circle:s,barStyle:i}=e,n=parseInt(t);return a({height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0},i)})),O=v((()=>{const{height:t,width:s,contentStyle:i}=e,n=`${parseInt(t)}px`,o=`${parseInt(s)}px`;return a({height:n,width:o},i)}));function P(e){return e.pageX||e.touches[0].pageX}function D(e){if(i.isPassing)return;const s=b(l);s&&(t("start",e),i.moveDistance=P(e)-parseInt(s.style.left.replace("px",""),10),i.startTime=(new Date).getTime(),i.isMoving=!0)}function M(t){const s=parseInt(t.style.width),{width:i}=e,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function I(s){const{isMoving:n,moveDistance:r}=i;if(n){const i=b(l),n=b(o);if(!i||!n)return;const{offset:a,widthNum:c,actionWidth:u}=M(i),p=P(s)-r;t("move",{event:s,moveDistance:r,moveX:p}),p>0&&p<=a?(i.style.left=`${p}px`,n.style.width=`${p+u/2}px`):p>a&&(i.style.left=c-u+"px",n.style.width=c-u/2+"px",e.isSlot||N())}}function $(s){const{isMoving:n,isPassing:a,moveDistance:c}=i;if(n&&!a){t("end",s);const n=b(l),a=b(o);if(!n||!a)return;const u=P(s)-c,{offset:p,widthNum:f,actionWidth:d}=M(n);u<p?e.isSlot?setTimeout((()=>{if(e.value){const e=b(r);e&&(e.style.width=`${parseInt(a.style.width)}px`)}else B()}),0):B():(n.style.left=f-d+"px",a.style.width=f-d/2+"px",N()),i.isMoving=!1}}function N(){e.isSlot?B():(i.endTime=(new Date).getTime(),i.isPassing=!0,i.isMoving=!1)}function B(){i.isMoving=!1,i.isPassing=!1,i.moveDistance=0,i.toLeft=!1,i.startTime=0,i.endTime=0;const e=b(l),t=b(o),s=b(r);e&&t&&s&&(i.toLeft=!0,u((()=>{i.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=b(O).width)}return c({el:document,name:"mouseup",listener:()=>{i.isMoving&&B()}}),f({resume:B}),()=>x("div",{class:"darg-verify",ref:n,style:b(T),onMousemove:I,onTouchmove:I,onMouseleave:$,onMouseup:$,onTouchend:$},[(()=>{const e=["darg-verify-bar"];return i.toLeft&&e.push("to-left"),x("div",{class:e,ref:o,style:b(j)},null)})(),(()=>{const t=["darg-verify-content"],{isPassing:n}=i,{text:o,successText:a}=e;return n&&t.push("success"),x("div",{class:t,ref:r,style:b(O)},[p(s,"text",n)||(n?a:o)])})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:n}=i;return t&&e.push("to-left"),x("div",{class:e,onMousedown:D,onTouchstart:D,style:b(d),ref:l},[p(s,"actionIcon",n)||x(n?w:S,{class:"darg-verify-action__icon"},null)])})()])}}),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});export{D as B,M as D,O as r};
