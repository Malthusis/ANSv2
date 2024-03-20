import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLogs = defineStore('logs', () => {
    const logQueue = ref([] as string[])

    function pushLog(log: string) {
        logQueue.value.push(log)
        if (logQueue.value.length > 15) {
            logQueue.value.shift();
        }
    }

    return { logQueue, pushLog }
})
