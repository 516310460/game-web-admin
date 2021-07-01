var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,r=(e,a,l)=>new Promise(((t,o)=>{var r=e=>{try{s(l.next(e))}catch(a){o(a)}},n=e=>{try{s(l.throw(e))}catch(a){o(a)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(r,n);s((l=l.apply(e,a)).next())}));import{_ as n,b as s}from"./useModal.5420dac5.js";import{e as i}from"./BasicForm.38d01207.js";import{u as c}from"./useForm.2cb2fa07.js";import{a2 as u,bk as d,k as p,r as m,u as b,f,L as v,o as g,q as I,R as y,s as P,O as h}from"./vendor.c2cc062a.js";/* empty css              */import{U as M,A as x}from"./CcTradePair.2472c697.js";const j=[{title:"ID",dataIndex:"id"},{title:"用户名",dataIndex:"userName"},{title:"币种名称",dataIndex:"coinName"},{title:"流水类型",dataIndex:"flowingTypeStr"},{title:"流水动向",dataIndex:"flowingStatus",customRender:({record:e})=>{const a=e.flowingStatus,l=1===a?"收入":"支出";return u(d,{color:1===a?"green":"red"},(()=>l))}},{title:"发生金额",dataIndex:"changeAmount"},{title:"变动前余额",dataIndex:"balanceBefore"},{title:"变动后余额",dataIndex:"balanceAfter"},{title:"创建时间",dataIndex:"createTime"},{title:"流水备注",dataIndex:"remarkremark"}],O=[{field:"userName",label:"用户名称",component:"Input",colProps:{span:6}},{field:"coinName",label:"币种名称",component:"Input",colProps:{span:6}},{field:"type",label:"类型",component:"Select",componentProps:{options:[{label:"充值",value:1},{label:"提币",value:2},{label:"内部转账",value:3},{label:"币币交易",value:4},{label:"手续费",value:5},{label:"购买矿机",value:6},{label:"参与游戏",value:7},{label:"游戏收益",value:8},{label:"矿机收益",value:9},{label:"游戏",value:10},{label:"矿机加速收益",value:11},{label:"节点认购",value:12},{label:"节点收益",value:13},{label:"节点退款",value:14},{label:"提现退款",value:15},{label:"游戏推广收益",value:16},{label:"游戏退款",value:17},{label:"购买矿机",value:18},{label:"平级奖",value:19},{label:"积分",value:20},{label:"后台充值",value:21},{label:"后台下账",value:22}]},colProps:{span:6}},{field:"beginDate",component:"DatePicker",label:"开始日期",componentProps:{format:"YYYY-MM-DD"},colProps:{span:6}},{field:"endDate",component:"DatePicker",label:"结束日期",componentProps:{format:"YYYY-MM-DD"},colProps:{span:6}}],S=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{field:"price",label:"矿机名称",component:"Input",required:!0},{field:"ghs",label:"矿机总价格",component:"Input",required:!0},{field:"rate",label:"回报倍数",component:"Input",required:!0},{field:"state",label:"交易对状态",component:"Select",required:!0,componentProps:{options:[{label:"已下架",value:0},{label:"抢购中",value:1},{label:"待上架",value:2}]}}];var w=p({name:"ManagementModal",components:{BasicModal:n,BasicForm:i},emits:["success","register"],setup(e,{emit:n}){const i=m(!0),[u,{setFieldsValue:d,updateSchema:p,resetFields:v,validate:g}]=c({labelWidth:140,schemas:S,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:y,closeModal:P}]=s((e=>r(this,null,(function*(){v(),y({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),b(i)&&d(((e,r)=>{for(var n in r||(r={}))l.call(r,n)&&o(e,n,r[n]);if(a)for(var n of a(r))t.call(r,n)&&o(e,n,r[n]);return e})({},e.record))}))));return{registerModal:I,registerForm:u,getTitle:f((()=>b(i)?"编辑矿机":"新增矿机")),handleSubmit:function(){return r(this,null,(function*(){try{const e=yield g();y({confirmLoading:!0}),e.id?yield M(e):yield x(e),P(),n("success")}finally{y({confirmLoading:!1})}}))}}}});w.render=function(e,a,l,t,o,r){const n=v("BasicForm"),s=v("BasicModal");return g(),I(s,h(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:y((()=>[P(n,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});export{D as M,w as _,j as c,O as s};
