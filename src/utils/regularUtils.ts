/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-17 14:40:55
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-17 15:53:12
 * @Description: 正则工具类
 * @Email: Rv_Jiang@outlook.com
 */

const emailRegularUtils = (email: string) => {
  if (
    email != null &&
    email.trim().length !== 0 &&
    /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
  ) {
    return true
  } else {
    return false
  }
}

const websiteRegularUtils = (website: string) => {
  if (
    website != null &&
    website.trim().length !== 0 &&
    /^(((ht|f)tp(s?))\:\/\/)?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/.test(
      website
    )
  ) {
    return true
  } else {
  }
}

const RegularUtils = {
  emailRegularUtils,
  websiteRegularUtils,
}
export default RegularUtils
