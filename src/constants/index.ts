export const APP_NAME = "Wordzzle";

export const MODES = ["chill", "strike", "rush", "sprint"] as const;

export const STATUS = ["intro", ...MODES, "over"] as const;
