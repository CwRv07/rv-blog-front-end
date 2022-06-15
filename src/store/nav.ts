/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-13 11:21:36
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-14 14:46:28
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => {
    return {
      value: '',
    }
  },
  getters: {
    currentRouterName(): string {
      return this.value
    },
  },
  actions: {
    push(value: string | undefined | null) {
      if (value == null) {
        this.value = ''
      } else {
        this.value = value
      }
    },
  },
})
