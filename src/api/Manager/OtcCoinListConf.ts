import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import {
  AddOtcCoinListConfParams,
  DeleteOtcCoinListConfParams,
  GetOtcCoinListConfPageParams,
  UpdateMarketCoinParams,
} from './model/OtcCoinListConf.model';
import {
  BasicPageDTO,
  GetOtcCoinListConfPageDTO,
  CcMarketCoinListItemDTO,
} from './dto/OtcCoinListConf.dto';

enum Api {
  // 分页获取币种
  GetOtcCoinListConfPage = '/admin/coins/findAll',
  // 新增币种
  AddOtcCoinListConf = '/admin/coins/addCoin',
  // 根据id获取OTC币种详情
  GetOtcCoinListConf = '/Manager/OtcCoinListConf/GetOtcCoinListConf',
  // 修改币种
  UpdateOtcCoinListConf = '/admin/coins/updCoin',
  // 批量删除
  DeleteOtcCoinListConf = '/admin/coins/delCoin',
}

// 分页获取OTC币种
export const GetOtcCoinListConfPageApi = (params: GetOtcCoinListConfPageParams) =>
  defHttp.post<GetOtcCoinListConfPageDTO>({ url: Api.GetOtcCoinListConfPage });

// 新增OTC币种
export function AddOtcCoinListConfApi(
  params: AddOtcCoinListConfParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddOtcCoinListConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改OTC币种
export function UpdateOtcCoinListConfApi(
  params: UpdateMarketCoinParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdateOtcCoinListConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除OTC币种
export function DeleteOtcCoinListConfApi(
  params: DeleteOtcCoinListConfParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeleteOtcCoinListConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
