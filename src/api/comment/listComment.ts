/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-29 20:50:22
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 20:53:54
 * @Description: 评论列表
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

interface ListCommentParams {
  page: number
  pageSize?: number
}

const listComment = (data: ListCommentParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listComment',
    method: 'GET',
    data,
  })
}

export default listComment
