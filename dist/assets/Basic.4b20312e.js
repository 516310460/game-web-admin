import{_ as e}from"./TableImg.bde3cc65.js";import"./BasicForm.38d01207.js";import{getBasicColumns as o,getBasicData as i}from"./tableData.83d6955e.js";import{k as t,r as a,L as r,o as n,q as s,s as d,R as l,Z as p,x as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.2cb2fa07.js";import"./index.c6214277.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.5420dac5.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.4b188685.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.878120c8.js";/* empty css              */import"./download.40a24583.js";import"./StrengthMeter.fed7f1db.js";var m=t({components:{BasicTable:e},setup(){const e=a(!1),t=a(!1),r=a(!0),n=a(!0),s=a(!1);return{columns:o(),data:i(),canResize:e,loading:t,striped:r,border:n,toggleStriped:function(){r.value=!r.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1,s.value={pageSize:20}}),3e3)},toggleBorder:function(){n.value=!n.value},pagination:s}}});const u={class:"p-4"},g=p(" 开启loading ");m.render=function(e,o,i,t,a,m){const b=r("a-button"),j=r("BasicTable");return n(),s("div",u,[d(j,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:l((()=>[d(b,{type:"primary",onClick:e.toggleCanResize},{default:l((()=>[p(c(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),d(b,{type:"primary",onClick:e.toggleBorder},{default:l((()=>[p(c(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),d(b,{type:"primary",onClick:e.toggleLoading},{default:l((()=>[g])),_:1},8,["onClick"]),d(b,{type:"primary",onClick:e.toggleStriped},{default:l((()=>[p(c(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default m;
