/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-15 22:04:59
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-15 22:12:57
 * @Description: 登录API
 * @Email: Rv_Jiang@outlook.com
 */
import rvRequest from '../request'

interface LoginParams {
  account: string
  password: string
}

const LoginAPI = (data: LoginParams) => {
  return rvRequest({
    url: '/login',
    method: 'POST',
    data,
  })
}

export default LoginAPI
