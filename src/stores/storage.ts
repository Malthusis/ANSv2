import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ItemType, Resource } from '@/enums'
import type { Item } from '@/interfaces'

export const useStorage = defineStore('storage', () => {
    //-- STATE --
    const resources = ref<Map<Resource, number>>(new Map<Resource, number>([]))
    const resourceCap = ref<number>(5)
    const inventory = ref<Item[]>([])
    const inventoryCap = ref<number>(4)
    const storage = ref<Item[]>([])
    const storageCap = ref<number>(10)

    function gainResource(amnt:number, type: Resource){
        const resource = resources.value.get(type) || 0;
        if(resource + amnt <= resourceCap.value) {
            resources.value.set(type, (resource || 0) + amnt);
        } else {
            resources.value.set(type, resourceCap.value);
        }    
    }

    function gainStorageItem(itemId: number): boolean {
        const dummyItem = {
            id: 99,
            type: ItemType.ITEM,
            name: "dummy item",
            flavor: "Hello World!"
        }

        if (storage.value.length < storageCap.value) {
            storage.value.push(dummyItem)
            return true;
        } else if (inventory.value.length < inventoryCap.value) {
            inventory.value.push(dummyItem)
            return true;
        }
        return false;
    }

    return { 
        //State
        resources, resourceCap, inventory, inventoryCap, storage, storageCap,
        //Functions
        gainResource, gainStorageItem 
    }
})