<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-01 20:54:06
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 17:24:36
 * @Description: 评论item
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvCommentCard">
  import { Star, StarFilled } from '@element-plus/icons-vue'
  import { PropType } from 'vue'
  import { CommentData } from '@/utils/type'

  /* 评论数据 */
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
  // 点赞
  const isStar = ref(false)
  const clickStar = () => {
    isStar.value = !isStar.value
  }

  /* 获取回复数据 */
  const emits = defineEmits(['getReplyInfo'])
  const getReplyInfo = (data?: CommentData) => {
    emits('getReplyInfo', data || toRaw(props.commentData))
  }

  const comment = ref(props.commentData)
</script>

<template>
  <section class="rv-comment-card">
    <aside class="head hidden-xs-only">
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
          <div class="nickname">{{ comment?.author.nickname }}</div>
          <div class="time" v-moment-format="comment?.createDate"></div>
          <div class="reply" @click="getReplyInfo()">回复</div>
          <div class="like">
            <el-button
              :icon="isStar ? StarFilled : Star"
              size="small"
              text
              @click="clickStar"
              round
            >
              {{ (comment?.like || 0) + +isStar }}
            </el-button>
          </div>
        </div>
      </main>
      <footer class="comment-sub-list" v-if="props.isFather && comment?.list">
        <rv-comment-card
          v-for="(p, index) in comment.list"
          :key="index"
          :comment-data="(p as CommentData)"
          @get-reply-info="getReplyInfo"
        />
      </footer>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
  .rv-comment-card {
    display: flex;
    padding: 20px 0;
    border-bottom: 2px dashed var(--el-border-color);
    &:last-child {
      border-bottom: 0;
    }
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
          display: inline-block;
          position: relative;
          padding: 15px;
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

            @media screen and (max-width: 567px) {
              display: none;
            }
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

          .reply {
            margin-left: 10px;
            color: var(--el-text-color-disabled);
            cursor: pointer;

            &:hover {
              color: var(--el-text-color-secondary);
            }
          }

          .like {
            .el-button {
              color: var(--el-color-warning);
            }
          }
        }
      }
      // 评论回复
      .comment-sub-list {
        margin-top: 20px;
      }
    }
  }

  .comment-sub-list {
    .rv-comment-card {
      padding: 10px 0;
      border-bottom: 0;
    }
  }
</style>
