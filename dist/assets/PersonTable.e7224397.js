import{_ as e}from"./TableImg.1cd23f27.js";import{_ as n}from"./BasicForm.d607c7a3.js";import{u as o}from"./useTable.ceae1622.js";import{k as t,L as a,o as i,q as d,s as r,R as s,Z as l}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a3e29c9f.js";import"./index.7fd854bf.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.02fd9148.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";const c=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],m=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var u=t({components:{BasicTable:e,TableAction:n},setup(){const[e,{getDataSource:n}]=o({columns:c,showIndexColumn:!1,dataSource:m,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function t(e){var n;null==(n=e.onEdit)||n.call(e,!0)}function a(e){var o;if(null==(o=e.onEdit)||o.call(e,!1),e.isNew){const o=n(),t=o.findIndex((n=>n.key===e.key));o.splice(t,1)}}function i(e){var n;null==(n=e.onEdit)||n.call(e,!1,!0)}return{registerTable:e,handleEdit:t,createActions:function(e,n){return e.editable?[{label:"保存",onClick:i.bind(null,e,n)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:a.bind(null,e,n)}}]:[{label:"编辑",onClick:t.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=n(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(o)},getDataSource:n,handleEditChange:function(e){}}}});const p=l(" 新增成员 ");u.render=function(e,n,o,t,l,c){const m=a("TableAction"),u=a("BasicTable"),b=a("a-button");return i(),d("div",null,[r(u,{onRegister:e.registerTable,onEditChange:e.handleEditChange},{action:s((({record:n,column:o})=>[r(m,{actions:e.createActions(n,o)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"]),r(b,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[p])),_:1},8,["onClick"])])};export default u;
