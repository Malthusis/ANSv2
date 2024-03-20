<template>
<div class="resources-box">
    <span>STABILITY 10/10</span>
    <span>ENERGY 40/40</span>
    <span>STATUS:  <span style="color:green;">OK!</span><br><br> </span>
    <span>RAW MATERIALS:</span>
    <span v-for="(resource) in resources.resources.entries()">
        {{ displayResource(resource[0], resource[1]) }}
    </span>
    <span></span>
  
</div> 
</template>

<script setup lang="ts">
import { Resource } from '@/enums';
import { useResources } from '@/stores/resourceStore';


const resources = useResources()

function displayResource(type: Resource, number: number) {
    return resourceDisplayName(type) + ": " + number;
}

function resourceDisplayName(type:Resource) {
    switch(type) {
        case Resource.CHEMICALS:
            return "CHEMICALS";
        case Resource.CIRCUITS:
            return "CIRCUITS";
        case Resource.FABRIC_STRIP:
            return "F. STRIP";
        case Resource.SCRAP_METAL:
            return "S. METAL";
    }
}

</script>

<style scoped>
.resources-box {
  font-size: 22px;
  color: white;
  display: flex;
  flex-flow: column;
  width: 140px;
  min-width: 140px;
  padding: 40px 10px 10px;
  font-family: 'GelatinCaps';
  animation: textShadow 1.6s infinite;
  height: calc(100% - 50px); 
}

</style>