<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-29 10:03:59
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 15:19:38
 * @Description: 支付页
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="pay">
  import { ElMessage } from 'element-plus'
  import { useRoute } from 'vue-router'
  import { AlipayAPI } from '@/api'

  const payBox = ref()
  const html = ref('')

  onMounted(async () => {
    const route = useRoute()

    const status = route.query.status as string

    if ('paying' === status) {
      const subject = route.query.subject as string
      const total = route.query.total as string

      console.log(subject, total)

      AlipayAPI.page({ subject, total })
        .then(async ({ data }) => {
          html.value = data

          await nextTick()
          console.log(payBox.value.children[0].submit())
        })
        .catch((err) => {
          console.log(err)
          return ElMessage({ type: 'error', message: err.msg })
        })
    }
  })
</script>

<template>
  <main id="pay">
    <!-- 跳转支付页面 -->
    <template v-if="'paying' === $route.query.status">
      <div ref="payBox" class="pay-box" v-html="html"></div>
    </template>
    <!-- 支付成功 -->
    <template v-else-if="'success' === $route.query.status">
      <el-result
        icon="success"
        title="支付成功"
        sub-title="感谢您的支持，我会继续努力的"
      />
    </template>
    <!-- 支付异常 -->
    <template v-else>
      <el-result
        icon="error"
        title="支付异常"
        sub-title="支付环境发生异常，请重新支付"
      />
    </template>
  </main>
</template>

<style lang="scss" scoped>
  #pay {
    min-height: calc(100vh - 60px);
  }
</style>
