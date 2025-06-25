import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.'
        },
        {
          src: 'public/icons/16-Icon.png',
          dest: 'public/icons'
        },{
          src: 'public/icons/32-Icon.png',
          dest: 'public/icons'
        },
        {
          src: 'public/icons/48-Icon.png',
          dest: 'public/icons'
        },
        {
          src: 'public/icons/128-Icon.png',
          dest: 'public/icons'
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
