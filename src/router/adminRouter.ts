/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-14 15:35:29
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 17:56:37
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router'
const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin/index',
    redirect: '/admin',
  },
  {
    path: 'user',
    meta: { token: true },
    component: () => import('@/views/admin/user/user.vue'),
  },
  {
    path: 'article',
    meta: { token: true },
    component: () => import('@/views/admin/article/article.vue'),
  },
  {
    path: 'articleEdit/:articleId',
    meta: { token: true },
    component: () => import('@/views/admin/article/articleEdit.vue'),
  },
  {
    path: 'articleEdit',
    meta: { token: true },
    component: () => import('@/views/admin/article/articleEdit.vue'),
  },
]

export default adminRoutes
