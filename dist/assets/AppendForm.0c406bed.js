import{e}from"./BasicForm.d607c7a3.js";import{u as o}from"./useForm.a3e29c9f.js";import{ad as t,at as a}from"./index.7fd854bf.js";import{k as n,ae as i,r,L as s,o as d,q as l,R as p,s as c,Y as m,Z as u}from"./vendor.c2cc062a.js";import{_ as f}from"./PageWrapper.e33b63d0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./useModal.02fd9148.js";import"./useWindowSizeFn.f7fa6c6d.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";import"./usePageContext.d6556528.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.5a05012f.js";var b=n({components:{BasicForm:e,CollapseContainer:t,PageWrapper:f,[i.name]:i,Button:a},setup(){const[e,{appendSchemaByField:t,removeSchemaByFiled:a,validate:n}]=o({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const i=r(1);return{register:e,handleSubmit:function(){return e=this,o=null,t=function*(){try{yield n()}catch(e){}},new Promise(((a,n)=>{var i=e=>{try{s(t.next(e))}catch(o){n(o)}},r=e=>{try{s(t.throw(e))}catch(o){n(o)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,r);s((t=t.apply(e,o)).next())}));var e,o,t},add:function(){t({field:`field${i.value}a`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),t({field:`field${i.value}b`,component:"Input",label:"字段"+i.value,colProps:{span:8},required:!0},""),t({field:`${i.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),i.value++},del:function(e){a([`field${e}a`,`field${e}b`,`${e}`]),i.value--}}}});const j=u("+"),v=u("-");b.render=function(e,o,t,a,n,i){const r=s("Button"),u=s("BasicForm"),f=s("CollapseContainer"),b=s("PageWrapper");return d(),l(b,{title:"表单增删示例"},{default:p((()=>[c(f,{title:"表单增删"},{default:p((()=>[c(u,{onRegister:e.register,onSubmit:e.handleSubmit},{add:p((({field:o})=>[0===Number(o)?(d(),l(r,{key:0,onClick:e.add},{default:p((()=>[j])),_:1},8,["onClick"])):m("",!0),o>0?(d(),l(r,{key:1,onClick:t=>e.del(o)},{default:p((()=>[v])),_:2},1032,["onClick"])):m("",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
