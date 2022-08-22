<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
html {
  --blue-color: rgb(33, 90, 142);
  --dark-blue-color: rgb(22, 61, 97);
  --green-color: rgb(58, 180, 157);
  --dark-green-color: rgb(41, 126, 110);
  --yellow-color: rgb(235, 228, 137);
  --dark-yellow-color: rgb(182, 176, 89);
  --light-pink-color: rgb(252, 119, 177);
  --pink-color: rgb(217, 43, 142);
  --white-color: white;
  --black-color: black;
  background-color: var(--blue-color);
  font-family: "Rubik", sans-serif;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  border-radius: 8px;
  padding: 16px;
}

.centered-row {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-column {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
