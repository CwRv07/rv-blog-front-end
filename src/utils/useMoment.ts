/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-05 20:12:12
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-05 20:15:35
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import moment from 'moment'
const useMoment = (data: number) => {
  return moment(data).format('YY年MM月DD日')
}

export default useMoment
