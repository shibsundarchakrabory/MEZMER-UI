import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  if (command === 'build') {
    config.build = {
      lib: {
        entry: "src/index.js",
        name: "MezmerUI",
        fileName: "mezmer-ui"
      },
      rollupOptions: {
        external: ["react", "react-dom"]
      }
    }
  }

  return config
})
