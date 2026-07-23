import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Yayın alt yolu (base):
//  - Kök alan adı için (ör. https://herendoga.com) → '/'  (varsayılan)
//  - GitHub Pages için (https://elifcur.github.io/Anaokulu-Projesi-/) → '/Anaokulu-Projesi-/'
//
// GitHub Pages'e build almak için:
//   BASE_PATH=/Anaokulu-Projesi-/ npm run build
//   (Windows PowerShell:  $env:BASE_PATH="/Anaokulu-Projesi-/"; npm run build )
//
// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
