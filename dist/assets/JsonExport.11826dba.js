import{_ as e}from"./TableImg.8cf081e8.js";import"./BasicForm.dbc54f8f.js";import"./index.d9fb7235.js";import{c as t,d as o,j as a}from"./data.40f0a865.js";import{_ as s}from"./PageWrapper.5e932ddb.js";import{k as i,L as d,o as r,q as n,R as m,s as p,Z as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a1fbfd4e.js";import"./index.9345068b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.1e927a40.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.dbdac56c.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.de5ce37b.js";/* empty css              */import"./download.5e18ee04.js";import"./StrengthMeter.d3194e4f.js";import"./createAsyncComponent.1972d182.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */var j=i({components:{BasicTable:e,PageWrapper:s},setup:()=>({defaultHeader:function(){a({data:o,filename:"使用key作为默认头部.xlsx"})},customHeader:function(){a({data:o,header:{id:"ID",name:"姓名",age:"年龄",no:"编号",address:"地址",beginTime:"开始时间",endTime:"结束时间"},filename:"自定义头部.xlsx",json2sheetOpts:{header:["name","id"]}})},columns:t,data:o})});const f=c(" 导出：默认头部 "),u=c(" 导出：自定义头部 ");j.render=function(e,t,o,a,s,i){const c=d("a-button"),j=d("BasicTable"),l=d("PageWrapper");return r(),n(l,{title:"导出示例",content:"根据JSON格式的数据进行导出"},{default:m((()=>[p(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:m((()=>[p(c,{onClick:e.defaultHeader},{default:m((()=>[f])),_:1},8,["onClick"]),p(c,{onClick:e.customHeader},{default:m((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default j;
