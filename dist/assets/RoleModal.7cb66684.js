var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,t,o)=>new Promise(((r,i)=>{var s=e=>{try{n(o.next(e))}catch(t){i(t)}},a=e=>{try{n(o.throw(e))}catch(t){i(t)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,a);n((o=o.apply(e,t)).next())}));import{_ as a,b as n}from"./useModal.7df4099e.js";import{e as d}from"./BasicForm.ca329dfa.js";import{u as l}from"./useForm.a15aba3a.js";import{f as m}from"./role.data.3b92f357.js";import{U as c,A as p}from"./Role.baecf625.js";import{k as u,r as f,f as j,u as b,L as g,o as y,q as h,R as x,s as v,O as M}from"./vendor.c2cc062a.js";import"./index.b2f89009.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.509df665.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.22cf218c.js";import"./StrengthMeter.83930716.js";var O=u({name:"ManagementModal",components:{BasicModal:a,BasicForm:d},emits:["success","register"],setup(e,{emit:a}){const d=f(!0),[u,{setFieldsValue:g,updateSchema:y,resetFields:h,validate:x}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:M,closeModal:O}]=n((e=>s(this,null,(function*(){h(),M({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate),b(d)&&g(((e,s)=>{for(var a in s||(s={}))o.call(s,a)&&i(e,a,s[a]);if(t)for(var a of t(s))r.call(s,a)&&i(e,a,s[a]);return e})({},e.record))}))));return{registerModal:v,registerForm:u,getTitle:j((()=>b(d)?"编辑角色":"新增角色")),handleSubmit:function(){return s(this,null,(function*(){try{const e=yield x();M({confirmLoading:!0}),e.id?yield c(e):yield p(e),O(),a("success")}finally{M({confirmLoading:!1})}}))}}}});O.render=function(e,t,o,r,i,s){const a=g("BasicForm"),n=g("BasicModal");return y(),h(n,M(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:x((()=>[v(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default O;