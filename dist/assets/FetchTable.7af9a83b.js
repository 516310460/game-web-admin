import{_ as e}from"./TableImg.1cd23f27.js";import"./BasicForm.d607c7a3.js";import{u as o}from"./useTable.ceae1622.js";import{getBasicColumns as t}from"./tableData.83d6955e.js";import{d as r}from"./table.3f4a1b17.js";import{k as i,L as a,o as s,q as n,s as d,R as m,Z as p}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a3e29c9f.js";import"./index.7fd854bf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.02fd9148.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";var c=i({components:{BasicTable:e},setup(){const[e,{reload:i}]=o({title:"远程加载示例",api:r,columns:t()});return{registerTable:e,handleReloadCurrent:function(){i()},handleReload:function(){i({page:1})}}}});const l={class:"p-4"},f=p(" 刷新当前页 "),j=p(" 刷新并返回第一页 ");c.render=function(e,o,t,r,i,p){const c=a("a-button"),b=a("BasicTable");return s(),n("div",l,[d(b,{onRegister:e.registerTable},{toolbar:m((()=>[d(c,{type:"primary",onClick:e.handleReloadCurrent},{default:m((()=>[f])),_:1},8,["onClick"]),d(c,{type:"primary",onClick:e.handleReload},{default:m((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default c;