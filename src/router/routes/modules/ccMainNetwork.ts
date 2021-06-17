import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/room',
  name: 'room',
  component: LAYOUT,
  redirect: '/room/management',
  meta: {
    icon: 'bx:bx-home',
    title: '游戏大厅管理',
  },
  children: [
    {
      path: 'management',
      name: 'roomManagement',
      component: () => import('/@/views/room/management/index.vue'),
      meta: {
        title: '游戏大厅管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
