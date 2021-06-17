import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '父ID',
    dataIndex: 'pid',
  },
  {
    title: '菜单名称',
    dataIndex: 'menuName',
  },
  {
    title: '菜单名称(英文)',
    dataIndex: 'enName',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '菜单URL/路径',
    dataIndex: 'url',
  },
  {
    title: '组件地址(引用的组件)',
    dataIndex: 'buttenUrl',
  },
  {
    title: '菜单排序Index',
    dataIndex: 'orderNum',
  },
  {
    title: '重定向路由',
    dataIndex: 'redirect',
  },
  {
    title: '图标',
    dataIndex: 'icon',
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
    label: '父ID',
    field: 'pid',
    component: 'Input',
    required: true,
  },
  {
    label: '菜单名称',
    field: 'menuName',
    component: 'Input',
    required: true,
  },
  {
    label: '菜单名称(英文)',
    field: 'enName',
    component: 'Input',
    required: true,
  },
  {
    label: '标题',
    field: 'title',
    component: 'Input',
    required: true,
  },
  {
    label: '菜单URL/路径',
    field: 'url',
    component: 'Input',
    required: true,
  },
  {
    label: '组件地址(引用的组件)',
    field: 'buttenUrl',
    component: 'Input',
    required: false,
  },
  {
    label: '菜单排序Index',
    field: 'orderNum',
    component: 'Input',
    required: true,
  },
  {
    label: '重定向路由(一级父节点)',
    field: 'redirect',
    component: 'Input',
    required: false,
  },
  {
    label: '图标',
    field: 'icon',
    component: 'Input',
    required: true,
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
