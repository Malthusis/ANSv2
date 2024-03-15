import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLogs = defineStore('logs', () => {
  const logQueue = ref(["Welcome to ANS.", "Test2"] as string[])

  function pushLog(log: string) {
    logQueue.value.push(log)
    if (logQueue.value.length > 15) {
        logQueue.value.shift();
      }
  }

  return { logQueue, pushLog }
})
