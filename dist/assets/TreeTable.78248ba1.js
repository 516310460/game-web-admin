import{_ as e}from"./TableImg.dae358ad.js";import"./BasicForm.a8faf294.js";import{u as o}from"./useTable.8258661b.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,L as a,o as r,q as p,s as n,R as d,Z as l}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.d1aaf8d6.js";import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.36f6a78c.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a2743851.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:a}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:a}}});const c={class:"p-4"},j=l("展开全部"),b=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=a("a-button"),u=a("BasicTable");return r(),p("div",c,[n(u,{onRegister:e.register},{toolbar:d((()=>[n(m,{type:"primary",onClick:e.expandAll},{default:d((()=>[j])),_:1},8,["onClick"]),n(m,{type:"primary",onClick:e.collapseAll},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;
