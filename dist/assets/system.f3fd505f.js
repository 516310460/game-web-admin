import{aA as t}from"./index.9345068b.js";var a,e;(e=a||(a={})).AccountList="/admin/user/findByUserName",e.updateState="/admin/user/updateState",e.DeptList="/system/getDeptList",e.MenuList="/system/getMenuList",e.RolePageList="/system/getRoleListByPage",e.GetAllRoleList="/system/getAllRoleList",e.findAccountByInfo="/admin/account/findAccountByInfo",e.findWithDrewList="/admin/account/findWithDrewList",e.approve="/admin/account/approve",e.backRecharge="/admin/account/backRecharge",e.findAllByUserId="/admin/user/findAllByUserId",e.updateLevel="/admin/user/userUpdate";const s=e=>t.post({url:a.AccountList,params:e}),r=e=>t.post({url:a.findAccountByInfo,params:e}),n=e=>t.post({url:a.findWithDrewList,params:e}),i=e=>t.post({url:a.findAllByUserId,params:e});function u(e){return t.post({url:a.updateLevel,params:e})}function o(e){return t.post({url:a.approve,params:e})}function p(e){return t.post({url:a.backRecharge,params:e})}const c=e=>t.get({url:a.DeptList,params:e}),d=e=>t.get({url:a.MenuList,params:e});export{d as a,s as b,o as c,r as d,n as e,i as f,c as g,p as h,u};
