<template>
<div class="resources-box">
    <span>STABILITY 10/10</span>
    <span>ENERGY 40/40</span>
    <span>STATUS:  <span style="color:green;">OK!</span><br><br></span>
    <template v-if="gameFlags.flagList.get(FlagEnum.MATERIALS_ACQUIRED)"><span>RAW MATERIALS:</span>
    <span v-for="(resource) in resources.resources.entries()" :class="{full: resource[1] >= resources.resourceCap}">
        {{ displayResource(resource[0], resource[1]) }}
    </span></template>
    <span></span>
</div> 
</template>

<script setup lang="ts">
import { FlagEnum, Resource, resourceDisplayName } from '@/enums';
import { useGameFlags } from '@/stores/gameFlags';
import { useResources } from '@/stores/resourceStore';


const resources = useResources()
const gameFlags = useGameFlags()

function displayResource(type: Resource, number: number) {
    return resourceDisplayName(type) + ": " + number;
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

.full {
    color: #ffc107;
}

</style>