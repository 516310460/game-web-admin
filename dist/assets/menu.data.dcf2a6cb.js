import{a2 as e,bk as a}from"./vendor.c2cc062a.js";/* empty css              */import{G as l}from"./AdminMenu.a163a98c.js";const t=[{title:"ID",dataIndex:"id"},{title:"菜单ID",dataIndex:"menuId"},{title:"菜单名称",dataIndex:"menuName"},{title:"功能名称",dataIndex:"funcName"},{title:"功能标识,例如userAdd",dataIndex:"funcKey"},{title:"状态",dataIndex:"state",customRender:({record:l})=>{const t=l.state,n=t?"启用":"停用";return e(a,{color:t?"green":"red"},(()=>n))}}],n=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{label:"菜单ID",field:"menuId",required:!0,component:"ApiSelect",componentProps:{api:l,labelField:"menuName",valueField:"id"}},{label:"功能名称",field:"funcName",component:"Input",required:!0},{label:"功能类型",field:"funcKey",component:"Select",required:!0,componentProps:{options:[{label:"添加",value:"add"},{label:"修改",value:"update"},{label:"删除",value:"delete"},{label:"查上级",value:"getSuperior"},{label:"查下级",value:"getSubordinate"},{label:"上下余额",value:"operatingBalance"},{label:"提币审核",value:"toExamine"},{label:"分配权限",value:"assignPermissions"},{label:"一键完成",value:"oneClickFinish"}]}},{label:"状态",field:"state",component:"Select",required:!0,componentProps:{options:[{label:"停用",value:0},{label:"启用",value:1}]}}];export{t as c,n as f};