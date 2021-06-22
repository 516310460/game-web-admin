var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,n=(e,t,a)=>new Promise(((o,s)=>{var n=e=>{try{r(a.next(e))}catch(t){s(t)}},i=e=>{try{r(a.throw(e))}catch(t){s(t)}},r=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,i);r((a=a.apply(e,t)).next())}));import{_ as i}from"./TableImg.8c388204.js";import{e as r,_ as l}from"./BasicForm.c38a0cc7.js";import{u as d}from"./useTable.886ffa4e.js";import{_ as c,b as u}from"./useModal.735ea034.js";import{u as m}from"./useForm.266127a6.js";import{a2 as p,bk as f,k as b,av as h,bu as g,r as w,f as j,u as v,L as x,o as y,q as I,R as S,s as O,Y as R,O as T,Z as N}from"./vendor.c2cc062a.js";/* empty css              */import{e as C,c as F}from"./system.42df0aad.js";/* empty css              *//* empty css              */import"./index.02e800e3.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.ec20bd81.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.e002f8f6.js";/* empty css              */import"./download.4c107ff8.js";import"./StrengthMeter.4b5a58a5.js";const M=[{title:"用户名ID",dataIndex:"userId",width:120},{title:"用户名",dataIndex:"userName"},{title:"币种名称",dataIndex:"coinName",width:90},{title:"主网",dataIndex:"mainNet",width:90},{title:"收币地址",dataIndex:"toAddress"},{title:"txid",dataIndex:"txid"},{title:"提币状态",dataIndex:"state",width:100,customRender:({record:e})=>{const t=e.state,a=0==t?"待审核":1==t?"审核通过":2==t?"已完成":3==t?"审核拒绝":"提币失败";return p(f,{color:1==t||2==t?"green":"red"},(()=>a))}},{title:"创建时间",dataIndex:"createTime",width:180}],_=[{field:"state",label:"状态",component:"Select",componentProps:{options:[{label:"待审核",value:0},{label:"审核通过",value:1},{label:"已完成",value:2},{label:"审核拒绝",value:3},{label:"提币失败",value:4}]},colProps:{span:8}}],A=[];var P=b({name:"AccountModal",components:{BasicModal:c,BasicForm:r,BasicTable:i,TableAction:l,Dropdown:h,[g.name]:g,ASelectOption:g.Option},emits:["success","register"],setup(e,{emit:i}){const r=w(!1);let l=w(""),c=w([]);const[p,{setFieldsValue:f,updateSchema:b,resetFields:h,validate:g}]=m({labelWidth:100,schemas:A,showActionButtonGroup:!1,actionColOptions:{span:23}}),[x,{reload:y,setProps:I,getSelectRows:S,getSelectRowKeys:O,clearSelectedRowKeys:R}]=d({title:"提币列表",api:C,searchInfo:{userName:l||""},columns:M,formConfig:{labelWidth:60,schemas:_},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}},rowSelection:{type:"checkbox"}});const[T,{setModalProps:N,closeModal:P}]=u((e=>n(this,null,(function*(){h(),N({confirmLoading:!1}),r.value=!!(null==e?void 0:e.isUpdate),v(r)&&f(((e,n)=>{for(var i in n||(n={}))a.call(n,i)&&s(e,i,n[i]);if(t)for(var i of t(n))o.call(n,i)&&s(e,i,n[i]);return e})({},e.record)),l.value=e.record.userName,setTimeout((()=>{y({page:1,searchInfo:{userName:e.record.userName}})}),300)})))),B=j((()=>v(r)?"查询提币列表":"新增账号")),k=j((()=>S()));return{registerTable:x,handleToExamine:function(){return n(this,null,(function*(){c.value=S()}))},handleEdit:function(e){},registerModal:T,registerForm:p,getTitle:B,handleSubmit:function(){return n(this,null,(function*(){try{yield g();N({confirmLoading:!0}),P(),i("success")}finally{N({confirmLoading:!1})}}))},handleOpen:function(e,t){return n(this,null,(function*(){yield F({ids:e.id,state:t}),R(),y({page:1,searchInfo:{userName:e.userName}})}))},handleChange:e=>n(this,null,(function*(){let t=[],a="";k.value.forEach((e=>{a=e.userName,t.push(e.id)})),yield F({ids:t.join(),state:e}),R(),y({page:1,searchInfo:{userName:a}})})),rows:c,isRows:k,selectValue:w("")}}});const B=N("请选择审核"),k=N("审核通过"),E=N("审核拒绝"),D=N("提币失败");P.render=function(e,t){const a=x("a-select-option"),o=x("a-select"),s=x("TableAction"),n=x("BasicTable"),i=x("BasicForm"),r=x("BasicModal");return y(),I(r,T(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit,width:1360}),{default:S((()=>[O(n,{onRegister:e.registerTable,class:"w-full xl:w-full"},{toolbar:S((()=>[e.isRows.length?(y(),I(o,{key:0,value:e.selectValue,"onUpdate:value":t[1]||(t[1]=t=>e.selectValue=t),style:{width:"120px"},ref:"select",onChange:e.handleChange},{default:S((()=>[O(a,{value:"",disabled:""},{default:S((()=>[B])),_:1}),O(a,{value:"1"},{default:S((()=>[k])),_:1}),O(a,{value:"3"},{default:S((()=>[E])),_:1}),O(a,{value:"4"},{default:S((()=>[D])),_:1})])),_:1},8,["value","onChange"])):R("",!0)])),action:S((({record:t})=>[O(s,{dropDownActions:[{label:"审核通过",popConfirm:{title:"是否审核通过？",confirm:e.handleOpen.bind(null,t,1)},ifShow:()=>1!=t.state},{label:"审核拒绝",popConfirm:{title:"是否审核拒绝？",confirm:e.handleOpen.bind(null,t,3)},ifShow:()=>3!=t.state}]},null,8,["dropDownActions"])])),_:1},8,["onRegister"]),O(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
