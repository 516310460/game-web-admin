var e=(e,t,n)=>new Promise(((o,r)=>{var i=e=>{try{a(n.next(e))}catch(t){r(t)}},s=e=>{try{a(n.throw(e))}catch(t){r(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,s);a((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.64a40dd3.js";import{_ as n}from"./BasicForm.15159022.js";import{u as o}from"./useTable.b1d12c6f.js";import{_ as r,G as i,D as s}from"./MenuModal.b539d2a9.js";import{u as a}from"./useModal.df8770e7.js";import{u as d}from"./useDrawer.e67ddabc.js";import c from"./MenuDrawer.d5b0f82c.js";import{c as l}from"./menu.data.7551a560.js";import{g as u}from"./useFunction.14dfe9fd.js";import{k as m,r as p,L as f,o as b,q as j,s as h,R as y,Y as g,Z as w}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.096e68f4.js";import"./index.e2f8dfb6.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.584897bb.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d437ddc4.js";/* empty css              */import"./download.bc82a2de.js";import"./StrengthMeter.48e5d163.js";/* empty css              */import"./system.d6ec51a5.js";import"./AdminMenu.3b394a6c.js";var x=m({name:"MenuManagement",components:{BasicTable:t,MenuDrawer:c,TableAction:n,MenuModal:r},setup(){const[t,{openModal:n}]=a(),[r,{openDrawer:c}]=d(),[m,{reload:f,getSelectRows:b}]=o({title:"菜单功能列表",api:i,columns:l,pagination:!1,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0},rowSelection:{type:"checkbox"}}),j=p();return j.value=u(),{registerTable:m,registerDrawer:r,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(e){n(!0,{record:e,isUpdate:!0})},handleDelete:function(t){return e(this,null,(function*(){yield s({ids:t.id}),f()}))},handleSuccess:function(){f()},getSelectRowList:function(){return e(this,null,(function*(){let e=b(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield s({ids:t.join()}),f())}))},registerModal:t,funcKeyArray:j}}});const M=w(" 新增菜单功能 "),S=w("批量删除");x.render=function(e,t,n,o,r,i){const s=f("a-button"),a=f("TableAction"),d=f("BasicTable"),c=f("MenuDrawer"),l=f("MenuModal");return b(),j("div",null,[h(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:y((()=>[e.funcKeyArray.includes("add")?(b(),j(s,{key:0,type:"primary",onClick:e.handleCreate},{default:y((()=>[M])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(b(),j(s,{key:1,type:"primary",onClick:e.getSelectRowList},{default:y((()=>[S])),_:1},8,["onClick"])):g("",!0)])),action:y((({record:t})=>[h(a,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
