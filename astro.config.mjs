import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: 'https://tiffany-dby.github.io',
  base: 'entreprise-rody'
});