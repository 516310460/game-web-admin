import{k as e,bv as t,f as n,L as s,o as i,q as a,s as d,x as o,O as r,y as c}from"./vendor.c2cc062a.js";/* empty css              */import{c as p,d as l}from"./index.05b44a3f.js";import{b as f}from"./index.89f84bb8.js";import"./useDrawer.166a9d40.js";/* empty css              *//* empty css              */import"./createAsyncComponent.dd982132.js";import"./index.6a6d23c1.js";import"./index.5607f6e7.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.e2293ccf.js";/* empty css              */import"./useSortable.a2743851.js";import"./lock.2aca3734.js";var m=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=p("setting-switch-item"),{t:s}=l();return{prefixCls:t,t:s,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,n,c,p,l)=>{const f=s("Switch");return i(),a("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(f,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));m.render=h,m.__scopeId="data-v-440e72fd";export default m;