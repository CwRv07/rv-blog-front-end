<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 00:05:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-29 17:49:30
 * @Description: 文章列表
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvArticleGroup">
  const currentChange = (page: number) => {
    console.log(page)
  }
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 100,
    currentChange,
  })
</script>

<template>
  <section id="rv-article-group">
    <!-- 文章列表 -->
    <ul class="article-list">
      <li v-for="p in 5" :key="p">
        <rv-article-card />
      </li>
    </ul>
    <!-- 分页器 -->
    <footer class="article-pagination">
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :total="pagination.total"
        layout="prev, pager, next"
        @current-change="pagination.currentChange"
      />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
  #rv-article-group {
    // 分页器
    .article-pagination {
      // font-size: var(--el-font-size-medium);
      :deep(.el-pagination) {
        --el-pagination-font-size: var(--el-font-size-base);
        --el-pagination-button-disabled-bg-color: transparent;
        --el-pagination-bg-color: transparent;
      }
    }
  }
</style>
