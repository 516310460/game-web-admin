import{_ as e}from"./PageWrapper.64ff3bf6.js";import{e as s}from"./BasicForm.a51bedc7.js";import{u as r}from"./useForm.192a42cf.js";import{b6 as t,g as o}from"./index.da4646fd.js";import{k as a,L as i,o as n,q as d,R as p,s as l,Z as m}from"./vendor.c2cc062a.js";import"./usePageContext.85829ca5.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b63bed11.js";/* empty css              */import"./useModal.dcdb6d0a.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.7e7a7b16.js";import"./StrengthMeter.f08b2a29.js";const c=[{field:"password",label:"当前密码",component:"InputPassword",required:!0},{field:"newpassword",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"qpassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,r)=>r?r!==e.newpassword?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var u=a({name:"ChangePassword",components:{BasicForm:s,PageWrapper:e},setup(){const[e,{validate:s,resetFields:a}]=r({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:c});return{register:e,resetFields:a,handleSubmit:function(){return e=this,r=null,a=function*(){try{const e=yield s(),{password:r,newpassword:a,qpassword:i}=e;yield t({password:o(r),newpassword:o(a),qpassword:o(i)})}catch(e){}},new Promise(((s,t)=>{var o=e=>{try{n(a.next(e))}catch(s){t(s)}},i=e=>{try{n(a.throw(e))}catch(s){t(s)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,i);n((a=a.apply(e,r)).next())}));var e,r,a}}}});const f={class:"py-8 bg-white flex flex-col justify-center items-center"},j={class:"flex justify-center"},b=m(" 重置 "),w=m(" 确认 ");u.render=function(e,s,r,t,o,a){const m=i("BasicForm"),c=i("a-button"),u=i("PageWrapper");return n(),d(u,{title:"修改当前用户密码"},{default:p((()=>[l("div",f,[l(m,{onRegister:e.register},null,8,["onRegister"]),l("div",j,[l(c,{onClick:e.resetFields},{default:p((()=>[b])),_:1},8,["onClick"]),l(c,{class:"!ml-4",type:"primary",onClick:e.handleSubmit},{default:p((()=>[w])),_:1},8,["onClick"])])])])),_:1})};export default u;
