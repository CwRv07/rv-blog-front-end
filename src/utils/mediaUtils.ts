/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-28 21:34:20
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-28 22:17:06
 * @Description: 响应式封装
 * @Email: Rv_Jiang@outlook.com
 */

import { useMediaQuery } from '@vueuse/core'

const mediaUtils = reactive({
  isXL: useMediaQuery('(min-width:1200px)'),
  isLG: useMediaQuery('(min-width:992px)'),
  isMD: useMediaQuery('(min-width:768px)'),
  isSM: useMediaQuery('(min-width:567px)'),
  isXS: useMediaQuery('(max-width:567px)'),
})

export default mediaUtils
