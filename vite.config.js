import { defineConfig } from "vite";
import { fileURLToPath } from "url";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./index.html", import.meta.url)),
        about: fileURLToPath(new URL("./allfootwear.html", import.meta.url)),
      },
    },
  },
});
