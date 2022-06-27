<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-01 20:50:00
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 22:31:17
 * @Description: 卡片list
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvCommentGroup">
  import { PropType } from 'vue'
  import { CommentData } from '@/utils/type'
  import CommentFormat from './tools/commentFormat'

  /* 评论数据 */
  const props = defineProps({
    commentGroup: {
      type: Array as PropType<CommentData[]>,
    },
  })
  // 评论数据处理
  const commentData = reactive(
    CommentFormat(props.commentGroup as CommentData[])
  )

  /* 获取回复信息 */
  const emits = defineEmits(['getReplyInfo'])
  const getReplyInfo = (replayInfo: CommentData) => {
    emits('getReplyInfo', replayInfo)
  }
  console.log(props.commentGroup)
</script>

<template>
  <div v-if="props.commentGroup">
    <rv-comment-card
      v-for="(p, index) in commentData"
      :key="index"
      :is-father="true"
      :comment-data="p"
      @get-reply-info="getReplyInfo"
    />
  </div>
</template>

<style lang="scss" scoped></style>
