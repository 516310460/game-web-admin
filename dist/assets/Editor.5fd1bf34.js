import{e}from"./BasicForm.dbc54f8f.js";import{ad as t,h as o}from"./index.9345068b.js";import{M as r}from"./index.91dd6322.js";import{_ as s}from"./PageWrapper.5e932ddb.js";import{k as a,a2 as i,L as n,o as d,q as m,R as p,s as l}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.de5ce37b.js";/* empty css              */import"./useModal.1e927a40.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.5e18ee04.js";import"./StrengthMeter.d3194e4f.js";import"./createAsyncComponent.1972d182.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const u=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>i(r,{value:e[t],onChange:o=>{e[t]=o}})}];var c=a({components:{BasicForm:e,CollapseContainer:t,PageWrapper:s},setup(){const{createMessage:e}=o();return{schemas:u,handleSubmit:t=>{e.success("click search,values:"+JSON.stringify(t))}}}});c.render=function(e,t,o,r,s,a){const i=n("BasicForm"),u=n("CollapseContainer"),c=n("PageWrapper");return d(),m(c,{title:"MarkDown组件嵌入Form示例"},{default:p((()=>[l(u,{title:"MarkDown表单"},{default:p((()=>[l(i,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default c;
