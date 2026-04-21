import { ChessBoard, ChessBoardFrame } from "@/components/chess-board";
import { ChessCell } from "@/components/chess-cell";
import { ChessSideBadge } from "@/components/chess-side-badge";
import { useHighlights } from "@/hooks/use-highlights";
import { cn } from "@/lib/utils";
import { useSettingsStore } from "@/stores/settings.store";

function FullChessBoard({
  className,
  classNames,
}: {
  className?: string;
  classNames?: {
    frame?: string;
    board?: string;
  };
}) {
  const boardSide = useSettingsStore((state) => state.boardSide);
  const showSquareIndices = useSettingsStore((state) => state.showSquareIndices);

  const { highlighted, toggle } = useHighlights();

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <ChessSideBadge side={boardSide === "white" ? "black" : "white"} />

      <ChessBoardFrame className={cn("w-full", classNames?.frame)}>
        <ChessBoard
          className={classNames?.board}
          side={boardSide}
          renderCell={({ fIndex, rIndex, square }) => (
            <ChessCell
              key={square}
              square={showSquareIndices || highlighted.includes(square) ? square : ""}
              variant={(fIndex + rIndex) % 2 === 1 ? "dark" : "light"}
              onClick={() => toggle(square)}
            >
              <div className="absolute z-5 inset-0 bg-[#ffff00]/25 opacity-0 group-hover/cell:opacity-100 pointer-events-none" />
              {highlighted.includes(square) && (
                <div className="absolute z-5 inset-0 bg-[#ff00ff]/25 pointer-events-none" />
              )}
            </ChessCell>
          )}
        />
      </ChessBoardFrame>

      <ChessSideBadge side={boardSide === "white" ? "white" : "black"} />
    </div>
  );
}

export { FullChessBoard };
