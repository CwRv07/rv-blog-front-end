/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 20:12:12
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-06 15:46:45
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import moment from 'moment'

const FORMATE_STRING = 'YY年MM月DD日'

const momentFormate = {
  mounted(el: any, binding: any) {
    const textNode = document.createTextNode(
      moment(binding.value).format(FORMATE_STRING)
    )
    el.appendChild(textNode)
  },
}

export default momentFormate
