<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-01 20:54:06
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-02 10:23:48
 * @Description: 评论item
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvCommentCard">
  import { PropType } from 'vue'

  export interface CommentData {
    content: string
    author: string
    time: number
    list?: CommentData
  }

  const props = defineProps({
    isFather: {
      type: Boolean,
      default: false,
    },
    commentData: {
      type: Object as PropType<CommentData>,
      require: true,
    },
  })

  const comment = ref(props.commentData)
</script>

<template>
  <section class="rv-comment-card">
    <aside class="head">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </aside>
    <aside class="content">
      <main class="content-main">
        <div class="content-text">
          {{ comment?.content }}
        </div>
        <div class="content-info">
          <div class="nickname">{{ comment?.author }}</div>
          <div class="time">{{ comment?.time }}</div>
        </div>
      </main>
      <footer class="comment-sub-list" v-if="props.isFather && comment?.list">
        <rv-comment-card
          v-for="(p, index) in comment.list"
          :key="index"
          :comment-data="(p as CommentData)"
        />
      </footer>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
  .rv-comment-card {
    display: flex;
    margin-bottom: 30px;
    // 头像
    .head {
      margin-top: 2px;
      .el-avatar {
        box-shadow: var(--el-box-shadow-lighter);
      }
    }
    // 内容
    .content {
      margin-left: 15px;
      //  当前评论
      .content-main {
        // 评论内容
        .content-text {
          position: relative;
          padding: 20px;
          box-shadow: var(--el-box-shadow-lighter);
          background-color: var(--el-color-white);
          border-radius: 10px;

          &::before {
            display: block;
            content: '';
            position: absolute;
            right: 100%;
            top: 18px;
            width: 0;
            height: 0;
            border-radius: 2px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent;
            margin-bottom: -14px;
            border-right-width: 10px;
            border-right-color: currentColor;
            color: var(--el-color-white);
          }
        }
        // 评论信息
        .content-info {
          margin-top: 5px;
          display: flex;
          align-items: center;
          // 昵称
          .nickname {
            padding: 3px 5px;
            border-radius: 5px;
            background-color: var(--el-color-white);
            box-shadow: var(--el-box-shadow-lighter);
            margin-right: 5px;
            cursor: pointer;
          }
          .time {
            font-size: var(--el-font-size-small);
            color: var(--el-text-color-secondary);
          }
        }
      }
      // 评论回复
      .comment-sub-list {
        margin-top: 30px;
      }
    }
  }
</style>
