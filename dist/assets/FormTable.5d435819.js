import{_ as e}from"./TableImg.bde3cc65.js";import"./BasicForm.38d01207.js";import{u as o}from"./useTable.488fe899.js";import{getBasicColumns as t,getFormConfig as s}from"./tableData.83d6955e.js";import{d as r}from"./table.98340e0d.js";import{k as i,L as a,o as m,q as n,R as d,s as p,Z as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.2cb2fa07.js";import"./index.c6214277.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.5420dac5.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.4b188685.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.878120c8.js";/* empty css              */import"./download.40a24583.js";import"./StrengthMeter.fed7f1db.js";var j=i({components:{BasicTable:e},setup(){const[e,{getForm:i}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:s(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const u=c(" custom-slot "),b=c("获取表单数据");j.render=function(e,o,t,s,r,i){const c=a("a-button"),j=a("BasicTable");return m(),n(j,{onRegister:e.registerTable,class:"w-full"},{"form-custom":d((()=>[u])),toolbar:d((()=>[p(c,{type:"primary",onClick:e.getFormValues},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default j;
