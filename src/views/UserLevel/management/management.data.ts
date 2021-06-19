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
    title: '级别等级',
    dataIndex: 'level',
  },
  {
    title: '直推升级条件：直推有效账户数',
    dataIndex: 'upgrade',
  },
  {
    title: '小区业绩满足多少U',
    dataIndex: 'community',
  },
  {
    title: '团队收益提成比例：百分比',
    dataIndex: 'gprofit',
  },
  {
    title: '平级奖励比例：百分比',
    dataIndex: 'lprofit',
  },
  {
    title: '收益层级代数',
    dataIndex: 'hierarchy',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '币种名称',
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
    field: 'level',
    label: '级别等级',
    component: 'Input',
    required: true,
  },
  {
    field: 'upgrade',
    label: '直推升级条件：直推有效账户数',
    component: 'Input',
    required: true,
  },
  {
    field: 'community',
    label: '小区业绩满足多少U',
    component: 'Input',
    required: true,
  },
  {
    field: 'gprofit',
    label: '团队收益提成比例：百分比',
    component: 'Input',
    required: true,
  },
  {
    field: 'lprofit',
    label: '平级奖励比例：百分比',
    component: 'Input',
    required: true,
  },
  {
    field: 'hierarchy',
    label: '收益层级代数',
    component: 'Input',
    required: true,
  },
];
