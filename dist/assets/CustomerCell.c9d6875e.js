import{_ as e,a as t}from"./TableImg.fafb3ad7.js";import"./BasicForm.4e8612e4.js";import{u as s}from"./useTable.5c80c331.js";import{k as i,bk as o,L as a,o as d,q as r,s as n,R as m,Z as c,x as p}from"./vendor.c2cc062a.js";/* empty css              */import{d as l}from"./table.043e10c5.js";/* empty css              *//* empty css              */import"./useForm.c8762787.js";import"./index.a9cd95f2.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.24c63ad5.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2e8c80e5.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.581a0b50.js";/* empty css              */import"./download.c0c465ea.js";import"./StrengthMeter.6d233ca7.js";const u=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var j=i({components:{BasicTable:e,TableImg:t,Tag:o},setup(){const[e]=s({title:"自定义列内容",api:l,columns:u,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const b={class:"p-4"};j.render=function(e,t,s,i,o,l){const u=a("Tag"),j=a("TableImg"),g=a("BasicTable");return d(),r("div",b,[n(g,{onRegister:e.registerTable},{id:m((({record:e})=>[c(" ID: "+p(e.id),1)])),no:m((({record:e})=>[n(u,{color:"green"},{default:m((()=>[c(p(e.no),1)])),_:2},1024)])),img:m((()=>[n(j,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:m((({record:e})=>[n(u,{color:"green"},{default:m((()=>[c(p(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default j;
