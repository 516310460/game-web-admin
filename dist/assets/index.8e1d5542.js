import{M as e}from"./index.a0c2ef88.js";import{_ as a}from"./PageWrapper.940fdd9a.js";import{k as n,r as t,u as o,L as r,o as s,q as i,R as l,s as m,Z as p}from"./vendor.c2cc062a.js";import"./index.14da3ba2.js";import"./createAsyncComponent.809684ff.js";import"./usePageContext.a26dede6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var u=n({components:{MarkDown:e,PageWrapper:a},setup(){const e=t(null),a=t("\n# title\n\n# content\n");return{value:a,toggleTheme:function(){const a=o(e);if(!a)return;a.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){a.value=e}}}});const d=p(" 黑暗主题 ");u.render=function(e,a,n,t,o,p){const u=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:l((()=>[m(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:l((()=>[d])),_:1},8,["onClick"]),m(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default u;