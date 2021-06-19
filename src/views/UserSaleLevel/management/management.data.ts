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
    title: '级别名称',
    dataIndex: 'lname',
  },
  {
    title: '级别等级',
    dataIndex: 'level',
  },
  {
    title: '自身级别条件需满足',
    dataIndex: 'mlevel',
  },
  {
    title: '直推升级条件：直推有效账户数',
    dataIndex: 'upgrade',
  },
  {
    title: '小区业绩满足多少U',
    dataIndex: 'gtotal',
  },
  {
    title: '团队收益提成比例：百分比',
    dataIndex: 'gprofit',
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
    field: 'lname',
    label: '级别名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'level',
    label: '级别等级',
    component: 'Input',
    required: true,
  },
  {
    field: 'mlevel',
    label: '自身级别条件需满足',
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
    field: 'gtotal',
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
];
