// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages:
// - For a user site (repo named <username>.github.io): site = 'https://<username>.github.io', base = '/'
// - For a project site (any other repo name):         site = 'https://<username>.github.io', base = '/<repo-name>'
export default defineConfig({
  site: 'https://aarushhhs-tech.github.io',
  base: '/',
});
