import { useState, useCallback } from "react";

export function useHighlights(initial: string[] = []) {
  const [highlighted, setHighlighted] = useState<string[]>(initial);

  const add = useCallback((square: string) => {
    setHighlighted((prev) => (prev.includes(square) ? prev : [...prev, square]));
  }, []);

  const remove = useCallback((square: string) => {
    setHighlighted((prev) => prev.filter((s) => s !== square));
  }, []);

  const toggle = useCallback((square: string) => {
    setHighlighted((prev) =>
      prev.includes(square) ? prev.filter((s) => s !== square) : [...prev, square],
    );
  }, []);

  const clear = useCallback(() => {
    setHighlighted([]);
  }, []);

  const set = useCallback((squares: string[]) => {
    setHighlighted(squares);
  }, []);

  return {
    highlighted,
    add,
    remove,
    toggle,
    clear,
    set,
  };
}
