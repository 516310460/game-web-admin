import o from"./LockPage.5339e55b.js";import{u as e}from"./lock.07ce8fd8.js";import{k as a,f as t,L as r,o as s,q as n,R as c,Y as d,T as m}from"./vendor.c2cc062a.js";import"./index.14da3ba2.js";import"./header.d801b988.js";var u=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});u.render=function(o,e,a,t,u,i){const k=r("LockPage");return s(),n(m,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(k,{key:0})):d("",!0)])),_:1})};export default u;
