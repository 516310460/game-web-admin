import{ad as e}from"./index.7fd854bf.js";import{r as t,u as a,a4 as r,a3 as n,k as o,L as s,o as l,q as i,R as d,s as c,Z as m}from"./vendor.c2cc062a.js";import{_ as p}from"./PageWrapper.e33b63d0.js";import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";const u=Symbol("watermark-dom");var f=o({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:o,clear:s}=function(e=t(document.body)){let o=()=>{};const s=u.toString(),l=()=>{const t=document.getElementById(s);if(t){const r=a(e);r&&r.removeChild(t)}window.removeEventListener("resize",o)},i=t=>{l();const r=document.createElement("canvas");r.width=300,r.height=240;const n=r.getContext("2d");n&&(n.rotate(-20*Math.PI/120),n.font="15px Vedana",n.fillStyle="rgba(0, 0, 0, 0.15)",n.textAlign="left",n.textBaseline="middle",n.fillText(t,r.width/20,r.height));const o=document.createElement("div");o.id=s,o.style.pointerEvents="none",o.style.top="0px",o.style.left="0px",o.style.position="absolute",o.style.zIndex="100000",o.style.width=document.documentElement.clientWidth+"px",o.style.height=document.documentElement.clientHeight+"px",o.style.background="url("+r.toDataURL("image/png")+") left top repeat";const i=a(e);return i&&i.appendChild(o),s};return{setWatermark:function(e){i(e),o=()=>{i(e)},window.addEventListener("resize",o),n()&&r((()=>{l()}))},clear:l}}();return{setWatermark:o,clear:s,areaRef:e}}});const g=m(" Create "),h=m(" Clear "),k=m(" Reset ");f.render=function(e,t,a,r,n,o){const m=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return l(),i(u,{title:"水印示例"},{default:d((()=>[c(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d((()=>[c(m,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[g])),_:1}),c(m,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[h])),_:1},8,["onClick"]),c(m,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[k])),_:1})])),_:1})])),_:1})};export default f;
