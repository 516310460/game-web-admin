import o from"./LockPage.8f786076.js";import{u as e}from"./lock.a954716a.js";import{k as a,f as t,L as r,o as s,q as n,R as c,Y as m,T as u}from"./vendor.c2cc062a.js";import"./index.b2f89009.js";import"./header.d801b988.js";var d=a({name:"Lock",components:{LockPage:o},setup(){const o=e();return{getIsLock:t((()=>{var e,a;return null!=(a=null==(e=null==o?void 0:o.getLockInfo)?void 0:e.isLock)&&a}))}}});d.render=function(o,e,a,t,d,f){const i=r("LockPage");return s(),n(u,{name:"fade-bottom",mode:"out-in"},{default:c((()=>[o.getIsLock?(s(),n(i,{key:0})):m("",!0)])),_:1})};export default d;
