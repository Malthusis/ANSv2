import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { Panel } from '@/enums'

export const useUtils = defineStore('utils', () => {
    const gameClock = ref<Date>(new Date())
    let clockFunc = -1
    const currentTab = ref<Panel>(Panel.BONFIRE);

    const getDisplayTime = computed(() => {
        return "" + gameClock.value.getHours() + ":" + (gameClock.value.getMinutes() < 10 ? "0" + gameClock.value.getMinutes() :gameClock.value.getMinutes());
    }) 

    function startClock() {
        //TODO: Maybe check if this is a memory leak?
        if(clockFunc === -1) {
            console.log('Test!')
            clockFunc = setInterval(() => refreshClock(), 30000)
        }
    }

    function refreshClock() {
        gameClock.value = new Date();
    }

    function setTab(panel: Panel) {
        currentTab.value = panel
    }

  return { gameClock, currentTab, getDisplayTime, startClock, setTab }
})
