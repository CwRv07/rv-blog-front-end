<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 19:06:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-22 01:31:00
 * @Description: RvTimeLine
 * @Email: Rv_Jiang@outlook.com
-->
<script setup lang="ts" name="rvTimeLine">
  import RvTimeLineItem from './components/RvTimeLineItem.vue'
  import { TimeLineItemData } from './components/RvTimeLineItem.vue'
  import moment from 'moment'
  import { ArticlesAPI } from '@/api'
  interface TimeLineDate {
    date: string
    articleList: TimeLineItemData[]
  }

  const timeLineData: TimeLineDate[] = reactive([])
  const currentDate = ref('')
  const currentPage = ref(1)
  // const pageSize = ref(6)
  const isDisabled = ref(false)
  const isEmpty = ref(true)

  onMounted(() => {
    getTimeLineData()
  })
  const getTimeLineData = () => {
    ArticlesAPI.listArticle(currentPage.value).then(({ data }) => {
      data = data.records
      let length = data.length
      console.log(data)
      /* 是否数据为空 */
      if (isEmpty.value && length == 0) {
        return
      } else {
        isEmpty.value = false
      }

      let i = 0
      currentPage.value++

      /* 是否终止无限加载 */
      if (length != 6) {
        isDisabled.value = true
      }

      for (; i < length; i++) {
        /* 获取当前时间轴 */
        let nowDate = moment(data[i]['createDate']).format('YY年MM月')

        /* 判断是否需要新增时间轴 */
        if (nowDate !== currentDate.value) {
          /* 新增 */
          timeLineData.push({
            date: nowDate,
            articleList: [],
          })
          currentDate.value = nowDate
        }

        /* 插入操作 */
        timeLineData[timeLineData.length - 1].articleList.push({
          title: data[i]['title'],
          summary: data[i]['summary'],
          sign: moment(data[i]['createDate']).format('YY年MM月DD日'),
        })
      }
    })
  }
</script>

<template>
  <section id="rv-time-line">
    <template v-if="isEmpty">
      <el-empty description="当前数据为空" />
    </template>
    <template v-else>
      <el-timeline
        v-infinite-scroll="getTimeLineData"
        :infinite-scroll-disabled="isDisabled"
        :infinite-scroll-immediate="true"
        :infinite-scroll-distance="50"
      >
        <el-timeline-item
          v-for="p in timeLineData"
          :key="p.date"
          :timestamp="p.date"
          placement="top"
        >
          <rv-time-line-item :item-data="p.articleList" />
        </el-timeline-item>
      </el-timeline>
    </template>
  </section>
</template>

<style lang="scss" scoped>
  #rv-time-line {
    :deep(.el-timeline) {
      --el-timeline-node-color: var(--el-color-primary-light-5);
    }
  }
</style>
