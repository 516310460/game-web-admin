var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t,a)=>new Promise(((o,r)=>{var n=e=>{try{i(a.next(e))}catch(t){r(t)}},l=e=>{try{i(a.throw(e))}catch(t){r(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,l);i((a=a.apply(e,t)).next())}));import{_ as l,b as i}from"./useModal.7df4099e.js";import{e as s}from"./BasicForm.ca329dfa.js";import{u as d}from"./useForm.a15aba3a.js";import{a2 as c,bk as m,k as u,r as p,u as b,f,L as I,o as g,q as v,R as y,s as M,O as x}from"./vendor.c2cc062a.js";/* empty css              */import{U as P,A as D}from"./CcMarketCoin.853408d0.js";const h=[{title:"ID",dataIndex:"id"},{dataIndex:"nodeId",title:"节点ID"},{dataIndex:"userId",title:"用户id"},{dataIndex:"userName",title:"用户名称"},{dataIndex:"income",title:"收益倍数"},{dataIndex:"days",title:"剩余考核天数"},{dataIndex:"payQuantity",title:"已发放数量"},{dataIndex:"pnumber",title:"节点期数"},{dataIndex:"price",title:"认购价格"},{dataIndex:"quantity",title:"认购数量"},{dataIndex:"totalQuantity",title:"总发放数量总发放数量总发放数量"},{dataIndex:"createTime",title:"创建时间"},{dataIndex:"state",title:"状态",customRender:({record:e})=>{let t="";switch(e.state){case 0:t="待发放";break;case 1:t="发放中";break;case 2:t="已完成";break;case 3:t="已退款"}return c(m,{},(()=>t))}}],Y=[{field:"userName",label:"用户名称",component:"Input",colProps:{span:6}},{field:"beginDate",component:"DatePicker",label:"开始日期",componentProps:{format:"YYYY-MM-DD"},colProps:{span:6}},{field:"endDate",component:"DatePicker",label:"结束日期",componentProps:{format:"YYYY-MM-DD"},colProps:{span:6}}],q=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"roomId",label:"大厅id",component:"Input",required:!0},{field:"gameIndex",label:"游戏关数",component:"Input",required:!0},{field:"state",label:"游戏状态",component:"Select",required:!0,componentProps:{options:[{label:"待开启",value:0},{label:"已开启",value:1},{label:"已售罄",value:2},{label:"已退款",value:3},{label:"已结算",value:4}]}},{field:"targetAmount",label:"过关目标数量",component:"Input",required:!0},{field:"completed",label:"已完成数量",component:"Input",required:!0},{field:"maxAmount",label:"单账户最高投入数量",component:"Input",required:!0},{field:"interestRate",label:"每期收益率",component:"Input",required:!0},{field:"serviceCharge",label:"手续费(扣除平台币比例)",component:"Input",required:!0},{field:"startTime",label:"开始时间",component:"DatePicker",required:!0,componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss"}},{field:"endTime",label:"结束时间",component:"DatePicker",required:!0,componentProps:{valueFormat:"YYYY-MM-DD HH:mm:ss"}}];var k=u({name:"ManagementModal",components:{BasicModal:l,BasicForm:s},emits:["success","register"],setup(e,{emit:l}){const s=p(!0),[c,{setFieldsValue:m,updateSchema:u,resetFields:I,validate:g}]=d({labelWidth:165,schemas:q,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:y,closeModal:M}]=i((e=>n(this,null,(function*(){I(),y({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),b(s)&&m(((e,n)=>{for(var l in n||(n={}))a.call(n,l)&&r(e,l,n[l]);if(t)for(var l of t(n))o.call(n,l)&&r(e,l,n[l]);return e})({},e.record))}))));return{registerModal:v,registerForm:c,getTitle:f((()=>b(s)?"编辑用户节点":"新增用户节点")),handleSubmit:function(){return n(this,null,(function*(){try{const e=yield g();y({confirmLoading:!0}),e.id?yield P(e):yield D(e),M(),l("success")}finally{y({confirmLoading:!1})}}))}}}});k.render=function(e,t,a,o,r,n){const l=I("BasicForm"),i=I("BasicModal");return g(),v(i,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[M(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});export{j as M,k as _,h as c,Y as s};
