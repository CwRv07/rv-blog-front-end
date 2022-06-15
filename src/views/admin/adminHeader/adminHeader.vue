<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-14 15:15:50
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-14 15:24:09
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->

<script setup lang="ts" name="admin-header">
  import { ArrowRight } from '@element-plus/icons-vue'
</script>

<template>
  <div id="admin-header">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
  #admin-header {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
