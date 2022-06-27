/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-16 22:54:35
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 23:08:33
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { MODULE_BASE_URL } from '.'
import rvRequest from '../request'

const deleteUser = (userId: string | number) => {
  return rvRequest({
    url: MODULE_BASE_URL + `/deleteUser/${userId}`,
    method: 'DELETE',
  })
}

export default deleteUser
