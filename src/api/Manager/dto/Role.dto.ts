// import { BasicPageDTO } from '/@/api/dto/baseDTO';

export interface BasicPageDTO {
  // 是否成功
  isSuccess: Boolean;
  // 错误码
  errorCode: Number;
  // 错误信息
  errorMessage: string;
  // 数据
  data?: GetCountryConfPageDTO;
}

export interface GetCountryConfPageDTO {
  rows: CcMarketCoinListItemDTO;
  count: Number;
}

export interface CcMarketCoinListItemDTO {
  id: string;
  // 市场
  market: string;
  // 币种
  coinCode: string;
}

export interface GetCountryConfAllDTO {
  id: string;
  // 国家代号(中国CN)
  countryCode: string;
  // 国家名称
  name: string;
  // 电话区号(中国86)
  phoneCode: string;
  // 缩略图
  countryIcon: string;
  // 备注
  remark: string;
}

export type GetRolePageDTO = GetCountryConfPageDTO;
