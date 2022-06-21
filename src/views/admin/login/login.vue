<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-14 15:28:35
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 18:18:14
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="adminLogin">
  import type { FormInstance } from 'element-plus'
  import { ElMessage } from 'element-plus'
  import { UserFilled, Unlock } from '@element-plus/icons-vue'
  import { LoginAPI } from '@/api'
  import { useAdminStore } from '@/store/admin'
  import { useRouter } from 'vue-router'
  import router from '@/router'
  import adminRoutes from '@/router/adminRouter'

  /* 表格元素 */
  const formEl = ref<FormInstance>()
  /* 表格数据 */
  const form = reactive({
    account: '',
    password: '',
  })

  /* 校验规则 */
  const rules = reactive({
    account: [
      {
        required: true,
        message: '账号不可为空',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '密码不可为空',
        trigger: 'blur',
      },
    ],
  })

  /* 登录 */
  const adminStore = useAdminStore()
  const routerInstance = useRouter()
  const login = () => {
    LoginAPI({
      account: form.account.trim(),
      password: form.password.trim(),
    })
      .then(({ data }) => {
        adminStore.login(form.account, data)
        /* 动态路由 */
        adminRoutes.forEach((item) => {
          router.addRoute('adminIndex', item)
        })
        /* 跳转路由 */
        routerInstance.replace({ path: '/admin' })
      })
      .catch((error) => {
        ElMessage({ type: 'error', message: error.msg })
      })
  }
</script>

<template>
  <div id="admin-login">
    <section class="login-box">
      <h1 class="title">系统登录</h1>
      <el-form
        ref="formEl"
        :model="form"
        status-icon
        :rules="rules"
        class="form"
        size="large"
      >
        <el-form-item prop="account">
          <el-input
            v-model="form.account"
            type="text"
            autocomplete="off"
            :prefix-icon="UserFilled"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
            :prefix-icon="Unlock"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  #admin-login {
    color: var(--el-color-white);
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d3a4b;
    user-select: none;
    .login-box {
      width: 100%;
      max-width: 500px;
      padding: 20px;
      margin-top: -50px;

      .title {
        margin-bottom: 30px;
        text-align: center;
        font-size: 30px;
      }

      .form {
        .el-form-item {
          margin-bottom: 25px;
        }
        :deep(.el-form-item__label) {
          font-size: var(--el-font-size-base);
          color: var(--el-color-white);
        }
        .el-input {
          --el-input-text-color: var(--el-color-white);
          --el-input-bg-color: #283443;
          --el-input-border-color: #3e4957;
        }

        .el-button {
          width: 100%;
        }
      }
    }
  }
</style>
<style>
  :root {
    /* 主题色 */
    --el-color-primary: #00b5ad;
    --el-color-primary-light-3: #4dcbc6;
    --el-color-primary-light-5: #80dad6;
    --el-color-primary-light-7: #b3e9e6;
    --el-color-primary-light-8: #ccf0ef;
    --el-color-primary-light-9: #e6f8f7;
    --el-color-primary-dark-2: #00918a;
    /* 字体 */
    --el-font-size-extra-large: 21px;
    --el-font-size-large: 19px;
    --el-font-size-medium: 17px;
    --el-font-size-base: 15px;
    --el-font-size-small: 14px;
    --el-font-size-extra-small: 13px;
  }
</style>
