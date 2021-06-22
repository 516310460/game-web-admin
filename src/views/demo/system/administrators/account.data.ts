import { h } from 'vue';
import { Tag } from 'ant-design-vue';
// import { GetCountryConfAllApi } from '/@/api/Manager/SysCountryConf';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { GetRolePageApi } from '/@/api/Manager/Role';
import {
  Input,
} from 'ant-design-vue';
import { encryptByMd5 } from '/@/utils/cipher';

export const columns: BasicColumn[] = [
  {
    title: '用户id',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '密码',
    dataIndex: 'password',
  },
  {
    title: '角色id',
    dataIndex: 'roleId',
  },
  {
    title: '角色名称',
    dataIndex: 'roleName',
  },
  {
    title: '状态',
    dataIndex: 'state',
    customRender: ({ record }) => {
      const color = record.state == 'normal' ? 'green' : 'red';
      const text =
        record.state == 'normal' ? '正常' : record.state == 'locked' ? '锁定' : '暂停提币';
      return h(Tag, { color: color }, () => text);
    },
  },
  // {
  //   title: '角色',
  //   dataIndex: 'userType',
  //   width: 200,
  //   customRender: ({ record }) => {
  //     const userType = record.userType;
  //     const enable = userType === 1;
  //     const color = enable ? 'green' : 'red';
  //     const text = enable ? '管理员' : '停用';
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   customRender: ({ record }) => {
  //     const status = record.status;
  //     const color = status === 1 ? 'green' : status === 1 ? 'red' : 'gray';
  //     const text = status === 1 ? '正常' : status === 2 ? '禁用' : '删除';
  //     return h(Tag, { color: color }, () => text);
  //   },
  // },
  // {
  //   title: '备注',
  //   dataIndex: 'remark',
  // },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'status',
    label: '账号状态',
    component: 'Select',
    colProps: { span: 4 },
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: '全部',
          value: 0,
          key: 0,
        },
        {
          label: '正常',
          value: 1,
          key: 1,
        },
        {
          label: '禁用',
          value: 2,
          key: 2,
        },
        {
          label: '删除',
          value: 3,
          key: 3,
        },
      ],
    },
  },
  // {
  //   field: 'nickname',
  //   label: '昵称',
  //   component: 'Input',
  //   colProps: { span: 4 },
  // },
];

export const accountFormSchema: FormSchema[] = [
  {
    label: 'id',
    field: 'id',
    component: 'Input',
    show: false,
  },
  // {
  //   label: '角色id',
  //   field: 'roleId',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     api: GetRolePageApi,
  //     labelField: 'roleName',
  //     valueField: 'id',
  //   },
  //   required: true,
  // },
  {
    label: '角色名称',
    field: 'roleId',
    component: 'ApiSelect',
    componentProps: {
      api: GetRolePageApi,
      labelField: 'roleName',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '用户名',
    field: 'userName',
    component: 'Input',
    required: true,
  },
  {
    label: '密码',
    field: 'password',
    component: 'InputPassword',
    required: true,
    render: ({ model, field }) => {
      return h(Input.Password, {
        placeholder: '请输入密码',
        // value: model[field],
        onChange: (e) => {
          model[field] = encryptByMd5(e.target.value);
        },
      });
    },
  },
  {
    label: '状态',
    field: 'state',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '正常', value: 'normal' },
        { label: '锁定', value: 'locked' },
        { label: '暂停提币', value: 'forbid' },
      ],
    },
  },
  // {
  //   label: '角色',
  //   field: 'usertype',
  //   component: 'Select',
  //   defaultValue: 0,
  //   componentProps: {
  //     options: [
  //       {
  //         label: '管理员',
  //         value: 0,
  //         key: 0,
  //       },
  //       {
  //         label: '超级管理员',
  //         value: 1,
  //         key: 1,
  //       },
  //     ],
  //   },
  //   required: true,
  // },
  // {
  //   label: '邮箱',
  //   field: 'email',
  //   component: 'Input',
  //   required: true,
  // },
  // {
  //   label: 'google密钥',
  //   field: 'ggsecretkey',
  //   component: 'Input',
  //   required: true,
  // },
  // {
  //   label: '状态',
  //   field: 'status',
  //   required: true,
  //   component: 'RadioButtonGroup',
  //   defaultValue: 1,
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: 1 },
  //       { label: '禁用', value: 2 },
  //     ],
  //   },
  // },
];
