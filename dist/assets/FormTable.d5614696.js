import{_ as e}from"./TableImg.ee767a7a.js";import"./BasicForm.f0f3ac75.js";import{u as o}from"./useTable.aa23922c.js";import{getBasicColumns as t,getFormConfig as s}from"./tableData.83d6955e.js";import{d as r}from"./table.46787bbe.js";import{k as i,L as a,o as m,q as n,R as d,s as p,Z as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.add62195.js";import"./index.a031c7d6.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.27b1d095.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.efdbffab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.2db3c173.js";/* empty css              */import"./download.fca7766c.js";import"./StrengthMeter.13358396.js";var b=i({components:{BasicTable:e},setup(){const[e,{getForm:i}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:s(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const f=c(" custom-slot "),j=c("获取表单数据");b.render=function(e,o,t,s,r,i){const c=a("a-button"),b=a("BasicTable");return m(),n(b,{onRegister:e.registerTable,class:"w-full"},{"form-custom":d((()=>[f])),toolbar:d((()=>[p(c,{type:"primary",onClick:e.getFormValues},{default:d((()=>[j])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default b;
