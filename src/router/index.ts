/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 11:06:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 09:33:00
 * @Description: router配置文件
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import blogRoutes from './blogRouter'
import adminRoutes from './adminRouter'
const routes: Array<RouteRecordRaw> = [
  { path: '/', meta: {}, redirect: '/blog' },
  /* 前台路由 */
  {
    path: '/blog',
    component: () => import('@/views/blog/index.vue'),
    children: [...blogRoutes],
  },
  /* 后台路由 */
  { path: '/admin', redirect: '/admin/index' },
  {
    path: '/admin/index',
    component: () => import('@/views/admin/index.vue'),
    children: [...adminRoutes],
  },
  {
    path: '/admin/login',
    component: () => import('@/views/admin/login/login.vue'),
    meta: {},
  },
]

const router = createRouter({
  history: createWebHistory(), // history 模式则使用 createWebHistory()
  routes,
  scrollBehavior() {
    // 路由切换时控制滚动行为
    return { top: 0 }
  },
})

// 导航守卫
import { useFullScreenLoadingStore } from '@/store/fullScreenLoading'
import { useNavStore } from '@/store/nav'

router.beforeEach(() => {
  const fullScreenLoading = useFullScreenLoadingStore()

  /* 加载动画 OPEN */
  fullScreenLoading.open()
  console.log('导航守卫-before')
})
router.beforeEach((to) => {
  const fullScreenLoading = useFullScreenLoadingStore()
  const nav = useNavStore()

  /* 加载动画 CLOSE */
  setTimeout(() => {
    fullScreenLoading.close()
  }, 1000)

  /* 导航栏激活项跳转 */
  // console.log(to.name)
  nav.push(to.name as string)
  console.log('导航守卫-after')
})
export default router
