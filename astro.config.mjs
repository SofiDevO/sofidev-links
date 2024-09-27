import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://links.itssofi.dev/",
  prefetch: true,
  output: "server",
  // adapter: vercel(),
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    env: {
      schema: {
        EMAIL_HOST: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL_PASS: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        EMAIL_PORT: envField.number({
          context: "server",
          access: "secret",
          optional: false,
        }),
        PUBLIC_BACKEND_URL: envField.string({
          context: "server",
          access: "secret",
          optional: false,
        }),
        YT_API_KEY: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
      },
    },
  },
});
