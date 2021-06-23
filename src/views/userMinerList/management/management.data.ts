import { GetMarketCoinApi } from '/@/api/Manager/CcMarketCoin';
import { getAllRoleList } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   fixed: 'left',
  //   width: 200,
  // },
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    dataIndex: 'userId',
    title: '用户id',
  },
  {
    dataIndex: 'minerId',
    title: '矿机id',
  },
  {
    dataIndex: 'mname',
    title: '矿机名称',
  },
  {
    dataIndex: 'output',
    title: '已产出量',
  },
  {
    dataIndex: 'total',
    title: '总产出量',
  },
  {
    dataIndex: 'createTime',
    title: '购买时间',
  },
  {
    dataIndex: 'state',
    title: '矿机状态',
    customRender: ({ record }) => {
      let text = '';
      switch (record.state) {
        case 0:
          text = '未开始';
          break;
        case 1:
          text = '产出中';
          break;
        case 2:
          text = '已完成';
          break;
        default:
          break;
      }
      return h(Tag, {}, () => text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'beginDate',
    component: 'DatePicker',
    label: '开始日期',
    componentProps: {
      format: 'YYYY-MM-DD',
    },
    colProps: { span: 6 },
  },
  {
    field: 'endDate',
    component: 'DatePicker',
    label: '结束日期',
    componentProps: {
      format: 'YYYY-MM-DD',
    },
    colProps: { span: 6 },
  }
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
    field: 'roomId',
    label: '大厅id',
    component: 'Input',
    required: true,
  },
  {
    field: 'gameIndex',
    label: '游戏关数',
    component: 'Input',
    required: true,
  },
  {
    field: 'state',
    label: '游戏状态',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '待开启', value: 0 },
        { label: '已开启', value: 1 },
        { label: '已售罄', value: 2 },
        { label: '已退款', value: 3 },
        { label: '已结算', value: 4 },
      ],
    },
  },
  {
    field: 'targetAmount',
    label: '过关目标数量',
    component: 'Input',
    required: true,
  },
  {
    field: 'completed',
    label: '已完成数量',
    component: 'Input',
    required: true,
  },
  {
    field: 'maxAmount',
    label: '单账户最高投入数量',
    component: 'Input',
    required: true,
  },
  {
    field: 'interestRate',
    label: '每期收益率',
    component: 'Input',
    required: true,
  },
  {
    field: 'serviceCharge',
    label: '手续费(扣除平台币比例)',
    component: 'Input',
    required: true,
  },
  {
    field: 'startTime',
    label: '开始时间',
    component: 'DatePicker',
    required: true,
    componentProps: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    field: 'endTime',
    label: '结束时间',
    component: 'DatePicker',
    required: true,
    componentProps: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  // {
  //   field: 'payState',
  //   label: '奖金发放状态',
  //   component: 'Input',
  //   required: true,
  // },
];
