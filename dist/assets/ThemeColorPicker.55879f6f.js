import{c as e}from"./index.e2f8dfb6.js";import{b as s}from"./index.394cd7c4.js";import{k as t,bz as i,L as r,o,q as n,W as a,ai as c,s as d}from"./vendor.c2cc062a.js";import"./useDrawer.e67ddabc.js";/* empty css              *//* empty css              */import"./createAsyncComponent.f88b6da5.js";import"./index.0172db63.js";import"./index.af43ab75.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.e3c0a1fa.js";/* empty css              */import"./useSortable.584897bb.js";import"./lock.2f5525ad.js";var p=t({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){t.event&&s(t.event,e)}}}});p.render=function(e,s,t,i,p,f){const l=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,c(e.colorList||[],(s=>(o(),n("span",{key:s,onClick:t=>e.handleClick(s),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===s}],style:{background:s}},[d(l)],14,["onClick"])))),128))],2)};export default p;
