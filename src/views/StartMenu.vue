<script setup lang="ts">
import GameMode from '../components/GameMode.vue';
import MarkSelector from '../components/MarkSelector.vue';
</script>

<template>
  <div class="centered-column">
    <h1 class="start-menu__title">TIC TAC TOE</h1>
    <div class="container centered-column start-menu__wrapper">
      <GameMode />
      <h2>Pick player 1's mark</h2>
      <MarkSelector />
      <p>remember: x goes first</p>
      <button class="container start-menu__start-button">START!</button>
    </div>
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
  background-color: var(--light-pink-color);
  box-shadow: 0px 8px var(--pink-color);
  padding: 32px 24px;
}

.start-menu__wrapper h2 {
  color: var(--yellow-color);
}

.start-menu__wrapper p {
  color: var(--dark-blue-color);
}
</style>
