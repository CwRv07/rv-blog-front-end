<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 00:05:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 21:54:56
 * @Description: 文章列表
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvArticleGroup">
  import { ArticlesAPI } from '@/api'
  import { Ref } from 'vue'
  import { ArticleData } from '@/utils/type'
  import { useRouter } from 'vue-router'
  import axios from 'axios'

  // 分页器
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0,
  })

  // 文章数据
  const articleData: Ref<ArticleData[]> = ref([])

  // 数据初始化
  onMounted(() => {
    ArticlesAPI.listArticle(1).then(({ data }) => {
      /* 分页器初始化 */
      pagination.currentPage = data.current
      pagination.total = data.total
      pagination.pageSize = data.size
      console.log(data)

      /* 文章数据初始化 */
      articleData.value = data.records
    })
  })

  // 更新文章数据函数
  const updateArticleDate = (page: number) => {
    openLoading()
    window.scrollTo(0, 0)

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
    axios
      .all([
        ArticlesAPI.listArticleByCondition(params).then(({ data }) => {
          /* 文章数据初始化 */
          articleData.value = data.records

          /* 分页器初始化 */
          pagination.currentPage = data.current
          pagination.pageSize = data.size
          pagination.total = data.total
        }),
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('')
          }, 500)
        }),
      ])
      .then(() => {
        closeLoading()
      })
  }
  // 文章详情页跳转
  const router = useRouter()
  const routerToArticleDetail = (articleId: string | number) => {
    router.push({ path: `/article/${articleId}` })
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

  // 加载
  const loading = ref(false)
  const openLoading = () => {
    loading.value = true
  }
  const closeLoading = () => {
    loading.value = false
  }
  const svg = `
  <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop stop-color="#fff" stop-opacity="0" offset="0%"/>
            <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
            <stop stop-color="#fff" offset="100%"/>
        </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </path>
            <circle fill="#fff" cx="36" cy="18" r="1">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="0.9s"
                    repeatCount="indefinite" />
            </circle>
        </g>
    </g>
</svg>
`
</script>

<template>
  <section id="rv-article-group">
    <div
      class="loading"
      v-show="loading"
      v-loading.lock="loading"
      :element-loading-spinner="svg"
      element-loading-svg-view-box="0 0 38 38"
      element-loading-background="rgba(90, 90, 90, 0.9)"
    ></div>
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
        @current-change="updateArticleDate"
        hide-on-single-page
      />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
  #rv-article-group {
    position: relative;
    // 分页器
    .article-pagination {
      :deep(.el-pagination) {
        --el-pagination-font-size: var(--el-font-size-medium);
        --el-pagination-button-disabled-bg-color: transparent;
        --el-pagination-bg-color: transparent;
      }
    }

    .loading {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
  }
</style>
