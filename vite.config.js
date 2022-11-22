import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import {Plugin as importToCDN} from 'vite-plugin-cdn-import'

export default defineConfig({
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    }),
    importToCDN({
      modules: [
        {
          name: 'rive',
          var: 'rive',
          path: 'https://unpkg.com/@rive-app/canvas@1.0.79'
        }
      ],
  }),
  ]
})