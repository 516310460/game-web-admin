import{_ as s}from"./TableImg.fafb3ad7.js";import"./BasicForm.4e8612e4.js";import{u as e}from"./useTable.5c80c331.js";import{getCustomHeaderColumns as o}from"./tableData.83d6955e.js";import{d as t}from"./table.043e10c5.js";import{ag as i}from"./index.a9cd95f2.js";import{k as r,bq as a,L as m,o as d,q as n,s as c,R as p,Z as l}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.c8762787.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.24c63ad5.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2e8c80e5.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.581a0b50.js";/* empty css              */import"./download.c0c465ea.js";import"./StrengthMeter.6d233ca7.js";var j=r({components:{BasicTable:s,FormOutlined:a,BasicHelp:i},setup(){const[s]=e({title:"定高/头部自定义",api:t,columns:o(),canResize:!1,scroll:{y:100}});return{registerTable:s}}});const u={class:"p-4"},b=l(" 姓名 "),f=l(" 地址 ");j.render=function(s,e,o,t,i,r){const a=m("BasicHelp"),l=m("FormOutlined"),j=m("BasicTable");return d(),n("div",u,[c(j,{onRegister:s.registerTable},{customTitle:p((()=>[c("span",null,[b,c(a,{class:"ml-2",text:"姓名"})])])),customAddress:p((()=>[f,c(l,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;
