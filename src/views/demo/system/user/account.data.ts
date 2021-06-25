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
    title: '父级ID',
    dataIndex: 'pid',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '角色名称',
    dataIndex: 'nickName',
  },
  {
    title: '用户级别',
    dataIndex: 'level',
    editRow: true,
  },
  {
    title: '矿机销售级别',
    dataIndex: 'saleLevel',
    editRow: true,
  },
  {
    title: '状态',
    dataIndex: 'state',
    editRow: true,
    editComponent: 'Select',
    editComponentProps: {
      options: [
        {
          label: '正常',
          value: 'normal',
        },
        {
          label: '锁定',
          value: 'locked',
        },
        {
          label: '暂停提币',
          value: 'forbid',
        },
      ],
    },
    // customRender: ({ record }) => {
    //   const color = record.state == 'normal' ? 'green' : 'red';
    //   const text =
    //     record.state == 'normal' ? '正常' : record.state == 'locked' ? '锁定' : '暂停提币';
    //   return h(Tag, { color: color }, () => text);
    // },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 200,
  },
  {
    title: '助记词',
    dataIndex: 'mnemonic',
    width: 600,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  // {
  //   field: 'nickname',
  //   label: '昵称',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'id',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '状态',
    field: 'state',
    required: true,
    component: 'Select',
    defaultValue: 'normal',
    componentProps: {
      options: [
        { label: '正常', value: 'normal' },
        { label: '锁定', value: 'locked' },
        { label: '暂停提币', value: 'forbid' },
      ],
    },
  },
];
