import{k as e,a0 as a,L as t,o,q as r,R as n,s}from"./vendor.c2cc062a.js";import i from"./TargetContent.33cb487a.js";import{aU as d}from"./index.9345068b.js";import{_ as p}from"./PageWrapper.5e932ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var m=e({components:{LazyContainer:d,PageWrapper:p,TargetContent:i,Skeleton:a}});const l={class:"lazy-base-demo-wrap"},c=s("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};m.render=function(e,a,i,d,p,m){const b=t("TargetContent"),f=t("Skeleton"),u=t("LazyContainer"),x=t("PageWrapper");return o(),r(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:n((()=>[s("div",l,[c,s("div",j,[s(u,null,{skeleton:n((()=>[s(f,{rows:10})])),default:n((()=>[s(b)])),_:1})])])])),_:1})};export default m;
