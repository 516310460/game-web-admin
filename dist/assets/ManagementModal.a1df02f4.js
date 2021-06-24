var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t,a)=>new Promise(((r,o)=>{var n=e=>{try{i(a.next(e))}catch(t){o(t)}},l=e=>{try{i(a.throw(e))}catch(t){o(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(n,l);i((a=a.apply(e,t)).next())}));import{_ as l,b as i}from"./useModal.7df4099e.js";import{e as s}from"./BasicForm.ca329dfa.js";import{u as d}from"./useForm.a15aba3a.js";import{aA as u}from"./index.b2f89009.js";import{k as m,r as c,u as p,f,L as g,o as v,q as M,R as b,s as I,O as y}from"./vendor.c2cc062a.js";const h=[{title:"ID",dataIndex:"id"},{title:"级别名称",dataIndex:"lname"},{title:"级别等级",dataIndex:"level"},{title:"自身级别条件需满足",dataIndex:"mlevel"},{title:"直推升级条件：直推有效账户数",dataIndex:"upgrade"},{title:"小区业绩满足多少U",dataIndex:"gtotal"},{title:"团队收益提成比例：百分比",dataIndex:"gprofit"}],L=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"lname",label:"级别名称",component:"Input",required:!0},{field:"level",label:"级别等级",component:"Input",required:!0},{field:"mlevel",label:"自身级别条件需满足",component:"Input",required:!0},{field:"upgrade",label:"直推升级条件：直推有效账户数",component:"Input",required:!0},{field:"gtotal",label:"小区业绩满足多少U",component:"Input",required:!0},{field:"gprofit",label:"团队收益提成比例：百分比",component:"Input",required:!0}];var C,k;(k=C||(C={})).CcMarketCoinList="/admin/minerLevel/findAll",k.GetMarketCoin="/admin/minerLevel/findById",k.AddMarketCoin="/admin/minerLevel/addUserSaleLevel",k.UpdateMarketCoin="/admin/minerLevel/updUserSaleLevel",k.DeleteMarketCoin="/admin/minerLevel/delUserSaleLevel";const x=e=>u.post({url:C.CcMarketCoinList});function O(e,t="modal"){return u.post({url:C.DeleteMarketCoin,params:e},{errorMessageMode:t})}var j=m({name:"ManagementModal",components:{BasicModal:l,BasicForm:s},emits:["success","register"],setup(e,{emit:l}){const s=c(!0),[m,{setFieldsValue:g,updateSchema:v,resetFields:M,validate:b}]=d({labelWidth:220,schemas:L,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:y,closeModal:h}]=i((e=>n(this,null,(function*(){M(),y({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),p(s)&&g(((e,n)=>{for(var l in n||(n={}))a.call(n,l)&&o(e,l,n[l]);if(t)for(var l of t(n))r.call(n,l)&&o(e,l,n[l]);return e})({},e.record))}))));return{registerModal:I,registerForm:m,getTitle:f((()=>p(s)?"编辑游戏大厅":"新增游戏大厅")),handleSubmit:function(){return n(this,null,(function*(){try{const e=yield b();y({confirmLoading:!0}),e.id?yield function(e,t="modal"){return u.post({url:C.UpdateMarketCoin,params:e},{errorMessageMode:t})}(e):yield function(e,t="modal"){return u.post({url:C.AddMarketCoin,params:e},{errorMessageMode:t})}(e),h(),l("success")}finally{y({confirmLoading:!1})}}))}}}});j.render=function(e,t,a,r,o,n){const l=g("BasicForm"),i=g("BasicModal");return v(),M(i,y(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:b((()=>[I(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});export{x as C,O as D,S as M,j as _,h as c};