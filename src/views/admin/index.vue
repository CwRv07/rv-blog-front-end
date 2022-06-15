<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-13 17:19:45
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-15 19:14:02
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="adminIndex">
  import MenuList from './menuList/menuList.vue'
  import AdminHeader from './adminHeader/adminHeader.vue'
</script>
<template>
  <el-container id="admin-index">
    <el-aside width="200px">
      <menu-list />
    </el-aside>
    <el-container>
      <el-header>
        <admin-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
  #admin-index {
    width: 100%;
    height: 100vh;
    .el-header {
      background-color: #fff;
      border-bottom: solid 1px var(--el-menu-border-color);
    }
  }
</style>

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
</style>
