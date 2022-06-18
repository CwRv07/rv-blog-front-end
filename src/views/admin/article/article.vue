<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-17 22:18:35
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-18 17:24:59
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="adminArticle">
  import { ArticlesAPI } from '@/api'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { MomentUtils } from '@/utils/momentFormat'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  /* 用户分页查询函数封装 */
  const PageArticleByCondition = (page: number) => {
    pagination.currentPage = page

    ArticlesAPI.listArticleByCondition({
      page: pagination.currentPage,
      categoryId: select.categoryId,
      tagId: select.tagId,
      upperLimitTime: select.upperLimitTime,
      lowerLimitTime: select.lowerLimitTime,
      search: select.search,
    })
      .then(({ data }) => {
        tableData.length = 0
        tableData.push(...data.records)

        pagination.currentPage = data.current
        pagination.pageSize = data.size
        pagination.total = data.total
      })
      .catch((error) => {
        ElMessage({ type: 'error', message: error.msg })
      })
  }

  /* 用户字段约束 */
  interface ArticleProps {
    id: string | number
    title: string
    summary: string
    createDate: number
    viewCounts: number
    commentCounts: number
    weight: number
    author: { id: number; nickname: string; [key: string]: any }
    category: { id: number; categoryName: string; [key: string]: any }
  }

  /* 表字段数据 */
  const tableProps = reactive([
    {
      prop: 'id',
      label: 'ID',
      width: 150,
      fixed: true,
      overflow: true,
    },
    {
      prop: 'title',
      label: '标题',
      width: 200,
      overflow: true,
    },
    {
      prop: 'summary',
      label: '概述',
      width: 200,
      overflow: true,
    },
    {
      prop: 'createDate',
      label: '创建时间',
      width: 200,
      overflow: true,
      formatter: (row: any, column: any, cellValue: any) => {
        return MomentUtils.formate(cellValue as number | string)
      },
    },
    {
      prop: 'viewCounts',
      label: '观看量',
      width: 100,
      overflow: true,
    },
    {
      prop: 'commentCounts',
      label: '评论数',
      width: 100,
      overflow: true,
    },
    {
      prop: 'weight',
      label: '置顶',
      width: 80,
    },
    {
      prop: 'author',
      label: '作者',
      width: 100,
      overflow: true,
      formatter: (row: any, column: any, cellValue: any) => {
        return cellValue?.nickname
      },
    },
    {
      prop: 'category',
      label: '类别',
      width: 100,
      overflow: true,
      formatter: (row: any, column: any, cellValue: any) => {
        return cellValue?.categoryName
      },
    },
  ])
  /* 表数据 */
  const tableData: ArticleProps[] = reactive([])
  /* 初始化表数据与分页器数据 */
  onMounted(() => {
    PageArticleByCondition(1)
  })

  /* 编辑表数据 */
  // 展示编辑数据
  const editItem = (index: number, row: ArticleProps) => {
    router.push({ path: `/admin/articleEdit/${row.id}` })
  }
  // 删除编辑数据
  const deleteItem = (index: number, row: ArticleProps) => {
    ElMessageBox.confirm('请再次确认是否删除当前数据', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      ArticlesAPI.deleteArticle(row.id)
        .then(() => {
          ElMessage({ type: 'success', message: '文章删除成功' })
        })
        .catch((error) => {
          ElMessage({ type: 'error', message: error.msg })
        })
    })
  }
  // 新增编辑数据
  const insertItem = () => {
    router.push({ path: '/admin/articleEdit' })
  }
  /* /编辑表数据 */

  /* 分页器数据 */
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0,
  })
  // 分页操作
  const changePage = (val: number) => {
    PageArticleByCondition(val)
  }
  /* /分页器数据 */

  /* 筛选器数据 */
  const select = reactive({
    categoryId: '',
    tagId: '',
    upperLimitTime: undefined,
    lowerLimitTime: undefined,
    search: '',
  })
  watch(select, () => {
    PageArticleByCondition(pagination.currentPage)
  })
  /* /筛选器数据 */
</script>

<template>
  <main id="admin-article">
    <header class="select row">
      <!-- <el-input
        class="col-md-more-6 col-md-less-12"
        v-model="select.id"
        placeholder="ID模糊查询"
        clearable
      />
      <el-input
        class="col-md-more-6 col-md-less-12"
        v-model="select.nickname"
        placeholder="昵称模糊查询"
        clearable
      /> -->
    </header>
    <rv-table-group
      :table-props="tableProps"
      :table-data="tableData"
      :page-data="pagination"
      @edit-item="editItem"
      @delete-item="deleteItem"
      @insert-item="insertItem"
      @change-page="changePage"
    />
  </main>
</template>

<style lang="scss" scoped></style>
