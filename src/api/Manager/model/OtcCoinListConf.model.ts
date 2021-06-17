import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

// export type AccountParams = BasicPageParams & {
//   account?: string;
//   nickname?: string;
// };

export type GetPayListConfPageParams = BasicPageParams;

export interface GetOtcCoinListConfPageParams {
  id: string;
}

export interface AddOtcCoinListConfParams {
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

export interface DeleteOtcCoinListConfParams {
  ids: string;
}

export type UpdateMarketCoinParams = GetOtcCoinListConfPageParams & AddOtcCoinListConfParams;
