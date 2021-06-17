<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="600px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <div class="flex items-start justify-between">
          <!-- checkable -->
          <BasicTree
            class="flex-1"
            v-model:value="model[field]"
            v-model:checkedKeys="checkedKeys"
            :treeData="treeData"
            :replaceFields="{ title: 'title', key: 'key' }"
            v-model:selectedKeys="selectedKeys"
            toolbar
            title="菜单分配"
          />
          <div
            v-if="ruleDataSource.length"
            class="pt-12 pl-2 w-32 border-l h-full"
          >
            <checkbox
              class="m-0"
              v-for="(item, index) in ruleDataSource"
              :key="index"
              @change="changeRuleDataSource(item)"
              v-model:checked="item.checked"
            >{{item.funcName}}</checkbox>
          </div>
        </div>
      </template>
    </BasicForm>
  </BasicDrawer>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref, watch } from 'vue';
import { BasicForm, useForm } from '/@/components/Form/index';
import { formRoleSchema } from './role.data';
import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
import { BasicTree, TreeItem } from '/@/components/Tree';

import { listJosnApi, listByRoleIdAndMenuIdApi, SavePermissionApi } from '/@/api/Manager/Role';
import { GetPermissionFunApi } from '/@/api/Manager/AdminFunction';
import { Checkbox } from 'ant-design-vue';

export default defineComponent({
  name: 'RoleDrawer',
  components: { BasicDrawer, BasicForm, BasicTree, Checkbox },
  emits: ['success', 'register'],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const treeData = ref<TreeItem[]>([]);
    const selectedKeys = ref<string[]>([]);
    const checkedKeys = ref<string[]>([]);
    const ruleSource = ref<any[]>([]);
    const ruleDataSource = ref<any[]>([]);
    let checkedRuleDataSource = <any>[];
    let currentID:string = ""

    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 90,
      schemas: formRoleSchema,
      showActionButtonGroup: false,
    });

    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      resetFields();
      setDrawerProps({ confirmLoading: false });
      isUpdate.value = !!data?.isUpdate;

      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record,
        });
      }
      currentID = data.record.id
      let res = await listJosnApi();
      treeData.value = JSON.parse(res) as any as TreeItem[];
      // let { functionRuleSource, menuRuleSource, permissionModel } = await listJosnApi();
      // console.log(JSON.parse(res))
      // ruleSource.value = functionRuleSource;
      // treeData.value = menuRuleSource as any as TreeItem[];
      // let newArray = [];
      // treeData.value.forEach((item) => {
      //   if (item.checked) {
      //     newArray.push(item.id);
      //   }
      //   if (item.items.length) {
      //     item.items.forEach((childItem) => {
      //       if (childItem.checked) {
      //         newArray.push(childItem.id);
      //       }
      //     });
      //   }
      // });
      // console.log(newArray);
      // checkedKeys.value = newArray;
      // console.log(ruleSource)
      // console.log(functionRuleSource);
      // console.log(permissionModel);
    });

    const getTitle = computed(() => (!unref(isUpdate) ? '新增角色权限' : '编辑角色权限'));

    watch(selectedKeys, async () => {
      // console.log(selectedKeys);
      // console.log('selectedKeys', selectedKeys.value[0]);
      if (selectedKeys.value[0]) {
        let newArray = [];
        ruleSource.value.forEach((item) => {
          if (item.menu_ID == selectedKeys.value[0]) {
            newArray.push({
              id: item.id,
              text: item.text,
              checked: item.checked,
            });
          }
        });
        let res: any = await listByRoleIdAndMenuIdApi({
          roleId: currentID,
          menuId: selectedKeys.value[0],
        })
        // let res = await GetPermissionFunApi({ menuId: selectedKeys.value[0] });
        ruleDataSource.value = []
        if(res?.length){
          ruleDataSource.value = res;

          ruleDataSource.value.forEach((item) => {
            // item.checked = false;
            if(checkedRuleDataSource.length && checkedRuleDataSource.includes(item.id)){
              item.checked = true
            }else{
              if (item.checked) {
                checkedRuleDataSource.push(item.id);
              }
            }
          });
        }
      }
    });

    function changeRuleDataSource(item) {
      if (item.checked) {
        checkedRuleDataSource.push(item.id);
        ruleSource.value.forEach((childItem) => {
          if (childItem.id == item.id) {
            childItem.checked = true;
          }
        });
      } else {
        ruleSource.value.forEach((childItem) => {
          if (childItem.id == item.id) {
            childItem.checked = false;
          }
        });
        checkedRuleDataSource.splice(
          checkedRuleDataSource.findIndex((childItem) => childItem === item.id),
          1
        );
      }
      checkedRuleDataSource = Array.from(new Set(checkedRuleDataSource));
    }

    async function handleSubmit() {
      try {
        const values = await validate();
        setDrawerProps({ confirmLoading: true });
        // TODO custom api
        console.log(values);
        // let newArray = [];
        // // let newMenuArray = [];
        // ruleSource.value.forEach((item) => {
        //   if (item.checked) {
        //     newArray.push(item.id);
        //   }
        // });
        // for (let key of values.menu) {
        //   newMenuArray.push(key);
        // }
        let params = {
          id: values.id, //角色id
          // menuIds: newMenuArray,
          functionIds: checkedRuleDataSource.length ? checkedRuleDataSource.join() : '',
        };
        // console.log(params);
        await SavePermissionApi(params);
        checkedRuleDataSource = []
        closeDrawer();
        emit('success');
      } finally {
        setDrawerProps({ confirmLoading: false });
      }
    }

    return {
      registerDrawer,
      registerForm,
      getTitle,
      handleSubmit,
      treeData,
      selectedKeys,
      checkedKeys,
      ruleDataSource,
      ruleSource,
      changeRuleDataSource,
    };
  },
});
</script>
<style>
.m-0 {
  margin: 0 !important;
}
</style>
