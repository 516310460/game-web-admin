import{C as t}from"./index.f2fdf28a.js";import{n as a}from"./index.14da3ba2.js";import{k as o,bk as e,bQ as l,L as n,o as s,q as i,W as r,ai as c,R as d,s as u,Z as p,x as f}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./createAsyncComponent.809684ff.js";const m=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var x=o({components:{CountTo:t,Tag:e,Card:l,Icon:a},setup:()=>({growCardList:m})});const v={class:"md:flex"},g={class:"py-4 px-4 flex justify-between"},j={class:"p-2 px-4 flex justify-between"};x.render=function(t,a,o,e,l,m){const x=n("Tag"),b=n("CountTo"),C=n("Icon"),w=n("Card");return s(),i("div",v,[(s(!0),i(r,null,c(t.growCardList,((a,o)=>(s(),i(w,{key:a.title,size:"small",loading:t.$attrs.loading,title:a.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[o+1<4&&"!md:mr-4"]],canExpan:!1},{extra:d((()=>[u(x,{color:a.color},{default:d((()=>[p(f(a.action),1)])),_:2},1032,["color"])])),default:d((()=>[u("div",g,[u(b,{prefix:"$",startVal:1,endVal:a.value,class:"text-2xl"},null,8,["endVal"]),u(C,{icon:a.icon,size:40},null,8,["icon"])]),u("div",j,[u("span",null,"总"+f(a.title),1),u(b,{prefix:"$",startVal:1,endVal:a.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default x;
