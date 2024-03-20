<template>
<div v-show="active === Panel.EXPLORE" class="explore-container">
    <Tabs></Tabs>
    <div class="areas">
        <div v-for="(area) of areaList">
            <button v-if="area[1].unlocked" @click="chooseArea(area[1])" :class="{'unselected': activeArea.id !== area[0]}">{{ area[1].name }}</button>
        </div>
    </div>
    <div class="area-description"><span>{{ activeArea.description }} <br><br> {{ activeArea.danger }} </span></div>
    <button>Explore.</button>
</div>
</template>
<script setup lang="ts">
import { Panel } from '@/enums';
import type { Area } from '@/interfaces';
import { useGameFlags } from '@/stores/gameFlags';
import { useLogs } from '@/stores/logStore';
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';


const props = defineProps({
    active: String
})

const areaList = new Map<number, Area>([
    [1, { id: 1, name: "Scrap Heaps", unlocked: true, danger:"Threat Level: Minimal.", description: "The nearby mounds are full of discarded parts, broken wheels, and leaking containers of unknown substances. \n \n Shouldn't be hard to forage something useful out of this."}],
    [2, { id: 2, name: "Junkyard", unlocked: true, danger:"Threat Level: Minimal.", description: "abc"}],
    [3, { id: 3, name: "Mountain of Rust", unlocked: false, danger:"Threat Level: Minimal.", description: "def"}],
])

const gameFlags = useGameFlags();
const logs = useLogs();
const activeArea = ref<Area>(areaList.get(1) || {} as Area);

function chooseArea(area: Area) {
    activeArea.value = area
}


</script>
<style>
.explore-container {
    height:100%;
    background-color: rgb(15, 15, 15);
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:40px;
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
</style>