import{_ as e}from"./TableImg.dae358ad.js";import"./BasicForm.a8faf294.js";import"./index.3b99e083.js";import{c as a,d as o,a as t,b as s,e as i}from"./data.db588e1c.js";import{_ as r}from"./PageWrapper.45340259.js";import{k as d,L as n,o as m,q as p,R as c,s as j,Z as f}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.d1aaf8d6.js";import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.36f6a78c.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a2743851.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";import"./createAsyncComponent.dd982132.js";import"./usePageContext.e2293ccf.js";/* empty css              *//* empty css              */var u=d({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){t({data:s,header:i,filename:"二维数组方式导出excel.xlsx"})},columns:a,data:o})});const l=f(" 导出 ");u.render=function(e,a,o,t,s,i){const r=n("a-button"),d=n("BasicTable"),f=n("PageWrapper");return m(),p(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(r,{onClick:e.aoaToExcel},{default:c((()=>[l])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default u;
