<template>
  <div>
    <BasicTable @register="registerTable" class="w-full">
      <template #toolbar>
        <a-button
          type="primary"
          v-if="funcKeyArray.includes('add')"
          @click="handleCreate"
        > 新增系统配置 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
            {
              icon: 'clarity:note-edit-line',
              auth: !funcKeyArray.includes('update'),
              onClick: handleEdit.bind(null, record),
            }
          ]" />
      </template>
    </BasicTable>
    <MenuDrawer
      @register="registerDrawer"
      @success="handleSuccess"
    />

    <MenuModal
      @register="registerModal"
      @success="handleSuccess"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { GetRolePageApi, DeleteRoleApi } from '/@/api/Manager/Config';

import { useModal } from '/@/components/Modal';
import { useDrawer } from '/@/components/Drawer';
import MenuModal from './MenuModal.vue';
import MenuDrawer from './MenuDrawer.vue';

import { columns, searchFormSchema } from './menu.data';

import { getFuncKeyArray } from '/@/hooks/web/useFunction';

export default defineComponent({
  name: 'MenuManagement',
  components: { BasicTable, MenuDrawer, TableAction, MenuModal },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerDrawer, { openDrawer }] = useDrawer();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '系统配置列表',
      api: GetRolePageApi,
      columns,
      // formConfig: {
      //   labelWidth: 120,
      //   schemas: searchFormSchema,
      // },
      // useSearchForm: true,
      pagination: false,
      striped: false,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      canResize: false,
      actionColumn: {
        width: 80,
        title: '操作',
        dataIndex: 'action',
        slots: { customRender: 'action' },
        fixed: undefined,
      },
    });

    const funcKeyArray = ref<string[]>();
    funcKeyArray.value = getFuncKeyArray()

    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
      // openDrawer(true, {
      //   isUpdate: false,
      // });
    }

    function handleEdit(record: Recordable) {
      // openDrawer(true, {
      //   record,
      //   isUpdate: true,
      // });
      openModal(true, {
        record,
        isUpdate: true,
      });
    }

    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      registerDrawer,
      handleCreate,
      handleEdit,
      handleSuccess,
      registerModal,
      funcKeyArray
    };
  },
});
</script>
