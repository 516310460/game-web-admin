/**
 * @description: SignToken interface parameters
 */

 export interface CountryConf{
  id: string;
  countryCode: string;
  name: string;
  phoneCode: string;
  remark: string;
}
export interface GetFeeratePageParams {
  page:number;
  pageSize:number;
}
export interface GetFeeratePageModel{
  rows:rows[];
  count:number;
}
export interface rows{
  id: string,
  level: number,
  btcFloor: number,
  btcCeil: number,
  makerCommission: number,
  takerCommission: number,
  updateTime: number
}
export interface AddFeerateParams{
  level:number;
  btcFloor:number;
  btcCeil:number;
  makerCommission:number;
  takerCommission:boolean;
}
export interface AddFeerateModel{
  isSuccess: boolean,
  errorCode: number,
  errorMessage: string
}
export interface GetFeerateParams{
  id:string;
}
export interface GetFeerateModel{
  id: string,
  level: number,
  btcFloor: number,
  btcCeil: number,
  makerCommission: number,
  takerCommission: number,
  updateTime: number
}
export interface UpdateFeerateParams{
  id: string;
  level: number;
  btcFloor: number;
  btcCeil: number;
  makerCommission: number;
  takerCommission: number;
}
export interface UpdateFeerateModel{
  isSuccess: boolean,
  errorCode: number,
  errorMessage: string
}
export interface DeleteFeerateParams{
  ids:string;
}
