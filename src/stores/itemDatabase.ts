import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ItemType } from '@/enums'
import type { Item } from '@/interfaces'

export const useItemDatabase = defineStore('itemDatabase', () => {
    const itemList = new Map<number, Item>([
        [1, {
            id: 1,
            type: ItemType.WEAPON,
            name: "rusted shiv",
            flavor: "A dirty, sharp spike of metal with strips of fabric wrapped around to form a handle."
        }],
        [2, {
            id: 2,
            type: ItemType.OUTFIT,
            name: "scav's bindings",
            flavor: "A set of strips of fabric woven together to form a flexible, breathable garb that adheres to you. An outfit is needed to help keep a coherent, stable form."
        }],
        [3, {
            id: 3,
            type: ItemType.LIMB,
            name: "bandaged bracer",
            flavor: "Torn strips of fabric wrapped around each other in layers to form a thick covering for a limb. Offers some protection against the sharp metal of the nearby junkyard."
        }],
        [4, {
            id: 4,
            type: ItemType.ITEM,
            name: "makeshift shovel",
            flavor: "A flat piece of metal attached to a short pole by weak fabric. Wouldn't last through any heavy work."
        }],
        [5, {
            id: 5,
            type: ItemType.CATALYST,
            name: "cornstarch",
            flavor: "A thickening agent used in sauces and soups. Helps make your form slightly more solid."
        }],
    ])

    return { 
        //State
        itemList
    }
})

