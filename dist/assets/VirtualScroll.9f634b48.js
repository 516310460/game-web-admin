import{C as t}from"./index.14da3ba2.js";import{c as a}from"./createAsyncComponent.809684ff.js";import{k as e,aX as s,l as r,n as i,L as o,o as l,q as d,s as c,x as m,y as n,Z as p}from"./vendor.c2cc062a.js";/* empty css              */import{_ as u}from"./PageWrapper.940fdd9a.js";import"./usePageContext.a26dede6.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const f=a((()=>t((()=>import("./VirtualScroll.36d708c3.js")),["/assets/VirtualScroll.36d708c3.js","/assets/VirtualScroll.7ff9340b.css","/assets/index.14da3ba2.js","/assets/index.c383077c.css","/assets/vendor.c2cc062a.js","/assets/vendor.2c04f79c.css"]))),_=(()=>{const t=[];for(let a=1;a<2e4;a++)t.push({title:"列表项"+a});return t})();var v=e({components:{VScroll:f,Divider:s,PageWrapper:u},setup:()=>({data:_})});const h=n();r("data-v-002a1a68");const j=p("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},P=p("即使不可见，也预先加载50条数据，防止空白"),b={class:"virtual-scroll-demo-wrap"},w={class:"virtual-scroll-demo__item"};i();const V=h(((t,a,e,s,r,i)=>{const n=o("Divider"),p=o("VScroll"),u=o("PageWrapper");return l(),d(u,{class:"virtual-scroll-demo"},{default:h((()=>[c(n,null,{default:h((()=>[j])),_:1}),c("div",g,[c(p,{itemHeight:41,items:t.data,height:300,width:300},{default:h((({item:t})=>[c("div",x,m(t.title),1)])),_:1},8,["items"])]),c(n,null,{default:h((()=>[P])),_:1}),c("div",b,[c(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:h((({item:t})=>[c("div",w,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));v.render=V,v.__scopeId="data-v-002a1a68";export default v;
