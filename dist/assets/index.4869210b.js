var e=(e,t,n)=>new Promise(((o,i)=>{var a=e=>{try{s(n.next(e))}catch(t){i(t)}},r=e=>{try{s(n.throw(e))}catch(t){i(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.64a40dd3.js";import{_ as n}from"./BasicForm.15159022.js";import{u as o}from"./useTable.b1d12c6f.js";import{G as i,D as a}from"./CcTradePair.d3f74fba.js";import{_ as r}from"./PageWrapper.304283c7.js";import{u as s}from"./useModal.df8770e7.js";import{_ as d,c}from"./ManagementModal.3d41bcf0.js";import{g as l}from"./useFunction.14dfe9fd.js";import{k as u,r as m,L as p,o as f,q as b,R as j,s as h,Y as g,Z as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.096e68f4.js";import"./index.e2f8dfb6.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.584897bb.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d437ddc4.js";/* empty css              */import"./download.bc82a2de.js";import"./StrengthMeter.48e5d163.js";import"./usePageContext.e3c0a1fa.js";/* empty css              *//* empty css              */var x=u({name:"AccountManagement",components:{BasicTable:t,PageWrapper:r,ManagementModal:d,TableAction:n},setup(){const[t,{openModal:n}]=s(),[r,{reload:d,getSelectRows:u}]=o({title:"矿机列表",api:i,columns:c,showTableSetting:!0,bordered:!0,canResize:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}}),p=m();return p.value=l(),{registerTable:r,registerModal:t,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(t){return e(this,null,(function*(){n(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){yield a({ids:t.id}),d()}))},handleSuccess:function(){d()},handleSelect:function(e=""){d({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=u(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield a({ids:t.join()}),d())}))},funcKeyArray:p}}});const C=y("新增矿机"),M=y("批量删除");x.render=function(e,t,n,o,i,a){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),c=p("ManagementModal"),l=p("PageWrapper");return f(),b(l,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[h(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:j((()=>[e.funcKeyArray.includes("add")?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:j((()=>[C])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(f(),b(r,{key:1,type:"primary",onClick:e.getSelectRowList},{default:j((()=>[M])),_:1},8,["onClick"])):g("",!0)])),action:j((({record:t})=>[h(s,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;
