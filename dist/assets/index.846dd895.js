var e=(e,t,o)=>new Promise(((n,r)=>{var s=e=>{try{i(o.next(e))}catch(t){r(t)}},a=e=>{try{i(o.throw(e))}catch(t){r(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);i((o=o.apply(e,t)).next())}));import{_ as t}from"./TableImg.8cf081e8.js";import{_ as o}from"./BasicForm.dbc54f8f.js";import{u as n}from"./useTable.9d3026e5.js";import{n as r}from"./SysCountryConf.b2bfe982.js";import{_ as s}from"./PageWrapper.5e932ddb.js";import{u as a}from"./useModal.1e927a40.js";import{_ as i,c,s as d}from"./ManagementModal.5efcb06f.js";import{g as l}from"./useFunction.0b11d28b.js";import{k as m,r as u,L as p,o as f,q as b,R as j,s as h}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a1fbfd4e.js";import"./index.9345068b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.dbdac56c.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.de5ce37b.js";/* empty css              */import"./download.5e18ee04.js";import"./StrengthMeter.d3194e4f.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./CcMarketCoin.5cc3e283.js";var g=m({name:"AccountManagement",components:{BasicTable:t,PageWrapper:s,ManagementModal:i,TableAction:o},setup(){const[t,{openModal:o}]=a(),[s,{reload:i,getSelectRows:m}]=n({title:"用户节点列表",api:r,columns:c,formConfig:{labelWidth:80,schemas:d},useSearchForm:!0,showTableSetting:!0,bordered:!0,canResize:!0,rowSelection:{type:"checkbox"}}),p=u();return p.value=l(),{registerTable:s,registerModal:t,handleCreate:function(){o(!0,{isUpdate:!1})},handleFinish:function(t){return e(this,null,(function*(){i()}))},handleEdit:function(t){return e(this,null,(function*(){o(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){i()}))},handleSuccess:function(){i()},handleSelect:function(e=""){i({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=m(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),i())}))},funcKeyArray:p}}});g.render=function(e,t,o,n,r,s){const a=p("TableAction"),i=p("BasicTable"),c=p("ManagementModal"),d=p("PageWrapper");return f(),b(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[h(i,{onRegister:e.registerTable,class:"w-full"},{toolbar:j((()=>[])),action:j((({record:e})=>[h(a)])),_:1},8,["onRegister"]),h(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default g;