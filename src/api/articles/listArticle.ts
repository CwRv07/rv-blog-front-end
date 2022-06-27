/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 22:48:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-05 20:40:09
 * @Description: 文章列表
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const listArticle = (page = 1) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listArticle',
    data: {
      page,
    },
    method: 'GET',
  })
}

export default listArticle
