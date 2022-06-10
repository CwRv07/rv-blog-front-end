<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-31 20:00:36
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 16:09:15
 * @Description: 文章详情页
 * @Email: Rv_Jiang@outlook.com
-->

<script setup lang="ts" name="articleDetail">
  import { Clock, View, ChatDotRound } from '@element-plus/icons-vue'
  import { useRoute } from 'vue-router'
  import { ArticleDetailData, CommentData } from '@/utils/type'
  import { Ref } from 'vue'
  import { ArticlesAPI, CommentAPI } from '@/api'
  import { useWindowSize } from '@vueuse/core'
  import { ElMessage } from 'element-plus'

  /* 评论板块 */
  // 评论数据
  const comment = reactive({
    nickname: '',
    email: '',
    website: '',
    content: '',
  })
  // 回复评论数据
  const replyComment = reactive({
    parentId: '0',
    toUid: '0',
    ancestorId: '0',
    toUnickname: '',
  })

  // 获取回复信息
  const getReplyInfo = (replyInfo: CommentData) => {
    replyComment.toUid = replyInfo.author.id.toString()
    replyComment.toUnickname = replyInfo.author.nickname
    replyComment.parentId = replyInfo.id.toString()
    replyComment.ancestorId =
      replyInfo.ancestorId.toString() === '0'
        ? replyInfo.id.toString()
        : replyInfo.ancestorId.toString()

    console.log(replyComment)
    // 跳转至评论板块
    document.getElementById('rv-comment-send')?.scrollIntoView()
  }

  // 清空回复信息
  const clearReplyInfo = () => {
    replyComment.parentId = '0'
    replyComment.toUid = '0'
    replyComment.ancestorId = '0'
    replyComment.toUnickname = ''
  }

  // 发送评论
  const sendComment = () => {
    let params = {
      ...comment,
      ...replyComment,
      articleId: articleDetail.value.id.toString(),
    }
    // 边界检测
    // 信息不可为空
    if (
      (params.nickname.trim() === '' || params.email.trim() === '',
      params.content.trim() === '')
    ) {
      ElMessage({
        message: '必填信息不可为空',
        type: 'warning',
      })
      return
    }
    // 邮箱格式
    if (
      !/^[A-Za-z0-9\u4e00-\u9fa5_]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
        params.email
      )
    ) {
      ElMessage({
        message: '邮箱格式不正确',
        type: 'warning',
      })
      return
    }
    // 网站格式
    if (
      params.website !== '' &&
      !/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+$/.test(params.website)
    ) {
      ElMessage({
        message: '站点格式错误',
        type: 'warning',
      })
    }
    CommentAPI.insertComment(params).then((data) => {
      console.log(data)
      if (data.code === 200) {
        ElMessage({
          message: '评论提交成功，请等待审核',
          type: 'success',
        })
      } else {
        ElMessage({
          message: data.message,
          type: 'warning',
        })
      }
    })
  }
  /* /评论 */

  /* 文章详情信息 */
  const articleDetail: Ref<ArticleDetailData> = ref({} as ArticleDetailData)
  const articleCatalog: Ref<{ text: string; level: number }[]> = ref([])
  const getCatalog = (list: any) => {
    articleCatalog.value = toRaw(list)
  }

  /* 目录 */
  const { height } = useWindowSize()
  const catalogEl = ref()
  const catalogControllerEl = ref()
  const catalogHeight = ref(0)
  const catalogWidth = ref(0)

  /* 目录显示 */
  const catalogDisplay = ref(false)
  const catalogMarginLeft = computed(() => {
    if (catalogDisplay.value) {
      return 0
    } else {
      return -(10 + catalogWidth.value)
    }
  })
  const catalogBottom = computed(() => {
    return (height.value - catalogHeight.value) / 2
  })

  /* 初始化数据 */
  const route = useRoute()
  onMounted(() => {
    ArticlesAPI.articleDetail(route.params.articleId as string).then(
      ({ data }) => {
        /* 文章数据初始化 */
        articleDetail.value = data

        /* 目录初始化 */
        setTimeout(() => {
          catalogHeight.value = (catalogEl.value as any)?.clientHeight
          catalogWidth.value = (catalogEl.value as any)?.clientWidth
        }, 1000)

        /* 评论数据初始化 */
      }
    )
  })
</script>

<template>
  <main id="article-detail">
    <!-- 文章简介 -->
    <header class="article-header">
      <!-- 文章标题 -->
      <h1 class="article-title">{{ articleDetail.title }}</h1>
      <!-- 文章数据 -->
      <ul class="article-data">
        <li class="data-item">
          <el-icon><Clock /></el-icon>
          <span
            class="data-text"
            v-moment-format="articleDetail.createDate"
          ></span>
        </li>
        <li class="data-item">
          <el-icon><View /></el-icon>
          <span class="data-text">{{ articleDetail.viewCounts }}</span>
        </li>
        <li class="data-item">
          <el-icon><ChatDotRound /></el-icon>
          <span class="data-text">{{ articleDetail.commentCounts }}</span>
        </li>
      </ul>
      <!-- 文章标签 -->
      <ul
        class="article-tag"
        v-if="
          articleDetail.tagList == null || articleDetail.tagList.length == 0
        "
      >
        <li class="tag-item" v-for="p in articleDetail.tagList" :key="p.id">
          {{ '#' + p.tagName }}
        </li>
      </ul>
    </header>
    <main class="article-main">
      <div class="article-main-margin">
        <!-- v-if="articleCatalog != null && articleCatalog.length !== 0" -->
        <aside class="article-content">
          <rv-editor
            :value="articleDetail.content || ''"
            @get-catalog="getCatalog"
          />
        </aside>
      </div>
      <!-- 目录板块 -->
      <div
        class="article-catalog"
        ref="catalogEl"
        :style="{
          'margin-left': catalogMarginLeft + 'px',
          bottom: catalogBottom + 'px',
          opacity: 1,
        }"
        v-show="articleCatalog != null && articleCatalog.length != 0"
      >
        <section class="catalog-list">
          <h1>目录</h1>
          <a
            :href="'#' + p.text"
            v-for="p in articleCatalog"
            :key="p.text"
            :style="{ 'margin-left': p.level - 1 + 'em' }"
          >
            {{ p.text }}
          </a>
        </section>
      </div>
      <!-- 目录控制器 -->
      <div
        class="catalog-controller"
        tabindex="0"
        @focus="catalogDisplay = true"
        @blur="catalogDisplay = false"
        ref="catalogControllerEl"
      >
        目录
      </div>
    </main>
    <!-- 文章评论 -->
    <footer class="article-footer">
      <!-- 评论发送 -->
      <section class="article-comment-write" id="rv-comment-send">
        <header class="comment-info row">
          <div class="col-12">
            <h1 class="title">发送评论</h1>
            <p class="reply" v-show="replyComment.toUid !== '0'">
              #回复用户
              <el-tag closable @close="clearReplyInfo">
                {{ replyComment.toUnickname }}
              </el-tag>
            </p>
          </div>

          <el-input
            class="col-lg-more-4 col-sm-more-6 col-sm-less-12"
            v-model="comment.nickname"
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
          <el-button type="primary" size="large" @click="sendComment">
            评论
          </el-button>
        </footer>
      </section>
      <!-- 评论展示 -->
      <section class="article-comment-list">
        <h1 class="title">评论区</h1>
        <template
          v-if="
            articleDetail.commentList != null &&
            articleDetail.commentList.length !== 0
          "
        >
          <rv-comment-group
            :comment-group="articleDetail.commentList"
            @get-reply-info="getReplyInfo"
          />
        </template>
        <template v-else>
          <el-empty description="当前没有评论" />
        </template>
      </section>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
  #article-detail {
    // background-image: url(@/assets/img/img0.png);
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

      color: var(--el-color-primary);
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
          .el-icon {
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
      position: relative;

      .article-main-margin {
        @include body-padding($rv-body-padding-list);
        margin-bottom: 50px;
      }

      #rv-editor {
        border-radius: 20px;
        box-shadow: var(--el-box-shadow-dark);
        overflow: hidden;
      }

      .article-catalog {
        position: fixed;
        /* 初始位置 */
        margin-left: -9999px;
        bottom: -9999px;
        opacity: 0;
        display: flex;
        z-index: 100;
        transition: all 0.3s;
        background-color: #fff;
        box-shadow: var(--el-box-shadow);
        border-radius: 0 10px 10px 0;
        &:hover {
          margin-left: 0;
        }

        .catalog-list {
          display: flex;
          flex-direction: column;
          padding: 20px;
          > h1 {
            font-size: var(--el-font-size-large);
          }
          > a {
            margin: 5px 0;
            color: var(--el-color-primary);
          }
        }
      }

      .catalog-controller {
        --el-backtop-bg-color: var(--el-bg-color-overlay);
        --el-backtop-text-color: var(--el-color-primary);
        --el-backtop-hover-bg-color: var(--el-border-color-extra-light);
        position: fixed;
        bottom: 90px;
        right: 40px;
        background-color: var(--el-backtop-bg-color);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--el-backtop-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--el-font-size-base);
        box-shadow: var(--el-box-shadow-lighter);
        cursor: pointer;
        z-index: 5;
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
          display: inline-block;
          font-size: var(--el-font-size-extra-large);
          color: var(--el-color-primary);
          margin-bottom: 20px;
        }
        .reply {
          display: inline-block;
          margin-left: 10px;
          .el-tag {
            font-size: var(--el-font-size-base);
          }
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
          color: var(--el-color-primary);
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
