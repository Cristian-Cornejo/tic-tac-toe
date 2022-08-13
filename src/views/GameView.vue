<template>
  <div class="game-view">
    <h2>Player 1 turn</h2>
    <div class="container game-board">
      <button class="game-tile" v-bind:class="{ pressed: !!tile.selectedBy }" v-for="tile in tiles" :key="tile.id">{{
          tile.selectedBy
      }}</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tiles = ref([
  { id: 0, selectedBy: null },
  { id: 1, selectedBy: 'X' },
  { id: 2, selectedBy: 'O' },
  { id: 3, selectedBy: 'X' },
  { id: 4, selectedBy: 'X' },
  { id: 5, selectedBy: 'O' },
  { id: 6, selectedBy: null },
  { id: 7, selectedBy: null },
  { id: 8, selectedBy: null }
])

</script>
<style scoped>
.game-view h2 {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--light-pink-color);
  box-shadow: 0px 8px var(--pink-color);
}

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

.game-tile:nth-child(2n+1):hover {
  transform: translateY(0px);
  box-shadow: 0px 0px var(--dark-green-color);
}

.game-tile:nth-child(2n):hover {
  transform: translateY(0px);
  box-shadow: 0px 0px var(--dark-blue-color);
}

.game-tile:nth-child(2n+1).pressed {
  transform: translateY(0px);
  filter: brightness(0.85);
  box-shadow: 0px 0px var(--dark-green-color);
}

.game-tile:nth-child(2n).pressed {
  transform: translateY(0px);
  filter: brightness(0.85);
  box-shadow: 0px 0px var(--dark-blue-color);
}

.game-tile:nth-child(2n+1) {
  background-color: var(--green-color);
  box-shadow: 0px 8px var(--dark-green-color);
}

.game-tile:nth-child(2n) {
  background-color: var(--blue-color);
  box-shadow: 0px 8px var(--dark-blue-color);
}
</style>
