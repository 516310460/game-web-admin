import{an as t,ac as i}from"./index.c6214277.js";import{k as e,r,B as s,f as n,u as a,F as l,J as h,K as m,s as o}from"./vendor.c2cc062a.js";function c(t,i="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${i}`}var u=e({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(e,{slots:u}){const g=r(null),d=s({first:0,last:0,scrollTop:0}),f=n((()=>parseInt(e.bench,10))),p=n((()=>parseInt(e.itemHeight,10))),b=n((()=>Math.max(0,d.first-a(f)))),x=n((()=>Math.min((e.items||[]).length,d.last+a(f)))),N=n((()=>({height:c((e.items||[]).length*a(p))}))),H=n((()=>{const t={},i=c(e.height),r=c(e.minHeight),s=c(e.minWidth),n=c(e.maxHeight),a=c(e.maxWidth),l=c(e.width);return i&&(t.height=i),r&&(t.minHeight=r),s&&(t.minWidth=s),n&&(t.maxHeight=n),a&&(t.maxWidth=a),l&&(t.width=l),t}));function S(t){const i=a(g);if(!i)return 0;const r=parseInt(e.height||0,10)||i.clientHeight;return t+Math.ceil(r/a(p))}function v(){const t=a(g);t&&(d.scrollTop=t.scrollTop,d.first=Math.floor(d.scrollTop/a(p)),d.last=S(d.first))}function y(){const{items:t=[]}=e;return t.slice(a(b),a(x)).map(W)}function W(t,e){const r=c((e+=a(b))*a(p));return o("div",{class:"virtual-scroll__item",style:{top:r},key:e},[i(u,"default",{index:e,item:t})])}return l([()=>e.itemHeight,()=>e.height],(()=>{v()})),h((()=>{d.last=S(0),m((()=>{const i=a(g);i&&t({el:i,name:"scroll",listener:v,wait:0})}))})),()=>o("div",{class:"virtual-scroll",style:a(H),ref:g},[o("div",{class:"virtual-scroll__container",style:a(N)},[y()])])}});export default u;
