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
      class="w-full xl:w-full"
    >
      <!-- <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
        >新增账号</a-button>
      </template> -->
      <template #action="{ record }">
        <TableAction :actions="[
            // {
            //   label: '审核提币',
            //   onClick: handleEdit.bind(null, record),
            // },
            {
              label: '上下余额',
              auth: !funcKeyArray.includes('operatingBalance'),
              onClick: handleDrawerEdit.bind(null, record),
            },
          ]" />
      </template>
    </BasicTable>
    <AccountModal
      @register="registerModal"
      @success="handleSuccess"
    />

    <MenuDrawer
      @register="registerDrawer"
      @success="handleSuccess"
    />

  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { findAccountByInfoApi } from '/@/api/demo/system';
import { PageWrapper } from '/@/components/Page';
import DeptTree from './DeptTree.vue';

import { useModal } from '/@/components/Modal';
import { useDrawer } from '/@/components/Drawer';
import AccountModal from './AccountModal.vue';
import MenuDrawer from './MenuDrawer.vue';

import { columns, searchFormSchema } from './account.data';

import { getFuncKeyArray } from '/@/hooks/web/useFunction';

export default defineComponent({
  name: 'AccountManagement',
  components: { BasicTable, PageWrapper, DeptTree, AccountModal, TableAction, MenuDrawer },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerDrawer, { openDrawer }] = useDrawer();
    const [registerTable, { reload }] = useTable({
      title: '账号列表',
      api: findAccountByInfoApi,
      columns,
      formConfig: {
        labelWidth: 80,
        schemas: searchFormSchema,
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      actionColumn: {
        width: 160,
        title: '操作',
        dataIndex: 'action',
        slots: { customRender: 'action' },
      },
    });

    const funcKeyArray = ref<string[]>();
    funcKeyArray.value = getFuncKeyArray()

    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    function handleEdit(record: Recordable) {
      // console.log(record);
      openModal(true, {
        record,
        isUpdate: true,
      });
    }

    function handleDrawerEdit(record: Recordable) {
      // console.log(record);
      openDrawer(true, {
        record,
        isUpdate: true,
      });
    }

    async function handleDelete(record: Recordable) {
      console.log(record);
    }

    function handleSuccess() {
      reload();
    }

    function handleSelect(deptId = '') {
      reload({ searchInfo: { deptId } });
    }

    return {
      registerTable,
      registerDrawer,
      registerModal,
      handleCreate,
      handleEdit,
      handleDrawerEdit,
      handleDelete,
      handleSuccess,
      handleSelect,
      funcKeyArray
    };
  },
});
</script>
