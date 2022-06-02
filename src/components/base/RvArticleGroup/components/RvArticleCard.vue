<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 00:07:36
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-01 17:56:19
 * @Description: 文章卡片
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvArticleCard">
  import { User, Clock, View, ChatDotRound } from '@element-plus/icons-vue'
  // import mediaUtils from '@/utils/mediaUtils'
</script>

<template>
  <el-card class="rv-article-card article-card" shadow="hover">
    <!-- 图片 -->
    <div class="card-body">
      <aside class="card-img-container">
        <el-image
          class="card-img"
          src="https://i.picsum.photos/id/1005/800/450.jpg?hmac=-8wdoAbn0F4FYUl0i8MKdy8wnMnIzBIBzw5nHgckE9Y"
          fit="cover"
          lazy
        />
      </aside>
      <!-- 文字 -->
      <main class="card-description">
        <!-- 标题和类别 -->
        <header class="card-title">
          <span class="card-label">前端</span>
          <h1 class="title-content">
            前端小技巧前端小技巧前端小技巧前端小技巧前端小技巧
          </h1>
        </header>

        <!-- 详情信息 -->
        <main class="card-detail">
          <div class="card-data">
            <!-- 信息列表 -->
            <ul class="data-list">
              <!-- 作者 -->
              <li class="author">
                <el-icon><User /></el-icon>
                卷心菜汪
              </li>
              <!-- 时间 -->
              <li class="create-date">
                <el-icon><Clock /></el-icon>
                20年05月29日
              </li>
              <!-- 观看量 -->
              <li class="view-counts">
                <el-icon><View /></el-icon>
                123
              </li>
              <!-- 评论数 -->
              <li class="comment-counts">
                <el-icon><ChatDotRound /></el-icon>
                321
              </li>
            </ul>
          </div>
          <!-- 文章简介 -->
          <div class="card-summary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos magnam architecto eaque alias, exercitationem
            voluptatibus quis nulla dolorem totam aut minus est enim a autem
            quaerat illo, fugiat fugit officia.
          </div>
        </main>
        <!-- 相关标签 -->
        <footer class="tag-list">
          <span class="tag-item">Vue</span>
          <span class="tag-item">HTML</span>
          <span class="tag-item">CSS</span>
          <span class="tag-item">优化</span>
        </footer>
      </main>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
  $img-size-lg: 140px;
  $img-size-default: 120px;

  .rv-article-card {
    cursor: pointer;
    margin: 20px 0;
    .card-body {
      display: flex;

      // 图片
      .card-img-container {
        width: $img-size-default;
        height: $img-size-default;
        overflow: hidden;
        border-radius: 8px;
        margin-right: 20px;

        @media (max-width: $rv-sm-width) {
          display: none;
          margin-right: none;
        }

        .card-img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s;
        }
      }

      // 文字
      .card-description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        width: 0;

        // 标题和类别
        .card-title {
          display: flex;
          align-items: center;
          .card-label {
            margin-right: 10px;
            padding: 2px 5px;
            color: var(--el-color-white);
            font-size: var(--el-font-size-small);
            border-radius: 5px;
            white-space: nowrap;
            background-color: var(--el-color-primary);
            transition: all 0.2s;

            &:hover {
              transform: scale(1.1);
            }
          }
          .title-content {
            @extend .single-line;
            flex: 1;
            font-size: var(--el-font-size-large);
            font-weight: bold;
          }
        }

        // 详情信息
        .card-detail {
          display: flex;
          flex-direction: column;
          // 信息列表
          .data-list {
            @extend .single-line;
            margin: 5px 0;
            display: flex;
            flex-wrap: wrap;
            font-size: var(--el-font-size-extra-small);
            color: var(--el-text-color-secondary);
            // 信息子项
            li {
              display: flex;
              align-items: center;
              margin-right: 8px;
            }
          }

          // 文章简介
          .card-summary {
            @extend .two-line;
            margin: 5px 0;
            color: var(--el-text-color-regular);
          }
        }

        //相关标签
        .tag-list {
          @extend .single-line;
          display: flex;
          flex-wrap: wrap;
          .tag-item {
            margin-right: 5px;
            padding: 1px 3px;
            border-radius: 3px;
            color: var(--el-color-primary-light-3);
            background-color: var(--el-color-primary-light-9);
            transition: all 0.3s;

            &:hover {
              color: var(--el-color-primary-light-9);
              background-color: var(--el-color-primary-light-3);
            }
          }
        }
      }
    }

    &:hover {
      .card-img {
        transform: scale(1.1);
      }
    }
  }
</style>
