import { ChessBoard, ChessBoardFrame } from "@/components/chess/chess-board";
import { useHighlights } from "@/hooks/use-highlights";
import { ChessCell } from "@/components/chess/chess-cell";
import { Layout } from "@/components/layout";
import { useSettingsStore } from "@/stores/settings.store";
import { SettingsMenu } from "@/components/app/settings-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  const boardSide = useSettingsStore((state) => state.boardSide);
  const showSquareIndices = useSettingsStore((state) => state.showSquareIndices);

  const { highlighted, toggle } = useHighlights();

  return (
    <Layout>
      <div className="w-full flex flex-wrap gap-6 max-w-7xl">
        <div className="w-full lg:flex-1 order-3 xl:order-1 space-y-6">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <SettingsMenu />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="basis-full lg:basis-2xl order-1 lg:order-2">
          <div className="w-full max-w-2xl mx-auto space-y-6">
            <ChessBoardFrame className="-mx-4 rounded-none sm:mx-0">
              <ChessBoard
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
          </div>
        </div>

        <div className="w-full xl:flex-1 order-1 xl:order-3">
          <div className="mx-auto max-w-2xl lg:max-w-none space-y-6">
            <Card>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Button size="lg">Start Training</Button>

                  <span className="font-light text-2xl">
                    30:000 <span className="text-base text-muted-foreground">s</span>
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Score</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-6xl font-thin">0</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
