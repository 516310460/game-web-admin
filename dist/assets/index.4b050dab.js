import{_ as e}from"./TableImg.8c388204.js";import{_ as o}from"./BasicForm.c38a0cc7.js";import{u as s}from"./useTable.886ffa4e.js";import{_ as r,G as a}from"./MenuModal.ca2b36eb.js";import{u as t}from"./useModal.735ea034.js";import{u as n}from"./useDrawer.daa5d551.js";import i from"./MenuDrawer.c424693d.js";import{c as d}from"./menu.data.c81de5a7.js";import{g as c}from"./useFunction.87698911.js";import{k as u,r as l,L as m,o as p,q as f,s as j,R as b,Y as g,Z as x}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.266127a6.js";import"./index.02e800e3.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.ec20bd81.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.e002f8f6.js";/* empty css              */import"./download.4c107ff8.js";import"./StrengthMeter.4b5a58a5.js";/* empty css              */import"./system.42df0aad.js";var M=u({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:i,TableAction:o,MenuModal:r},setup(){const[e,{openModal:o}]=t(),[r,{openDrawer:i}]=n(),[u,{reload:m,getSelectRows:p}]=s({title:"系统配置列表",api:a,columns:d,pagination:!1,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),f=l();return f.value=c(),{registerTable:u,registerDrawer:r,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleSuccess:function(){m()},registerModal:e,funcKeyArray:f}}});const w=x(" 新增系统配置 ");M.render=function(e,o,s,r,a,t){const n=m("a-button"),i=m("TableAction"),d=m("BasicTable"),c=m("MenuDrawer"),u=m("MenuModal");return p(),f("div",null,[j(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:b((()=>[e.funcKeyArray.includes("add")?(p(),f(n,{key:0,type:"primary",onClick:e.handleCreate},{default:b((()=>[w])),_:1},8,["onClick"])):g("",!0)])),action:b((({record:o})=>[j(i,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,o)}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),j(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default M;
