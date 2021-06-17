import { defHttp } from '/@/utils/http/axios';
import { GetSysConfigPageParams,SysConfigPageModel,AddSysConfigParams,AddSysConfigModel,GetSysConfigParams,GetSysConfigModel
,UpdateSysConfigParams,UpdateSysConfigModel,DeleteSysConfigParams } from './sys/SysConfig.sys';

// import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  GetSysConfigPage = '/Manager/SysConfig/GetSysConfigPage',
  AddSysConfig = '/Manager/SysConfig/AddSysConfig',
  GetSysConfig = '/Manager/SysConfig/GetSysConfig',
  UpdateSysConfig = '/Manager/SysConfig/UpdateSysConfig',
  DeleteSysConfig = '/Manager/SysConfig/DeleteSysConfig',
}

/**
 * @description: user SignToken api
 */
export function GetSysConfigPage(params:GetSysConfigPageParams) {
  return defHttp.get<SysConfigPageModel>({
    url: Api.GetSysConfigPage,
    params,
  });
}
export function AddSysConfig(params:AddSysConfigParams) {
  return defHttp.post<AddSysConfigModel>({
    url: Api.AddSysConfig,
    params,
  });
}
export function GetSysConfig(params:GetSysConfigParams) {
  return defHttp.get<GetSysConfigModel>({
    url: Api.GetSysConfig,
    params,
  });
}
export function UpdateSysConfig(params:UpdateSysConfigParams) {
  return defHttp.post<UpdateSysConfigModel>({
    url: Api.UpdateSysConfig,
    params,
  });
}
export function DeleteSysConfig(params:DeleteSysConfigParams) {
  return defHttp.post<UpdateSysConfigModel>({
    url: Api.DeleteSysConfig,
    params,
  });
}
