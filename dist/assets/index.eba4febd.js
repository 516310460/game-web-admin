import{M as e}from"./index.c782cffd.js";import{_ as n}from"./PageWrapper.e33b63d0.js";import{k as a,r as t,u as o,L as r,o as s,q as i,R as c,s as l,Z as m}from"./vendor.c2cc062a.js";import"./index.7fd854bf.js";import"./createAsyncComponent.b160c98c.js";import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var p=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const u=m(" 黑暗主题 ");p.render=function(e,n,a,t,o,m){const p=r("a-button"),d=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:c((()=>[l(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:c((()=>[u])),_:1},8,["onClick"]),l(d,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;