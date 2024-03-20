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
<style scoped>
.log {
  font-family: 'Squarebit2x';
  font-size: 18px;
  margin: 10px 0;
  color: #878e93;
  animation: textShadow 1.6s infinite;
  pointer-events: none;
}
</style>