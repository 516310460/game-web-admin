import{u as e}from"./useScript.f2e24cf8.js";import{k as t,r,J as a,K as n,u as o,o as i,q as s}from"./vendor.c2cc062a.js";var p=t({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=r(null),{toPromise:i}=e({src:"https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b"});function s(){return e=this,r=null,a=function*(){yield i(),yield n();const e=o(t);e&&new window.AMap.Map(e,{zoom:11,center:[116.397428,39.90923],viewMode:"3D"})},new Promise(((t,n)=>{var o=e=>{try{s(a.next(e))}catch(t){n(t)}},i=e=>{try{s(a.throw(e))}catch(t){n(t)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,i);s((a=a.apply(e,r)).next())}));var e,r,a}return a((()=>{s()})),{wrapRef:t}}});p.render=function(e,t,r,a,n,o){return i(),s("div",{ref:"wrapRef",style:{height:e.height,width:e.width}},null,4)};export default p;
