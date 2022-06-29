/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-29 20:50:33
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 20:54:05
 * @Description: 评论状态列表
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

interface ListCommentByStatusParams {
  page: number
  pageSize?: number
  status: number
}

const listCommentByStatus = (data: ListCommentByStatusParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listCommentByStatus',
    method: 'GET',
    data,
  })
}

export default listCommentByStatus
