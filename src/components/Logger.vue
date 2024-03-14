<template>
<div class="console">
    <div v-for="(log) of logs.logQueue" class="log">
        <span>{{ log }}</span>
    </div>
</div>
</template>
<script setup lang="ts">
import { useLogs } from '@/stores/logStore';


const logs = useLogs()
</script>
<style>
.log {
  font-family: 'Gelatin';
  font-size: 24px;
  margin: 10px 0;
  color: white;
  animation: textShadow 1.6s infinite;
  pointer-events: none;
}
</style>