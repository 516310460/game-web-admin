import{ad as e,aZ as a,h as o}from"./index.9345068b.js";import{_ as t}from"./PageWrapper.5e932ddb.js";import{k as s,ae as n,r,u as l,L as p,o as i,q as u,R as c,s as d,Z as f}from"./vendor.c2cc062a.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var m=s({name:"Copy",components:{CollapseContainer:e,PageWrapper:t,[n.name]:n},setup(){const e=r(""),{createMessage:t}=o(),{clipboardRef:s,copiedRef:n}=a();return{handleCopy:function(){const a=l(e);a?(s.value=a,l(n)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:e}}});const C={class:"flex justify-center"},v=f(" Copy ");m.render=function(e,a,o,t,s,n){const r=p("a-input"),l=p("a-button"),f=p("CollapseContainer"),m=p("PageWrapper");return i(),u(m,{title:"文本复制示例"},{default:c((()=>[d(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:c((()=>[d("div",C,[d(r,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),d(l,{type:"primary",onClick:e.handleCopy},{default:c((()=>[v])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default m;
