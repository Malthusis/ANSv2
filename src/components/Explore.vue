<template>
<div v-show="active === Panel.EXPLORE" class="explore-container">
    <div v-show="!exploring" class="explore-container exploring">
        <Tabs></Tabs>
        <div class="areas">
            <div v-for="(area) of areaList">
                <button v-if="area[1].unlocked" @click="chooseArea(area[1])" :class="{'unselected': activeArea.id !== area[0]}">{{ area[1].name }}</button>
            </div>
        </div>
        <div class="area-description"><span>{{ activeArea.description }} <br><br> {{ activeArea.danger }} </span></div>
        <button @click="startExploring()">Explore.</button>
    </div>
    <div v-show="!!exploring" class="explore-container not-exploring">
        <span class="explore-title">Exploring ...</span>
        <ExploreVideoBox></ExploreVideoBox>

        <div class="loading-outer">
            <div class="loading-inner"></div>
        </div>

        <button @click="stopExploring()">Head back.</button>

        <div class="console">
            <TransitionGroup name="explore-log-lines" tag="div" class="explore-log">
                <div v-for="log of logQueue" class="explore-log" :key="log.id">
                    {{ log.log }}
                </div>
            </TransitionGroup>
            
        </div>
    </div>
    
</div>
</template>
<script setup lang="ts">
import { FlagEnum, Panel, resourceDisplayName } from '@/enums';
import type { Area, ExploreLog } from '@/interfaces';
import { useGameFlags } from '@/stores/gameFlags';
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';
import { useStorage } from '@/stores/storage';

import ExploreVideoBox from '@/components/ExploreVideoBox.vue'


const props = defineProps({
    active: String
})


const areaList = new Map<number, Area>([
    [1, { id: 1, name: "Scrap Heaps", unlocked: true, danger:"Threat Level: Minimal.", description: "The nearby mounds are full of discarded parts, broken wheels, and leaking containers of unknown substances. \n \n Shouldn't be hard to forage something useful out of this."}],
    [2, { id: 2, name: "Junkyard", unlocked: true, danger:"Threat Level: Minimal.", description: "abc"}],
    [3, { id: 3, name: "Mountain of Rust", unlocked: false, danger:"Threat Level: Minimal.", description: "def"}],
])

const gameFlags = useGameFlags();
const resources = useStorage();
const activeArea = ref<Area>(areaList.get(1) || {} as Area);
const exploring = ref(false);
let logFn = -1;
let logId = 0;
const logQueue = ref([] as ExploreLog[])


function pushLog(log: string) {
    if (logQueue.value.length > 6) {
        logQueue.value.splice(0,1);
    }
    logQueue.value.push({id: logId, log: log})
    logId = logId + 1;
}

function chooseArea(area: Area) {
    activeArea.value = area
}

function startExploring() {
    exploring.value = true;
    logFn = setInterval(() => {
        gainResource()
    },2000)
}

function stopExploring() {
    exploring.value = false;
    clearInterval(logFn);
    logQueue.value = [];
    logId = 0;
}

function gainResource() {
    //get resource in bounded resources.
    console.log('tick!')
    const resourceNum = Math.floor(Math.random() * 2) + 1;
    resources.gainResource(1, resourceNum)
    pushLog("Gained 1 " + resourceDisplayName(resourceNum))
    if(!gameFlags.flagList.get(FlagEnum.MATERIALS_ACQUIRED)) {
        gameFlags.setFlag(FlagEnum.MATERIALS_ACQUIRED, true)
    }
}

</script>
<style scoped>
.explore-container {
    height:100%;
    background-color: rgb(15, 15, 15);
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:40px;
    width: 100%;
}
.areas {
    display:flex;
}

.area-description {
    color:white;
    font-family: 'Squarebit2px';
    /* font-family: 'Gelatin'; */
    width: 60%;
    background-color: rgba(34, 3, 3);
    border: 2px solid white;
    border-radius: 8px;
    padding: 10px;
    margin-top: 20px;
    font-size: 18px;
}

.explore-title {
    font-size: 32px;
    color:white;
    margin-top: 40px;
}

.loading-outer {
    min-width:100px;
    height: 32px;
    border: 3px white solid;
    border-radius: 8px;
    width:25%;
}

.loading-inner {
    animation: loading 2s linear infinite;
    background-color:white;
    min-width: 1px;
    height: 29px;
    border: 2px solid black;
    border-radius: 6px;
}

@keyframes loading {
	0% {
		width: 0%;
	}
	50% {
		width: 50%;
	}
	100% {
		width: 100%;
	}
}

.explore-log {
  font-family: 'Squarebit2x';
  font-size: 18px;
  margin: 4px 0;
  color: #878e93;
  animation: textShadow 1.6s infinite;
  pointer-events: none;
}

.explore-log-lines-move,
.explore-log-lines-enter-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.explore-log-lines-enter-from {
  opacity: 0;
  transform: scaleY(0.10) translate(30px, 0px);
}


</style>