/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 22:48:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-31 15:50:27
 * @Description: 更新文章
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

interface UpdateArticleData {
  id: number
  title: string
  content: string
  summary: string
  categoryId: number
  tags: number[]
}

const updateArticle = (data: UpdateArticleData) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/update',
    method: 'PUT',
    data,
  })
}

export default updateArticle
