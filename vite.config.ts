import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['src/assets/', 'favicon.svg', 'maskable.png', 'favicon-144.png', 'favicon-144.png', 'favicon-192.png', 'favicon-512.png'],
      manifest: {
        name: "Gevolg Market",
        short_name: "Gevolg Market",
        description: "Aplicativo para organizar e gerênciar listas de compras.",
        display: "standalone",
        background_color: "#9B7BFF",
        theme_color: "#9B7BFF",
        id: "/?source=pwa",
        start_url: "https://gevolg-market.vercel.app/",
        icons: [
          {
            src: "maskable.png",
            type: "image/png",
            sizes: "any",
            purpose: "maskable"
          },
          {
            src: "favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any"
          },
          {
            src: "favicon-144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "favicon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "favicon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ]
      }
    }),
  ],
})
