import{_ as s,b as e}from"./useModal.12b3f90b.js";import{k as o,L as t,o as a,q as r,R as l,s as i,O as n,Z as d}from"./vendor.c2cc062a.js";import"./index.bb679890.js";import"./useWindowSizeFn.f7fa6c6d.js";var c=o({components:{BasicModal:s},setup(){const[s,{closeModal:o,setModalProps:t}]=e();return{register:s,closeModal:o,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=d(" 从内部关闭弹窗 "),M=d(" 从内部修改title ");c.render=function(s,e,o,d,c,u){const f=t("a-button"),m=t("BasicModal");return a(),r(m,n(s.$attrs,{onRegister:s.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:l((()=>[i(f,{type:"primary",onClick:s.closeModal,class:"mr-2"},{default:l((()=>[p])),_:1},8,["onClick"]),i(f,{type:"primary",onClick:s.setModalProps},{default:l((()=>[M])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;