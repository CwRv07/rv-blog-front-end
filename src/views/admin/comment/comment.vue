<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-29 16:20:56
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-30 09:08:49
 * @Description: 评论管理界面
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="adminComment">
  import { Select, CloseBold } from '@element-plus/icons-vue'
  import { CommentAPI } from '@/api'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { MomentUtils } from '@/utils/momentFormat'

  /* 评论分页条件查询封装函数 */
  const PageComment = (page: number) => {
    switch (statusSelect.value) {
      case '已审核':
        PageCommentByStatus(page, 1)
        break
      case '未审核':
        PageCommentByStatus(page, 0)
        break
      case '全部':
        CommentAPI.listComment({ page })
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
  }
  const PageCommentByStatus = (page: number, status: number) => {
    CommentAPI.listCommentByStatus({ page, status })
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
  interface CommentProps {
    id: string | number
    content: string
    createDate: number
    articleId: string | number
    authorId: string | number
    parentId: string | number
    toUid: string | number
    ancestorId: string | number
    praise: number
    status: 1 | 0
  }

  /* 表字段数据 */
  const tableProps = reactive([
    {
      prop: 'id',
      label: 'ID',
      width: 80,
      fixed: true,
      overflow: true,
    },
    {
      prop: 'content',
      label: '内容',
      width: 100,
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
      prop: 'praise',
      label: '点赞数',
      width: 80,
    },
    {
      prop: 'status',
      label: '审核',
      width: 80,
      formatter: (row: any, column: any, cellValue: any) => {
        return cellValue === 1 ? '已审核' : '未审核'
      },
    },
  ])

  /* 表单数据 */
  const tableData: CommentProps[] = reactive([])
  // 表单数据初始化
  onMounted(() => {
    PageComment(1)
  })
  // 删除评论
  const deleteItem = (index: number, detail: CommentProps) => {
    console.log(index)

    ElMessageBox.confirm('请再次确认是否删除当前数据', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      CommentAPI.deleteComment(detail.id)
        .then(() => {
          ElMessage({ type: 'success', message: '删除成功' })
          tableData.splice(index, 1)
        })
        .catch((error) => {
          ElMessage({ type: 'error', message: error.msg })
        })
    })
  }
  // 编辑评论
  const editItem = (index: number, detail: CommentProps) => {
    cacheEditData.index = index
    editData.id = cacheEditData.id = detail.id
    editData.content = cacheEditData.content = detail.content
    editData.praise = cacheEditData.praise = detail.praise
    editData.status = cacheEditData.status = detail.status

    showDialog.value = true
  }
  /* /表单数据 */

  /* 状态筛选 */
  const statusSelect = ref('全部')
  watch(statusSelect, () => {
    PageComment(1)
  })
  /* /状态筛选 */

  /* 分页器数据 */
  const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0,
  })
  // 分页操作
  const changePage = (val: number) => {
    PageComment(val)
  }
  /* /分页器数据 */

  /* 编辑器 */
  const showDialog = ref(false)
  const cacheEditData: { index: number } & CommentProps = {
    index: -1,
    id: '',
    ancestorId: '',
    articleId: '',
    authorId: '',
    content: '',
    createDate: 0,
    parentId: '',
    praise: 0,
    status: 0,
    toUid: '',
  }
  const editData: CommentProps = reactive({
    id: '',
    ancestorId: '',
    articleId: '',
    authorId: '',
    content: '',
    createDate: 0,
    parentId: '',
    praise: 0,
    status: 0,
    toUid: '',
  })
  // 保存数据
  const saveItem = () => {
    ElMessageBox.confirm('请再次确认当前操作', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      CommentAPI.updateComment({
        id: editData.id,
        content: editData.content,
        praise: editData.praise,
        status: editData.status,
      })
        .then(() => {
          ElMessage({ type: 'success', message: '修改成功' })
          // 修改当前数据
          tableData[cacheEditData.index].id = editData.id
          tableData[cacheEditData.index].content = editData.content
          tableData[cacheEditData.index].praise = editData.praise
          tableData[cacheEditData.index].status = editData.status
        })
        .catch((error) => {
          ElMessage({ type: 'error', message: error.msg })
        })
    })
  }
  // 重置数据
  const resetItem = () => {
    editData.id = cacheEditData.id
    editData.content = cacheEditData.content
    editData.createDate = cacheEditData.createDate
    editData.praise = cacheEditData.praise
    editData.status = cacheEditData.status
  }
</script>

<template>
  <main id="admin-comment">
    <header class="select">
      <el-radio-group v-model="statusSelect" size="large">
        <el-radio-button label="全部" />
        <el-radio-button label="已审核" />
        <el-radio-button label="未审核" />
      </el-radio-group>
    </header>
    <!-- 表格 -->
    <rv-table-group
      :table-props="tableProps"
      :table-data="tableData"
      :page-data="pagination"
      @edit-item="editItem"
      @delete-item="deleteItem"
      @change-page="changePage"
    />

    <!-- 编辑框 -->
    <el-dialog v-model="showDialog" title="评论数据" draggable>
      <el-form
        label-width="80px"
        :model="editData"
        style="width: 100%; max-width: 500px"
        label-position="right"
        status-icon
      >
        <el-form-item label="ID" prop="id">
          <el-input v-model="editData.id" />
        </el-form-item>
        <el-form-item label="点赞数" prop="praise">
          <el-input v-model="editData.praise" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <!-- <el-input v-model="editData.status" /> -->
          <el-radio-group v-model="editData.status">
            <el-radio :label="1">
              <el-icon><Select /></el-icon>
            </el-radio>
            <el-radio :label="0">
              <el-icon><CloseBold /></el-icon>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input
            v-model="editData.content"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
          />
        </el-form-item>
        <el-form-item prop="controller">
          <el-button type="primary" @click="saveItem">修改</el-button>
          <el-button type="primary" @click="resetItem">重置</el-button>
          <el-button type="primary" @click="showDialog = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </main>
</template>

<style lang="scss" scoped></style>
