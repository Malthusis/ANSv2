<template>
<div class="container" :class="{fire: gameFlags.flagList.get(FlagEnum.FIRE_STARTED)}">
    <div class="bonfire-image"></div>
</div>
</template>
<script setup lang="ts">
import { FlagEnum } from '@/enums/flagEnum';
import { useGameFlags } from '@/stores/gameFlags';

const gameFlags = useGameFlags();
</script>
<style>
.container {
    display: flex;
    padding: 40px 0;
    font-family: 'Squarebit';
    justify-content: center;
    align-items:flex-start;
    height: 100%;
    transition: background-color 2s ease;
}

.bonfire-image {
    background-color: rgb(25,25,25);
    width:80%;
    max-width: 700px;
    height: 300px;
    border-radius: 35px;
}

.fire {
    background-color: rgb(14, 14, 14);
}
</style>