<template>
    <div class="animation-box">
        <canvas></canvas>
    </div>
</template>
<script setup lang="ts">
import { Sprite } from '@/animation';
import type { Position } from '@/animation';
import { onMounted } from 'vue';

const player = new Sprite({
    x: 0,
    y: 0
} as Position, 34, 68)

onMounted( () => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    canvas.height = 250;
    canvas.width = 800;
    const c = canvas.getContext('2d') as CanvasRenderingContext2D;

    c.fillStyle = 'brown';
    c.fillRect(0,0, canvas.width, canvas.height)
    player.draw(c)
})





</script>

