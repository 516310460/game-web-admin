import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h, nextTick } from 'vue';
import { Tag } from 'ant-design-vue';
import moment from 'moment';

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
    title: '币种名称',
    dataIndex: 'coinName',
  },
  {
    title: '流水类型',
    dataIndex: 'flowingTypeStr',
    // customRender: ({ record }) => {
    //   let text: string;
    //   switch (record.flowingType) {
    //     case 1:
    //       text = '充值'
    //       break;
    //     case 2:
    //       text = '提现'
    //       break;
    //     case 3:
    //       text = '内部转账'
    //       break;
    //     case 4:
    //       text = '币种兑换'
    //       break;
    //     case 5:
    //       text = '手续费'
    //       break;
    //     case 6:
    //       text = '购买矿机'
    //       break;
    //     case 7:
    //       text = '参与游戏'
    //       break;
    //     case 8:
    //       text = '游戏收益'
    //       break;
    //     case 9:
    //       text = '矿机收益'
    //       break;
    //     case 10:
    //       text = '社区奖励-游戏'
    //       break;
    //     case 11:
    //       text = '矿机加速收益'
    //       break;
    //     case 12:
    //       text = '节点认购'
    //       break;
    //     case 13:
    //       text = '节点收益'
    //       break;
    //     case 14:
    //       text = '节点退款'
    //       break;
    //     case 15:
    //       text = '提现退款'
    //       break;
    //     case 16:
    //       text = '推广收益'
    //       break;
    //     case 17:
    //       text = '游戏退款'
    //       break;
    //     case 18:
    //       text = '社区奖励-矿机'
    //       break;
    //     case 19:
    //       text = '平级奖'
    //     default:
    //       break;
    //   }
    //   return h(Tag, {}, () => text);
    // },
  },
  {
    title: '流水动向',
    dataIndex: 'flowingStatus',
    customRender: ({ record }) => {
      const state = record.flowingStatus;
      const color = state === "IN" ? 'green' : 'red';
      const text = state === "IN" ? '收入' : '支出';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '发生金额',
    dataIndex: 'changeAmount',
  },
  {
    title: '变动前余额',
    dataIndex: 'balanceBefore',
  },
  {
    title: '变动后余额',
    dataIndex: 'balanceAfter',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '流水备注',
    dataIndex: 'remark',
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
    field: 'coinName',
    label: '币种名称',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'type',
    label: '类型',
    component: 'Select',
    componentProps: {
      options: [
        { label: '充值', value: 1 },
        { label: '提币', value: 2 },
        { label: '内部转账', value: 3 },
        { label: '币币交易', value: 4 },
        { label: '手续费', value: 5 },
        { label: '购买矿机', value: 6 },
        { label: '参与游戏', value: 7 },
        { label: '游戏收益', value: 8 },
        { label: '矿机收益', value: 9 },
        { label: '游戏', value: 10 },
        { label: '矿机加速收益', value: 11 },
        { label: '节点认购', value: 12 },
        { label: '节点收益', value: 13 },
        { label: '节点退款', value: 14 },
        { label: '提现退款', value: 15 },
        { label: '游戏推广收益', value: 16 },
        { label: '游戏退款', value: 17 },
        { label: '购买矿机', value: 18 },
        { label: '平级奖', value: 19 },
        { label: '积分', value: 20 },
        { label: '后台充值', value: 21 },
        { label: '后台下账', value: 22 },
      ],
    },
    colProps: { span: 6 },
  },
  // {
  //   field: 'time',
  //   component: 'RangePicker',
  //   label: '起止日期',
  //   componentProps: ({formActionType})=>{
  //     return {
  //       // format: 'YYYY-MM-DD HH:mm:ss',
  //       onChange: (e)=>{
  //         nextTick(()=>{
  //           const { setFieldsValue } = formActionType;
  //           // 表单设置值
  //           setFieldsValue({
  //             // time: [moment(e[0]._d).format('YYYY-MM-DD HH:mm:ss'), moment(e[1]._d).format('YYYY-MM-DD HH:mm:ss')]
  //             a: `${moment(e[0]._d).format('YYYY-MM-DD HH:mm:ss')} ${moment(e[1]._d).format('YYYY-MM-DD HH:mm:ss')}`
  //           })
  //         })
  //       }
  //     }
  //   },
  //   colProps: { span: 6 },
  // },
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
    field: 'price',
    label: '矿机名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'ghs',
    label: '矿机总价格',
    component: 'Input',
    required: true,
  },
  {
    field: 'rate',
    label: '回报倍数',
    component: 'Input',
    required: true,
  },
  {
    field: 'state',
    label: '交易对状态',
    component: 'Select',
    required: true,
    componentProps: {
      options: [
        { label: '已下架', value: 0 },
        { label: '抢购中', value: 1 },
        { label: '待上架', value: 2 },
      ],
    },
  },
];
