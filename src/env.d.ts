/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 08:15:49
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-28 09:17:16
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
/// <reference types="vite/client" />
interface ViteEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_PORT: number
  readonly VITE_PROXY: [string, string][]
  readonly VITE_DROP_CONSOLE: boolean
  readonly VITE_USE_IMAGEMIN: boolean
  readonly VITE_USE_COMPRESS: boolean
  readonly VITE_COMPRESS_DELETE_ORIGIN_FILE: boolean
  readonly VITE_USE_MOCK: boolean
  readonly VITE_LEGACY: boolean
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
