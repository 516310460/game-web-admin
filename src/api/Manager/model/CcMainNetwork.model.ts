import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

// export type AccountParams = BasicPageParams & {
//   account?: string;
//   nickname?: string;
// };

export type GetMainNetWorkPageParams = BasicPageParams;

export interface GetMarketCoinParams {
  id: string;
}

export interface AddMainNetWorkParams {
  market: string;
  coincode: string;
}

export interface DeleteMainNetWorkParams {
  ids: string;
}

export type UpdateMainNetWorkParams = GetMarketCoinParams & AddMainNetWorkParams;
