<template>
  <PageWrapper
    dense
    contentFullHeight
    fixedHeight
    contentClass="flex"
  >
    <BasicTable @register="registerTable">
    </BasicTable>
    <ManagementModal
      @register="registerModal"
      @success="handleSuccess"
    />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, toRaw } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { flowRecordQueryApi } from '/@/api/Manager/FlowRecord';
import { PageWrapper } from '/@/components/Page';

import { useModal } from '/@/components/Modal';
import ManagementModal from './ManagementModal.vue';

import { columns, searchFormSchema } from './management.data';

export default defineComponent({
  name: 'AccountManagement',
  components: { BasicTable, PageWrapper, ManagementModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '流水记录列表',
      api: flowRecordQueryApi,
      columns,
      // // 搜索
      // formConfig: {
      //   labelWidth: 90,
      //   schemas: searchFormSchema,
      // },
      // useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      canResize: true,
      // actionColumn: {
      //   width: 80,
      //   title: '操作',
      //   dataIndex: 'action',
      //   slots: { customRender: 'action' },
      // },
      // rowSelection: {
      //   type: 'checkbox',
      // },
    });

    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    async function handleEdit(record: Recordable) {
      // let res = await GetMarketCoinApi({id: toRaw(record).id})
      // console.log(res)
      openModal(true, {
        record,
        isUpdate: true,
      });
    }

    async function handleDelete(record: Recordable) {
      // console.log(record, toRaw(record));
      await DeleteTradePairApi({ ids: record.id });
      reload();
    }

    function handleSuccess() {
      reload();
    }

    function handleSelect(deptId = '') {
      reload({ searchInfo: { deptId } });
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      handleSelect,
    };
  },
});
</script>
