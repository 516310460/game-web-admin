var e=(e,t,n)=>new Promise(((o,a)=>{var i=e=>{try{s(n.next(e))}catch(t){a(t)}},r=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,r);s((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.dae358ad.js";import{_ as n}from"./BasicForm.a8faf294.js";import{u as o}from"./useTable.8258661b.js";import{_ as a,C as i,c as r,D as s}from"./ManagementModal.b57cb8be.js";import{_ as d}from"./PageWrapper.45340259.js";import{u as l}from"./useModal.36f6a78c.js";import{g as c}from"./useFunction.b08f7f7a.js";import{k as u,r as p,L as m,o as f,q as b,R as j,s as h,Y as g,Z as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.d1aaf8d6.js";import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a2743851.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";import"./usePageContext.e2293ccf.js";/* empty css              *//* empty css              */var x=u({name:"AccountManagement",components:{BasicTable:t,PageWrapper:d,ManagementModal:a,TableAction:n},setup(){const[t,{openModal:n}]=l(),[a,{reload:d,getSelectRows:u}]=o({title:"用户等级配置列表",api:i,columns:r,showTableSetting:!0,bordered:!0,canResize:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}}),m=p();return m.value=c(),{registerTable:a,registerModal:t,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(t){return e(this,null,(function*(){n(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){yield s({ids:t.id}),d()}))},handleSuccess:function(){d()},handleSelect:function(e=""){d({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=u(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield s({ids:t.join()}),d())}))},funcKeyArray:m}}});const C=y("新增用户等级配置"),M=y("批量删除");x.render=function(e,t,n,o,a,i){const r=m("a-button"),s=m("TableAction"),d=m("BasicTable"),l=m("ManagementModal"),c=m("PageWrapper");return f(),b(c,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[h(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:j((()=>[e.funcKeyArray.includes("add")?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:j((()=>[C])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(f(),b(r,{key:1,type:"primary",onClick:e.getSelectRowList},{default:j((()=>[M])),_:1},8,["onClick"])):g("",!0)])),action:j((({record:t})=>[h(s,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;
