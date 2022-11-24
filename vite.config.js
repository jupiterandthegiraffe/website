import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['_pgbackup', '_pginfo'],
    force: true
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate'
    })
  ]
})