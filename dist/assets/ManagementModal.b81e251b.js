var e,a,t=Object.defineProperty,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(e,a,r)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,i=(e,a,t)=>new Promise(((r,n)=>{var o=e=>{try{i(t.next(e))}catch(a){n(a)}},l=e=>{try{i(t.throw(e))}catch(a){n(a)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,l);i((t=t.apply(e,a)).next())}));import{_ as s,b as d}from"./useModal.36f6a78c.js";import{e as u}from"./BasicForm.a8faf294.js";import{u as c}from"./useForm.d1aaf8d6.js";import{aA as m,aB as p}from"./index.05b44a3f.js";import{k as f,r as b,f as g,u as M,L as h,o as y,q as v,R as C,s as k,O as I}from"./vendor.c2cc062a.js";(a=e||(e={})).CcMarketCoinList="/admin/banner/findAll",a.GetMarketCoin="/Manager/CcMarketCoin/GetMarketCoin",a.AddMarketCoin="/admin/banner/addBanner",a.UpdateMarketCoin="/admin/banner/updGame",a.DeleteMarketCoin="/Manager/banner/delBanner";const x=a=>m.post({url:e.CcMarketCoinList,params:a});function B(a,t="modal"){return m.post({url:e.DeleteMarketCoin,params:a},{errorMessageMode:t})}const O=[{title:"ID",dataIndex:"id"},{dataIndex:"language",title:"语言"},{dataIndex:"bannerName",title:"名称"},{dataIndex:"imageUrl",title:"图片地址"},{dataIndex:"hrefUrl",title:"链接"},{dataIndex:"sort",title:"排序"},{dataIndex:"state",title:"状态"}],j=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"language",label:"语言",component:"Input",required:!0},{field:"bannerName",label:"名称",component:"Input",required:!0},{field:"imageUrl",label:"图片地址",component:"aUpload",componentProps:{headers:{token:p()},fileName:"file",boxType:"banner"},required:!0},{field:"hrefUrl",label:"链接",component:"Input",required:!0},{field:"sort",label:"排序",component:"InputNumber",required:!0},{field:"state",label:"状态",component:"Select",required:!0,componentProps:{options:[{label:"停用",value:0},{label:"启用",value:1}]}}];var q=f({name:"ManagementModal",components:{BasicModal:s,BasicForm:u},emits:["success","register"],setup(a,{emit:t}){const s=b(!0),[u,{setFieldsValue:p,updateSchema:f,resetFields:h,validate:y}]=c({labelWidth:100,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:23}}),[v,{setModalProps:C,closeModal:k}]=d((e=>i(this,null,(function*(){h(),C({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),M(s)&&p(((e,a)=>{for(var t in a||(a={}))n.call(a,t)&&l(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&l(e,t,a[t]);return e})({},e.record))}))));return{registerModal:v,registerForm:u,getTitle:g((()=>M(s)?"编辑Banner":"新增Banner")),handleSubmit:function(){return i(this,null,(function*(){try{const a=yield y();C({confirmLoading:!0}),a.id?yield function(a,t="modal"){return m.post({url:e.UpdateMarketCoin,params:a},{errorMessageMode:t})}(a):yield function(a,t="modal"){return m.post({url:e.AddMarketCoin,params:a},{errorMessageMode:t})}(a),k(),t("success")}finally{C({confirmLoading:!1})}}))}}}});q.render=function(e,a,t,r,n,o){const l=h("BasicForm"),i=h("BasicModal");return y(),v(i,I(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:C((()=>[k(l,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});export{x as C,B as D,F as M,q as _,O as c};
