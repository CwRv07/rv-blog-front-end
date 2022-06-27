/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 22:54:27
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 23:04:26
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

interface InsertUserParams {
  nickname: string
  email: string
  website: string
}

const insertUser = (data: InsertUserParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/insertUser',
    method: 'POST',
    data,
  })
}

export default insertUser
