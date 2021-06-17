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
    title: '游戏大厅序号',
    dataIndex: 'roomIndex',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '保险仓',
    dataIndex: 'insurePool',
  },
  {
    title: '奖金池',
    dataIndex: 'prizePool',
  },
  {
    title: '闯关名称',
    dataIndex: 'title',
  },
  {
    title: '状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      const state = record.state;
      const color = state === 1 ? 'green' : 'red';
      const text = state === 1 ? '启用' : '启用';
      return h(Tag, { color: color }, () => text);
    },
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
    field: 'roomIndex',
    label: '游戏大厅序号',
    component: 'Input',
    required: true,
  },
  {
    field: 'title',
    label: '闯关标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'prizePool',
    label: '奖金池',
    component: 'Input',
    required: true,
  },
  {
    field: 'insurePool',
    label: '保险仓',
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
        { label: '停用', value: 0 },
        { label: '启用', value: 1 },
      ],
    },
  },
];
