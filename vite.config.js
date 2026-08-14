import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Yayın alt yolu (base):
//  - Kök alan adı için (ör. https://toprakguncesi.com) → '/'  (varsayılan)
//  - GitHub Pages için (https://elifcur.github.io/ToprakGuncesiAnaokulu/) → '/ToprakGuncesiAnaokulu/'
//
// GitHub Pages'e build almak için:
//   BASE_PATH=/ToprakGuncesiAnaokulu/ npm run build
//   (Windows PowerShell:  $env:BASE_PATH="/ToprakGuncesiAnaokulu/"; npm run build )
// Not: GitHub Actions bu değeri depo adından kendisi türetir (deploy.yml).
//
// https://vite.dev/config/
export default defineConfig({
  base: '/Anaokulu-Projesi/',
  plugins: [react()],
})
