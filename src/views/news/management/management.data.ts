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
    title: '消息类型',
    dataIndex: 'typeId',
    customRender: ({ record }) => {
      let text: string;
      switch (record.typeId) {
        case 1:
          text = '公告';
          break;
        case 2:
          text = '资讯';
          break;
        case 3:
          text = '操作指南';
          break;
        default:
          break;
      }
      return h(Tag, {}, () => text);
    },
  },
  {
    title: '语言',
    dataIndex: 'language',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '简介',
    dataIndex: 'introduction',
  },
  {
    title: '图片地址',
    dataIndex: 'image',
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      const state = record.state;
      const color = state === 1 ? 'green' : 'red';
      const text = state === 1 ? '启用' : '禁用';
      return h(Tag, { color: color }, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '支付方式',
    component: 'Select',
    // required: true,
    componentProps: {
      options: [
        { label: '全部', value: '' },
        { label: '正常', value: '1' },
        { label: '退市', value: '2' },
      ],
    },
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
    field: 'typeId',
    label: '消息类型',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '公告', value: 1 },
        { label: '资讯', value: 2 },
        { label: '操作指南', value: 3 },
      ],
    },
  },
  {
    field: 'language',
    label: '语言',
    component: 'Input',
    required: true,
  },
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    required: true,
  },
  {
    field: 'introduction',
    label: '简介',
    component: 'Input',
    required: true,
  },
  {
    field: 'image',
    label: '图片地址',
    component: 'aUpload',
    componentProps: {
      // headers: {
      //   AuthToken: getToken(),
      // },
      fileName: 'file',
      boxType:'banner',
    },
    required: true,
  },
  {
    field: 'content',
    label: '内容',
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
        { label: '禁用', value: 0 },
        { label: '启用', value: 1 },
      ],
    },
  },
];
