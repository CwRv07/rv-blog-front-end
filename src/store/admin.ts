/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-15 22:38:45
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-16 17:31:44
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => {
    return {
      account: '',
      token: '',
    }
  },
  getters: {
    hasToken(): boolean {
      if (this.token == null || this.token.trim().length === 0) {
        return false
      }
      return true
    },

    getAccount(): string {
      if (!this.hasToken) {
        return '未登录'
      }
      return this.account
    },

    getToken(): string {
      return this.token
    },
  },
  actions: {
    login(account: string, token: string) {
      this.account = account
      this.token = token
    },
  },
})
