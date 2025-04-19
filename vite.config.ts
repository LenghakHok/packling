import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import million from "million/compiler";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    million.vite({
      auto: true,
      hmr: import.meta.env.NODE_ENV === "developement",
      rsc: true,
      mode: "react",
      server: true
    })
  ]
});
