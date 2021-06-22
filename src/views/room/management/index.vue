<template>
  <PageWrapper
    dense
    contentFullHeight
    fixedHeight
    contentClass="flex"
  >
    <BasicTable @register="registerTable" class="w-full">
      <template #toolbar>
        <a-button
          type="primary"
          v-if="funcKeyArray.includes('add')"
          @click="handleCreate"
        >新增游戏大厅</a-button>
        <a-button
          type="primary"
          v-if="funcKeyArray.includes('delete')"
          @click="getSelectRowList"
        >批量删除</a-button>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
            {
              icon: 'clarity:note-edit-line',
              auth: !funcKeyArray.includes('update'),
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              auth: !funcKeyArray.includes('delete'),
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]" />
      </template>
    </BasicTable>
    <ManagementModal
      @register="registerModal"
      @success="handleSuccess"
    />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, toRaw, ref } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { GetMainNetWorkPageApi, DeleteMainNetWorkApi } from '/@/api/Manager/ccMainNetwork';
import { PageWrapper } from '/@/components/Page';

import { useModal } from '/@/components/Modal';
import ManagementModal from './ManagementModal.vue';

import { columns, searchFormSchema } from './management.data';

import { getFuncKeyArray } from '/@/hooks/web/useFunction';

export default defineComponent({
  name: 'AccountManagement',
  components: { BasicTable, PageWrapper, ManagementModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '游戏大厅列表',
      api: GetMainNetWorkPageApi,
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

    const funcKeyArray = ref<string[]>();
    funcKeyArray.value = getFuncKeyArray()

    async function getSelectRowList() {
      let rows = getSelectRows();
      let rowArray: Array<string> = [];
      if (rows.length) {
        rows.forEach((item) => {
          rowArray.push(item.id);
        });
        await DeleteMainNetWorkApi({ ids: rowArray.join() });
        reload();
      }
    }

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
      await DeleteMainNetWorkApi({ ids: record.id });
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
      getSelectRowList,
      funcKeyArray
    };
  },
});
</script>
