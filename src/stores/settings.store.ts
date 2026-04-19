import { create } from "zustand";

export type BoardSide = "white" | "black";

export type Language = "fr" | "en";

export type SettingsStore = {
  boardSide: BoardSide;
  language: Language;
  showSquareIndices: boolean;

  setLanguage: (language: Language) => void;
  toggleBoardSide: (value?: BoardSide) => void;
  toggleSquareIndices: (value?: boolean) => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  boardSide: "white",
  language: "fr",
  showSquareIndices: true,

  setLanguage: (language: Language) => set(() => ({ language })),
  toggleBoardSide: (value?: BoardSide) =>
    set((state) => ({
      boardSide: value !== undefined ? value : state.boardSide === "white" ? "black" : "white",
    })),
  toggleSquareIndices: (value?: boolean) =>
    set((state) => ({ showSquareIndices: value !== undefined ? value : !state.showSquareIndices })),
}));
