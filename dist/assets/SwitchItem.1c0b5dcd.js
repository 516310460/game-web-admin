import{k as e,bv as t,f as n,L as s,o as i,q as d,s as a,x as o,O as r,y as c}from"./vendor.c2cc062a.js";/* empty css              */import{c as p,d as l}from"./index.a9cd95f2.js";import{b as m}from"./index.27cb5834.js";import"./useDrawer.40605fc7.js";/* empty css              *//* empty css              */import"./createAsyncComponent.16996d72.js";import"./index.8660db77.js";import"./index.3a29992f.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.92db9508.js";/* empty css              */import"./useSortable.2e8c80e5.js";import"./lock.995dbe16.js";var f=e({name:"SwitchItem",components:{Switch:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=p("setting-switch-item"),{t:s}=l();return{prefixCls:t,t:s,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:n((()=>e.def?{checked:e.def}:{}))}}});const h=c()(((e,t,n,c,p,l)=>{const m=s("Switch");return i(),d("div",{class:e.prefixCls},[a("span",null,o(e.title),1),a(m,r(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=h,f.__scopeId="data-v-440e72fd";export default f;
