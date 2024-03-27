<template>
<div v-show="active === Panel.CRAFT" class="craft-container">
    <Tabs></Tabs>
    <div class="craft-windowbox">
        <div class="recipe-box">
            <span class="craft-title" >Recipes</span>
            <div class="recipes">
                <span v-for="(recipe) of itemdb.getAvailableRecipes" class="recipe-line" @click="setActiveRecipe(recipe.recipeId)" :class="{selected: activeRecipe?.recipeId === recipe.recipeId}">
                    {{ recipe.name + " - " + recipe.description }}
                </span>
            </div>
        </div>
        
        <div class="items-box">
            <div class="item-display">
                <template v-if="!!activeRecipe && !!activeRecipeItem">
                    <span class="item-title">{{ activeRecipeItem.name }}</span>
                    <span class="item-flavor">{{ activeRecipeItem.flavor }}</span>
                    <span class="item-stats">{{ activeRecipeItem.effectDescription }}</span>
                    <div class="ingredients-box">
                        <div class="ingredients">
                            <span>Ingredients needed:</span>
                            <span v-for="(ingredient) of activeRecipe.ingredients">{{ "- " + dispIngredient(ingredient) }}</span>
                        </div>
                        <button @click="setupStorage()">Craft</button>
                        <button @click="clearStorage()">Clear</button>
                    </div>
                </template>  
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
import { useItemDatabase } from '@/stores/itemDatabase';
import { ref } from 'vue';
import { displayIngredient, type Item, type Recipe, type Ingredient } from '@/interfaces';

const props = defineProps({
    active: String
})

const storage = useStorage()
const itemdb = useItemDatabase()
const activeRecipe = ref<Recipe>()
const activeRecipeItem = ref<Item>()

function setActiveRecipe(recipeId: number) {
    const recipe = itemdb.recipeList.get(recipeId);
    activeRecipe.value = recipe
    activeRecipeItem.value = itemdb.itemList.get(recipe?.itemId || 0)
}


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

function dispIngredient(ingredient: Ingredient): string {
    // debugger;
    if(ingredient.isBasic){
        return displayIngredient(ingredient)
    } else {
        return displayIngredient(ingredient, itemdb.itemList.get(ingredient.itemId))
    }  
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
            display:flex;
            flex-direction: column;
            margin: 4px 0;
            span {
                font-size: 18px;
                padding: 2px 10px;
            }  
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
        cursor: pointer;
    }

    .recipe-line:hover{
        color: #ffc107;
    }

    .selected {
        color: #ffc107;
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