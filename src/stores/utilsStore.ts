import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUtils = defineStore('utils', () => {
    const gameClock = ref<Date>(new Date())
    let clockFunc = -1

    const getDisplayTime = computed(() => {
        return "" + gameClock.value.getHours() + ":" + gameClock.value.getMinutes();
    }) 

    function startClock() {
        //TODO: Maybe check if this is a memory leak?
        if(clockFunc === -1) {
            console.log('Test!')
            clockFunc = setInterval(() => {
                console.log('tick!')
                refreshClock()
            }, 30000)
        }
    }

    function refreshClock() {
        gameClock.value = new Date();
    }

  return { gameClock, getDisplayTime, startClock }
})
