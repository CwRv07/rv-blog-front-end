/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 11:06:07
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 15:20:46
 * @Description: router配置文件
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import blogRoutes from './blogRouter'
const routes: Array<RouteRecordRaw> = [
  { path: '/', meta: {}, redirect: '/blog' },
  /* 前台路由 */
  {
    path: '/blog',
    component: () => import('@/views/blog/index.vue'),
    children: [...blogRoutes],
  },
  /* 后台路由 */
  {
    path: '/admin',
    name: 'adminIndex',
    meta: { token: true },
    component: () => import('@/views/admin/index.vue'),
    children: [],
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
import { useAdminStore } from '@/store/admin'
import { ElMessage } from 'element-plus'

router.beforeEach((to) => {
  const fullScreenLoading = useFullScreenLoadingStore()
  const admin = useAdminStore()

  /* 权限检测 */
  if (to.meta?.token === true && !admin.hasToken) {
    ElMessage({ type: 'error', message: '您当前权限不足，请先验证身份' })
    return '/admin/login'
  }

  /* 加载动画 OPEN */
  fullScreenLoading.open()
})
router.afterEach((to) => {
  const fullScreenLoading = useFullScreenLoadingStore()
  const nav = useNavStore()

  /* 加载动画 CLOSE */
  setTimeout(() => {
    fullScreenLoading.close()
  }, 500)

  /* 导航栏激活项跳转 */
  nav.push(to.name as string)
})
export default router
