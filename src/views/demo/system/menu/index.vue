<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
        > 新增菜单 </a-button>
        <a-button
          type="primary"
          @click="getSelectRowList"
        >批量删除</a-button>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
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
import { defineComponent } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';
import { GetRolePageApi, DeleteRoleApi } from '/@/api/Manager/AdminMenu';

import { useModal } from '/@/components/Modal';
import { useDrawer } from '/@/components/Drawer';
import MenuModal from './MenuModal.vue';
import MenuDrawer from './MenuDrawer.vue';

import { columns, searchFormSchema } from './menu.data';

export default defineComponent({
  name: 'MenuManagement',
  components: { BasicTable, MenuDrawer, TableAction, MenuModal },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerDrawer, { openDrawer }] = useDrawer();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '菜单列表',
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
      rowSelection: {
        type: 'checkbox',
      },
    });

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

    async function getSelectRowList() {
      let rows = getSelectRows();
      let rowArray: Array<string> = [];
      if (rows.length) {
        rows.forEach((item) => {
          rowArray.push(item.id);
        });
        await DeleteRoleApi({ ids: rowArray.join() });
        reload();
      }
    }

    async function handleDelete(record: Recordable) {
      await DeleteRoleApi({ ids: record.id });
      reload();
    }

    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      registerDrawer,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      getSelectRowList,
      registerModal,
    };
  },
});
</script>
