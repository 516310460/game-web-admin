var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import a from"./Step1.e78326ca.js";import i from"./Step2.1559f681.js";import p from"./Step3.95da4167.js";import{_ as s}from"./PageWrapper.15f3b793.js";import{k as d,c9 as c,r as m,B as l,I as u,l as f,n as j,L as S,o as x,q as b,y as v,s as P,w as h,v as y,Y as g}from"./vendor.c2cc062a.js";/* empty css              */import"./BasicForm.4e8612e4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a9cd95f2.js";import"./CountdownInput.581a0b50.js";/* empty css              */import"./useModal.24c63ad5.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.c0c465ea.js";import"./StrengthMeter.6d233ca7.js";import"./useForm.c8762787.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./usePageContext.92db9508.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var N=d({components:{Step1:a,Step2:i,Step3:p,PageWrapper:s,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),a=l({initSetp2:!1,initSetp3:!1});return((e,a)=>{for(var i in a||(a={}))r.call(a,i)&&o(e,i,a[i]);if(t)for(var i of t(a))n.call(a,i)&&o(e,i,a[i]);return e})({current:e,handleStep1Next:function(t){e.value++,a.initSetp2=!0},handleStep2Next:function(t){e.value++,a.initSetp3=!0},handleRedo:function(){e.value=0,a.initSetp2=!1,a.initSetp3=!1},handleStepPrev:function(){e.value--}},u(a))}});const w=v();f("data-v-ad8968cc");const O={class:"step-form-form"},_={class:"mt-5"};j();const k=w(((e,t,r,n,o,a)=>{const i=S("a-step"),p=S("a-steps"),s=S("Step1"),d=S("Step2"),c=S("Step3"),m=S("PageWrapper");return x(),b(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:w((()=>[P("div",O,[P(p,{current:e.current},{default:w((()=>[P(i,{title:"填写转账信息"}),P(i,{title:"确认转账信息"}),P(i,{title:"完成"})])),_:1},8,["current"])]),P("div",_,[h(P(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?h((x(),b(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):g("",!0),e.initSetp3?h((x(),b(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):g("",!0)])])),_:1})}));N.render=k,N.__scopeId="data-v-ad8968cc";export default N;
