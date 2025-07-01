import { ArrowLeft, Infinity, Volume2, VolumeXIcon } from "lucide-react";
import { GameStatus } from "../context";

type GamePlayProps = {
  mode: Omit<GameStatus, "intro" | "over">;
};
export default function GamePlay({ mode }: GamePlayProps) {
  return (
    <div className="flex">
      <ArrowLeft />
      <Volume2/>
      <VolumeXIcon/>
      <Infinity/>
    </div>
  );
}
