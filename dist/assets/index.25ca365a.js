import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.d76a7f73.js";import{t as a}from"./data.35453d04.js";import{_ as t}from"./PageWrapper.15f3b793.js";import{k as r,L as s,o as n,q as o,R as d,s as l}from"./vendor.c2cc062a.js";import"./index.a9cd95f2.js";import"./useContextMenu.adf5da24.js";/* empty css              */import"./useExpose.9766eb76.js";import"./usePageContext.92db9508.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var c=r({components:{BasicTree:e,PageWrapper:t},setup:()=>({treeData:a,handleCheck:function(e,a){}})});const i={class:"flex"};c.render=function(e,a,t,r,c,p){const f=s("BasicTree"),m=s("PageWrapper");return n(),o(m,{title:"Tree基础示例"},{default:d((()=>[l("div",i,[l(f,{treeData:e.treeData,title:"基础示例，默认展开第一层",defaultExpandLevel:"1",class:"w-1/3"},null,8,["treeData"]),l(f,{treeData:e.treeData,title:"可勾选，默认全部展开",checkable:!0,class:"w-1/3 mx-4",defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),l(f,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default c;