import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/miner',
  name: 'Miner',
  component: LAYOUT,
  redirect: '/miner/management',
  meta: {
    icon: 'bx:bx-home',
    title: '矿机管理',
  },
  children: [
    {
      path: 'management',
      name: 'minerManagement',
      component: () => import('/@/views/miner/management/index.vue'),
      meta: {
        title: '矿机管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
