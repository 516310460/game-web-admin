import { useUserStore } from '/@/store/modules/user';
import { useRouter } from 'vue-router';

export function getFuncKeyArray(){
  const userStore = useUserStore();
  const { currentRoute } = useRouter();
  const { functions, userName } = userStore.getUserInfo || []
  const { title } = currentRoute.value.meta || {}
  let funcKeyArray: any = []

  if(functions.length){
    functions.forEach(item=>{
      if(item.menuName == title){
        funcKeyArray.push(item.funcKey)
      }
    })
  }

  if(userName == 'admin'){
    funcKeyArray = ['add', 'delete', 'update', 'getSuperior', 'getSubordinate', 'operatingBalance', 'toExamine', 'assignPermissions', 'oneClickFinish']
  }

  return funcKeyArray
}
