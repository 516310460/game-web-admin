import{k as e,bJ as t,f as s,l as o,n as a,L as n,o as r,q as i,y as l,s as u,x as d,Z as p}from"./vendor.c2cc062a.js";/* empty css              */import c from"./CurrentPermissionMode.14be77ae.js";import{aj as m,f,b0 as R}from"./index.9345068b.js";import{_ as g}from"./PageWrapper.5e932ddb.js";/* empty css              */import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var b=e({components:{Alert:t,CurrentPermissionMode:c,PageWrapper:g},setup(){const{changeRole:e}=m(),t=f();return{userStore:t,RoleEnum:R,isSuper:s((()=>t.getRoleList.includes(R.SUPER))),isTest:s((()=>t.getRoleList.includes(R.TEST))),changeRole:e}}});const j=l();o("data-v-438dc586");const E=p(" 当前角色: "),P={class:"mt-4"},S=p(" 权限切换(请先切换权限模式为前端角色权限模式): ");a();const x=j(((e,t,s,o,a,l)=>{const c=n("CurrentPermissionMode"),m=n("Alert"),f=n("a-button"),R=n("a-button-group"),g=n("PageWrapper");return r(),i(g,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:j((()=>[u(c),u("p",null,[E,u("a",null,d(e.userStore.getRoleList),1)]),u(m,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",P,[S,u(R,null,{default:j((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:j((()=>[p(d(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:j((()=>[p(d(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));b.render=x,b.__scopeId="data-v-438dc586";export default b;
