var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{C as n}from"./index.14da3ba2.js";import{K as l,u as c}from"./vendor.c2cc062a.js";function i(e,i){return{initSortable:function(){l((()=>{return l=this,u=null,s=function*(){e&&(yield n((()=>import("./sortable.esm.c87c7eb9.js")),void 0)).default.create(c(e),((e,n)=>{for(var l in n||(n={}))t.call(n,l)&&o(e,l,n[l]);if(r)for(var l of r(n))a.call(n,l)&&o(e,l,n[l]);return e})({animation:500,delay:400,delayOnTouchOnly:!0},i))},new Promise(((e,r)=>{var t=e=>{try{o(s.next(e))}catch(t){r(t)}},a=e=>{try{o(s.throw(e))}catch(t){r(t)}},o=r=>r.done?e(r.value):Promise.resolve(r.value).then(t,a);o((s=s.apply(l,u)).next())}));var l,u,s}))}}}export{i as u};