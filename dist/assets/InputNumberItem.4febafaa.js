import{k as e,bt as s,L as t,o as n,q as r,s as a,x as i,O as o,y as p}from"./vendor.c2cc062a.js";/* empty css              */import{c as m}from"./index.b2f89009.js";import{b as d}from"./index.869071a4.js";import"./useDrawer.7eb8101d.js";/* empty css              *//* empty css              */import"./createAsyncComponent.17b68bda.js";import"./index.bb64b6fd.js";import"./index.c00ac731.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.172b3d6d.js";/* empty css              */import"./useSortable.3e0e9015.js";import"./lock.a954716a.js";var b=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=m("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&d(e.event,s)}}}});const u=p()(((e,s,p,m,d,b)=>{const u=t("InputNumber");return n(),r("div",{class:e.prefixCls},[a("span",null,i(e.title),1),a(u,o(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));b.render=u,b.__scopeId="data-v-e6b792da";export default b;