/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 19:29:37
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 23:05:12
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

interface ListUserParams {
  page: number
  pageSize?: number
}

const listUser = (data: ListUserParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/listUser',
    method: 'GET',
    data,
  })
}

export default listUser
