import { defineStore } from 'pinia'

export const myDataStore = defineStore({
    id: 'my-data',
  state: () => ({
    myData: {} as Record<string, any>, 
  }),
  actions: {
    addMyData(value: Record<string, any>) {
      this.myData = value
    },
  },
})
