import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import {
  AddMarketCoinParams,
  CcMarketCoinListParams,
  DeleteMarketCoinParams,
  GetMarketCoinParams,
  UpdateMarketCoinParams,
} from './model/CcMarketCoin.model';
import { BasicPageDTO, CcMarketCoinListDTO, CcMarketCoinListItemDTO } from './dto/CcMarketCoin.dto';

enum Api {
  // 获取用户级别列表
  CcMarketCoinList = '/admin/userLevel/findAll',
  // 根据id查询详情
  GetMarketCoin = '/admin/CcMarketCoin/findById',
  // 添加用户级别
  AddMarketCoin = '/admin/userLevel/addUserLevel',
  // 修改用户级别
  UpdateMarketCoin = '/admin/userLevel/updUserLevel',
  DeleteMarketCoin = '/admin/userLevel/delUserLevel',
}

// 分页获取行情市场列表
export const CcMarketCoinListApi = (params: CcMarketCoinListParams) =>
  defHttp.post<CcMarketCoinListDTO>({ url: Api.CcMarketCoinList, params });

// 新增市场信息
export function AddMarketCoinApi(params: AddMarketCoinParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddMarketCoin,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改市场信息
export function UpdateMarketCoinApi(
  params: UpdateMarketCoinParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdateMarketCoin,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除市场信息
export function DeleteMarketCoinApi(
  params: DeleteMarketCoinParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeleteMarketCoin,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
