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
        >新增用户</a-button>
      </template> -->
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
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

import { BasicTable, useTable, TableAction, BasicColumn } from '/@/components/Table';
import { getAccountList, updateLevelApi } from '/@/api/demo/system';
import { PageWrapper } from '/@/components/Page';
import DeptTree from './DeptTree.vue';

import { useModal } from '/@/components/Modal';
import AccountModal from './AccountModal.vue';

import { columns, searchFormSchema } from './account.data';

import { getFuncKeyArray } from '/@/hooks/web/useFunction';

export default defineComponent({
  name: 'AccountManagement',
  components: { BasicTable, PageWrapper, DeptTree, AccountModal, TableAction },
  setup() {
    const currentEditKeyRef = ref('');
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload }] = useTable({
      title: '用户列表',
      api: getAccountList,
      columns,
      formConfig: {
        labelWidth: 80,
        schemas: searchFormSchema,
      },
      showIndexColumn: false,
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      actionColumn: {
        width: 220,
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

    // function handleEdit(record: Recordable) {
    //   console.log(record);
    //   openModal(true, {
    //     record,
    //     isUpdate: true,
    //   });
    // }

    function handleEdit(record: EditRecordRow) {
      currentEditKeyRef.value = record.key;
      record.onEdit?.(true);
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

    function handleCancel(record: EditRecordRow) {
      currentEditKeyRef.value = '';
      record.onEdit?.(false, false);
    }

    async function handleSave(record: EditRecordRow) {
      const pass = await record.onEdit?.(false, true);
      if (pass) {
        currentEditKeyRef.value = '';
        await updateLevelApi({
          id: record.id,
          level: record.level,
          saleLevel: record.saleLevel,
          state: record.state,
        })
      }
    }

    function handleModalEdit(record: EditRecordRow, state: Number) {
      openModal(true, {
        record,
        isUpdate: state == 1 ? false : true,
        type: state
      });
    }

    function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          return [
            {
              label: '编辑',
              disabled: currentEditKeyRef.value || !funcKeyArray.value.includes('update') ? currentEditKeyRef.value !== record.key : false,
              auth: !funcKeyArray.value.includes('update'),
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '查上级',
              disabled: currentEditKeyRef.value || !funcKeyArray.value.includes('getSuperior')  ? currentEditKeyRef.value !== record.key : false,
              auth: !funcKeyArray.value.includes('getSuperior'),
              onClick: handleModalEdit.bind(null, record, 1),
            },
            {
              label: '查下级',
              disabled: currentEditKeyRef.value || !funcKeyArray.value.includes('getSubordinate')  ? currentEditKeyRef.value !== record.key : false,
              auth: !funcKeyArray.value.includes('getSubordinate'),
              onClick: handleModalEdit.bind(null, record, 2),
            },
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      handleSelect,
      createActions,
      funcKeyArray
    };
  },
});
</script>
