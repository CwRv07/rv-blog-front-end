<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 11:23:45
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="app"></script>

<template>
  <!-- <el-button type="primary" size="default" @click="toggleTheme()">
    {{ isDark }}
  </el-button> -->
  <!-- <el-button type="primary">
    <router-link
      :to="{ name: 'pay', query: { subject: '打赏', total: '1' } }"
      target="_blank"
    >
      打赏
    </router-link>
  </el-button> -->

  <router-view />
  <rv-full-screen-loading />
</template>

<style lang="scss">
  //icon图标加粗
  .el-icon {
    stroke: currentColor;
    stroke-width: 25px;
    transform: translateY(1px);
  }

  // 全屏加载动画
  .el-loading-mask.is-fullscreen {
    backdrop-filter: blur(5px);
  }
</style>
