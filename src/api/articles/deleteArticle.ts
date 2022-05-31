/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 23:09:43
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-31 15:39:35
 * @Description: 文章删除
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const deleteArticle = (articleId: number) => {
  return rvRequest({
    url: MODULE_BASE_URL + `/delete/${articleId}`,
    method: 'DELETE',
  })
}

export default deleteArticle
