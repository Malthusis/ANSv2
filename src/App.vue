<template>
  <div class="background">
    <button class="fire-button" v-if="!gameFlags.flagList.get(FlagEnum.FIRE_STARTED)" @click="startFire()">Start a fire.</button>
    <div class="top-bar" :class="{hidden: !gameFlags.flagList.get(FlagEnum.FIRE_STARTED)}">
        <span>???,??? AD</span>
        <span>SCAVENGER OS v0.01</span>
        <span>{{ utils.getDisplayTime }}</span>
    </div>
    <div class="game-container" :class="{hidden: !gameFlags.flagList.get(FlagEnum.FIRE_STARTED)}">
      <div class="resources" >
        <Resources></Resources>
      </div>
      <div class="bonfire" >
        <Bonfire></Bonfire>
      </div>
      <div class="logs">
        <Logger></Logger>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logger from './components/Logger.vue';
import Resources from './components/Resources.vue';
import Bonfire from './components/Bonfire.vue'
import { useUtils } from './stores/utilsStore';
import { useGameFlags } from './stores/gameFlags';
import { FlagEnum } from './enums/flagEnum';
import { useLogs } from './stores/logStore';

const utils = useUtils();
const gameFlags = useGameFlags();
const logs = useLogs();
utils.startClock();


function startFire() {
    gameFlags.setFlag(FlagEnum.FIRE_STARTED, true)
    setTimeout(function() {
        logs.pushLog("The fire crackles as it comes to life.")
    }, 2000)
}


</script>

<style>
.top-bar {
    font-family: 'Gelatin';
    min-height: 27px;
    background-color: black;
    border-bottom: 3px ridge white;
    color: white;
    font-size: 16pt;
    display:flex;
    justify-content: space-between;
    gap:10px;
    padding: 0 5px;
}

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }



  .game-container {
    display: flex;
    align-items: stretch;
    height: calc(100% - 30px);
    transition: opacity 2s ease;
  }

  resources {
    height: 100%
  }

  border {
    height: 100%;
  }

  bonfire {
    height: 100%;
    width: auto;
  }

  .resources {
    border-right: 5px ridge #ffc107;
  }

  .bonfire {
    display: flex;
    flex-flow: column;
    width: 100vw;
    min-width: 400px;
    height: 100%;
  }

  .logs {
    display: flex;
    flex-flow: column;
    width: 240px;
    min-width: 240px;
    padding: 40px 10px 10px;
    border-left: 3px ridge #ffc107;
    background-color: black;
  }

  .hidden {
    opacity: 0;
  }

  .fire-button {
    position:absolute;
    z-index: 2;
    opacity: 1 !important;
    top: calc(50% - 37px);
    left: 45%;
}
</style>
