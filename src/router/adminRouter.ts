/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-14 15:35:29
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-17 22:20:42
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router'
const adminRoutes: Array<RouteRecordRaw> = [
  {
    path: '/admin/user',
    meta: {},
    component: () => import('@/views/admin/user/user.vue'),
  },
  {
    path: '/admin/article',
    meta: {},
    component: () => import('@/views/admin/article/article.vue'),
  },
]

export default adminRoutes
