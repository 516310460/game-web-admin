import{_ as e,a as s}from"./useDrawer.166a9d40.js";import{e as i}from"./BasicForm.a8faf294.js";import{u as o}from"./useForm.d1aaf8d6.js";import{k as r,L as t,o as a,q as n,R as d,s as m,O as p}from"./vendor.c2cc062a.js";/* empty css              */import"./index.05b44a3f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.5b96436a.js";/* empty css              */import"./useModal.36f6a78c.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.568a00d7.js";import"./StrengthMeter.9044e49b.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=r({components:{BasicDrawer:e,BasicForm:i},setup(){const[e,{setFieldsValue:i}]=o({labelWidth:120,schemas:f,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=s((e=>{i({field2:e.data,field1:e.info})}));return{register:r,schemas:f,registerForm:e}}});l.render=function(e,s,i,o,r,f){const l=t("BasicForm"),c=t("BasicDrawer");return a(),n(c,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:d((()=>[m("div",null,[m(l,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default l;
