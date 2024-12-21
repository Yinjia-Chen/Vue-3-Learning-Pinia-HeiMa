import { createApp } from 'vue'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia(); // 创建 Pinia 实例
pinia.use(piniaPluginPersistedstate)

const app = createApp(App); // 创建 app 根实例
app.use(pinia); // pinia 插件安装
app.mount('#app') // 视图挂载
