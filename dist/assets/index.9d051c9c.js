var e=(e,t,a)=>new Promise(((n,l)=>{var o=e=>{try{s(a.next(e))}catch(t){l(t)}},i=e=>{try{s(a.throw(e))}catch(t){l(t)}},s=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,t)).next())}));import{_ as t}from"./TableImg.a09cea30.js";import{_ as a}from"./BasicForm.18e1e5ca.js";import{u as n}from"./useTable.6872d086.js";import{b as l,u as o}from"./system.732c06c3.js";import{_ as i}from"./PageWrapper.940fdd9a.js";import s from"./DeptTree.11db066f.js";import{u as d}from"./useModal.358fc689.js";import r from"./AccountModal.789653cc.js";import{g as u}from"./useFunction.3f594258.js";import{k as c,r as m,L as p,o as b,q as f,R as v,s as j}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.0814b38b.js";import"./index.14da3ba2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2a928955.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.04afd40e.js";/* empty css              */import"./download.2b7520e5.js";import"./StrengthMeter.8ce129a6.js";import"./usePageContext.a26dede6.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.d1a05f50.js";import"./useContextMenu.dcaabdcb.js";const x=[{title:"ID",dataIndex:"id"},{title:"父级ID",dataIndex:"pid"},{title:"用户名",dataIndex:"userName"},{title:"角色名称",dataIndex:"nickName"},{title:"用户级别",dataIndex:"level",editRow:!0},{title:"矿机销售级别",dataIndex:"saleLevel",editRow:!0},{title:"助记词",dataIndex:"mnemonic"},{title:"状态",dataIndex:"state",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"正常",value:"normal"},{label:"锁定",value:"locked"},{label:"暂停提币",value:"forbid"}]}},{title:"创建时间",dataIndex:"createTime"}],g=[{field:"userName",label:"用户名",component:"Input",colProps:{span:8}}];var h=c({name:"AccountManagement",components:{BasicTable:t,PageWrapper:i,DeptTree:s,AccountModal:r,TableAction:a},setup(){const t=m(""),[a,{openModal:i}]=d(),[s,{reload:r}]=n({title:"用户列表",api:l,columns:x,formConfig:{labelWidth:80,schemas:g},showIndexColumn:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:220,title:"操作",dataIndex:"action",slots:{customRender:"action"}}}),c=m();function p(e){var a;t.value=e.key,null==(a=e.onEdit)||a.call(e,!0)}function b(e){var a;t.value="",null==(a=e.onEdit)||a.call(e,!1,!1)}function f(a){return e(this,null,(function*(){var e;(yield null==(e=a.onEdit)?void 0:e.call(a,!1,!0))&&(t.value="",yield o({id:a.id,level:a.level,saleLevel:a.saleLevel,state:a.state}))}))}function v(e,t){i(!0,{record:e,isUpdate:1!=t,type:t})}return c.value=u(),{registerTable:s,registerModal:a,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:p,handleDelete:function(t){return e(this,null,(function*(){}))},handleSuccess:function(){r()},handleSelect:function(e=""){r({searchInfo:{deptId:e}})},createActions:function(e,a){return e.editable?[{label:"保存",onClick:f.bind(null,e,a)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:b.bind(null,e,a)}}]:[{label:"编辑",disabled:!(!t.value&&c.value.includes("update"))&&t.value!==e.key,auth:!c.value.includes("update"),onClick:p.bind(null,e)},{label:"查上级",disabled:!(!t.value&&c.value.includes("getSuperior"))&&t.value!==e.key,auth:!c.value.includes("getSuperior"),onClick:v.bind(null,e,1)},{label:"查下级",disabled:!(!t.value&&c.value.includes("getSubordinate"))&&t.value!==e.key,auth:!c.value.includes("getSubordinate"),onClick:v.bind(null,e,2)}]},funcKeyArray:c}}});h.render=function(e,t,a,n,l,o){const i=p("TableAction"),s=p("BasicTable"),d=p("AccountModal"),r=p("PageWrapper");return b(),f(r,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:v((()=>[j(s,{onRegister:e.registerTable,class:"w-full xl:w-full"},{action:v((({record:t,column:a})=>[j(i,{actions:e.createActions(t,a)},null,8,["actions"])])),_:1},8,["onRegister"]),j(d,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default h;