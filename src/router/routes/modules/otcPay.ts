import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/news',
  name: 'news',
  component: LAYOUT,
  redirect: '/news/management',
  meta: {
    icon: 'bx:bx-home',
    title: '咨询管理',
  },
  children: [
    {
      path: 'management',
      name: 'newsManagement',
      component: () => import('/@/views/news/management/index.vue'),
      meta: {
        title: '咨询管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
