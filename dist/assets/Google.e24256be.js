import{u as e}from"./useScript.f2e24cf8.js";import{k as t,r,J as a,K as n,u as o,o as s,q as i}from"./vendor.c2cc062a.js";var l=t({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=r(null),{toPromise:s}=e({src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true"});function i(){return e=this,r=null,a=function*(){yield s(),yield n();const e=o(t);if(!e)return;const r=window.google,a={lat:116.404,lng:39.915},i=new r.maps.Map(e,{zoom:4,center:a});new r.maps.Marker({position:a,map:i,title:"Hello World!"})},new Promise(((t,n)=>{var o=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);i((a=a.apply(e,r)).next())}));var e,r,a}return a((()=>{i()})),{wrapRef:t}}});l.render=function(e,t,r,a,n,o){return s(),i("div",{ref:"wrapRef",style:{height:e.height,width:e.width}},null,4)};export default l;
