<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 16:28:30
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 10:59:40
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvAsideItem">
  /* icon图标 */
  import {
    Apple,
    CoffeeCup,
    Coffee,
    ColdDrink,
    Cherry,
    Chicken,
    Food,
    Grape,
    Watermelon,
    Orange,
    Pear,
  } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'
  const iconList = [
    Apple,
    CoffeeCup,
    Coffee,
    ColdDrink,
    Cherry,
    Chicken,
    Food,
    Grape,
    Watermelon,
    Orange,
    Pear,
  ]
  const getIcon = (index: number) => {
    if (index >= iconList.length) {
      return iconList[Math.floor(Math.random() * iconList.length)]
    } else {
      return iconList[index]
    }
  }

  /* 列表信息 */
  defineProps<{
    title: string
    index: number
  }>()

  const router = useRouter()
  const routerToCategory = () => {
    router.push({ path: `/category` })
  }
</script>

<template>
  <div class="rv-aside-item">
    <el-icon>
      <component :is="getIcon(index)" />
    </el-icon>
    <span class="item-title" @click="routerToCategory">{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .rv-aside-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    transition: all 0.3s;
    font-size: var(--el-font-size-large);

    .item-title {
      @extend .single-line;
      margin-left: 5px;
      font-size: var(--el-font-size-base);
    }
  }
</style>
