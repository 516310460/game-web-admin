import{ad as a,aZ as e,h as o}from"./index.a031c7d6.js";import{_ as t}from"./PageWrapper.e2c73ada.js";import{k as s,ae as n,r,u as l,L as p,o as i,q as c,R as u,s as d,Z as f}from"./vendor.c2cc062a.js";import"./usePageContext.ac42f75d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var m=s({name:"Copy",components:{CollapseContainer:a,PageWrapper:t,[n.name]:n},setup(){const a=r(""),{createMessage:t}=o(),{clipboardRef:s,copiedRef:n}=e();return{handleCopy:function(){const e=l(a);e?(s.value=e,l(n)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:a}}});const C={class:"flex justify-center"},v=f(" Copy ");m.render=function(a,e,o,t,s,n){const r=p("a-input"),l=p("a-button"),f=p("CollapseContainer"),m=p("PageWrapper");return i(),c(m,{title:"文本复制示例"},{default:u((()=>[d(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:u((()=>[d("div",C,[d(r,{placeholder:"请输入",value:a.value,"onUpdate:value":e[1]||(e[1]=e=>a.value=e)},null,8,["value"]),d(l,{type:"primary",onClick:a.handleCopy},{default:u((()=>[v])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default m;
