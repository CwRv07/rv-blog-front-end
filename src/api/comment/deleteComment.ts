/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-29 20:50:41
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 20:53:39
 * @Description: 删除评论
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

const deleteComment = (userId: string | number) => {
  return rvRequest({
    url: MODULE_BASE_URL + `/deleteComment/${userId}`,
    method: 'DELETE',
  })
}

export default deleteComment
