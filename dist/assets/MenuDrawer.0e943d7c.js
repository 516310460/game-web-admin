var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,a=(e,r,t)=>new Promise(((o,s)=>{var a=e=>{try{n(t.next(e))}catch(r){s(r)}},i=e=>{try{n(t.throw(e))}catch(r){s(r)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,i);n((t=t.apply(e,r)).next())}));import{e as i}from"./BasicForm.a8faf294.js";import{u as n}from"./useForm.d1aaf8d6.js";import{f as m}from"./menu.data.a0045539.js";import{_ as d,a as p}from"./useDrawer.166a9d40.js";import{a as c}from"./system.a51e8aa0.js";import{k as l,r as u,f,u as j,L as b,o as w,q as g,R as h,s as x,O as y}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.05b44a3f.js";import"./CountdownInput.5b96436a.js";/* empty css              */import"./useModal.36f6a78c.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";import"./AdminMenu.670c71a3.js";/* empty css              */var v=l({name:"MenuDrawer",components:{BasicDrawer:d,BasicForm:i},emits:["success","register"],setup(e,{emit:i}){const d=u(!0),[l,{resetFields:b,setFieldsValue:w,updateSchema:g,validate:h}]=n({labelWidth:100,schemas:m,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[x,{setDrawerProps:y,closeDrawer:v}]=p((e=>a(this,null,(function*(){b(),y({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),j(d)&&w(((e,a)=>{for(var i in a||(a={}))t.call(a,i)&&s(e,i,a[i]);if(r)for(var i of r(a))o.call(a,i)&&s(e,i,a[i]);return e})({},e.record));const a=yield c();g({field:"parentMenu",componentProps:{treeData:a}})}))));return{registerDrawer:x,registerForm:l,getTitle:f((()=>j(d)?"编辑菜单":"新增菜单")),handleSubmit:function(){return a(this,null,(function*(){try{yield h();y({confirmLoading:!0}),v(),i("success")}finally{y({confirmLoading:!1})}}))}}}});v.render=function(e,r,t,o,s,a){const i=b("BasicForm"),n=b("BasicDrawer");return w(),g(n,y(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:h((()=>[x(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default v;
