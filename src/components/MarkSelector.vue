<script setup lang="ts">
const props = defineProps<{ isXMarkSelected: boolean }>();

const emit = defineEmits(["update:isXMarkSelected"]);

const oClick = () =>
  !props.isXMarkSelected &&
  emit("update:isXMarkSelected", !props.isXMarkSelected);

const xClick = () =>
  !!props.isXMarkSelected &&
  emit("update:isXMarkSelected", !props.isXMarkSelected);
</script>

<template>
  <div class="centered-row mark-selector__toggler">
    <button
      class="container mark-selector__button mark-selector__x-button"
      v-on:click="oClick"
      v-bind:class="{ pressed: props.isXMarkSelected }"
    >
      <span>x</span>
    </button>
    <button
      class="container mark-selector__button mark-selector__o-button"
      v-on:click="xClick"
      v-bind:class="{ pressed: !props.isXMarkSelected }"
    >
      o
    </button>
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

.mark-selector__toggler button + button {
  margin-left: 8px;
}

.mark-selector__button {
  font-weight: bolder;
  font-size: 28px;
  padding: 4px;
  transition: all 0.2s;
}

.mark-selector__x-button {
  background-color: var(--blue-color);
  color: var(--dark-blue-color);
  box-shadow: 0px 8px var(--dark-blue-color);
}

.mark-selector__x-button.pressed {
  box-shadow: 0px 0px var(--dark-blue-color);
  color: var(--white-color);
  transform: translateY(8px);
}

.mark-selector__o-button {
  background-color: var(--green-color);
  color: var(--dark-blue-color);
  box-shadow: 0px 8px var(--dark-green-color);
}

.mark-selector__o-button.pressed {
  box-shadow: 0px 0px var(--dark-green-color);
  transform: translateY(8px);
  color: var(--white-color);
}
</style>
