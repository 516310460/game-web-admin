import{_ as e}from"./TableImg.a09cea30.js";import"./BasicForm.18e1e5ca.js";import"./index.80670071.js";import{c as a,d as o,a as t,b as s,e as i}from"./data.9af85cf8.js";import{_ as r}from"./PageWrapper.940fdd9a.js";import{k as n,L as d,o as m,q as p,R as c,s as j,Z as f}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.0814b38b.js";import"./index.14da3ba2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.358fc689.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2a928955.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.04afd40e.js";/* empty css              */import"./download.2b7520e5.js";import"./StrengthMeter.8ce129a6.js";import"./createAsyncComponent.809684ff.js";import"./usePageContext.a26dede6.js";/* empty css              *//* empty css              */var u=n({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){t({data:s,header:i,filename:"二维数组方式导出excel.xlsx"})},columns:a,data:o})});const l=f(" 导出 ");u.render=function(e,a,o,t,s,i){const r=d("a-button"),n=d("BasicTable"),f=d("PageWrapper");return m(),p(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(r,{onClick:e.aoaToExcel},{default:c((()=>[l])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;