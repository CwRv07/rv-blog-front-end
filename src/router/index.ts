/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 11:06:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-28 11:25:08
 * @Description: router配置文件
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // { path: '/', component: () => import('@/components/HelloWorld.vue') },
]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes,
})

export default router
