<script setup lang="ts">
</script>

<template>
  <div class="centered-column start-menu">
    <h1 class="start-menu__title">TIC TAC TOE</h1>
    <div class="container centered-column start-menu__mark-selector">
      <div class="start-menu__game_mode">
        <p>PLAYER VS.</p>
        <button>PLAYER</button>
        <button>BOT</button>
      </div>
      <h2>Pick player 1's mark</h2>
      <div class="centered-row mark-selector__toggler">
        <button class="container start-menu__button start-menu__x-button"><span>x</span></button>
        <button class="container start-menu__button start-menu__o-button">o</button>
      </div>
      <p>remember: x goes first</p>
      <button class="container start-menu__start-button">START!</button>
    </div>
  </div>
</template>
<style scoped>
.start-menu__game_mode {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 8px;
  justify-content: center;
  align-content: center;
}


.start-menu__game_mode p {
  grid-column: 1 / 3;
  margin: 0;
  justify-content: center;
  text-align: center;
  padding: 4px;
  font-weight: bold;
}

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

.start-menu__game_mode button {
  padding: 4px 8px;
  width: 100%;
  border: none;
  color: var(--white-color);
  font-weight: bold;
}

.start-menu__game_mode *:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.start-menu__game_mode *:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}



.start-menu__game_mode *:not(:nth-child(2)) {
  background-color: var(--green-color);
  box-shadow: 0px 8px var(--dark-green-color);

}

.start-menu__game_mode *:nth-child(2) {
  background-color: var(--blue-color);
  box-shadow: 0px 8px var(--dark-blue-color);
  transition: all 0.2s;
}

.start-menu__game_mode *:nth-child(3) {
  transition: all 0.2s;
}

.start-menu__game_mode *:nth-child(2):hover {
  transform: translateY(8px);
  box-shadow: 0px 0px var(--dark-blue-color);
}

.start-menu__game_mode *:nth-child(3):hover {
  transform: translateY(8px);
  box-shadow: 0px 0px var(--dark-green-color);
}

.start-menu__button {
  font-weight: bolder;
  font-size: 28px;
  padding: 4px;
  transition: all 0.2s;
}

.start-menu__x-button {
  background-color: var(--blue-color);
  color: var(--white-color);
  box-shadow: 0px 8px var(--dark-blue-color);
}

.start-menu__x-button:hover {
  box-shadow: 0px 0px var(--dark-blue-color);
  transform: translateY(8px);
}

.start-menu__o-button {
  background-color: var(--green-color);
  color: var(--white-color);
  box-shadow: 0px 8px var(--dark-green-color);
}

.start-menu__o-button:hover {
  box-shadow: 0px 0px var(--dark-green-color);
  transform: translateY(8px);
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
