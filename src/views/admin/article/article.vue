<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-17 22:18:35
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-17 22:50:01
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="adminArticle">
  import { ArticlesAPI } from '@/api'
  import { ElMessage } from 'element-plus'

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
        console.log(data)
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
    authorId: number | string
    bodyId: number | string
    categoryId: number | string
  }

  /* 表字段数据 */
  const tableProps = reactive([
    {
      prop: 'id',
      label: 'ID',
      width: 100,
      fixed: true,
      overflow: true,
    },
    {
      prop: 'title',
      label: '标题',
      width: 100,
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
      width: 100,
      overflow: true,
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
      prop: 'authorId',
      label: '作者ID',
      width: 100,
      overflow: true,
    },
    {
      prop: 'bodyId',
      label: '内容ID',
      width: 100,
      overflow: true,
    },
    {
      prop: 'categoryId',
      label: '类别ID',
      width: 100,
      overflow: true,
    },
  ])
  /* 表数据 */
  const tableData: ArticleProps[] = reactive([])
  /* 初始化表数据与分页器数据 */
  onMounted(() => {
    PageArticleByCondition(1)

    /* 修复初次编辑不检测BUG */
    showDialog.value = false
  })

  /* 编辑表数据 */
  // dialog控制器
  const showDialog = ref(true)
  // 缓存数据
  const cacheEditData: { index: number } & ArticleProps = {
    index: -1,
    id: '',
    title: '',
    summary: '',
    createDate: 0,
    viewCounts: 0,
    commentCounts: 0,
    weight: 0,
    authorId: '',
    bodyId: '',
    categoryId: '',
  }
  // 编辑数据
  const editData: ArticleProps = reactive({
    id: '',
    title: '',
    summary: '',
    createDate: 0,
    viewCounts: 0,
    commentCounts: 0,
    weight: 0,
    authorId: '',
    bodyId: '',
    categoryId: '',
  })
  // 展示编辑数据
  const editItem = (index: number, detail: ArticleProps) => {
    cacheEditData.index = index
    editData.id = cacheEditData.id = detail.id
    editData.title = cacheEditData.title = detail.title
    editData.summary = cacheEditData.summary = detail.summary
    editData.createDate = cacheEditData.createDate = detail.createDate
    editData.viewCounts = cacheEditData.viewCounts = detail.viewCounts
    editData.commentCounts = cacheEditData.commentCounts = detail.commentCounts
    editData.weight = cacheEditData.weight = detail.weight
    editData.authorId = cacheEditData.authorId = detail.authorId
    editData.bodyId = cacheEditData.bodyId = detail.bodyId
    editData.categoryId = cacheEditData.categoryId = detail.categoryId

    showDialog.value = true
  }
  // 保存编辑数据
  const saveItem = () => {
    ElMessageBox.confirm('请再次确认当前操作', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        return
      })
      .catch(() => {
        return
      })
  }
  // 重置编辑数据
  const resetItem = () => {
    editData.id = cacheEditData.id
    editData.title = cacheEditData.title
    editData.summary = cacheEditData.summary
    editData.createDate = cacheEditData.createDate
    editData.viewCounts = cacheEditData.viewCounts
    editData.commentCounts = cacheEditData.commentCounts
    editData.weight = cacheEditData.weight
    editData.authorId = cacheEditData.authorId
    editData.bodyId = cacheEditData.bodyId
    editData.categoryId = cacheEditData.categoryId
  }
  // 删除编辑数据
  const deleteItem = (index: number) => {
    console.log(index)

    ElMessageBox.confirm('请再次确认是否删除当前数据', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      return
    })
  }
  // 新增编辑数据
  const insertItem = () => {
    return
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
    upperLimitTime: 0,
    lowerLimitTime: 0,
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

    <!-- <el-dialog v-model="showDialog" title="游客用户数据" draggable>
      <el-form
        label-width="80px"
        :model="editData"
        :rules="rules"
        style="width: 100%; max-width: 500px"
        label-position="right"
        status-icon
      >
        <el-form-item label="ID" prop="id">
          <el-input v-model="editData.id" />
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="editData.nickname" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editData.email" />
        </el-form-item>
        <el-form-item label="站点" prop="website">
          <el-input v-model="editData.website" />
        </el-form-item>
        <el-form-item prop="controller">
          <el-button type="primary" @click="saveItem">修改</el-button>
          <el-button type="primary" @click="resetItem">重置</el-button>
          <el-button type="primary" @click="showDialog = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog> -->
  </main>
</template>

<style lang="scss" scoped></style>
