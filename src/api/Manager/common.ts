// /**
//  * @description: user SignToken api
//  */
// export function UploadApi(params:any) {
//   return defHttp.post<any>({
//     url: Api.Upload,
//     params,
//   });
// }


import { UploadApiResult } from '../sys/model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/@/utils/http/axios/types';
import { useGlobSetting } from '/@/hooks/setting';

const { uploadUrl = '' } = useGlobSetting();

// enum Api {
//   Upload = '/api/Manager/Common/Upload',
// }

/**
 * @description: Upload interface
 */
export function UploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
      onUploadProgress,
    },
    params
  );
}
