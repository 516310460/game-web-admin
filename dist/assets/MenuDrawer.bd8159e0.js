var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,i=(e,r,t)=>new Promise(((o,s)=>{var i=e=>{try{n(t.next(e))}catch(r){s(r)}},a=e=>{try{n(t.throw(e))}catch(r){s(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,a);n((t=t.apply(e,r)).next())}));import{e as a}from"./BasicForm.8e90ec53.js";import{u as n}from"./useForm.7928c7de.js";import{f as m}from"./menu.data.c81de5a7.js";import{_ as d,a as c}from"./useDrawer.5d71dfb3.js";import{a as l}from"./system.61671e44.js";import{k as p,r as u,f,u as b,L as j,o as w,q as g,R as h,s as x,O as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.bb679890.js";import"./CountdownInput.e4cbe0bf.js";/* empty css              */import"./useModal.12b3f90b.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.4785010f.js";import"./StrengthMeter.746aa9fe.js";/* empty css              */var v=p({name:"MenuDrawer",components:{BasicDrawer:d,BasicForm:a},emits:["success","register"],setup(e,{emit:a}){const d=u(!0),[p,{resetFields:j,setFieldsValue:w,updateSchema:g,validate:h}]=n({labelWidth:100,schemas:m,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[x,{setDrawerProps:y,closeDrawer:v}]=c((e=>i(this,null,(function*(){j(),y({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),b(d)&&w(((e,i)=>{for(var a in i||(i={}))t.call(i,a)&&s(e,a,i[a]);if(r)for(var a of r(i))o.call(i,a)&&s(e,a,i[a]);return e})({},e.record));const i=yield l();g({field:"parentMenu",componentProps:{treeData:i}})}))));return{registerDrawer:x,registerForm:p,getTitle:f((()=>b(d)?"编辑菜单":"新增菜单")),handleSubmit:function(){return i(this,null,(function*(){try{yield h();y({confirmLoading:!0}),v(),a("success")}finally{y({confirmLoading:!1})}}))}}}});v.render=function(e,r,t,o,s,i){const a=j("BasicForm"),n=j("BasicDrawer");return w(),g(n,y(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:h((()=>[x(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default v;