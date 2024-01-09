import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: [
        'src/index.ts',
      ],
      formats: ['es'],
      fileName: (format, entryName) =>
        format === 'es' ? `${entryName}.js` : `${entryName}.${format}`,
    },
    external: [
      'vue',
    ],
    output: {
      // disable warning on src/index.ts using both default and named export
      exports: 'named',
      globals: {
        vue: 'Vue',
      },
    },
    emptyOutDir: false, // to retain the types folder generated by tsc
  },
  plugins: [
    Vue(),
  ]
})
