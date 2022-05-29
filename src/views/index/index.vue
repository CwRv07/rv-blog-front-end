<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 16:07:17
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-29 16:03:49
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="index"></script>

<template>
  <main id="index" class="row">
    <aside class="article-body col-8 col-md-more-9 col-md-less-12">
      <rv-article-group />
    </aside>
    <aside class="article-extra col-4 col-md-more-3 hidden-xs-only"></aside>
  </main>
</template>

<style lang="scss" scoped>
  #index {
    @include body-padding($rv-body-padding-list);
    height: 1000px;
    .article-body {
    }
    .article-extra {
      background-color: red;
    }
  }
</style>
