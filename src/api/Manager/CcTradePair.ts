import { BasicPageDTO, CcMarketCoinListDTO } from './dto/CcTradePair.dto';
import {
  AddTradePairParams,
  DeleteTradePairParams,
  GetTradePairPageParams,
  UpdateTradePairParams,
} from './model/CcTradePair.model';
import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  // 分页获取矿机管理
  GetTradePairPage = '/admin/miner/findAll',
  // 新增矿机管理
  AddTradePair = '/admin/miner/addMiner',
  // 根据id获取矿机详情
  GetTradePair = '/Manager/CcTradePair/GetTradePair',
  // 修改矿机信息
  UpdateTradePair = '/admin/miner/updMiner',
  // 批量删除
  DeleteTradePair = '/admin/miner/delMiner',

  // 分页获取用户购买矿机管理
  minerQuery = '/admin/miner/minerQuery',
}

// 分页获取矿机管理
export const GetTradePairPageApi = (params: GetTradePairPageParams) =>
  defHttp.post<CcMarketCoinListDTO>({ url: Api.GetTradePairPage, params });

export const minerQueryApi = (params: any) =>
  defHttp.post<CcMarketCoinListDTO>({ url: Api.minerQuery, params });

// 新增矿机管理
export function AddTradePairApi(params: AddTradePairParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddTradePair,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改矿机信息
export function UpdateTradePairApi(
  params: UpdateTradePairParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdateTradePair,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除市场信息
export function DeleteTradePairApi(
  params: DeleteTradePairParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeleteTradePair,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
