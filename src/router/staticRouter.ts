/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 15:05:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-06 15:05:45
 * @Description: 静态路由表
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router'
const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {},
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    meta: {},
  },
  {
    path: '/article/:articleId',
    name: 'articleDetail',
    component: () => import('@/views/articleDetail/articleDetail.vue'),
    meta: {},
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/category.vue'),
    meta: {},
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('@/views/archive/archive.vue'),
    meta: {},
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/about.vue'),
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
