import{_ as e}from"./TableImg.1cd23f27.js";import"./BasicForm.d607c7a3.js";import{u as o}from"./useTable.ceae1622.js";import{getBasicColumns as s}from"./tableData.83d6955e.js";import{d as r}from"./table.3f4a1b17.js";import{k as t,L as i,o as n,q as a,s as m}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a3e29c9f.js";import"./index.7fd854bf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.02fd9148.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";var d=t({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:r,rowSelection:{type:"checkbox"},columns:s(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const c={class:"p-4"};d.render=function(e,o,s,r,t,d){const p=i("BasicTable");return n(),a("div",c,[m(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default d;