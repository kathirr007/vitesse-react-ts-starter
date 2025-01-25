import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import ViteRestartPlugin from 'vite-plugin-restart-2';
import { getComponentImports } from './auto-import-utils';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteRestartPlugin({
      restart: ['./src/components/**/*.*'],
      eventsToWatch: ['add', 'unlink']
    }),
    ViteRestartPlugin({
      restart: ['./src/hooks/**/*.*', './src/utils/**/*.*', './src/store/**/*.*']
    }),
    AutoImport({
      dts: './auto-imports.d.ts',
      defaultExportByFilename: false,
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      dirs: [
        './src/hooks/**',
        './src/utils/**',
        './src/store/**'
      ],
      eslintrc: {
        enabled: true
      },
      imports: [
        ...getComponentImports(),
        'react',
        'react-router',
        { 'usehooks-ts': ['useCounter', 'useDarkMode'] }
      ],
      dumpUnimportItems: true
    }),
    Pages({
      extendRoute(route, parent) {
        if (route.path === '/') {
          // Index is unauthenticated.
          return route;
        }

        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { layout: 'home' }
        };
      }
    }),
    react()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // '/api/': {
      //   target: 'http://127.0.0.1:9000',
      //   // target: 'https://brdev.fly.dev',
      //   changeOrigin: true,
      // },
    },
    port: 3000
  }
});
