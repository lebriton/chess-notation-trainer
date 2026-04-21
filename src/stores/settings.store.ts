import type { ChessColor } from "@/types/chess.types";
import { create } from "zustand";

export type Language = "fr" | "en";

export type SettingsStore = {
  boardSide: ChessColor;
  language: Language;
  showSquareIndices: boolean;

  setLanguage: (language: Language) => void;
  toggleBoardSide: (value?: ChessColor) => void;
  toggleSquareIndices: (value?: boolean) => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  boardSide: "white",
  language: "fr",
  showSquareIndices: true,

  setLanguage: (language: Language) => set(() => ({ language })),
  toggleBoardSide: (value?: ChessColor) =>
    set((state) => ({
      boardSide: value !== undefined ? value : state.boardSide === "white" ? "black" : "white",
    })),
  toggleSquareIndices: (value?: boolean) =>
    set((state) => ({ showSquareIndices: value !== undefined ? value : !state.showSquareIndices })),
}));
