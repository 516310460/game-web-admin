import{_ as e}from"./TableImg.dae358ad.js";import"./BasicForm.a8faf294.js";import{u as s}from"./useTable.8258661b.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.879e92e6.js";import{k as t,L as i,o as a,q as d,s as n,R as m,x as p}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.d1aaf8d6.js";import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.36f6a78c.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a2743851.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";var j=t({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const c={class:"p-4"};j.render=function(e,s,o,r,t,j){const l=i("BasicTable");return a(),d("div",c,[n(l,{onRegister:e.registerTable,class:"w-full"},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default j;