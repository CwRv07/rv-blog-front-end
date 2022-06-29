/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 10:17:14
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 20:39:39
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import UserData from './UserData'
export default interface CommentData {
  id: number | string
  author: UserData
  content: string
  ancestorId: number | string
  parentId: number | string
  createDate: string
  praise: number
  toUser: UserData
  list?: CommentData[]
}
