<template>
<div class="bag-box">
    <div class="title-bar"><span>bag</span><span>{{ storage.inventory.length + "/" + storage.inventoryCap }}</span></div>
    <div class="bag">
        <span v-for="(item) of storage.inventory" class="entry">{{ item.name }}</span>
    </div>
</div>
</template>

<script setup lang="ts">
import { useStorage } from '@/stores/storage';

const storage = useStorage()
</script>

<style scoped>
.bag-box {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    background-color: rgb(8, 6, 40);
}

.bag {
    min-height: 100px;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 4px 8px;
    .entry {
        width: 160px;
        font-size: 24px;
    }
}

.title-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 4px;
    border-bottom: 3px white solid;
    span {
        font-size: 24px;
    }
}
</style>