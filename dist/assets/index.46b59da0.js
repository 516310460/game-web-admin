import{_ as e}from"./TableImg.52a5f566.js";import{_ as o}from"./BasicForm.ca329dfa.js";import{u as t}from"./useTable.12958ecc.js";import{g as n}from"./system.95fe5f0f.js";import{u as i}from"./useModal.7df4099e.js";import{_ as a,c as s,s as r}from"./DeptModal.3e4689fa.js";import{k as d,L as l,o as c,q as m,s as p,R as u,Z as f}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a15aba3a.js";import"./index.b2f89009.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.3e0e9015.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.509df665.js";/* empty css              */import"./download.22cf218c.js";import"./StrengthMeter.83930716.js";var b=d({name:"DeptManagement",components:{BasicTable:e,DeptModal:a,TableAction:o},setup(){const[e,{openModal:o}]=i(),[a,{reload:d}]=t({title:"部门列表",api:n,columns:s,formConfig:{labelWidth:120,schemas:r},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:a,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return o=this,t=null,n=function*(){},new Promise(((e,i)=>{var a=e=>{try{r(n.next(e))}catch(o){i(o)}},s=e=>{try{r(n.throw(e))}catch(o){i(o)}},r=o=>o.done?e(o.value):Promise.resolve(o.value).then(a,s);r((n=n.apply(o,t)).next())}));var o,t,n},handleSuccess:function(){d()}}}});const j=f(" 新增部门 ");b.render=function(e,o,t,n,i,a){const s=l("a-button"),r=l("TableAction"),d=l("BasicTable"),f=l("DeptModal");return c(),m("div",null,[p(d,{onRegister:e.registerTable,class:"w-full"},{toolbar:u((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:u((()=>[j])),_:1},8,["onClick"])])),action:u((({record:o})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
