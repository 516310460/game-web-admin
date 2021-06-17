import { defHttp } from '/@/utils/http/axios';
import { SignTokenParams, SignTokenResultModel } from './model/ManagerToken.model';

// import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  SignToken = '/Manager/ManagerToken/SignToken',
}

/**
 * @description: user SignToken api
 */
export function SignTokenApi(params: SignTokenParams) {
  return defHttp.get<SignTokenResultModel>({
    url: Api.SignToken,
    params,
  });
}
