import{a2 as e,bk as t}from"./vendor.c2cc062a.js";/* empty css              */const n=[{title:"ID",dataIndex:"id"},{title:"父ID",dataIndex:"pid"},{title:"菜单名称",dataIndex:"menuName"},{title:"菜单名称(英文)",dataIndex:"enName"},{title:"标题",dataIndex:"title"},{title:"菜单URL/路径",dataIndex:"url"},{title:"组件地址(引用的组件)",dataIndex:"buttenUrl"},{title:"菜单排序Index",dataIndex:"orderNum"},{title:"重定向路由",dataIndex:"redirect"},{title:"图标",dataIndex:"icon"},{title:"状态",dataIndex:"state",customRender:({record:n})=>{const d=n.state,l=d?"启用":"停用";return e(t,{color:d?"green":"red"},(()=>l))}}],d=[{field:"id",label:"ID",component:"Input",required:!1,show:!1},{label:"父ID",field:"pid",component:"Input",required:!0},{label:"菜单名称",field:"menuName",component:"Input",required:!0},{label:"菜单名称(英文)",field:"enName",component:"Input",required:!0},{label:"标题",field:"title",component:"Input",required:!0},{label:"菜单URL/路径",field:"url",component:"Input",required:!0},{label:"组件地址(引用的组件)",field:"buttenUrl",component:"Input",required:!1},{label:"菜单排序Index",field:"orderNum",component:"Input",required:!0},{label:"重定向路由(一级父节点)",field:"redirect",component:"Input",required:!1},{label:"图标",field:"icon",component:"Input",required:!0},{label:"状态",field:"state",component:"Select",required:!0,componentProps:{options:[{label:"停用",value:0},{label:"启用",value:1}]}}];export{n as c,d as f};
