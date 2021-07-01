import type { UserInfo } from '/#/store';
import type { ErrorMessageMode } from '/@/utils/http/axios/types';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { RoleEnum } from '/@/enums/roleEnum';
import { PageEnum } from '/@/enums/pageEnum';
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';

import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { LoginParams } from '/@/api/sys/model/userModel';

// import { getUserInfo, loginApi } from '/@/api/sys/user';

import { GetUserInfoModel } from '../../api/Manager/model/Manager.model';
import { loginApi, GetManagerApi, LoginOutApi, getUserInfoApi } from '/@/api/Manager/Manager';

import { useI18n } from '/@/hooks/web/useI18n';
import { useMessage } from '/@/hooks/web/useMessage';
import router from '/@/router';
import { Item } from 'ant-design-vue/lib/vc-menu';
import { forEach } from '/@/utils/helper/treeHelper';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // roleList
    roleList: [],
    // Whether the login expired
    sessionTimeout: false,
  }),
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info;
      setAuthCache(TOKEN_KEY, info);
    },
    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
      setAuthCache(ROLES_KEY, roleList);
    },
    setUserInfo(info: any) {
      this.userInfo = info;
      setAuthCache(USER_INFO_KEY, info);
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    resetState() {
      this.userInfo = null;
      this.token = '';
      this.roleList = [];
      this.sessionTimeout = false;
    },
    /**
     * @description: login
     */
    async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: ErrorMessageMode;
      }
    ): Promise<GetUserInfoModel | null> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const data = await loginApi(loginParams, mode);
        // const userInfo = {
        //   userId: '1',
        //   username: 'vben',
        //   realName: 'Vben Admin',
        //   avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
        //   desc: 'manager',
        //   password: '123456',
        //   token: 'fakeToken1',
        //   roles: [
        //     {
        //       roleName: 'Super Admin',
        //       value: 'super',
        //     },
        //   ],
        // };

        if (data?.menus?.length) {
          let newArray: any = [];
          data.menus.forEach((item) => {
            if (item.pid == 0) {
              // 是一级菜单
              newArray.push({
                id: item.id,
                path: item.url,
                name: item.enName,
                component: item.buttenUrl,
                oldRedirect: item.redirect,
                children: [],
                meta: {
                  title: item.title,
                  affix: false,
                  icon: item.icon,
                },
              });
            } else {
              // 否则是二级菜单
              newArray.forEach(childItem => {
                if(childItem.id == item.pid){
                  childItem.redirect = childItem.oldRedirect
                  childItem.children.push({
                    path: item.url,
                    name: item.enName,
                    meta: {
                      icon: item.icon,
                      title: item.title,
                      affix: false,
                      ignoreKeepAlive: true,
                    },
                    component: item.buttenUrl,
                  })
                }
              })
            }
          });
          data.menus = newArray;
        }

        this.setToken(data.token);
        this.setUserInfo(data);

        // const { roles } = data;
        // const roleList = roles.map((item) => item.value) as RoleEnum[];
        this.setUserInfo(data);
        // this.setRoleList(roleList);
        const sessionTimeout = this.sessionTimeout;
        sessionTimeout && this.setSessionTimeout(false);
        // !sessionTimeout && goHome && (await router.replace(PageEnum.BASE_HOME));
        !sessionTimeout && goHome && (await router.replace(data.menus[0].children.length ? data.menus[0].children[0].path : data.menus[0].path));
        return data;
        // const { token } = data;

        // // save token
        // this.setToken(token);
        // // get user info
        // const userInfo = await this.getUserInfoAction();

        // const sessionTimeout = this.sessionTimeout;
        // sessionTimeout && this.setSessionTimeout(false);
        // !sessionTimeout && goHome && (await router.replace(PageEnum.BASE_HOME));
        // return userInfo;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async getUserInfoAction() {
      const data = await getUserInfoApi();
      if (data?.menus?.length) {
        let newArray: any = [];
        data.menus.forEach((item) => {
          if (item.pid == 0) {
            // 是一级菜单
            newArray.push({
              id: item.id,
              path: item.url,
              name: item.enName,
              component: item.buttenUrl,
              oldRedirect: item.redirect,
              children: [],
              meta: {
                title: item.title,
                affix: false,
                icon: item.icon,
              },
            });
          } else {
            // 否则是二级菜单
            newArray.forEach(childItem => {
              if(childItem.id == item.pid){
                childItem.redirect = childItem.oldRedirect
                childItem.children.push({
                  path: item.url,
                  name: item.enName,
                  meta: {
                    icon: item.icon,
                    title: item.title,
                    affix: false,
                    ignoreKeepAlive: true,
                  },
                  component: item.buttenUrl,
                })
              }
            })
          }
        });
        data.menus = newArray;
      }
      // const { roles } = userInfo;
      // const roleList = roles.map((item) => item.value) as RoleEnum[];
      this.setUserInfo(data);
      // this.setRoleList(roleList);
      return data;
    },
    /**
     * @description: logout
     */
    async logout(goLogin = false) {
      await LoginOutApi();
      goLogin && router.push(PageEnum.BASE_LOGIN);
    },

    /**
     * @description: Confirm before logging out
     */
    confirmLoginOut() {
      const { createConfirm } = useMessage();
      const { t } = useI18n();
      createConfirm({
        iconType: 'warning',
        title: t('sys.app.logoutTip'),
        content: t('sys.app.logoutMessage'),
        onOk: async () => {
          await this.logout(true);
        },
      });
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWidthOut() {
  return useUserStore(store);
}
