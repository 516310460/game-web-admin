import{_ as e}from"./TableImg.fafb3ad7.js";import{_ as t}from"./BasicForm.4e8612e4.js";import{u as i}from"./useTable.5c80c331.js";import{d as o}from"./table.043e10c5.js";import{k as n,L as a,o as d,q as r,s,R as c}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.c8762787.js";import"./index.a9cd95f2.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.24c63ad5.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.2e8c80e5.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.581a0b50.js";/* empty css              */import"./download.c0c465ea.js";import"./StrengthMeter.6d233ca7.js";const l=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=n({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:o,columns:l,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){return t=this,i=null,o=function*(){},new Promise(((e,n)=>{var a=e=>{try{r(o.next(e))}catch(t){n(t)}},d=e=>{try{r(o.throw(e))}catch(t){n(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,d);r((o=o.apply(t,i)).next())}));var t,i,o},handleOpen:function(e){}}}});const p={class:"p-4"};m.render=function(e,t,i,o,n,l){const m=a("TableAction"),u=a("BasicTable");return d(),r("div",p,[s(u,{onRegister:e.registerTable},{action:c((({record:t})=>[s(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;