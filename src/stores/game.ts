import { defineStore } from "pinia";

export const useGameStore = defineStore({
  id: "game",
  state: () =>
  ({
    tiles: [
      { id: 0, selectedBy: null },
      { id: 1, selectedBy: null },
      { id: 2, selectedBy: null },
      { id: 3, selectedBy: null },
      { id: 4, selectedBy: null },
      { id: 5, selectedBy: null },
      { id: 6, selectedBy: null },
      { id: 7, selectedBy: null },
      { id: 8, selectedBy: null },
    ],
    playerTurn: null
  } as Game),
  getters: {
    someoneWon: (state) => {
      const xTileIds = state.tiles
        .filter((tile) => tile.selectedBy === "X")
        .map((tile) => tile.id);
      const oTileIds = state.tiles
        .filter((tile) => tile.selectedBy === "O")
        .map((tile) => tile.id);
      if (wonValidator(xTileIds)) {
        return "X";
      }
      if (wonValidator(oTileIds)) {
        return "O";
      }
    },
    markTurn: (state) => state.playerTurn ? "X" : "O"
  },
  actions: {
    updateTiles(tile: GameTile) {
      if (!tile.selectedBy && !this.someoneWon) {
        tile.selectedBy = this.markTurn;
        const index = this.tiles.findIndex((t) => t.id === tile.id);
        this.tiles[index] = tile;
        this.playerTurn = !this.playerTurn;
      }
    },
    initPlayerTurn(isXMark: Boolean) {
      this.playerTurn = isXMark;
    },
  },
});

const wonValidator = (tilesId: number[]) => {
  return winConditions.reduce((acc, winCondition) => {
    return tilesId.toString() ===
      [...new Set([...tilesId, ...winCondition])].toString()
      ? true
      : acc;
  }, false);
};

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type Game = {
  tiles: GameTile[];
  playerTurn: Boolean | null;
};

export interface GameTile {
  id: number;
  selectedBy: string | null;
}
