<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-03 14:33:41
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 17:29:38
 * @Description: 分类
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="category">
  import { CategoryAPI } from '@/api'

  // 类别选择器

  /* 选择类别 */
  const selectCategory = (value: number) => {
    if (value != category.selectValue) {
      category.selectValue = value
    }
  }
  /* 类别初始化 */
  onMounted(() => {
    CategoryAPI.listCategory().then(({ data }) => {
      console.log(data)
      category.list.push(...data)
    })
  })

  const category = reactive({
    selectValue: 0,
    list: [{ categoryName: '全部类别', id: 0 }],
    selectCategory,
  })
  /* /类别选择器 */

  /* 标签选择器 */
  const tag = reactive({
    selectValue: '',
    list: [
      { label: 'HTML', value: 'html1' },
      { label: 'HTML', value: 'html2' },
      { label: 'HTML', value: 'html3' },
      { label: 'HTML', value: 'html4' },
      { label: 'HTML', value: 'html5' },
      { label: 'HTML', value: 'html6' },
      { label: 'HTML', value: 'html7' },
      { label: 'HTML', value: 'html8' },
      { label: 'HTML', value: 'html9' },
    ],
  })
  /* /标签选择器 */

  /* 时间选择器 */
  const date = reactive({
    selectValue: '',
  })
  /* /时间选择器 */
</script>

<template>
  <main id="category">
    <!-- 筛选器 -->
    <header class="select row">
      <!-- 类别选择器 -->
      <section class="categorySelect col-12">
        <ul class="category-list">
          <li
            class="category-item"
            :class="{ active: category.selectValue == p.id }"
            v-for="p in category.list"
            :key="p.id"
            @click="category.selectCategory(p.id)"
          >
            {{ p.categoryName }}
          </li>
        </ul>
      </section>
      <!-- 标签选择器 -->
      <section class="tagSelect col-md-more-6 col-md-less-12">
        <p class="title">标签</p>
        <el-select
          v-model="tag.selectValue"
          multiple
          clearable
          collapse-tags
          collapse-tags-tooltip
          filterable
          placeholder="标签"
        >
          <el-option
            v-for="item in tag.list"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </section>
      <!-- 时间选择器 -->
      <section class="dateSelect col-md-more-6 col-md-less-12">
        <p class="title">时间</p>
        <el-date-picker
          v-model="date.selectValue"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          prefix-icon="none"
        />
      </section>
    </header>
    <!-- 文章列表 -->
    <main class="article-main">
      <rv-article-group />
    </main>
  </main>
</template>

<style lang="scss" scoped>
  #category {
    @include body-padding($rv-body-padding-list);
    margin-top: 30px;

    /* 筛选器 */
    .select {
      padding: 20px;
      margin-bottom: 10px;
      transition: all 0.3s;
      border-radius: 4px;
      border: 1px solid #e4e7ed;
      background-color: var(--el-color-white);

      &:hover {
        box-shadow: var(--el-box-shadow-light);
      }
      /* 类别选择器 */
      .categorySelect {
        display: flex;
        align-items: center;
        line-height: 1;

        .category-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .category-item {
            margin: 5px 5px;
            padding: 5px 12px 8px 12px;
            font-size: var(--el-font-size-large);
            color: var(--el-text-color-secondary);
            border-radius: 100px;
            background-color: var(--el-fill-color-dark);
            transition: all 0.3s;
            cursor: pointer;

            &:hover {
              color: var(--el-color-primary);
              background-color: var(--el-color-primary-light-9);
            }
            &.active {
              color: var(--el-color-primary);
              background-color: var(--el-color-primary-light-9);
            }
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
      /* 标签选择器 */
      .tagSelect {
        display: flex;
        align-items: center;
        margin-top: 20px;
        .title {
          white-space: nowrap;
          margin-right: 10px;
          font-size: var(--el-font-size-extra-large);
          color: var(--el-color-primary);
        }
      }
      /* 时间选择器 */
      .dateSelect {
        display: flex;
        align-items: center;
        margin-top: 20px;
        .title {
          white-space: nowrap;
          margin-right: 10px;
          font-size: var(--el-font-size-extra-large);
          color: var(--el-color-primary);
        }
      }
    }
  }
</style>
