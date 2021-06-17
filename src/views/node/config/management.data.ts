import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { GetCountryConfAllApi } from '/@/api/Manager/SysCountryConf';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '节点期数',
    dataIndex: 'pnumber',
  },
  {
    title: '收益倍数',
    dataIndex: 'income',
  },
  {
    title: '认购数量',
    dataIndex: 'quantity',
  },
  {
    title: '认购价格',
    dataIndex: 'price',
  },
  {
    title: '抢购名额',
    dataIndex: 'quota',
  },
  {
    title: '抢购时间',
    dataIndex: 'enoughTime',
  },
  {
    title: '剩余名额',
    dataIndex: 'useQuote',
  },
  {
    title: '节点认购状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      let text: string;
      switch (record.state) {
        case 0:
          text = '未开始';
          break;
        case 1:
          text = '抢购中';
          break;
        case 2:
          text = '已完成';
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
    field: 'name',
    label: '国家名称',
    component: 'Input',
    // required: true,
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
    field: 'income',
    label: '收益倍数',
    component: 'Input',
    required: true,
  },
  {
    field: 'quantity',
    label: '认购数量',
    component: 'Input',
    required: true,
  },
  {
    field: 'price',
    label: '认购价格',
    component: 'Input',
    required: true,
  },
  {
    field: 'quota',
    label: '抢购名额',
    component: 'Input',
    required: true,
  },
  {
    field: 'enoughTime',
    label: '抢购时间',
    component: 'Input',
    required: true,
  },
  {
    field: 'useQuote',
    label: '剩余名额',
    component: 'Input',
    required: true,
  },
  {
    field: 'state',
    label: '节点认购状态',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '未开始', value: 0 },
        { label: '抢购中', value: 1 },
        { label: '已完成', value: 2 },
      ],
    },
  },
];
