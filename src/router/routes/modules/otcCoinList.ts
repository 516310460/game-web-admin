import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/CoinList',
  name: 'CoinList',
  component: LAYOUT,
  redirect: '/CoinList/management',
  meta: {
    icon: 'bx:bx-home',
    title: '币种管理',
  },
  children: [
    {
      path: 'management',
      name: 'CoinListManagement',
      component: () => import('/@/views/CoinList/management/index.vue'),
      meta: {
        title: '币种管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
