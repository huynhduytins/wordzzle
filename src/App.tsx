import GameStart from "@components/GameStart";
import { GameContext, GameStatus } from "./context";
import { useState } from "react";
import GamePlay from "@components/GamePlay";
import GameOver from "@components/GameOver";

const App = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>("intro");

  return (
    <GameContext value={gameStatus}>
      {gameStatus === "intro" && (
        <GameStart
          onSetGameStatus={(status: GameStatus) => {
            setGameStatus(status);
          }}
        />
      )}
      {!["intro", "over"].includes(gameStatus) && (
        <GamePlay mode={gameStatus} />
      )}
      {gameStatus === "over" && <GameOver />}
    </GameContext>
  );
};

export default App;
