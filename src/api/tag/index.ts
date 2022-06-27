/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-09 17:31:05
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-21 10:40:58
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
export const MODULE_BASE_URL = '/tag'

import findTag from './findTag'
import listTag from './listTag'
import listTagByCategory from './listTagByCategory'
import countTag from './countTag'

const TagAPI = { findTag, listTag, listTagByCategory, countTag }

export default TagAPI
