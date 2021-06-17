import { getAllRoleList } from '/@/api/demo/system';
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
    title: '用户ID',
    dataIndex: 'userId',
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
    title: '可用余额',
    dataIndex: 'avalibleBalance',
  },
  {
    title: '冻结余额',
    dataIndex: 'forzenBalance',
  },
  {
    title: '总额',
    dataIndex: 'totalBalance',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    colProps: { span: 8 },
    show: false,
  },
  {
    field: 'amount',
    label: '金额',
    component: 'InputNumber',
    colProps: { span: 8 },
  },
  {
    field: 'state',
    label: '类型',
    component: 'Select',
    colProps: { span: 8 },
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '充值', value: 1 },
        { label: '下账', value: 2 },
      ],
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'coinName',
    label: '币种名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const searchModalFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  // {
  //   field: 'coinName',
  //   label: '币种名称',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
];

export const accountFormSchema: FormSchema[] = [
  // {
  //   field: 'id',
  //   label: 'id',
  //   component: 'Input',
  //   required: false,
  //   show: false,
  // },
  // {
  //   label: '状态',
  //   field: 'state',
  //   required: true,
  //   component: 'Select',
  //   defaultValue: 'normal',
  //   componentProps: {
  //     options: [
  //       { label: '正常', value: 'normal' },
  //       { label: '锁定', value: 'locked' },
  //       { label: '暂停提币', value: 'forbid' },
  //     ],
  //   },
  // },
];
