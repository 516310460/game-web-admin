import{k as t,r as e,b4 as s,f as l,u as a,s as n,aK as i,b5 as r}from"./vendor.c2cc062a.js";/* empty css              */import{E as o,k as u,l as c,d as T,c as b,P as p}from"./index.7fd854bf.js";var d=t({name:"ErrorPage",props:{status:{type:Number,default:o.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const d=e(new Map),{query:f}=s(),x=u(),E=c(),{t:_}=T(),{prefixCls:m}=b("app-exception-page"),y=l((()=>{const{status:e}=f,{status:s}=t;return Number(e)||s})),O=l((()=>a(d).get(a(y)))),N=_("sys.exception.backLogin"),A=_("sys.exception.backHome");return a(d).set(o.PAGE_NOT_ACCESS,{title:"403",status:`${o.PAGE_NOT_ACCESS}`,subTitle:_("sys.exception.subTitle403"),btnText:t.full?N:A,handler:()=>t.full?x(p.BASE_LOGIN):x()}),a(d).set(o.PAGE_NOT_FOUND,{title:"404",status:`${o.PAGE_NOT_FOUND}`,subTitle:_("sys.exception.subTitle404"),btnText:t.full?N:A,handler:()=>t.full?x(p.BASE_LOGIN):x()}),a(d).set(o.ERROR,{title:"500",status:`${o.ERROR}`,subTitle:_("sys.exception.subTitle500"),btnText:A,handler:()=>x()}),a(d).set(o.PAGE_NOT_DATA,{title:_("sys.exception.noDataTitle"),subTitle:"",btnText:_("common.redo"),handler:()=>E(),icon:"/assets/no-data.f7e550cc.svg"}),a(d).set(o.NET_WORK_ERROR,{title:_("sys.exception.networkErrorTitle"),subTitle:_("sys.exception.networkErrorSubTitle"),btnText:_("common.redo"),handler:()=>E(),icon:"/assets/net-error.61b7e6df.svg"}),()=>{const{title:e,subTitle:s,btnText:l,icon:o,handler:u,status:c}=a(O)||{};return n(r,{class:m,status:c,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>l&&n(i,{type:"primary",onClick:u},{default:()=>l}),icon:()=>o?n("img",{src:o},null):null})}}});export default d;
