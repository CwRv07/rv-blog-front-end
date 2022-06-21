<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-18 09:55:28
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 19:07:09
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="adminArticleEdit">
  import { ArticlesAPI, CategoryAPI, TagAPI } from '@/api'
  import { ElMessage } from 'element-plus'
  import { ArticleData, TagData, CategoryData } from '@/utils/type'
  import { useRoute, useRouter } from 'vue-router'
  const route = useRoute()
  const router = useRouter()
  /* 文章ID参数 */
  const props = defineProps<{
    articleId?: string
    articleProps?: ArticleData
  }>()

  /* 文章数据容器 */
  const articleData = reactive<ArticleData>({
    id: props.articleId || (route.params.articleId as string) || '',
    avatar: '',
    title: '',
    summary: '',
    commentCounts: 0,
    viewCounts: 0,
    weight: 0,
    createDate: '',
    content: '',
    author: { id: '', nickname: '', avatar: '' },
    category: { id: '', avatar: '', categoryName: '', description: '' },
    tagList: [],
  })
  const tagList = ref<string[]>([])
  /* 标签数据容器 */
  const tagData = reactive<TagData[]>([])
  /* 类别数据容器 */
  const categoryData = reactive<CategoryData[]>([])

  /* 初始化数据 */
  const initData = () => {
    if (articleData.id != '' && articleData.id != null) {
      ArticlesAPI.articleDetail(articleData.id)
        .then(({ data }) => {
          Object.keys(articleData).forEach((val) => {
            ;(articleData as any)[val] = data[val]
            // 提取标签ID
            tagList.value.length = 0
            articleData.tagList.forEach((tagItem) => {
              tagList.value.push(tagItem.id.toString())
            })
          })
        })
        .catch((error) => {
          console.log('articleDetail')

          ElMessage({ type: 'error', message: error.msg })
        })
    } else {
      articleData.id = ''
      articleData.avatar = ''
      articleData.title = ''
      articleData.summary = ''
      articleData.category = {
        id: '',
        avatar: '',
        categoryName: '',
        description: '',
      }
      tagList.value.length = 0
    }

    // 初始化类别数据
    CategoryAPI.listCategory()
      .then(({ data }) => {
        categoryData.length = 0
        categoryData.push(...data)
      })
      .catch((error) => {
        ElMessage({ type: 'error', message: error.msg })
      })

    // 初始化标签数据
    TagAPI.listTag()
      .then(({ data }) => {
        tagData.length = 0
        tagData.push(...data)
      })
      .catch((error) => {
        ElMessage({ type: 'error', message: error.msg })
      })
  }
  onMounted(() => initData())
  watch(
    () => router.currentRoute.value.path,
    (toPath) => {
      //要执行的方法
      if (toPath === '/admin/articleEdit') {
        articleData.id = ''
        articleData.avatar = ''
        articleData.title = ''
        articleData.summary = ''
        articleData.content = ''
        articleData.category = {
          id: '',
          avatar: '',
          categoryName: '',
          description: '',
        }
        tagList.value.length = 0
      }
    },
    { immediate: true, deep: true }
  )
  /* 重置文章 */
  const resetArticle = () => {
    if (articleData.id != '' && articleData.id != null) {
      ArticlesAPI.articleDetail(articleData.id)
        .then(({ data }) => {
          Object.keys(articleData).forEach((val) => {
            ;(articleData as any)[val] = data[val]
            // 提取标签ID
            tagList.value.length = 0
            articleData.tagList.forEach((tagItem) => {
              tagList.value.push(tagItem.id.toString())
            })
          })
          ElMessage({ type: 'success', message: '文章重置成功' })
        })
        .catch((error) => {
          ElMessage({ type: 'error', message: error.msg })
        })
    } else {
      articleData.id = ''
      articleData.avatar = ''
      articleData.title = ''
      articleData.summary = ''
      articleData.category = {
        id: '',
        avatar: '',
        categoryName: '',
        description: '',
      }
      tagList.value.length = 0
      ElMessage({ type: 'success', message: '文章重置成功' })
    }
  }
  /* 保存文章 */
  const saveArticle = () => {
    if (articleData.id != '' && articleData.id != null) {
      ArticlesAPI.updateArticle({
        id: articleData.id,
        title: articleData.title.trim(),
        content: articleData.content.trim(),
        summary: articleData.summary.trim(),
        categoryId: articleData.category.id,
        tags: tagList.value,
      })
        .then(({ data }) => {
          articleData.id = data.articleId
          ElMessage({ type: 'success', message: '文章修改成功' })
        })
        .catch((error) => {
          console.log(error)
          ElMessage({ type: 'error', message: error.msg })
        })
    } else {
      ArticlesAPI.insertArticle({
        title: articleData.title.trim(),
        content: articleData.content.trim(),
        summary: articleData.summary.trim(),
        categoryId: articleData.category.id,
        tags: tagList.value,
      })
        .then(({ data }) => {
          articleData.id = data.articleId
          ElMessage({ type: 'success', message: '文章上传成功' })
        })
        .catch((error) => {
          ElMessage({ type: 'error', message: error.msg })
        })
    }
  }
</script>

<template>
  <main id="admin-article-edit">
    <el-divider content-position="left">文章基础信息</el-divider>
    <header class="article-info">
      <el-form :model="articleData" class="demo-form-inline" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="articleData.title" placeholder="标题" />
        </el-form-item>
        <el-form-item label="概述" prop="summary">
          <el-input
            v-model="articleData.summary"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10 }"
            placeholder="文章概述"
          />
        </el-form-item>
        <el-form-item label="类别" prop="category">
          <el-select v-model="articleData.category.id" placeholder="类别">
            <el-option
              v-for="item in categoryData"
              :key="item.id"
              :label="item.categoryName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="标签" prop="tagList">
          <el-select
            v-model="tagList"
            multiple
            filterable
            collapse-tags
            placeholder="标签"
            collapse-tags-tooltip
          >
            <el-option
              v-for="item in tagData"
              :key="item.id.toString()"
              :label="item.tagName"
              :value="item.id.toString()"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="resetArticle">重置</el-button>
          <el-button type="primary" @click="saveArticle">保存</el-button>
        </el-form-item>
      </el-form>
    </header>
    <el-divider content-position="left">文章内容信息</el-divider>
    <rv-editor
      :value="articleData.content"
      :preview-only="false"
      @update:value="
        (val:string) => {
          articleData.content = val
        }
      "
    />
  </main>
</template>

<style lang="scss" scoped>
  #admin-article-edit {
    // 分割线
    .el-divider {
      --el-bg-color: #f4f4f4;
      border-color: var(--el-color-primary);
      :deep(.el-divider__text) {
        font-size: var(--el-font-size-large);
        line-height: 1.5;
      }
    }
  }
</style>
