import{aA as t}from"./index.7fd854bf.js";var a,s;(s=a||(a={})).AccountList="/admin/user/findByUserName",s.updateState="/admin/user/updateState",s.DeptList="/system/getDeptList",s.MenuList="/system/getMenuList",s.RolePageList="/system/getRoleListByPage",s.GetAllRoleList="/system/getAllRoleList",s.findAccountByInfo="/admin/account/findAccountByInfo",s.findWithDrewList="/admin/account/findWithDrewList",s.approve="/admin/account/approve",s.backRecharge="/admin/account/backRecharge";const e=s=>t.post({url:a.AccountList,params:s}),n=s=>t.post({url:a.findAccountByInfo,params:s}),r=s=>t.post({url:a.findWithDrewList,params:s});function i(s){return t.post({url:a.approve,params:s})}function o(s){return t.post({url:a.backRecharge,params:s})}function u(s){return t.post({url:a.updateState,params:s})}const c=s=>t.get({url:a.DeptList,params:s}),p=s=>t.get({url:a.MenuList,params:s});export{u as G,p as a,e as b,r as c,i as d,o as e,n as f,c as g};
