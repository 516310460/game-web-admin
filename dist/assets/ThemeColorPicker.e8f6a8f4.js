import{c as e}from"./index.2d95079e.js";import{b as s}from"./index.ca309a6c.js";import{k as t,bz as i,L as r,o,q as n,W as a,ai as c,s as p}from"./vendor.c2cc062a.js";import"./useDrawer.e155d5bb.js";/* empty css              *//* empty css              */import"./createAsyncComponent.f60e7f0e.js";import"./index.86e6b5e4.js";import"./index.3a4284f4.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.f919706d.js";/* empty css              */import"./useSortable.a844fca0.js";import"./lock.7b7c6760.js";var d=t({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){t.event&&s(t.event,e)}}}});d.render=function(e,s,t,i,d,l){const m=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,c(e.colorList||[],(s=>(o(),n("span",{key:s,onClick:t=>e.handleClick(s),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===s}],style:{background:s}},[p(m)],14,["onClick"])))),128))],2)};export default d;
