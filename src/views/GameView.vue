<template>
  <div class="game-view">
    <h2>Player 1 turn</h2>
    <BoardLayout>
      <div class="container game-board">
        <Tile :selectedBy="tile.selectedBy" v-for="tile in tiles" :key="tile.id"></Tile>
      </div>
    </BoardLayout>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Tile from '../components/Tile.vue'
import BoardLayout from '../components/shared/BoardLayout.vue'
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
}
</style>
