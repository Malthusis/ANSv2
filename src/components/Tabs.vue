<template>
<div :class="{hidden: !gameFlags.flagList.get(FlagEnum.INITIAL_EXPLORATION)}" class="tab-container">
    <span class="tab" @click="utils.setTab(Panel.BONFIRE)">Bonfire</span>
    <span class="tab" @click="utils.setTab(Panel.EXPLORE)">Exploration</span>
    <span v-if="gameFlags.flagList.get(FlagEnum.MATERIALS_ACQUIRED)" class="tab" @click="utils.setTab(Panel.CRAFT)">Craft</span>
    <span v-if="gameFlags.flagList.get(FlagEnum.MATERIALS_ACQUIRED)" class="tab" @click="utils.setTab(Panel.PROJECTS)">Projects</span>
    <span v-if="gameFlags.flagList.get(FlagEnum.CRAFTED_ITEMS)" class="tab" @click="utils.setTab(Panel.SELF)">Self</span>
</div>  
</template>
<script setup lang="ts">
import { FlagEnum, Panel } from '@/enums';
import { useGameFlags } from '@/stores/gameFlags';
import { useUtils } from '@/stores/utilsStore';


const gameFlags = useGameFlags();
const utils = useUtils();
</script>
<style scoped>
.tab {
    align-items: center;
    border: 2px solid white;
    border-top: none;
    padding: 4px 12px;
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
    min-height: 40px;
    margin-bottom:20px;
    transition: opacity 5s ease-in;
}
</style>