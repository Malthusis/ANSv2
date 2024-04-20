<template>
<div v-show="active === Panel.SELF" class="self-container">
    <Tabs></Tabs>
    <div class="self-box">
        <div class="status">
            <span>Status printout...</span>
            <span>Current Status: OK!</span>
            <span>--- Equipment ---</span>
            <span class="equip-line" @click="">Outfit: scav's bindings</span>
            <span class="equip-line" @click="">Limb: crude shiv</span>
            <span class="equip-line" @click="">Limb: </span>
            <span class="equip-line" @click="">Core:</span>
            <span class="equip-line" @click="">Catalyst:</span>
            <span>--- Stats ---</span>
            <div class="stats">
                <span class="stat">STABILITY: 10/10</span>
                <span class="stat">ENERGY: 40/40</span>
                <span class="stat">ATK: 5</span>
                <span class="stat">DEF: 2</span>
            </div>
        </div>
        <div class="items">
            <Bag @chosen-item="selectItem"></Bag>
            <Storage @chosen-item="selectItem"></Storage>
        </div>
    </div>
    <div v-if="selectedType" class="control-box">
        <span class="choice-text">{{ getChoiceText }}</span>
        <div v-if="selectedType === StorageType.BAG" class="choice-box">
            <button :disabled="storage.storageFull" @click="moveItem(StorageType.STORAGE)">To Storage</button>
            <button>Equip</button>
            <button>Trash</button>
        </div>
        <div v-else-if="selectedType === StorageType.STORAGE" class="choice-box">
            <button :disabled="storage.bagFull" @click="moveItem(StorageType.BAG)">To Bag</button>
            <button>Equip</button>
            <button>Trash</button>
        </div>  
    </div>
</div>
</template>
<script setup lang="ts">
import { Panel, StorageType } from '@/enums';
import Tabs from '@/components/Tabs.vue';
import Storage from './Storage.vue'
import Bag from './Bag.vue'
import { computed, ref } from 'vue'
import { useStorage } from '@/stores/storage';
const props = defineProps({
    active: String
})

const storage = useStorage();
const selected = ref(-1)
const selectedType = ref<StorageType>(StorageType.UNDEFINED)

//TODO: Make this work for equips too.
const getChoiceText = computed(() => {
    switch(selectedType.value) {
        case StorageType.STORAGE:
            return storage.storage[selected.value].name;
        case StorageType.BAG:
            return storage.inventory[selected.value].name;
    }
    return "N/A"
})

//TODO: clean up.
function selectItem(emit: any) {
    selected.value = emit.idx ;
    selectedType.value = emit.type;
}

function moveItem(target: StorageType) {
    const idx = selected.value
    const type = selectedType.value
    selectedType.value = StorageType.UNDEFINED
    selected.value = -1

    const result = storage.moveItem(idx, type, target);
    if (!result) { console.log('move failed.')}
}

</script>
<style scoped>

.self-container {
    height:100%;
    background-color: rgb(15, 15, 15);
    display:flex;
    flex-direction: column;
    align-items: center;
}

.self-box {
    display:flex;
    width: 100%;
    align-items: flex-start;
    .status {
        background-color:rgb(34, 3, 3);
        flex-grow: 1;
        flex-direction: column;
        align-items: center;
        font-family: 'GelatinCaps';
        display: flex;
        border: 3px solid white;
        font-size: 24px;
        height: 100%;

        .stats {
            display:flex;
            justify-content: space-evenly;
            width: 100%;
            flex-wrap: wrap;
        }
    }
    .items {
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}

.equip-line {
    padding: 0 20px;
    cursor: pointer;
}

.equip-line:hover{
    color:#ffc107;
    animation: hoverSelect 2s linear infinite;
}

.control-box {
    display:flex;
    flex-direction: column;
    height: 100px;
    width: 50%;
    background: rgb(37, 2, 22);
    border: 3px solid white;
    align-items: center;
    justify-content: space-evenly;

    .choice-box {
        display:flex;
    }

    .choice-text {
        font-size: 22px;
    }
}


</style>