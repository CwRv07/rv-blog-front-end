/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-14 15:35:29
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-18 14:31:49
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
    meta: {},
    component: () => import('@/views/admin/user/user.vue'),
  },
  {
    path: 'article',
    meta: {},
    component: () => import('@/views/admin/article/article.vue'),
  },
  {
    path: 'articleEdit/:articleId',
    meta: {},
    component: () => import('@/views/admin/article/articleEdit.vue'),
  },
  {
    path: 'articleEdit',
    meta: {},
    component: () => import('@/views/admin/article/articleEdit.vue'),
  },
]

export default adminRoutes
