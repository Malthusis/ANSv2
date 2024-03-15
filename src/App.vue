<script setup lang="ts">
</script>

<template>
  <div class="background">
    <div class="top-bar">
        <span>???,??? AD</span>
        <span>SCAVENGER OS v0.01</span>
        <span>9:15 PM</span>
    </div>
    <div class="game-container">
      <div class="resources">
        <Resources></Resources>
      </div>
      <div class="bonfire">

        <Bonfire></Bonfire>
      </div>
      <div class="logs">
        <Logger></Logger>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logger from './components/logger.vue';
import Resources from './components/Resources.vue';
import Bonfire from './components/Bonfire.vue'


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
    /* background-color: black; */
  }



  .game-container {
    display: flex;
    align-items: stretch;
    height: calc(100% - 30px);
    /* background-color: #1f1f1f; */
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
      padding: 80px 10px 10px;
      width: 100vw;
      min-width: 400px;
      height: calc(100% - 90px);
  }

  .logs {
    display: flex;
    flex-flow: column;
    width: 240px;
    min-width: 240px;
    padding: 40px 10px 10px;
    border-left: 3px ridge #ffc107;
    background-color: black;
    /* height: calc(100% - 90px); */
  }
</style>
