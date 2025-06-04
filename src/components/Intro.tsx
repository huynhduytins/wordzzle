import ModeOption from "./ModeOption";
import Name from "./Name";

export default function Intro() {
  return (
    <>
      <div className="cursor-custom">
        <Name />
        <p className="text-base font-serif bg-text px-2 rounded-[4px]">
          Crack the word, beat the clock, and level up your language
        </p>
      </div>
      <h2 className="font-serif text-2xl font-bold">Game Modes</h2>
      <ModeOption />
    </>
  );
}
