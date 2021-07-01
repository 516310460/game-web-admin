var e,t,o=Object.defineProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t,o)=>new Promise(((r,a)=>{var n=e=>{try{i(o.next(e))}catch(t){a(t)}},s=e=>{try{i(o.throw(e))}catch(t){a(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(n,s);i((o=o.apply(e,t)).next())}));import{_ as l,b as d}from"./useModal.5420dac5.js";import{e as u}from"./BasicForm.38d01207.js";import{u as c}from"./useForm.2cb2fa07.js";import{f as m}from"./menu.data.e28a6e3d.js";import{aA as f}from"./index.c6214277.js";import{k as p,r as g,f as M,u as y,L as b,o as v,q as h,R,s as P,O as j}from"./vendor.c2cc062a.js";(t=e||(e={})).GetRolePage="/admin/function/list",t.AddRole="/admin/function/add",t.GetRole="/admin/function/GetRole",t.UpdateRole="/admin/function/update",t.DeleteRole="/admin/function/delete",t.GetPermission="/admin/function/GetPermission",t.SavePermission="/admin/function/SavePermission",t.listByMenuId="/admin/function/listByMenuId";const O=t=>f.post({url:e.GetRolePage});function B(t,o="modal"){return f.post({url:e.DeleteRole,params:t},{errorMessageMode:o})}var F=p({name:"ManagementModal",components:{BasicModal:l,BasicForm:u},emits:["success","register"],setup(t,{emit:o}){const l=g(!0),[u,{setFieldsValue:p,updateSchema:b,resetFields:v,validate:h}]=c({labelWidth:160,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[R,{setModalProps:P,closeModal:j}]=d((e=>i(this,null,(function*(){v(),P({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate),y(l)&&p(((e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(r)for(var o of r(t))n.call(t,o)&&s(e,o,t[o]);return e})({},e.record))}))));return{registerModal:R,registerForm:u,getTitle:M((()=>y(l)?"编辑菜单功能":"新增菜单功能")),handleSubmit:function(){return i(this,null,(function*(){try{const t=yield h();P({confirmLoading:!0}),t.id?yield function(t,o="modal"){return f.post({url:e.UpdateRole,params:t},{errorMessageMode:o})}(t):yield function(t,o="modal"){return f.post({url:e.AddRole,params:t},{errorMessageMode:o})}(t),j(),o("success")}finally{P({confirmLoading:!1})}}))}}}});F.render=function(e,t,o,r,a,n){const s=b("BasicForm"),i=b("BasicModal");return v(),h(i,j(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit,width:600,minHeight:350}),{default:R((()=>[P(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{B as D,O as G,G as M,F as _};
