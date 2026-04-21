import { Layout } from "@/components/layout";
import { FullChessBoard } from "@/components/features/chess/full-chess-board";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { SettingsMenu } from "@/components/features/settings/settings-menu";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import { BigText } from "./components/big-text";

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
  return (
    <div className="relative">
      <FullChessBoard className="-mx-4 sm:mx-0" classNames={{ frame: "rounded-none" }} />

      <BigText
        className="absolute top-1/2 left-1/2 -translate-1/2 z-10 pointer-events-none"
        text="g7"
      />
    </div>
  );
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
  return (
    <div className="m-4">
      <Layout className="w-full max-w-360 mx-auto" a={<A />} b={<B />} c={<C />} />
    </div>
  );
}

export default App;
