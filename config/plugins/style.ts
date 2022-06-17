/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 13:25:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 10:48:36
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import'
export function configStyleImportPlugin() {
  return createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
  })
}
