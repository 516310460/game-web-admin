import{_ as e}from"./TableImg.1cd23f27.js";import"./BasicForm.d607c7a3.js";import{u as t}from"./useTable.ceae1622.js";import{getBasicColumns as o,getBasicShortColumns as n}from"./tableData.83d6955e.js";import{h as i}from"./index.7fd854bf.js";import{d as a}from"./table.3f4a1b17.js";import{k as s,L as l,o as c,q as r,s as d,R as m,Z as u}from"./vendor.c2cc062a.js";/* empty css              *//* empty css              */import"./useForm.a3e29c9f.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.f7fa6c6d.js";import"./useModal.02fd9148.js";import"./onMountedOrActivated.5a05012f.js";/* empty css              */import"./useSortable.6102f4ab.js";import"./useExpose.9766eb76.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.fb024ba7.js";/* empty css              */import"./download.859c5bc7.js";import"./StrengthMeter.d52ece55.js";var f=s({components:{BasicTable:e},setup(){const{createMessage:e}=i();const[s,{setLoading:l,setColumns:c,getColumns:r,getDataSource:d,reload:m,getPaginationRef:u,setPagination:f,getSelectRows:g,getSelectRowKeys:p,setSelectedRowKeys:b,clearSelectedRowKeys:C}]=t({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:a,columns:o(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:s,changeLoading:function(){l(!0),setTimeout((()=>{l(!1)}),1e3)},changeColumns:function(){c(n())},reloadTable:function(){c(o()),m({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),m()},getSelectRowList:function(){return t=this,o=null,n=function*(){e.info("请在控制台查看！")},new Promise(((e,i)=>{var a=e=>{try{l(n.next(e))}catch(t){i(t)}},s=e=>{try{l(n.throw(e))}catch(t){i(t)}},l=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);l((n=n.apply(t,o)).next())}));var t,o,n},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){C()},onChange:function(){}}}});const g={class:"p-4"},p={class:"mb-4"},b=u(" 还原 "),C=u(" 开启loading "),j=u(" 更改Columns "),k=u(" 获取Columns "),w=u(" 获取表格数据 "),S=u(" 跳转到第2页 "),h={class:"mb-4"},x=u(" 获取选中行 "),R=u(" 获取选中行Key "),T=u(" 设置选中行 "),y=u(" 清空选中行 "),_=u(" 获取分页信息 ");f.render=function(e,t,o,n,i,a){const s=l("a-button"),u=l("BasicTable");return c(),r("div",g,[d("div",p,[d(s,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[b])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[C])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[j])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[k])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",h,[d(s,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[x])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[R])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[T])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[y])),_:1},8,["onClick"]),d(s,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[_])),_:1},8,["onClick"])]),d(u,{onRegister:e.registerTable,onChange:e.onChange},null,8,["onRegister","onChange"])])};export default f;