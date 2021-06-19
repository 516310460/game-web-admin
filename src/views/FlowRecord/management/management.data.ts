import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '币种名称',
    dataIndex: 'coinName',
  },
  {
    title: '流水类型',
    dataIndex: 'flowingTypeStr',
    // customRender: ({ record }) => {
    //   let text: string;
    //   switch (record.flowingType) {
    //     case 1:
    //       text = '充值'
    //       break;
    //     case 2:
    //       text = '提现'
    //       break;
    //     case 3:
    //       text = '内部转账'
    //       break;
    //     case 4:
    //       text = '币种兑换'
    //       break;
    //     case 5:
    //       text = '手续费'
    //       break;
    //     case 6:
    //       text = '购买矿机'
    //       break;
    //     case 7:
    //       text = '参与游戏'
    //       break;
    //     case 8:
    //       text = '游戏收益'
    //       break;
    //     case 9:
    //       text = '矿机收益'
    //       break;
    //     case 10:
    //       text = '社区奖励-游戏'
    //       break;
    //     case 11:
    //       text = '矿机加速收益'
    //       break;
    //     case 12:
    //       text = '节点认购'
    //       break;
    //     case 13:
    //       text = '节点收益'
    //       break;
    //     case 14:
    //       text = '节点退款'
    //       break;
    //     case 15:
    //       text = '提现退款'
    //       break;
    //     case 16:
    //       text = '推广收益'
    //       break;
    //     case 17:
    //       text = '游戏退款'
    //       break;
    //     case 18:
    //       text = '社区奖励-矿机'
    //       break;
    //     case 19:
    //       text = '平级奖'
    //     default:
    //       break;
    //   }
    //   return h(Tag, {}, () => text);
    // },
  },
  {
    title: '流水动向',
    dataIndex: 'flowingStatus',
    customRender: ({ record }) => {
      const state = record.flowingStatus;
      const color = state === 1 ? 'green' : 'red';
      const text = state === 1 ? '收入' : '支出';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '发生金额',
    dataIndex: 'changeAmount',
  },
  {
    title: '变动前余额',
    dataIndex: 'balanceBefore',
  },
  {
    title: '变动后余额',
    dataIndex: 'balanceAfter',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '流水备注',
    dataIndex: 'remarkremark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'status',
    label: '交易对状态',
    component: 'Select',
    // required: true,
    componentProps: {
      options: [
        { label: '正常', value: 1 },
        { label: '退市', value: 2 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'isbuy',
    label: '是否可购买',
    component: 'Select',
    componentProps: {
      options: [
        { label: '全部', value: '' },
        { label: '是', value: 'true' },
        { label: '否', value: 'false' },
      ],
    },
    colProps: { span: 5 },
  },
  {
    field: 'issale',
    label: '是否可出售',
    component: 'Select',
    componentProps: {
      options: [
        { label: '全部', value: '' },
        { label: '是', value: 'true' },
        { label: '否', value: 'false' },
      ],
    },
    colProps: { span: 5 },
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
    field: 'price',
    label: '矿机名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'ghs',
    label: '矿机总价格',
    component: 'Input',
    required: true,
  },
  {
    field: 'rate',
    label: '回报倍数',
    component: 'Input',
    required: true,
  },
  {
    field: 'state',
    label: '交易对状态',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '已下架', value: 0 },
        { label: '抢购中', value: 1 },
        { label: '待上架', value: 2 },
      ],
    },
  },
];
