import{_ as e,a as t}from"./TableImg.90131e8e.js";import"./BasicForm.7d27c2f1.js";import{u as s}from"./useTable.02cc089c.js";import{k as i,bk as o,L as d,o as a,q as r,s as n,R as m,Z as c,x as l}from"./vendor.c2cc062a.js";/* empty css              */import{d as p}from"./table.386e6580.js";/* empty css              *//* empty css              */import"./useForm.abe4b088.js";import"./index.3df22268.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.b188c2e0.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.8da6b1c7.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b674ffa1.js";/* empty css              */import"./download.1103b608.js";import"./StrengthMeter.b8c729fd.js";const b=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var u=i({components:{BasicTable:e,TableImg:t,Tag:o},setup(){const[e]=s({title:"自定义列内容",api:p,columns:b,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const j={class:"p-4"};u.render=function(e,t,s,i,o,p){const b=d("Tag"),u=d("TableImg"),f=d("BasicTable");return a(),r("div",j,[n(f,{onRegister:e.registerTable,class:"w-full"},{id:m((({record:e})=>[c(" ID: "+l(e.id),1)])),no:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(l(e.no),1)])),_:2},1024)])),img:m((()=>[n(u,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:m((({record:e})=>[n(b,{color:"green"},{default:m((()=>[c(l(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default u;