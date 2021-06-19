import { GetMarketCoinApi } from '/@/api/Manager/CcMarketCoin';
import { getAllRoleList } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { getToken } from '/@/utils/auth';

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    dataIndex: 'language',
    title: '语言',
  },
  {
    dataIndex: 'bannerName',
    title: '名称',
  },
  {
    dataIndex: 'imageUrl',
    title: '图片地址',
  },
  {
    dataIndex: 'hrefUrl',
    title: '链接',
  },
  {
    dataIndex: 'sort',
    title: '排序',
  },
  {
    dataIndex: 'state',
    title: '状态',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
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
    field: 'language',
    label: '语言',
    component: 'Input',
    required: true,
  },
  {
    field: 'bannerName',
    label: '名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'imageUrl',
    label: '图片地址',
    component: 'aUpload',
    componentProps: {
      headers: {
        token: getToken(),
      },
      fileName: 'file',
      boxType:'banner',
    },
    required: true,
  },
  {
    field: 'hrefUrl',
    label: '链接',
    component: 'Input',
    required: true,
  },
  {
    field: 'sort',
    label: '排序',
    component: 'InputNumber',
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
