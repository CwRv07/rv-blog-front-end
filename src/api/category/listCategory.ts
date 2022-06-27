/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-07 11:25:08
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-07 11:25:11
 * @Description: 分类列表
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const listCategory = () => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listCategory',
    method: 'GET',
  })
}

export default listCategory
