import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [auth()],
});