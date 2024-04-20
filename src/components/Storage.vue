<template>
<div class="inventory-box">
    <div class="title-bar"><span>storage</span><span>{{ storage.storage.length + "/" + storage.storageCap }}</span></div>
    <div class="inventory">
        <span @click="$emit('chosen-item', {idx: idx, type: StorageType.STORAGE})" v-for="(item, idx) of storage.storage" class="entry">{{ item.name }}</span>
    </div>
</div>
</template>

<script setup lang="ts">
import { useStorage } from '@/stores/storage';
import { StorageType } from '@/enums';

const emits = defineEmits(['chosen-item'])
const storage = useStorage()


</script>

<style scoped>
.inventory-box {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    background-color: #112806;
}

.inventory {
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

.entry:hover{
    cursor: pointer;
    color:#ffc107;
    animation: hoverSelect 2s linear infinite;
}
</style>