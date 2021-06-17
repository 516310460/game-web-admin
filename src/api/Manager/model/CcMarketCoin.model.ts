import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

// export type AccountParams = BasicPageParams & {
//   account?: string;
//   nickname?: string;
// };

export type CcMarketCoinListParams = BasicPageParams;

export interface GetMarketCoinParams {
  id: string;
}

export interface AddMarketCoinParams {
  market: string;
  coincode: string;
}

export interface DeleteMarketCoinParams {
  ids: string;
}

export type UpdateMarketCoinParams = GetMarketCoinParams & AddMarketCoinParams;
