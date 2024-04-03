import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ItemType, Resource } from '@/enums'
import type { Item } from '@/interfaces'
import { useItemDatabase } from './itemDatabase'

export const useStorage = defineStore('storage', () => {
    //-- STATE --
    const resources = ref<Map<Resource, number>>(new Map<Resource, number>([]))
    const resourceCap = ref<number>(5)
    const inventory = ref<Item[]>([])
    const inventoryCap = ref<number>(4)
    const storage = ref<Item[]>([])
    const storageCap = ref<number>(5)

    function gainResource(amnt:number, type: Resource){
        const resource = resources.value.get(type) || 0;
        if(resource + amnt <= resourceCap.value) {
            resources.value.set(type, (resource || 0) + amnt);
        } else {
            resources.value.set(type, resourceCap.value);
        }    
    }

    function gainStorageItem(itemId: number): boolean {
        const itemDB = useItemDatabase()

        const item = itemDB.itemList.get(itemId)

        if (!!item && storage.value.length < storageCap.value) {
            storage.value.push(item)
            return true;
        } else if (!!item && inventory.value.length < inventoryCap.value) {
            inventory.value.push(item)
            return true;
        }
        return false;
    }

    function spendItem(itemId: number): boolean {
        const idx = storage.value.findIndex((item) => item.id === itemId)
        if(idx !== -1){
            storage.value.splice(idx, 1);
            return true;
        } else {
            return false;
        }
    }

    function clearStorage() {
        storage.value = []
    }

    return { 
        //State
        resources, resourceCap, inventory, inventoryCap, storage, storageCap,
        //Functions
        gainResource, gainStorageItem, clearStorage, spendItem
    }
})