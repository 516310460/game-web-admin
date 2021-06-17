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
export interface CountryConfPageModel {
  rows:CountryConf[];
  count:number;
}
