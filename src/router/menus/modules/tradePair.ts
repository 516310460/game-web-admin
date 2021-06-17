import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const miner: MenuModule = {
  orderNo: 2,
  menu: {
    path: '/miner/management',
    name: '矿机管理',
  },
};
export default miner;
