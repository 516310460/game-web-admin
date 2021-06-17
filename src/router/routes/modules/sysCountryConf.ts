import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/node',
  name: 'node',
  component: LAYOUT,
  redirect: '/node/config',
  meta: {
    icon: 'bx:bx-home',
    title: '节点管理',
  },
  children: [
    {
      path: 'config',
      name: 'nodeConfig',
      component: () => import('/@/views/node/config/index.vue'),
      meta: {
        title: '节点管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
