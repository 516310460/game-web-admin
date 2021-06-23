<template>
  <PageWrapper
    dense
    contentFullHeight
    fixedHeight
    contentClass="flex"
  >
    <BasicTable @register="registerTable" class="w-full">
      <template #toolbar>
      </template>
      <template #action="{ record }">
        <TableAction  />
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
  nodeQueryApi,
} from '/@/api/Manager/SysCountryConf';
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
      title: '用户节点列表',
      api: nodeQueryApi,
      columns,
      // 搜索
      formConfig: {
        labelWidth: 80,
        schemas: searchFormSchema,
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      canResize: true,
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
        // await DeleteMarketCoinApi({ ids: rowArray.join() });
        reload();
      }
    }

    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    async function handleFinish(record: Recordable) {
      // await finishApi({ id: record.id });
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
      // await DeleteMarketCoinApi({ ids: record.id });
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
