import { GameStatus } from "../context";
import {
  GameMode,
  getModeDescription,
  getModeIcon,
  getModeLabel,
} from "../utils";

type ModeOptionProps = {
  mode: GameMode;
  onSetGameStatus: (status: GameStatus) => void;
};

export default function ModeOption({ mode, onSetGameStatus }: ModeOptionProps) {
  return (
    <button
      className="flex flex-col items-center border-border bg-border/75 hover:bg-border py-2 rounded-md cursor-active-custom"
      aria-label="Chilling mode: Relax, have fun, and build your vocabulary at your own pace"
      onClick={() => {
        onSetGameStatus(mode);
      }}
    >
      <span className="font-semibold font-serif text-xl">
        <span role="img" aria-hidden="true">
          {getModeIcon(mode)}
        </span>{" "}
        {getModeLabel(mode)}
      </span>
      <span className="font-sans font-light text-subtle w-11/12">
        {getModeDescription(mode)}
      </span>
    </button>
  );
}
