import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.7e10c820.js";import{t as a}from"./data.35453d04.js";import{_ as t}from"./PageWrapper.e33b63d0.js";import{k as r,L as s,o as n,q as o,R as c,s as l}from"./vendor.c2cc062a.js";import"./index.7fd854bf.js";import"./useContextMenu.8cbb6d0a.js";/* empty css              */import"./useExpose.9766eb76.js";import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var d=r({components:{BasicTree:e,PageWrapper:t},setup:()=>({treeData:a,handleCheck:function(e,a){}})});const i={class:"flex"};d.render=function(e,a,t,r,d,p){const m=s("BasicTree"),u=s("PageWrapper");return n(),o(u,{title:"Tree基础示例"},{default:c((()=>[l("div",i,[l(m,{treeData:e.treeData,title:"基础示例，默认展开第一层",defaultExpandLevel:"1",class:"w-1/3"},null,8,["treeData"]),l(m,{treeData:e.treeData,title:"可勾选，默认全部展开",checkable:!0,class:"w-1/3 mx-4",defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),l(m,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default d;