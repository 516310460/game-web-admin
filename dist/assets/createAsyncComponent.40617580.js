import{bi as o,s as e,aI as a}from"./vendor.c2cc062a.js";import{a7 as n}from"./index.3df22268.js";function s(s,i={}){const{size:r="small",delay:t=100,timeout:m=3e4,loading:d=!1,retry:l=!0}=i;return o({loader:s,loadingComponent:d?e(a,{spinning:!0,size:r},null):void 0,timeout:m,delay:t,onError:l?(o,e,a,n)=>{o.message.match(/fetch/)&&n<=3?e():a()}:n})}export{s as c};
