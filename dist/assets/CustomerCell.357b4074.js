import{_ as e,a as t}from"./TableImg.8758a9f1.js";import"./BasicForm.bc9b6534.js";import{u as s}from"./useTable.89bd9759.js";import{k as i,bk as o,L as a,o as d,q as r,s as n,R as m,Z as c,x as l}from"./vendor.c2cc062a.js";/* empty css              */import{d as p}from"./table.358288ac.js";/* empty css              *//* empty css              */import"./useForm.bb6b5609.js";import"./index.2d95079e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.c504d6c8.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a844fca0.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.16091f62.js";/* empty css              */import"./download.7f173743.js";import"./StrengthMeter.36cdf8aa.js";const b=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=i({components:{BasicTable:e,TableImg:t,Tag:o},setup(){const[e]=s({title:"自定义列内容",api:p,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const j={class:"p-4"};u.render=function(e,t,s,i,o,p){const b=a("Tag"),u=a("TableImg"),f=a("BasicTable");return d(),r("div",j,[n(f,{onRegister:e.registerTable,class:"w-full"},{id:m((({record:e})=>[c(" ID: "+l(e.id),1)])),no:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(l(e.no),1)])),_:2},1024)])),img:m((()=>[n(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(l(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default u;