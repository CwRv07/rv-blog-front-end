/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 11:06:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-28 16:17:35
 * @Description: router配置文件
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import staticRoutes from './staticRouter'
const routes: Array<RouteRecordRaw> = [
  ...staticRoutes,
  // { path: '/', component: () => import('@/components/HelloWorld.vue') },
]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes,
})

export default router
