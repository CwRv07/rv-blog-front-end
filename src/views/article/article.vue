<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-31 20:00:36
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-02 10:50:09
 * @Description: 文章详情页
 * @Email: Rv_Jiang@outlook.com
-->

<script setup lang="ts" name="article">
  import { Clock, View, ChatDotRound } from '@element-plus/icons-vue'

  // 评论
  const comment = reactive({
    nikename: '',
    email: '',
    website: '',
    content: '',
  })
</script>
<template>
  <main id="article">
    <div style="backdrop-filter: blur(10px)">
      <!-- 文章简介 -->
      <header class="article-header">
        <!-- 文章标题 -->
        <h1 class="article-title">标题内容</h1>
        <!-- 文章数据 -->
        <ul class="article-data">
          <li class="data-item">
            <el-icon><Clock /></el-icon>
            <span class="data-text">20年05月29日</span>
          </li>
          <li class="data-item">
            <el-icon><View /></el-icon>
            <span class="data-text">123</span>
          </li>
          <li class="data-item">
            <el-icon><ChatDotRound /></el-icon>
            <span class="data-text">321</span>
          </li>
        </ul>
        <!-- 文章标签 -->
        <ul class="article-tag">
          <li class="tag-item">#Spring</li>
          <li class="tag-item">#SpringBoot</li>
          <li class="tag-item">#Mybatis</li>
        </ul>
      </header>
      <main class="article-main">
        <rv-editor :value="'Hello World!'" />
      </main>
      <!-- 文章评论 -->
      <footer class="article-footer">
        <!-- 评论发送 -->
        <section class="article-comment-write">
          <header class="comment-info row">
            <h1 class="title col-12">发送评论</h1>
            <el-input
              class="col-lg-more-4 col-sm-more-6 col-sm-less-12"
              v-model="comment.nikename"
            >
              <template #prepend>昵称*</template>
            </el-input>
            <el-input
              class="col-lg-more-4 col-sm-more-6 col-sm-less-12"
              v-model="comment.email"
            >
              <template #prepend>邮箱*</template>
            </el-input>
            <el-input
              class="col-lg-more-4 col-lg-less-12"
              v-model="comment.website"
              placeholder="站点"
            >
              <template #prepend>http://</template>
            </el-input>
          </header>
          <main class="comment-body">
            <el-input
              v-model="comment.content"
              :autosize="{ minRows: 5, maxRows: 10 }"
              type="textarea"
              :show-word-limit="true"
              maxlength="200"
              placeholder="评论内容……"
            />
          </main>
          <footer class="comment-handle">
            <el-button type="primary" size="default" @click="undefined">
              评论
            </el-button>
          </footer>
        </section>
        <!-- 评论展示 -->
        <section class="article-comment-list">
          <h1 class="title">评论区</h1>
          <rv-comment-group />
        </section>
      </footer>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  #article {
    background-image: url(@/assets/img/img0.png);
    background-size: 100% auto;
    background-repeat: no-repeat;

    // 文章简介
    .article-header {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20vh 0;
      line-height: 1.3;

      color: var(--el-color-primary-light-9);
      /* 文章标题 */
      .article-title {
        font-size: 60px;
        font-weight: bold;
        margin: 10px;
      }
      /* 文章数据 */
      .article-data {
        display: flex;
        justify-content: center;
        align-items: center;

        .data-item {
          margin: 0 8px;

          :deep(.el-icon) {
            stroke: currentColor;
            stroke-width: 65px;
            transform: translateY(2px);
          }
        }
      }
      /* 文章标签 */
      .article-tag {
        display: flex;
        align-items: center;
        .tag-item {
          margin: 5px 8px;
          padding: 1px 3px;
          border-radius: 3px;
          color: var(--el-color-primary-light-3);
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: var(--el-color-primary-light-9);
          }
        }
      }
    }

    // 文章内容
    .article-main {
      @include body-padding($rv-body-padding-list);
      margin-bottom: 50px;
      #rv-editor {
        border-radius: 20px;
        box-shadow: var(--el-box-shadow-dark);
        overflow: hidden;
      }
    }

    // 文章评论
    .article-footer {
      @include body-margin($rv-body-margin-list);

      //评论发送
      .article-comment-write {
        padding: 20px;
        border-radius: 20px;
        box-shadow: var(--el-box-shadow-dark);
        overflow: hidden;
        background-color: #f4f4f4;
        margin-bottom: 50px;
        .title {
          display: block;
          font-size: var(--el-font-size-extra-large);
          margin-bottom: 20px;
        }
        /* 评论个人信息 */
        .comment-info {
          margin-bottom: 20px;
          > .el-input {
            padding: 5px 5px;
          }
        }
        /* 评论内容 */
        .comment-body {
          margin-bottom: 20px;
        }
        /* 评论处理 */
        .comment-handle {
          display: flex;
          justify-content: flex-end;
        }
      }

      //评论展示
      .article-comment-list {
        padding: 20px;
        border-radius: 20px;
        box-shadow: var(--el-box-shadow-dark);
        overflow: hidden;
        .title {
          display: block;
          font-size: var(--el-font-size-extra-large);
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
