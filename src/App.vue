<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 10:31:28
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="app">
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <rv-header />
    <router-view />
    <rv-footer />
  </el-config-provider>
  <el-backtop :right="40" :bottom="40" />
</template>

<style lang="scss">
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

  //icon图标加粗
  .el-icon {
    stroke: currentColor;
    stroke-width: 50px;
    transform: translateY(1px);
  }
</style>
