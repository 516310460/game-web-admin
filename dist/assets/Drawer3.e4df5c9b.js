import{_ as t}from"./useDrawer.5d71dfb3.js";import{k as a,L as e,o as s,q as o,R as n,s as r,W as l,ai as d,O as i,Z as u}from"./vendor.c2cc062a.js";/* empty css              */import"./index.bb679890.js";var c=a({components:{BasicDrawer:t},setup:()=>({handleOk:()=>{}})});const f=u(" btn"),p=u(" btn2"),b=u(" btn3");c.render=function(t,a,u,c,m,k){const h=e("a-button"),w=e("BasicDrawer");return s(),o(w,i(t.$attrs,{title:"Modal Title",width:"50%",showFooter:"",onOk:t.handleOk}),{insertFooter:n((()=>[r(h,null,{default:n((()=>[f])),_:1})])),centerFooter:n((()=>[r(h,null,{default:n((()=>[p])),_:1})])),appendFooter:n((()=>[r(h,null,{default:n((()=>[b])),_:1})])),default:n((()=>[(s(),o(l,null,d(40,(t=>r("p",{class:"h-20",key:t}," 根据屏幕高度自适应 "))),64))])),_:1},16,["onOk"])};export default c;