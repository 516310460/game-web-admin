import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import {
  AddPayListConfParams,
  DeletePayListConfParams,
  GetPayListConfPageParams,
  UpdateMarketCoinParams,
} from './model/OtcPayListConf.model';
import {
  BasicPageDTO,
  GetPayListConfPageDTO,
  CcMarketCoinListItemDTO,
} from './dto/OtcPayListConf.dto';

enum Api {
  // 分页获取支付方式
  GetPayListConfPage = '/admin/news/findAll',
  // 新增支付方式
  AddPayListConf = '/admin/news/addNew',
  // 根据id获取支付方式详情
  GetPayListConf = '/Manager/OtcPayListConf/GetPayListConf',
  // 修改支付方式
  UpdatePayListConf = '/admin/news/updNew',
  // 批量删除
  DeletePayListConf = '/admin/news/delNew',
}

// 分页获取支付方式
export const GetPayListConfPageApi = (params: GetPayListConfPageParams) =>
  defHttp.post<GetPayListConfPageDTO>({ url: Api.GetPayListConfPage, params });

// 新增支付方式
export function AddPayListConfApi(params: AddPayListConfParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddPayListConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改支付方式
export function UpdatePayListConfApi(
  params: UpdateMarketCoinParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdatePayListConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除支付方式
export function DeletePayListConfApi(
  params: DeletePayListConfParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeletePayListConf,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
