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
export interface GetSysConfigPageParams {
  page:number;
  pageSize:number;
}
export interface SysConfigPageModel{
  rows:rows[];
  count:number;
}
export interface rows{
  id:string;
  loginPwdLimit:number;
  webDomain:string;
  cancelOTCCount:number;
  marketPair:string;
}
export interface AddSysConfigParams{
  loginPwdLimit:number;
  webDomain:string;
  cancelOtccount:number;
  marketPair:string;
}
export interface AddSysConfigModel{
  isSuccess: boolean,
  errorCode: number,
  errorMessage: string
}
export interface GetSysConfigParams{
  id:string;
}
export interface GetSysConfigModel{
  id: string;
  loginPwdLimit: number;
  webDomain: string;
  cancelOTCCount: number;
  marketPair: string
}
export interface UpdateSysConfigParams{
  id: string;
  loginPwdLimit: number;
  webDomain: string;
  cancelOTCCount: number;
  marketPair: string
}
export interface UpdateSysConfigModel{
  isSuccess: boolean,
  errorCode: number,
  errorMessage: string
}
export interface DeleteSysConfigParams{
  ids:string;
}
