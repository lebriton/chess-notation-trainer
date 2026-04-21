import { ChessBoard, ChessBoardFrame } from "@/components/base/chess-board";
import { ChessCell } from "@/components/base/chess-cell";
import { ChessSideBadge } from "@/components/base/chess-side-badge";
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
              square={showSquareIndices ? square : "??"}
              variant={(fIndex + rIndex) % 2 === 1 ? "dark" : "light"}
              highlighted={highlighted.includes(square)}
              onClick={() => toggle(square)}
            />
          )}
        />{" "}
      </ChessBoardFrame>

      <ChessSideBadge side={boardSide === "white" ? "white" : "black"} />
    </div>
  );
}

export { FullChessBoard };
