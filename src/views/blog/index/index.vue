<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 16:07:17
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2023-02-25 18:30:23
 * @Description: 首页
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="index">
  import RvAsideList from './components/RvAsideList/RvAsideList.vue'
  import { ArticlesAPI, CategoryAPI, TagAPI } from '@/api'
  import { CategoryData, TagData } from '@/utils/type'

  /* 文章信息 */

  /* 侧边栏信息 */
  // 自我介绍
  const linkTo = (url: string) => {
    window.open(url)
  }

  const aboutMe = reactive({
    static: {
      chinese: '卷心菜汪',
      english: 'Rv_Jiang',
      job: '前端工程师',
    },
    detail: {
      article: { num: 0, title: '文章' },
      category: { num: 0, title: '分类' },
      tag: { num: 0, title: '标签' },
    },
  })
  // 初始化数据
  onMounted(() => {
    ArticlesAPI.countArticle().then(({ data }) => {
      aboutMe.detail.article.num = data
    })
    CategoryAPI.countCategory().then(({ data }) => {
      aboutMe.detail.category.num = data
    })
    TagAPI.countTag().then(({ data }) => {
      aboutMe.detail.tag.num = data
    })
  })
  // 类别列表
  const categoryList = reactive({
    title: '精选类别',
    list: [] as string[],
  })
  onMounted(() => {
    CategoryAPI.listCategory().then(({ data }) => {
      ;(data as CategoryData[]).forEach((item) => {
        categoryList.list.push(item.categoryName)
      })
    })
  })
  // 标签列表
  const tagList = reactive({
    title: '热门标签',
    list: [] as string[],
  })
  onMounted(() => {
    TagAPI.listTag().then(({ data }) => {
      data = data.slice(0, 5)
      ;(data as TagData[]).forEach((item) => {
        tagList.list.push(item.tagName)
      })
    })
  })
</script>

<template>
  <main id="index" class="row">
    <!-- 文章信息 -->
    <aside class="article-body col-8 col-md-more-9 col-md-less-12">
      <rv-article-group />
    </aside>
    <!-- 侧边栏信息 -->
    <aside class="article-extra col-md-less-4 col-md-more-3 hidden-xs-only">
      <!-- 个人名片 -->
      <section class="about-me">
        <!-- 头像 -->
        <div class="head">
          <img src="@/assets/img/avatar.png" fit="fill" :lazy="true" />
        </div>
        <!-- 自我介绍 -->
        <div class="introduction">
          <p class="chinese">{{ aboutMe.static.chinese }}</p>
          <p class="english">{{ aboutMe.static.english }}</p>
          <p class="job">{{ aboutMe.static.job }}</p>
        </div>
        <!-- 数据 -->
        <ul class="detail-list">
          <li class="detail-item" v-for="p in aboutMe.detail" :key="p.title">
            <span class="detail-number">{{ p.num }}</span>
            <p class="detail-description">{{ p.title }}</p>
          </li>
        </ul>
        <!-- 链接 -->
        <ul class="link-list">
          <li class="link-item">
            <img
              src="@/assets/img/icon/github.svg"
              alt="github"
              @click="linkTo('https://github.com/CwRv07')"
            />
          </li>
          <li class="link-item">
            <img
              src="@/assets/img/icon/qq.svg"
              alt="qq"
              @click="
                linkTo(
                  'https://qm.qq.com/cgi-bin/qm/qr?k=bAHuX3GIF7PxHQ0iPtSyOTYScceJoocd&noverify=0'
                )
              "
            />
          </li>
        </ul>
      </section>
      <rv-aside-list v-bind="categoryList" />
      <rv-aside-list v-bind="tagList" />
    </aside>
  </main>
</template>

<style lang="scss" scoped>
  #index {
    @include body-padding($rv-body-padding-list);
    margin-top: 30px;
    .article-body {
    }

    // 侧边栏
    .article-extra {
      margin-left: 20px;
      border-radius: 4px;
      user-select: none;

      //个人名片
      .about-me {
        padding: 15px 5px;
        margin-bottom: 10px;
        transition: all 0.3s;
        border-radius: 4px;
        border: 1px solid #e4e7ed;
        background-color: var(--el-color-white);

        &:hover {
          box-shadow: var(--el-box-shadow-light);
        }

        // 头像
        .head {
          max-width: 120px;
          margin: auto;
          user-select: none;

          img {
            width: 100%;
          }
        }

        // 自我介绍
        .introduction {
          margin: 10px 0;
          text-align: center;

          .chinese {
            font-size: var(--el-font-size-large);
            color: var(--el-color-primary-light-3);
          }
          .english {
            color: var(--el-text-color-regular);
            color: var(--el-color-primary-light-3);
          }
          .job {
            margin-top: 10px;
          }
        }

        // 数据
        .detail-list {
          margin: 20px 0;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .detail-item {
            text-align: center;
            cursor: pointer;
            .detail-number {
              font-size: var(--el-font-size-medium);
              color: var(--el-color-primary-light-3);
            }
          }
        }

        // 链接
        .link-list {
          display: flex;
          justify-content: space-around;
          align-items: center;

          .link-item {
            width: 30px;
            cursor: pointer;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
