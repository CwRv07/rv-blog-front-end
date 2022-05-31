/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 22:48:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-31 15:16:42
 * @Description: 新增文章
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

interface InsertArticleData {
  title: string
  content: string
  summary: string
  categoryId: number
  tags: number[]
}

const insertArticle = (data: InsertArticleData) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/upload',
    method: 'POST',
    data,
  })
}

export default insertArticle
