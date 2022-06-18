<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 11:35:00
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-18 16:38:30
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->

<script setup lang="ts" name="adminUser">
  import { UserAPI } from '@/api'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import type { FormRules } from 'element-plus'
  import RegularUtils from '@/utils/regularUtils'

  /* 用户分页查询函数封装 */
  const PageUserByCondition = (page: number) => {
    pagination.currentPage = page

    UserAPI.listUserByCondition({
      page: pagination.currentPage,
      pageSize: pagination.pageSize,
      id: select.id,
      nickname: select.nickname,
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
  interface UserProps {
    id: string | number
    nickname: string
    email: string
    website: string
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
      prop: 'nickname',
      label: '昵称',
      width: 100,
      overflow: true,
    },
    {
      prop: 'email',
      label: '邮箱',
      width: 200,
      overflow: true,
    },
    {
      prop: 'website',
      label: '站点',
      width: 200,
      overflow: true,
    },
  ])
  /* 表数据 */
  const tableData: UserProps[] = reactive([])
  /* 初始化表数据与分页器数据 */
  onMounted(() => {
    PageUserByCondition(1)

    /* 修复初次编辑不检测BUG */
    showDialog.value = false
  })

  /* 编辑表数据 */
  // dialog控制器
  const showDialog = ref(true)
  // 缓存数据
  const cacheEditData: { index: number } & UserProps = {
    index: -1,
    id: '',
    nickname: '',
    email: '',
    website: '',
  }
  // 编辑数据
  const editData: UserProps = reactive({
    id: '',
    nickname: '',
    email: '',
    website: '',
  })
  // 编辑规则检测
  const emailRules = (rule: any, value: any, callback: any) => {
    let email: string = value.toString()
    /* 邮箱不可为空 */
    if (email == null || email.trim().length === 0) {
      callback(new Error('邮箱不可为空'))
    }
    /* 邮箱格式错误 */
    if (!RegularUtils.emailRegularUtils(email)) {
      callback(new Error('邮箱格式错误'))
    }
    callback()
  }
  const websiteRules = (rule: any, value: any, callback: any) => {
    let website: string = value.toString()
    /* 站点可为空 */
    if (website == null || website.trim().length === 0) {
      callback()
    }
    /* 站点格式错误 */
    if (!RegularUtils.websiteRegularUtils(website)) {
      callback(new Error('站点格式错误'))
    }
    callback()
  }
  const rules = reactive<FormRules>({
    id: [
      {
        required: true,
        message: 'ID不可为空',
        trigger: 'change',
      },
    ],
    nickname: [
      {
        required: true,
        message: '昵称不可为空',
        trigger: 'change',
      },
    ],
    email: [
      {
        required: true,
        message: '邮箱不可为空',
        trigger: 'change',
      },
      { validator: emailRules, trigger: 'change' },
    ],
    website: [{ validator: websiteRules, trigger: 'change' }],
  })
  // 展示编辑数据
  const editItem = (index: number, detail: UserProps) => {
    cacheEditData.index = index
    editData.id = cacheEditData.id = detail.id
    editData.nickname = cacheEditData.nickname = detail.nickname
    editData.email = cacheEditData.email = detail.email
    editData.website = cacheEditData.website = detail.website

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
        UserAPI.insertUser(editData)
          .then(() => {
            ElMessage({ type: 'success', message: '修改成功' })
            // 修改当前数据
            tableData[cacheEditData.index].id = editData.id
            tableData[cacheEditData.index].nickname = editData.nickname
            tableData[cacheEditData.index].email = editData.email
            tableData[cacheEditData.index].website = editData.website
          })
          .catch((error) => {
            ElMessage({ type: 'error', message: error.msg })
          })
      })
      .catch(() => {
        return
      })
  }
  // 重置编辑数据
  const resetItem = () => {
    editData.id = cacheEditData.id
    editData.nickname = cacheEditData.nickname
    editData.email = cacheEditData.email
    editData.website = cacheEditData.website
  }
  // 删除编辑数据
  const deleteItem = (index: number, detail: UserProps) => {
    console.log(index)

    ElMessageBox.confirm('请再次确认是否删除当前数据', '警告', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      UserAPI.deleteUser(detail.id)
        .then(() => {
          ElMessage({ type: 'success', message: '删除成功' })
          tableData.splice(index, 1)
        })
        .catch((error) => {
          ElMessage({ type: 'error', message: error.msg })
        })
    })
  }
  // 新增编辑数据
  const insertItem = () => {
    cacheEditData.index = -1
    editData.id = cacheEditData.id = ''
    editData.nickname = cacheEditData.nickname = ''
    editData.email = cacheEditData.email = ''
    editData.website = cacheEditData.website = ''

    showDialog.value = true
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
    PageUserByCondition(val)
  }
  /* /分页器数据 */

  /* 筛选器数据 */
  const select = reactive({
    id: '',
    nickname: '',
  })
  watch(select, () => {
    PageUserByCondition(pagination.currentPage)
  })
  /* /筛选器数据 */
</script>

<template>
  <main id="admin-user">
    <header class="select row">
      <el-input
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
      />
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

    <el-dialog v-model="showDialog" title="游客用户数据" draggable>
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
    </el-dialog>
  </main>
</template>

<style lang="scss" scoped>
  #admin-user {
    .select {
      .el-input {
        padding: 0 10px;
        padding-bottom: 10px;
      }
    }
  }
</style>
