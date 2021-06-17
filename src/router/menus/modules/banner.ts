import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const banner: MenuModule = {
  orderNo: 10,
  menu: {
    path: '/banner/management',
    name: 'banner管理',
  },
};
export default banner;
