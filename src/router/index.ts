/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 11:06:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 10:38:48
 * @Description: router配置文件
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import staticRoutes from './staticRouter'
const routes: Array<RouteRecordRaw> = [
  ...staticRoutes,
  // { path: '/', component: () => import('@/components/HelloWorld.vue') },
]

const router = createRouter({
  history: createWebHistory(), // history 模式则使用 createWebHistory()
  routes,
  scrollBehavior() {
    // 路由切换时控制滚动行为
    return { top: 0 }
  },
})

export default router
