import{g as e,e as s}from"./BasicForm.d607c7a3.js";import{u as a,aA as o,h as r}from"./index.7fd854bf.js";import{u as i}from"./useForm.a3e29c9f.js";import{_ as t}from"./PageWrapper.e33b63d0.js";import{k as n,bJ as p,L as d,o as m,q as c,R as l,s as f}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";import"./useModal.02fd9148.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const{uploadUrl:u=""}=a();function j(e,s){return o.uploadFile({url:u,onUploadProgress:s},e)}const g=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var b=n({components:{BasicUpload:e,BasicForm:s,PageWrapper:t,[p.name]:p},setup(){const{createMessage:e}=r(),[s]=i({labelWidth:120,schemas:g,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},UploadApi:j,register:s}}});b.render=function(e,s,a,o,r,i){const t=d("a-alert"),n=d("BasicUpload"),p=d("BasicForm"),u=d("PageWrapper");return m(),c(u,{title:"上传组件示例"},{default:l((()=>[f(t,{message:"基础示例"}),f(n,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.UploadApi,class:"my-5"},null,8,["onChange","api"]),f(t,{message:"嵌入表单,加入表单校验"}),f(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default b;
