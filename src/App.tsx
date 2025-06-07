import GameStart from "@components/GameStart";
import { GameContext } from "./context";
import { useContext } from "react";
import GamePlay from "@components/GamePlay";
import GameOver from "@components/GameOver";

const App = () => {
  const gameStatus = useContext(GameContext);

  return (
    <GameContext value={gameStatus}>
      {gameStatus === "intro" && <GameStart />}
      {gameStatus === "play" && <GamePlay />}
      {gameStatus === "over" && <GameOver />}
    </GameContext>
  );
};

export default App;
