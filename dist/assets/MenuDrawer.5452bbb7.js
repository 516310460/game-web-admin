var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,i=(e,r,t)=>new Promise(((o,s)=>{var i=e=>{try{n(t.next(e))}catch(r){s(r)}},a=e=>{try{n(t.throw(e))}catch(r){s(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,a);n((t=t.apply(e,r)).next())}));import{e as a}from"./BasicForm.38d01207.js";import{u as n}from"./useForm.2cb2fa07.js";import{f as d}from"./menu.data.c81de5a7.js";import{_ as m,a as c}from"./useDrawer.4dfb2392.js";import{a as l}from"./system.392fdc54.js";import{k as p,r as u,f,u as j,L as b,o as w,q as g,R as h,s as x,O as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c6214277.js";import"./CountdownInput.878120c8.js";/* empty css              */import"./useModal.5420dac5.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.40a24583.js";import"./StrengthMeter.fed7f1db.js";/* empty css              */var v=p({name:"MenuDrawer",components:{BasicDrawer:m,BasicForm:a},emits:["success","register"],setup(e,{emit:a}){const m=u(!0),[p,{resetFields:b,setFieldsValue:w,updateSchema:g,validate:h}]=n({labelWidth:100,schemas:d,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[x,{setDrawerProps:y,closeDrawer:v}]=c((e=>i(this,null,(function*(){b(),y({confirmLoading:!1}),m.value=!!(null==e?void 0:e.isUpdate),j(m)&&w(((e,i)=>{for(var a in i||(i={}))t.call(i,a)&&s(e,a,i[a]);if(r)for(var a of r(i))o.call(i,a)&&s(e,a,i[a]);return e})({},e.record));const i=yield l();g({field:"parentMenu",componentProps:{treeData:i}})}))));return{registerDrawer:x,registerForm:p,getTitle:f((()=>j(m)?"编辑菜单":"新增菜单")),handleSubmit:function(){return i(this,null,(function*(){try{yield h();y({confirmLoading:!0}),v(),a("success")}finally{y({confirmLoading:!1})}}))}}}});v.render=function(e,r,t,o,s,i){const a=b("BasicForm"),n=b("BasicDrawer");return w(),g(n,y(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:h((()=>[x(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default v;
