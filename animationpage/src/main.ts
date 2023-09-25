import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'; // 引入Element Plus的样式
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus); // 注册Element Plus

app.mount('#app');
