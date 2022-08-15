<script setup lang="ts">
import { ref } from 'vue';
import GameMode from '../components/GameMode.vue';
const isXMarkSelected = ref(true);

</script>

<template>
  <div class="centered-column start-menu">
    <h1 class="start-menu__title">TIC TAC TOE</h1>
    <div class="container centered-column start-menu__mark-selector">
      <GameMode />
      <h2>Pick player 1's mark</h2>
      <div class="centered-row mark-selector__toggler">
        <button class="container start-menu__button start-menu__x-button"
          v-on:click="!isXMarkSelected && (isXMarkSelected = !isXMarkSelected)"
          v-bind:class="{ pressed: isXMarkSelected }"><span>x</span></button>
        <button class="container start-menu__button start-menu__o-button"
          v-on:click="isXMarkSelected && (isXMarkSelected = !isXMarkSelected)"
          v-bind:class="{ pressed: !isXMarkSelected }">o</button>
      </div>
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

.start-menu__button {
  font-weight: bolder;
  font-size: 28px;
  padding: 4px;
  transition: all 0.2s;
}

.start-menu__x-button {
  background-color: var(--blue-color);
  color: var(--dark-blue-color);
  box-shadow: 0px 8px var(--dark-blue-color);
}

.start-menu__x-button.pressed {
  box-shadow: 0px 0px var(--dark-blue-color);
  color: var(--white-color);
  transform: translateY(8px);
}

.start-menu__o-button {
  background-color: var(--green-color);
  color: var(--dark-blue-color);
  box-shadow: 0px 8px var(--dark-green-color);
}

.start-menu__o-button.pressed {
  box-shadow: 0px 0px var(--dark-green-color);
  transform: translateY(8px);
  color: var(--white-color);
}

.mark-selector__toggler {
  width: 100%;
}

.mark-selector__toggler button {
  width: 80px;
  height: 40px;
  border: none;
}

.mark-selector__toggler button+button {
  margin-left: 8px;
}

.start-menu__title {
  font-size: 2rem;
  font-weight: 700;
  text-align: right;
  color: var(--white-color);
}

.start-menu__mark-selector {
  background-color: var(--light-pink-color);
  box-shadow: 0px 8px var(--pink-color);
  padding: 32px 24px;
}

.start-menu__mark-selector h2 {
  color: var(--yellow-color);
}

.start-menu__mark-selector p {
  color: var(--dark-blue-color);
}
</style>
