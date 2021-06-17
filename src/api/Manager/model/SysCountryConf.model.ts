import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

// export type AccountParams = BasicPageParams & {
//   account?: string;
//   nickname?: string;
// };

export type GetCountryConfPageParams = BasicPageParams;

export interface GetMarketCoinParams {
  id: string;
}

export interface AddCountryConfParams {
  // 支付编号
  code: string;
  // 支付名称
  name: string;
  // 彩色图标
  iconUrlColor: Number;
  // 透明图标
  iconUrlGray: Number;
  // 透明logo背景颜色
  bgColor: Number;
  // 风险等级
  riskLevel: Boolean;
  // 风险等级
  typeCode: Boolean;
  // 分类名称
  typeName: Number;
}

export interface DeleteCountryConfParams {
  ids: string;
}

export type UpdateMarketCoinParams = GetMarketCoinParams & AddCountryConfParams;
