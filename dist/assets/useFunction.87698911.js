import{f as e}from"./index.02e800e3.js";import{a as n}from"./vendor.c2cc062a.js";function t(){const t=e(),{currentRoute:a}=n(),{functions:o,userName:r}=t.getUserInfo||[],{title:i}=a.value.meta||{};let s=[];return o.length&&o.forEach((e=>{e.menuName==i&&s.push(e.funcKey)})),"admin"==r&&(s=["add","delete","update","getSuperior","getSubordinate","operatingBalance","toExamine","assignPermissions","oneClickFinish"]),s}export{t as g};
