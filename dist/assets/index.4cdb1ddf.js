var e=(e,o,t)=>new Promise(((n,i)=>{var r=e=>{try{a(t.next(e))}catch(o){i(o)}},s=e=>{try{a(t.throw(e))}catch(o){i(o)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,s);a((t=t.apply(e,o)).next())}));import{_ as o}from"./TableImg.1cd23f27.js";import{_ as t}from"./BasicForm.d607c7a3.js";import{u as n}from"./useTable.ceae1622.js";import{G as i,D as r}from"./AdminMenu.af0ff6ab.js";import{u as s}from"./useModal.02fd9148.js";import{u as a}from"./useDrawer.f77d227d.js";import d from"./MenuModal.d7da32ef.js";import c from"./MenuDrawer.a3947238.js";import{c as l}from"./menu.data.466dec74.js";import{k as u,L as m,o as p,q as f,s as j,R as b,Z as h}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a3e29c9f.js";import"./index.7fd854bf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";/* empty css              */import"./system.05a9827e.js";var g=u({name:"MenuManagement",components:{BasicTable:o,MenuDrawer:c,TableAction:t,MenuModal:d},setup(){const[o,{openModal:t}]=s(),[d,{openDrawer:c}]=a(),[u,{reload:m,getSelectRows:p}]=n({title:"菜单列表",api:i,columns:l,pagination:!1,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0},rowSelection:{type:"checkbox"}});return{registerTable:u,registerDrawer:d,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(o){return e(this,null,(function*(){yield r({ids:o.id}),m()}))},handleSuccess:function(){m()},getSelectRowList:function(){return e(this,null,(function*(){let e=p(),o=[];e.length&&(e.forEach((e=>{o.push(e.id)})),yield r({ids:o.join()}),m())}))},registerModal:o}}});const x=h(" 新增菜单 "),w=h("批量删除");g.render=function(e,o,t,n,i,r){const s=m("a-button"),a=m("TableAction"),d=m("BasicTable"),c=m("MenuDrawer"),l=m("MenuModal");return p(),f("div",null,[j(d,{onRegister:e.registerTable},{toolbar:b((()=>[j(s,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"]),j(s,{type:"primary",onClick:e.getSelectRowList},{default:b((()=>[w])),_:1},8,["onClick"])])),action:b((({record:o})=>[j(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),j(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default g;
