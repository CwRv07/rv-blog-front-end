<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-03 14:33:41
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 11:46:11
 * @Description: 分类
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="category">
  import { CategoryAPI } from '@/api'
  import { TagAPI } from '@/api'
  // import { ElMessage } from 'element-plus'
  import moment from 'moment'

  // 类别选择器

  /* 选择类别 */
  const selectCategory = (value: string) => {
    if (value != category.selectValue) {
      category.selectValue = value
      //标签刷新
      if (value) {
        TagAPI.listTagByCategory(value).then(({ data }) => {
          tag.list = data
        })
      } else {
        TagAPI.listTag().then(({ data }) => {
          tag.list = data
        })
      }
    }
  }
  /* 类别初始化 */
  onMounted(() => {
    CategoryAPI.listCategory().then(({ data }) => {
      category.list.push(...data)
    })
  })

  const category = reactive({
    selectValue: '',
    list: [{ categoryName: '全部类别', id: '' }],
    selectCategory,
  })
  /* /类别选择器 */

  /* 标签选择器 */
  const tag = reactive({
    selectValue: [],
    list: [{ tagName: '', id: '', avatar: '' }],
  })
  // 初始化标签
  onMounted(() => {
    TagAPI.listTag().then(({ data }) => {
      tag.list = data
    })
  })
  const changeTag = (value: string[]) => {
    console.log(value)
  }
  /* /标签选择器 */

  /* 时间选择器 */
  const date = reactive({
    selectValue: [],
    upperLimitTime: '',
    lowerLimitTime: '',
  })
  const changeDate = (value: any) => {
    // 边界处理
    if (value == null || value.length === 0) {
      date.upperLimitTime = ''
      date.lowerLimitTime = ''
      return
    }
    let [lowerLimitTime, upperLimitTime] = value

    // 保证至少一个月间隔
    upperLimitTime = moment(value[1]).add(1, 'months').valueOf()

    date.lowerLimitTime = lowerLimitTime.toString()
    date.upperLimitTime = upperLimitTime.toString()
  }
  /* /时间选择器 */

  /* 标题选择器 */
  const title = reactive({
    selectValue: '',
  })
  const changeTitle = (value: string | number) => {
    value = value.toString()
    title.selectValue = value.trim()
  }
  /* /标题选择器 */
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
            :class="{ active: category.selectValue == p.id.toString() }"
            v-for="p in category.list"
            :key="p.id.toString()"
            @click="category.selectCategory(p.id.toString())"
          >
            {{ p.categoryName }}
          </li>
        </ul>
      </section>
      <!-- 标题选择器 -->
      <section class="titleSelect col-md-more-6 col-md-less-12">
        <p class="title">搜索</p>
        <el-input
          v-model="title.selectValue"
          placeholder="文章标题搜索"
          clearable
          @change="changeTitle"
        />
      </section>
      <!-- 时间选择器 -->
      <section class="dateSelect col-md-more-6 col-md-less-12">
        <p class="title">日期</p>
        <el-date-picker
          v-model="date.selectValue"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          prefix-icon="none"
          value-format="x"
          @change="changeDate"
        />
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
          no-data-text="当前类别无标签"
          @change="changeTag"
        >
          <el-option
            v-for="item in tag.list"
            :key="item.id.toString()"
            :label="item.tagName"
            :value="item.id.toString()"
          />
        </el-select>
      </section>
    </header>
    <!-- 文章列表 -->
    <main class="article-main">
      <rv-article-group
        :category-id="category.selectValue"
        :tag-id="tag.selectValue"
        :upper-limit-time="date.upperLimitTime"
        :lower-limit-time="date.lowerLimitTime"
        :search="title.selectValue"
      />
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

      > section > .title {
        white-space: nowrap;
        margin-right: 10px;
        font-size: var(--el-font-size-extra-large);
        color: var(--el-color-primary);
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

        .el-select {
          width: 100%;
          padding-right: 20px;
          :deep(.el-input__wrapper) {
            padding-top: 0;
            padding-bottom: 0;
          }
        }
      }
      /* 时间选择器 */
      .dateSelect {
        display: flex;
        align-items: center;
        margin-top: 20px;
        padding-right: 20px;
        :deep(.el-date-editor) {
          padding-top: 0;
          padding-bottom: 0;
        }
      }

      .titleSelect {
        display: flex;
        align-items: center;
        margin-top: 20px;
        padding-right: 20px;
        .el-input {
          height: 32px;
        }
      }
    }

    /* 文章列表 */
  }
</style>
