import{_ as e,b as o}from"./useModal.b188c2e0.js";import{e as s}from"./BasicForm.7d27c2f1.js";import{u as i}from"./useForm.abe4b088.js";import{k as t,r,L as a,o as n,q as d,R as m,s as p,O as l}from"./vendor.c2cc062a.js";import"./index.3df22268.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b674ffa1.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.1103b608.js";import"./StrengthMeter.b8c729fd.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=t({components:{BasicModal:e,BasicForm:s},setup(){const e=r({}),[s,{}]=i({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=o((o=>{e.value={field2:o.data,field1:o.info}}));return{register:t,schemas:c,registerForm:s,model:e}}});f.render=function(e,o,s,i,t,r){const c=a("BasicForm"),f=a("BasicModal");return n(),d(f,l(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[p(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default f;