import { defHttp } from '/@/utils/http/axios';
import { GetFeeratePageParams,GetFeeratePageModel,AddFeerateParams,AddFeerateModel,GetFeerateParams,GetFeerateModel
,UpdateFeerateParams,UpdateFeerateModel,DeleteFeerateParams } from './model/SysFeeRate.model';

// import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  GetFeeratePage = '/Manager/SysFeeRate/GetFeeratePage',
  AddFeerate = '/Manager/SysFeeRate/AddFeerate',
  GetFeerate = '/Manager/SysFeeRate/GetFeerate',
  UpdateFeerate = '/Manager/SysFeeRate/UpdateFeerate',
  DeleteFeerate = '/Manager/SysFeeRate/DeleteFeerate',

}

/**
 * @description: user SignToken api
 */
export function GetFeeratePage(params:GetFeeratePageParams) {
  return defHttp.get<GetFeeratePageModel>({
    url: Api.GetFeeratePage,
    params,
  });
}
export function AddFeerate(params:AddFeerateParams) {
  return defHttp.post<AddFeerateModel>({
    url: Api.AddFeerate,
    params,
  });
}
export function GetFeerate(params:GetFeerateParams) {
  return defHttp.get<GetFeerateModel>({
    url: Api.GetFeerate,
    params,
  });
}
export function UpdateFeerate(params:UpdateFeerateParams) {
  return defHttp.post<UpdateFeerateModel>({
    url: Api.UpdateFeerate,
    params,
  });
}
export function DeleteFeerate(params:DeleteFeerateParams) {
  return defHttp.post<UpdateFeerateModel>({
    url: Api.DeleteFeerate,
    params,
  });
}
