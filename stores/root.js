import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    client_ip: null,
  }),
})
