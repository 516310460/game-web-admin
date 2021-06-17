import { GetMarketCoinApi } from '/@/api/Manager/CcMarketCoin';
import { getAllRoleList } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   fixed: 'left',
  //   width: 200,
  // },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    dataIndex: 'roomId',
    title: '大厅id',
  },
  {
    dataIndex: 'gameIndex',
    title: '游戏关数',
  },
  {
    dataIndex: 'targetAmount',
    title: '过关目标数量',
  },
  {
    dataIndex: 'completed',
    title: '已完成数量',
  },
  {
    dataIndex: 'maxAmount',
    title: '单账户最高投入数量',
  },
  {
    dataIndex: 'interestRate',
    title: '每期收益率',
  },
  {
    dataIndex: 'serviceCharge',
    title: '手续费(扣除平台币比例)',
  },
  {
    dataIndex: 'startTime',
    title: '开始时间',
  },
  {
    dataIndex: 'endTime',
    title: '结束时间',
  },
  {
    dataIndex: 'state',
    title: '游戏状态',
    customRender: ({ record }) => {
      let text = '';
      switch (record.state) {
        case 0:
          text = '待开启';
          break;
        case 1:
          text = '已开启';
          break;
        case 2:
          text = '已售罄';
          break;
        case 3:
          text = '已退款';
          break;
        case 4:
          text = '已结算';
          break;
        default:
          break;
      }
      return h(Tag, {}, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const managementFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    field: 'language',
    label: '语言',
    component: 'Input',
    required: true,
  },
  {
    field: 'bannerName',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'imageUrl',
    label: '图片地址',
    component: 'Input',
    required: true,
  },
  {
    field: 'hrefUrl',
    label: '链接',
    component: 'Input',
    required: true,
  },
  // sort
  // query	integer
  // state
  // query	integer
];
