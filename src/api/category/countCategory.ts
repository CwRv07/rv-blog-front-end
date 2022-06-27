/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-21 10:36:18
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 10:36:21
 * @Description: 类别总数
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

const countCategory = () => {
  return rvRequest({
    url: MODULE_BASE_URL + '/total',
    method: 'GET',
  })
}

export default countCategory
