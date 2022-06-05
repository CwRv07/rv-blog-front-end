<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 19:14:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-05 22:22:10
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvTimeLineItem">
  import { PropType } from 'vue'
  export interface TimeLineItemData {
    title: string
    summary: string
    sign: string
  }
  const props = defineProps({
    itemData: {
      type: Array as PropType<TimeLineItemData[]>,
      required: true,
    },
  })
</script>

<template>
  <ul class="rv-time-line-item">
    <li v-for="(p, index) in props.itemData" :key="index">
      <el-card shadow="hover">
        <template #default>
          <h2 class="item-title">{{ p.title }}</h2>
          <p class="item-summary">
            {{ p.summary }}
          </p>
          <p class="item-sign">{{ p.sign }}</p>
        </template>
      </el-card>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .rv-time-line-item {
    > li {
      margin-bottom: 5px;
    }
    line-height: 1.5;

    .item-title {
      @extend .single-line;
      font-size: var(--el-font-size-large);
    }

    .item-summary {
      @extend .two-line;
      color: var(--el-text-color-regular);
    }

    .item-sign {
      text-align: right;
      margin-top: 5px;
      font-size: var(--el-font-size-small);
      color: var(--el-text-color-disabled);
    }
  }
</style>
