var e=(e,t,n)=>new Promise(((o,i)=>{var a=e=>{try{s(n.next(e))}catch(t){i(t)}},r=e=>{try{s(n.throw(e))}catch(t){i(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.8cf081e8.js";import{_ as n}from"./BasicForm.dbc54f8f.js";import{u as o}from"./useTable.9d3026e5.js";import{_ as i,G as a,c as r,s,D as d}from"./ManagementModal.7388f5f3.js";import{_ as c}from"./PageWrapper.5e932ddb.js";import{u as l}from"./useModal.1e927a40.js";import{g as u}from"./useFunction.0b11d28b.js";import{k as m,r as p,L as f,o as b,q as j,R as h,s as g,Y as y,Z as x}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a1fbfd4e.js";import"./index.9345068b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.dbdac56c.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.de5ce37b.js";/* empty css              */import"./download.5e18ee04.js";import"./StrengthMeter.d3194e4f.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */var S=m({name:"AccountManagement",components:{BasicTable:t,PageWrapper:c,ManagementModal:i,TableAction:n},setup(){const[t,{openModal:n}]=l(),[i,{reload:c,getSelectRows:m}]=o({title:"咨询列表",api:a,columns:r,formConfig:{labelWidth:90,schemas:s},useSearchForm:!0,showTableSetting:!0,bordered:!0,canResize:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}}),f=p();return f.value=u(),{registerTable:i,registerModal:t,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(t){return e(this,null,(function*(){n(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){yield d({ids:t.id}),c()}))},handleSuccess:function(){c()},handleSelect:function(e=""){c({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=m(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield d({ids:t.join()}),c())}))},funcKeyArray:f}}});const C=x("新增咨询"),M=x("批量删除");S.render=function(e,t,n,o,i,a){const r=f("a-button"),s=f("TableAction"),d=f("BasicTable"),c=f("ManagementModal"),l=f("PageWrapper");return b(),j(l,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[g(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:h((()=>[e.funcKeyArray.includes("add")?(b(),j(r,{key:0,type:"primary",onClick:e.handleCreate},{default:h((()=>[C])),_:1},8,["onClick"])):y("",!0),e.funcKeyArray.includes("delete")?(b(),j(r,{key:1,type:"primary",onClick:e.getSelectRowList},{default:h((()=>[M])),_:1},8,["onClick"])):y("",!0)])),action:h((({record:t})=>[g(s,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default S;