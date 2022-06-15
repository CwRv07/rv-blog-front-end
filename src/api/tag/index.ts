/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 17:31:05
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-10 09:35:12
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
export const MODULE_BASE_URL = '/tag'

import findTag from './findTag'
import listTag from './listTag'
import listTagByCategory from './listTagByCategory'

const TagAPI = { findTag, listTag, listTagByCategory }

export default TagAPI
