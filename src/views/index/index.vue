<!--
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 16:07:17
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-29 00:02:42
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="index"></script>

<template>
  <main id="index">
    <aside class="article-body">
      <section class="article-list">
        <el-card class="article-card" shadow="hover">
          <aside class="card-img">
            <img src="" alt="" v-img-lazy-load />
          </aside>
          <main class="card-body">
            <header class="card-title">
              <span class="card-lable"></span>
              <h1 class="title-content"></h1>
            </header>
            <main class="card-detail">
              <div class="card-data">
                <ul class="data-list">
                  <li class="author"></li>
                  <li class="create-date"></li>
                  <li class="view-counts"></li>
                  <li class="comment-counts"></li>
                  <li class="tag"></li>
                </ul>
              </div>
              <div class="card-summary"></div>
            </main>
          </main>
        </el-card>
      </section>
      <section class="article-pagination">
        <!-- <el-pagination
          @size-change="sizeChange"
          @current-change="currentChange"
          v-model:currentPage="currentPage"
          :page-sizes="[20, 40, 80, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalNum" background>
          :pager-count="7">
        </el-pagination> -->
      </section>
    </aside>
    <aside></aside>
  </main>
</template>

<style lang="scss" scoped></style>
