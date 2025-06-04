import { MODES } from "@constants";

export type GameMode = (typeof MODES)[number];

export function getModeIcon(mode: GameMode) {
  switch (mode) {
    case "chill":
      return "🧘";
    case "strike":
      return "🎯";
    case "rush":
      return "🏃‍♂️";
    case "sprint":
      return "⚡";
    default:
      return "";
  }
}

export function getModeLabel(mode: GameMode) {
  switch (mode) {
    case "chill":
      return "Chilling";
    case "strike":
      return "Three Strikes";
    case "rush":
      return "Rush Riddle";
    case "sprint":
      return "Sprint Riddle";
    default:
      return mode;
  }
}

export function getModeDescription(mode: GameMode) {
  switch (mode) {
    case "chill":
      return "Chill out, have fun, and build your vocabulary";
    case "strike":
      return "You have just 3 lives to guess the words - use them wisely!";
    case "rush":
      return "You have just 3 lives and 10 seconds - make them count!";
    case "sprint":
      return "You have just 1 life and 60 seconds - How far can you go?";
    default:
      return "";
  }
}
