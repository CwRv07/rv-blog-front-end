/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 15:05:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 15:20:58
 * @Description: 静态路由表
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router'
const blogRoutes: Array<RouteRecordRaw> = [
  {
    path: '/blog',
    meta: {},
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/blog/index/index.vue'),
    meta: {},
  },
  {
    path: '/article/:articleId',
    name: 'articleDetail',
    component: () => import('@/views/blog/articleDetail/articleDetail.vue'),
    meta: {},
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/blog/category/category.vue'),
    meta: {},
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('@/views/blog/archive/archive.vue'),
    meta: {},
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/blog/about/about.vue'),
    meta: {},
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import('@/views/blog/pay/pay.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'notFound',
    component: () => import('@/views/blog/notFound/notFound.vue'),
    meta: {},
  },
]

export default blogRoutes
