<template>
  <div class="container win-modal">
    <p>{{ gameStore.someoneWon }} win!</p>

    <button class="container back-to-menu-button" v-on:click="returnToTitle">
      Back to menu
    </button>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from "@/stores/game";
import { useConfigStore } from "@/stores/config";
import { useRouter } from "vue-router";

const gameStore = useGameStore();
const configStore = useConfigStore();
const router = useRouter();
const returnToTitle = () => {
  configStore.$reset();
  gameStore.$reset();
  router.push({ path: "/" });
};
</script>
<style scoped>
.win-modal {
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--yellow-color);
  color: var(--black-color);
  box-shadow: 0px 8px var(--dark-yellow-color);
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: bolder;
  padding-bottom: 36px;
}

.back-to-menu-button {
  font-weight: bolder;
  font-size: 28px;
  transition: all 0.2s;
  border: none;
  background-color: var(--blue-color);
  color: var(--white-color);
  box-shadow: 0px 8px var(--dark-blue-color);
}

.back-to-menu-button:hover {
  box-shadow: 0px 0px var(--dark-blue-color);
  transform: translateY(8px);
  color: var(--white-color);
}
</style>
