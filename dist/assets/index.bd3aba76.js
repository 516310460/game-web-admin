var e=(e,o,t)=>new Promise(((i,n)=>{var r=e=>{try{a(t.next(e))}catch(o){n(o)}},s=e=>{try{a(t.throw(e))}catch(o){n(o)}},a=e=>e.done?i(e.value):Promise.resolve(e.value).then(r,s);a((t=t.apply(e,o)).next())}));import{_ as o}from"./TableImg.1cd23f27.js";import{_ as t}from"./BasicForm.d607c7a3.js";import{u as i}from"./useTable.ceae1622.js";import{G as n,D as r}from"./Role.6a81ca8b.js";import{u as s}from"./useModal.02fd9148.js";import{u as a}from"./useDrawer.f77d227d.js";import d from"./RoleModal.c4a72327.js";import l from"./RoleDrawer.bbd618c4.js";import{c}from"./role.data.3b92f357.js";import{k as u,L as m,o as p,q as f,s as b,R as j,Z as h}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a3e29c9f.js";import"./index.7fd854bf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.7e10c820.js";import"./useContextMenu.8cbb6d0a.js";var g=u({name:"RoleManagement",components:{BasicTable:o,RoleDrawer:l,TableAction:t,RoleModal:d},setup(){const[o,{openModal:t}]=s(),[d,{openDrawer:l}]=a(),[u,{reload:m,getSelectRows:p}]=i({title:"角色列表",api:n,columns:c,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0},rowSelection:{type:"checkbox"}});return{registerTable:u,registerDrawer:d,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(o){return e(this,null,(function*(){yield r({ids:o.id}),m()}))},handleSuccess:function(){m()},registerModal:o,getSelectRowList:function(){return e(this,null,(function*(){let e=p(),o=[];e.length&&(e.forEach((e=>{o.push(e.id)})),yield r({ids:o.join()}),m())}))},handleRoleEdit:function(e){l(!0,{record:e,isUpdate:!0})}}}});const x=h(" 新增角色 "),R=h("批量删除");g.render=function(e,o,t,i,n,r){const s=m("a-button"),a=m("TableAction"),d=m("BasicTable"),l=m("RoleDrawer"),c=m("RoleModal");return p(),f("div",null,[b(d,{onRegister:e.registerTable},{toolbar:j((()=>[b(s,{type:"primary",onClick:e.handleCreate},{default:j((()=>[x])),_:1},8,["onClick"]),b(s,{type:"primary",onClick:e.getSelectRowList},{default:j((()=>[R])),_:1},8,["onClick"])])),action:j((({record:o})=>[b(a,{actions:[{icon:"ant-design:setting-outlined",onClick:e.handleRoleEdit.bind(null,o)},{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),b(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
