var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,t,a)=>new Promise(((r,o)=>{var s=e=>{try{l(a.next(e))}catch(t){o(t)}},n=e=>{try{l(a.throw(e))}catch(t){o(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);l((a=a.apply(e,t)).next())}));import{e as n}from"./BasicForm.7d27c2f1.js";import{u as l}from"./useForm.abe4b088.js";import{_ as i,a as c}from"./useDrawer.3469617a.js";import{h as d}from"./system.0db6af99.js";import{k as u,r as m,f as p,u as f,L as b,o as g,q as I,R as h,s as v,O as w}from"./vendor.c2cc062a.js";const y=[{title:"ID",dataIndex:"id"},{title:"用户ID",dataIndex:"userId"},{title:"用户名",dataIndex:"userName"},{title:"币种名称",dataIndex:"coinName"},{title:"充值地址",dataIndex:"address"},{title:"可用余额",dataIndex:"avalibleBalance"},{title:"冻结余额",dataIndex:"forzenBalance"},{title:"总额",dataIndex:"totalBalance"},{title:"创建时间",dataIndex:"createTime"}],P=[{field:"id",label:"ID",component:"Input",colProps:{span:8},show:!1},{field:"amount",label:"金额",component:"InputNumber",colProps:{span:8}},{field:"state",label:"类型",component:"Select",colProps:{span:8},defaultValue:1,componentProps:{options:[{label:"充值",value:1},{label:"下账",value:2}]}}],x=[{field:"userName",label:"用户名",component:"Input",colProps:{span:8}},{field:"coinName",label:"币种名称",component:"Input",colProps:{span:8}}];var D=u({name:"MenuDrawer",components:{BasicDrawer:i,BasicForm:n},emits:["success","register"],setup(e,{emit:n}){const i=m(!0),[u,{resetFields:b,setFieldsValue:g,updateSchema:I,validate:h}]=l({labelWidth:100,schemas:P,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[v,{setDrawerProps:w,closeDrawer:y}]=c((e=>s(this,null,(function*(){b(),w({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),f(i)&&g(((e,s)=>{for(var n in s||(s={}))a.call(s,n)&&o(e,n,s[n]);if(t)for(var n of t(s))r.call(s,n)&&o(e,n,s[n]);return e})({},e.record))}))));return{registerDrawer:v,registerForm:u,getTitle:p((()=>f(i)?"上下余额":"新增账号")),handleSubmit:function(){return s(this,null,(function*(){try{const e=yield h();w({confirmLoading:!0}),yield d(e),y(),n("success")}finally{w({confirmLoading:!1})}}))}}}});D.render=function(e,t,a,r,o,s){const n=b("BasicForm"),l=b("BasicDrawer");return g(),I(l,w(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"40%",onOk:e.handleSubmit}),{default:h((()=>[v(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D});export{j as M,D as _,y as c,x as s};