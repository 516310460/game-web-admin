import{_ as e}from"./Editor.2f0b2a60.js";import{_ as a}from"./PageWrapper.15f3b793.js";import{k as o,r,L as n,o as t,q as s,R as d,s as i}from"./vendor.c2cc062a.js";import"./index.a9cd95f2.js";import"./uuid.2b29000c.js";import"./onMountedOrActivated.5a05012f.js";import"./usePageContext.92db9508.js";/* empty css              *//* empty css              */var l=o({components:{Tinymce:e,PageWrapper:a},setup:()=>({handleChange:function(e){},value:r("hello world!")})});l.render=function(e,a,o,r,l,p){const m=n("Tinymce"),u=n("PageWrapper");return t(),s(u,{title:"富文本组件示例"},{default:d((()=>[i(m,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])),_:1})};export default l;