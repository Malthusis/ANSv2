import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { ItemType, Resource } from '@/enums'
import type { Item, Recipe } from '@/interfaces'

export const useItemDatabase = defineStore('itemDatabase', () => {
    const itemList = new Map<number, Item>([
        [1, {
            id: 1,
            type: ItemType.WEAPON,
            name: "rusted shiv",
            flavor: "A dirty, sharp spike of metal with strips of fabric wrapped around to form a handle.",
            effectDescription: "weapon - 5 ATK"
        }],
        [2, {
            id: 2,
            type: ItemType.OUTFIT,
            name: "scav's bindings",
            flavor: "A set of strips of fabric woven together to form a flexible, breathable garb that adheres to you. An outfit is needed to help keep a coherent, stable form.",
            effectDescription: "outfit - 5 DEF, +5 STAB"
        }],
        [3, {
            id: 3,
            type: ItemType.LIMB,
            name: "bandaged bracer",
            flavor: "Torn strips of fabric wrapped around each other in layers to form a thick covering for a limb. Offers some protection against the sharp metal of the nearby junkyard.",
            effectDescription: "limb - 2 DEF"
        }],
        [4, {
            id: 4,
            type: ItemType.ITEM,
            name: "makeshift shovel",
            flavor: "A flat piece of metal attached to a short pole by weak fabric. Wouldn't last through any heavy work.",
            effectDescription: "item"
        }],
        [5, {
            id: 5,
            type: ItemType.CATALYST,
            name: "cornstarch",
            flavor: "A thickening agent used in sauces and soups. Helps make your form slightly more solid.",
            effectDescription: "catalyst - +2 STAB"
        }],
        [6, {
            id: 6,
            type: ItemType.ITEM,
            name: "bone glue",
            flavor: "A weak adhesive made from bones.",
            effectDescription: "item"
        }],
    ])

    const recipeList = ref<Map<number, Recipe>>(new Map<number, Recipe>([
        [1, {
            recipeId: 1,
            itemId: 1,
            name: "rusted shiv",
            description: "weapon - 5 ATK",
            unlocked: true,
            ingredients:[{itemId: Resource.SCRAP_METAL, isBasic: true, quantity: 3}, {itemId: Resource.FABRIC_STRIP, isBasic: true, quantity: 2}]
        }],
        [2, {
            recipeId: 2,
            itemId: 2,
            name: "scav's bindings",
            description: "outfit - 5 DEF, +5 STAB",
            unlocked: true,
            ingredients:[{itemId: Resource.FABRIC_STRIP, isBasic: true, quantity: 5}]
        }],
        [3, {
            recipeId: 3,
            itemId: 6,
            name: "bone glue",
            description: "item",
            unlocked: true,
            ingredients:[{itemId: Resource.SMALL_BONE, isBasic: true, quantity: 3}]
        }],
        [4, {
            recipeId: 4,
            itemId: 4,
            name: "makeshift shovel",
            description: "item",
            unlocked: true,
            ingredients:[{itemId: 6, isBasic: false, quantity: 1}, {itemId: Resource.FABRIC_STRIP, isBasic: true, quantity: 2}, {itemId: Resource.SCRAP_METAL, isBasic: true, quantity: 5}]
        }],
    ]))

    const getAvailableRecipes = computed(() => Array.from(recipeList.value.values()).filter( recipe => recipe?.unlocked))


    return { 
        //State
        itemList, recipeList, getAvailableRecipes
    }
})

