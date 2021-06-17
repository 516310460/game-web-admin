<template>
  <PageWrapper title="修改当前用户密码">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';
  import { changePwdManagerApi } from '/@/api/Manager/Manager';
  import { encryptByMd5 } from '/@/utils/cipher';
  import { useRouter } from 'vue-router';
  import { PageEnum } from '/@/enums/pageEnum';

  import { formSchema } from './pwd.data';
  export default defineComponent({
    name: 'ChangePassword',
    components: { BasicForm, PageWrapper },
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          const { password, newpassword, qpassword } = values;

          // TODO custom api
          console.log(password, newpassword);
          await changePwdManagerApi({
            password: encryptByMd5(password),
            newpassword: encryptByMd5(newpassword),
            qpassword: encryptByMd5(qpassword),
          })
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
        } catch (error) {}
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
