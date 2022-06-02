<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-01 20:50:00
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-02 10:27:30
 * @Description: 卡片list
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvCommentGroup">
  import { PropType } from 'vue'
  import { CommentData } from './components/RvCommentCard.vue'
  const props = defineProps({
    commentGroup: {
      type: Array as PropType<CommentData[]>,
    },
  })
</script>

<template>
  <div v-if="props.commentGroup">
    <rv-comment-card
      v-for="(p, index) in props.commentGroup"
      :key="index"
      :is-father="true"
      :comment-data="p"
    />
  </div>
</template>

<style lang="scss" scoped></style>
