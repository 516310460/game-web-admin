import { getAllRoleList } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   width: 50,
  // },
  {
    title: '用户名ID',
    dataIndex: 'userId',
    width: 120,
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '币种名称',
    dataIndex: 'coinName',
    width: 90,
  },
  {
    title: '主网',
    dataIndex: 'mainNet',
    width: 90,
  },
  {
    title: '收币地址',
    dataIndex: 'toAddress',
  },
  {
    title: 'txid',
    dataIndex: 'txid',
  },
  {
    title: '提币状态',
    dataIndex: 'state',
    width: 100,
    customRender: ({ record }) => {
      const state = record.state;
      const color = state == 1 || state == 2 ? 'green' : 'red';
      const text =
        state == 0 ? '待审核' : state == 1 ? '审核通过' : state == 2 ? '已完成' : '审核拒绝';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  // {
  //   field: 'userName',
  //   label: '用户名',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  {
    field: 'coinName',
    label: '币种名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const searchModalFormSchema: FormSchema[] = [
  // {
  //   field: 'userName',
  //   label: '用户名',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
  {
    field: 'state',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '待审核', value: 0 },
        { label: '审核通过', value: 1 },
        { label: '已完成', value: 2 },
        { label: '审核拒绝', value: 3 },
      ],
    },
    colProps: { span: 8 },
  },
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
