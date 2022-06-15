<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 00:05:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-14 14:47:37
 * @Description: 文章列表
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvArticleGroup">
  import { ArticlesAPI } from '@/api'
  import { Ref } from 'vue'
  import { ArticleData } from '@/utils/type'
  import { useRouter } from 'vue-router'

  // 分页器
  const currentChange = (page: number) => {
    updateArticleDate(page)
  }
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 100,
    currentChange,
  })

  // 文章数据
  const articleData: Ref<ArticleData[]> = ref([])

  // 数据初始化
  onMounted(() => {
    ArticlesAPI.listArticle(1).then(({ data }) => {
      /* 分页器初始化 */
      pagination.currentChange = data.current
      pagination.total = data.total

      /* 文章数据初始化 */
      articleData.value = data.records
    })
  })

  // 更新文章数据函数
  const updateArticleDate = (page: number) => {
    let params: {
      page: number
      categoryId?: number | string
      tagId?: string[]
      upperLimitTime?: number | string
      lowerLimitTime?: number | string
      search?: string
    } = { page }

    if (props.categoryId) params.categoryId = props.categoryId
    if (props.tagId) params.tagId = props.tagId
    if (props.upperLimitTime && props.lowerLimitTime) {
      params.upperLimitTime = props.upperLimitTime
      params.lowerLimitTime = props.lowerLimitTime
    }
    if (props.search) params.search = props.search
    ArticlesAPI.listArticleByCondition(params).then(({ data }) => {
      /* 文章数据初始化 */
      articleData.value = data.records
      /* 分页器初始化 */
      pagination.currentPage = data.current
      pagination.pageSize = data.size
      pagination.total = data.total
    })
  }
  // 文章详情页跳转
  const router = useRouter()
  const routerToArticleDetail = (articleId: string | number) => {
    router.push({ path: `/blog/article/${articleId}` })
  }

  // 文章筛选
  const props = defineProps<{
    categoryId?: string
    tagId?: string[]
    upperLimitTime?: string
    lowerLimitTime?: string
    search?: string
  }>()
  /* 检测文章选择参数 */
  watch(props, () => updateArticleDate(1))
</script>

<template>
  <section id="rv-article-group">
    <!-- 文章列表 -->
    <template v-if="articleData.length">
      <ul class="article-list">
        <li v-for="p in articleData" :key="p.id">
          <rv-article-card
            :article-data="p"
            @click="routerToArticleDetail(p.id)"
          />
        </li>
      </ul>
    </template>
    <template v-else>
      <el-empty description="当前数据为空" />
    </template>

    <!-- 分页器 -->
    <footer class="article-pagination" v-if="articleData.length">
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :total="pagination.total"
        layout="prev, pager, next"
        @current-change="pagination.currentChange"
        hide-on-single-page
      />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
  #rv-article-group {
    // 分页器
    .article-pagination {
      :deep(.el-pagination) {
        --el-pagination-font-size: var(--el-font-size-medium);
        --el-pagination-button-disabled-bg-color: transparent;
        --el-pagination-bg-color: transparent;
      }
    }
  }
</style>
