/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 18:02:37
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 18:03:47
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

interface FindTagParams {
  id: number | string
  tagName: string
}

const findTag = (data: FindTagParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/findTag',
    method: 'GET',
    data,
  })
}

export default findTag
