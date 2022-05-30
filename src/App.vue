<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-30 23:18:46
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="app">
  import { ArticlesAPI } from '@/api'
  console.log(import.meta.env.VITE_BASE_URL)
  const testClick = () => {
    ArticlesAPI.listArticle()
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
</script>

<template>
  <rv-header />
  <button @click="testClick">查看文章列表</button>
  <router-view />
  <rv-footer />
</template>

<style lang="scss"></style>
