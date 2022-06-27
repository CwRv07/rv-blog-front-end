/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 18:00:37
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 18:01:46
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const listTagByCategory = (categoryId: string | number) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listTagByCategory',
    method: 'GET',
    data: {
      categoryId,
    },
  })
}

export default listTagByCategory
