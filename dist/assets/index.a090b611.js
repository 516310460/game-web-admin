var e=(e,t,n)=>new Promise(((o,i)=>{var a=e=>{try{s(n.next(e))}catch(t){i(t)}},r=e=>{try{s(n.throw(e))}catch(t){i(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.90131e8e.js";import{_ as n}from"./BasicForm.7d27c2f1.js";import{u as o}from"./useTable.02cc089c.js";import{_ as i,C as a,c as r,D as s}from"./ManagementModal.0becc2fd.js";import{_ as c}from"./PageWrapper.89833edf.js";import{u as d}from"./useModal.b188c2e0.js";import{g as l}from"./useFunction.622ff75b.js";import{k as u,r as p,L as m,o as f,q as b,R as j,s as h,Y as g,Z as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.abe4b088.js";import"./index.3df22268.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.8da6b1c7.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b674ffa1.js";/* empty css              */import"./download.1103b608.js";import"./StrengthMeter.b8c729fd.js";import"./usePageContext.8b2e96f1.js";/* empty css              *//* empty css              */var x=u({name:"AccountManagement",components:{BasicTable:t,PageWrapper:c,ManagementModal:i,TableAction:n},setup(){const[t,{openModal:n}]=d(),[i,{reload:c,getSelectRows:u}]=o({title:"矿机销售配置列表",api:a,columns:r,showTableSetting:!0,bordered:!0,canResize:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}}),m=p();return m.value=l(),{registerTable:i,registerModal:t,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(t){return e(this,null,(function*(){n(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){yield s({ids:t.id}),c()}))},handleSuccess:function(){c()},handleSelect:function(e=""){c({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=u(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield s({ids:t.join()}),c())}))},funcKeyArray:m}}});const C=y("新增矿机销售配置"),M=y("批量删除");x.render=function(e,t,n,o,i,a){const r=m("a-button"),s=m("TableAction"),c=m("BasicTable"),d=m("ManagementModal"),l=m("PageWrapper");return f(),b(l,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[h(c,{onRegister:e.registerTable,class:"w-full"},{toolbar:j((()=>[e.funcKeyArray.includes("add")?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:j((()=>[C])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(f(),b(r,{key:1,type:"primary",onClick:e.getSelectRowList},{default:j((()=>[M])),_:1},8,["onClick"])):g("",!0)])),action:j((({record:t})=>[h(s,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;
