import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/game',
  name: 'game',
  component: LAYOUT,
  redirect: '/game/management',
  meta: {
    icon: 'bx:bx-home',
    title: '游戏管理',
  },
  children: [
    {
      path: 'management',
      name: 'gameManagement',
      component: () => import('/@/views/game/management/index.vue'),
      meta: {
        title: '游戏管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
