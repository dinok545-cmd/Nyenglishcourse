// vite.config.ts
export default defineConfig({
  base: '/Nyenglishcourse/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    middlewareMode: true,
  },
})
