import{_ as e}from"./TableImg.fafb3ad7.js";import"./BasicForm.4e8612e4.js";import{u as o}from"./useTable.5c80c331.js";import{getBasicColumns as t,getFormConfig as s}from"./tableData.83d6955e.js";import{d as r}from"./table.043e10c5.js";import{k as i,L as a,o as m,q as n,R as c,s as p,Z as d}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.c8762787.js";import"./index.a9cd95f2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.24c63ad5.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2e8c80e5.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.581a0b50.js";/* empty css              */import"./download.c0c465ea.js";import"./StrengthMeter.6d233ca7.js";var j=i({components:{BasicTable:e},setup(){const[e,{getForm:i}]=o({title:"开启搜索区域",api:r,columns:t(),useSearchForm:!0,formConfig:s(),showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:e,getFormValues:function(){}}}});const u=d(" custom-slot "),b=d("获取表单数据");j.render=function(e,o,t,s,r,i){const d=a("a-button"),j=a("BasicTable");return m(),n(j,{onRegister:e.registerTable},{"form-custom":c((()=>[u])),toolbar:c((()=>[p(d,{type:"primary",onClick:e.getFormValues},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export default j;