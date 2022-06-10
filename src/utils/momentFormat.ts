/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 20:12:12
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-09 17:19:19
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import moment from 'moment'

const FORMATE_STRING = 'YY年MM月DD日'

const MomentFormate = {
  mounted(el: any, binding: any) {
    const textNode = document.createTextNode(
      moment(+binding.value).format(FORMATE_STRING)
    )
    el.appendChild(textNode)
  },
}

export default MomentFormate
