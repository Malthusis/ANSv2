<template>
<div v-show="active === Panel.SELF" class="self-container">
    <Tabs></Tabs>
    <div class="self-box">
        <div class="status">
            <span>Status printout...</span>
            <span>Current Status: OK!</span>
            <span>--- Equipment ---</span>
            <span class="equip-line">Outfit: scav's bindings</span>
            <span>Limb: crude shiv</span>
            <span>Limb: </span>
            <span>Core:</span>
            <span>Catalyst:</span>
            <span>--- Stats ---</span>
            <div class="stats">
                <span class="stat">STABILITY: 10/10</span>
                <span class="stat">ENERGY: 40/40</span>
                <span class="stat">ATK: 5</span>
                <span class="stat">DEF: 2</span>
            </div>
        </div>
        <div class="items">
            <Bag></Bag>
            <Storage></Storage>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { Panel } from '@/enums';
import Tabs from '@/components/Tabs.vue';
import Storage from './Storage.vue'
import Bag from './Bag.vue'
const props = defineProps({
    active: String
})
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
    height: 100%;
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

        .stats {
            display:flex;
            /* flex-basis: 30%; */
            justify-content: space-evenly;
            /* gap: 20px; */
            width: 100%;
            flex-wrap: wrap;

            /* .stat {
                flex-grow: 1;
            } */
        }
    }
    .items {
        flex-grow: 1;
        height: 100%;
        background-color:rgb(60, 90, 15);
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

@keyframes hoverSelect {
    0%, 100% {
        background-color: rgba(255, 255, 255, 0.2)
    }

    50% {
        background-color: rgba(255, 255, 255, 0.6)
    }
}

</style>