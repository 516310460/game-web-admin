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
  // 分页获取系统配置列表
  GetRolePage = '/admin/syscfg/list',
  // 新增系统配置
  AddRole = '/admin/syscfg/add',
  // 根据ID获取系统配置详情
  GetRole = '/admin/syscfg/GetRole',
  // 修改系统配置
  UpdateRole = '/admin/syscfg/update',
  // 批量删除
  DeleteRole = '/admin/syscfg/delete',
}

// 分页获取系统配置列表
export const GetRolePageApi = (params: GetRolePageParams) =>
  defHttp.post<GetRolePageDTO>({ url: Api.GetRolePage });

// 新增系统配置
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

// 修改系统配置
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

// 删除系统配置
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
