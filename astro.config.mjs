import { defineConfig,envField } from 'astro/config';

import react from "@astrojs/react";

import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://links.itssofi.dev/",
  prefetch: true,
  output: "server",
  adapter: vercel(),
  experimental: {
    env: {
      schema: {
        YT_API_KEY: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
      },
    },
  },
});