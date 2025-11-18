import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/HackviSion/",   // 👉 yaha EXACT tumhare GitHub repo ka naam
  plugins: [react()],
})

