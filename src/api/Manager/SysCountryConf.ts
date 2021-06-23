import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import {
  AddCountryConfParams,
  DeleteCountryConfParams,
  GetCountryConfPageParams,
  UpdateMarketCoinParams,
} from './model/SysCountryConf.model';
import {
  BasicPageDTO,
  GetCountryConfPageDTO,
  GetCountryConfAllDTO,
} from './dto/SysCountryConf.dto';

enum Api {
  // 分页获取节点列表
  GetCountryConfPage = '/admin/Node/findAll',
  // 获取所有节点列表
  GetCountryConfAll = '/Manager/SysCountryConf/GetCountryConfAll',
  // 新增节点
  AddCountryConf = '/admin/Node/addNode',
  // 根据ID获取节点详情
  GetCountryConf = '/Manager/SysCountryConf/GetCountryConf',
  // 修改节点
  UpdateCountryConf = '/admin/Node/updNode',
  // 批量删除
  DeleteCountryConf = '/admin/Node/delNode',

  // 用户购买的节点
  nodeQuery = '/admin/Node/nodeQuery',
}

// 分页获取节点列表
export const GetCountryConfPageApi = (params: GetCountryConfPageParams) =>
  defHttp.post<GetCountryConfPageDTO>({ url: Api.GetCountryConfPage });

export const nodeQueryApi = (params: any) =>
  defHttp.post<GetCountryConfPageDTO>({ url: Api.nodeQuery, params });

// 获取所有节点列表
export const GetCountryConfAllApi = (params: any) =>
  defHttp.get<GetCountryConfAllDTO>({ url: Api.GetCountryConfAll, params });

// 新增节点
export function AddCountryConfApi(params: AddCountryConfParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddCountryConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改节点
export function UpdateCountryConfApi(
  params: UpdateMarketCoinParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdateCountryConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除节点
export function DeleteCountryConfApi(
  params: DeleteCountryConfParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeleteCountryConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
