import e from"./CurrentPermissionMode.bd4887c7.js";import{aj as s,f as o,V as t,b0 as n,b1 as r}from"./index.b2f89009.js";import{_ as a}from"./PageWrapper.746818f8.js";import{k as i,bJ as c,f as d,l as m,n as u,L as l,o as f,q as p,y as b,s as k,Z as P}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./usePageContext.172b3d6d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var j=i({components:{Alert:c,CurrentPermissionMode:e,PageWrapper:a},setup(){const{refreshMenu:e}=s(),a=o(),i=t(),c=d((()=>i.getProjectConfig.permissionMode===r.BACK));return{RoleEnum:n,refreshMenu:e,switchToken:function(s){return o=this,t=null,n=function*(){const o="fakeToken"+s;a.setToken(o),a.getUserInfoAction(),e()},new Promise(((e,s)=>{var r=e=>{try{i(n.next(e))}catch(o){s(o)}},a=e=>{try{i(n.throw(e))}catch(o){s(o)}},i=s=>s.done?e(s.value):Promise.resolve(s.value).then(r,a);i((n=n.apply(o,t)).next())}));var o,t,n},isBackPremissionMode:c}}});const h=b();m("data-v-4cc77088");const v={class:"mt-4"},g=P(" 权限切换(请先切换权限模式为后台权限模式): "),M=P(" 获取用户id为1的菜单 "),x=P(" 获取用户id为2的菜单 ");u();const C=h(((e,s,o,t,n,r)=>{const a=l("CurrentPermissionMode"),i=l("Alert"),c=l("a-button"),d=l("a-button-group"),m=l("PageWrapper");return f(),p(m,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:h((()=>[k(a),k(i,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),k("div",v,[g,k(d,null,{default:h((()=>[k(c,{onClick:s[1]||(s[1]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:h((()=>[M])),_:1},8,["disabled"]),k(c,{onClick:s[2]||(s[2]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:h((()=>[x])),_:1},8,["disabled"])])),_:1})])])),_:1})}));j.render=C,j.__scopeId="data-v-4cc77088";export default j;
