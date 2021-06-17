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
    title: '用户名',
    dataIndex: 'userName',
  },
  {
    title: '角色名称',
    dataIndex: 'nickName',
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
  //   autoQuantity: 0
  // createTime: "2021-06-07 09:23:11"
  // gamePoints: 0
  // googleScret: null
  // id: 3
  // image: null
  // isAuto: 0
  // isMax: 0
  // isRobot: 0
  // level: 4
  // mnemonic: "fetch carbon tornado strong spike milk expose feed outside february absorb effort"
  // nickName: "5181PYwv"
  // password: "200820e3227815ed1756a6b531e7e0d2"
  // payPassword: "e10adc3949ba59abbe56e057f20f883e"
  // pid: null
  // referralCode: "4C8zkr"
  // saleLevel: 2
  // state: "normal"
  // userName: "root"
  {
    title: '创建时间',
    dataIndex: 'createTime',
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
