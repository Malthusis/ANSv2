<template>
<div :class="{hidden: !gameFlags.flagList.get(FlagEnum.INITIAL_EXPLORATION)}" class="tab-container">
    <span class="tab" @click="utils.setTab(Panel.BONFIRE)">Bonfire</span>
    <span class="tab" @click="utils.setTab(Panel.EXPLORE)">Exploration</span>
</div>  
</template>
<script setup lang="ts">
import { FlagEnum, Panel } from '@/enums';
import { useGameFlags } from '@/stores/gameFlags';
import { useUtils } from '@/stores/utilsStore';


const gameFlags = useGameFlags();
const utils = useUtils();
</script>
<style>
.tab-container {
    background-color: rgb(15, 15, 15);
}
</style>