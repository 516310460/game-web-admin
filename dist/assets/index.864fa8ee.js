import{_ as e}from"./Tree.vue_vue&type=style&index=0&lang.067268aa.js";import{t as a}from"./data.35453d04.js";import{_ as t}from"./PageWrapper.cda93d24.js";import{k as r,L as s,o as n,q as o,R as d,s as l}from"./vendor.c2cc062a.js";import"./index.2d95079e.js";import"./useContextMenu.63f0b4df.js";/* empty css              */import"./useExpose.9766eb76.js";import"./usePageContext.f919706d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var c=r({components:{BasicTree:e,PageWrapper:t},setup:()=>({treeData:a,handleCheck:function(e,a){}})});const i={class:"flex"};c.render=function(e,a,t,r,c,p){const m=s("BasicTree"),u=s("PageWrapper");return n(),o(u,{title:"Tree基础示例"},{default:d((()=>[l("div",i,[l(m,{treeData:e.treeData,title:"基础示例，默认展开第一层",defaultExpandLevel:"1",class:"w-1/3"},null,8,["treeData"]),l(m,{treeData:e.treeData,title:"可勾选，默认全部展开",checkable:!0,class:"w-1/3 mx-4",defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"]),l(m,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"],class:"w-1/3"},null,8,["treeData"])])])),_:1})};export default c;
