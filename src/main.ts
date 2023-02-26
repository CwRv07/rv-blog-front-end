/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2023-02-26 12:59:25
 * @Description: 主配置文件
 * @Email: Rv_Jiang@outlook.com
 */

// 解决使用unplugin-auto-import开发时VSCode出现错误提示、并且无法打包问题
import 'vue-global-api'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { createPinia } from 'pinia'
/* 全局引入ElementPlus */
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import '/styles/index.scss'

import '@/assets/css/index.scss'
//ElementPlus hidden
import 'element-plus/theme-chalk/display.css'
import '@/assets/css/element/index.scss'
import '@/assets/css/element/dark.scss'
import MomentFormate from '@/utils/momentFormat'

export const app = createApp(App)

app.use(router)
app.use(createPinia())
// app.use(ElementPlus)
app.directive('momentFormat', MomentFormate)

app.mount('#app')
