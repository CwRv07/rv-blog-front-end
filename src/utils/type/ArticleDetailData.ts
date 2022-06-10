/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 10:11:30
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 10:21:42
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */

import AuthorData from './AuthorData'
import CategoryData from './CategoryData'
import CommentData from './CommentData'
import TagData from './TagData'

export default interface ArticleDetailData {
  id: number | string
  title: string
  summary: string
  commentCounts: number
  viewCounts: number
  createDate: number
  content: string
  author: AuthorData
  category: CategoryData
  commentList: CommentData[]
  tagList: TagData[]
}
