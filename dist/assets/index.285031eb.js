import{ad as e,h as n}from"./index.e2f8dfb6.js";import{_ as o}from"./PageWrapper.304283c7.js";import{k as s,L as a,o as r,q as c,R as l,s as t,Z as i}from"./vendor.c2cc062a.js";import"./usePageContext.e3c0a1fa.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var d=s({components:{CollapseContainer:e,PageWrapper:o},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:a,createErrorModal:r,createWarningModal:c,notification:l}=n(),{info:t,success:i,warning:d,error:f}=e;return{infoMsg:t,successMsg:i,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){c({title:"Tip",content:"content message..."})},handleInfoModal:function(){a({title:"Tip",content:"content message..."})},handleNotify:function(){l.success({message:"Tip",description:"content message..."})}}}});const f=i(" Info "),u=i(" Success "),m=i(" Warning "),g=i(" Error "),C=i(" Loading "),p=i(" Info "),h=i(" Warning "),M=i(" Success "),k=i(" Error "),_=i(" Info "),w=i(" Success "),W=i(" Error "),S=i(" Warning "),b=i(" Success ");d.render=function(e,n,o,s,i,d){const j=a("a-button"),E=a("CollapseContainer"),I=a("PageWrapper");return r(),c(I,{title:"消息示例"},{default:l((()=>[t(E,{class:"w-full h-32 bg-white rounded-md",title:"Message"},{default:l((()=>[t(j,{onClick:n[1]||(n[1]=n=>e.infoMsg("Info message")),class:"mr-2"},{default:l((()=>[f])),_:1}),t(j,{onClick:n[2]||(n[2]=n=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:l((()=>[u])),_:1}),t(j,{onClick:n[3]||(n[3]=n=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:l((()=>[m])),_:1}),t(j,{onClick:n[4]||(n[4]=n=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:l((()=>[g])),_:1}),t(j,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:l((()=>[C])),_:1},8,["onClick"])])),_:1}),t(E,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Comfirm"},{default:l((()=>[t(j,{onClick:n[5]||(n[5]=n=>e.handleConfirm("info")),class:"mr-2"},{default:l((()=>[p])),_:1}),t(j,{onClick:n[6]||(n[6]=n=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:l((()=>[h])),_:1}),t(j,{onClick:n[7]||(n[7]=n=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:l((()=>[M])),_:1}),t(j,{onClick:n[8]||(n[8]=n=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:l((()=>[k])),_:1})])),_:1}),t(E,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Modal"},{default:l((()=>[t(j,{onClick:e.handleInfoModal,class:"mr-2"},{default:l((()=>[_])),_:1},8,["onClick"]),t(j,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:l((()=>[w])),_:1},8,["onClick"]),t(j,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:l((()=>[W])),_:1},8,["onClick"]),t(j,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:l((()=>[S])),_:1},8,["onClick"])])),_:1}),t(E,{class:"w-full h-32 mt-5 bg-white rounded-md",title:"Notification 用法与上面一致"},{default:l((()=>[t(j,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;
