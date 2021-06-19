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
import { getDeptList, GetPermissionApi, findAllByUserIdApi, approveApi } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { Tooltip, Dropdown, Select, Menu } from 'ant-design-vue';

export default defineComponent({
  name: 'AccountModal',
  components: { BasicModal, BasicForm, BasicTable, TableAction, Dropdown, [Select.name]: Select, ASelectOption: Select.Option },
  emits: ['success', 'register'],
  setup(props, { emit }) {
    const isUpdate = ref(false);
    let type = ref('')
    let id = ref('')
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
      title: '查询列表',
      api: findAllByUserIdApi,
      searchInfo: {
        id: id || '',
        type: type || ''
      },
      columns,
      // formConfig: {
      //   labelWidth: 60,
      //   schemas: searchModalFormSchema,
      // },
      // useSearchForm: true,
      showTableSetting: true,
      bordered: true,
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


      id.value = data.record.id
      type.value = data.type

      setTimeout(() => {
        reload({
          page: 1,
          searchInfo: {
            id: data.record.id,
            type: data.type
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

    const getTitle = computed(() => (!unref(isUpdate) ? '查询所有上级列表' : '查询所有下级列表'));

    const isRows = computed(() => {
      // console.log(type.value)
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
          id: record.id,
          type: record.type
        }
      });
    }

    const handleChange = async (value: string) => {
      // console.log(isRows.value)
      // console.log(`selected ${value}`);
      let newArray = <string>[]
      let currentUserName: string = ''
      isRows.value.forEach(item => {
        currentUserName = item.type
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
          type: currentUserName
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
