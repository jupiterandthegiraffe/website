import { defineConfig } from 'vite'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate'
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'main.js'),
      name: 'main-lib',
      // the proper extensions will be added
      fileName: 'main-lib'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['three', 'gsap', '@rive/canvas', 'pgia'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          gsap: 'gsap',
          rive: 'Rive',
          pgia: 'pgia'
        }
      }
    }
  }
})