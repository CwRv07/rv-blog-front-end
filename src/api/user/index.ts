/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 19:29:21
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 23:08:59
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
export const MODULE_BASE_URL = '/user'
import listUser from './listUser'
import listUserByCondition from './listUserByCondition'
import insertUser from './insertUser'
import deleteUser from './deleteUser'

const UserAPI = {
  listUser,
  listUserByCondition,
  insertUser,
  deleteUser,
}

export default UserAPI
