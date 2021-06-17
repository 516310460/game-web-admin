import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/banner',
  name: 'banner',
  component: LAYOUT,
  redirect: '/banner/management',
  meta: {
    icon: 'bx:bx-home',
    title: 'banner管理',
  },
  children: [
    {
      path: 'management',
      name: 'bannerManagement',
      component: () => import('/@/views/banner/management/index.vue'),
      meta: {
        title: 'banner管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
