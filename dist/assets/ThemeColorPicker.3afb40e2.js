import{c as e}from"./index.3df22268.js";import{b as s}from"./index.c919adcf.js";import{k as t,bz as i,L as r,o,q as n,W as a,ai as c,s as p}from"./vendor.c2cc062a.js";import"./useDrawer.3469617a.js";/* empty css              *//* empty css              */import"./createAsyncComponent.40617580.js";import"./index.2783905a.js";import"./index.42972212.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.8b2e96f1.js";/* empty css              */import"./useSortable.8da6b1c7.js";import"./lock.69d83285.js";var d=t({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){t.event&&s(t.event,e)}}}});d.render=function(e,s,t,i,d,l){const m=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,c(e.colorList||[],(s=>(o(),n("span",{key:s,onClick:t=>e.handleClick(s),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===s}],style:{background:s}},[p(m)],14,["onClick"])))),128))],2)};export default d;
