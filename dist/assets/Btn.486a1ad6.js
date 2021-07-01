import{k as e,bJ as s,aX as a,f as o,l as r,n as t,L as i,as as n,o as c,q as d,y as l,s as m,x as u,W as p,Y as f,w as y,Z as _}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import P from"./CurrentPermissionMode.3491a6c9.js";import{aj as h,G as x,V as k,f as v,b1 as b}from"./index.c6214277.js";import{_ as j}from"./Authority.vue_vue&type=script&lang.3f3690c7.js";import{_ as g}from"./PageWrapper.9733b54c.js";import"./usePageContext.211cdadf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var C=e({components:{Alert:s,PageWrapper:g,CurrentPermissionMode:P,Divider:a,Authority:j},setup(){const{hasPermission:e}=h(),s=x(),a=k(),r=v(),t=o((()=>a.getProjectConfig.permissionMode===b.BACK));return{hasPermission:e,permissionStore:s,switchToken:function(e){return a=this,o=null,t=function*(){const a="fakeToken"+e;r.setToken(a),r.getUserInfoAction(),s.changePermissionCode()},new Promise(((e,s)=>{var r=e=>{try{n(t.next(e))}catch(a){s(a)}},i=e=>{try{n(t.throw(e))}catch(a){s(a)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,i);n((t=t.apply(a,o)).next())}));var a,o,t},isBackPremissionMode:t}}});const M=l();r("data-v-bab1a030");const A=_(" 当前拥有的code列表: "),w=_(" 点击切换按钮权限(用户id为2) "),B=_(" 点击切换按钮权限(用户id为1,默认) "),T=_("组件方式判断权限"),W=_(" 拥有code ['1000']权限可见 "),D=_(" 拥有code ['2000']权限可见 "),I=_(" 拥有code ['1000','2000']角色权限可见 "),L=_("函数方式方式判断权限"),S=_(" 拥有code ['1000']权限可见 "),q=_(" 拥有code ['2000']权限可见 "),G=_(" 拥有code ['1000','2000']角色权限可见 "),J=_("指令方式方式判断权限(该方式不能动态修改权限.)"),K=_(" 拥有code ['1000']权限可见 "),O=_(" 拥有code ['2000']权限可见 "),U=_(" 拥有code ['1000','2000']角色权限可见 ");t();const V=M(((e,s,a,o,r,t)=>{const l=i("CurrentPermissionMode"),_=i("Divider"),P=i("Alert"),h=i("a-button"),x=i("Authority"),k=i("PageWrapper"),v=n("auth");return c(),d(k,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:M((()=>[m(l),m("p",null,[A,m("a",null,u(e.permissionStore.getPermCodeList),1)]),m(_),m(P,{class:"mt-4",type:"info",message:"点击后请查看按钮变化(必须处于后台权限模式才可测试此页面所展示的功能)","show-icon":""}),m(_),m(h,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:M((()=>[w])),_:1},8,["disabled"]),m(h,{type:"primary",onClick:s[2]||(s[2]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:M((()=>[B])),_:1},8,["disabled"]),e.isBackPremissionMode?(c(),d(p,{key:0},[m(_,null,{default:M((()=>[T])),_:1}),m(x,{value:"1000"},{default:M((()=>[m(h,{type:"primary",class:"mx-4"},{default:M((()=>[W])),_:1})])),_:1}),m(x,{value:"2000"},{default:M((()=>[m(h,{color:"success",class:"mx-4"},{default:M((()=>[D])),_:1})])),_:1}),m(x,{value:["1000","2000"]},{default:M((()=>[m(h,{color:"error",class:"mx-4"},{default:M((()=>[I])),_:1})])),_:1}),m(_,null,{default:M((()=>[L])),_:1}),e.hasPermission("1000")?(c(),d(h,{key:0,type:"primary",class:"mx-4"},{default:M((()=>[S])),_:1})):f("",!0),e.hasPermission("2000")?(c(),d(h,{key:1,color:"success",class:"mx-4"},{default:M((()=>[q])),_:1})):f("",!0),e.hasPermission(["1000","2000"])?(c(),d(h,{key:2,color:"error",class:"mx-4"},{default:M((()=>[G])),_:1})):f("",!0),m(_,null,{default:M((()=>[J])),_:1}),y(m(h,{type:"primary",class:"mx-4"},{default:M((()=>[K])),_:1},512),[[v,"1000"]]),y(m(h,{color:"success",class:"mx-4"},{default:M((()=>[O])),_:1},512),[[v,"2000"]]),y(m(h,{color:"error",class:"mx-4"},{default:M((()=>[U])),_:1},512),[[v,["1000","2000"]]])],64)):f("",!0)])),_:1})}));C.render=V,C.__scopeId="data-v-bab1a030";export default C;
