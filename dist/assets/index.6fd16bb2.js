var e=(e,o,t)=>new Promise(((n,i)=>{var r=e=>{try{a(t.next(e))}catch(o){i(o)}},s=e=>{try{a(t.throw(e))}catch(o){i(o)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,s);a((t=t.apply(e,o)).next())}));import{_ as o}from"./TableImg.0c51c512.js";import{_ as t}from"./BasicForm.8e90ec53.js";import{u as n}from"./useTable.3e063f3c.js";import{G as i,D as r}from"./Role.ff2f178f.js";import{u as s}from"./useModal.12b3f90b.js";import{u as a}from"./useDrawer.5d71dfb3.js";import l from"./RoleModal.bf35eabd.js";import d from"./RoleDrawer.186afb0a.js";import{c}from"./role.data.3b92f357.js";import{g as u}from"./useFunction.5d1f127b.js";import{k as m,r as f,L as p,o as b,q as j,s as h,R as y,Y as g,Z as x}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.7928c7de.js";import"./index.bb679890.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.681260db.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.e4cbe0bf.js";/* empty css              */import"./download.4785010f.js";import"./StrengthMeter.746aa9fe.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.ba1dc8f4.js";import"./useContextMenu.9db54f4e.js";var R=m({name:"RoleManagement",components:{BasicTable:o,RoleDrawer:d,TableAction:t,RoleModal:l},setup(){const[o,{openModal:t}]=s(),[l,{openDrawer:d}]=a(),[m,{reload:p,getSelectRows:b}]=n({title:"角色列表",api:i,columns:c,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0},rowSelection:{type:"checkbox"}}),j=f();return j.value=u(),{registerTable:m,registerDrawer:l,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(o){return e(this,null,(function*(){yield r({ids:o.id}),p()}))},handleSuccess:function(){p()},registerModal:o,getSelectRowList:function(){return e(this,null,(function*(){let e=b(),o=[];e.length&&(e.forEach((e=>{o.push(e.id)})),yield r({ids:o.join()}),p())}))},handleRoleEdit:function(e){d(!0,{record:e,isUpdate:!0})},funcKeyArray:j}}});const w=x(" 新增角色 "),S=x("批量删除");R.render=function(e,o,t,n,i,r){const s=p("a-button"),a=p("TableAction"),l=p("BasicTable"),d=p("RoleDrawer"),c=p("RoleModal");return b(),j("div",null,[h(l,{onRegister:e.registerTable,class:"w-full"},{toolbar:y((()=>[e.funcKeyArray.includes("add")?(b(),j(s,{key:0,type:"primary",onClick:e.handleCreate},{default:y((()=>[w])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(b(),j(s,{key:1,type:"primary",onClick:e.getSelectRowList},{default:y((()=>[S])),_:1},8,["onClick"])):g("",!0)])),action:y((({record:o})=>[h(a,{actions:[{icon:"ant-design:setting-outlined",auth:!e.funcKeyArray.includes("assignPermissions"),onClick:e.handleRoleEdit.bind(null,o)},{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(d,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),h(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default R;