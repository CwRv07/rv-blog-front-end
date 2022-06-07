/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 23:09:43
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-06 15:03:04
 * @Description: 文章详情
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const articleDetail = (articleId: number | string) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/detail',
    method: 'GET',
    data: {
      articleId: articleId,
    },
  })
}

export default articleDetail
