var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,s=(e,t,a)=>new Promise(((o,r)=>{var s=e=>{try{i(a.next(e))}catch(t){r(t)}},l=e=>{try{i(a.throw(e))}catch(t){r(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(s,l);i((a=a.apply(e,t)).next())}));import{_ as l,b as i}from"./useModal.735ea034.js";import{e as n}from"./BasicForm.c38a0cc7.js";import{u as d}from"./useForm.266127a6.js";import{a2 as c,bk as u,ae as m,k as p,r as f,f as b,u as g,L as h,o as v,q as y,R as w,s as j,O as I}from"./vendor.c2cc062a.js";/* empty css              */import{G as x}from"./Role.1a47cfdf.js";import{g as O,b4 as F,b5 as M,h as P}from"./index.02e800e3.js";const S=[{title:"用户id",dataIndex:"id"},{title:"用户名",dataIndex:"userName"},{title:"密码",dataIndex:"password"},{title:"角色id",dataIndex:"roleId"},{title:"角色名称",dataIndex:"roleName"},{title:"状态",dataIndex:"state",customRender:({record:e})=>{const t="normal"==e.state?"green":"red",a="normal"==e.state?"正常":"locked"==e.state?"锁定":"暂停提币";return c(u,{color:t},(()=>a))}}],q=[{label:"id",field:"id",component:"Input",show:!1},{label:"角色名称",field:"roleId",component:"ApiSelect",componentProps:{api:x,labelField:"roleName",valueField:"id"},required:!0},{label:"用户名",field:"userName",component:"Input",required:!0},{label:"密码",field:"password",component:"InputPassword",required:!0,render:({model:e,field:t})=>c(m.Password,{placeholder:"请输入密码",onChange:a=>{e[t]=O(a.target.value)}})},{label:"状态",field:"state",component:"Select",required:!0,componentProps:{options:[{label:"正常",value:"normal"},{label:"锁定",value:"locked"},{label:"暂停提币",value:"forbid"}]}}],{createMessage:R}=P();var _=p({name:"AccountModal",components:{BasicModal:l,BasicForm:n},emits:["success","register"],setup(e,{emit:l}){const n=f(!0),[c,{setFieldsValue:u,updateSchema:m,resetFields:p,validate:h}]=d({labelWidth:100,schemas:q,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:y,closeModal:w}]=i((e=>s(this,null,(function*(){p(),y({confirmLoading:!1}),n.value=!!(null==e?void 0:e.isUpdate),g(n)&&u(((e,s)=>{for(var l in s||(s={}))a.call(s,l)&&r(e,l,s[l]);if(t)for(var l of t(s))o.call(s,l)&&r(e,l,s[l]);return e})({},e.record)),m([{field:"password",show:!g(n),required:!g(n)},{field:"account",show:!g(n),required:!g(n)}])}))));return{registerModal:v,registerForm:c,getTitle:b((()=>g(n)?"编辑账号":"新增账号")),handleSubmit:function(){return s(this,null,(function*(){try{const e=yield h();let t;y({confirmLoading:!0}),t=e.id?yield F(e):yield M(e),t||(R.success("编辑成功"),w(),l("success"))}finally{y({confirmLoading:!1})}}))}}}});_.render=function(e,t,a,o,r,s){const l=h("BasicForm"),i=h("BasicModal");return v(),y(i,I(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[j(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});export{k as A,_,S as c};
