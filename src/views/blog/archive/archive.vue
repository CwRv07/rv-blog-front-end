<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 18:50:02
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-05 19:21:17
 * @Description: 归档
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="archive">
  import RvTimeLine from './components/RvTimeLine/RvTimeLine.vue'
</script>

<template>
  <main id="archive">
    <rv-time-line />
  </main>
</template>

<style lang="scss" scoped>
  #archive {
    @include body-padding($rv-body-padding-list);
    margin: 0 20px;
    margin-top: 30px;
  }
</style>
