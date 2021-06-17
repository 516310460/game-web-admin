/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  account: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // roles: RoleInfo[];
  // // 用户id
  // userId: string | number;
  // // 用户名
  // username: string;
  // // 真实名字
  // realName: string;
  // // 头像
  // avatar: string;
  // // 介绍
  // desc?: string;

  // // 用户名
  // account: string;
  // // 邮箱
  // email: null;
  // // 手机
  // phone: null;
  // // 状态
  // status: Number;
  // // 用户id
  // userID: string;
  // // 用户类型
  // userType: Number;
  // // 用户登录的token
  // token: string;

  functions: Array<any>;
  id: Number;
  menus: Array<any>;
  roleName: any;
  token: string;
  userName: string;
}
