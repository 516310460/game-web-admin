import{k as t,bR as e,bT as a,bk as s,l as i,n as l,L as r,o,q as d,W as n,ai as c,s as p,Z as m,x as v,Y as u,y,af as b,cf as f,bh as g,ca as x,R as j}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import{c as h}from"./index.3df22268.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const k=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}];var C=t({components:{[e.name]:e,[a.name]:a,[a.Item.name]:a.Item,AListItemMeta:a.Item.Meta,[s.name]:s},props:{list:{type:Array,default:()=>[]}},setup(){const{prefixCls:t}=h("header-notify-list");return{prefixCls:t}}});const _=y();i("data-v-33c5e8d0");const N={class:"title"},T={key:0,class:"extra"},w={key:1},P={class:"description"},z={class:"datetime"};l();const B=_(((t,e,a,s,i,l)=>{const y=r("a-tag"),b=r("a-avatar"),f=r("a-list-item-meta"),g=r("a-list-item"),x=r("a-list");return o(),d(x,{class:t.prefixCls},{default:_((()=>[(o(!0),d(n,null,c(t.list,(t=>(o(),d(g,{key:t.id,class:"list-item"},{default:_((()=>[p(f,null,{title:_((()=>[p("div",N,[m(v(t.title)+" ",1),t.extra?(o(),d("div",T,[p(y,{class:"tag",color:t.color},{default:_((()=>[m(v(t.extra),1)])),_:2},1032,["color"])])):u("",!0)])])),avatar:_((()=>[t.avatar?(o(),d(b,{key:0,class:"avatar",src:t.avatar},null,8,["src"])):(o(),d("span",w,v(t.avatar),1))])),description:_((()=>[p("div",null,[p("div",P,v(t.description),1),p("div",z,v(t.datetime),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class"])}));C.render=B,C.__scopeId="data-v-33c5e8d0";var O=t({components:{Popover:b,BellOutlined:f,Tabs:g,TabPane:g.TabPane,Badge:x,NoticeList:C},setup(){const{prefixCls:t}=h("header-notify");let e=0;for(let a=0;a<k.length;a++)e+=k[a].list.length;return{prefixCls:t,tabListData:k,count:e,numberStyle:{}}}});const S={key:0};O.render=function(t,e,a,s,i,l){const y=r("BellOutlined"),b=r("Badge"),f=r("NoticeList"),g=r("TabPane"),x=r("Tabs"),h=r("Popover");return o(),d("div",{class:t.prefixCls},[p(h,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:j((()=>[p(x,null,{default:j((()=>[(o(!0),d(n,null,c(t.tabListData,(t=>(o(),d(g,{key:t.key},{tab:j((()=>[m(v(t.name)+" ",1),0!==t.list.length?(o(),d("span",S,"("+v(t.list.length)+")",1)):u("",!0)])),default:j((()=>[p(f,{list:t.list},null,8,["list"])])),_:2},1024)))),128))])),_:1})])),default:j((()=>[p(b,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:j((()=>[p(y)])),_:1},8,["count","numberStyle"])])),_:1},8,["overlayClassName"])],2)};export default O;