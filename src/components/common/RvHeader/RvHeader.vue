<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 18:31:00
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-14 14:45:09
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->

<script setup lang="ts" name="rvHeader">
  import {
    Search,
    House,
    Collection,
    Guide,
    Warning,
    Menu,
  } from '@element-plus/icons-vue'
  import mediaUtils from '@/utils/mediaUtils'
  import { useRouter } from 'vue-router'
  import { useNavStore } from '@/store/nav'
  import { storeToRefs } from 'pinia'
  const router = useRouter()

  /* nav控制器 */
  const navController = () => {
    menu.navIsShowWhenMD = !menu.navIsShowWhenMD
  }

  /* 路由跳转 */
  const routerJump = (url: string) => {
    router.push({
      name: url,
    })
  }

  /* 菜单数据 */
  const menu = reactive({
    activeIndex: '1',
    backgroundColor: 'transparent',
    navIsShowWhenMD: false,
    navController,
    list: [
      {
        index: '1',
        icon: markRaw(House),
        title: '首页',
        url: 'index',
      },
      {
        index: '2',
        icon: markRaw(Collection),
        title: '分类',
        url: 'category',
      },
      {
        index: '3',
        icon: markRaw(Guide),
        title: '归档',
        url: 'archive',
      },
      {
        index: '4',
        icon: markRaw(Warning),
        title: '关于博客',
        url: 'about',
      },
    ],
    routerJump,
  })

  /* 菜单激活项检测 */
  const { currentRouterName } = storeToRefs(useNavStore())
  // 初始设置
  onMounted(() => {
    changMenuActiveIndex()
  })
  // 检测改变
  watch(currentRouterName, () => changMenuActiveIndex)
  const changMenuActiveIndex = () => {
    let currentIndex = 0
    menu.list.forEach((val, index) => {
      if (val.url === currentRouterName.value) {
        currentIndex = index + 1
      }
    })
    menu.activeIndex = currentIndex.toString()
  }
</script>

<template>
  <header id="rv-header" :router="currentRouterName">
    <main class="row">
      <!-- 博客logo -->
      <section class="nav-logo col-1 col-md-less-12">
        <h1 class="logo-name" @click="menu.routerJump('index')">RvBlog</h1>
        <aside
          class="nav-controller"
          v-show="!mediaUtils.isMD"
          @click="menu.navController"
        >
          <el-icon>
            <Menu />
          </el-icon>
        </aside>
      </section>
      <!-- 导航栏菜单 -->
      <el-collapse-transition>
        <section
          v-show="mediaUtils.isMD || menu.navIsShowWhenMD"
          class="nav-body col-11 row col-md-less-12"
        >
          <!-- 菜单 -->
          <el-menu
            :default-active="menu.activeIndex"
            class="nav-menu row col-9 col-md-less-12"
            :mode="mediaUtils.isMD ? 'horizontal' : 'vertical'"
            :ellipsis="false"
            :background-color="menu.backgroundColor"
          >
            <el-menu-item
              v-for="p in menu.list"
              :key="p.index"
              :index="p.index"
              class="col-md-less-12"
              @click="menu.routerJump(p.url)"
            >
              <template v-if="p.icon">
                <el-icon>
                  <component :is="p.icon" />
                </el-icon>
              </template>

              {{ p.title }}
            </el-menu-item>
          </el-menu>
          <!-- 搜索框 -->
          <el-input
            class="nav-search col-3 col-md-less-12"
            v-model="undefined"
            placeholder="搜索文章"
            clearable
            :suffix-icon="Search"
            @click="menu.routerJump('category')"
            v-show="currentRouterName !== 'category'"
          />
        </section>
      </el-collapse-transition>
    </main>
  </header>
</template>

<style lang="scss" scoped>
  // 局部变量
  $header-color-default: #ddd;
  $header-color-background: #1b1c1d;

  #rv-header {
    @include body-padding($rv-body-padding-list);
    position: sticky;
    top: -1px;
    z-index: var(--el-index-top);
    color: $header-color-default;
    background-color: $header-color-background;
    border-bottom: 2px solid var(--el-color-primary);
    user-select: none;

    // 响应式遮挡

    /* 博客logo */
    .nav-logo {
      padding: 0 20px;
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
      font-weight: bold;
      color: var(--el-color-primary);
      cursor: pointer;

      .nav-controller {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }

    .nav-body {
      .nav-menu {
        margin-right: 20px;
        border-bottom: 0;
        border-right: 0;
        --el-menu-text-color: $header-color-default;

        :deep(li) {
          border-bottom: 0;
          --el-menu-base-level-padding: 10px;
          --el-menu-hover-bg-color: #ffffff22;
        }
      }
      .nav-search {
        align-self: center;
        min-width: 120px;
        line-height: 58px;
        padding: 10px 0;
        margin: 0 auto;
        color: $header-color-default;
        :deep(.el-input__wrapper) {
          background-color: $header-color-background;
          --el-input-border-color: #ffffff22;
          --el-input-text-color: $header-color-default;
        }
      }
    }
  }
</style>
