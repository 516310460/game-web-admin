import{M as e}from"./index.fe852edf.js";import{_ as n}from"./PageWrapper.15f3b793.js";import{k as a,r as t,u as o,L as r,o as s,q as i,R as l,s as m,Z as p}from"./vendor.c2cc062a.js";import"./index.a9cd95f2.js";import"./createAsyncComponent.16996d72.js";import"./usePageContext.92db9508.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var u=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const c=p(" 黑暗主题 ");u.render=function(e,n,a,t,o,p){const u=r("a-button"),d=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:l((()=>[m(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[c])),_:1},8,["onClick"]),m(d,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default u;