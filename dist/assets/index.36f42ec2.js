var e=(e,t,n)=>new Promise(((o,a)=>{var i=e=>{try{s(n.next(e))}catch(t){a(t)}},r=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,r);s((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.8758a9f1.js";import{_ as n}from"./BasicForm.bc9b6534.js";import{u as o}from"./useTable.89bd9759.js";import{_ as a,C as i,c as r,D as s}from"./ManagementModal.26d6b9d1.js";import{_ as d}from"./PageWrapper.cda93d24.js";import{u as c}from"./useModal.c504d6c8.js";import{g as l}from"./useFunction.e7e8e1d0.js";import{k as u,r as m,L as p,o as f,q as b,R as j,s as g,Y as h,Z as x}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.bb6b5609.js";import"./index.2d95079e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a844fca0.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.16091f62.js";/* empty css              */import"./download.7f173743.js";import"./StrengthMeter.36cdf8aa.js";import"./usePageContext.f919706d.js";/* empty css              *//* empty css              */var y=u({name:"AccountManagement",components:{BasicTable:t,PageWrapper:d,ManagementModal:a,TableAction:n},setup(){const[t,{openModal:n}]=c(),[a,{reload:d,getSelectRows:u}]=o({title:"Banner列表",api:i,columns:r,showTableSetting:!0,bordered:!0,canResize:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}}),p=m();return p.value=l(),{registerTable:a,registerModal:t,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(t){return e(this,null,(function*(){n(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){yield s({ids:t.id}),d()}))},handleSuccess:function(){d()},handleSelect:function(e=""){d({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=u(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield s({ids:t.join()}),d())}))},funcKeyArray:p}}});const M=x("新增Banner"),S=x("批量删除");y.render=function(e,t,n,o,a,i){const r=p("a-button"),s=p("TableAction"),d=p("BasicTable"),c=p("ManagementModal"),l=p("PageWrapper");return f(),b(l,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[g(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:j((()=>[e.funcKeyArray.includes("add")?(f(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:j((()=>[M])),_:1},8,["onClick"])):h("",!0),e.funcKeyArray.includes("delete")?(f(),b(r,{key:1,type:"primary",onClick:e.getSelectRowList},{default:j((()=>[S])),_:1},8,["onClick"])):h("",!0)])),action:j((({record:t})=>[g(s,{actions:[{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default y;
