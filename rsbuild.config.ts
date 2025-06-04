import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './index.html',
    title: 'Wordzzle!',
    meta: {
      description: 'Crack the word, beat the clock, and level up your language',
    },
  },
});
