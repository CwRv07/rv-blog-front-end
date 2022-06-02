/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 15:05:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-31 22:30:46
 * @Description: 静态路由表
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router'
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {},
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article/article.vue'),
    meta: {},
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('@/views/notFound/notFound.vue'),
    meta: {},
  },
]

export default staticRoutes
