import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
    count() {
      return this.count
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
