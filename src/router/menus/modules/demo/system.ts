import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 2000,
  menu: {
    name: t('routes.demo.system.moduleName'),
    path: '/system',
    children: [
      {
        path: 'administrators',
        name: '管理员管理',
      },
      {
        path: 'config',
        name: '系统配置',
      },
      {
        path: 'user',
        name: '用户管理',
      },
      {
        path: 'account',
        name: t('routes.demo.system.account'),
      },
      {
        path: 'role',
        name: t('routes.demo.system.role'),
      },
      {
        path: 'menu',
        name: t('routes.demo.system.menu'),
      },
      {
        path: 'function',
        name: '菜单功能',
      },
      {
        path: 'dept',
        name: t('routes.demo.system.dept'),
      },

      {
        path: 'changePassword',
        name: t('routes.demo.system.password'),
      },
    ],
  },
};
export default menu;
