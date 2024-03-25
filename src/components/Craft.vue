<template>
<div v-show="active === Panel.CRAFT" class="craft-container">
    <Tabs></Tabs>
    <div class="craft-windowbox">
        <div class="recipe-box">
            <span class="craft-title" >Recipes</span>
            <div class="recipes">
                <!-- <span v-for="(recipe) of itemdb" class="recipe-line">rusted shiv - weapon - 5 ATK, +2 HIT</span> -->
                <span class="recipe-line">rusted shiv - weapon - 5 ATK, +2 HIT</span>
                <span class="recipe-line">plastic bag - storage - 5 STORAGE</span>
                <span class="recipe-line">scavenger's bindings - outfit - 5 DEF +5 STAB, +20 HIT</span>
            </div>
        </div>
        
        <div class="items-box">
            <div class="item-display">
                <span class="item-title">Rusted Shiv</span>
                <span class="item-flavor">A dirty, sharp spike of metal with strips of fabric wrapped around to form a handle.</span>
                <span class="item-stats">Weapon: melee, 5 ATK.</span>
                <div class="ingredients-box">
                    <span class="ingredients">Ingredients needed: <br>- 3 metal scraps<br>- 2 fabric strips</span>
                    <button @click="setupStorage()">Craft</button>
                    <button @click="clearStorage()">Clear</button>
                </div>    
            </div>
            <Storage></Storage>
        </div>
        
    </div>
</div>

</template>

<script setup lang="ts">
import Tabs from '@/components/Tabs.vue';
import { Panel } from '@/enums';
import { useStorage } from '@/stores/storage';
import Storage from './Storage.vue'

const props = defineProps({
    active: String
})

const storage = useStorage()
// const itemdb = useItemDB();


function setupStorage() {
    storage.gainStorageItem(1)
    // storage.gainStorageItem(2)
    // storage.gainStorageItem(3)
    // storage.gainStorageItem(4)
    // storage.gainStorageItem(5)
}

function clearStorage() {
    storage.clearStorage()
}
</script>

<style scoped>


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

.items-box {
    display:flex;
    flex-direction: column;
    width: 100%;
}



.item-display {
    /* padding: 8px 10px; */
    min-width: 200px;
    border: 3px solid rgb(170, 170, 170);
    background-color: rgb(34, 9, 9);
    flex-grow: 1;
    border-radius: 2px;
    display:flex;
    flex-direction: column;
    font-family: 'Squarebit2x';
    span {
        padding: 6px 10px;
    }
    .item-title {
        font-size: 24px;
        border-bottom: 2px solid white;
    }
    .item-flavor {
        font-size: 18px;
        flex-grow: 1;
    }
    .item-stats {
        font-size: 18px;
        flex-grow: 1;
    }
    .ingredients-box {
        border-top: 2px solid white;
        display:flex;
        align-items: center;
        justify-content:space-between;
        .ingredients { 
            font-size: 18px;
        }
    }  
}

.recipes {
    height: 80%;
    min-width: 350px;
    max-width: 400px;
    background-color: grey;
    border: 3px solid rgb(170, 170, 170);
    border-radius: 2px;
    
    display:flex;
    flex-direction: column;
    flex-grow: 1;

    .recipe-line {
        font-size:22px;
        border-bottom: 2px solid rgb(170, 170, 170);
        padding: 0 4px;
    }
}

.recipe-box {
    display:flex;
    flex-direction:column;
    .craft-title {
        font-size: 26px;
    }
}
</style>