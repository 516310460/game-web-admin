import{_ as e}from"./TableImg.8cf081e8.js";import"./BasicForm.dbc54f8f.js";import{u as o}from"./useTable.9d3026e5.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,L as r,o as a,q as d,s as p,R as n,Z as l}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a1fbfd4e.js";import"./index.9345068b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.1e927a40.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.dbdac56c.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.de5ce37b.js";/* empty css              */import"./download.5e18ee04.js";import"./StrengthMeter.d3194e4f.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const c={class:"p-4"},j=l("展开全部"),b=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=r("a-button"),f=r("BasicTable");return a(),d("div",c,[p(f,{onRegister:e.register},{toolbar:n((()=>[p(m,{type:"primary",onClick:e.expandAll},{default:n((()=>[j])),_:1},8,["onClick"]),p(m,{type:"primary",onClick:e.collapseAll},{default:n((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;