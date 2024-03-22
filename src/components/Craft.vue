<template>
<div v-show="active === Panel.CRAFT" class="craft-container">
    <Tabs></Tabs>
    <div class="craft-windowbox">
        <div class="recipe-box">
            <span class="craft-title" style="color:white;">Recipes</span>
            <div class="recipes">
                <span class="recipe-line">rusted blade - weapon - 5 ATK, +2 HIT</span>
                <span class="recipe-line">plastic bag - storage - 5 STORAGE</span>
                <span class="recipe-line">scavenger's bindings - outfit - 5 DEF +5 STAB</span>
            </div>
        </div>
        
        <div class="item-display"></div>
    </div>
</div>

</template>

<script setup lang="ts">
import Tabs from '@/components/Tabs.vue';
import { FlagEnum, Panel } from '@/enums';

const props = defineProps({
    active: String
})
</script>

<style scoped>
.craft-title {
    color: white;
    font-size: 26px;
}

.craft-container {
    height:100%;
    background-color: rgb(15, 15, 15);
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
}

.craft-windowbox {
    display: flex;
    height: 100%;
    width: 100%;
    margin-bottom: 20px;
}

.item-display {
    min-width: 200px;
    border: 3px solid white;
    background-color: rgb(34, 9, 9);
    flex-grow: 1;
    border-radius: 2px;
}

.recipes {
    height: 80%;
    min-width: 350px;
    background-color: grey;
    border: 3px solid white;
    border-radius: 2px;
    padding: 0 4px;
    display:flex;
    flex-direction: column;
    flex-grow: 1;

    .recipe-line {
        color: white;
        font-size:20px;
    }
}

.recipe-box {
    display:flex;
    flex-direction:column;
}

.inventory {
    height: 80%;
    width: 300px;
    background-color: azure
}
</style>