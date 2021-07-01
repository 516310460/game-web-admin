var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,a=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&l(e,o,t[o]);if(n)for(var o of n(t))r.call(t,o)&&l(e,o,t[o]);return e},i=(e,n)=>t(e,o(n));import{c,q as g,p as d}from"./index.c6214277.js";import{k as f,o as p,q as u,s as h,S as v,y as m,bl as C,r as b,f as y,F as $,aM as x,K as H,u as F,L as j,O,b3 as P,ai as S,R as w,Y as _,W as k,Z as R,x as W}from"./vendor.c2cc062a.js";import{u as A}from"./usePageContext.211cdadf.js";/* empty css              *//* empty css              */import{o as B}from"./onMountedOrActivated.5a05012f.js";var q=f({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=c("page-footer"),{getCalcContentWidth:t}=g();return{prefixCls:e,getCalcContentWidth:t}}});const I=m()(((e,t,o,n,s,r)=>(p(),u("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[h("div",{class:`${e.prefixCls}__left`},[v(e.$slots,"left",{},void 0,!0)],2),v(e.$slots,"default",{},void 0,!0),h("div",{class:`${e.prefixCls}__right`},[v(e.$slots,"right",{},void 0,!0)],2)],6))));q.render=I,q.__scopeId="data-v-f27e9424";var M=f({name:"PageWrapper",components:{PageFooter:q,PageHeader:C},inheritAttrs:!1,props:{title:d.string,dense:d.bool,ghost:d.bool,content:d.string,contentStyle:{type:Object},contentBackground:d.bool,contentFullHeight:d.bool,contentClass:d.string,fixedHeight:d.bool},setup(e,{slots:t}){const o=b(null),n=b(null),s=b(0),{prefixCls:r,prefixVar:l}=c("page-wrapper"),{contentHeight:g,setPageHeight:d,pageHeight:f}=A(),p=y((()=>[r,{[`${r}--dense`]:e.dense}])),u=y((()=>(null==t?void 0:t.leftFooter)||(null==t?void 0:t.rightFooter))),h=y((()=>Object.keys(x(t,"default","leftFooter","rightFooter","headerContent")))),v=y((()=>{const{contentFullHeight:t,contentStyle:o,fixedHeight:n}=e;if(!t)return a({},o);const r=`${F(f)}px`;return i(a(i(a({},o),{minHeight:r}),n?{height:r}:{}),{paddingBottom:`${F(s)}px`})})),m=y((()=>{const{contentBackground:t,contentClass:o}=e;return[`${r}-content`,o,{[`${r}-content-bg`]:t}]}));function C(){var t,r,a,i;if(!e.contentFullHeight)return;const c=F(n),f=F(o);s.value=0;const p=null==c?void 0:c.$el;p&&(s.value+=null!=(t=null==p?void 0:p.offsetHeight)?t:0);let u=0;const h=null==f?void 0:f.$el;h&&(u+=null!=(r=null==h?void 0:h.offsetHeight)?r:0);let v=0;const m="0px";let C=m,b=m;const y=document.querySelectorAll(`.${l}-page-wrapper-content`);if(y&&y.length>0){const e=y[0],t=getComputedStyle(e);C=null!=(a=null==t?void 0:t.marginBottom)?a:m,b=null!=(i=null==t?void 0:t.marginTop)?i:m}if(C){v+=Number(C.replace(/[^\d]/g,""))}if(b){v+=Number(b.replace(/[^\d]/g,""))}null==d||d(F(g)-F(s)-u-v)}return $((()=>[null==g?void 0:g.value,u.value]),(()=>{C()}),{flush:"post",immediate:!0}),B((()=>{H((()=>{C()}))})),{getContentStyle:v,footerRef:n,headerRef:o,getClass:p,getHeaderSlots:h,prefixCls:r,getShowFooter:u,pageHeight:f,omit:x,getContentClass:m}}});M.render=function(e,t,o,n,s,r){const l=j("PageHeader"),a=j("PageFooter");return p(),u("div",{class:e.getClass},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(p(),u(l,O({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),P({default:w((()=>[e.content?(p(),u(k,{key:0},[R(W(e.content),1)],64)):v(e.$slots,"headerContent",{key:1})])),_:2},[S(e.getHeaderSlots,(t=>({name:t,fn:w((o=>[v(e.$slots,t,o)]))})))]),1040,["ghost","title"])):_("",!0),h("div",{class:["overflow-hidden",e.getContentClass],style:e.getContentStyle},[v(e.$slots,"default")],6),e.getShowFooter?(p(),u(a,{key:1,ref:"footerRef"},{left:w((()=>[v(e.$slots,"leftFooter")])),right:w((()=>[v(e.$slots,"rightFooter")])),_:1},512)):_("",!0)],2)};export{M as _};
