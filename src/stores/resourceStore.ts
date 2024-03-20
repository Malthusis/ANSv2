import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Resource } from '@/enums'

export const useResources = defineStore('resources', () => {
    const resources = ref<Map<Resource, number>>(new Map<Resource, number>([
        [Resource.FABRIC_STRIP, 5],
        [Resource.SCRAP_METAL, 5],
    ]))

    function gainResource(amnt:number, type: Resource){
        const resource = resources.value.get(type);
        resources.value.set(type, resource || 0 + amnt);
    }


    return { resources, gainResource }
})