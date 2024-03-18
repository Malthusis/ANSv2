<template>
<div v-show="active === Panel.EXPLORE" class="explore-container">

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
.explore-container {
    height:100%;
    background-color: rgba(165, 42, 42, 0.24);
}
</style>