import{_ as e}from"./TableImg.dae358ad.js";import"./BasicForm.a8faf294.js";import{u as o}from"./useTable.8258661b.js";import{getBasicColumns as t,getFormConfig as s}from"./tableData.83d6955e.js";import{d as r}from"./table.879e92e6.js";import{k as i,L as a,o as m,q as n,R as d,s as p,Z as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.d1aaf8d6.js";import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.36f6a78c.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a2743851.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";var j=i({components:{BasicTable:e},setup(){const[e,{getForm:i}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:s(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const u=c(" custom-slot "),b=c("获取表单数据");j.render=function(e,o,t,s,r,i){const c=a("a-button"),j=a("BasicTable");return m(),n(j,{onRegister:e.registerTable,class:"w-full"},{"form-custom":d((()=>[u])),toolbar:d((()=>[p(c,{type:"primary",onClick:e.getFormValues},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default j;
