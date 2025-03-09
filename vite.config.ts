import { defineConfig } from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
  },
  resolve: {
    alias: {
      process: path.resolve(__dirname, 'node_modules/process/browser'), // Polyfill the process object
    },
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      name: 'CosmosWidget',
      fileName: 'cosmos-widget',
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
