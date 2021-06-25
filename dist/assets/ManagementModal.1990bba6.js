var e,t,a=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,s=(e,t,a)=>new Promise(((o,n)=>{var r=e=>{try{s(a.next(e))}catch(t){n(t)}},l=e=>{try{s(a.throw(e))}catch(t){n(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,l);s((a=a.apply(e,t)).next())}));import{_ as i,b as d}from"./useModal.36f6a78c.js";import{e as c}from"./BasicForm.a8faf294.js";import{u}from"./useForm.d1aaf8d6.js";import{a2 as p,bk as m,k as f,r as b,f as g,u as y,L as P,o as v,q as I,R as M,s as h,O as w}from"./vendor.c2cc062a.js";/* empty css              */import{aA as L}from"./index.05b44a3f.js";(t=e||(e={})).GetPayListConfPage="/admin/news/findAll",t.AddPayListConf="/admin/news/addNew",t.GetPayListConf="/Manager/OtcPayListConf/GetPayListConf",t.UpdatePayListConf="/admin/news/updNew",t.DeletePayListConf="/admin/news/delNew";const x=t=>L.post({url:e.GetPayListConfPage,params:t});function C(t,a="modal"){return L.post({url:e.DeletePayListConf,params:t},{errorMessageMode:a})}const O=[{title:"ID",dataIndex:"id"},{title:"消息类型",dataIndex:"typeId",customRender:({record:e})=>{let t;switch(e.typeId){case 1:t="公告";break;case 2:t="资讯";break;case 3:t="操作指南"}return p(m,{},(()=>t))}},{title:"语言",dataIndex:"language"},{title:"标题",dataIndex:"title"},{title:"简介",dataIndex:"introduction"},{title:"图片地址",dataIndex:"image"},{title:"内容",dataIndex:"content"},{title:"状态",dataIndex:"state",customRender:({record:e})=>{const t=e.state,a=1===t?"启用":"禁用";return p(m,{color:1===t?"green":"red"},(()=>a))}}],j=[{field:"name",label:"支付方式",component:"Select",componentProps:{options:[{label:"全部",value:""},{label:"正常",value:"1"},{label:"退市",value:"2"}]},colProps:{span:8}}],q=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"typeId",label:"消息类型",component:"Select",required:!0,componentProps:{options:[{label:"公告",value:1},{label:"资讯",value:2},{label:"操作指南",value:3}]}},{field:"language",label:"语言",component:"Input",required:!0},{field:"title",label:"标题",component:"Input",required:!0},{field:"introduction",label:"简介",component:"Input",required:!0},{field:"image",label:"图片地址",component:"aUpload",componentProps:{fileName:"file",boxType:"banner"},required:!0},{field:"content",label:"内容",component:"Input",required:!0},{field:"state",label:"状态",component:"Select",required:!0,componentProps:{options:[{label:"禁用",value:0},{label:"启用",value:1}]}}];var S=f({name:"ManagementModal",components:{BasicModal:i,BasicForm:c},emits:["success","register"],setup(t,{emit:a}){const i=b(!0),[c,{setFieldsValue:p,updateSchema:m,resetFields:f,validate:P}]=u({labelWidth:140,schemas:q,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:I,closeModal:M}]=d((e=>s(this,null,(function*(){f(),I({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),y(i)&&p(((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&l(e,a,t[a]);if(o)for(var a of o(t))r.call(t,a)&&l(e,a,t[a]);return e})({},e.record))}))));return{registerModal:v,registerForm:c,getTitle:g((()=>y(i)?"编辑咨询":"新增咨询")),handleSubmit:function(){return s(this,null,(function*(){try{const t=yield P();I({confirmLoading:!0}),t.id?yield function(t,a="modal"){return L.post({url:e.UpdatePayListConf,params:t},{errorMessageMode:a})}(t):yield function(t,a="modal"){return L.post({url:e.AddPayListConf,params:t},{errorMessageMode:a})}(t),M(),a("success")}finally{I({confirmLoading:!1})}}))}}}});S.render=function(e,t,a,o,n,r){const l=P("BasicForm"),s=P("BasicModal");return v(),I(s,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:M((()=>[h(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});export{C as D,x as G,F as M,S as _,O as c,j as s};
