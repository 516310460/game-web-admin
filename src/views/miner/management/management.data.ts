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
    title: '总算力',
    dataIndex: 'ghs',
  },
  {
    title: '矿机名称',
    dataIndex: 'mname',
  },
  {
    title: '矿机总价格',
    dataIndex: 'price',
  },
  {
    title: '汇报倍数',
    dataIndex: 'rate',
  },
  {
    title: '矿机状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      const state = record.state;
      const color = state === 1 ? 'green' : 'red';
      const text = state === 1 ? '抢购中' : state === 0 ? '已下架' : '待上架';
      return h(Tag, { color: color }, () => text);
    },
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
    label: '汇报倍数',
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
