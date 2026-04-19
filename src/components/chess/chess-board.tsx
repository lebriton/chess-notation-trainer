import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

function ChessBoard({
  className,
  side = "white",
  renderCell,
}: {
  className?: string;
  side?: "white" | "black";
  renderCell: (args: {
    file: string;
    rank: number;
    fIndex: number;
    rIndex: number;
    square: string;
  }) => ReactNode;
}) {
  const filesOrdered = side === "white" ? files : [...files].reverse();
  const ranksOrdered = side === "white" ? ranks : [...ranks].reverse();

  const board = ranksOrdered.map((rank, rIndex) =>
    filesOrdered.map((file, fIndex) =>
      renderCell({
        file,
        rank,
        fIndex,
        rIndex,
        square: `${file}${rank}`,
      }),
    ),
  );

  return <div className={cn("grid grid-cols-8", className)}>{board.flat()}</div>;
}

function ChessBoardFrame({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-sm overflow-hidden sm:rounded-md", className)}>{children}</div>
  );
}

export { ChessBoard, ChessBoardFrame };
