import{_ as e}from"./TableImg.8758a9f1.js";import"./BasicForm.bc9b6534.js";import{u as o}from"./useTable.89bd9759.js";import{getBasicColumns as t}from"./tableData.83d6955e.js";import{d as r}from"./table.358288ac.js";import{k as s,L as a,o as i,q as n,s as d,R as m,Z as p}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.bb6b5609.js";import"./index.2d95079e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.c504d6c8.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a844fca0.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.16091f62.js";/* empty css              */import"./download.7f173743.js";import"./StrengthMeter.36cdf8aa.js";var l=s({components:{BasicTable:e},setup(){const[e,{reload:s}]=o({title:"远程加载示例",api:r,columns:t()});return{registerTable:e,handleReloadCurrent:function(){s()},handleReload:function(){s({page:1})}}}});const c={class:"p-4"},j=p(" 刷新当前页 "),b=p(" 刷新并返回第一页 ");l.render=function(e,o,t,r,s,p){const l=a("a-button"),u=a("BasicTable");return i(),n("div",c,[d(u,{onRegister:e.registerTable,class:"w-full"},{toolbar:m((()=>[d(l,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[j])),_:1},8,["onClick"]),d(l,{type:"primary",onClick:e.handleReload},{default:m((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default l;
