import { create } from "zustand";

type BoardSide = "white" | "black";

type SettingsStore = {
  boardSide: BoardSide;
  showSquareIndices: boolean;

  toggleBoardSide: (value?: BoardSide) => void;
  toggleSquareIndices: (value?: boolean) => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  boardSide: "white",
  showSquareIndices: true,

  toggleBoardSide: (value?: BoardSide) =>
    set((state) => ({
      boardSide: value !== undefined ? value : state.boardSide === "white" ? "black" : "white",
    })),
  toggleSquareIndices: (value?: boolean) =>
    set((state) => ({ showSquareIndices: value !== undefined ? value : !state.showSquareIndices })),
}));
