<template>
<div v-show="active === Panel.BONFIRE" class="bonfire-container" :class="{fire: gameFlags.flagList.get(FlagEnum.FIRE_STARTED)}">
    <div :class="{hidden: !gameFlags.flagList.get(FlagEnum.INITIAL_EXPLORATION)}" class="tab-container">
        <span class="tab">Bonfire</span>
        <span class="tab">Exploration</span>
    </div>  
    <div class="bonfire-image"></div>
    <button v-if="!gameFlags.flagList.get(FlagEnum.INITIAL_EXPLORATION)" @click="initialExplore()">Explore your immiedate surroundings.</button>
    
</div>
</template>
<script setup lang="ts">
import { FlagEnum, Panel } from '@/enums';
import { useGameFlags } from '@/stores/gameFlags';
import { useLogs } from '@/stores/logStore';

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
<style>
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

.tab {
    align-items: center;
    color: white;
    border: 2px solid white;
    border-top: none;
    padding: 4px 12px;
    /* margin: 0 4px; */
    text-decoration: none;
    font-size: 22px;
    cursor:pointer;
}

.tab:hover {
    color: #ffc107;
}

.tab-container {
    display:flex;
    height: 40px;
    margin-bottom:20px;
    transition: opacity 5s ease-in;
}
</style>