import{_ as a,u as e,L as s}from"./LoginFormTitle.c1289acb.js";import{k as t,aK as n,aX as o,f as r,u as i,L as l,o as c,q as d,s as m,R as g,Z as u,x as f,W as x,Y as p}from"./vendor.c2cc062a.js";/* empty css              */import{_ as k}from"./Qrcode.96f7baad.js";import{d as v}from"./index.c6214277.js";import"./download.40a24583.js";var L=t({name:"QrCodeForm",components:{Button:n,QrCode:k,Divider:o,LoginFormTitle:a},setup(){const{t:a}=v(),{handleBackLogin:t,getLoginState:n}=e();return{t:a,handleBackLogin:t,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(n)===s.QR_CODE))}}});const h={class:"enter-x min-w-64 min-h-64"};L.render=function(a,e,s,t,n,o){const r=l("LoginFormTitle"),i=l("QrCode"),k=l("Divider"),v=l("Button");return a.getShow?(c(),d(x,{key:0},[m(r,{class:"enter-x"}),m("div",h,[m(i,{value:a.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(k,{class:"enter-x"},{default:g((()=>[u(f(a.t("sys.login.scanSign")),1)])),_:1}),m(v,{size:"large",block:"",class:"mt-4 enter-x",onClick:a.handleBackLogin},{default:g((()=>[u(f(a.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default L;
