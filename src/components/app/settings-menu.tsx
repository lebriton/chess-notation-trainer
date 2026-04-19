import { useSettingsStore } from "@/stores/settings.store";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function SettingsMenu() {
  const boardSide = useSettingsStore((state) => state.boardSide);
  const showSquareIndices = useSettingsStore((state) => state.showSquareIndices);
  const toggleBoardSide = useSettingsStore((state) => state.toggleBoardSide);
  const toggleSquareIndices = useSettingsStore((state) => state.toggleSquareIndices);

  return (
    <div className="space-y-4">
      <ToggleGroup
        className="w-full"
        variant="outline"
        type="single"
        value={boardSide}
        onValueChange={toggleBoardSide}
      >
        <ToggleGroupItem className="h-12 flex-1" value="white" aria-label="Toggle white">
          <img className="h-8" src="pieces/lichess/cburnett/wK.svg" alt="White" />
        </ToggleGroupItem>
        <ToggleGroupItem className="h-12 flex-1" value="black" aria-label="Toggle black">
          <img className="h-8" src="pieces/lichess/cburnett/bK.svg" alt="Black" />
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="flex items-center space-x-2">
        <Switch
          id="display-coordinates"
          checked={showSquareIndices}
          onCheckedChange={toggleSquareIndices}
        />
        <Label htmlFor="display-coordinates">Display Coordinates</Label>
      </div>
    </div>
  );
}

export { SettingsMenu };
