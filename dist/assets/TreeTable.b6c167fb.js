import{_ as e}from"./TableImg.52a5f566.js";import"./BasicForm.ca329dfa.js";import{u as o}from"./useTable.12958ecc.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,L as r,o as a,q as p,s as n,R as l,Z as d}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a15aba3a.js";import"./index.b2f89009.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.7df4099e.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.3e0e9015.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.509df665.js";/* empty css              */import"./download.22cf218c.js";import"./StrengthMeter.83930716.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const c={class:"p-4"},j=d("展开全部"),f=d("折叠全部");m.render=function(e,o,t,s,i,d){const m=r("a-button"),u=r("BasicTable");return a(),p("div",c,[n(u,{onRegister:e.register},{toolbar:l((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:l((()=>[j])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:l((()=>[f])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;