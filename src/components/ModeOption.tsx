import { GameMode, getModeDescription, getModeIcon, getModeLabel } from "../utils";

export default function ModeOption({ mode }: { mode: GameMode }) {
  return (
    <button
      className="flex flex-col items-center border-border bg-border/75 hover:bg-border py-2 rounded-md cursor-active-custom"
      aria-label="Chilling mode: Relax, have fun, and build your vocabulary at your own pace"
    >
      <span className="font-semibold font-serif text-xl">
        <span role="img" aria-hidden="true">
          {getModeIcon(mode)}
        </span>{" "}
        {getModeLabel(mode)}
      </span>
      <span className="font-sans font-ligh text-subtle w-11/12">
        {getModeDescription(mode)}
      </span>
    </button>
  );
}
