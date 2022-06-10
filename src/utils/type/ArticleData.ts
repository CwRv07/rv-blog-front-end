/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 10:11:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 10:21:19
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import AuthorData from './AuthorData'
import CategoryData from './CategoryData'
import TagData from './TagData'

export default interface ArticleData {
  id: string | number
  avatar?: string
  title: string
  summary: string
  commentCounts: number
  viewCounts: number
  weight: number
  createDate: string
  content: string
  author: AuthorData
  category: CategoryData
  tagList: TagData[]
}
