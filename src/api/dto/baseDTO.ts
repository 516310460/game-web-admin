export interface BasicPageDTO<T extends any> {
  // 是否成功
  isSuccess: Boolean;
  // 错误码
  errorCode: Number;
  // 错误信息
  errorMessage: string;
  // 数据
  data?: T;
}
