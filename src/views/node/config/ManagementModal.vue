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
import { AddCountryConfApi, UpdateCountryConfApi } from '/@/api/Manager/SysCountryConf';

export default defineComponent({
  name: 'ManagementModal',
  components: { BasicModal, BasicForm },
  emits: ['success', 'register'],
  setup(_, { emit }) {
    const isUpdate = ref(true);

    const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
      labelWidth: 140,
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

    const getTitle = computed(() => (!unref(isUpdate) ? '新增节点' : '编辑节点'));

    async function handleSubmit() {
      try {
        const values = await validate();
        setModalProps({ confirmLoading: true });
        // 表单校验通过
        console.log(values);
        // TODO custom api
        if (values.id) {
          await UpdateCountryConfApi(values);
        } else {
          await AddCountryConfApi(values);
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
