import o from"./LockPage.5288013b.js";import{u as e}from"./lock.7b7c6760.js";import{k as t,f as a,L as r,o as s,q as n,R as c,Y as m,T as d}from"./vendor.c2cc062a.js";import"./index.2d95079e.js";import"./header.d801b988.js";var u=t({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:a((()=>{var e,t;return null!=(t=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&t}))}}});u.render=function(o,e,t,a,u,i){const k=r("LockPage");return s(),n(d,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(k,{key:0})):m("",!0)])),_:1})};export default u;
