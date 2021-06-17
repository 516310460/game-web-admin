import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import {
  AddRoleParams,
  DeleteRoleParams,
  GetRolePageParams,
  UpdateMarketCoinParams,
} from './model/Role.model';
import { BasicPageDTO, GetRolePageDTO } from './dto/Role.dto';

enum Api {
  // 分页获取角色列表
  GetRolePage = '/admin/role/list',
  // 新增角色
  AddRole = '/admin/role/add',
  // 根据ID获取角色详情
  GetRole = '/admin/role/GetRole',
  // 修改角色
  UpdateRole = '/admin/role/update',
  // 批量删除
  DeleteRole = '/admin/role/delete',
  // 获取当前角色的权限
  GetPermission = '/admin/role/GetPermission',
  // 保存当前角色的权限
  SavePermission = '/admin/role/roleAssign',
  // 获取全部菜单json数据
  listJosn = '/admin/menu/listJosn',
  // 根据角色ID和菜单ID查询关联的功能列表-返回菜单下全部功能并把分配的标记为true
  listByRoleIdAndMenuId = '/admin/function/listByRoleIdAndMenuId',
}

// 分页获取角色列表
export const GetRolePageApi = (params: GetRolePageParams) =>
  defHttp.post<GetRolePageDTO>({ url: Api.GetRolePage });

// 获取当前角色的权限
export function GetPermissionApi(params: GetRolePageParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.GetPermission,
    },
    {
      errorMessageMode: mode,
    }
  );
}

export function listJosnApi() {
  return defHttp.post<any>({
    url: Api.listJosn,
  });
}

// 根据角色ID和菜单ID查询关联的功能列表
export function listByRoleIdAndMenuIdApi(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.listByRoleIdAndMenuId,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 保存当前角色的权限
export function SavePermissionApi(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.SavePermission,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 新增角色
export function AddRoleApi(params: AddRoleParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddRole,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改角色
export function UpdateRoleApi(params: UpdateMarketCoinParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdateRole,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除角色
export function DeleteRoleApi(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeleteRole,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
