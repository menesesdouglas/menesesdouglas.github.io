import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// PENDENTE (decisão #9): trocar pelo domínio real
const SITE = 'https://seudominio.com.br';

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },

  // Astro Fonts API. Em Astro >= 5.10 fica na raiz; em 5.7–5.9
  // mova este array para dentro de `experimental: { fonts: [...] }`.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [400, 500, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  ],
});