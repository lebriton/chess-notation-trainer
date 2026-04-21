import { Badge } from "@/components/ui/badge";
import type { ChessColor } from "@/types/chess.types";

function ChessSideBadge({ side }: { side: ChessColor }) {
  switch (side) {
    case "white":
      return (
        <Badge className="bg-white text-black">
          <img className="h-4" src="pieces/lichess/cburnett/wK.svg" alt="White" />
          White Side
        </Badge>
      );

    case "black":
      return (
        <Badge className="bg-black text-white">
          <img className="h-4" src="pieces/lichess/cburnett/bK.svg" alt="White" />
          Black Side
        </Badge>
      );
  }
}

export { ChessSideBadge };
