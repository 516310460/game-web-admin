import{c as e}from"./index.7fd854bf.js";import{b as s}from"./index.4f096205.js";import{k as t,bz as i,L as r,o,q as n,W as a,ai as c,s as p}from"./vendor.c2cc062a.js";import"./useDrawer.f77d227d.js";/* empty css              *//* empty css              */import"./createAsyncComponent.b160c98c.js";import"./index.17acf39b.js";import"./index.f3a62b17.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.d6556528.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./lock.06f0b326.js";var d=t({name:"ThemeColorPicker",components:{CheckOutlined:i},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(t){const{prefixCls:i}=e("setting-theme-picker");return{prefixCls:i,handleClick:function(e){t.event&&s(t.event,e)}}}});d.render=function(e,s,t,i,d,f){const l=r("CheckOutlined");return o(),n("div",{class:e.prefixCls},[(o(!0),n(a,null,c(e.colorList||[],(s=>(o(),n("span",{key:s,onClick:t=>e.handleClick(s),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===s}],style:{background:s}},[p(l)],14,["onClick"])))),128))],2)};export default d;