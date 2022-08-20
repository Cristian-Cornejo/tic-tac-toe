<script setup lang="ts">
import BoardTile from "../components/BoardTile.vue";
import BoardLayout from "../components/shared/BoardLayout.vue";
import { useConfigStore } from "@/stores/config";
import { useGameStore, type GameTile } from "@/stores/game";

const configStore = useConfigStore();
const gameStore = useGameStore();
gameStore.initPlayerTurn(configStore.isXMarkSelected);
const onClickTile = (tile: GameTile) => gameStore.updateTiles(tile);

</script>

<template>
  <div class="game-view">
    <h2>Player {{ gameStore.playerTurn ? 1 : 2 }} turn</h2>
    <BoardLayout>
      <div class="container game-board">
        <BoardTile :selectedBy="tile.selectedBy" v-for="tile in gameStore.tiles" :key="tile.id"
          @click="onClickTile(tile)">
        </BoardTile>
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
