var e,a,r=(e,a,r)=>new Promise(((t,o)=>{var n=e=>{try{i(r.next(e))}catch(a){o(a)}},s=e=>{try{i(r.throw(e))}catch(a){o(a)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,s);i((r=r.apply(e,a)).next())}));import{_ as t}from"./TableImg.64a40dd3.js";import{_ as o}from"./BasicForm.15159022.js";import{u as n}from"./useTable.b1d12c6f.js";import{aA as s}from"./index.e2f8dfb6.js";import{_ as i}from"./PageWrapper.304283c7.js";import{u as d}from"./useModal.df8770e7.js";import{_ as c,c as l,s as m}from"./ManagementModal.fd407c72.js";import{g as p}from"./useFunction.14dfe9fd.js";import{k as u,r as f,L as j,o as b,q as g,R as M,s as h}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.096e68f4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.584897bb.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d437ddc4.js";/* empty css              */import"./download.bc82a2de.js";import"./StrengthMeter.48e5d163.js";import"./usePageContext.e3c0a1fa.js";/* empty css              *//* empty css              */import"./CcTradePair.d3f74fba.js";(a=e||(e={})).flowRecordQuery="/admin/flowRecord/flowRecordQuery",a.GetMarketCoin="/Manager/CcMarketCoin/GetMarketCoin",a.AddMarketCoin="/admin/banner/addFile",a.UpdateMarketCoin="/admin/banner/updGame",a.DeleteMarketCoin="/Manager/banner/delBanner";const x=a=>s.post({url:e.flowRecordQuery,params:a});var C=u({name:"AccountManagement",components:{BasicTable:t,PageWrapper:i,ManagementModal:c,TableAction:o},setup(){const[e,{openModal:a}]=d(),[t,{reload:o,getSelectRows:s}]=n({title:"流水记录列表",api:x,columns:l,formConfig:{labelWidth:80,schemas:m},useSearchForm:!0,showTableSetting:!0,bordered:!0,canResize:!0}),i=f();return i.value=p(),{registerTable:t,registerModal:e,handleCreate:function(){a(!0,{isUpdate:!1})},handleEdit:function(e){return r(this,null,(function*(){a(!0,{record:e,isUpdate:!0})}))},handleDelete:function(e){return r(this,null,(function*(){yield DeleteTradePairApi({ids:e.id}),o()}))},handleSuccess:function(){o()},handleSelect:function(e=""){o({searchInfo:{deptId:e}})},funcKeyArray:i}}});C.render=function(e,a,r,t,o,n){const s=j("BasicTable"),i=j("ManagementModal"),d=j("PageWrapper");return b(),g(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:M((()=>[h(s,{onRegister:e.registerTable,class:"w-full"},null,8,["onRegister"]),h(i,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default C;
