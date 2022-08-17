<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const { isVsPlayer } = defineProps<{ isVsPlayer: Boolean }>();

const localIsVsPlayer = ref(isVsPlayer);

const emit = defineEmits(['update:isVsPlayer']);

watchEffect(() => (emit('update:isVsPlayer', localIsVsPlayer.value)));

const playerButtonOnClick = () => !localIsVsPlayer.value && (localIsVsPlayer.value = !localIsVsPlayer.value)

const botButtonOnClick = () => !!localIsVsPlayer.value && (localIsVsPlayer.value = !localIsVsPlayer.value)

</script>
<template>
    <div class="game-mode">
        <p>PLAYER VS.</p>
        <button class="game-mode__vs-player-button" v-on:click="playerButtonOnClick"
            v-bind:class="{ pressed: localIsVsPlayer }">PLAYER</button>
        <button class="game-mode__vs-bot-button" v-on:click="botButtonOnClick"
            v-bind:class="{ pressed: !localIsVsPlayer }">BOT</button>
    </div>
</template>
<style scoped>
.game-mode {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 8px;
    justify-content: center;
    align-content: center;
}

.game-mode p {
    grid-column: 1 / 3;
    margin: 0;
    justify-content: center;
    text-align: center;
    padding: 4px;
    font-weight: bold;
}

.game-mode button {
    padding: 4px 8px;
    width: 100%;
    border: none;
    font-weight: bold;
}

.game-mode p {
    background-color: var(--green-color);
    box-shadow: 0px 8px var(--dark-green-color);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.game-mode__vs-player-button {
    background-color: var(--blue-color);
    box-shadow: 0px 8px var(--dark-blue-color);
    transition: all 0.2s;
}

.game-mode__vs-player-button.pressed {
    transform: translateY(8px);
    box-shadow: 0px 0px var(--dark-blue-color);
    color: var(--white-color);
}

.game-mode__vs-bot-button {
    background-color: var(--green-color);
    box-shadow: 0px 8px var(--dark-green-color);
    transition: all 0.2s;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}


.game-mode__vs-bot-button.pressed {
    transform: translateY(8px);
    box-shadow: 0px 0px var(--dark-green-color);
    color: var(--white-color);
}
</style>