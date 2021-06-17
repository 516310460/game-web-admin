<template>
  <a-upload
    v-model:file-list="fileList"
    :name="fileName"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    :headers="headers"
    :action="uploadUrl"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="avatar"
    />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>
<script lang="ts">
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { defineComponent, ref, toRefs,watch,toRaw } from 'vue';
import { uploadContainerProps } from './props';
import { useGlobSetting } from '/@/hooks/setting';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  emits: ['change', 'register'],
  props: uploadContainerProps,
  setup(props, { emit }) {
    const fileList = ref([]);
    const loading = ref<boolean>(false);
    let imageUrl = ref<string>('');
    let { headers, fileName, value } = toRefs(props);
    const { uploadUrl,preview } = useGlobSetting();
      watch(
        () => props.value,
        () => {
          if(value.value){
            imageUrl.value = toRaw(preview+value.value || '');
          }else{
            imageUrl.value = ''
          }
        }
      );
    const handleChange = (info: FileInfo) => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }
      emit('change', info.file.response.data);
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url: string) => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }
      if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
      }
    };

    const beforeUpload = (file: FileItem) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };

    return {
      headers,
      uploadUrl,
      fileName,
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
    };
  },
});
</script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
