var e,t,a=Object.defineProperty,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t,a)=>new Promise(((r,n)=>{var o=e=>{try{s(a.next(e))}catch(t){n(t)}},i=e=>{try{s(a.throw(e))}catch(t){n(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,t)).next())}));import{_ as l,b as d}from"./useModal.02fd9148.js";import{e as c}from"./BasicForm.d607c7a3.js";import{u}from"./useForm.a3e29c9f.js";import{a2 as m,bk as p,k as f,r as b,f as g,u as M,L as I,o as k,q as x,R as h,s as C,O as y}from"./vendor.c2cc062a.js";/* empty css              */import{aA as v}from"./index.7fd854bf.js";(t=e||(e={})).CcMarketCoinList="/admin/banner/findAll",t.GetMarketCoin="/Manager/CcMarketCoin/GetMarketCoin",t.AddMarketCoin="/admin/banner/addUploadFile",t.UpdateMarketCoin="/admin/banner/updGame",t.DeleteMarketCoin="/Manager/banner/delBanner";const j=t=>v.post({url:e.CcMarketCoinList});function O(t,a="modal"){return v.post({url:e.DeleteMarketCoin,params:t},{errorMessageMode:a})}const B=[{title:"ID",dataIndex:"id"},{dataIndex:"roomId",title:"大厅id"},{dataIndex:"gameIndex",title:"游戏关数"},{dataIndex:"targetAmount",title:"过关目标数量"},{dataIndex:"completed",title:"已完成数量"},{dataIndex:"maxAmount",title:"单账户最高投入数量"},{dataIndex:"interestRate",title:"每期收益率"},{dataIndex:"serviceCharge",title:"手续费(扣除平台币比例)"},{dataIndex:"startTime",title:"开始时间"},{dataIndex:"endTime",title:"结束时间"},{dataIndex:"state",title:"游戏状态",customRender:({record:e})=>{let t="";switch(e.state){case 0:t="待开启";break;case 1:t="已开启";break;case 2:t="已售罄";break;case 3:t="已退款";break;case 4:t="已结算"}return m(p,{},(()=>t))}}],F=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"language",label:"语言",component:"Input",required:!0},{field:"bannerName",label:"名称",component:"Input",required:!0},{field:"imageUrl",label:"图片地址",component:"Input",required:!0},{field:"hrefUrl",label:"链接",component:"Input",required:!0}];var w=f({name:"ManagementModal",components:{BasicModal:l,BasicForm:c},emits:["success","register"],setup(t,{emit:a}){const l=b(!0),[c,{setFieldsValue:m,updateSchema:p,resetFields:f,validate:I}]=u({labelWidth:100,schemas:F,showActionButtonGroup:!1,actionColOptions:{span:23}}),[k,{setModalProps:x,closeModal:h}]=d((e=>s(this,null,(function*(){f(),x({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate),M(l)&&m(((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&i(e,a,t[a]);return e})({},e.record))}))));return{registerModal:k,registerForm:c,getTitle:g((()=>M(l)?"编辑Banner":"新增Banner")),handleSubmit:function(){return s(this,null,(function*(){try{const t=yield I();x({confirmLoading:!0}),t.id?yield function(t,a="modal"){return v.post({url:e.UpdateMarketCoin,params:t},{errorMessageMode:a})}(t):yield function(t,a="modal"){return v.post({url:e.AddMarketCoin,params:t},{errorMessageMode:a})}(t),h(),a("success")}finally{x({confirmLoading:!1})}}))}}}});w.render=function(e,t,a,r,n,o){const i=I("BasicForm"),s=I("BasicModal");return k(),x(s,y(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:h((()=>[C(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});export{j as C,O as D,A as M,w as _,B as c};
