import { GetOccCodeAllApi } from '/@/api/Manager/SysCoinListConf';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '币种id',
    dataIndex: 'id',
  },
  {
    title: '币种名称',
    dataIndex: 'coinName',
  },
  {
    title: '提币手续费百分比',
    dataIndex: 'fee',
  },
  {
    title: '所属主网',
    dataIndex: 'mainNet',
  },
  {
    title: '单次最小提币金额',
    dataIndex: 'minPayAmount',
  },
  {
    title: '单次最大提币金额',
    dataIndex: 'maxPayAmount',
  },
  {
    title: '最小充值金额',
    dataIndex: 'minRechargeAmount',
  },
  {
    title: '币种介绍关联新闻ID',
    dataIndex: 'newsId',
  },
  {
    title: '转账手续费百分比',
    dataIndex: 'transFee',
  },
  {
    title: '状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      const state = record.state;
      const color = state === 1 ? 'green' : 'red';
      const text = state === 1 ? '启用提币' : '暂停提币';
      return h(Tag, { color: color }, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'oCcode',
    label: '法币币种代号',
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
    field: 'mainNet',
    label: '所属主网',
    component: 'Input',
    required: true,
  },
  {
    field: 'coinName',
    label: '币种名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'minRechargeAmount',
    label: '最小充值金额',
    component: 'Input',
    required: true,
  },
  {
    field: 'minPayAmount',
    label: '单次最小提币金额',
    component: 'Input',
    required: true,
  },
  {
    field: 'maxPayAmount',
    label: '单次最大提币金额',
    component: 'Input',
    required: true,
  },
  {
    field: 'fee',
    label: '提币手续费百分比',
    component: 'Input',
    required: true,
  },
  {
    field: 'newsId',
    label: '币种介绍关联新闻ID',
    component: 'Input',
    required: false,
  },
  {
    field: 'transFee',
    label: '转账手续费百分比',
    component: 'Input',
    required: true,
  },
  {
    field: 'state',
    label: '状态',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '暂停提币', value: 0 },
        { label: '启用提币', value: 1 },
      ],
    },
  },
];
