import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';
import { GetRolePageApi } from '/@/api/Manager/AdminMenu';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '菜单ID',
    dataIndex: 'menuId',
  },
  {
    title: '菜单名称',
    dataIndex: 'menuName',
  },
  {
    title: '功能名称',
    dataIndex: 'funcName',
  },
  {
    title: '功能标识,例如userAdd',
    dataIndex: 'funcKey',
  },
  {
    title: '状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      const state = record.state;
      const color = state ? 'green' : 'red';
      const text = state ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
];

const isDir = (type: string) => type === '0';
const isMenu = (type: string) => type === '1';
const isButton = (type: string) => type === '2';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'menuName',
    label: '菜单名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '菜单ID',
    field: 'menuId',
    // component: 'Input',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: GetRolePageApi,
      labelField: 'menuName',
      valueField: 'id',
    },
  },
  {
    label: '功能名称',
    field: 'funcName',
    component: 'Input',
    required: true,
  },
  {
    label: '功能标识,例如userAdd',
    field: 'funcKey',
    component: 'Input',
  },
  {
    label: '状态',
    field: 'state',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '停用', value: 0 },
        { label: '启用', value: 1 },
      ],
    },
  },
];
