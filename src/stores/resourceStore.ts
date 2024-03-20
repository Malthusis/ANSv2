import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Resource } from '@/enums'

export const useResources = defineStore('resources', () => {
    const resources = ref<Map<Resource, number>>(new Map<Resource, number>([]))
    const resourceCap = ref(5);

    function gainResource(amnt:number, type: Resource){
        const resource = resources.value.get(type) || 0;
        if(resource + amnt <= resourceCap.value) {
            resources.value.set(type, (resource || 0) + amnt);
        } else {
            resources.value.set(type, resourceCap.value);
        }
       
    }


    return { resources, resourceCap, gainResource }
})