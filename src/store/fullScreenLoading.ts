/*
 * @Author: Rv_Jiang
 * @Date: 2022-06-13 09:10:41
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-06-13 10:24:02
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { defineStore } from 'pinia'

export const useFullScreenLoadingStore = defineStore('fullScreenLoading', {
  state: () => {
    return {
      fullScreenLoading: false,
    }
  },
  getters: {
    isFullScreenLoading(): boolean {
      return this.fullScreenLoading
    },
  },
  actions: {
    open() {
      this.fullScreenLoading = true
    },
    close() {
      this.fullScreenLoading = false
    },
  },
})
