import { defineStore } from "pinia";

export const useConfigStore = defineStore({
  id: "config",
  state: () => initConfig(),
  getters: {
    config: (state) => state,
  },
  actions: {
    update(config: Config) {
      this.isVsPlayer = config.isVsPlayer;
      this.isXMarkSelected = config.isXMarkSelected;
    },
  },
});

const initConfig = (): Config => {
  return {
    isXMarkSelected: true,
    isVsPlayer: true,
  };
};

export interface Config {
  isXMarkSelected: boolean;
  isVsPlayer: boolean;
}
