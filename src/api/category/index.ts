/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-07 11:23:39
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 10:40:40
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
export const MODULE_BASE_URL = '/category'

import listCategory from './listCategory'
import countCategory from './countCategory'

const CategoryAPI = {
  listCategory,
  countCategory,
}

export default CategoryAPI
