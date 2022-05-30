/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-30 17:46:53
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-30 23:05:21
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */

import Request from './request'

import type { RequestConfig } from './type'

interface RvRequestConfig<T> extends RequestConfig {
  data?: T
}

interface RvResponse<T> {
  code: number
  message: string
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
