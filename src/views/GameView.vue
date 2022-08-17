<script setup lang="ts">
import { ref } from 'vue'
import Tile from '../components/Tile.vue'
import BoardLayout from '../components/shared/BoardLayout.vue'
import { useConfigStore } from '@/stores/config';
import { useGameStore, type GameTile } from '@/stores/game';

const configStore = useConfigStore();
const gameStore = useGameStore();
const playerOneHasSelectX = ref(configStore.isXMarkSelected);

const onClickTile = (tile: GameTile) => {
  if (!tile.selectedBy && !gameStore.someoneWon) {
    tile.selectedBy = playerOneHasSelectX.value ? "X" : "O";
    gameStore.update(tile);
    playerOneHasSelectX.value = !playerOneHasSelectX.value;
  }
}
</script>

<template>
  <div class="game-view">
    <h2>Player 1 turn</h2>
    <BoardLayout>
      <div class="container game-board">
        <Tile :selectedBy="tile.selectedBy" v-for="tile in gameStore.tiles" :key="tile.id" @click="onClickTile(tile)">
        </Tile>
      </div>
      <div>{{ gameStore.someoneWon }}</div>
    </BoardLayout>
  </div>
</template>

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
