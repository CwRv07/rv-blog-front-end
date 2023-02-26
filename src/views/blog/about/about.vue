<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-06 09:17:58
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2023-02-26 17:29:02
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="about">
  const blogCourse = reactive([
    { date: '22年6月6日', content: 'RvBlog v1.0成立' },
    {
      date: '23年2月26日',
      content: 'RvBlog v1.1迭代，主要进行优化项目。成果如下：',
      list: [
        '1. 体积优化：项目体积共压缩71.72%，其中首屏资源体积缩小67.04%；',
        '2. 加载优化：白屏时间速度约缩短56.17%，首屏加载时间缩短经两次优化缩短为原先60.12%；',
        '3. 前后端部署从本地部署至腾讯云Linux服务器，并进行部分UI细节调整；',
      ],
    },
  ])
</script>

<template>
  <main id="about">
    <!-- 个人信息 -->

    <el-divider>
      <h1 class="title">个人信息</h1>
    </el-divider>
    <section class="personal-info">
      <ul class="info-list">
        <li class="info-item">一名来自湖南农业大学的20级苦逼在校生</li>
        <li class="info-item">
          当前为一名前端工程师，将来会接触更多技术，争取走全栈方向
        </li>
        <!-- <li class="info-item"></li> -->
      </ul>
    </section>
    <!-- 关于博客 -->
    <el-divider>
      <h1 class="title">关于博客</h1>
    </el-divider>
    <section class="website-info">
      <ul class="info-list">
        <li class="info-item">博客名称：RvBlog</li>
        <li class="info-item">链接地址：暂无</li>
        <li class="info-item">
          博客简介：[RvBlog v1.1](前后端均在Github中开源)
        </li>
      </ul>
    </section>
    <!-- 联系方式 -->
    <el-divider>
      <h1 class="title">联系方式</h1>
    </el-divider>
    <section class="contact-info">
      <ul class="info-list">
        <li class="info-item">QQ：3277598894</li>
        <li class="info-item">Email：Rv_Jiang@outlook.com</li>
        <li class="info-item">GitHub：github.com/CwRv07</li>
      </ul>
    </section>
    <!-- 博客历程 -->
    <el-divider>
      <h1 class="title">博客历程</h1>
    </el-divider>
    <section class="blog-course">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in blogCourse"
          :key="index"
          :timestamp="activity.date"
          placement="top"
        >
          {{ activity.content }}
          <ul class="course-list" v-if="activity.list && activity.list.length">
            <li class="course-item" v-for="item in activity.list" :key="item">
              {{ item }}
            </li>
          </ul>
        </el-timeline-item>
      </el-timeline>
    </section>
    <!-- 版权声明 -->
    <el-divider>
      <h1 class="title">版权声明</h1>
    </el-divider>
    <section class="copyright">
      <ul class="info-list">
        <li class="info-item">
          本站除特别注明外，皆为原创，如若有侵犯您的权益，请立即联系我删除！
        </li>
        <li class="info-item">
          本站文章均可转载，但需保留本站相应的文章链接！
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  #about {
    @include body-padding($rv-body-padding-list);
    margin-top: 40px;

    /* 分界线 */
    .el-divider {
      .title {
        font-size: var(--el-font-size-extra-large);
        color: var(--el-color-primary);
      }
      --el-bg-color: #f4f4f4;
      --el-border-color: var(--el-color-primary);
    }

    /* 信息列表 */
    .info-list {
      list-style: disc;
      margin-left: 1em;
      .info-item {
        margin-bottom: 20px;
      }
    }

    /* 板块 */
    > section {
      padding: 20px 10px;
    }

    .blog-course {
      .course-list {
        margin-top: 5px;
        padding-left: 1em;
        font-size: 16px;
      }
    }
  }
</style>
