import{I as e}from"./index.f5c463cc.js";import{_ as t}from"./TableImg.8c388204.js";import"./BasicForm.c38a0cc7.js";import{_ as s}from"./PageWrapper.8e397f8a.js";import{k as o,r as a,L as r,o as i,q as c,R as n,s as m,W as p,ai as d,Z as u}from"./vendor.c2cc062a.js";import"./index.02e800e3.js";import"./createAsyncComponent.16400ab1.js";/* empty css              *//* empty css              */import"./useForm.266127a6.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.735ea034.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.ec20bd81.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.e002f8f6.js";/* empty css              */import"./download.4c107ff8.js";import"./StrengthMeter.4b5a58a5.js";import"./usePageContext.ff6a3354.js";/* empty css              *//* empty css              */var l=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=a([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:a}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:a,dataSource:o,columns:r})}},tableListRef:e}}});const f=u(" 导入Excel ");l.render=function(e,t,s,o,a,u){const l=r("a-button"),j=r("ImpExcel"),x=r("BasicTable"),b=r("PageWrapper");return i(),c(b,{title:"excel数据导入示例"},{default:n((()=>[m(j,{onSuccess:e.loadDataSuccess},{default:n((()=>[m(l,{class:"m-3"},{default:n((()=>[f])),_:1})])),_:1},8,["onSuccess"]),(i(!0),c(p,null,d(e.tableListRef,((e,t)=>(i(),c(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;
