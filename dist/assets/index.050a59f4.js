var e=(e,t,n)=>new Promise(((o,r)=>{var i=e=>{try{a(n.next(e))}catch(t){r(t)}},s=e=>{try{a(n.throw(e))}catch(t){r(t)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,s);a((n=n.apply(e,t)).next())}));import{_ as t}from"./TableImg.a09cea30.js";import{_ as n}from"./BasicForm.18e1e5ca.js";import{u as o}from"./useTable.6872d086.js";import{G as r,D as i}from"./AdminMenu.894984f2.js";import{u as s}from"./useModal.358fc689.js";import{u as a}from"./useDrawer.76767613.js";import d from"./MenuModal.8dee06a0.js";import c from"./MenuDrawer.bd23c6fe.js";import{c as l}from"./menu.data.466dec74.js";import{g as u}from"./useFunction.3f594258.js";import{k as m,r as p,L as f,o as j,q as b,s as h,R as y,Y as g,Z as w}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.0814b38b.js";import"./index.14da3ba2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2a928955.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.04afd40e.js";/* empty css              */import"./download.2b7520e5.js";import"./StrengthMeter.8ce129a6.js";/* empty css              */import"./system.732c06c3.js";var x=m({name:"MenuManagement",components:{BasicTable:t,MenuDrawer:c,TableAction:n,MenuModal:d},setup(){const[t,{openModal:n}]=s(),[d,{openDrawer:c}]=a(),[m,{reload:f,getSelectRows:j}]=o({title:"菜单列表",api:r,columns:l,pagination:!1,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0},rowSelection:{type:"checkbox"}}),b=p();return b.value=u(),{registerTable:m,registerDrawer:d,handleCreate:function(){n(!0,{isUpdate:!1})},handleEdit:function(e){n(!0,{record:e,isUpdate:!0})},handleDelete:function(t){return e(this,null,(function*(){yield i({ids:t.id}),f()}))},handleSuccess:function(){f()},getSelectRowList:function(){return e(this,null,(function*(){let e=j(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),yield i({ids:t.join()}),f())}))},registerModal:t,funcKeyArray:b}}});const M=w(" 新增菜单 "),S=w("批量删除");x.render=function(e,t,n,o,r,i){const s=f("a-button"),a=f("TableAction"),d=f("BasicTable"),c=f("MenuDrawer"),l=f("MenuModal");return j(),b("div",null,[h(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:y((()=>[e.funcKeyArray.includes("add")?(j(),b(s,{key:0,type:"primary",onClick:e.handleCreate},{default:y((()=>[M])),_:1},8,["onClick"])):g("",!0),e.funcKeyArray.includes("delete")?(j(),b(s,{key:1,type:"primary",onClick:e.getSelectRowList},{default:y((()=>[S])),_:1},8,["onClick"])):g("",!0)])),action:y((({record:t})=>[h(a,{actions:[{icon:"clarity:note-edit-line",auth:!e.funcKeyArray.includes("update"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",auth:!e.funcKeyArray.includes("delete"),popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(c,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;