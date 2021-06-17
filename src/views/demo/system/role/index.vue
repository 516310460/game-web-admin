<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
        > 新增角色 </a-button>
        <a-button
          type="primary"
          @click="getSelectRowList"
        >批量删除</a-button>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
            {
              icon: 'ant-design:setting-outlined',
              onClick: handleRoleEdit.bind(null, record),
            },
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
    <RoleDrawer
      @register="registerDrawer"
      @success="handleSuccess"
    />

    <RoleModal
      @register="registerModal"
      @success="handleSuccess"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { BasicTable, useTable, TableAction } from '/@/components/Table';

import { GetRolePageApi, DeleteRoleApi } from '/@/api/Manager/Role';

import { useModal } from '/@/components/Modal';
import { useDrawer } from '/@/components/Drawer';
import RoleModal from './RoleModal.vue';
import RoleDrawer from './RoleDrawer.vue';

import { columns, searchFormSchema } from './role.data';

export default defineComponent({
  name: 'RoleManagement',
  components: { BasicTable, RoleDrawer, TableAction, RoleModal },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerDrawer, { openDrawer }] = useDrawer();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '角色列表',
      api: GetRolePageApi,
      columns,
      // formConfig: {
      //   labelWidth: 70,
      //   schemas: searchFormSchema,
      // },
      // useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      actionColumn: {
        width: 120,
        title: '操作',
        dataIndex: 'action',
        slots: { customRender: 'action' },
        fixed: undefined,
      },
      rowSelection: {
        type: 'checkbox',
      },
    });

    function handleRoleEdit(record: Recordable){
      openDrawer(true, {
        record,
        isUpdate: true,
      });
    }

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
      registerModal,
      getSelectRowList,
      handleRoleEdit
    };
  },
});
</script>
