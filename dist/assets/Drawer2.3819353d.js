import{_ as r,a as e}from"./useDrawer.daa5d551.js";import{k as a,L as s,o as t,q as o,R as i,s as n,O as c,Z as d}from"./vendor.c2cc062a.js";/* empty css              */import"./index.02e800e3.js";var l=a({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:a}]=e();return{register:r,closeDrawer:a}}});const w=d(" Drawer Info. "),f=d(" 内部关闭drawer ");l.render=function(r,e,a,d,l,p){const u=s("a-button"),m=s("BasicDrawer");return t(),o(m,c(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:i((()=>[w,n(u,{type:"primary",onClick:r.closeDrawer},{default:i((()=>[f])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default l;
