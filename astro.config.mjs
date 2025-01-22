import { defineConfig, envField } from "astro/config";




// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://links.itssofi.dev/",

  env: {
    schema: {
      YT_API_KEY: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    },
  },
});
