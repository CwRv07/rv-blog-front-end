/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 17:46:53
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 00:29:12
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */

// import { sortUserPlugins } from 'vite'
import Request from './request'

import type { RequestConfig } from './type'

interface RvRequestConfig<T> extends RequestConfig {
  data?: T
}

interface RvResponse<T> {
  success: boolean
  code: number
  msg: string
  data: T
}
const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result) => {
      return result
    },
  },
  // Long类型数据额外处理
  transformResponse: [
    function transformResponse(data) {
      if (typeof data === 'string') {
        try {
          const c1 = data
            .toString()
            .replace(/:\d{17,}/g, ':"@rr$&"')
            .replace(/@rr:\s/g, '')
            .replace(/@rr:/g, '')
          const c2 = c1
            .replace(/:\d{1,}\.\d+/g, ':"@rr$&"')
            .replace(/@rr:\s/g, '')
            .replace(/@rr:/g, '')
          data = JSON.parse(c2)
        } catch (e) {
          /* Ignore */
        }
      }
      return data
    },
  ],
})
/**
 * @description: Request函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {RvRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const rvRequest = <D, T = any>(config: RvRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  return request.request<RvResponse<T>>(config)
}

// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default rvRequest
