import{u as e}from"./useContextMenu.8cbb6d0a.js";import{ad as t,h as n}from"./index.7fd854bf.js";import{_ as a}from"./PageWrapper.e33b63d0.js";import{k as l,L as o,o as i,q as s,R as r,s as c,Z as p}from"./vendor.c2cc062a.js";/* empty css              */import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var d=l({components:{CollapseContainer:t,PageWrapper:a},setup(){const[t]=e(),{createMessage:a}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{a.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{a.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{a.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const u=p(" Right Click on me "),m=p(" Right Click on me ");d.render=function(e,t,n,a,l,p){const d=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return i(),s(f,{title:"右键菜单示例"},{default:r((()=>[c(b,{title:"Simple"},{default:r((()=>[c(d,{type:"primary",onContextmenu:e.handleContext},{default:r((()=>[u])),_:1},8,["onContextmenu"])])),_:1}),c(b,{title:"Multiple",class:"mt-4"},{default:r((()=>[c(d,{type:"primary",onContextmenu:e.handleMultipleContext},{default:r((()=>[m])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default d;
