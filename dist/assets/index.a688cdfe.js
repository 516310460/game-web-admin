var e=(e,t,o)=>new Promise(((n,a)=>{var r=e=>{try{i(o.next(e))}catch(t){a(t)}},s=e=>{try{i(o.throw(e))}catch(t){a(t)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,s);i((o=o.apply(e,t)).next())}));import{_ as t}from"./TableImg.dae358ad.js";import{_ as o}from"./BasicForm.a8faf294.js";import{u as n}from"./useTable.8258661b.js";import{n as a}from"./SysCountryConf.ca9703c3.js";import{_ as r}from"./PageWrapper.45340259.js";import{u as s}from"./useModal.36f6a78c.js";import{_ as i,c,s as d}from"./ManagementModal.8b77d60c.js";import{g as l}from"./useFunction.b08f7f7a.js";import{k as m,r as u,L as p,o as f,q as j,R as b,s as h}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.d1aaf8d6.js";import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.a2743851.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";import"./usePageContext.e2293ccf.js";/* empty css              *//* empty css              */import"./CcMarketCoin.89c0485a.js";var g=m({name:"AccountManagement",components:{BasicTable:t,PageWrapper:r,ManagementModal:i,TableAction:o},setup(){const[t,{openModal:o}]=s(),[r,{reload:i,getSelectRows:m}]=n({title:"用户节点列表",api:a,columns:c,formConfig:{labelWidth:80,schemas:d},useSearchForm:!0,showTableSetting:!0,bordered:!0,canResize:!0,rowSelection:{type:"checkbox"}}),p=u();return p.value=l(),{registerTable:r,registerModal:t,handleCreate:function(){o(!0,{isUpdate:!1})},handleFinish:function(t){return e(this,null,(function*(){i()}))},handleEdit:function(t){return e(this,null,(function*(){o(!0,{record:t,isUpdate:!0})}))},handleDelete:function(t){return e(this,null,(function*(){i()}))},handleSuccess:function(){i()},handleSelect:function(e=""){i({searchInfo:{deptId:e}})},getSelectRowList:function(){return e(this,null,(function*(){let e=m(),t=[];e.length&&(e.forEach((e=>{t.push(e.id)})),i())}))},funcKeyArray:p}}});g.render=function(e,t,o,n,a,r){const s=p("TableAction"),i=p("BasicTable"),c=p("ManagementModal"),d=p("PageWrapper");return f(),j(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:b((()=>[h(i,{onRegister:e.registerTable,class:"w-full"},{toolbar:b((()=>[])),action:b((({record:e})=>[h(s)])),_:1},8,["onRegister"]),h(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default g;
