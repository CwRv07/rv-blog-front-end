<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 18:31:00
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-28 23:37:39
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

  const navController = () => {
    menu.navIsShowWhenMD = !menu.navIsShowWhenMD
  }
  const menu = reactive({
    activeIndex: '1',
    backgroundColor: 'transparent',
    navIsShowWhenMD: false,
    navController,
  })

  const search = reactive({
    value: '',
    callback: () => {
      return
    },
  })
</script>

<template>
  <header id="rv-header">
    <main class="row">
      <!-- 博客logo -->
      <section class="nav-logo col-1 col-md-less-12">
        <h1 class="logo-name">RvBlog</h1>
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
            <!-- 首页 -->
            <el-menu-item index="1" class="col-md-less-12">
              <el-icon>
                <House />
              </el-icon>
              首页
            </el-menu-item>
            <!-- 分页 -->
            <el-sub-menu
              class="col-md-less-12"
              index="2"
              :show-timeout="200"
              :hide-timeout="200"
            >
              <template #title>
                <el-icon>
                  <Collection />
                </el-icon>
                分类
              </template>
              <el-sub-menu index="2-1" :show-timeout="200" :hide-timeout="200">
                <template #title>前端</template>
                <el-menu-item class="menu-item" index="2-4-1">
                  HTML
                </el-menu-item>
                <el-menu-item class="menu-item" index="2-4-2">CSS</el-menu-item>
                <el-menu-item class="menu-item" index="2-4-3">JS</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="2-2">后端</el-menu-item>
              <el-menu-item index="2-3">数据库</el-menu-item>
            </el-sub-menu>
            <!-- 归档 -->
            <el-menu-item class="col-md-less-12" index="3">
              <el-icon>
                <Guide />
              </el-icon>
              归档
            </el-menu-item>
            <!-- 关于博客 -->
            <el-menu-item class="col-md-less-12" index="4">
              <el-icon>
                <Warning />
              </el-icon>
              关于博客
            </el-menu-item>
          </el-menu>
          <!-- 搜索框 -->
          <el-input
            class="nav-search col-3 col-md-less-12"
            v-model="search.value"
            placeholder="搜索文章"
            clearable
            @change="search.callback"
            :suffix-icon="Search"
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
    top: 0;
    z-index: var(--el-index-top);
    color: $header-color-default;
    background-color: $header-color-background;

    // 响应式遮挡

    /* 博客logo */
    .nav-logo {
      padding-right: 20px;
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
      font-weight: bold;
      color: var(--el-color-primary);

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
