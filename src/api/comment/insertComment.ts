/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-07 11:27:37
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 17:59:21
 * @Description: 新增评论
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

interface InsertCommentData {
  nickname: string
  email: string
  website?: string
  content: string
  articleId: number | string
  parentId: number | string
  toUid: number | string
  ancestorId: number | string
}

const insertComment = (data: InsertCommentData) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/insert',
    method: 'POST',
    data,
  })
}

export default insertComment
