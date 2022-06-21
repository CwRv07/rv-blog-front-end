<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 16:27:27
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 10:47:47
 * @Description: 侧边框列表
 * @Email: Rv_Jiang@outlook.com
-->

<script setup lang="ts" name="rvAsideList">
  import RvAsideItem from './components/RvAsideItem.vue'

  /* 列表信息 */
  defineProps<{
    title: string
    more?: boolean
    list: string[]
  }>()
</script>

<template>
  <section class="rv-aside-list">
    <!-- 列表信息 -->
    <section class="list-info">
      <h2 class="list-title">{{ title }}</h2>
      <span class="list-more" v-if="more">更多</span>
    </section>
    <!-- 列表 -->
    <ul class="list-body">
      <li v-for="(p, index) in list" :key="p">
        <rv-aside-item :title="p" :index="index" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .rv-aside-list {
    padding: 15px 5px;
    margin-bottom: 10px;
    transition: all 0.3s;
    border-radius: 4px;
    border: 1px solid #e4e7ed;
    background-color: var(--el-color-white);

    &:hover {
      box-shadow: var(--el-box-shadow-light);
    }
    // 列表信息
    .list-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      padding: 0 10px;
      // 标题
      .list-title {
        cursor: pointer;
        color: var(--el-text-color-regular);
      }
      // 更多
      .list-more {
        font-size: var(--el-font-size-small);
        color: var(--el-text-color-secondary);
        cursor: pointer;
      }
    }

    // 列表
    .list-body {
      li {
        padding: 0 20px;
        border-radius: 6px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          background-color: var(--el-menu-hover-bg-color);
        }
      }
    }
  }
</style>
