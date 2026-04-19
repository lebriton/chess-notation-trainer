import { ChessBoard, ChessBoardFrame } from "@/components/chess/chess-board";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#161512]">
      <div className="max-w-lg w-lg p-4">
        <ChessBoardFrame>
          <ChessBoard />
        </ChessBoardFrame>
      </div>
    </div>
  );
}

export default App;
