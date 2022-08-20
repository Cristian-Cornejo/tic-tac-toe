<script setup lang="ts">
const props = defineProps<{ selectedBy: string | null }>();
</script>

<template>
  <button class="game-tile" v-bind:class="{ pressed: !!props.selectedBy }">
    {{ props.selectedBy }}
  </button>
</template>

<style scoped>
.game-tile {
  transform: translateY(-8px);
  width: 72px;
  height: 72px;
  border: none;
  color: var(--white-color);
  font-weight: bolder;
  font-size: 28px;
  transition: all 0.2s;
}

.game-tile:nth-child(1) {
  border-top-left-radius: 8px;
}

.game-tile:nth-child(3) {
  border-top-right-radius: 8px;
}

.game-tile:nth-child(7) {
  border-bottom-left-radius: 8px;
}

.game-tile:nth-child(9) {
  border-bottom-right-radius: 8px;
}

.game-tile:nth-child(2n + 1):hover {
  transform: translateY(0px);
  box-shadow: 0px 0px var(--dark-green-color);
}

.game-tile:nth-child(2n):hover {
  transform: translateY(0px);
  box-shadow: 0px 0px var(--dark-blue-color);
}

.game-tile:nth-child(2n + 1).pressed {
  transform: translateY(0px);
  filter: brightness(0.85);
  box-shadow: 0px 0px var(--dark-green-color);
}

.game-tile:nth-child(2n).pressed {
  transform: translateY(0px);
  filter: brightness(0.85);
  box-shadow: 0px 0px var(--dark-blue-color);
}

.game-tile:nth-child(2n + 1) {
  background-color: var(--green-color);
  box-shadow: 0px 8px var(--dark-green-color);
}

.game-tile:nth-child(2n) {
  background-color: var(--blue-color);
  box-shadow: 0px 8px var(--dark-blue-color);
}
</style>
