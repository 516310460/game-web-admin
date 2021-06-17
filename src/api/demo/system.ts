import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  // 分页查询用户
  AccountList = '/admin/user/findByUserName',
  // 修改用户状态
  updateState = '/admin/user/updateState',
  DeptList = '/system/getDeptList',
  MenuList = '/system/getMenuList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',

  // 获取账号列表
  findAccountByInfo = '/admin/account/findAccountByInfo',
  // 查询提币列表
  findWithDrewList = '/admin/account/findWithDrewList',
  // 提币审核
  approve = '/admin/account/approve',
  // 上下分
  backRecharge = '/admin/account/backRecharge',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.AccountList, params });

export const findAccountByInfoApi = (params: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.findAccountByInfo, params });

export const findWithDrewListApi = (params: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.findWithDrewList, params });

// 提币审核
export function approveApi(params: any) {
  return defHttp.post<any>({
    url: Api.approve,
    params,
  });
}

// 上下分
export function backRechargeApi(params: any) {
  return defHttp.post<any>({
    url: Api.backRecharge,
    params,
  });
}

// 修改用户状态
export function GetPermissionApi(params: any) {
  return defHttp.post<any>({
    url: Api.updateState,
    params,
  });
}

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });
