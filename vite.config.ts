import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Mock the `process.env` object
  },
  resolve: {
    alias: {
      // Add this line to resolve process
      process: 'process/browser',
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
