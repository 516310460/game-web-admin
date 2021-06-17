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
  // 获取游戏列表
  CcMarketCoinList = '/admin/game/findAll',
  GetMarketCoin = '/Manager/CcMarketCoin/GetMarketCoin',
  // 添加游戏
  AddMarketCoin = '/admin/game/addGame',
  // 修改游戏
  UpdateMarketCoin = '/admin/game/updGame',
  DeleteMarketCoin = '/Manager/CcMarketCoin/DeleteMarketCoin',
}

// 分页获取行情市场列表
export const CcMarketCoinListApi = (params: CcMarketCoinListParams) =>
  defHttp.post<CcMarketCoinListDTO>({ url: Api.CcMarketCoinList });

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
