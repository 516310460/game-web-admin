import{_ as e}from"./PageWrapper.e33b63d0.js";import{e as s}from"./BasicForm.d607c7a3.js";import{u as r}from"./useForm.a3e29c9f.js";import{b6 as t,g as o}from"./index.7fd854bf.js";import{k as i,L as a,o as n,q as d,R as p,s as l,Z as c}from"./vendor.c2cc062a.js";import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./useModal.02fd9148.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";const m=[{field:"password",label:"当前密码",component:"InputPassword",required:!0},{field:"newpassword",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"qpassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,r)=>r?r!==e.newpassword?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var u=i({name:"ChangePassword",components:{BasicForm:s,PageWrapper:e},setup(){const[e,{validate:s,resetFields:i}]=r({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:m});return{register:e,resetFields:i,handleSubmit:function(){return e=this,r=null,i=function*(){try{const e=yield s(),{password:r,newpassword:i,qpassword:a}=e;yield t({password:o(r),newpassword:o(i),qpassword:o(a)})}catch(e){}},new Promise(((s,t)=>{var o=e=>{try{n(i.next(e))}catch(s){t(s)}},a=e=>{try{n(i.throw(e))}catch(s){t(s)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,a);n((i=i.apply(e,r)).next())}));var e,r,i}}}});const f={class:"py-8 bg-white flex flex-col justify-center items-center"},j={class:"flex justify-center"},w=c(" 重置 "),b=c(" 确认 ");u.render=function(e,s,r,t,o,i){const c=a("BasicForm"),m=a("a-button"),u=a("PageWrapper");return n(),d(u,{title:"修改当前用户密码"},{default:p((()=>[l("div",f,[l(c,{onRegister:e.register},null,8,["onRegister"]),l("div",j,[l(m,{onClick:e.resetFields},{default:p((()=>[w])),_:1},8,["onClick"]),l(m,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:p((()=>[b])),_:1},8,["onClick"])])])])),_:1})};export default u;
