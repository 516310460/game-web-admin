import{g as e,e as a}from"./BasicForm.18e1e5ca.js";import{u as s,aA as o,h as r}from"./index.14da3ba2.js";import{u as i}from"./useForm.0814b38b.js";import{_ as t}from"./PageWrapper.940fdd9a.js";import{k as n,bJ as p,L as d,o as m,q as l,R as c,s as u}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.04afd40e.js";import"./useModal.358fc689.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.2b7520e5.js";import"./StrengthMeter.8ce129a6.js";import"./usePageContext.a26dede6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const{uploadUrl:f=""}=s();function j(e,a){return o.uploadFile({url:f,onUploadProgress:a},e)}const g=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var b=n({components:{BasicUpload:e,BasicForm:a,PageWrapper:t,[p.name]:p},setup(){const{createMessage:e}=r(),[a]=i({labelWidth:120,schemas:g,actionColOptions:{span:16}});return{handleChange:a=>{e.info(`已上传文件${JSON.stringify(a)}`)},UploadApi:j,register:a}}});b.render=function(e,a,s,o,r,i){const t=d("a-alert"),n=d("BasicUpload"),p=d("BasicForm"),f=d("PageWrapper");return m(),l(f,{title:"上传组件示例"},{default:c((()=>[u(t,{message:"基础示例"}),u(n,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.UploadApi,class:"my-5"},null,8,["onChange","api"]),u(t,{message:"嵌入表单,加入表单校验"}),u(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default b;
