<!--
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 19:06:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-05 22:16:31
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
  const isDisabled = ref(false)

  onMounted(() => {
    getTimeLineData()
  })
  const getTimeLineData = () => {
    ArticlesAPI.listArticle(currentPage.value).then(({ data }) => {
      currentPage.value++
      let i = 0
      let length = data.length
      /* 是否终止无限加载 */
      if (length != 10) {
        isDisabled.value = true
      }
      console.log(data, length, isDisabled.value, currentPage.value)

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
  </section>
</template>

<style lang="scss" scoped>
  #rv-time-line {
    :deep(.el-timeline) {
      --el-timeline-node-color: var(--el-color-primary-light-5);
    }
  }
</style>
