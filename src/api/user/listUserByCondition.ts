/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 19:29:45
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 23:04:58
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

interface ListUserByConditionParams {
  page: number
  pageSize?: number
  id?: string | number
  nickname?: string
}

const listUserByCondition = (data: ListUserByConditionParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listUserByCondition',
    method: 'GET',
    data,
  })
}

export default listUserByCondition
