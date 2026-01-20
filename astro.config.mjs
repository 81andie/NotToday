import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
   output: 'server',
  adapter: vercel(),
  integrations: [mdx(), tailwind(), react()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
    },
  },
});
