import{g as e,e as s}from"./BasicForm.15159022.js";import{u as a,aA as o,h as r}from"./index.e2f8dfb6.js";import{u as i}from"./useForm.096e68f4.js";import{_ as t}from"./PageWrapper.304283c7.js";import{k as n,bJ as p,L as d,o as m,q as l,R as c,s as f}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.d437ddc4.js";import"./useModal.df8770e7.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.bc82a2de.js";import"./StrengthMeter.48e5d163.js";import"./usePageContext.e3c0a1fa.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const{uploadUrl:u=""}=a();function j(e,s){return o.uploadFile({url:u,onUploadProgress:s},e)}const g=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var x=n({components:{BasicUpload:e,BasicForm:s,PageWrapper:t,[p.name]:p},setup(){const{createMessage:e}=r(),[s]=i({labelWidth:120,schemas:g,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},UploadApi:j,register:s}}});x.render=function(e,s,a,o,r,i){const t=d("a-alert"),n=d("BasicUpload"),p=d("BasicForm"),u=d("PageWrapper");return m(),l(u,{title:"上传组件示例"},{default:c((()=>[f(t,{message:"基础示例"}),f(n,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.UploadApi,class:"my-5"},null,8,["onChange","api"]),f(t,{message:"嵌入表单,加入表单校验"}),f(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;
