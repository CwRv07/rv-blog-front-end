/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-29 10:00:18
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-29 11:16:19
 * @Description: 阿里网页支付打赏功能
 * @Email: Rv_Jiang@outlook.com
 */

import rvRequest from '@/api/request'
import { MODULE_BASE_URL } from './index'

interface AlipagePageParams {
  subject: string
  total: string
}

const page = (data: AlipagePageParams) => {
  return rvRequest({
    url: MODULE_BASE_URL + '/page',
    method: 'POST',
    data,
  })
}

export default page
