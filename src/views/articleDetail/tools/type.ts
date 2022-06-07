/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-06 14:31:58
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-06 14:59:13
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */

export interface ArticleDetailData {
  id: number | string
  title: string
  summary: string
  commentCounts: number
  viewCounts: number
  createDate: number
  content: string
  author: ArticleAuthorData
  category: ArticleCategoryData
  commentList: ArticleCommentListData[]
  tagList: ArticleTagData[]
}

interface ArticleAuthorData {
  id: number | string
  nickname: string
  avatar: string
}

interface ArticleCategoryData {
  id: number | string
  avatar: string
  categoryName: string
  description: string
}

interface ArticleCommentListData {
  id: number | string
  author: ArticleAuthorData
  content: string
  ancestorId: number | string
  createDate: string
  like: number
  toUser: ArticleAuthorData
}

interface ArticleTagData {
  id: number | string
  avatar: string
  tagName: string
  categoryId: number | string
}
