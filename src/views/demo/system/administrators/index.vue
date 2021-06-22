<template>
  <PageWrapper
    dense
    contentFullHeight
    fixedHeight
    contentClass="flex"
  >
    <!-- <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" /> -->
    <BasicTable
      @register="registerTable"
      class="w-full"
    >
      <template #toolbar>
        <a-button
          type="primary"
          v-if="funcKeyArray.includes('add')"
          @click="handleCreate"
        >新增账号</a-button>
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
    <AccountModal
      @register="registerModal"
      @success="handleSuccess"
    />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { getManagerPageApi, DeleteManager } from '/@/api/Manager/Manager';
import { PageWrapper } from '/@/components/Page';
import DeptTree from './DeptTree.vue';

import { useModal } from '/@/components/Modal';
import AccountModal from './AccountModal.vue';

import { columns, searchFormSchema } from './account.data';

import { getFuncKeyArray } from '/@/hooks/web/useFunction';

export default defineComponent({
  name: 'AdministratorsManagement',
  components: { BasicTable, PageWrapper, DeptTree, AccountModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '账号列表',
      api: getManagerPageApi,
      columns,
      // formConfig: {
      //   labelWidth: 120,
      //   schemas: searchFormSchema,
      // },
      searchInfo: { status: 0 },
      // useSearchForm: true,
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

    const funcKeyArray = ref<string[]>();
    funcKeyArray.value = getFuncKeyArray()

    async function getSelectRowList() {
      let rows = getSelectRows();
      let rowArray: Array<string> = [];
      if (rows.length) {
        rows.forEach((item) => {
          rowArray.push(item.id);
        });
        await DeleteManager({ ids: rowArray.join() });
        reload();
      }
    }
    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    function handleEdit(record: Recordable) {
      console.log(record);
      openModal(true, {
        record,
        isUpdate: true,
      });
    }

    async function handleDelete(record: Recordable) {
      await DeleteManager({ ids: record.id });
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
