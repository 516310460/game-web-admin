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
    title: '参数名称',
    dataIndex: 'paramName',
  },
  {
    title: '参数key',
    dataIndex: 'paramKey',
  },
  {
    title: '参数值',
    dataIndex: 'paramValue',
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
    label: '参数名称',
    field: 'paramName',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '参数key',
    field: 'paramKey',
    component: 'Input',
    required: false,
    show: false,
  },
  {
    label: '参数值',
    field: 'paramValue',
    component: 'Input',
    required: true,
  },
];
