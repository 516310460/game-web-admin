import{k as o,bc as e,aY as t,a as s,f as a,u as n,l as r,n as i,L as l,o as c,q as d,s as p,x as u,Y as f,y as m}from"./vendor.c2cc062a.js";import"./index.6a6d23c1.js";import{D as C,G as x,S as _}from"./siteSetting.c485f07c.js";import{L as j,c as F,o as L,d as y}from"./index.05b44a3f.js";import"./createAsyncComponent.dd982132.js";import"./index.5607f6e7.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.e2293ccf.js";/* empty css              *//* empty css              */import"./useSortable.a2743851.js";import"./lock.2aca3734.js";var v=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:t},setup(){const{t:o}=y(),{getShowFooter:e}=j(),{currentRoute:t}=s(),{prefixCls:r}=F("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return n(e)&&!(null==(o=n(t).meta)?void 0:o.hiddenFooter)})),prefixCls:r,t:o,DOC_URL:C,GITHUB_URL:x,SITE_URL:_,openWindow:L}}});const w=m();r("data-v-901f1664");const S=p("div",null,"Copyright ©2020 奇迹TGC Admin",-1);i();const b=w(((o,e,t,s,a,n)=>{const r=l("GithubFilled"),i=l("Footer");return o.getShowLayoutFooter?(c(),d(i,{key:0,class:o.prefixCls},{default:w((()=>[p("div",{class:`${o.prefixCls}__links`},[p("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},u(o.t("layout.footer.onlinePreview")),1),p(r,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),p("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},u(o.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):f("",!0)}));v.render=b,v.__scopeId="data-v-901f1664";export default v;