import{_ as t}from"./useModal.c504d6c8.js";import{_ as e}from"./Description.vue_vue&type=script&lang.c76cd8c2.js";import{u as s}from"./useDescription.d0b7d9d7.js";import{d as o}from"./index.2d95079e.js";import{getDescSchema as r}from"./data.1c502b61.js";import{k as i,L as a,o as n,q as c,R as d,s as p,O as m}from"./vendor.c2cc062a.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              *//* empty css              */var f=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:e},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[e]=s({column:2,schema:r()});return{register:e,useI18n:o,t:t}}});f.render=function(t,e,s,o,r,i){const f=a("Description"),l=a("BasicModal");return n(),c(l,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:d((()=>[p(f,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;