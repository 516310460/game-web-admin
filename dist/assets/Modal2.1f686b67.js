import{_ as s,b as e}from"./useModal.36f6a78c.js";import{k as o,L as a,o as t,q as r,R as l,s as i,O as n,Z as c}from"./vendor.c2cc062a.js";import"./index.05b44a3f.js";import"./useWindowSizeFn.f7fa6c6d.js";var d=o({components:{BasicModal:s},setup(){const[s,{closeModal:o,setModalProps:a}]=e();return{register:s,closeModal:o,setModalProps:()=>{a({title:"Modal New Title"})}}}});const p=c(" 从内部关闭弹窗 "),M=c(" 从内部修改title ");d.render=function(s,e,o,c,d,f){const u=a("a-button"),m=a("BasicModal");return t(),r(m,n(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:l((()=>[i(u,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:l((()=>[p])),_:1},8,["onClick"]),i(u,{type:"primary",onClick:s.setModalProps},{default:l((()=>[M])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default d;
