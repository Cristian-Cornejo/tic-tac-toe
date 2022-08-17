<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import GameMode from '../components/GameMode.vue';
import MarkSelector from '../components/MarkSelector.vue';
import BoardLayout from '../components/shared/BoardLayout.vue';
import { useConfigStore } from "@/stores/config";
import type { Config } from "@/stores/config";
const router = useRouter();

const isXMarkSelected = ref(true);
const isVsPlayer = ref(true);

const start = () => {
  const configStore = useConfigStore();
  const config: Config = { isVsPlayer: isVsPlayer.value, isXMarkSelected: isXMarkSelected.value };
  configStore.update(config);
  router.push({ path: '/game' });
}

</script>

<template>
  <div class="centered-column">
    <h1 class="start-menu__title">TIC TAC TOE</h1>
    <BoardLayout>
      <div class="centered-column start-menu__wrapper">
        <GameMode v-model:isVsPlayer="isVsPlayer" />
        <h2>Pick player 1's mark</h2>
        <MarkSelector v-model:isXMarkSelected="isXMarkSelected" />
        <p>remember: x goes first</p>
        <button type="button" class="container start-menu__start-button" @click="start">START!</button>
      </div>
    </BoardLayout>
  </div>
</template>

<style scoped>
.start-menu__start-button {
  border: none;
  font-weight: bolder;
  font-size: 28px;
  padding: 4px 12px;
  transition: all 0.2s;
  background-color: var(--green-color);
  color: var(--white-color);
  box-shadow: 0px 8px var(--dark-green-color);
}

.start-menu__start-button:hover {
  box-shadow: 0px 0px var(--dark-green-color);
  transform: translateY(8px);
}

.start-menu__title {
  font-size: 2rem;
  font-weight: 700;
  text-align: right;
  color: var(--white-color);
}

.start-menu__wrapper {
  padding: 32px 24px;
}

.start-menu__wrapper h2 {
  color: var(--yellow-color);
}

.start-menu__wrapper p {
  color: var(--dark-blue-color);
}
</style>
