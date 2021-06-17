import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.moduleName'),
  },
  children: [
    {
      path: 'administrators',
      name: 'AdministratorsManagement',
      meta: {
        title: '管理员管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/administrators/index.vue'),
    },
    {
      path: 'config',
      name: 'configManagement',
      meta: {
        title: '系统配置',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/config/index.vue'),
    },
    {
      path: 'user',
      name: 'UserManagement',
      meta: {
        title: '用户管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/user/index.vue'),
    },
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: t('routes.demo.system.account'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/account/index.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: t('routes.demo.system.role'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/role/index.vue'),
    },
    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: t('routes.demo.system.menu'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/menu/index.vue'),
    },
    {
      path: 'function',
      name: 'FunctionManagement',
      meta: {
        title: '菜单功能',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/function/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: t('routes.demo.system.dept'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/dept/index.vue'),
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: t('routes.demo.system.password'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/password/index.vue'),
    },
  ],
};

export default system;
