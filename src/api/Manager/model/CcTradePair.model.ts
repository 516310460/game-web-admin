import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type GetTradePairPageParams = BasicPageParams & {
  // 是否可购买
  isbuy: Boolean;
  // 是否可购买
  issale: Boolean;
  // 交易对状态：1正常，2退市
  status: Number;
};

export interface GetMarketCoinParams {
  id: string;
}

export interface AddTradePairParams {
  // 币种
  BaseCode: string;
  // 兑换币种
  ExchangeCode: string;
  // 交易对最小交易量
  MinTradeNum: Number;
  // 交易对最大交易量
  MaxTradeNum: Number;
  // 手续费费率
  FeeRate: Number;
  // 是否可购买
  IsBuyTransaction: Boolean;
  // 是否可出售
  IsSaleTransaction: Boolean;
  // 交易对状态：1正常，2退市
  Status: Number;
}

export interface DeleteTradePairParams {
  ids: string;
}

export type UpdateTradePairParams = GetMarketCoinParams & AddTradePairParams;
