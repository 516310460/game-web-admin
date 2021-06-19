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
  // 获取banner列表
  flowRecordQuery = '/admin/flowRecord/flowRecordQuery',
  GetMarketCoin = '/Manager/CcMarketCoin/GetMarketCoin',
  // 添加banner
  AddMarketCoin = '/admin/banner/addFile',
  // 修改banner
  UpdateMarketCoin = '/admin/banner/updGame',
  DeleteMarketCoin = '/Manager/banner/delBanner',
}

// 分页获取行情市场列表
export const flowRecordQueryApi = (params: CcMarketCoinListParams) =>
  defHttp.post<CcMarketCoinListDTO>({ url: Api.flowRecordQuery, params });

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
