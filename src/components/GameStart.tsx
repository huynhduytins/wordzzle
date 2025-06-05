import { MODES } from "@constants";
import ModeOption from "./ModeOption";
import Name from "./Name";

export default function GameStart() {
  return (
    <>
      <div className="mb-16">
        <Name />
        <p className="text-base font-serif bg-text px-2 rounded-[4px]">
          Crack the word, beat the clock, and level up your language
        </p>
      </div>
      <h2 className="font-serif text-2xl font-bold m-0">Game Modes</h2>
      <div className="grid grid-cols-2 gap-4 m-8">
        {MODES.map((mode) => (
          <ModeOption key={mode} mode={mode} />
        ))}
      </div>
    </>
  );
}
