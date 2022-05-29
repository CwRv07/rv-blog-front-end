<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 16:07:17
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-29 17:44:38
 * @Description: 首页
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="index">
  import RvAsideList from './components/RvAsideList/RvAsideList.vue'
  /* 文章信息 */

  /* 侧边栏信息 */
  // 类别列表
  const categoryList = {
    title: '精选类别',
    list: ['前端', '后端', '数据库', '生活'],
  }
  // 标签列表
  const tagList = {
    title: '热门标签',
    list: ['HTML', 'CSS', 'JS', 'TS', 'Vue'],
  }
</script>

<template>
  <main id="index" class="row">
    <!-- 文章信息 -->
    <aside class="article-body col-8 col-md-more-9 col-md-less-12">
      <rv-article-group />
    </aside>
    <!-- 侧边栏信息 -->
    <aside class="article-extra col-4 col-md-more-3 hidden-xs-only">
      <rv-aside-list v-bind="categoryList" />
      <rv-aside-list v-bind="tagList" />
    </aside>
  </main>
</template>

<style lang="scss" scoped>
  #index {
    @include body-padding($rv-body-padding-list);
    .article-body {
    }
    .article-extra {
      margin-top: 10px;
      margin-left: 20px;
      border-radius: 4px;
    }
  }
</style>
