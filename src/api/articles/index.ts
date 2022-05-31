/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 22:45:45
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-31 15:18:05
 * @Description: 文章api
 * @Email: Rv_Jiang@outlook.com
 */
export const MODULE_BASE_URL = '/articles'

import listArticle from './listArticle'
import listArticleByCondition from './listArticleByCondition'
import insertArticle from './insertArticle'
import deleteArticle from './deleteArticle'
import updateArticle from './updateArticle'
import articleDetail from './articleDetail'

const ArticlesAPI = {
  listArticle,
  listArticleByCondition,
  insertArticle,
  deleteArticle,
  updateArticle,
  articleDetail,
}
export default ArticlesAPI
