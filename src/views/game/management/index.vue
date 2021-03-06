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
          v-if="funcKeyArray.includes('add')"
          type="primary"
          @click="handleCreate"
        >新增游戏</a-button>
        <a-button
          v-if="funcKeyArray.includes('delete')"
          type="primary"
          @click="getSelectRowList"
        >批量删除</a-button>
      </template>
      <template #action="{ record }">
        <TableAction :actions="[
            {
              label: '一键完成',
              auth: record.state != 1 || !funcKeyArray.includes('oneClickFinish'),
              onClick: handleFinish.bind(null, record),
            },
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
import {
  CcMarketCoinListApi,
  DeleteMarketCoinApi,
  GetMarketCoinApi,
  finishApi
} from '/@/api/Manager/CcMarketCoin';
import { PageWrapper } from '/@/components/Page';

import { useModal } from '/@/components/Modal';
import ManagementModal from './ManagementModal.vue';

import { columns, searchFormSchema } from './management.data';
import { useUserStore } from '/@/store/modules/user';
import { useRouter } from 'vue-router';

import { getFuncKeyArray } from '/@/hooks/web/useFunction';

export default defineComponent({
  name: 'AccountManagement',
  components: { BasicTable, PageWrapper, ManagementModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, getSelectRows }] = useTable({
      title: '游戏列表',
      api: CcMarketCoinListApi,
      columns,
      // 搜索
      // formConfig: {
      //   labelWidth: 120,
      //   schemas: searchFormSchema,
      // },
      // useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      canResize: true,
      actionColumn: {
        width: 160,
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
        await DeleteMarketCoinApi({ ids: rowArray.join() });
        reload();
      }
    }

    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    async function handleFinish(record: Recordable) {
      await finishApi({ id: record.id });
      reload();
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
      // let arr: string[] = [];
      // arr.push(record.id);
      await DeleteMarketCoinApi({ ids: record.id });
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
      handleFinish,
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
