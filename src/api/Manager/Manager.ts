import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  GetManagerPageParams,
  GetManagerPageModel,
  ManagerParams,
  GetManagerModel,
  UpdateManagerParams,
  DeleteManagerParams,
} from './model/ManagerModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  // 登录
  Login = '/admin/user/login',
  // 退出登录
  LoginOut = '/admin/user/logOut',
  // 获取管理员信息
  GetManager = '/Manager/Manager/GetManager',
  // 分页获取管理员列表
  GetManagerPage = '/admin/user/list',
  // 新增管理员
  AddManager = '/admin/user/add',
  // 修改管理员信息
  UpdateManager = '/admin/user/update',
  // 批量删除
  DeleteManager = '/admin/user/delete',
  // 修改密码
  changePwdManager = '/admin/user/changePwd',
  // 获取当前用户信息
  getUserInfo = '/admin/user/getUserInfo',
}

// 获取当前用户信息
export function getUserInfoApi(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GetUserInfoModel>(
    {
      url: Api.getUserInfo,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GetUserInfoModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 退出登录
export function LoginOutApi(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.LoginOut,
    },
    {
      errorMessageMode: mode,
    }
  );
}

// 修改密码
export function changePwdManagerApi(params: any, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<any>(
    {
      url: Api.changePwdManager,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: user getManagerPage api
 */
export function getManagerPageApi(params: GetManagerPageParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GetManagerPageModel>(
    {
      url: Api.GetManagerPage,
      // params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: user Manager api
 */
export function AddManagerApi(params: ManagerParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GetManagerModel>(
    {
      url: Api.AddManager,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
/**
 * @description: user Manager api
 */
export function UpdateManagerApi(params: UpdateManagerParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GetManagerModel>(
    {
      url: Api.UpdateManager,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
/**
 *
 * @returns DeleteManager
 */
export function DeleteManager(params: DeleteManagerParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<GetManagerModel>(
    {
      url: Api.DeleteManager,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}
export function GetManagerApi() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetManager });
}
