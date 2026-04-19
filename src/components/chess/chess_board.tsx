import { useMemo, type ReactNode } from "react";
import { ChessCell } from "./chess_cell";
import { cn } from "@/lib/utils";
import { useHighlights } from "@/hooks/use-highlights";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

function ChessBoard({ side = "white" }: { side?: "white" | "black" }) {
  const { highlighted, toggle } = useHighlights();

  const board = useMemo(() => {
    const filesOrdered = side === "white" ? files : [...files].reverse();
    const ranksOrdered = side === "white" ? ranks : [...ranks].reverse();

    return ranksOrdered.map((rank, rIndex) =>
      filesOrdered.map((file, fIndex) => {
        const square = `${file}${rank}`;
        const variant = (fIndex + rIndex) % 2 === 1 ? "dark" : "light";

        return (
          <ChessCell
            key={square}
            square={square}
            variant={variant}
            highlighted={highlighted.includes(square)}
            onClick={() => toggle(square)}
          />
        );
      }),
    );
  }, [side, highlighted]);

  return <div className={cn("grid grid-cols-8")}>{board.flat()}</div>;
}

function ChessBoardFrame({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-md shadow-lg">{children}</div>;
}

export { ChessBoard, ChessBoardFrame };
