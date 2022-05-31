/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 22:48:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-31 15:14:43
 * @Description: 条件文章列表
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

interface ConditionPageData {
  page: number
  categoryId?: number
  tagId?: number[]
  upperLimitTime?: number
  lowerLimitTime?: number
}

const listArticleByCondition = (data: ConditionPageData) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listArticleByCondition',
    method: 'GET',
    data,
  })
}

export default listArticleByCondition
