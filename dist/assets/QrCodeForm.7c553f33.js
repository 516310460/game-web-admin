import{_ as e,u as s,L as a}from"./LoginFormTitle.b31cb32f.js";import{k as t,aK as n,aX as o,f as r,u as i,L as l,o as c,q as d,s as m,R as f,Z as g,x as u,W as x,Y as p}from"./vendor.c2cc062a.js";/* empty css              */import{_ as k}from"./Qrcode.1a34123a.js";import{d as v}from"./index.b2f89009.js";import"./download.22cf218c.js";var L=t({name:"QrCodeForm",components:{Button:n,QrCode:k,Divider:o,LoginFormTitle:e},setup(){const{t:e}=v(),{handleBackLogin:t,getLoginState:n}=s();return{t:e,handleBackLogin:t,qrCodeUrl:"https://vvbin.cn/next/login",getShow:r((()=>i(n)===a.QR_CODE))}}});const h={class:"enter-x min-w-64 min-h-64"};L.render=function(e,s,a,t,n,o){const r=l("LoginFormTitle"),i=l("QrCode"),k=l("Divider"),v=l("Button");return e.getShow?(c(),d(x,{key:0},[m(r,{class:"enter-x"}),m("div",h,[m(i,{value:e.qrCodeUrl,class:"enter-x flex justify-center xl:justify-start",width:280},null,8,["value"]),m(k,{class:"enter-x"},{default:f((()=>[g(u(e.t("sys.login.scanSign")),1)])),_:1}),m(v,{size:"large",block:"",class:"mt-4 enter-x",onClick:e.handleBackLogin},{default:f((()=>[g(u(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])],64)):p("",!0)};export default L;