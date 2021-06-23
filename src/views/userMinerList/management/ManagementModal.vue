<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="getTitle"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref, toRaw } from 'vue';
import { BasicModal, useModalInner } from '/@/components/Modal';
import { BasicForm, useForm } from '/@/components/Form/index';
import { managementFormSchema } from './management.data';
import { AddMarketCoinApi, UpdateMarketCoinApi } from '/@/api/Manager/CcMarketCoin';
// import { getDeptList } from '/@/api/demo/system';
import { useMessage } from '/@/hooks/web/useMessage';

export default defineComponent({
  name: 'ManagementModal',
  components: { BasicModal, BasicForm },
  emits: ['success', 'register'],
  setup(_, { emit }) {
    const isUpdate = ref(true);

    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      labelWidth: 165,
      schemas: managementFormSchema,
      showActionButtonGroup: false,
      actionColOptions: {
        span: 23,
      },
    });

    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields();
      setModalProps({ confirmLoading: false });
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record,
        });
      }

      // console.log(data);

      // const treeData = await getDeptList();
      // updateSchema([
      //   {
      //     field: 'pwd',
      //     show: !unref(isUpdate),
      //   },
      //   {
      //     field: 'dept',
      //     componentProps: { treeData },
      //   },
      // ]);
    });

    const getTitle = computed(() => (!unref(isUpdate) ? '新增用户矿机' : '编辑用户矿机'));

    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        // 表单校验通过
        console.log(values);
        // TODO custom api
        if(values.id){
          await UpdateMarketCoinApi(values);
        }else{
          await AddMarketCoinApi(values);
        }
        closeModal();
        emit('success');
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    return { registerModal, registerForm, getTitle, handleSubmit };
  },
});
</script>
