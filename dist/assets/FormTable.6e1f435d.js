import{_ as e}from"./TableImg.a09cea30.js";import"./BasicForm.18e1e5ca.js";import{u as o}from"./useTable.6872d086.js";import{getBasicColumns as t,getFormConfig as s}from"./tableData.83d6955e.js";import{d as r}from"./table.38c5bfe1.js";import{k as i,L as a,o as m,q as n,R as p,s as d,Z as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.0814b38b.js";import"./index.14da3ba2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.358fc689.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2a928955.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.04afd40e.js";/* empty css              */import"./download.2b7520e5.js";import"./StrengthMeter.8ce129a6.js";var b=i({components:{BasicTable:e},setup(){const[e,{getForm:i}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:s(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const j=c(" custom-slot "),u=c("获取表单数据");b.render=function(e,o,t,s,r,i){const c=a("a-button"),b=a("BasicTable");return m(),n(b,{onRegister:e.registerTable,class:"w-full"},{"form-custom":p((()=>[j])),toolbar:p((()=>[d(c,{type:"primary",onClick:e.getFormValues},{default:p((()=>[u])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default b;