import{k as e,bJ as r,L as o,o as a,q as s,R as t,s as i,Z as n}from"./vendor.c2cc062a.js";/* empty css              */import{u as p}from"./useDrawer.cc3f9790.js";import m from"./Drawer1.1dbbc859.js";import d from"./Drawer2.5e72ee85.js";import w from"./Drawer3.ec832e1e.js";import c from"./Drawer4.7eda9177.js";import f from"./Drawer5.4b336253.js";import{_ as D}from"./PageWrapper.5e932ddb.js";/* empty css              */import"./index.9345068b.js";import"./BasicForm.dbc54f8f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.de5ce37b.js";import"./useModal.1e927a40.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.5e18ee04.js";import"./StrengthMeter.d3194e4f.js";import"./useForm.a1fbfd4e.js";import"./usePageContext.6581b5ec.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var l=e({components:{Alert:r,PageWrapper:D,Drawer1:m,Drawer2:d,Drawer3:w,Drawer4:c,Drawer5:f},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[a,{openDrawer:s}]=p(),[t,{openDrawer:i}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:w}]=p();return{register1:e,openDrawer1:r,register2:a,openDrawer2:s,register3:t,openDrawer3:i,register4:n,register5:d,openDrawer5:w,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const g=n(" 打开Drawer "),j=n(" 打开Drawer "),u=n(" 打开Drawer "),b=n(" 打开Drawer并传递数据 "),x=n(" 打开详情Drawer ");l.render=function(e,r,n,p,m,d){const w=o("Alert"),c=o("a-button"),f=o("Drawer1"),D=o("Drawer2"),l=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return a(),s(C,{title:"抽屉组件使用示例"},{default:t((()=>[i(w,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),i(c,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[g])),_:1},8,["onClick"]),i(w,{message:"内外同时控制显示隐藏","show-icon":""}),i(c,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:t((()=>[j])),_:1}),i(w,{message:"自适应高度/显示footer","show-icon":""}),i(c,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:t((()=>[u])),_:1}),i(w,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),i(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),i(w,{message:"详情页模式","show-icon":""}),i(c,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),i(f,{onRegister:e.register1},null,8,["onRegister"]),i(D,{onRegister:e.register2},null,8,["onRegister"]),i(l,{onRegister:e.register3},null,8,["onRegister"]),i(y,{onRegister:e.register4},null,8,["onRegister"]),i(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default l;
