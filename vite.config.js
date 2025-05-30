// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
     server: {
    port: 3000,
  },
});
