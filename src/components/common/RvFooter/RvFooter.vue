<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-29 21:00:31
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-29 23:08:03
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvFooter"></script>

<template>
  <footer id="rv-footer">
    <!-- 网站信息 -->
    <section class="website-info row">
      <!-- 页面 -->
      <section class="page-info col-4 col-md-less-6">
        <p class="title">页面</p>
        <ul class="list">
          <li class="item">首页</li>
          <li class="item">归档</li>
          <li class="item">关于博客</li>
        </ul>
      </section>
      <!-- 新增 -->
      <section class="new-info col-4 col-md-less-6">
        <p class="title">新增博客</p>
        <ul class="list">
          <li class="item">HTML</li>
          <li class="item">HTML</li>
          <li class="item">HTML</li>
          <li class="item">HTML</li>
          <li class="item">HTML</li>
        </ul>
      </section>
      <!-- 介绍 -->
      <section class="description-info col-4 col-md-less-12">
        <p class="title">关于博客</p>
        <div class="description-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, quo
          earum! Nostrum eos rerum, quis veritatis necessitatibus aliquam sint
          nulla ea exercitationem similique minus blanditiis error, voluptas
          nobis. Vitae, doloremque?
        </div>
      </section>
    </section>
    <!-- 联系方式 -->
    <section class="website-about-me row">
      <!-- 二维码 -->
      <section class="qr-code col-3 col-md-less-12">
        <el-image
          src="http://view.jqueryfuns.com/2021/3/8/ce6fab1e5957d7bc7ed25518db41dd87/static/images/weixin.jpg"
          fit="fill"
          :lazy="true"
        />
      </section>
      <!-- 联系方式 -->
      <ul class="contact-detail row col-9 col-md-less-12">
        <li class="item col-xs-more-4 col-xs-less-12">
          <p class="icon">WEBSITE</p>
          <span class="text">RVBLOG.COM</span>
        </li>
        <li class="item col-xs-more-4 col-xs-less-12">
          <p class="icon">EMAIL</p>
          <span class="text">Rv_Jiang@outlook.com</span>
        </li>
        <li class="item col-xs-more-4 col-xs-less-12">
          <p class="icon">GITHUB</p>
          <span class="text">github.com/CwRv07</span>
        </li>
      </ul>
    </section>
    <!-- 版权申明 -->
    <section class="website-declare">
      <span>Powered by Rv_Jiang</span>
      <span>湘ICP备********号*</span>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
  #rv-footer {
    margin-top: 100px;
    color: var(--el-text-color-placeholder);
    font-size: var(--el-font-size-base);
    background-color: #1b1c1d;

    /* 网站信息 */
    .website-info {
      padding: 30px 60px;
      border-bottom: 1px solid #fff1;

      .page-info,
      .new-info,
      .description-info {
        padding: 10px 0;
        .title {
          color: var(--el-color-primary);
          font-size: var(--el-font-size-large);
          margin-bottom: 20px;
        }
        .list {
          padding-left: 1em;
          list-style: disc;
          transition: color 0.3s;
          cursor: pointer;

          .item {
            margin: 10px 0;
            &:hover {
              color: var(--el-color-primary);
            }
          }
        }
      }
    }

    /* 联系方式 */
    .website-about-me {
      /* 二维码 */
      .qr-code {
        padding: 30px 0;
        margin: auto;

        .el-image {
          width: 100px;
          height: 100px;
          border-radius: 4px;
        }
      }
      /* 联系方式 */
      .contact-detail {
        padding: 30px 0;
        border-top: 1px solid #fff1;
        border-left: 1px solid #fff1;

        .item {
          margin: auto;
          text-align: center;
          padding: 20px 10px;
          .icon {
            padding: 10px;
            font-size: var(--el-font-size-large);
            border-bottom: 1px solid #fff1;
            color: var(--el-color-primary);
          }

          .text {
            display: block;
            padding: 10px;
            font-size: var(--el-font-size-small);
          }
        }
      }
    }

    /* 版权申明 */
    .website-declare {
      padding: 0 30px;
      text-align: right;
      border-top: 1px solid #fff1;
      span {
        display: inline-block;
        margin: 10px;
        @media (max-width: 567px) {
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
