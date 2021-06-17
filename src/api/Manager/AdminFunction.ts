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
  // 分页获取菜单列表
  GetRolePage = '/admin/function/list',
  // 新增菜单
  AddRole = '/admin/function/add',
  // 根据ID获取菜单详情
  GetRole = '/admin/function/GetRole',
  // 修改菜单
  UpdateRole = '/admin/function/update',
  // 批量删除
  DeleteRole = '/admin/function/delete',
  // 获取当前菜单的权限
  GetPermission = '/admin/function/GetPermission',
  // 保存当前菜单的权限
  SavePermission = '/admin/function/SavePermission',
  // 根据菜单ID查询关联的功能列表
  listByMenuId = '/admin/function/listByMenuId',
}

// 分页获取菜单列表
export const GetRolePageApi = (params: GetRolePageParams) =>
  defHttp.post<GetRolePageDTO>({ url: Api.GetRolePage });

// 获取菜单功能
export function GetPermissionFunApi(params: any) {
  return defHttp.post<any>({
    url: Api.listByMenuId,
    params,
  });
}

// 获取当前菜单的权限
export function GetPermissionApi(params: GetRolePageParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.get<any>(
    {
      url: Api.GetPermission,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
// 保存当前菜单的权限
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

// 新增菜单
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

// 修改菜单
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

// 删除菜单
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
