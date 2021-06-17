<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
    :width="1200"
  >

    <BasicTable
      @register="registerTable"
      class="w-full xl:w-full"
    >
      <template #toolbar>
        <!-- <a-button
          type="primary"
          @click="handleToExamine"
        >批量审核</a-button> -->

        <!-- <Dropdown
          placement="bottomCenter"
          :trigger="['click']"
          :dropMenuList="localeList"
          :selectedKeys="selectedKeys"
          @menuEvent="handleMenuEvent"
          overlayClassName="app-locale-picker-overlay"
        >
          <span class="cursor-pointer flex items-center">
            <Icon icon="ion:language" />
            <span v-if="showText" class="ml-1">{{ getLangText }}</span>
          </span>
        </Dropdown> -->
        <a-select
          v-if="isRows.length"
          v-model:value="selectValue"
          style="width: 120px"
          ref="select"
          @change="handleChange"
        >
          <a-select-option value="" disabled>请选择审核</a-select-option>
          <a-select-option value="1">审核通过</a-select-option>
          <a-select-option value="3">审核拒绝</a-select-option>
        </a-select>
      </template>
      <template #action="{ record }">
        <TableAction
          :dropDownActions="[
            {
              label: '审核通过',
              popConfirm: {
                title: '是否审核通过？',
                confirm: handleOpen.bind(null, record, 1),
              },
              ifShow: () => {
                return record.state != 1;
              },
            },
            {
              label: '审核拒绝',
              popConfirm: {
                title: '是否审核拒绝？',
                confirm: handleOpen.bind(null, record, 3),
              },
              ifShow: () => {
                return record.state != 3;
              },
            },
          ]" />
      </template>
    </BasicTable>

    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { defineComponent, ref, computed, unref } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
// import { accountFormSchema, searchModalFormSchema } from './account.data';
import { accountFormSchema, columns, searchModalFormSchema } from './accountModal.data';
import { getDeptList, GetPermissionApi, findWithDrewListApi, approveApi } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { Tooltip, Dropdown, Select, Menu } from 'ant-design-vue';

export default defineComponent({
  name: 'AccountModal',
  components: { BasicModal, BasicForm, BasicTable, TableAction, Dropdown, [Select.name]: Select, ASelectOption: Select.Option },
  emits: ['success', 'register'],
  setup(props, { emit }) {
    const isUpdate = ref(false);
    let userName = ref('')
    let rows = ref([])

    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      labelWidth: 100,
      schemas: accountFormSchema,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23,
      },
    });

    const [registerTable, { reload, setProps, getSelectRows, getSelectRowKeys, clearSelectedRowKeys }] = useTable({
      title: '提币列表',
      api: findWithDrewListApi,
      searchInfo: {
        userName: userName || ''
      },
      columns,
      formConfig: {
        labelWidth: 60,
        schemas: searchModalFormSchema,
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      actionColumn: {
        width: 80,
        title: '操作',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
      rowSelection: {
        type: 'checkbox',
      },
    });

    // 批量审核
    async function handleToExamine() {
      // openModal(true, {
      //   isUpdate: false,
      // });
      rows.value = getSelectRows();
      // let rowArray: Array<string> = [];
      // let rowsName: string = ''
      // if (rows.length) {
      //   rows.forEach((item) => {
      //     rowsName = item.userName
      //     rowArray.push(item.id);
      //   });
      //   console.log(rowArray.join())
      //   // await DeleteMarketCoinApi({ ids: rowArray.join() });
      //   await approveApi({
      //     ids: rowArray.join(),
      //     state: state,
      //   })
      //   // console.log('点击了启用', record, state);
      //   reload({
      //     page: 1,
      //     searchInfo: {
      //       userName: rowsName
      //     }
      //   });
      //   reload();
      // }
    }

    function handleEdit(record: Recordable) {
      console.log(record);
      // openModal(true, {
      //   record,
      //   isUpdate: true,
      // });
    }

    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record,
        });
      }

      userName.value = data.record.userName

      setTimeout(() => {
        reload({
          page: 1,
          searchInfo: {
            userName: data.record.userName
          }
        });
      }, 300);

      // const treeData = await getDeptList();
      // updateSchema([
      //   {
      //     field: 'pwd',
      //     show: !unref(isUpdate),
      //   },
      //   {
      //     field: 'dept',
      //     componentProps: { treeData },
      //   },
      // ]);
    });

    const getTitle = computed(() => (!unref(isUpdate) ? '新增账号' : '查询提币列表'));

    const isRows = computed(() => {
      console.log(userName.value)
      return getSelectRows()
    });


    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        // TODO custom api
        console.log(values);
        // await GetPermissionApi({ userId: values.id, state: values.state });
        closeModal();
        emit('success');
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    async function handleOpen(record: Recordable, state: Number) {
      await approveApi({
        ids: record.id,
        state: state,
      })
      // console.log('点击了启用', record, state);
      clearSelectedRowKeys()
      reload({
        page: 1,
        searchInfo: {
          userName: record.userName
        }
      });
    }

    const handleChange = async (value: string) => {
      // console.log(isRows.value)
      // console.log(`selected ${value}`);
      let newArray = <string>[]
      let currentUserName: string = ''
      isRows.value.forEach(item => {
        currentUserName = item.userName
        newArray.push(item.id)
      });
      await approveApi({
        ids: newArray.join(),
        state: value,
      })
      clearSelectedRowKeys()
      reload({
        page: 1,
        searchInfo: {
          userName: currentUserName
        }
      });
    };

    return {
      registerTable,
      handleToExamine,
      handleEdit,
      registerModal,
      registerForm,
      getTitle,
      handleSubmit,
      handleOpen,
      handleChange,
      rows,
      isRows,
      selectValue: ref(''),
    };
  },
});
</script>
