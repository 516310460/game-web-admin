import{k as o,bc as e,aY as t,a as s,f as a,u as n,l as r,n as i,L as l,o as c,q as d,s as p,x as u,Y as f,y as m}from"./vendor.c2cc062a.js";import"./index.0e02ac31.js";import{D as C,G as b,S as x}from"./siteSetting.c485f07c.js";import{L as _,c as j,o as F,d as L}from"./index.9345068b.js";import"./createAsyncComponent.1972d182.js";import"./index.68798afb.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./useSortable.dbdac56c.js";import"./lock.2e5bb049.js";var y=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:t},setup(){const{t:o}=L(),{getShowFooter:e}=_(),{currentRoute:t}=s(),{prefixCls:r}=j("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return n(e)&&!(null==(o=n(t).meta)?void 0:o.hiddenFooter)})),prefixCls:r,t:o,DOC_URL:C,GITHUB_URL:b,SITE_URL:x,openWindow:F}}});const v=m();r("data-v-901f1664");const w=p("div",null,"Copyright ©2020 奇迹TGC Admin",-1);i();const S=v(((o,e,t,s,a,n)=>{const r=l("GithubFilled"),i=l("Footer");return o.getShowLayoutFooter?(c(),d(i,{key:0,class:o.prefixCls},{default:v((()=>[p("div",{class:`${o.prefixCls}__links`},[p("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},u(o.t("layout.footer.onlinePreview")),1),p(r,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),p("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},u(o.t("layout.footer.onlineDocument")),1)],2),w])),_:1},8,["class"])):f("",!0)}));y.render=S,y.__scopeId="data-v-901f1664";export default y;
