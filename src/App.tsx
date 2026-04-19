import { ChessBoard, ChessBoardFrame } from "@/components/chess/chess_board";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#161512]">
      <div className="max-w-lg w-lg">
        <ChessBoardFrame>
          <ChessBoard side="black" />
        </ChessBoardFrame>
      </div>
    </div>
  );
}

export default App;
