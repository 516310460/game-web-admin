import{k as a,bI as s,bT as e,aU as t,aT as l,l as i,n,L as o,o as r,q as p,y as c,s as d,W as u,ai as m,Y as f,x as _,Z as v}from"./vendor.c2cc062a.js";/* empty css              */import{n as x}from"./index.bb679890.js";import{cardList as g}from"./data.a96915dc.js";import{_ as j}from"./PageWrapper.bea03196.js";/* empty css              */import"./usePageContext.fe28792d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var b=a({components:{Icon:x,Progress:s,PageWrapper:j,[e.name]:e,[e.Item.name]:e.Item,AListItemMeta:e.Item.Meta,[t.name]:t,[l.name]:l},setup:()=>({prefixCls:"list-basic",list:g,pagination:{show:!0,pageSize:3}})});const C=c();i("data-v-ee3e44a0");const I=d("div",null,"我的待办",-1),P=d("p",null,"8个任务",-1),$=d("div",null,"本周任务平均处理时间",-1),k=d("p",null,"32分钟",-1),y=d("div",null,"本周完成任务数",-1),W=d("p",null,"24个任务",-1),w={key:0,class:"extra"},M={class:"description"},h={class:"info"},A=d("span",null,"Owner",-1),L=d("span",null,"开始时间",-1),O={class:"progress"};n();const T=C(((a,s,e,t,l,i)=>{const n=o("a-col"),c=o("a-row"),x=o("Icon"),g=o("Progress"),j=o("a-list-item-meta"),b=o("a-list-item"),T=o("a-list"),q=o("PageWrapper");return r(),p(q,{class:a.prefixCls,title:"标准列表"},{default:C((()=>[d("div",{class:`${a.prefixCls}__top`},[d(c,{gutter:12},{default:C((()=>[d(n,{span:8,class:`${a.prefixCls}__top-col`},{default:C((()=>[I,P])),_:1},8,["class"]),d(n,{span:8,class:`${a.prefixCls}__top-col`},{default:C((()=>[$,k])),_:1},8,["class"]),d(n,{span:8,class:`${a.prefixCls}__top-col`},{default:C((()=>[y,W])),_:1},8,["class"])])),_:1})],2),d("div",{class:`${a.prefixCls}__content`},[d(T,{pagination:a.pagination},{default:C((()=>[(r(!0),p(u,null,m(a.list,(a=>(r(),p(b,{key:a.id,class:"list"},{default:C((()=>[d(j,null,{avatar:C((()=>[a.icon?(r(),p(x,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):f("",!0)])),title:C((()=>[d("span",null,_(a.title),1),a.extra?(r(),p("div",w,_(a.extra),1)):f("",!0)])),description:C((()=>[d("div",M,_(a.description),1),d("div",h,[d("div",null,[A,v(_(a.author),1)]),d("div",null,[L,v(_(a.datetime),1)])]),d("div",O,[d(g,{percent:a.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));b.render=T,b.__scopeId="data-v-ee3e44a0";export default b;
