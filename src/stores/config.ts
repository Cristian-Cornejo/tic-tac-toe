import { defineStore } from "pinia";

export const useConfigStore = defineStore({
  id: "config",
  state: () =>
    ({
      isXMarkSelected: true,
      isVsPlayer: true,
    } as Config),
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

export interface Config {
  isXMarkSelected: boolean;
  isVsPlayer: boolean;
}
