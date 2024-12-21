import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 定义 store

//defineStore(仓库的唯一标识, () => {...})

export const useCounterStore =  defineStore('counter', () => {
  // 声明数据 state
  const count = ref(100)

  // 声明操作数据的方法 action
  const addCount = () => count.value++
  const subCount = () => count.value--

  // 声明基于数据派生的计算属性 getters (computed)
  const double = computed(() => count.value * 2)

  // 声明数据2
  const msg = ref('hello pinia')

  return {
    count,
    addCount,
    subCount,
    double,

    msg
  }
},
  {
    // persist:true // 开启当前模块持久化
    persist: {
      key: 'my-counter',
      pick:['count']
    }
  }
)
