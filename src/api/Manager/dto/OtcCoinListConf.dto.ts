// import { BasicPageDTO } from '/@/api/dto/baseDTO';

export interface BasicPageDTO {
  // 是否成功
  isSuccess: Boolean;
  // 错误码
  errorCode: Number;
  // 错误信息
  errorMessage: string;
  // 数据
  data?: CcMarketCoinListDataDTO;
}

export interface CcMarketCoinListDataDTO {
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

export type GetOtcCoinListConfPageDTO = CcMarketCoinListDataDTO;
