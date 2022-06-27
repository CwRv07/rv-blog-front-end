<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-17 22:49:53
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="app">
  // import { useDark, useToggle } from '@vueuse/core'
  // const isDark = useDark()
  // const toggleTheme = useToggle(isDark)
</script>

<template>
  <!-- <el-button type="primary" size="default" @click="toggleTheme()">
    {{ isDark }}
  </el-button> -->

  <router-view />
  <rv-full-screen-loading />
</template>

<style lang="scss">
  //icon图标加粗
  .el-icon {
    stroke: currentColor;
    stroke-width: 50px;
    transform: translateY(1px);
  }

  // 全屏加载动画
  .el-loading-mask.is-fullscreen {
    backdrop-filter: blur(5px);
  }
</style>
