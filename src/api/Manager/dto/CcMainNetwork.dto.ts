// import { BasicPageDTO } from '/@/api/dto/baseDTO';

export interface BasicPageDTO {
  // 是否成功
  isSuccess: Boolean;
  // 错误码
  errorCode: Number;
  // 错误信息
  errorMessage: string;
  // 数据
  data?: GetMainNetWorkPageDTO;
}

export interface GetMainNetWorkPageDTO {
  rows: GetMainNetWorkPageItemDTO;
  count: Number;
}

export interface GetMainNetWorkPageItemDTO {
  id: string;
  // 市场
  market: string;
  // 币种
  coinCode: string;
}

export type CcMarketCoinListDTO = GetMainNetWorkPageDTO;
