import{_ as e}from"./TableImg.ee767a7a.js";import"./BasicForm.f0f3ac75.js";import{u as s}from"./useTable.aa23922c.js";import{getBasicColumns as o}from"./tableData.83d6955e.js";import{d as r}from"./table.46787bbe.js";import{k as t,L as i,o as a,q as d,s as n,R as m,x as p}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.add62195.js";import"./index.a031c7d6.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.27b1d095.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.efdbffab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2db3c173.js";/* empty css              */import"./download.fca7766c.js";import"./StrengthMeter.13358396.js";var c=t({components:{BasicTable:e},setup(){const[e]=s({title:"可展开表格",api:r,titleHelpMessage:"不能与scroll共用",columns:o(),rowKey:"id",canResize:!1});return{registerTable:e}}});const j={class:"p-4"};c.render=function(e,s,o,r,t,c){const b=i("BasicTable");return a(),d("div",j,[n(b,{onRegister:e.registerTable,class:"w-full"},{expandedRowRender:m((({record:e})=>[n("span",null,"No: "+p(e.no),1)])),_:1},8,["onRegister"])])};export default c;
