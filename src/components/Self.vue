<template>
<div v-show="active === Panel.SELF" class="self-container">
    <Tabs></Tabs>
    <div class="self-box">
        <div class="equipment">
            <span>Status printout...</span>
            <span>Current Status: OK!</span>
            <span>Outfit: scav's bindings</span>
            <span>Limb: crude shiv</span>
            <span>Limb: </span>
            <span>Core:</span>
            <span>Catalyst:</span>
        </div>
        <div class="items">
            <Storage></Storage>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { Panel } from '@/enums';
import Tabs from '@/components/Tabs.vue';
import Storage from './Storage.vue'
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
    /* padding: 0 20px; */
    /* width: 100%; */
    align-items: center;
}
.self-box {
    display:flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    .equipment {
        flex-grow: 1;
        flex-direction: column;
        /* background-color: blue; */
        align-items: center;
        font-family: 'GelatinCaps';
        display: flex;
        border: 3px solid white;
        font-size: 24px
    }
    .items {
        flex-grow: 1;
        height: 100%;
        background-color:greenyellow;
    }
}

</style>