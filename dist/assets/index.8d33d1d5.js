import{k as a,ae as e,a as r,f as t,u as s,L as n,o,q as p,R as u,Z as m,x as d,s as i}from"./vendor.c2cc062a.js";import{_ as c}from"./PageWrapper.940fdd9a.js";import"./index.14da3ba2.js";import"./usePageContext.a26dede6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var f=a({name:"TestTab",components:{PageWrapper:c,Input:e},setup(){const{currentRoute:a}=r();return{params:t((()=>s(a).params))}}});const l=i("br",null,null,-1),j=m(" Keep Alive ");f.render=function(a,e,r,t,s,c){const f=n("Input"),x=n("PageWrapper");return o(),p(x,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:u((()=>[m(" Current Param : "+d(a.params)+" ",1),l,j,i(f)])),_:1})};export default f;