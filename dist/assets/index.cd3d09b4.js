var e=(e,t,n)=>new Promise(((o,a)=>{var i=e=>{try{s(n.next(e))}catch(t){a(t)}},r=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,r);s((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.8c388204.js";import{_ as n}from"./BasicForm.c38a0cc7.js";import{u as o}from"./useTable.886ffa4e.js";import{_ as a,G as i,c as r,D as s}from"./ManagementModal.f5669eb6.js";import{_ as c}from"./PageWrapper.8e397f8a.js";import{u as l}from"./useModal.735ea034.js";import{g as d}from"./useFunction.87698911.js";import{k as u,r as p,L as m,o as f,q as j,R as b,s as h,Y as g,Z as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.266127a6.js";import"./index.02e800e3.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.ec20bd81.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.e002f8f6.js";/* empty css              */import"./download.4c107ff8.js";import"./StrengthMeter.4b5a58a5.js";import"./usePageContext.ff6a3354.js";/* empty css              *//* empty css              */var x=u({name:"AccountManagement",components:{BasicTable:t,PageWrapper:c,ManagementModal:a,TableAction:n},setup(){const[t,{openModal:n}]=l(),[a,{reload:c,getSelectRows:u}]=o({title:"币种列表",api:i,columns:r,showTableSetting:!0,bordered:!0,canResize:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}}),m=p();return m.value=d(),{registerTable:a,registerModal:t,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(t){return e(this,null,(function*(){n(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){yield s({ids:t.id}),c()}))},handleSuccess:function(){c()},handleSelect:function(e=""){c({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=u(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield s({ids:t.join()}),c())}))},funcKeyArray:m}}});const M=y("新增币种"),S=y("批量删除");x.render=function(e,t,n,o,a,i){const r=m("a-button"),s=m("TableAction"),c=m("BasicTable"),l=m("ManagementModal"),d=m("PageWrapper");return f(),j(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:b((()=>[h(c,{onRegister:e.registerTable,class:"w-full"},{toolbar:b((()=>[e.funcKeyArray.includes("add")?(f(),j(r,{key:0,type:"primary",onClick:e.handleCreate},{default:b((()=>[M])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(f(),j(r,{key:1,type:"primary",onClick:e.getSelectRowList},{default:b((()=>[S])),_:1},8,["onClick"])):g("",!0)])),action:b((({record:t})=>[h(s,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;
