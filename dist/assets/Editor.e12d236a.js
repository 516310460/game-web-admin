import{e}from"./BasicForm.ca329dfa.js";import{ad as t,h as s}from"./index.b2f89009.js";import{_ as a}from"./Editor.31305f03.js";import{_ as i}from"./PageWrapper.746818f8.js";import{k as o,a2 as r,L as n,o as d,q as m,R as p,s as l}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.509df665.js";/* empty css              */import"./useModal.7df4099e.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.22cf218c.js";import"./StrengthMeter.83930716.js";import"./onMountedOrActivated.5a05012f.js";import"./usePageContext.172b3d6d.js";/* empty css              *//* empty css              */const u=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:t})=>r(a,{value:e[t],onChange:s=>{e[t]=s}})}];var c=o({components:{BasicForm:e,CollapseContainer:t,PageWrapper:i},setup(){const{createMessage:e}=s();return{schemas:u,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});c.render=function(e,t,s,a,i,o){const r=n("BasicForm"),u=n("CollapseContainer"),c=n("PageWrapper");return d(),m(c,{title:"富文本嵌入表单示例"},{default:p((()=>[l(u,{title:"富文本表单"},{default:p((()=>[l(r,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default c;