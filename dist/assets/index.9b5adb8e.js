import{C as e,L as t,b7 as o,c as s,Q as r,U as i}from"./index.2d95079e.js";import{k as n,cd as a,f as m,u as p,L as g,o as c,q as d,s as u,Y as f,W as j}from"./vendor.c2cc062a.js";import{c as l}from"./createAsyncComponent.f60e7f0e.js";import T from"./SessionTimeoutLogin.5f843844.js";import"./Login.d48098d6.js";import"./LoginForm.0d1c657e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.317d57ce.js";import"./ForgetPasswordForm.7827b6b2.js";import"./CountdownInput.16091f62.js";import"./RegisterForm.a49f2665.js";import"./StrengthMeter.36cdf8aa.js";import"./MobileForm.bb50d3ff.js";import"./QrCodeForm.acaa5fc1.js";import"./Qrcode.53725fc5.js";import"./download.7f173743.js";var L=n({name:"LayoutFeatures",components:{BackTop:a,LayoutLockPage:l((()=>e((()=>import("./index.0207458b.js")),["/assets/index.0207458b.js","/assets/LockPage.5288013b.js","/assets/LockPage.265a0b3b.css","/assets/vendor.c2cc062a.js","/assets/vendor.2c04f79c.css","/assets/index.2d95079e.js","/assets/index.c383077c.css","/assets/lock.7b7c6760.js","/assets/header.d801b988.js"]))),SettingDrawer:l((()=>e((()=>import("./index.ca309a6c.js").then((function(e){return e.i}))),["/assets/index.ca309a6c.js","/assets/index.6d85b653.css","/assets/useDrawer.e155d5bb.js","/assets/useDrawer.2b4684a4.css","/assets/index.864ac48e.css","/assets/vendor.c2cc062a.js","/assets/vendor.2c04f79c.css","/assets/index.2d95079e.js","/assets/index.c383077c.css","/assets/createAsyncComponent.f60e7f0e.js","/assets/index.86e6b5e4.js","/assets/index.47d73fcd.css","/assets/index.f722313c.css","/assets/index.3a4284f4.js","/assets/index.ba3e480c.css","/assets/useWindowSizeFn.f7fa6c6d.js","/assets/usePageContext.f919706d.js","/assets/useSortable.a844fca0.js","/assets/lock.7b7c6760.js"]))),SessionTimeoutLogin:T},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:a,getFullContent:g}=t(),c=o(),{prefixCls:d}=s("setting-drawer-fearure"),{getShowHeader:u}=r(),f=m((()=>c.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:m((()=>{if(!p(n))return!1;const e=p(a);return e===i.AUTO?!p(u)||p(g):e===i.FIXED})),prefixCls:d,getIsSessionTimeout:f}}});L.render=function(e,t,o,s,r,i){const n=g("LayoutLockPage"),a=g("BackTop"),m=g("SettingDrawer"),p=g("SessionTimeoutLogin");return c(),d(j,null,[u(n),e.getUseOpenBackTop?(c(),d(a,{key:0,target:e.getTarget},null,8,["target"])):f("",!0),e.getIsFixedSettingDrawer?(c(),d(m,{key:1,class:e.prefixCls},null,8,["class"])):f("",!0),e.getIsSessionTimeout?(c(),d(p,{key:2})):f("",!0)],64)};export default L;