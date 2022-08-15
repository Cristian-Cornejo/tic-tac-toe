<script setup lang="ts">
import { ref } from 'vue';
const isXMarkSelected = ref(true);

</script>

<template>
    <div class="centered-row mark-selector__toggler">
        <button class="container start-menu__button start-menu__x-button"
            v-on:click="!isXMarkSelected && (isXMarkSelected = !isXMarkSelected)"
            v-bind:class="{ pressed: isXMarkSelected }"><span>x</span></button>
        <button class="container start-menu__button start-menu__o-button"
            v-on:click="isXMarkSelected && (isXMarkSelected = !isXMarkSelected)"
            v-bind:class="{ pressed: !isXMarkSelected }">o</button>
    </div>
</template>
<style scoped>
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
</style>