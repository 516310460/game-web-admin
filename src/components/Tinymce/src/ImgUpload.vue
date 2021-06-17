<template>
  <div :class="[prefixCls, { fullscreen }]">
    <Upload
      name="file"
      multiple
      @change="handleChange"
      :headers="headers"
      :action="uploadUrl"
      :showUploadList="false"
      accept=".jpg,.jpeg,.gif,.png,.webp"
    >
      <a-button type="primary">
        {{ t('component.upload.imgUpload') }}
      </a-button>
    </Upload>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { Upload } from 'ant-design-vue';
import { useDesign } from '/@/hooks/web/useDesign';
import { useGlobSetting } from '/@/hooks/setting';
import { useI18n } from '/@/hooks/web/useI18n';
import { getToken } from '/@/utils/auth';

export default defineComponent({
  name: 'TinymceImageUpload',
  components: { Upload },
  props: {
    fullscreen: {
      type: Boolean,
    },
  },
  emits: ['uploading', 'done', 'error'],
  setup(_, { emit }) {
    let uploading = false;
    let headers = {
      AuthToken: getToken(),
    };

    const { uploadUrl, preview } = useGlobSetting();
    const { t } = useI18n();
    const { prefixCls } = useDesign('tinymce-img-upload');

    function handleChange(info: Recordable) {
      console.log(info);
      const file = info.file;
      const status = file?.status;

      const url = file?.response?.data;
      const name = file?.name;
      if (status === 'uploading') {
        if (!uploading) {
          emit('uploading', name);
          uploading = true;
        }
      } else if (status === 'done') {
        emit('done', name, preview + url);
        uploading = false;
      } else if (status === 'error') {
        emit('error');
        uploading = false;
      }
    }

    return {
      headers,
      prefixCls,
      handleChange,
      uploadUrl,
      t,
    };
  },
});
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-tinymce-img-upload';

.@{prefix-cls} {
  position: absolute;
  top: 4px;
  right: 10px;
  z-index: 20;

  &.fullscreen {
    position: fixed;
    z-index: 10000;
  }
}
</style>
