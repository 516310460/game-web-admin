import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const CoinList: MenuModule = {
  orderNo: 5,
  menu: {
    path: '/CoinList/management',
    name: '币种管理',
  },
};
export default CoinList;
