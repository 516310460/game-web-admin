import{e}from"./BasicForm.a51bedc7.js";import{u as o}from"./useForm.192a42cf.js";import{ad as s,h as r}from"./index.da4646fd.js";import{k as t,ae as a,a2 as i,L as n,o as d,q as p,R as l,s as m}from"./vendor.c2cc062a.js";import{_ as u}from"./PageWrapper.64ff3bf6.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b63bed11.js";/* empty css              */import"./useModal.dcdb6d0a.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.7e7a7b16.js";import"./StrengthMeter.f08b2a29.js";import"./usePageContext.85829ca5.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const f=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>i(a,{placeholder:"请输入",value:e[o],onChange:s=>{e[o]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var c=t({components:{BasicForm:e,CollapseContainer:s,PageWrapper:u,[a.name]:a},setup(){const{createMessage:e}=r(),[s,{setProps:t}]=o({labelWidth:120,schemas:f,actionColOptions:{span:24}});return{register:s,schemas:f,handleSubmit:o=>{e.success("click search,values:"+JSON.stringify(o))},setProps:t}}});c.render=function(e,o,s,r,t,a){const i=n("a-input"),u=n("BasicForm"),f=n("CollapseContainer"),c=n("PageWrapper");return d(),p(c,{title:"自定义组件示例"},{default:l((()=>[m(f,{title:"自定义表单"},{default:l((()=>[m(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:l((({model:e,field:o})=>[m(i,{value:e[o],"onUpdate:value":s=>e[o]=s,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default c;
