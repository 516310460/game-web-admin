import{k as a,bI as s,bT as e,aU as t,aT as l,l as i,n,L as o,o as r,q as c,y as p,s as d,W as u,ai as m,Y as f,x as _,Z as v}from"./vendor.c2cc062a.js";/* empty css              */import{n as x}from"./index.c6214277.js";import{cardList as g}from"./data.a96915dc.js";import{_ as j}from"./PageWrapper.9733b54c.js";/* empty css              */import"./usePageContext.211cdadf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var C=a({components:{Icon:x,Progress:s,PageWrapper:j,[e.name]:e,[e.Item.name]:e.Item,AListItemMeta:e.Item.Meta,[t.name]:t,[l.name]:l},setup:()=>({prefixCls:"list-basic",list:g,pagination:{show:!0,pageSize:3}})});const I=p();i("data-v-ee3e44a0");const b=d("div",null,"我的待办",-1),P=d("p",null,"8个任务",-1),$=d("div",null,"本周任务平均处理时间",-1),k=d("p",null,"32分钟",-1),y=d("div",null,"本周完成任务数",-1),W=d("p",null,"24个任务",-1),w={key:0,class:"extra"},M={class:"description"},h={class:"info"},A=d("span",null,"Owner",-1),L=d("span",null,"开始时间",-1),O={class:"progress"};n();const T=I(((a,s,e,t,l,i)=>{const n=o("a-col"),p=o("a-row"),x=o("Icon"),g=o("Progress"),j=o("a-list-item-meta"),C=o("a-list-item"),T=o("a-list"),q=o("PageWrapper");return r(),c(q,{class:a.prefixCls,title:"标准列表"},{default:I((()=>[d("div",{class:`${a.prefixCls}__top`},[d(p,{gutter:12},{default:I((()=>[d(n,{span:8,class:`${a.prefixCls}__top-col`},{default:I((()=>[b,P])),_:1},8,["class"]),d(n,{span:8,class:`${a.prefixCls}__top-col`},{default:I((()=>[$,k])),_:1},8,["class"]),d(n,{span:8,class:`${a.prefixCls}__top-col`},{default:I((()=>[y,W])),_:1},8,["class"])])),_:1})],2),d("div",{class:`${a.prefixCls}__content`},[d(T,{pagination:a.pagination},{default:I((()=>[(r(!0),c(u,null,m(a.list,(a=>(r(),c(C,{key:a.id,class:"list"},{default:I((()=>[d(j,null,{avatar:I((()=>[a.icon?(r(),c(x,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):f("",!0)])),title:I((()=>[d("span",null,_(a.title),1),a.extra?(r(),c("div",w,_(a.extra),1)):f("",!0)])),description:I((()=>[d("div",M,_(a.description),1),d("div",h,[d("div",null,[A,v(_(a.author),1)]),d("div",null,[L,v(_(a.datetime),1)])]),d("div",O,[d(g,{percent:a.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));C.render=T,C.__scopeId="data-v-ee3e44a0";export default C;
