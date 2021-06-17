import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/@/utils/http/axios/types';
import {
  AddMainNetWorkParams,
  GetMainNetWorkPageParams,
  DeleteMainNetWorkParams,
  UpdateMainNetWorkParams,
} from './model/CcMainNetwork.model';
import { BasicPageDTO, GetMainNetWorkPageDTO } from './dto/CcMainNetwork.dto';

enum Api {
  // 分页获取游戏大厅
  GetMainNetWorkPage = '/admin/room/findAll',
  // 新增游戏大厅
  AddMainNetWork = '/admin/room/addRoom',
  // 获取游戏大厅详情
  GetMainNetWork = '/Manager/CcMainNetwork/GetMainNetWork',
  // 修改游戏大厅信息
  UpdateMainNetWork = '/admin/room/updRoom',
  // 批量删除
  DeleteMainNetWork = '/admin/room/delRoom',
}

// 分页获取行情市场列表
export const GetMainNetWorkPageApi = (params: GetMainNetWorkPageParams) =>
  defHttp.post<GetMainNetWorkPageDTO>({ url: Api.GetMainNetWorkPage });

// 新增市场信息
export function AddMainNetWorkApi(params: AddMainNetWorkParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.AddMainNetWork,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改市场信息
export function UpdateMainNetWorkApi(
  params: UpdateMainNetWorkParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.UpdateMainNetWork,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 删除市场信息
export function DeleteMainNetWorkApi(
  params: DeleteMainNetWorkParams,
  mode: ErrorMessageMode = 'modal'
) {
  return defHttp.post<BasicPageDTO>(
    {
      url: Api.DeleteMainNetWork,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
