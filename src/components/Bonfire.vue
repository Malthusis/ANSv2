<template>
<div v-show="active === Panel.BONFIRE" class="bonfire-container" :class="{fire: gameFlags.flagList.get(FlagEnum.FIRE_STARTED)}">
    <Tabs></Tabs>
    <div class="bonfire-image"></div>
    <button v-if="!gameFlags.flagList.get(FlagEnum.INITIAL_EXPLORATION)" @click="initialExplore()">Explore your immiedate surroundings.</button>
    
</div>
</template>
<script setup lang="ts">
import { FlagEnum, Panel } from '@/enums';
import { useGameFlags } from '@/stores/gameFlags';
import { useLogs } from '@/stores/logStore';
import Tabs from '@/components/Tabs.vue';


const props = defineProps({
    active: String
})

const gameFlags = useGameFlags();
const logs = useLogs();

function initialExplore() {
    gameFlags.setFlag(FlagEnum.INITIAL_EXPLORATION, true)
    logs.pushLog("......")
    setTimeout(function() {
        logs.pushLog("You are situated in a clearing amongst vast mountains of junk and scrap.")
    }, 3000)
    setTimeout(function() {
        logs.pushLog("Best to look around.")
    }, 5000)
}
</script>
<style scoped>
.bonfire-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    transition: background-color 2s ease;
}

.bonfire-image {
    background-color: rgb(25,25,25);
    width:80%;
    max-width: 700px;
    height: 300px;
    border-radius: 35px;
    margin-bottom: 20px;
}

.fire {
    background-color: rgb(15, 15, 15);
}


</style>