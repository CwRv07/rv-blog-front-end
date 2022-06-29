/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-07 11:23:48
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 22:15:12
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
export const MODULE_BASE_URL = '/comment'
import insertComment from './insertComment'
import listComment from './listComment'
import listCommentByStatus from './listCommentByStatus'
import deleteComment from './deleteComment'
import updateComment from './updateComment'

const CommentAPI = {
  insertComment,
  listComment,
  listCommentByStatus,
  deleteComment,
  updateComment,
}

export default CommentAPI
