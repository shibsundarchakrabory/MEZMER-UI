import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    base: '/',
  }

  if (command === 'build') {
    config.build = {
      lib: {
        entry: resolve(__dirname, "src/index.js"),
        name: "MezmerUI",
        formats: ["es", "umd"],
        fileName: (format) => `mezmer-ui.${format}.js`
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM"
          }
        }
      }
    }
  }

  return config
})
