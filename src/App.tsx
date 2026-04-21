import { Layout } from "@/components/layout";
import { FullChessBoard } from "@/components/features/chess/full-chess-board";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { SettingsMenu } from "@/components/features/settings/settings-menu";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";

function A() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent>
          <div className="flex justify-between items-center">
            <Button size="lg">
              <PlayIcon /> Start Training
            </Button>

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
  );
}

function B() {
  return <FullChessBoard className="-mx-4 sm:mx-0" classNames={{ frame: "rounded-none" }} />;
}

function C() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <SettingsMenu />
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground [&>a]:underline [&>a]:hover:text-foreground">
        <a href="https://github.com/lebriton/chess-notation-trainer">Source Code on GitHub</a>{" "}
        &bull;{" "}
        <a href="https://github.com/lebriton/chess-notation-trainer/blob/main/LICENSE">
          MIT License
        </a>
      </p>
    </div>
  );
}

function App() {
  return <Layout className="m-4" a={<A />} b={<B />} c={<C />} />;
}

export default App;
