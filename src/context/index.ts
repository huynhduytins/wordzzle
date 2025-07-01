import { STATUS } from "@constants";
import { createContext } from "react";

export type GameStatus = (typeof STATUS)[number];

export const GameContext = createContext<GameStatus>('intro');
