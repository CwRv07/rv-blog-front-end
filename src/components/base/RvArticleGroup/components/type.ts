/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-06 10:57:29
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-06 14:49:06
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
export interface ArticleData {
  id: string | number
  avatar?: string
  title: string
  summary: string
  commentCounts: number
  viewCounts: number
  weight: number
  createDate: string
  content: string
  author: ArticleAuthorData
  category: ArticleCategoryData
  tagList: ArticleTagData[]
}

interface ArticleAuthorData {
  id: number
  nickname: string
  avatar: string
}
interface ArticleCategoryData {
  id: number
  avatar: string
  categoryName: string
  description: string
}

interface ArticleTagData {
  id: number
  avatar: string
  tagName: string
  categoryId: number
}
