var e,t,o=Object.defineProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t,o)=>new Promise(((r,a)=>{var s=e=>{try{l(o.next(e))}catch(t){a(t)}},n=e=>{try{l(o.throw(e))}catch(t){a(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);l((o=o.apply(e,t)).next())}));import{_ as i,b as d}from"./useModal.b188c2e0.js";import{e as c}from"./BasicForm.7d27c2f1.js";import{u as m}from"./useForm.abe4b088.js";import{f as u}from"./menu.data.c81de5a7.js";import{aA as p}from"./index.3df22268.js";import{k as f,r as g,f as y,u as b,L as M,o as v,q as R,R as h,s as j,O}from"./vendor.c2cc062a.js";(t=e||(e={})).GetRolePage="/admin/syscfg/list",t.AddRole="/admin/syscfg/add",t.GetRole="/admin/syscfg/GetRole",t.UpdateRole="/admin/syscfg/update",t.DeleteRole="/admin/syscfg/delete";const F=t=>p.post({url:e.GetRolePage});var P=f({name:"ManagementModal",components:{BasicModal:i,BasicForm:c},emits:["success","register"],setup(t,{emit:o}){const i=g(!0),[c,{setFieldsValue:f,updateSchema:M,resetFields:v,validate:R}]=m({labelWidth:100,schemas:u,showActionButtonGroup:!1,actionColOptions:{span:23}}),[h,{setModalProps:j,closeModal:O}]=d((e=>l(this,null,(function*(){v(),j({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),b(i)&&f(((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))s.call(t,o)&&n(e,o,t[o]);return e})({},e.record))}))));return{registerModal:h,registerForm:c,getTitle:y((()=>b(i)?"编辑系统配置":"新增系统配置")),handleSubmit:function(){return l(this,null,(function*(){try{const t=yield R();j({confirmLoading:!0}),t.id?yield function(t,o="modal"){return p.post({url:e.UpdateRole,params:t},{errorMessageMode:o})}(t):yield function(t,o="modal"){return p.post({url:e.AddRole,params:t},{errorMessageMode:o})}(t),O(),o("success")}finally{j({confirmLoading:!1})}}))}}}});P.render=function(e,t,o,r,a,s){const n=M("BasicForm"),l=M("BasicModal");return v(),R(l,O(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:h((()=>[j(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});export{F as G,_ as M,P as _};