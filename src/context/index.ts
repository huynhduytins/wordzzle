import { STATUS } from "@constants";
import { createContext } from "react";

export type GameSatus = (typeof STATUS)[number];

export const GameContext = createContext<GameSatus>('intro');
